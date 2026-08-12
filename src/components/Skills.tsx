import { motion } from 'framer-motion';
import { Shield, CheckCircle2 } from 'lucide-react';
import AccordionGallery, { type AccordionGalleryItem } from './reactbits/AccordionGallery';

const stackGalleryItems: AccordionGalleryItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80',
    label: '01 / FRONTEND ENGINEERING',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'Tailwind CSS', 'Vite', 'GSAP'],
  },
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    label: '02 / BACKEND & REST APIS',
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'JWT Auth'],
  },
  {
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80',
    label: '03 / DATASTORES & SCHEMAS',
    skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Relational Schemas', 'SQL Queries'],
  },
  {
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=900&q=80',
    label: '04 / DEVOPS & CONTAINERIZATION',
    skills: ['Docker', 'Docker Compose', 'Docker SDK', 'Git & GitHub', 'Vercel', 'Render'],
  },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
    label: '05 / CORE CS FOUNDATIONS',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems'],
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
            className="flex items-center justify-between flex-wrap gap-4 mb-3"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] tracking-widest uppercase">
              <Shield size={14} />
              <span>TECHNICAL CAPABILITIES</span>
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
            className="text-[#8B95A5] max-w-xl mt-3 text-sm sm:text-base leading-relaxed"
          >
            Interactive exploration of languages, frameworks, datastores, and developer infrastructure utilized across my engineering projects.
          </motion.p>
        </div>

        {/* React Bits AccordionGallery */}
        <div className="pt-2">
          <AccordionGallery
            items={stackGalleryItems}
            defaultIndex={0}
            expandRatio={0.52}
            trigger="hover"
            height={420}
            gap={8}
            radius={14}
            duration={0.55}
            ease="power3.out"
            parallax={0.35}
            tilt={5}
            stagger={0.05}
            showLabels={true}
            grayscale={true}
            accentColor="#A78BFA"
          />
        </div>

      </div>
    </section>
  );
}
