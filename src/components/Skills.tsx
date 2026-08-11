import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Layout, Server, Database, Code, Wrench, Shield, Cpu, BookOpen, Sparkles, Heart, Compass, Terminal, Container, Eye } from 'lucide-react';
import LogoLoop from './reactbits/LogoLoop';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

interface Interest {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface Fact {
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

const techMarqueeLogos = [
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold text-sm font-display"><Cpu size={16} /> React</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-sm font-display">TypeScript</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold text-sm font-display">Node.js</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold text-sm font-display">Python</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold text-sm font-display">Docker</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold text-sm font-display">PostgreSQL</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-300 font-semibold text-sm font-display">FastAPI</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold text-sm font-display">Express.js</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold text-sm font-display">Supabase</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-sm font-display">Tailwind CSS</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 font-semibold text-sm font-display">MySQL</span> },
  { node: <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 font-semibold text-sm font-display">OpenCV</span> },
];

const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code size={20} className="text-amber-400" />,
    color: 'from-amber-500/10 to-orange-500/5 hover:border-amber-500/30',
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend Development',
    icon: <Layout size={20} className="text-purple-400" />,
    color: 'from-purple-500/10 to-indigo-500/5 hover:border-purple-500/30',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend & APIs',
    icon: <Server size={20} className="text-blue-400" />,
    color: 'from-blue-500/10 to-cyan-500/5 hover:border-blue-500/30',
    skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Databases & Storage',
    icon: <Database size={20} className="text-emerald-400" />,
    color: 'from-emerald-500/10 to-teal-500/5 hover:border-emerald-500/30',
    skills: ['PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    title: 'DevOps & Containers',
    icon: <Container size={20} className="text-cyan-400" />,
    color: 'from-cyan-500/10 to-blue-500/5 hover:border-cyan-500/30',
    skills: ['Docker', 'Docker Compose', 'Docker SDK'],
  },
  {
    title: 'Developer Tools & Platforms',
    icon: <Wrench size={20} className="text-pink-400" />,
    color: 'from-pink-500/10 to-rose-500/5 hover:border-pink-500/30',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render'],
  },
  {
    title: 'Core CS Foundations',
    icon: <BookOpen size={20} className="text-indigo-400" />,
    color: 'from-indigo-500/10 to-purple-500/5 hover:border-indigo-500/30',
    skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'DBMS', 'Operating Systems'],
  },
];

const interestsData: Interest[] = [
  {
    title: 'Competitive Programming & DSA',
    description: 'Solving complex algorithmic challenges, optimizing time/space complexity, and mastering core computing concepts.',
    icon: <Code size={18} className="text-purple-400" />,
    color: 'border-purple-500/20 bg-purple-500/5',
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Building modern, scalable web applications with reactive user interfaces and robust RESTful backend architectures.',
    icon: <Layout size={18} className="text-blue-400" />,
    color: 'border-blue-500/20 bg-blue-500/5',
  },
  {
    title: 'DevOps & Infrastructure Automation',
    description: 'Orchestrating multi-container Docker environments, CI/CD automated deployments, and real-time telemetry systems.',
    icon: <Terminal size={18} className="text-cyan-400" />,
    color: 'border-cyan-500/20 bg-cyan-500/5',
  },
  {
    title: 'AI-Assisted Tools & Computer Vision',
    description: 'Integrating automated AI evaluation engines, Python OpenCV facial recognition, and intelligent code analysis.',
    icon: <Eye size={18} className="text-emerald-400" />,
    color: 'border-emerald-500/20 bg-emerald-500/5',
  },
  {
    title: 'Exploring Emerging Technologies',
    description: 'Constantly learning system design patterns, micro-SaaS architecture, and modern full-stack frameworks.',
    icon: <Compass size={18} className="text-amber-400" />,
    color: 'border-amber-500/20 bg-amber-500/5',
  },
];

const interestingFacts: Fact[] = [
  {
    title: '7-Stage Container Deployment Pipeline',
    description: 'Engineered a multi-stage Docker Compose orchestrator in OpsPilot featuring automated YAML validation, log aggregation, and rollback on failure.',
    badge: 'DevOps Highlight',
    icon: <Container className="text-cyan-400" size={20} />,
  },
  {
    title: 'Docker-Based Isolated Code Sandbox',
    description: 'Implemented multi-language code execution inside isolated Docker containers to evaluate student lab submissions safely in real-time.',
    badge: 'Security & Architecture',
    icon: <Terminal className="text-purple-400" size={20} />,
  },
  {
    title: 'Real-Time OpenCV Face Recognition',
    description: 'Developed a live desktop computer vision system using Python, OpenCV, and MySQL for immediate webcam identification.',
    badge: 'Computer Vision',
    icon: <Eye className="text-emerald-400" size={20} />,
  },
  {
    title: 'B.Tech IT Undergraduate Specialist',
    description: 'Combining rigorous academic coursework with hands-on production project development at St. Peters College of Engineering and Technology, Chennai.',
    badge: 'Academic Journey',
    icon: <BookOpen className="text-blue-400" size={20} />,
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
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[320px] h-[320px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Technical Skills Header */}
        <div>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3"
            >
              <Shield size={12} />
              Technical Skills & Ecosystem
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
            >
              Technical Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400 max-w-lg mx-auto mt-4 text-sm sm:text-base"
            >
              A breakdown of languages, frameworks, databases, DevOps tools, and computer science foundations I leverage daily.
            </motion.p>
          </div>

          {/* LogoLoop Marquee */}
          <div className="mb-12 py-4 overflow-hidden rounded-2xl glass-panel border border-white/5 bg-zinc-900/40">
            <LogoLoop
              logos={techMarqueeLogos}
              speed={80}
              direction="left"
              gap={24}
              logoHeight={42}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#09090b"
            />
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
                className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} border border-white/10 transition-all duration-300 shadow-xl bg-zinc-950/80`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 hover:border-purple-500/40 text-xs text-zinc-200 font-medium hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interests & Engineering Focus Section */}
        <div className="pt-8 border-t border-white/5">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3"
            >
              <Heart size={12} />
              Interests & Focus Areas
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white"
            >
              What Drives My Passion
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interestsData.map((interest) => (
              <motion.div
                key={interest.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border ${interest.color} glass-panel transition-all duration-300 space-y-3 bg-zinc-950/70`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/10">
                    {interest.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-white">
                    {interest.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interesting Facts & Highlights */}
        <div className="pt-8 border-t border-white/5">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3"
            >
              <Sparkles size={12} />
              Key Engineering Highlights
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white"
            >
              Interesting Facts & Achievements
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interestingFacts.map((fact) => (
              <motion.div
                key={fact.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/30 transition-all duration-300 space-y-3 bg-zinc-950/80 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10">
                      {fact.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                      {fact.badge}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-400 transition-colors">
                  {fact.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
