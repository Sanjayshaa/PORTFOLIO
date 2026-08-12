import { motion } from 'framer-motion';
import { FolderGit2, BookOpen } from 'lucide-react';
import Masonry, { type MasonryItem } from './reactbits/Masonry';

interface ProjectsProps {
  onOpenCaseStudy?: () => void;
}

export default function Projects({ onOpenCaseStudy }: ProjectsProps) {
  const projectItems: MasonryItem[] = [
    {
      id: 'lab-record-system',
      title: 'Digital Lab Record & Evaluation System',
      category: 'FULL-STACK / DOCKER / POSTGRESQL',
      description: 'End-to-end academic platform digitizing laboratory submissions, multi-language Docker code execution sandboxes, and role-based faculty grading.',
      year: '2026',
      img: '/images/lab_record_mockup.png',
      url: 'https://github.com/Sanjayshaa/LAB-RECORD-SYSTEM',
      height: 380,
      featured: true,
      onCaseStudy: onOpenCaseStudy,
    },
    {
      id: 'opspilot',
      title: 'OpsPilot — Docker Infrastructure Platform',
      category: 'DEVOPS / FASTAPI / DOCKER SDK',
      description: 'Centralized DevOps platform for container lifecycle management, multi-container Compose orchestration, and real-time telemetry.',
      year: '2026',
      img: '/images/opspilot_mockup.png',
      url: 'https://github.com/Sanjayshaa',
      height: 320,
    },
    {
      id: 'campusbridge',
      title: 'CampusBridge Student Portal',
      category: 'REACT / NODE.JS / SUPABASE',
      description: 'Unified student collaboration portal managing academic resources, announcements, and project team formation.',
      year: '2025',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      url: 'https://github.com/Sanjayshaa',
      height: 300,
    },
    {
      id: 'face-detection',
      title: 'Real-Time OpenCV Face Recognition',
      category: 'PYTHON / OPENCV / MYSQL',
      description: 'Computer vision desktop software for automated student identification, video frame recognition, and MySQL attendance sync.',
      year: '2025',
      img: '/images/face_detection_mockup.png',
      url: 'https://github.com/Sanjayshaa',
      height: 340,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent border-t border-[#242A33]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-mono text-purple-400 tracking-widest uppercase mb-3"
            >
              <FolderGit2 size={14} />
              <span>01 / SELECTED WORK</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
            >
              Featured Engineering Projects
            </motion.h2>
          </div>

          {/* Direct Flagship Case Study CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={onOpenCaseStudy}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-purple-500/20 cursor-pointer self-start sm:self-auto"
          >
            <BookOpen size={16} />
            <span>Read Flagship Case Study ↗</span>
          </motion.button>
        </div>

        {/* React Bits Masonry Showcase Grid */}
        <div className="pt-4">
          <Masonry
            items={projectItems}
            ease="power3.out"
            duration={0.7}
            stagger={0.07}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.96}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>

      </div>
    </section>
  );
}
