import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, FolderGit2 } from 'lucide-react';
import { Github } from './icons';

interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const FALLBACK_PROFILE: GitHubProfile = {
  login: 'Sanjayshaa',
  name: 'Sanjay S',
  avatar_url: 'https://github.com/Sanjayshaa.png',
  html_url: 'https://github.com/Sanjayshaa',
  bio: 'Information Technology Student | Full Stack Developer | Software Engineering Aspirant',
  public_repos: 12,
  followers: 18,
  following: 15,
};

const FALLBACK_REPOS: Repository[] = [
  {
    name: 'LAB-RECORD-SYSTEM',
    description: 'A full-stack lab record management platform for colleges with student submissions, faculty evaluation, admin management, and PDF handling.',
    html_url: 'https://github.com/Sanjayshaa/LAB-RECORD-SYSTEM',
    stargazers_count: 5,
    forks_count: 2,
    language: 'TypeScript',
  },
  {
    name: 'OpsPilot',
    description: 'A Docker container orchestration and telemetry platform for managing multi-container application lifecycles.',
    html_url: 'https://github.com/Sanjayshaa',
    stargazers_count: 4,
    forks_count: 1,
    language: 'Python',
  },
  {
    name: 'Face-Detection-System',
    description: 'A facial detection and recognition tool using Python and OpenCV for student identification and attendance workflows.',
    html_url: 'https://github.com/Sanjayshaa',
    stargazers_count: 3,
    forks_count: 1,
    language: 'Python',
  },
  {
    name: 'PORTFOLIO',
    description: 'Art-directed software engineer portfolio crafted with React, TypeScript, Tailwind CSS, and WebGL React Bits shaders.',
    html_url: 'https://github.com/Sanjayshaa/PORTFOLIO',
    stargazers_count: 2,
    forks_count: 0,
    language: 'TypeScript',
  },
];

export default function GitHub() {
  const [profile, setProfile] = useState<GitHubProfile>(FALLBACK_PROFILE);
  const [repos, setRepos] = useState<Repository[]>(FALLBACK_REPOS);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/Sanjayshaa'),
          fetch('https://api.github.com/users/Sanjayshaa/repos?sort=updated&per_page=6'),
        ]);

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile(profileData);
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            setRepos(reposData.slice(0, 4));
          }
        }
      } catch (err) {
        console.warn('Using fallback GitHub data:', err);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-transparent border-t border-[#242A33]">
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
            <Github size={14} />
            <span>06 / OPEN SOURCE &amp; CODEBASE HUB</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Authentic GitHub Repositories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8B95A5] max-w-xl mt-4 text-sm sm:text-base leading-relaxed"
          >
            Direct live synchronization with my GitHub profile (<strong className="text-purple-300 font-mono">@Sanjayshaa</strong>).
          </motion.p>
        </div>

        {/* GitHub Profile Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="editorial-panel p-6 sm:p-8 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={profile.avatar_url}
                alt={profile.name}
                className="w-16 h-16 rounded-full border-2 border-purple-500/40"
              />
              <div>
                <h3 className="font-display font-bold text-xl text-white">{profile.name}</h3>
                <p className="font-mono text-xs text-purple-400">@{profile.login}</p>
                <p className="text-xs text-[#8B95A5] mt-1 max-w-md">{profile.bio}</p>
              </div>
            </div>

            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs sm:text-sm transition-colors self-start sm:self-auto"
            >
              <Github size={16} />
              <span>View GitHub Profile ↗</span>
            </a>
          </div>

          {/* Quick GitHub Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#242A33] text-center font-mono">
            <div className="p-3 rounded-xl bg-[#07090D] border border-[#242A33]">
              <span className="block font-bold text-lg text-white">{profile.public_repos}</span>
              <span className="text-[11px] text-[#8B95A5] uppercase tracking-wider">Public Repos</span>
            </div>
            <div className="p-3 rounded-xl bg-[#07090D] border border-[#242A33]">
              <span className="block font-bold text-lg text-white">{profile.followers}</span>
              <span className="text-[11px] text-[#8B95A5] uppercase tracking-wider">Followers</span>
            </div>
            <div className="p-3 rounded-xl bg-[#07090D] border border-[#242A33]">
              <span className="block font-bold text-lg text-white">{profile.following}</span>
              <span className="text-[11px] text-[#8B95A5] uppercase tracking-wider">Following</span>
            </div>
          </div>
        </motion.div>

        {/* Public Repository Grid */}
        <div className="space-y-4">
          <span className="font-mono text-xs text-[#8B95A5] uppercase tracking-widest font-semibold block">
            PUBLIC REPOSITORIES
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-panel editorial-panel-hover p-6 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold">
                      <FolderGit2 size={16} />
                      <span className="group-hover:text-white transition-colors">{repo.name}</span>
                    </div>
                    <ExternalLink size={14} className="text-[#8B95A5] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-xs text-[#8B95A5] leading-relaxed line-clamp-2">
                    {repo.description || 'Public software engineering repository.'}
                  </p>
                </div>

                <div className="flex items-center justify-between font-mono text-xs text-[#8B95A5] pt-2 border-t border-[#242A33]">
                  <span className="px-2 py-0.5 rounded bg-[#07090D] border border-[#242A33] text-purple-300">
                    {repo.language || 'Code'}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star size={13} className="text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={13} className="text-blue-400" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
