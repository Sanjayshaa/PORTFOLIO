import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cpu, Box, Activity, Sparkles, RotateCw } from 'lucide-react';
import ModelViewer from './reactbits/ModelViewer';

export default function EngineerCard() {
  const [activeTab, setActiveTab] = useState<'overview' | '3d' | 'telemetry'>('overview');
  const [autoRotate3D, setAutoRotate3D] = useState(true);

  // 3D Parallax Tilt Physics
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="w-full flex justify-center py-2"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full max-w-lg relative group rounded-2xl p-[1px] bg-gradient-to-b from-purple-500/40 via-blue-500/20 to-transparent shadow-2xl transition-shadow duration-500"
      >
        {/* Glowing Specular Border Beam */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/30 via-cyan-500/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

        {/* Card Inner Surface */}
        <div className="relative rounded-2xl bg-[#0D1117] border border-[#242A33] p-6 sm:p-7 space-y-6 overflow-hidden backdrop-blur-xl">
          
          {/* Top Beam Accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />

          {/* Card Header & Tab Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#242A33] pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#07090D] border border-purple-500/30 text-purple-400 shadow-inner">
                <Cpu size={20} className="animate-pulse" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-white text-lg tracking-tight flex items-center gap-2">
                  <span>SANJAY S</span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">PRO</span>
                </h3>
                <p className="font-mono text-[11px] text-[#8B95A5] uppercase tracking-wider">SOFTWARE ENGINEER</p>
              </div>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-1 bg-[#07090D] p-1 rounded-xl border border-[#242A33]">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-2.5 py-1 rounded-lg font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'overview' ? 'bg-purple-600 text-white font-bold' : 'text-[#8B95A5] hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('3d')}
                className={`px-2.5 py-1 rounded-lg font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 ${
                  activeTab === '3d' ? 'bg-purple-600 text-white font-bold' : 'text-[#8B95A5] hover:text-white'
                }`}
              >
                <Box size={12} />
                <span>3D Core</span>
              </button>
              <button
                onClick={() => setActiveTab('telemetry')}
                className={`px-2.5 py-1 rounded-lg font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 ${
                  activeTab === 'telemetry' ? 'bg-purple-600 text-white font-bold' : 'text-[#8B95A5] hover:text-white'
                }`}
              >
                <Activity size={12} />
                <span>Stats</span>
              </button>
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {/* Focus Areas */}
              <div className="space-y-2">
                <span className="font-mono text-[11px] text-[#8B95A5] uppercase tracking-widest block font-semibold">
                  PRIMARY FOCUS AREAS
                </span>
                <div className="space-y-2 text-xs text-zinc-200 font-sans">
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#07090D] border border-[#242A33]">
                    <span className="h-2 w-2 rounded-full bg-purple-400" />
                    <span className="font-medium">Full-Stack System Architecture &amp; REST APIs</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#07090D] border border-[#242A33]">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="font-medium">DevOps &amp; Docker Container Orchestration</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#07090D] border border-[#242A33]">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="font-medium">Relational Datastores &amp; Computer Vision</span>
                  </div>
                </div>
              </div>

              {/* Core Stack */}
              <div className="space-y-2 pt-2 border-t border-[#242A33]">
                <span className="font-mono text-[11px] text-[#8B95A5] uppercase tracking-widest block font-semibold">
                  VERIFIED STACK
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Supabase'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#07090D] border border-[#242A33] hover:border-purple-500/40 font-mono text-[11px] text-zinc-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: 3D MODEL VIEWER */}
          {activeTab === '3d' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-purple-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} />
                  3D INTERACTIVE SYSTEM CORE
                </span>
                <button
                  onClick={() => setAutoRotate3D(!autoRotate3D)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#07090D] border border-[#242A33] hover:border-purple-500/40 text-[11px] text-zinc-300 transition-colors cursor-pointer"
                >
                  <RotateCw size={12} className={autoRotate3D ? 'animate-spin' : ''} />
                  <span>{autoRotate3D ? 'Auto Rotate' : 'Paused'}</span>
                </button>
              </div>

              {/* 3D Canvas Box */}
              <div className="h-[200px] w-full rounded-xl bg-[#07090D] border border-[#242A33] relative overflow-hidden flex items-center justify-center">
                <ModelViewer autoRotate={autoRotate3D} />
                <span className="absolute bottom-2 right-3 font-mono text-[10px] text-[#8B95A5] pointer-events-none">
                  Drag to rotate 3D Core
                </span>
              </div>
            </motion.div>
          )}

          {/* TAB 3: LIVE TELEMETRY */}
          {activeTab === 'telemetry' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <span className="font-mono text-[11px] text-[#8B95A5] uppercase tracking-widest block font-semibold">
                ENGINEERING SYSTEM METRICS
              </span>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#07090D] border border-[#242A33] space-y-1">
                  <span className="text-[10px] text-[#8B95A5] uppercase block">DEGREE &amp; YEAR</span>
                  <span className="font-bold text-white text-sm block">B.Tech IT</span>
                  <span className="text-[11px] text-purple-400">2023 — 2027</span>
                </div>

                <div className="p-3 rounded-xl bg-[#07090D] border border-[#242A33] space-y-1">
                  <span className="text-[10px] text-[#8B95A5] uppercase block">LOCATION</span>
                  <span className="font-bold text-white text-sm block">Chennai, TN</span>
                  <span className="text-[11px] text-blue-400">India (IST)</span>
                </div>

                <div className="p-3 rounded-xl bg-[#07090D] border border-[#242A33] space-y-1">
                  <span className="text-[10px] text-[#8B95A5] uppercase block">API &amp; ARCHITECTURE</span>
                  <span className="font-bold text-white text-sm block">RESTful / Docker</span>
                  <span className="text-[11px] text-emerald-400">PostgreSQL Schemas</span>
                </div>

                <div className="p-3 rounded-xl bg-[#07090D] border border-[#242A33] space-y-1">
                  <span className="text-[10px] text-[#8B95A5] uppercase block">CODE QUALITY</span>
                  <span className="font-bold text-white text-sm block">TypeScript Strict</span>
                  <span className="text-[11px] text-cyan-400">Clean Architecture</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Footer Status Bar */}
          <div className="pt-3 border-t border-[#242A33] flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#8B95A5] uppercase tracking-widest font-semibold">
              STATUS
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Opportunities</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
