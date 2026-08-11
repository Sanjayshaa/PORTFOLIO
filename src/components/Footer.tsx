import { Mail } from 'lucide-react';
import { Github, Linkedin } from './icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Branding */}
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-lg text-white">
              Sanjay<span className="text-purple-500">.</span>S
            </span>
            <p className="text-zinc-500 text-xs mt-1.5">
              Full Stack Developer & IT Student.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sanjayshaa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-purple-500/20 text-zinc-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-s16/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-purple-500/20 text-zinc-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:sanjaysha9468@gmail.com"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-purple-500/20 text-zinc-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/5 text-[10px] sm:text-xs text-zinc-500">
          <span>&copy; {currentYear} Sanjay S. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
