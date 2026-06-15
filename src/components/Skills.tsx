import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Layout, Server, Database, Code, Wrench, Shield } from 'lucide-react';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: <Layout size={20} className="text-purple-400" />,
    color: 'from-purple-500/10 to-indigo-500/5 hover:border-purple-500/30',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' },
    ],
  },
  {
    title: 'Backend Development',
    icon: <Server size={20} className="text-blue-400" />,
    color: 'from-blue-500/10 to-cyan-500/5 hover:border-blue-500/30',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Databases & Cloud',
    icon: <Database size={20} className="text-emerald-400" />,
    color: 'from-emerald-500/10 to-teal-500/5 hover:border-emerald-500/30',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'Supabase' },
      { name: 'MySQL' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: <Code size={20} className="text-amber-400" />,
    color: 'from-amber-500/10 to-orange-500/5 hover:border-amber-500/30',
    skills: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'C' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: <Wrench size={20} className="text-pink-400" />,
    color: 'from-pink-500/10 to-rose-500/5 hover:border-pink-500/30',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Vercel' },
      { name: 'Render' },
    ],
  },
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[5%] w-[250px] h-[250px] bg-purple-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3"
          >
            <Shield size={12} />
            Skills
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white"
          >
            Technical Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 max-w-lg mx-auto mt-4 text-sm sm:text-base"
          >
            A curated list of languages, frameworks, and developer platforms I have built with.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} border border-white/5 transition-all duration-300 shadow-lg`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-zinc-900 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/5 hover:border-white/10 text-xs text-zinc-300 font-medium hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
