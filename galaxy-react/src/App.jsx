import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';

import ScrollProgress from './components/ScrollProgress';
import MouseParallax from './components/MouseParallax';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <MouseParallax />
      <CustomCursor />
      <Particles
        particleColors={['#6366f1', '#a855f7']}
        particleCount={100}
        particleSpread={10}
        speed={0.03}
        particleBaseSize={40}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
      <Navbar />
      <main>
        <Hero />
        <div className="blob-bg blob-1"></div>
        <About />
        <div className="blob-bg blob-2"></div>
        <Skills />
        <Experience />
        <div className="blob-bg blob-3"></div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
