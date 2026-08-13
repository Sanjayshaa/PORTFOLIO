import { motion } from 'framer-motion';
import { User, Code2, Database, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-transparent">
      <div className="w-[min(94vw,1600px)] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
        
        {/* Section Heading */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-mono text-purple-400 tracking-widest uppercase mb-3"
          >
            <User size={14} />
            <span>02 / ABOUT ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Engineering Story &amp; Background
          </motion.h2>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Personal Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-[#8B95A5] text-base leading-relaxed font-sans"
          >
            <p>
              I am an <strong className="text-white font-semibold">Information Technology undergraduate (B.Tech 2023–2027)</strong> at St. Peter's College of Engineering and Technology, Chennai, with a passion for software engineering, full-stack systems, and infrastructure automation.
            </p>
            <p>
              My engineering journey focuses on turning complex workflows into clean, reliable web applications. Whether building a full-stack academic evaluation platform with isolated Docker runtimes (<strong className="text-purple-300">Lab Record System</strong>) or designing container management dashboards (<strong className="text-blue-300">OpsPilot</strong>), I prioritize clean code architecture, normalized relational databases, and maintainable REST API endpoints.
            </p>
            <p>
              I actively bridge computer science fundamentals—Data Structures &amp; Algorithms, Object-Oriented Programming, and Relational Database Systems—with modern developer tooling to ship functional, real-world solutions.
            </p>
          </motion.div>

          {/* Right Column - Competency Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="editorial-panel p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#07090D] border border-[#242A33] text-purple-400">
                  <Code2 size={20} />
                </div>
                <h3 className="font-display font-bold text-white text-base">Full-Stack Development</h3>
              </div>
              <p className="text-xs text-[#8B95A5] leading-relaxed">
                Building responsive frontends with React &amp; TypeScript paired with modular Node.js/Express and Python/FastAPI backends.
              </p>
            </div>

            <div className="editorial-panel p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#07090D] border border-[#242A33] text-blue-400">
                  <Database size={20} />
                </div>
                <h3 className="font-display font-bold text-white text-base">Databases &amp; Storage</h3>
              </div>
              <p className="text-xs text-[#8B95A5] leading-relaxed">
                Designing normalized relational database schemas in PostgreSQL, MySQL, and Supabase with optimized queries.
              </p>
            </div>

            <div className="editorial-panel p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#07090D] border border-[#242A33] text-cyan-400">
                  <Terminal size={20} />
                </div>
                <h3 className="font-display font-bold text-white text-base">DevOps &amp; Containerization</h3>
              </div>
              <p className="text-xs text-[#8B95A5] leading-relaxed">
                Utilizing Docker, Docker Compose, and SDK automation for isolated code execution and predictable deployments.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
