
import './App.scss';

import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Foote';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import LanguageContext from './context/LanguageContext';
import ParticleBackground from './components/intro/Particle';

function App() {
  const [open, setOpen] = useState(false);
  console.log("askljadfoksdj")
  return (
    <LanguageContext>
      <div className='app'>
        <Navbar open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <div class="container">
          <Intro />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <ParticleBackground />
        </div>
        <Footer />
      </div>
    </LanguageContext>
  );
}

export default App;
