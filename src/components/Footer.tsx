import { Github, Linkedin } from './icons';

export default function Footer() {
  return (
    <footer className="border-t border-[#242A33] bg-[#07090D] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display font-bold text-lg text-white tracking-tight">
              SANJAY S
            </h3>
            <p className="font-mono text-xs text-[#8B95A5] uppercase tracking-wider">
              Software Engineer · Full-Stack · Backend · DevOps
            </p>
          </div>

          <div className="flex items-center gap-4 text-[#8B95A5]">
            <a
              href="https://github.com/Sanjayshaa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D1117] border border-[#242A33] hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-s16/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D1117] border border-[#242A33] hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <div className="font-mono text-xs text-[#8B95A5]">
            &copy; 2026 Sanjay S. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
