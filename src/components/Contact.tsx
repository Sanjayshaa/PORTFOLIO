import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, ArrowUpRight, FileText, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './icons';

interface ContactProps {
  onOpenResume?: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailAddress = 'sanjaysha9468@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger direct mailto dispatch to recipient sanjaysha9468@gmail.com
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Sanjay,\n\n${formData.message}\n\n---\nSender Information:\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-transparent">
      <div className="w-[min(94vw,1600px)] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
        
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

          {/* Contact Actions Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-3.5"
          >
            {/* Direct Email Button */}
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors shadow-xl shadow-purple-500/20"
            >
              <Mail size={16} />
              <span>{emailAddress}</span>
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#0D1117] border border-[#242A33] hover:border-purple-500/40 text-[#8B95A5] hover:text-white font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
            </button>

            {/* LinkedIn Link */}
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

            {/* GitHub Link */}
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

            {/* Resume Trigger & Direct PDF Download */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0D1117] border border-[#242A33] hover:border-purple-500/40 text-white font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              <FileText size={16} className="text-purple-400" />
              <span>Preview Resume</span>
            </button>

            <a
              href="/Sanjay_S_Resume.pdf"
              download="Sanjay_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600 hover:text-white text-purple-300 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer"
            >
              <FileText size={16} />
              <span>Download PDF ↗</span>
            </a>
          </motion.div>
        </div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="editorial-panel p-8 sm:p-10 max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 inline-block">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Opening Email Client...</h3>
              <p className="text-xs font-mono text-[#8B95A5] max-w-md mx-auto leading-relaxed">
                Your message has been formatted and directed to <strong className="text-purple-300">sanjaysha9468@gmail.com</strong>.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${emailAddress}?subject=${encodeURIComponent(`Inquiry from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <Mail size={14} />
                  <span>Send via Email Client</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#242A33] pb-4">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  SEND DIRECT MESSAGE
                </span>
                <span className="font-mono text-[11px] text-[#8B95A5]">
                  TO: sanjaysha9468@gmail.com
                </span>
              </div>

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
                <span>Send Message to sanjaysha9468@gmail.com</span>
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
