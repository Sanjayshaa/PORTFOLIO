import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FileText, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './icons';

export default function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-mesh">
      {/* Background glowing decorations */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-medium text-purple-400">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for Internships & Full-time Roles
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight text-white"
          >
            Hi, I'm <span className="text-gradient">Sanjay S</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-3xl font-semibold text-zinc-300 max-w-2xl mx-auto font-display"
          >
            Full Stack Developer <span className="text-purple-400">|</span> Software Engineering Aspirant
          </motion.h2>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed"
          >
            Information Technology student passionate about software engineering, building robust full-stack systems, and engineering elegant solutions.
          </motion.p>

          {/* Buttons / CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            {/* Resume Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 hover:-translate-y-0.5 group"
            >
              <FileText size={18} className="group-hover:scale-110 transition-transform" />
              <span>Get in Touch</span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/sanjayshaa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 glass-panel hover:bg-zinc-800/80 text-white font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 glass-panel hover:bg-zinc-800/80 text-white font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
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
