import React from 'react';
import { ArrowDown, Github, Linkedin, MessageCircle, Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Usama_Shakeel_CV.pdf';
    link.download = 'Usama_Shakeel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Usama Shakeel
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient">
              AI Engineer
            </span>
          </h2>
          
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto animate-fade-in-up delay-300">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Building AI systems that drive business value and innovation.
            </span>
          </p>
          
          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-8 animate-fade-in-up delay-400">
            Transforming Ideas Into Intelligent Solutions
          </p>

          {/* Experience Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up delay-500">
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-purple-400 mb-2">80+</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-pink-400 mb-2">10+</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">AI Models Deployed</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up delay-600">
            <a
              href="https://wa.me/+923055620643"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 hover:scale-105 transform flex items-center space-x-2 shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Get In Touch</span>
            </a>
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 transform flex items-center space-x-2 shadow-lg"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-12 animate-fade-in-up delay-700">
            <a
              href="https://github.com/USAMAKHAN444"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/usama-shakeel-ba009328b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://wa.me/+923055620643"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all duration-200 hover:scale-110 transform"
            >
              <MessageCircle size={24} />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;