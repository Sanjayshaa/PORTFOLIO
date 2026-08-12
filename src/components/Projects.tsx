import { motion } from 'framer-motion';
import { FolderGit2, BookOpen } from 'lucide-react';
import { Github } from './icons';

interface ProjectsProps {
  onOpenCaseStudy?: () => void;
}

interface SupportingProject {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
}

const supportingProjects: SupportingProject[] = [
  {
    number: '02',
    title: 'OpsPilot',
    subtitle: 'Docker Infrastructure & Orchestration Platform',
    description: 'Centralized DevOps platform for Docker container lifecycle management, multi-container orchestration, 7-stage Compose deployment, real-time telemetry, and health scoring.',
    image: '/images/opspilot_mockup.png',
    tech: ['React', 'FastAPI', 'Python', 'Docker SDK', 'Docker Compose', 'psutil'],
    github: 'https://github.com/Sanjayshaa',
  },
  {
    number: '03',
    title: 'Face Detection System',
    subtitle: 'Real-Time OpenCV Recognition Software',
    description: 'A desktop computer vision application built with Python and OpenCV for student identification, webcam frame capture, and MySQL database record synchronization.',
    image: '/images/face_detection_mockup.png',
    tech: ['Python', 'OpenCV', 'MySQL', 'Tkinter'],
    github: 'https://github.com/Sanjayshaa',
  },
];

export default function Projects({ onOpenCaseStudy }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent border-t border-[#242A33]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-mono text-purple-400 tracking-widest uppercase mb-3"
          >
            <FolderGit2 size={14} />
            <span>01 / FEATURED WORK</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Selected Engineering Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8B95A5] max-w-xl mt-4 text-sm sm:text-base leading-relaxed"
          >
            Case studies of full-stack platforms, automated evaluation tools, and developer infrastructure built with production engineering practices.
          </motion.p>
        </div>

        {/* FLAGSHIP PROJECT 01 - Large Editorial Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="editorial-panel p-6 sm:p-10 border border-purple-500/30 bg-[#0D1117] relative overflow-hidden space-y-8"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242A33] pb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-3xl font-extrabold text-purple-400">01</span>
              <div>
                <span className="font-mono text-xs text-purple-300 uppercase tracking-wider block font-semibold">FLAGSHIP PROJECT</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Digital Lab Record &amp; Internal Evaluation System
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCaseStudy}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-lg shadow-purple-500/20"
              >
                <BookOpen size={16} />
                <span>Read Case Study ↗</span>
              </button>

              <a
                href="https://github.com/Sanjayshaa/LAB-RECORD-SYSTEM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#07090D] border border-[#242A33] hover:border-purple-500/40 text-white font-medium text-xs sm:text-sm transition-colors"
              >
                <Github size={16} />
                <span>Repository</span>
              </a>
            </div>
          </div>

          {/* Project Content Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Screenshot Preview */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#242A33] bg-[#07090D] group">
                <img
                  src="/images/lab_record_mockup.png"
                  alt="Digital Lab Record System"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Narrative & Details */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-zinc-300 text-sm leading-relaxed">
                Full-stack academic platform for managing laboratory submissions, faculty evaluation, internal marks calculation, experiment records, and role-based access control.
              </p>

              <div className="space-y-3 font-mono text-xs text-[#8B95A5]">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  <span>Isolated Docker Multi-Language Sandbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span>AI-Assisted Assessment &amp; Faculty Override</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Normalized PostgreSQL Datastore Schemas</span>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="space-y-2 pt-2 border-t border-[#242A33]">
                <span className="font-mono text-[11px] text-[#8B95A5] uppercase tracking-widest block font-semibold">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Docker', 'REST APIs'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-[#07090D] border border-[#242A33] font-mono text-[11px] text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* SUPPORTING PROJECTS (2-Column Grid) */}
        <div className="space-y-6 pt-6">
          <h3 className="font-mono text-xs text-[#8B95A5] uppercase tracking-widest font-semibold">
            SUPPORTING ENGINEERING PROJECTS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportingProjects.map((proj) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="editorial-panel editorial-panel-hover p-6 border border-[#242A33] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-[#242A33] bg-[#07090D] group">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-purple-400 font-bold">{proj.number}</span>
                    <span className="font-mono text-[10px] text-[#8B95A5] uppercase tracking-wider">{proj.subtitle}</span>
                  </div>

                  <h4 className="font-display font-bold text-xl text-white">
                    {proj.title}
                  </h4>

                  <p className="text-[#8B95A5] text-xs sm:text-sm leading-relaxed min-h-[60px]">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#242A33]">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-[#07090D] border border-[#242A33] font-mono text-[10px] text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#07090D] border border-[#242A33] hover:border-purple-500/40 text-xs font-mono text-white transition-colors"
                  >
                    <Github size={15} />
                    <span>View Repository ↗</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
