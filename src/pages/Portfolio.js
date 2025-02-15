import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Codepen, Cpu, X, Menu, Server, Database, Code2, BookOpen, FileText } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState('main');
  const [messageSent, setMessageSent] = useState(false);

  const skills = {
    backend: [
     
      { name: 'Python', level: 75 },
      { name: 'REST APIs', level: 85 },
    
    ],
    frontend: [
      { name: 'React', level: 70 },
  
      { name: 'JavaScript', level: 80 },
    
    ],
    databases: [

      { name: 'MySQL', level: 70 },
      { name: 'PostgreSQL', level: 65 },

    ]
  };

  const experience = [
    {
      role: "Backend Developer Intern",
      company: "Tech Startup Co.",
      duration: "Jan 2023 - Present",
      details: [
        "Developed REST APIs using Node.js and Express",
        "Implemented authentication with JWT",
        "Optimized database queries improving response times by 30%"
      ]
    },
    {
      role: "Freelance Fullstack Developer",
      company: "Various Clients",
      duration: "Jun 2022 - Dec 2022",
      details: [
        "Built fullstack applications with React frontends",
        "Created CMS systems using MongoDB",
        "Deployed applications on cloud platforms"
      ]
    }
  ];

  const projects = [
    {
      title: 'E-commerce API',
      description: 'RESTful API for online store with product management and order processing',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      url: 'https://github.com/example/ecommerce-api'
    },
    {
      title: 'Task Management App',
      description: 'Fullstack application with React frontend and Node.js backend',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
      url: 'https://github.com/example/task-manager'
    },
    {
      title: 'Blog Platform',
      description: 'CMS-style blog with user authentication and CRUD operations',
      tech: ['Python', 'Django', 'SQLite', 'Bootstrap'],
      url: 'https://github.com/example/blog-platform'
    }
  ];

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => setMessageSent(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 overflow-x-hidden">
      {/* Dynamic Grid Background */}
      <div className="fixed -inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-cyber">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setActiveView('main')}
                className={`p-2 rounded-lg transition-all ${activeView === 'main' ? 
                  'bg-cyan-500/20 text-cyan-400 shadow-cyber-inner' : 'hover:bg-zinc-800/50'}`}
              >
                <Terminal className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setActiveView('projects')}
                className={`p-2 rounded-lg transition-all ${activeView === 'projects' ? 
                  'bg-purple-500/20 text-purple-400 shadow-cyber-inner' : 'hover:bg-zinc-800/50'}`}
              >
                <Codepen className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <a 
                  href="/resume.pdf"
                  className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-colors flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Resume
                </a>
                <a href="https://github.com" className="p-2 hover:text-cyan-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className="p-2 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <button 
                className="p-2 hover:text-cyan-400 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

{/* Main View - Simplified Hero */}
<section className={`${activeView === 'main' ? 'block' : 'hidden'} relative z-10`}>
  <div className="container mx-auto px-4 pt-32 pb-24">
    <div className="max-w-4xl mx-auto text-center">
      {/* Profile Image Section */}
      <div className="mb-8">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 mx-auto">
          <img 
            src="/assets/myphoto.jpg" 
            // F:\Project\portfolioreact\portfolio\public\assets\myphoto.jpg
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-zinc-900"
          />
        </div>
      </div>

      {/* Header Text */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Backend Developer & 
        <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Fullstack Enthusiast
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        Building robust systems and exploring fullstack development.
        Passionate about creating efficient solutions and continuous learning.
      </p>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mb-16">
        <a
          href="#contact"
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center gap-2"
        >
          <FileText className="w-5 h-5" />
          View Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6">
        <a href="https://github.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:contact@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
      {/* Skills Section */}
      <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Backend Skills */}
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-700">
                  <div className="flex items-center gap-3 mb-6">
                    <Server className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-bold">Backend Development</h3>
                  </div>
                  <div className="space-y-4">
                    {skills.backend.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{skill.name}</span>
                          <span className="text-cyan-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-zinc-800 rounded-full">
                          <div 
                            className="h-full bg-cyan-500 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frontend Skills */}
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-700">
                  <div className="flex items-center gap-3 mb-6">
                    <Code2 className="w-8 h-8 text-purple-400" />
                    <h3 className="text-xl font-bold">Frontend Development</h3>
                  </div>
                  <div className="space-y-4">
                    {skills.frontend.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{skill.name}</span>
                          <span className="text-purple-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-zinc-800 rounded-full">
                          <div 
                            className="h-full bg-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database Skills */}
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-700">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-8 h-8 text-green-400" />
                    <h3 className="text-xl font-bold">Databases</h3>
                  </div>
                  <div className="space-y-4">
                    {skills.databases.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{skill.name}</span>
                          <span className="text-green-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-zinc-800 rounded-full">
                          <div 
                            className="h-full bg-green-500 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Experience</h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div 
                    key={index}
                    className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-700"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <span className="text-gray-400 text-sm">{exp.duration}</span>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.company}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="text-gray-300">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
</section>
      

      {/* Projects View */}
      <section className={`${activeView === 'projects' ? 'block' : 'hidden'} relative z-10`}>
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-700 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="mb-4">
                    <Cpu className="w-8 h-8 text-cyan-400 mb-3" />
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-zinc-800 rounded-full text-sm border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.url}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                  >
                    View Code
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}


      {/* Global Styles */}
      <style jsx global>{`
        .shadow-cyber {
          box-shadow: 0 0 30px rgba(6,182,212,0.1), 0 0 15px rgba(139,92,246,0.1);
        }

        .glow-red { filter: drop-shadow(0 0 8px rgba(239,68,68,0.5)); }
        .glow-yellow { filter: drop-shadow(0 0 8px rgba(234,179,8,0.5)); }
        .glow-green { filter: drop-shadow(0 0 8px rgba(34,197,94,0.5)); }
      `}</style>
    </div>
  );
};

export default Portfolio;