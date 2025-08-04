import React from 'react';
import { Code, Cpu, Eye, Bot } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: '🖥️ Programming Languages',
      skills: [
        { name: 'Python', color: 'bg-blue-500' },
        { name: 'SQL', color: 'bg-green-500' },
        { name: 'JavaScript', color: 'bg-yellow-500' },
        { name: 'TypeScript', color: 'bg-blue-600' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: '⚙️ AI/ML Frameworks & APIs',
      skills: [
        { name: 'PyTorch', color: 'bg-red-500' },
        { name: 'TensorFlow', color: 'bg-orange-500' },
        { name: 'Hugging Face', color: 'bg-yellow-500' },
        { name: 'LangChain', color: 'bg-purple-500' },
        { name: 'OpenAI API', color: 'bg-green-600' },
        { name: 'Groq API', color: 'bg-blue-500' },
        { name: 'Together', color: 'bg-indigo-500' },
        { name: 'Azure', color: 'bg-blue-600' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: '🧠 Deep Learning & Computer Vision',
      skills: [
        { name: 'Transformers', color: 'bg-purple-600' },
        { name: 'Keras', color: 'bg-red-600' },
        { name: 'OpenCV', color: 'bg-blue-500' },
        { name: 'Scikit-learn', color: 'bg-orange-600' },
        { name: 'CUDA', color: 'bg-green-500' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: '🤖 AI Automation & Agents',
      skills: [
        { name: 'CrewAI', color: 'bg-orange-500' },
        { name: 'LangChain', color: 'bg-purple-500' },
        { name: 'AutoGen', color: 'bg-blue-500' },
        { name: 'LangGraph', color: 'bg-indigo-600' },
        { name: 'Function Calling (Tool Use)', color: 'bg-green-600' }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/20 dark:bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills & Tools
            </span>
          </h2>
        </div>

        {/* Infinite Horizontal Scroll Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-scroll">
            {/* First set of cards */}
            {skillCategories.map((category, index) => (
              <div
                key={`first-${index}`}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] min-w-[400px] flex-shrink-0"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Individual Skill Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 dark:bg-slate-700 rounded-lg px-4 py-2 flex items-center space-x-2 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                    >
                      <div className={`w-3 h-3 ${skill.color} rounded-full flex items-center justify-center`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless infinite scroll */}
            {skillCategories.map((category, index) => (
              <div
                key={`second-${index}`}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] min-w-[400px] flex-shrink-0"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Individual Skill Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 dark:bg-slate-700 rounded-lg px-4 py-2 flex items-center space-x-2 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                    >
                      <div className={`w-3 h-3 ${skill.color} rounded-full flex items-center justify-center`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;