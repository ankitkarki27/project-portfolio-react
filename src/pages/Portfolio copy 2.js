import React, { useState } from 'react';
import { Github, Linkedin, Mail, Server, Database, Code2, Terminal, Cpu, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: 'Backend Development', icon: <Server className="w-6 h-6" />, level: 90 },
    { name: 'Database Management', icon: <Database className="w-6 h-6" />, level: 85 },
    { name: 'API Design', icon: <Code2 className="w-6 h-6" />, level: 88 },
    { name: 'System Architecture', icon: <Cpu className="w-6 h-6" />, level: 82 }
  ];

  const projects =
   [
    {
      title: 'High-Load Payment System',
      description: 'Developed a scalable payment processing system handling 10k+ transactions per second with 99.99% uptime.',
      tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'API Gateway Service',
      description: 'Built a custom API gateway with rate limiting, caching, and authentication features.',
      tech: ['Python', 'FastAPI', 'MongoDB', 'Redis'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Data Pipeline Framework',
      description: 'Created an ETL framework processing 5TB+ of data daily with fault tolerance.',
      tech: ['Python', 'Apache Kafka', 'Elasticsearch', 'AWS'],
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Modern Navbar */}
      <nav className="fixed w-full bg-zinc-900/80 backdrop-blur-lg border-b border-zinc-800 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-500" />
              <span className="font-bold text-xl">John.dev</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
              <a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
              <a 
                href="#"
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-zinc-800 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-zinc-800">
              <div className="flex flex-col gap-4">
                <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
                <a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
                <a 
                  href="#"
                  className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors inline-block text-center"
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header id="about" className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          <Terminal className="w-16 h-16 mb-6 text-emerald-500" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">John Doe</h1>
          <h2 className="text-xl md:text-2xl text-emerald-500 mb-6">Backend Developer</h2>
          <p className="text-gray-400 max-w-2xl mb-8">
            Specialized in building scalable, high-performance backend systems and APIs.
            Passionate about distributed systems and database optimization.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 hover:text-emerald-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 hover:text-emerald-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 hover:text-emerald-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-zinc-800 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <div 
                  className="bg-emerald-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-zinc-800 rounded-lg overflow-hidden group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-zinc-700 rounded-full text-sm"
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
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Build Something Together</h2>
          <p className="text-gray-400 mb-8">
            Currently open to new opportunities and interesting projects.
            Feel free to reach out if you'd like to discuss potential collaboration.
          </p>
          <a 
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2025 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;