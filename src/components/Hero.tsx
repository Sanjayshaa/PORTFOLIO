import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FileText, ArrowDown, Code2, Sparkles, Terminal, Layers } from 'lucide-react';
import { Github, Linkedin } from './icons';
interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent">
      {/* Ambient background glow accents */}
      <div className="absolute top-[15%] left-[10%] w-[320px] h-[320px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-[15%] right-[10%] w-[380px] h-[380px] bg-blue-600/15 rounded-full blur-[140px] animate-pulse-slow pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Status Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs sm:text-sm font-medium text-purple-300 border border-purple-500/20 shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <Sparkles size={14} className="text-purple-400" />
            <span>Available for Internships & Full-time Roles</span>
          </motion.div>

          {/* Name & Title Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">Sanjay S</span>
            </h1>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 font-display">
              Full Stack Developer &amp; Software Engineer
            </h2>
          </motion.div>

          {/* Bio Intro */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Information Technology undergraduate specializing in full-stack web applications, AI-assisted tools, and containerized DevOps infrastructure.
          </motion.p>

          {/* Action CTAs - Pro Level Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-4"
          >
            {/* View Resume Button - Pro Level Primary */}
            <button
              onClick={onOpenResume}
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none cursor-pointer w-full sm:w-auto shadow-xl shadow-purple-500/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 rounded-xl group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow" />
              <div className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-zinc-950/90 rounded-xl text-white font-semibold text-sm backdrop-blur-xl group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                <FileText size={18} className="text-purple-400 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                <span>Preview Resume</span>
              </div>
            </button>

            {/* Explore Projects Button - Pro Level Secondary */}
            <a
              href="#projects"
              className="relative group rounded-xl px-6 py-3.5 bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 hover:border-purple-500/40 text-white font-medium text-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2.5 w-full sm:w-auto"
            >
              <Terminal size={18} className="text-purple-400 group-hover:text-purple-300 group-hover:rotate-6 transition-transform duration-300" />
              <span>Explore Projects</span>
            </a>

            {/* GitHub Button - Pro Level Social */}
            <a
              href="https://github.com/Sanjayshaa"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-xl px-5 py-3.5 bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 hover:border-purple-500/40 text-white font-medium text-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn Button - Pro Level Social */}
            <a
              href="https://www.linkedin.com/in/sanjay-s16/" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-xl px-5 py-3.5 bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 hover:border-blue-500/40 text-white font-medium text-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Linkedin size={18} className="text-blue-400 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            variants={itemVariants}
            className="pt-8 max-w-3xl mx-auto grid grid-cols-3 gap-4"
          >
            <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-purple-400">
                <Code2 size={16} />
                <span className="font-bold text-lg text-white font-display">3+</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider">Full-Stack Apps</p>
            </div>
            
            <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-blue-400">
                <Layers size={16} />
                <span className="font-bold text-lg text-white font-display">12+</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider">Tech Ecosystem</p>
            </div>

            <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400">
                <Sparkles size={16} />
                <span className="font-bold text-lg text-white font-display">2027</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider">B.Tech IT Grad</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer z-10"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
