import React from 'react';
import { Github, Linkedin, MessageCircle, Download, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Usama_Shakeel_CV.pdf';
    link.download = 'Usama_Shakeel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Usama Shakeel
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              AI Engineer specializing in custom AI solutions that solve real-world problems. 
              Building intelligent systems that transform ideas into reality.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/USAMAKHAN444"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/usama-shakeel-ba009328b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://wa.me/+923055620643"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Experience', 'Education', 'Projects', 'Services', 'Skills'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/+923055620643"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Phone size={16} />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:usama@example.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Islamabad, Pakistan</span>
              </div>
              <button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 transform flex items-center space-x-2 mt-4"
              >
                <Download size={16} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Usama Shakeel. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;