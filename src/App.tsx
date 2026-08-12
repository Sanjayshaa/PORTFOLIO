import { useState } from 'react';
import Navbar from './components/Navbar';
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

import SplashCursor from './components/reactbits/SplashCursor';
import MoltenMetal from './components/reactbits/MoltenMetal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  const handleOpenCaseStudy = () => setIsCaseStudyOpen(true);
  const handleCloseCaseStudy = () => setIsCaseStudyOpen(false);

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

      {/* Magnetic Dock-Inspired Top Navigation Bar */}
      <Navbar onOpenResume={handleOpenResume} />
      
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
