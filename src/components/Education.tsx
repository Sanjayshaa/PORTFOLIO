import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Heading */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-mono text-purple-400 tracking-widest uppercase mb-3"
          >
            <GraduationCap size={14} />
            <span>05 / ACADEMIC BACKGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Education &amp; Academic Timeline
          </motion.h2>
        </div>

        {/* Clean Timeline Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="editorial-panel p-8 sm:p-10 space-y-8"
        >
          {/* Horizontal Year Range Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#242A33] pb-6">
            <div>
              <span className="font-mono text-xs text-purple-400 font-semibold uppercase tracking-widest block mb-1">
                UNDERGRADUATE DEGREE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Bachelor of Technology in Information Technology
              </h3>
              <p className="text-sm text-[#8B95A5] mt-1 flex items-center gap-2 font-sans">
                <MapPin size={14} className="text-purple-400" />
                <span>St. Peter's College of Engineering and Technology, Chennai</span>
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1 font-mono text-xs">
              <span className="px-3 py-1 rounded bg-[#07090D] border border-[#242A33] text-purple-300 font-bold">
                2023 — 2027
              </span>
              <span className="text-emerald-400 font-semibold text-[11px]">GRADUATING IN 2027</span>
            </div>
          </div>

          {/* Academic Focus Areas Grid */}
          <div className="space-y-4">
            <span className="font-mono text-xs text-[#8B95A5] uppercase tracking-widest font-semibold block">
              CORE ACADEMIC SUBJECTS &amp; CURRICULUM FOCUS
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                'Data Structures',
                'DBMS',
                'Operating Systems',
                'Computer Networks',
                'Software Engineering',
                'Object-Oriented Prog.',
                'Web Technologies',
                'Cloud Computing',
                'Design & Algorithms',
                'Cyber Security',
              ].map((subject) => (
                <div key={subject} className="p-3 rounded-xl bg-[#07090D] border border-[#242A33] text-xs font-mono text-zinc-300 text-center">
                  {subject}
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
