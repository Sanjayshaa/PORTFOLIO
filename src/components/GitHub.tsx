import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Link, RefreshCw, GitFork } from 'lucide-react';
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
  login: 'sanjayshaa',
  name: 'Sanjay S',
  avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80', // Premium initial placeholder or fallback
  html_url: 'https://github.com/sanjayshaa',
  bio: 'Information Technology Student | Full Stack Developer | Software Engineering Aspirant',
  public_repos: 12,
  followers: 18,
  following: 15,
};

const FALLBACK_REPOS: Repository[] = [
  {
    name: 'LAB-RECORD-SYSTEM',
    description: 'A full-stack lab record management platform for colleges with student submissions, faculty evaluation, admin management, and PDF handling.',
    html_url: 'https://github.com/sanjayshaa/LAB-RECORD-SYSTEM',
    stargazers_count: 5,
    forks_count: 2,
    language: 'TypeScript',
  },
  {
    name: 'Face-Detection-System',
    description: 'A facial detection and recognition tool using Python and OpenCV for student identification and attendance workflows.',
    html_url: 'https://github.com/sanjayshaa',
    stargazers_count: 3,
    forks_count: 1,
    language: 'Python',
  },
  {
    name: 'developer-portfolio',
    description: 'Modern developer portfolio crafted with React, TypeScript, Tailwind CSS, and Framer Motion.',
    html_url: 'https://github.com/sanjayshaa',
    stargazers_count: 2,
    forks_count: 0,
    language: 'TypeScript',
  },
];

// Helper to generate contributions grid (simulated activity)
function generateContributions() {
  const grid = [];
  const days = 7;
  const weeks = 53;
  
  // Seed random generator to keep grid consistent or semi-realistic
  let seed = 4.5;
  const pseudoRandom = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < days; d++) {
      const val = pseudoRandom();
      let level = 0;
      if (val > 0.85) level = 4;
      else if (val > 0.65) level = 3;
      else if (val > 0.4) level = 2;
      else if (val > 0.15) level = 1;
      week.push(level);
    }
    grid.push(week);
  }
  return grid;
}

export default function GitHub() {
  const [profile, setProfile] = useState<GitHubProfile>(FALLBACK_PROFILE);
  const [repos, setRepos] = useState<Repository[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);
  const [contributionsGrid] = useState(() => generateContributions());

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Check local storage cache first
        const cachedProfile = localStorage.getItem('github_profile');
        const cachedRepos = localStorage.getItem('github_repos');
        const cacheTimestamp = localStorage.getItem('github_cache_time');
        
        const isCacheValid = cacheTimestamp && (Date.now() - parseInt(cacheTimestamp) < 1000 * 60 * 60); // 1 hour

        if (cachedProfile && cachedRepos && isCacheValid) {
          setProfile(JSON.parse(cachedProfile));
          setRepos(JSON.parse(cachedRepos));
          setLoading(false);
          return;
        }

        // Fetch new data
        const profileRes = await fetch('https://api.github.com/users/sanjayshaa');
        if (!profileRes.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileRes.json();

        const reposRes = await fetch('https://api.github.com/users/sanjayshaa/repos?sort=updated&per_page=6');
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposRes.json();

        // Save to cache
        localStorage.setItem('github_profile', JSON.stringify(profileData));
        localStorage.setItem('github_repos', JSON.stringify(reposData));
        localStorage.setItem('github_cache_time', Date.now().toString());

        setProfile(profileData);
        setRepos(reposData);
      } catch (err) {
        console.warn('GitHub API failed, using high-quality mock fallbacks.', err);
        // We use fallback data already set in useState
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Contribution level to CSS classes helper
  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-emerald-950 border border-emerald-900/40';
      case 2: return 'bg-emerald-800 border border-emerald-700/40';
      case 3: return 'bg-emerald-600 border border-emerald-500/40';
      case 4: return 'bg-emerald-400 border border-emerald-300/40';
      default: return 'bg-zinc-900 border border-white/5';
    }
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-mesh">
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

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
            <Github size={12} />
            GitHub Hub
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white"
          >
            Open Source Activity
          </motion.h2>
        </div>

        {/* Profile Card & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 p-6 rounded-2xl glass-panel border border-white/5 flex flex-col items-center text-center space-y-4"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <img
                src={profile.avatar_url}
                alt={profile.name}
                className="relative w-24 h-24 rounded-full border-2 border-white/10 object-cover"
              />
            </div>
            
            <div className="space-y-1">
              <h3 className="font-display font-bold text-xl text-white">{profile.name}</h3>
              <p className="text-zinc-500 text-sm">@{profile.login}</p>
            </div>
            
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[280px]">
              {profile.bio}
            </p>

            {/* Stats Block */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5 w-full text-center">
              <div>
                <p className="text-white font-bold font-display text-lg">{profile.public_repos}</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Repos</p>
              </div>
              <div>
                <p className="text-white font-bold font-display text-lg">{profile.followers}</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Followers</p>
              </div>
              <div>
                <p className="text-white font-bold font-display text-lg">{profile.following}</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Following</p>
              </div>
            </div>

            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-900 border border-white/10 hover:border-purple-500/30 text-xs font-semibold rounded-xl text-white w-full transition-all group"
            >
              <Github size={14} className="group-hover:scale-110 transition-transform" />
              <span>Visit GitHub Profile</span>
            </a>
          </motion.div>

          {/* Contributions Graph Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 p-6 rounded-2xl glass-panel border border-white/5 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-white">Contribution Board</h3>
                <p className="text-zinc-400 text-xs">Simulated active year-round coding graph</p>
              </div>
              {loading && <RefreshCw className="animate-spin text-zinc-400" size={16} />}
            </div>

            {/* Matrix of green squares */}
            <div className="overflow-x-auto pb-2 -mx-2 px-2 select-none">
              <div className="flex gap-[3px] min-w-[700px] justify-between">
                {contributionsGrid.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-[3px]">
                    {week.map((level, dIndex) => (
                      <div
                        key={dIndex}
                        className={`w-[11px] h-[11px] rounded-[2px] transition-colors duration-300 hover:scale-125 hover:z-10 ${getLevelColor(
                          level
                        )}`}
                        title={`Activity Level: ${level}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Footnotes */}
            <div className="flex justify-between items-center text-[10px] sm:text-xs text-zinc-500 pt-2 border-t border-white/5">
              <span>Past 365 Days</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-[11px] h-[11px] rounded-[2px] bg-zinc-900 border border-white/5" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-emerald-950" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-emerald-800" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-emerald-600" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-emerald-400" />
                <span>More</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Repositories showcase */}
        <div>
          <h3 className="font-display font-semibold text-lg text-zinc-300 mb-6">Featured Repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.slice(0, 3).map((repo, idx) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-xl glass-panel border border-white/5 hover:border-purple-500/20 transition-all flex flex-col justify-between group h-48"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-white group-hover:text-purple-400 transition-colors font-display text-sm sm:text-base truncate pr-3">
                      {repo.name}
                    </span>
                    <Link size={14} className="text-zinc-500 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-zinc-500 mt-4 pt-4 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    {repo.language || 'Code'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={12} className="text-zinc-400" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GitFork size={12} className="text-zinc-400" />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
