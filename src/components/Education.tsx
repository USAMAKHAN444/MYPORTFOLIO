import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, Star } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Bachelor of Science in Artificial Intelligence
                    </h3>
                    <div className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      COMSATS University Islamabad
                    </div>
                    <div className="flex items-center space-x-1 text-green-400 mb-2">
                      <Award size={16} />
                      <span className="font-semibold">Completed</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-gray-400 mb-1">
                      <Calendar size={16} />
                      <span>2021 - 2025</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400 mb-2">
                      <MapPin size={16} />
                      <span>Islamabad, Pakistan</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star size={16} />
                      <span className="font-semibold">CGPA: 3.0/4.0</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Comprehensive program covering machine learning, deep learning, neural networks, computer vision, natural language processing, and AI ethics. Strong focus on practical applications and research methodologies.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <span className="text-yellow-400">•</span>
                      <span>CGPA: 3.0/4.0</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <span className="text-blue-400">•</span>
                      <span>Specialized in AI and Machine Learning</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <span className="text-green-400">•</span>
                      <span>Completed 80+ AI/ML projects</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <span className="text-purple-400">•</span>
                      <span>Led AI research initiatives</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Machine Learning',
                    'Deep Learning',
                    'Neural Networks',
                    'Computer Vision',
                    'Natural Language Processing',
                    'AI Ethics',
                    'Research Methodologies',
                    'Practical Applications'
                  ].map((subject, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/50 hover:border-blue-500/50 transition-colors duration-200"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;