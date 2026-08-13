import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, FileText, ArrowUpRight } from 'lucide-react';
import { Github } from './icons';
import './Navbar.css';

interface NavbarProps {
  onOpenResume?: () => void;
}

function MagneticNavItem({
  href,
  label,
  isActive,
  mouseX,
}: {
  href: string;
  label: string;
  isActive: boolean;
  mouseX: any;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const mouseDistance = useTransform(mouseX, (val: number) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 60 };
    return val - rect.x - rect.width / 2;
  });

  const scale = useSpring(
    useTransform(mouseDistance, [-120, 0, 120], [1, 1.15, 1]),
    { mass: 0.1, stiffness: 150, damping: 12 }
  );

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ scale }}
      className={`top-nav-item ${isActive ? 'active' : ''}`}
    >
      <span>{label}</span>
    </motion.a>
  );
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'skills', 'education', 'github', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'WORK', href: '#projects', id: 'projects' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'EDUCATION', href: '#education', id: 'education' },
  ];

  return (
    <div className="top-nav-wrapper">
      <motion.nav
        onMouseMove={({ clientX }) => mouseX.set(clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="top-nav-panel"
        aria-label="Primary top navigation"
      >
        {/* Editorial Logo */}
        <a href="#hero" className="flex items-center gap-2 pl-2 pr-3 py-1 text-white font-display font-extrabold text-sm tracking-tight">
          <div className="p-1 rounded-md bg-[#07090D] border border-[#242A33] text-[#A78BFA]">
            <Code2 size={15} />
          </div>
          <span>SANJAY<span className="text-[#A78BFA]">.S</span></span>
        </a>

        {/* Desktop Magnetic Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <MagneticNavItem
              key={item.label}
              href={item.href}
              label={item.label}
              isActive={activeSection === item.id}
              mouseX={mouseX}
            />
          ))}
        </div>

        {/* Right Side Utility Actions */}
        <div className="flex items-center gap-1.5 pl-2 border-l border-[#242A33]">
          <a
            href="https://github.com/Sanjayshaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono text-[#8B95A5] hover:text-white transition-colors"
          >
            <Github size={14} />
            <span>GITHUB</span>
            <ArrowUpRight size={12} />
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono text-[#8B95A5] hover:text-white transition-colors"
          >
            <span>CONTACT</span>
          </a>

          <button
            onClick={onOpenResume}
            className="top-nav-resume-btn"
            type="button"
          >
            <FileText size={13} />
            <span>RESUME</span>
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
