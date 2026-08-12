import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FileText, Terminal, ArrowUpRight } from 'lucide-react';
import { Github } from './icons';
import SpecularButton from './reactbits/SpecularButton';
import EngineerCard from './EngineerCard';

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left Column - Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-400 tracking-widest uppercase font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping" />
                <span>SOFTWARE ENGINEER · FULL-STACK · BACKEND · DEVOPS</span>
              </div>

              {/* Big Editorial Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                I build software systems <br />
                <span className="text-gradient">that solve real problems.</span>
              </h1>
            </motion.div>

            {/* Narrative Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#8B95A5] max-w-xl leading-relaxed font-sans"
            >
              Information Technology undergraduate focused on full-stack web applications, backend system architecture, API automation, and containerized developer infrastructure.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Explore Selected Work */}
              <a href="#projects">
                <SpecularButton
                  size="lg"
                  radius={14}
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
                  <span>View Selected Work</span>
                </SpecularButton>
              </a>

              {/* GitHub Link Button */}
              <a href="https://github.com/Sanjayshaa" target="_blank" rel="noopener noreferrer">
                <SpecularButton
                  size="lg"
                  radius={14}
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
                  <Github size={18} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} className="text-[#8B95A5]" />
                </SpecularButton>
              </a>

              {/* Resume Trigger */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#242A33] hover:border-purple-500/40 bg-[#0D1117]/80 text-[#8B95A5] hover:text-white font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                <FileText size={16} className="text-purple-400" />
                <span>Preview Resume</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column - Dynamic 3D Interactive Engineer Profile Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5"
          >
            <EngineerCard />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
