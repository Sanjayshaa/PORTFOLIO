import { motion } from 'framer-motion';
import { Shield, Code, Server, Database, Container, BookOpen, CheckCircle2 } from 'lucide-react';
import LogoLoop from './reactbits/LogoLoop';

interface CapabilityCategory {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: string[];
}

const techMarqueeLogos = [
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-purple-300 font-semibold text-xs font-mono">React</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-blue-300 font-semibold text-xs font-mono">TypeScript</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-emerald-300 font-semibold text-xs font-mono">Node.js</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-amber-300 font-semibold text-xs font-mono">Python</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-cyan-300 font-semibold text-xs font-mono">Docker</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-indigo-300 font-semibold text-xs font-mono">PostgreSQL</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-teal-300 font-semibold text-xs font-mono">FastAPI</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-purple-300 font-semibold text-xs font-mono">Express.js</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-emerald-300 font-semibold text-xs font-mono">Supabase</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-blue-300 font-semibold text-xs font-mono">Tailwind CSS</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-orange-300 font-semibold text-xs font-mono">MySQL</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#242A33] text-rose-300 font-semibold text-xs font-mono">OpenCV</span> },
];

const capabilities: CapabilityCategory[] = [
  {
    number: '01',
    title: 'LANGUAGES',
    subtitle: 'Core programming syntax & execution environments',
    icon: <Code size={20} className="text-amber-400" />,
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    number: '02',
    title: 'APPLICATION DEVELOPMENT',
    subtitle: 'Frontend UI frameworks, backend web servers & REST APIs',
    icon: <Server size={20} className="text-purple-400" />,
    skills: ['React', 'TypeScript', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Vite', 'Tailwind CSS'],
  },
  {
    number: '03',
    title: 'DATA ARCHITECTURE',
    subtitle: 'Relational databases, ORM models & cloud datastores',
    icon: <Database size={20} className="text-emerald-400" />,
    skills: ['PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    number: '04',
    title: 'INFRASTRUCTURE & DEVOPS',
    subtitle: 'Containerization, orchestration & cloud deployment platforms',
    icon: <Container size={20} className="text-cyan-400" />,
    skills: ['Docker', 'Docker Compose', 'Docker SDK', 'Git & GitHub', 'Vercel', 'Render'],
  },
  {
    number: '05',
    title: 'CORE CS FOUNDATIONS',
    subtitle: 'Theoretical computer science & software engineering principles',
    icon: <BookOpen size={20} className="text-blue-400" />,
    skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'DBMS', 'Operating Systems'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent border-t border-[#242A33]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between flex-wrap gap-4 mb-3"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 tracking-widest uppercase">
              <Shield size={14} />
              <span>04 / TECHNICAL CAPABILITY MAP</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <CheckCircle2 size={12} />
              <span>USED IN PRODUCTION &amp; ACADEMIC PROJECTS</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Technical Stack &amp; Tooling
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8B95A5] max-w-xl mt-4 text-sm sm:text-base leading-relaxed"
          >
            An verified overview of languages, frameworks, datastores, and infrastructure technologies utilized across my projects.
          </motion.p>
        </div>

        {/* Logo Loop Marquee */}
        <div className="py-4 overflow-hidden rounded-2xl bg-[#0D1117] border border-[#242A33]">
          <LogoLoop
            logos={techMarqueeLogos}
            speed={75}
            direction="left"
            gap={20}
            logoHeight={38}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#0D1117"
          />
        </div>

        {/* Technical Capabilities List */}
        <div className="space-y-6">
          {capabilities.map((cat, idx) => (
            <motion.div
              key={cat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="editorial-panel editorial-panel-hover p-6 sm:p-8 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#242A33] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-purple-400">{cat.number}</span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#8B95A5] font-sans">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-[#07090D] border border-[#242A33]">
                  {cat.icon}
                </div>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-lg bg-[#07090D] border border-[#242A33] hover:border-purple-500/40 text-xs font-mono text-zinc-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
