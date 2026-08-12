import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, FileText, ArrowUpRight } from 'lucide-react';
import SpecularButton from './reactbits/SpecularButton';

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  onOpenResume?: () => void;
}

const navLinks: NavLink[] = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
];

function MagneticNavItem({
  link,
  isActive,
  mouseX,
  prefersReduced
}: {
  link: NavLink;
  isActive: boolean;
  mouseX: any;
  prefersReduced: boolean;
}) {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const baseSize = 70;
  const distance = 160;

  const mouseDistance = useTransform(mouseX, (val: number) => {
    const rect = itemRef.current?.getBoundingClientRect() ?? { x: 0, width: baseSize };
    return val - (rect.x + rect.width / 2);
  });

  const targetScale = useTransform(mouseDistance, [-distance, 0, distance], [1.0, 1.12, 1.0]);
  const targetY = useTransform(mouseDistance, [-distance, 0, distance], [0, -2, 0]);

  const scale = useSpring(targetScale, { mass: 0.15, stiffness: 180, damping: 14 });
  const y = useSpring(targetY, { mass: 0.15, stiffness: 180, damping: 14 });

  return (
    <motion.a
      ref={itemRef}
      href={link.href}
      style={{
        scale: prefersReduced ? 1 : scale,
        y: prefersReduced ? 0 : y,
      }}
      className={`relative px-4 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full transition-colors duration-200 inline-block cursor-pointer select-none ${
        isActive ? 'text-white font-bold' : 'text-[#8B95A5] hover:text-white'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {isActive && (
        <motion.span
          layoutId="activeNavBackground"
          className="absolute inset-0 bg-[#242A33] border border-purple-500/30 rounded-full -z-10 shadow-sm shadow-purple-500/20"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span>{link.name}</span>
    </motion.a>
  );
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [prefersReduced, setPrefersReduced] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener('change', handler);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['projects', 'about', 'skills', 'education', 'github', 'contact'];
      let currentSection = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      mediaQuery.removeEventListener('change', handler);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090D]/85 backdrop-blur-xl py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
      aria-label="Main Portfolio Header Navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* LEFT: Brand Logo */}
          <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-colors">
              <Code2 size={18} />
            </div>
            <span className="font-display font-extrabold text-lg tracking-tight text-white">
              SANJAY<span className="text-purple-400">.S</span>
            </span>
          </a>

          {/* CENTER: Magnetic Dock-Style Center Navigation */}
          <div
            ref={navContainerRef}
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="hidden md:flex items-center gap-1.5 bg-[#0D1117]/85 backdrop-blur-xl p-1.5 rounded-full border border-[#242A33] shadow-lg"
            role="menubar"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <MagneticNavItem
                  key={link.name}
                  link={link}
                  isActive={isActive}
                  mouseX={mouseX}
                  prefersReduced={prefersReduced}
                />
              );
            })}
          </div>

          {/* RIGHT: Utility Action Links */}
          <div className="hidden md:flex items-center gap-3">
            {/* GitHub ↗ */}
            <motion.a
              whileHover={prefersReduced ? {} : { scale: 1.05 }}
              whileTap={prefersReduced ? {} : { scale: 0.98 }}
              href="https://github.com/Sanjayshaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono tracking-wider uppercase text-[#8B95A5] hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-[#0D1117]"
            >
              <span>GitHub</span>
              <ArrowUpRight size={14} className="text-purple-400" />
            </motion.a>

            {/* Contact */}
            <motion.a
              whileHover={prefersReduced ? {} : { scale: 1.05 }}
              whileTap={prefersReduced ? {} : { scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-1 text-xs font-mono tracking-wider uppercase text-[#8B95A5] hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-[#0D1117]"
            >
              <span>Contact</span>
            </motion.a>

            {/* Resume Trigger CTA */}
            <SpecularButton
              size="sm"
              radius={999}
              tint="#a855f7"
              tintOpacity={0.2}
              blur={12}
              textColor="#f5f5f5"
              lineColor="#a855f7"
              baseColor="#581c87"
              intensity={1.4}
              thickness={1.2}
              onClick={onOpenResume}
            >
              <FileText size={14} />
              <span>Resume</span>
            </SpecularButton>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <SpecularButton
              size="sm"
              radius={999}
              tint="#a855f7"
              tintOpacity={0.15}
              blur={12}
              textColor="#e9d5ff"
              lineColor="#c084fc"
              baseColor="#581c87"
              intensity={1.3}
              thickness={1.2}
              onClick={onOpenResume}
            >
              <FileText size={13} />
              <span>Resume</span>
            </SpecularButton>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-[#242A33] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D1117] border-b border-[#242A33]"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-mono tracking-wider uppercase text-zinc-300 hover:text-white hover:bg-[#242A33]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://github.com/Sanjayshaa"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-mono tracking-wider uppercase text-zinc-300 hover:text-white hover:bg-[#242A33]"
              >
                <span>GitHub</span>
                <ArrowUpRight size={14} className="text-purple-400" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-mono tracking-wider uppercase text-zinc-300 hover:text-white hover:bg-[#242A33]"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
