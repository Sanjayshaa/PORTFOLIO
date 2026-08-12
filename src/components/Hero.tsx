import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Terminal, ArrowUpRight, FileText, Cpu, Container, CheckCircle2 } from 'lucide-react';
import { Github } from './icons';

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          
          {/* Left Column - Headline, Narrative & Fixed Horizontal CTA Row */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 font-mono text-xs text-[#A78BFA] tracking-widest uppercase font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA] animate-ping" />
              <span>SANJAY S · B.TECH INFORMATION TECHNOLOGY</span>
            </motion.div>

            {/* Big Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
              I build software systems <br />
              <span className="text-gradient">that solve real problems.</span>
            </motion.h1>

            {/* Concise Supporting Statement */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#8B95A5] max-w-xl leading-relaxed font-sans"
            >
              Information Technology undergraduate with practical experience across full-stack web applications, backend REST APIs, relational datastores, and Docker containerized infrastructure.
            </motion.p>

            {/* FIXED CTA BUTTONS — STRICTLY ONE HORIZONTAL ROW ON DESKTOP */}
            <motion.div
              variants={itemVariants}
              className="pt-2 w-full"
            >
              <div className="flex flex-col sm:flex-row lg:flex-nowrap items-stretch sm:items-center gap-3 w-full max-w-full">
                
                {/* 1. PRIMARY: VIEW WORK */}
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-purple-500/25 whitespace-nowrap cursor-pointer"
                >
                  <Terminal size={16} />
                  <span>VIEW WORK</span>
                </a>

                {/* 2. SECONDARY: CONTACT ME */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#242A33] hover:border-purple-500/40 bg-[#0D1117] hover:bg-[#161B22] text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>CONTACT ME</span>
                </a>

                {/* 3. TERTIARY: GITHUB */}
                <a
                  href="https://github.com/Sanjayshaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl border border-[#242A33] hover:border-purple-500/40 bg-[#0D1117] hover:bg-[#161B22] text-[#8B95A5] hover:text-white font-mono text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Github size={16} />
                  <span>GITHUB</span>
                  <ArrowUpRight size={13} />
                </a>

                {/* 4. TERTIARY: RESUME */}
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl border border-[#242A33] hover:border-purple-500/40 bg-[#0D1117] hover:bg-[#161B22] text-[#8B95A5] hover:text-white font-mono text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer"
                  type="button"
                >
                  <FileText size={16} className="text-[#A78BFA]" />
                  <span>RESUME</span>
                </button>

              </div>
            </motion.div>

          </div>

          {/* Right Column - Purposeful System Architecture Visual (Option A / B) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#0D1117] border border-[#242A33] p-6 space-y-5 overflow-hidden shadow-2xl backdrop-blur-xl">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />

              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-[#242A33] pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#07090D] border border-[#242A33] text-[#A78BFA]">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-white text-xs uppercase tracking-wider">SYSTEM ARCHITECTURE</h3>
                    <p className="font-mono text-[11px] text-[#8B95A5]">Digital Lab Evaluation Pipeline</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ACTIVE RUNTIME</span>
                </span>
              </div>

              {/* Architecture Flow Diagram (Frontend → API → Database → Docker Sandbox) */}
              <div className="space-y-2.5 font-mono text-xs">
                
                {/* Step 1: Frontend */}
                <div className="p-3 rounded-xl bg-[#07090D] border border-[#242A33] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-purple-400" />
                    <span className="font-bold text-white">01 / FRONTEND</span>
                  </div>
                  <span className="text-[11px] text-[#8B95A5]">React · TypeScript · Vite</span>
                </div>

                {/* Connection Arrow */}
                <div className="flex justify-center text-[#8B95A5] text-[10px]">↓ HTTP / REST API Request</div>

                {/* Step 2: Backend API */}
                <div className="p-3 rounded-xl bg-[#07090D] border border-[#242A33] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="font-bold text-white">02 / BACKEND API</span>
                  </div>
                  <span className="text-[11px] text-[#8B95A5]">Node.js · Express / FastAPI</span>
                </div>

                {/* Connection Arrow */}
                <div className="flex justify-center text-[#8B95A5] text-[10px]">↓ ORM / Datastore Queries</div>

                {/* Step 3: Database */}
                <div className="p-3 rounded-xl bg-[#07090D] border border-[#242A33] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="font-bold text-white">03 / DATASTORE</span>
                  </div>
                  <span className="text-[11px] text-[#8B95A5]">PostgreSQL / Supabase</span>
                </div>

                {/* Connection Arrow */}
                <div className="flex justify-center text-[#8B95A5] text-[10px]">↓ Isolated Container Execution</div>

                {/* Step 4: Docker Execution Engine */}
                <div className="p-3 rounded-xl bg-[#07090D] border border-cyan-500/30 flex items-center justify-between bg-cyan-500/5">
                  <div className="flex items-center gap-2.5">
                    <Container size={14} className="text-cyan-400" />
                    <span className="font-bold text-cyan-300">04 / DOCKER EXECUTION</span>
                  </div>
                  <span className="text-[11px] text-cyan-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 size={12} />
                    <span>Isolated Code Sandbox</span>
                  </span>
                </div>

              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
