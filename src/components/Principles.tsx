import { motion } from 'framer-motion';
import { Compass, Users, Cpu, Wrench, Rocket } from 'lucide-react';

interface Principle {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const principles: Principle[] = [
  {
    number: '01',
    title: 'BUILD FOR REAL USERS',
    description: 'I prefer building applications that address concrete user friction, streamline academic or operational workflows, and solve actual problems.',
    icon: <Users className="text-purple-400" size={20} />,
  },
  {
    number: '02',
    title: 'SYSTEMS OVER SCREENS',
    description: 'While pixel precision matters, I prioritize reliable backend architecture, robust REST API contracts, database schemas, and isolated deployment environments.',
    icon: <Cpu className="text-blue-400" size={20} />,
  },
  {
    number: '03',
    title: 'AUTOMATE THE REPETITIVE',
    description: 'I leverage container orchestration (Docker), automated code execution sandboxes, and script tooling to minimize manual evaluation and administrative overhead.',
    icon: <Wrench className="text-cyan-400" size={20} />,
  },
  {
    number: '04',
    title: 'LEARN BY SHIPPING',
    description: 'Theory is essential, but production-grade code is where concepts are proven. I solidify software engineering skills by architecting and deploying real systems.',
    icon: <Rocket className="text-emerald-400" size={20} />,
  },
];

export default function Principles() {
  return (
    <section id="principles" className="py-20 relative overflow-hidden bg-transparent">
      <div className="w-[min(94vw,1600px)] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
        
        {/* Section Heading */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-mono text-purple-400 tracking-widest uppercase mb-3"
          >
            <Compass size={14} />
            <span>03 / ENGINEERING PHILOSOPHY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Engineering Principles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8B95A5] max-w-xl mt-4 text-sm sm:text-base leading-relaxed"
          >
            Core engineering values and decision-making frameworks that guide how I architect, test, and ship software.
          </motion.p>
        </div>

        {/* 4-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="editorial-panel editorial-panel-hover p-8 relative overflow-hidden group space-y-4"
            >
              {/* Number Header */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-[#8B95A5] group-hover:text-purple-400 transition-colors">
                  {p.number}
                </span>
                <div className="p-2.5 rounded-xl bg-[#07090D] border border-[#242A33]">
                  {p.icon}
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition-colors tracking-tight">
                {p.title}
              </h3>

              <p className="text-[#8B95A5] text-xs sm:text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
