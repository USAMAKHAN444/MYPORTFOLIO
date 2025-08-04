import React from 'react';
import { Brain, Bot, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: '🧠 AI Development & Research',
      services: [
        'Custom Model Development for domain-specific needs',
        'Advanced Research Solutions in ML, DL, and AI systems',
        'Building intelligent systems with Generative AI'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: '🤖 Intelligent Automation & LLMs',
      services: [
        'LLM Integration for task-specific applications',
        'Agent-Based Automation using tools like CrewAI & AutoGPT',
        'Deployable and scalable AI-as-a-Service (AIaaS) products'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: '🛠️ Product Engineering & Deployment',
      services: [
        'SaaS Platform Development powered by AI agents',
        'Robust FastAPI Backend Development for AI pipelines',
        'End-to-end Deployment of secure and production-ready systems'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services I Offer
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6`}>
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-white mb-6">{service.title}</h3>

              {/* Service List */}
              <ul className="space-y-4">
                {service.services.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-300">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;