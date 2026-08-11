import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import MoltenMetal from './components/reactbits/MoltenMetal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <div className="relative min-h-screen bg-brand-dark text-zinc-100 overflow-hidden font-sans selection:bg-purple-500/30 selection:text-white">
      {/* React Bits Component: MoltenMetal Chrome Silver Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <MoltenMetal
          color1="#000000"
          color2="#ffffff"
          color3="#6b6b6b"
          speed={0.4}
          scale={4.8}
          detail={3}
          glow={1.5}
          coreSize={0.11}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.2}
          colorMode="ember"
          grain={false}
          grainIntensity={0.04}
          mouseInteraction={true}
          mouseStrength={0.4}
          opacity={1.0}
        />
      </div>

      <Navbar onOpenResume={handleOpenResume} />
      
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <About onOpenResume={handleOpenResume} />
        <Skills />
        <Projects />
        <Education />
        <GitHub />
        <Contact />
      </main>

      <Footer />

      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}

export default App;
