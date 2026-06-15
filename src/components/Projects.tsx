import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { Github } from './icons';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live?: string;
}

const projectsData: Project[] = [
  {
    title: 'Digital Lab Record System',
    description:
      'A full-stack lab record management platform for colleges with student submissions, faculty evaluation, admin management, authentication, exam management, gamification, PDF handling, and role-based access control.',
    image: '/images/lab_record_mockup.png',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/sanjayshaa/LAB-RECORD-SYSTEM',
  },
  {
    title: 'Face Detection System',
    description:
      'A face recognition and detection system developed using Python and OpenCV for student identification, facial validation, and attendance-related workflows.',
    image: '/images/face_detection_mockup.png',
    tech: ['Python', 'OpenCV', 'MySQL'],
    github: 'https://github.com/sanjayshaa',
  },
];

export default function Projects() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-mesh">
      {/* Glow background decorations */}
      <div className="absolute top-[40%] left-[5%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

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
            <FolderGit2 size={12} />
            Featured Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white"
          >
            What I've Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 max-w-lg mx-auto mt-4 text-sm sm:text-base"
          >
            A look at my key developmental projects, bridging full-stack systems and automated workflows.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl glass-panel border border-white/5 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed min-h-[72px]">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Badges & Actions */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-6">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] sm:text-xs text-zinc-300 font-medium font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-purple-500/30 text-xs sm:text-sm font-medium text-white hover:bg-zinc-800 transition-all group/btn"
                  >
                    <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                    <span>View Repository</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/40 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
