import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './icons';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Simple Client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please provide a valid email address.');
      return;
    }

    // Simulate sending message
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSuccess(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-mesh">
      <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

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
            <Mail size={12} />
            Contact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 max-w-lg mx-auto mt-4 text-sm sm:text-base"
          >
            Have a question or want to work together? Drop me a message or connect via socials.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">Let's Connect</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I am actively seeking software development internships and full-time positions. Feel free to contact me directly using the contact form, email, or social media links.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-purple-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Email Me</p>
                    <a href="mailto:sanjays.dev@outlook.com" className="text-white hover:text-purple-400 transition-colors text-sm font-medium">
                      sanjays.dev@outlook.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-purple-400">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">LinkedIn</p>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors text-sm font-medium">
                      linkedin.com/in/sanjayshaa
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-purple-400">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">GitHub</p>
                    <a href="https://github.com/sanjayshaa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors text-sm font-medium">
                      github.com/sanjayshaa
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quote badge */}
            <div className="pt-6 border-t border-white/5 text-xs text-zinc-500 italic">
              "First, solve the problem. Then, write the code." — John Johnson
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 shadow-xl flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/80 transition-colors text-sm font-sans"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/80 transition-colors text-sm font-sans"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your message..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/80 transition-colors text-sm font-sans resize-none"
                />
              </div>

              {/* Error and Success Notifications */}
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium"
                  >
                    <AlertCircle size={14} className="flex-shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                  >
                    <CheckCircle2 size={14} className="flex-shrink-0" />
                    <span>Thank you! Your message was sent successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25 group cursor-pointer"
              >
                {submitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
