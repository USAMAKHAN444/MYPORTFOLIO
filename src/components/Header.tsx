import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, MessageCircle, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Usama_Shakeel_CV.pdf';
    link.download = 'Usama_Shakeel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Usama Shakeel
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Education', 'Projects', 'Services', 'Skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:scale-105 transform"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Links & CV Download */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/USAMAKHAN444"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-all duration-200 hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/usama-shakeel-ba009328b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-all duration-200 hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/+923055620643"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-all duration-200 hover:scale-110 transform"
            >
              <MessageCircle size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-all duration-200 hover:scale-110 transform p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700/50"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 transform flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {['About', 'Experience', 'Education', 'Projects', 'Services', 'Skills'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-300 dark:border-gray-700">
                <a
                  href="https://github.com/USAMAKHAN444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-all duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/usama-shakeel-ba009328b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-all duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://wa.me/+923055620643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-all duration-200"
                >
                  <MessageCircle size={20} />
                </a>
                <button
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;