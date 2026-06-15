import { motion } from 'framer-motion';
import { User, Code, Database, Globe } from 'lucide-react';

export default function About() {
  const cardData = [
    {
      icon: <Code className="text-purple-400" size={24} />,
      title: 'Full Stack Development',
      description: 'Building beautiful frontends with React & TypeScript, and robust backends using Node.js & Express.',
    },
    {
      icon: <Database className="text-blue-400" size={24} />,
      title: 'Database & Systems',
      description: 'Designing efficient database schemas using PostgreSQL, Supabase, and MySQL for secure data persistence.',
    },
    {
      icon: <Globe className="text-purple-400" size={24} />,
      title: 'Scalable Solutions',
      description: 'Creating maintainable, performant web architectures and automating workflows to solve real-world problems.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            <User size={12} />
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white"
          >
            My Background & Passion
          </motion.h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 shadow-xl space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Sanjay S
              </h3>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                I am an <strong className="text-purple-400 font-semibold">Information Technology student</strong> passionate about software engineering and full-stack development. I enjoy taking on complex programming tasks and translating them into elegant, robust, and clean applications.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                My technical experience includes working closely with <strong className="text-white font-medium">React, TypeScript, Node.js, Supabase, and PostgreSQL</strong>. I am always exploring modern web architectures, API design principles, and deployment workflows to create seamless user experiences.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                Aside from coding, I focus on system efficiency, code optimization, and understanding the core fundamentals of computing. My ultimate objective is to contribute to scalable applications and help solve real-world problems.
              </p>
            </div>
          </motion.div>

          {/* Core Focus Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {cardData.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-xl glass-panel border border-white/5 hover:border-purple-500/20 transition-all shadow-md flex gap-4"
              >
                <div className="flex-shrink-0 p-3 rounded-lg bg-zinc-900 border border-white/5 h-fit">
                  {card.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-white font-display text-sm sm:text-base">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
