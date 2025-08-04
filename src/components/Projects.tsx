import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Digitalaalim - Islamic AI Chatbot',
      category: 'LLM Application',
      description: 'GPT-4-based intelligent chatbot specialized in Quran and Hadith queries, ensuring theological accuracy and seamless user interaction. Deployed on digitalaalim.in with advanced NLP capabilities.',
      features: [
        'Theological query processing with high accuracy',
        'Real-time Quran and Hadith search',
        'Context-aware Islamic guidance'
      ],
      technologies: ['GPT-4', 'NLP', 'LangChain', 'Python'],
      liveDemo: '#',
      code: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Medical Dialogue Chatbot',
      category: 'Healthcare AI',
      description: 'Fine-tuned LLaMA 2 (13B) model specifically for medical dialogues, enhancing patient-doctor interactions with accurate and real-time AI-driven medical responses.',
      features: [
        'Medical conversation understanding',
        'Patient symptom analysis',
        'Real-time medical guidance'
      ],
      technologies: ['LLaMA 2', 'Fine-tuning', 'PyTorch', 'Medical NLP'],
      code: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Arabic Pronunciation Evaluator',
      category: 'Speech AI',
      description: 'AI-powered Arabic letter pronunciation assessment using Whisper and LLaMA 3 with Groq API. Provides real-time feedback on pronunciation accuracy through advanced speech recognition.',
      features: [
        'Real-time pronunciation analysis',
        'Arabic speech recognition',
        'Automated feedback generation'
      ],
      technologies: ['Whisper', 'LLaMA 3', 'Groq API', 'Speech Recognition'],
      code: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Health & Food Analyzer',
      category: 'Computer Vision',
      description: 'AI-powered healthcare app that analyzes food, fruit, or drink images to provide personalized health recommendations based on user conditions like diabetes and fever.',
      features: [
        'Food image recognition and analysis',
        'Personalized health recommendations',
        'Dietary advice for medical conditions'
      ],
      technologies: ['Computer Vision', 'LLM', 'LangChain', 'Image Processing'],
      code: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI Career Advisor System',
      category: 'Educational AI',
      description: 'Comprehensive AI system that guides students to optimal career paths through academic, interest, and personality analysis, generating detailed Career Reports with learning resources.',
      features: [
        'Academic performance analysis',
        'Interest and personality assessment',
        'Personalized career pathways'
      ],
      technologies: ['Machine Learning', 'Data Analysis', 'NLP', 'Personality Analysis'],
      code: '#',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI Marketing Agency Platform',
      category: 'Marketing AI',
      description: 'React & FastAPI web application with custom AI agents using LLM and function calling to automate Google Ads management, including campaign setup, audience targeting, and creative generation.',
      features: [
        'Automated campaign creation',
        'AI-powered audience targeting',
        'Dynamic ad scheduling'
      ],
      technologies: ['React', 'FastAPI', 'LLM', 'Function Calling'],
      code: '#',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const categories = ['All', 'LLM Application', 'Healthcare AI', 'Computer Vision', 'Speech AI', 'Educational AI', 'Marketing AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing AI/ML solutions that solve real-world problems through advanced machine learning, deep learning, and natural language processing
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
              }`}
            >
              <Filter size={16} />
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.liveDemo ? 'flex-1' : 'w-full'} bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-all duration-200 flex items-center justify-center space-x-2 text-sm`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;