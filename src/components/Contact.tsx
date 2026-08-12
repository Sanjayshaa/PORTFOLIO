import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, ArrowUpRight, FileText } from 'lucide-react';
import { Github, Linkedin } from './icons';

interface ContactProps {
  onOpenResume?: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-transparent border-t border-[#242A33]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-purple-400 tracking-widest uppercase font-semibold"
          >
            <Mail size={14} />
            <span>07 / GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-white"
          >
            LET'S BUILD SOMETHING.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8B95A5] text-base sm:text-lg leading-relaxed font-sans"
          >
            I am currently open to software development internships, full-time engineering roles, and technical collaborations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:sanjaysha9468@gmail.com"
              className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors shadow-xl shadow-purple-500/20"
            >
              sanjaysha9468@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/sanjay-s16/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1117] border border-[#242A33] hover:border-blue-500/40 text-white font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <Linkedin size={16} className="text-blue-400" />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} className="text-[#8B95A5]" />
            </a>

            <a
              href="https://github.com/Sanjayshaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1117] border border-[#242A33] hover:border-purple-500/40 text-white font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={14} className="text-[#8B95A5]" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1117] border border-[#242A33] hover:border-purple-500/40 text-white font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              <FileText size={16} className="text-purple-400" />
              <span>Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Minimal Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="editorial-panel p-8 sm:p-10 max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 inline-block">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Message Dispatched</h3>
              <p className="text-xs font-mono text-[#8B95A5]">Thank you! I will respond to your email promptly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#8B95A5] uppercase tracking-wider block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#07090D] border border-[#242A33] text-white text-sm focus:outline-none focus:border-purple-500/60 font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#8B95A5] uppercase tracking-wider block">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#07090D] border border-[#242A33] text-white text-sm focus:outline-none focus:border-purple-500/60 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-[#8B95A5] uppercase tracking-wider block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Let's discuss an engineering role or technical project..."
                  className="w-full px-4 py-3 rounded-xl bg-[#07090D] border border-[#242A33] text-white text-sm focus:outline-none focus:border-purple-500/60 font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-xl shadow-purple-500/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <Send size={15} />
                <span>Send Direct Message</span>
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
