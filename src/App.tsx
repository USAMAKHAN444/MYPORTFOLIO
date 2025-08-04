import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Services />
        <Skills />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;