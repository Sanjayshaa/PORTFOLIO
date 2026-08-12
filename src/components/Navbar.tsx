import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, FileText } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');

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
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'GitHub ↗', href: '#github', id: 'github' },
    { label: 'Contact', href: '#contact', id: 'id: contact' },
  ];

  return (
    <div className="top-nav-wrapper">
      <motion.nav
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

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`top-nav-item ${isActive ? 'active' : ''}`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Resume Trigger CTA */}
        <button
          onClick={onOpenResume}
          className="top-nav-resume-btn ml-1"
          type="button"
        >
          <FileText size={14} />
          <span>Resume</span>
        </button>
      </motion.nav>
    </div>
  );
}
