import { motion } from 'framer-motion';
import { Cpu, Code2, Layout, Server, Database, Container, Wrench, BookOpenCheck } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    icon: <Code2 size={18} className="text-purple-400" />,
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'FRONTEND',
    icon: <Layout size={18} className="text-blue-400" />,
    skills: ['React', 'HTML', 'CSS', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'BACKEND',
    icon: <Server size={18} className="text-emerald-400" />,
    skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'DATABASE',
    icon: <Database size={18} className="text-cyan-400" />,
    skills: ['PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    title: 'DEVOPS',
    icon: <Container size={18} className="text-amber-400" />,
    skills: ['Docker', 'Docker Compose', 'Docker SDK'],
  },
  {
    title: 'TOOLS & PLATFORMS',
    icon: <Wrench size={18} className="text-rose-400" />,
    skills: ['Git', 'GitHub', 'Vercel', 'Render'],
  },
  {
    title: 'CORE CS FOUNDATIONS',
    icon: <BookOpenCheck size={18} className="text-indigo-400" />,
    skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'DBMS', 'Operating Systems'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-transparent">
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
            <Cpu size={14} />
            <span>04 / TECHNICAL SKILLS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Engineering Stack &amp; Tooling
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8B95A5] max-w-xl mt-2 text-sm sm:text-base leading-relaxed font-sans"
          >
            Core programming languages, frameworks, datastores, and developer tools used across my full-stack and backend engineering projects.
          </motion.p>
        </div>

        {/* Structured Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-6 rounded-2xl bg-[#0D1117] border border-[#242A33] hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 space-y-4 group"
            >
              <div className="flex items-center gap-3 border-b border-[#242A33] pb-3">
                <div className="p-2 rounded-lg bg-[#07090D] border border-[#242A33] group-hover:border-purple-500/40 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-mono font-bold text-white text-xs uppercase tracking-wider">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-[#07090D] border border-[#242A33] font-mono text-xs text-zinc-300 hover:text-white hover:border-purple-500/40 transition-colors"
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
