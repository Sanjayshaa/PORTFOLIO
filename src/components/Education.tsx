import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background glowing decorations */}
      <div className="absolute top-[20%] left-[20%] w-[250px] h-[250px] bg-purple-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3"
          >
            <GraduationCap size={12} />
            Education
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white"
          >
            Academic Journey
          </motion.h2>
        </div>

        {/* Education Card / Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-6 sm:pl-8 border-l border-zinc-800"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[11px] top-0 p-1 rounded-full bg-purple-500/20 border-2 border-purple-500 text-purple-400 z-10">
            <GraduationCap size={16} />
          </div>

          {/* Education Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-purple-500/20 shadow-xl transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded">
                  Bachelor of Technology
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-3">
                  Information Technology
                </h3>
              </div>
              <div className="flex flex-col sm:items-end gap-1.5 text-xs sm:text-sm text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-zinc-500" />
                  2022 — 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-zinc-500" />
                  India
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-4">
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                Acquiring deep theoretical and practical training in computer science, algorithmic design, and databases, with a specific focus on modern software development practices.
              </p>
              
              {/* Highlight list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                <div className="flex items-start gap-2 text-zinc-400 text-xs sm:text-sm">
                  <Award size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Focused Core: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks.</span>
                </div>
                <div className="flex items-start gap-2 text-zinc-400 text-xs sm:text-sm">
                  <Award size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Practical Lab Work: Full Stack Projects, Automation Scripting, Datastore Design.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
