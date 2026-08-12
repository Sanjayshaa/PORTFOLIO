import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['projects', 'about', 'skills', 'education', 'github', 'contact'];
      let currentSection = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-navbar py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-colors">
              <Code2 size={18} />
            </div>
            <span className="font-display font-extrabold text-lg tracking-tight text-white">
              SANJAY<span className="text-purple-400">.S</span>
            </span>
          </a>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#0D1117]/80 p-1.5 rounded-full border border-[#242A33]">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full transition-colors duration-200 ${
                    isActive ? 'text-white font-bold' : 'text-[#8B95A5] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-[#242A33] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Sanjayshaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono tracking-wider uppercase text-[#8B95A5] hover:text-white transition-colors px-2 py-1"
            >
              <span>GitHub</span>
              <ArrowUpRight size={14} className="text-purple-400" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-xs font-mono tracking-wider uppercase text-[#8B95A5] hover:text-white transition-colors px-2 py-1"
            >
              <span>Contact</span>
            </a>

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
              aria-label="Toggle Menu"
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
