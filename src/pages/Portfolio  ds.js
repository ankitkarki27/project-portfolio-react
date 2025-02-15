import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Server, Database, Code2, Terminal, Cpu, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Backend Development', icon: <Server className="w-6 h-6" />, level: 90 },
    { name: 'Database Architecture', icon: <Database className="w-6 h-6" />, level: 85 },
    { name: 'API Design', icon: <Code2 className="w-6 h-6" />, level: 88 },
    { name: 'System Design', icon: <Cpu className="w-6 h-6" />, level: 82 }
  ];

  const projects = [
    {
      title: 'Distributed Payment System',
      description: 'Engineered a high-throughput transaction processing system handling 10k+ TPS with 99.99% uptime',
      tech: ['Go', 'Kafka', 'Redis', 'Kubernetes'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cloud-native API Gateway',
      description: 'Designed a scalable API gateway with JWT auth, rate limiting, and distributed tracing',
      tech: ['Rust', 'PostgreSQL', 'Redis', 'AWS'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Real-time Analytics Pipeline',
      description: 'Built a streaming data pipeline processing 1M+ events/sec with sub-second latency',
      tech: ['Python', 'Spark', 'Flink', 'BigQuery'],
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100 ">
      {/* Modern Navbar */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 group-hover:rotate-12 transition-transform">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="font-['Space_Grotesk'] text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                J.DEV
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`}
                  className={`uppercase text-sm tracking-wider ${activeSection === section ? 
                    'text-indigo-400' : 'text-gray-400 hover:text-indigo-300'} transition-colors`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
              <a 
                href="/resume.pdf"
                className="px-6 py-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
              >
                <span>Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 16L16 12M12 16L8 12M12 16V8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col gap-4">
                {['about', 'skills', 'projects', 'contact'].map((section) => (
                  <a 
                    key={section}
                    href={`#${section}`}
                    className={`px-4 py-2 ${activeSection === section ? 
                      'bg-indigo-900/50 text-indigo-400' : 'text-gray-400'} rounded-lg`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                ))}
                <a 
                  href="/resume.pdf"
                  className="px-4 py-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-4 pt-40 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-['Space_Grotesk'] font-bold leading-tight">
              Building Scalable<br/>
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Backend Systems
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl">
              Senior Backend Engineer specializing in distributed systems and cloud-native architectures.
              Focused on creating robust, high-performance solutions for modern tech challenges.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors group"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 blur-3xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-slate-800 rounded-2xl p-8 space-y-6 transform group-hover:-translate-y-2 transition-transform">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Current Focus</h3>
                <p className="text-gray-400">Designing event-driven microservices architectures with CQRS patterns</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['Go', 'PostgreSQL', 'Kafka', 'Redis', 'Kubernetes', 'AWS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-900 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-['Space_Grotesk'] font-bold mb-16 text-center">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block text-indigo-400">
                      PROFICIENCY
                    </span>
                    <span className="text-xs font-semibold inline-block text-indigo-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-700">
                    <div 
                      style={{ width: `${skill.level}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-['Space_Grotesk'] font-bold mb-16 text-center">
          Engineering Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-900 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto bg-slate-800/50 rounded-2xl p-12 border border-slate-700 backdrop-blur-lg">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-['Space_Grotesk'] font-bold">
              Let's Engineer Excellence
            </h2>
            <p className="text-gray-400 text-lg">
              Looking for a backend architect to elevate your system's performance and scalability?
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl hover:scale-105 transition-transform"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Start Conversation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <div className="text-sm">
              © 2025 John Doe. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;