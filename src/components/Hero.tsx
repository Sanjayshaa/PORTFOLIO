import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Terminal, ArrowUpRight, FileText, Cpu, Server, Database, Container } from 'lucide-react';
import { Github } from './icons';
import SpecularButton from './reactbits/SpecularButton';
import ModelViewer from './reactbits/ModelViewer';

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
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left Column - Large Confident Typography & Narrative */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 font-mono text-xs text-[#A78BFA] tracking-widest uppercase font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA] animate-ping" />
              <span>SANJAY S · FULL-STACK &amp; SOFTWARE DEVELOPER</span>
            </motion.div>

            {/* Big Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06]"
            >
              I build software systems <br />
              <span className="text-gradient">that solve real problems.</span>
            </motion.h1>

            {/* Concise Supporting Statement */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#8B95A5] max-w-xl leading-relaxed font-sans"
            >
              Information Technology undergraduate focused on building robust full-stack web applications, backend REST APIs, relational datastores, and containerized developer infrastructure.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Primary CTA: VIEW WORK */}
              <a href="#projects">
                <SpecularButton
                  size="lg"
                  radius={12}
                  tint="#a855f7"
                  tintOpacity={0.25}
                  blur={16}
                  textColor="#ffffff"
                  lineColor="#a855f7"
                  baseColor="#3b82f6"
                  intensity={1.5}
                  thickness={1.5}
                  speed={0.4}
                  followMouse={true}
                  proximity={300}
                >
                  <Terminal size={18} className="text-purple-300" />
                  <span>VIEW WORK</span>
                </SpecularButton>
              </a>

              {/* Secondary CTA: CONTACT ME */}
              <a href="#contact">
                <SpecularButton
                  size="lg"
                  radius={12}
                  tint="#0D1117"
                  tintOpacity={0.6}
                  blur={16}
                  textColor="#ffffff"
                  lineColor="#ffffff"
                  baseColor="#242A33"
                  intensity={1.2}
                  thickness={1}
                  speed={0.35}
                  followMouse={true}
                >
                  <span>CONTACT ME</span>
                </SpecularButton>
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/Sanjayshaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-[#242A33] hover:border-purple-500/40 bg-[#0D1117]/80 text-[#8B95A5] hover:text-white font-mono text-xs tracking-wider uppercase transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>

              {/* Resume Trigger */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-[#242A33] hover:border-purple-500/40 bg-[#0D1117]/80 text-[#8B95A5] hover:text-white font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                <FileText size={16} className="text-purple-400" />
                <span>Resume</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column - 3D Tech Core & Engineering System Visual */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#0D1117] border border-[#242A33] p-6 space-y-6 overflow-hidden shadow-2xl backdrop-blur-xl">
              
              {/* Top Beam Accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />

              {/* Interactive 3D ModelViewer Canvas */}
              <div className="h-[240px] w-full rounded-xl bg-[#07090D] border border-[#242A33] relative overflow-hidden flex items-center justify-center">
                <ModelViewer
                  enableMouseParallax={true}
                  enableManualRotation={true}
                  enableHoverRotation={true}
                  enableManualZoom={true}
                  autoFrame={true}
                  fadeIn={true}
                  autoRotate={true}
                  showScreenshotButton={false}
                  autoRotateSpeed={0.35}
                />
              </div>

              {/* Dynamic System Nodes Stream */}
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-[#07090D] border border-[#242A33] flex items-center gap-2">
                  <Cpu size={14} className="text-purple-400" />
                  <span className="text-white font-bold">SYSTEMS</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#07090D] border border-[#242A33] flex items-center gap-2">
                  <Server size={14} className="text-blue-400" />
                  <span className="text-white font-bold">REST APIs</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#07090D] border border-[#242A33] flex items-center gap-2">
                  <Database size={14} className="text-emerald-400" />
                  <span className="text-white font-bold">DATASTORES</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#07090D] border border-[#242A33] flex items-center gap-2">
                  <Container size={14} className="text-cyan-400" />
                  <span className="text-white font-bold">CONTAINERS</span>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
