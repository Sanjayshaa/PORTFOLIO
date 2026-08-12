import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, ArrowUpRight, FolderGit2, Loader2 } from 'lucide-react';
import { Github } from './icons';

interface RepoData {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

const fallbackRepos: RepoData[] = [
  {
    id: 1,
    name: 'LAB-RECORD-SYSTEM',
    description: 'Digital laboratory record submission and automated code evaluation platform built with React, Node.js, and PostgreSQL.',
    html_url: 'https://github.com/Sanjayshaa/LAB-RECORD-SYSTEM',
    stargazers_count: 3,
    forks_count: 1,
    language: 'TypeScript',
    updated_at: '2026-02-10T00:00:00Z',
  },
  {
    id: 2,
    name: 'PORTFOLIO',
    description: 'Modern editorial software engineer portfolio website featuring 3D WebGL components, Motion physics, and dark design tokens.',
    html_url: 'https://github.com/Sanjayshaa/PORTFOLIO',
    stargazers_count: 5,
    forks_count: 2,
    language: 'TypeScript',
    updated_at: '2026-02-12T00:00:00Z',
  },
  {
    id: 3,
    name: 'OpsPilot',
    description: 'Docker container lifecycle management and Compose multi-container orchestration dashboard with real-time telemetry.',
    html_url: 'https://github.com/Sanjayshaa',
    stargazers_count: 2,
    forks_count: 0,
    language: 'Python',
    updated_at: '2026-01-20T00:00:00Z',
  },
  {
    id: 4,
    name: 'Face-Detection-System',
    description: 'Real-time OpenCV computer vision desktop application for student identification and MySQL database synchronization.',
    html_url: 'https://github.com/Sanjayshaa',
    stargazers_count: 4,
    forks_count: 1,
    language: 'Python',
    updated_at: '2025-11-15T00:00:00Z',
  },
];

export default function GitHub() {
  const [repos, setRepos] = useState<RepoData[]>(fallbackRepos);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.github.com/users/Sanjayshaa/repos?sort=updated&per_page=6');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          }
        }
      } catch {
        // Use fallbacks silently
      } finally {
        setIsLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
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
              <Github size={14} />
              <span>OPEN SOURCE</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
            >
              Public Repositories &amp; Code
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#8B95A5] max-w-xl mt-2 text-sm sm:text-base leading-relaxed"
            >
              Code, experiments, and public work maintained on GitHub.
            </motion.p>
          </div>

          {/* Secondary Profile CTA */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="https://github.com/Sanjayshaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D1117] hover:bg-[#161B22] border border-[#242A33] hover:border-purple-500/40 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-lg cursor-pointer self-start sm:self-auto"
          >
            <Github size={16} />
            <span>VIEW GITHUB PROFILE ↗</span>
          </motion.a>
        </div>

        {/* Repository Cards Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12 text-[#8B95A5] font-mono text-xs gap-2">
            <Loader2 size={16} className="animate-spin text-purple-400" />
            <span>Loading public repositories...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.id || idx}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-6 rounded-2xl bg-[#0D1117] border border-[#242A33] hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#07090D] border border-[#242A33] text-purple-400 group-hover:border-purple-500/40 transition-colors">
                        <FolderGit2 size={16} />
                      </div>
                      <h3 className="font-mono font-bold text-white text-base tracking-tight group-hover:text-purple-300 transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                    <ArrowUpRight size={16} className="text-[#8B95A5] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <p className="text-xs text-[#8B95A5] font-sans line-clamp-2 leading-relaxed">
                    {repo.description || 'Public GitHub repository showcasing software engineering work.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#242A33] flex items-center justify-between text-xs font-mono text-[#8B95A5]">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-zinc-300">
                        <span className="h-2 w-2 rounded-full bg-purple-400" />
                        <span>{repo.language}</span>
                      </span>
                    )}

                    <span className="flex items-center gap-1 hover:text-white transition-colors">
                      <Star size={13} className="text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>

                    <span className="flex items-center gap-1 hover:text-white transition-colors">
                      <GitBranch size={13} />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>

                  <span className="text-[11px] text-purple-400/80 font-semibold group-hover:text-purple-300 transition-colors">
                    View Repository →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
