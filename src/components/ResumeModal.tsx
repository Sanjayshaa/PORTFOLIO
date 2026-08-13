import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, Award, Heart } from 'lucide-react';
import { Github, Linkedin } from './icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Backdrop Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          
          {/* Top Bar / Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/80 backdrop-blur-md print:hidden">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </span>
              <h3 className="font-display font-bold text-white text-base sm:text-lg">
                Resume Preview <span className="text-xs text-purple-400 font-normal ml-2">Sanjay S</span>
              </h3>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="/Sanjay_S_Resume.pdf"
                download="Sanjay_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all shadow-md hover:shadow-purple-500/25 cursor-pointer"
                title="Download PDF Resume"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                title="Print Resume"
              >
                <Printer size={14} />
                <span className="hidden sm:inline">Print</span>
              </button>
              
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Scrollable Printable Content */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:overflow-visible print:bg-white print:text-black">
            
            {/* Printable Container wrapper */}
            <div className="printable-resume space-y-8">
              
              {/* Header Section */}
              <div className="border-b border-white/10 pb-6 print:border-black/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight print:text-black">
                      SANJAY S
                    </h1>
                    <p className="text-purple-400 font-medium text-sm sm:text-base mt-1 print:text-purple-700">
                      B.Tech Information Technology Undergraduate
                    </p>
                  </div>
                  
                  {/* Contact Badges */}
                  <div className="flex flex-wrap sm:flex-col gap-2 sm:items-end text-xs text-zinc-300 print:text-black">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-purple-400 print:text-black" />
                      <span>Chennai, Tamil Nadu</span>
                    </div>
                    <a href="mailto:sanjaysha9468@gmail.com" className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                      <Mail size={13} className="text-purple-400 print:text-black" />
                      <span>sanjaysha9468@gmail.com</span>
                    </a>
                    <a href="https://github.com/Sanjayshaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                      <Github size={13} className="text-purple-400 print:text-black" />
                      <span>github.com/Sanjayshaa</span>
                    </a>
                    <a href="https://www.linkedin.com/in/sanjay-s16/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                      <Linkedin size={13} className="text-purple-400 print:text-black" />
                      <span>linkedin.com/in/sanjay-s16</span>
                    </a>
                    <div className="flex items-center gap-1.5">
                      <Phone size={13} className="text-purple-400 print:text-black" />
                      <span>+91 8056235795</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2 print:text-black">
                  <span className="w-2 h-2 rounded-full bg-purple-500 print:hidden" />
                  Profile
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed print:text-black">
                  B.Tech Information Technology undergraduate with practical experience developing software applications across full-stack development, backend systems, databases, and DevOps through academic and personal projects. Demonstrates a hands-on approach to problem solving, application development, and deployment, with an interest in building reliable and practical software solutions. Seeking software development opportunities to apply existing skills while continuing to grow as an engineer.
                </p>
              </div>

              {/* Projects Section */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2 print:text-black">
                  <Briefcase size={14} className="print:hidden" />
                  Projects
                </h2>

                {/* Project 1 */}
                <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2 print:p-0 print:border-none print:bg-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-white text-base print:text-black">
                      Digital Lab Record & Internal Evaluation System
                    </h3>
                    <span className="text-xs font-semibold text-purple-400 print:text-black">2026</span>
                  </div>
                  <p className="text-xs text-purple-300 font-mono print:text-gray-700">
                    React · TypeScript · Node.js · Express · Supabase/PostgreSQL · REST APIs · AI
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed print:text-black">
                    Built a full-stack academic platform for managing lab submissions, faculty evaluation, internal marks, experiment records, dashboards, and role-based workflows.
                  </p>
                  <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 pl-1 print:text-black">
                    <li>Implemented Student, Faculty, and Administrator workflows with authentication, authorization, and database-backed access control.</li>
                    <li>Integrated AI-assisted experiment evaluation with faculty override support for controlled and flexible assessment.</li>
                    <li>Designed PostgreSQL data models and REST APIs for experiments, submissions, evaluations, and marks management.</li>
                    <li>Integrated isolated multi-language code execution using Docker-based runtime environments.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2 print:p-0 print:border-none print:bg-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-white text-base print:text-black">
                      OpsPilot — Docker Infrastructure & Container Management Platform
                    </h3>
                    <span className="text-xs font-semibold text-purple-400 print:text-black">2026</span>
                  </div>
                  <p className="text-xs text-purple-300 font-mono print:text-gray-700">
                    React · FastAPI · Python · Docker SDK · Docker Compose · PyYAML · psutil
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed print:text-black">
                    Built a centralized DevOps platform for Docker container lifecycle management, multi-container orchestration, monitoring, cleanup, health diagnostics, and audit logging.
                  </p>
                  <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 pl-1 print:text-black">
                    <li>Developed FastAPI REST APIs integrated with Docker SDK and Compose for deployment, resource estimation, replica scaling, health checks, and automated rollback.</li>
                    <li>Implemented a 7-stage Compose deployment workflow with YAML validation, grouped logs, resource estimation, health verification, and rollback on failure.</li>
                    <li>Built real-time CPU, memory, and network telemetry with platform health diagnostics and infrastructure health scoring.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2 print:p-0 print:border-none print:bg-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-white text-base print:text-black">
                      REAL-TIME FACE DETECTION & RECOGNITION SYSTEM
                    </h3>
                    <span className="text-xs font-semibold text-purple-400 print:text-black">2026</span>
                  </div>
                  <p className="text-xs text-purple-300 font-mono print:text-gray-700">
                    Python · OpenCV · MySQL · Tkinter
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed print:text-black">
                    Developed a real-time desktop application for face detection and recognition using live webcam input.
                  </p>
                  <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 pl-1 print:text-black">
                    <li>Implemented face-image capture and recognition workflows using OpenCV to identify registered students.</li>
                    <li>Integrated MySQL to store student information and retrieve corresponding records after recognition.</li>
                    <li>Built a Tkinter-based GUI for student registration, face capture, and real-time recognition.</li>
                  </ul>
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2 print:text-black">
                  <GraduationCap size={14} className="print:hidden" />
                  Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl glass-panel border border-white/5 space-y-1 print:p-0 print:border-none">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white text-xs sm:text-sm print:text-black">B.TECH – INFORMATION TECHNOLOGY</h3>
                      <span className="text-[10px] text-purple-400 font-medium print:text-black">2023-PRESENT</span>
                    </div>
                    <p className="text-xs text-zinc-400 print:text-black">St. Peters College of Engineering and Technology, Chennai</p>
                  </div>
                  <div className="p-3.5 rounded-xl glass-panel border border-white/5 space-y-1 print:p-0 print:border-none">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white text-xs sm:text-sm print:text-black">HIGHER SECONDARY – CLASS XII</h3>
                      <span className="text-[10px] text-purple-400 font-medium print:text-black">2021-2023</span>
                    </div>
                    <p className="text-xs text-zinc-400 print:text-black">Sri Sayee Vivekannanda Vidyalaya Matric Higher Secondary School, Chennai</p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2 print:text-black">
                  <Code2 size={14} className="print:hidden" />
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 print:text-black">
                  <div><strong className="text-white print:text-black">Languages:</strong> Java · Python · JavaScript · SQL</div>
                  <div><strong className="text-white print:text-black">Frontend:</strong> React, HTML, CSS, Vite, Tailwind CSS</div>
                  <div><strong className="text-white print:text-black">Backend:</strong> Node.js · Express.js · Flask · FastAPI · REST APIs</div>
                  <div><strong className="text-white print:text-black">Database:</strong> PostgreSQL, MySQL</div>
                  <div><strong className="text-white print:text-black">DevOps:</strong> Docker · Docker Compose · Docker SDK</div>
                  <div><strong className="text-white print:text-black">Tools:</strong> Git, GitHub, Docker, Vercel, Render</div>
                  <div className="sm:col-span-2"><strong className="text-white print:text-black">Core CS:</strong> DSA · OOP · DBMS · Operating Systems</div>
                </div>
              </div>

              {/* Highlights & Interests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2 print:text-black">
                    <Award size={14} className="print:hidden" />
                    Highlights
                  </h2>
                  <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 print:text-black">
                    <li>Built and deployed full-stack and DevOps projects through hands-on academic development.</li>
                    <li>Gained practical exposure to software backend systems, containerization, and application deployment.</li>
                    <li>Developed projects involving AI-assisted evaluation, Docker infrastructure, and computer vision.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2 print:text-black">
                    <Heart size={14} className="print:hidden" />
                    Interests
                  </h2>
                  <p className="text-xs text-zinc-300 leading-relaxed print:text-black">
                    Competitive Programming & DSA · Full-Stack Development · Building Software Projects · Exploring Emerging Technologies · Technical Learning
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 border-t border-white/10 bg-zinc-900/80 flex items-center justify-between text-xs text-zinc-400 print:hidden">
            <span>Sanjay S — Software Engineering Resume</span>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <Download size={13} /> Download / Save PDF
              </button>
            </div>
          </div>

        </motion.div>

        {/* Print Styles Injection */}
        <style>{`
          @media print {
            body * {
              visibility: hidden;
            }
            .printable-resume, .printable-resume * {
              visibility: visible;
            }
            .printable-resume {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              padding: 20px;
              color: black !important;
              background: white !important;
            }
          }
        `}</style>
      </div>
    </AnimatePresence>
  );
}
