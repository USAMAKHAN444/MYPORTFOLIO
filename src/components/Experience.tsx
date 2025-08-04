import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Developer',
      company: 'Vertekx',
      location: 'Lahore, Punjab, Pakistan',
      type: 'Hybrid',
      duration: 'May 2025 - Present',
      employment: 'Full-time',
      description: 'AI Developer at Vertekx, leading initiatives in large language model (LLM) integration and AI-as-a-Service (AIaaS) development. My work focuses on building scalable, intelligent systems that turn complex challenges into deployable AI solutions.',
      achievements: [
        'Leading LLM integration and AI-as-a-Service (AIaaS) development',
        'Building scalable, intelligent systems for complex AI challenges',
        'Contributing to full lifecycle of AI-powered SaaS platforms',
        'Ensuring measurable business impact through cutting-edge technology',
        'Delivering secure, efficient, and production-ready AI systems'
      ],
      skills: ['LLM Application Development', 'Prompt Engineering', 'SaaS Platform Engineering', 'AIaaS Development', 'Production Deployment'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Researcher & AI Developer',
      company: 'EnDevSols LLC',
      location: 'Islamabad, Pakistan',
      type: 'Hybrid',
      duration: 'Apr 2023 - Jul 2025',
      employment: 'Full-time',
      description: 'Specialized in developing advanced AI solutions including LLMs, chatbots, and intelligent systems. Led multiple high-impact projects in machine learning, deep learning, NLP, and computer vision, transforming complex data into actionable insights.',
      achievements: [
        'Leading AI development and technology strategy',
        'Managing technical teams and project delivery',
        'Architecting scalable AI solutions for enterprise clients',
        'Driving innovation in AI-powered business solutions'
      ],
      skills: ['Machine Learning', 'Deep Learning', 'LLM Development', 'Fine-tuning', 'NLP', 'Computer Vision', 'PyTorch', 'TensorFlow'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Expert & International Collaborator',
      company: 'Freelance & International Projects',
      location: 'Remote',
      type: 'Remote',
      duration: '2023 - 2025',
      employment: 'Contract',
      description: 'Collaborating with international clients and projects as an AI expert, delivering innovative solutions globally.',
      achievements: [
        'Collaborated with international clients worldwide',
        'Delivered AI solutions for diverse industries',
        'Provided expert consultation on AI implementations',
        'Contributed to global AI research initiatives'
      ],
      skills: ['International Collaboration', 'AI Consulting', 'Cross-cultural Communication', 'Global Project Management'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            2+ years of hands-on experience in AI development, machine learning solutions, and intelligent system design across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{exp.location} • {exp.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="bg-slate-700 px-2 py-1 rounded text-xs">{exp.employment}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements & Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-green-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/50 hover:border-blue-500/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;