import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, Server, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import { Github } from './icons';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0D1117] border border-[#242A33] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#242A33] bg-[#07090D]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest font-semibold">
                CASE STUDY 01
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-white">
                Digital Lab Record System
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-10 font-sans text-zinc-300 text-sm leading-relaxed">
            
            {/* Project Banner Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#242A33] bg-[#07090D]">
              <img
                src="/images/lab_record_mockup.png"
                alt="Digital Lab Record System"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 01 OVERVIEW */}
            <div className="space-y-3 border-l-2 border-purple-500/60 pl-4 sm:pl-6">
              <span className="font-mono text-xs text-purple-400 font-semibold uppercase tracking-widest">
                01 / OVERVIEW
              </span>
              <h3 className="font-display text-xl font-bold text-white">
                Full-Stack Academic Laboratory &amp; Assessment Management Platform
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                An end-to-end web platform designed to digitize manual lab experiment workflows, facilitate role-based student &amp; faculty submissions, enforce authentication access controls, and provide automated multi-language code evaluation.
              </p>
            </div>

            {/* 02 PROBLEM STATEMENT */}
            <div className="space-y-3 border-l-2 border-blue-500/60 pl-4 sm:pl-6">
              <span className="font-mono text-xs text-blue-400 font-semibold uppercase tracking-widest">
                02 / THE PROBLEM
              </span>
              <h3 className="font-display text-xl font-bold text-white">
                Fragmented Documentation &amp; Manual Verification Bottlenecks
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Traditional university computer lab evaluation relies on printed records, manual grade calculations, and unverified student code submissions. This causes administrative delays, grading discrepancies, and lack of real-time progress tracking for department faculties.
              </p>
            </div>

            {/* 03 SYSTEM ARCHITECTURE DIAGRAM */}
            <div className="space-y-4 bg-[#07090D] p-6 rounded-xl border border-[#242A33]">
              <span className="font-mono text-xs text-purple-400 font-semibold uppercase tracking-widest block mb-2">
                03 / SYSTEM ARCHITECTURE
              </span>
              
              {/* Diagram Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs font-mono">
                <div className="p-3 rounded-lg bg-[#0D1117] border border-[#242A33] text-purple-300">
                  <span className="block font-bold mb-1">FRONTEND</span>
                  React + TypeScript
                </div>
                <div className="hidden sm:flex items-center justify-center text-zinc-600">
                  <ArrowRight size={18} />
                </div>
                <div className="p-3 rounded-lg bg-[#0D1117] border border-[#242A33] text-blue-300">
                  <span className="block font-bold mb-1">REST API</span>
                  Node.js + Express
                </div>
                <div className="hidden sm:flex items-center justify-center text-zinc-600">
                  <ArrowRight size={18} />
                </div>
                <div className="p-3 rounded-lg bg-[#0D1117] border border-[#242A33] text-emerald-300">
                  <span className="block font-bold mb-1">DATABASE &amp; AUTH</span>
                  PostgreSQL / Supabase
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-zinc-500 font-mono">
                + Isolated Multi-Language Code Execution Sandbox (Docker Containers)
              </div>
            </div>

            {/* 04 KEY ENGINEERING ACHIEVEMENTS */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-widest">
                04 / KEY ENGINEERING ACHIEVEMENTS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#07090D] border border-[#242A33] space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <ShieldCheck size={16} />
                    <span>Role-Based Workflows</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Granular permissions for Students (submissions), Faculty (grading &amp; overrides), and Admins (batch &amp; curriculum setup).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#07090D] border border-[#242A33] space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                    <Code size={16} />
                    <span>Docker Code Execution Sandbox</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Isolated multi-language execution runtimes in Docker containers to execute student code safely without host system vulnerability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#07090D] border border-[#242A33] space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <Server size={16} />
                    <span>AI-Assisted Assessment</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Automated code analysis &amp; evaluation assistance with direct faculty override support for controlled grading flexibility.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#07090D] border border-[#242A33] space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Database size={16} />
                    <span>Normalized Relational Data Models</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    PostgreSQL schemas managing experiment records, student submissions, evaluation history, and faculty marks analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* 05 TECH STACK */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-widest">
                05 / TECHNOLOGIES USED
              </span>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Docker', 'REST APIs', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#07090D] border border-[#242A33] text-xs font-mono text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer CTAs */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#242A33] bg-[#07090D]">
            <a
              href="https://github.com/Sanjayshaa/LAB-RECORD-SYSTEM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D1117] border border-[#242A33] hover:border-purple-500/40 text-white font-medium text-xs sm:text-sm transition-all"
            >
              <Github size={16} />
              <span>View GitHub Repository</span>
              <ExternalLink size={14} className="text-zinc-500" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
