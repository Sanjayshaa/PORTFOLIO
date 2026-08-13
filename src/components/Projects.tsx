import { motion } from 'framer-motion';
import { FolderGit2, BookOpen } from 'lucide-react';
import AccordionGallery, { type AccordionGalleryItem } from './reactbits/AccordionGallery';

interface ProjectsProps {
  onOpenCaseStudy?: () => void;
}

export default function Projects({ onOpenCaseStudy }: ProjectsProps) {
  const projectGalleryItems: AccordionGalleryItem[] = [
    {
      image: '/images/lab_record_mockup.png',
      label: 'FLAGSHIP / DIGITAL LAB RECORD & EVALUATION SYSTEM',
      skills: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Docker Engine'],
    },
    {
      image: '/images/opspilot_mockup.png',
      label: 'OPSPILOT / DOCKER INFRASTRUCTURE PLATFORM',
      skills: ['React', 'FastAPI', 'Python', 'Docker SDK', 'Docker Compose', 'PyYAML', 'psutil'],
    },
    {
      image: '/images/face_detection_mockup.png',
      label: 'REAL-TIME OPENCV FACE RECOGNITION',
      skills: ['Python', 'OpenCV', 'MySQL', 'Tkinter', 'Computer Vision'],
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-transparent">
      <div className="w-[min(94vw,1600px)] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-10">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] tracking-widest uppercase mb-3"
            >
              <FolderGit2 size={14} />
              <span>02 / SELECTED WORK</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
            >
              Things I've Built
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#8B95A5] max-w-xl mt-2 text-sm sm:text-base leading-relaxed font-sans"
            >
              Full-stack applications, automated evaluation sandboxes, and developer infrastructure platforms from my resume.
            </motion.p>
          </div>

          {/* Flagship Case Study CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={onOpenCaseStudy}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-purple-500/25 cursor-pointer self-start sm:self-auto"
            type="button"
          >
            <BookOpen size={16} />
            <span>Read Flagship Case Study ↗</span>
          </motion.button>
        </div>

        {/* React Bits AccordionGallery for Project Showcase Visuals */}
        <div className="pt-2">
          <AccordionGallery
            items={projectGalleryItems}
            defaultIndex={0}
            expandRatio={0.55}
            trigger="hover"
            height={440}
            gap={10}
            radius={16}
            duration={0.6}
            ease="power3.out"
            parallax={0.35}
            tilt={4}
            stagger={0.06}
            showLabels={true}
            grayscale={false}
            accentColor="#A78BFA"
          />
        </div>

        {/* Flagship Project Brief Summary Card */}
        <div className="p-7 rounded-2xl bg-[#0D1117] border border-[#242A33] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#242A33] pb-3">
            <span className="font-mono text-xs font-bold text-[#A78BFA] tracking-wider uppercase">
              FLAGSHIP PROJECT BRIEF
            </span>
            <span className="font-mono text-xs text-[#8B95A5]">
              React · Node.js · Express · PostgreSQL · Docker Engine
            </span>
          </div>

          <h3 className="font-display font-extrabold text-white text-2xl">
            Digital Lab Record &amp; Internal Evaluation System
          </h3>

          <p className="text-sm text-[#8B95A5] leading-relaxed font-sans">
            A full-stack academic platform designed to digitize laboratory records, student experiment submissions, faculty evaluation workflows, and internal assessment mark calculations with isolated Docker code execution sandboxes.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenCaseStudy}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#A78BFA] hover:text-white transition-colors cursor-pointer"
              type="button"
            >
              <span>READ CASE STUDY ↗</span>
            </button>
            <a
              href="https://github.com/Sanjayshaa/LAB-RECORD-SYSTEM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8B95A5] hover:text-white transition-colors"
            >
              <span>VIEW REPOSITORY ↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
