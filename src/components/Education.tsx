import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  current?: boolean;
}

const educationData: EducationItem[] = [
  {
    period: '2023 — PRESENT',
    degree: 'B.Tech — Information Technology',
    institution: "St. Peter's College of Engineering and Technology",
    location: 'Chennai, Tamil Nadu, India',
    description: 'Focused on full-stack application architecture, backend system design, relational database management systems (DBMS), data structures & algorithms (DSA), and software engineering principles.',
    current: true,
  },
  {
    period: '2021 — 2023',
    degree: 'Higher Secondary — Class XII',
    institution: 'Sri Sayee Vivekananda Vidyalaya Matric Higher Secondary School',
    location: 'Chennai, Tamil Nadu, India',
    description: 'Completed higher secondary education with core specialization in Mathematics, Physics, Chemistry, and Computer Science.',
    current: false,
  },
];

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
            className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] tracking-widest uppercase mb-3"
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
            Education &amp; Qualifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8B95A5] max-w-xl mt-2 text-sm sm:text-base leading-relaxed font-sans"
          >
            Academic foundation and formal engineering studies in Information Technology.
          </motion.p>
        </div>

        {/* Editorial Timeline */}
        <div className="relative border-l border-[#242A33] ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-10">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 bg-[#07090D] transition-colors ${
                item.current ? 'border-purple-500 bg-purple-500/20' : 'border-[#242A33] group-hover:border-purple-400'
              }`} />

              <div className="p-6 sm:p-7 rounded-2xl bg-[#0D1117] border border-[#242A33] group-hover:border-purple-500/40 transition-all duration-300 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#242A33] pb-3">
                  <span className="font-mono text-xs font-bold text-[#A78BFA] tracking-wider uppercase flex items-center gap-1.5">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                    {item.current && (
                      <span className="ml-2 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        PURSUING
                      </span>
                    )}
                  </span>
                  
                  <span className="font-mono text-xs text-[#8B95A5] flex items-center gap-1">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-white text-xl tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="font-mono text-sm text-purple-300/90 font-medium">
                    {item.institution}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed font-sans pt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
