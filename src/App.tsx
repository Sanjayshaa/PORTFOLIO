import { useState } from 'react';
import { Home, FolderGit2, User, Cpu, GraduationCap, Mail, FileText } from 'lucide-react';
import { Github } from './components/icons';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Principles from './components/Principles';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CaseStudyModal from './components/CaseStudyModal';

import Dock, { type DockItemData } from './components/reactbits/Dock';
import StaggeredMenu from './components/reactbits/StaggeredMenu';
import SplashCursor from './components/reactbits/SplashCursor';
import MoltenMetal from './components/reactbits/MoltenMetal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  const handleOpenCaseStudy = () => setIsCaseStudyOpen(true);
  const handleCloseCaseStudy = () => setIsCaseStudyOpen(false);

  // StaggeredMenu Slide-out Panel Items
  const menuItems = [
    { label: 'Home', link: '#hero', ariaLabel: 'Go to Hero' },
    { label: 'Work', link: '#projects', ariaLabel: 'View Selected Work' },
    { label: 'About', link: '#about', ariaLabel: 'Learn About Me' },
    { label: 'Skills', link: '#skills', ariaLabel: 'View Technical Capabilities' },
    { label: 'Experience', link: '#education', ariaLabel: 'View Education & Timeline' },
    { label: 'Contact', link: '#contact', ariaLabel: 'Get in Touch' },
  ];

  const socialItems = [
    { label: 'GitHub ↗', link: 'https://github.com/Sanjayshaa' },
    { label: 'LinkedIn ↗', link: 'https://www.linkedin.com/in/sanjay-s16/' },
    { label: 'Email ↗', link: 'mailto:sanjaysha9468@gmail.com' },
  ];

  // React Bits Dock Navigation Items
  const dockItems: DockItemData[] = [
    { icon: <Home size={18} />, label: 'Home', href: '#hero' },
    { icon: <FolderGit2 size={18} />, label: 'Work', href: '#projects' },
    { icon: <User size={18} />, label: 'About', href: '#about' },
    { icon: <Cpu size={18} />, label: 'Skills', href: '#skills' },
    { icon: <GraduationCap size={18} />, label: 'Education', href: '#education' },
    { icon: <Github size={18} />, label: 'GitHub', href: '#github' },
    { icon: <Mail size={18} />, label: 'Contact', href: '#contact' },
    { icon: <FileText size={18} className="text-[#A78BFA]" />, label: 'Resume', onClick: handleOpenResume },
  ];

  return (
    <div className="relative min-h-screen bg-[#07090D] text-[#F5F7FA] overflow-hidden font-sans selection:bg-purple-500/30 selection:text-white">
      
      {/* React Bits Component: Ambient SplashCursor */}
      <SplashCursor TRANSPARENT={true} />

      {/* React Bits Component: Subtle Chrome Shader Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <MoltenMetal
          color1="#000000"
          color2="#ffffff"
          color3="#6b6b6b"
          speed={0.3}
          scale={4.8}
          detail={3}
          glow={1.2}
          coreSize={0.09}
          swirl={0.8}
          fold={-0.2}
          blackPoint={0.06}
          brightness={1.1}
          colorMode="ember"
          grain={false}
          grainIntensity={0.03}
          mouseInteraction={true}
          mouseStrength={0.3}
          opacity={0.7}
        />
      </div>

      {/* React Bits Component: Primary Navigation StaggeredMenu Header */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        isFixed={true}
        closeOnClickAway={true}
        colors={['#07090D', '#161B22', '#21262D']}
        menuButtonColor="#F5F7FA"
        openMenuButtonColor="#A78BFA"
        accentColor="#A78BFA"
      />

      {/* React Bits Component: Fixed Dock Navigation Bar */}
      <Dock
        items={dockItems}
        panelHeight={60}
        baseItemSize={42}
        magnification={64}
        distance={180}
      />
      
      {/* Main Sections - Continuous Flow without Full-Width Divider Lines */}
      <main className="relative z-10 pt-16">
        <div id="hero">
          <Hero onOpenResume={handleOpenResume} />
        </div>
        <div id="projects">
          <Projects onOpenCaseStudy={handleOpenCaseStudy} />
        </div>
        <div id="principles">
          <Principles />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="github">
          <GitHub />
        </div>
        <div id="contact">
          <Contact onOpenResume={handleOpenResume} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
      <CaseStudyModal isOpen={isCaseStudyOpen} onClose={handleCloseCaseStudy} />
    </div>
  );
}

export default App;
