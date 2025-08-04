import React from 'react';
import { Brain, Code, Rocket, Users } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2021–2022',
      title: 'The Beginning',
      description: 'Started my AI journey learning ML fundamentals in 2021. In early 2022, I built my first ML project and developed a custom CNN model from scratch using only NumPy—without PyTorch or TensorFlow. During this time, I collaborated with MS and PhD researchers to build custom models.',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: 'AI Transformers & LLMs',
      description: 'Transitioned to custom transformers and hybrid deep learning + ML models. By mid-2023, I worked on LLM development, generative AI frameworks, and built AI applications like summarizers, paraphrasers, digital alarms, X-ray analyzers, OCR tools, and chatbots.',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: 'Late 2023–2024',
      title: 'Research & Development',
      description: 'Started research projects in late 2023. By mid-2024, deployed AI agents and FastAPI backends powering intelligent chatbots and automation.',
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: 'Late 2024–Present',
      title: 'Full-Stack & Products',
      description: 'Expanded into intermediate web development. Currently building AI-as-a-Service (AIaaS), Agent-as-a-Service (AaaS), and SaaS products that deliver scalable AI solutions.',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            I'm an experienced AI Engineer specializing in custom AI solutions that solve real-world problems.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I build intelligent systems that transform ideas into reality.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 my-8 md:my-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg animate-pulse`}>
                    {item.icon}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;