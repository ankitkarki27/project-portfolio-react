import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Code2, Database, Cpu, ChevronRight, X } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Previous navbar code remains the same
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
    const navigationItems = [
      { label: 'Projects', href: '#projects' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' }
    ];
  
    const projects = [
      {
        title: "Distributed Systems Architecture",
        description: "Engineered high-performance distributed systems handling 50k+ concurrent connections",
        tech: ["Go", "gRPC", "Kubernetes"],
        color: "from-purple-500/20 to-blue-500/20"
      },
      {
        title: "Real-time Data Pipeline",
        description: "Built scalable data processing pipeline managing 10TB+ daily throughput",
        tech: ["Python", "Apache Kafka", "Elasticsearch"],
        color: "from-emerald-500/20 to-teal-500/20"
      },
      {
        title: "Cloud Infrastructure",
        description: "Designed cloud-native infrastructure with 99.99% uptime",
        tech: ["AWS", "Terraform", "Docker"],
        color: "from-orange-500/20 to-red-500/20"
      }
    ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 relative">
      {/* Navbar remains the same */}

      {/* Enhanced Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" 
                 style={{
                   backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                   backgroundSize: '40px 40px',
                   transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                 }}/>
          </div>
          
          {/* Gradient Orbs */}
          <div className={`absolute transition-all duration-1000 ease-out
                          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute w-[800px] h-[800px] rounded-full"
                 style={{
                   background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
                   top: '50%',
                   left: '50%',
                   transform: `translate(-50%, -50%) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
                 }}/>
            <div className="absolute w-[600px] h-[600px] rounded-full"
                 style={{
                   background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)',
                   top: '30%',
                   right: '10%',
                   transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`
                 }}/>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className={`space-y-8 transition-all duration-1000 ease-out
                           ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Role Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span className="text-sm">Backend Engineer</span>
              </div>

              {/* Name and Title */}
              <div>
                <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-4">
                  John<br />
                  <span className="text-emerald-500">Doe</span>
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-emerald-500" />
                  <p className="text-zinc-400">Distributed Systems Architect</p>
                </div>
              </div>

              {/* Description with Typing Effect */}
              <p className="text-xl text-zinc-400 max-w-lg">
                Crafting robust backend solutions and distributed systems
                that scale with your ambitions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6">
                <a href="#contact"
                   className="group relative px-6 py-3 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-emerald-500/20 transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0
                                opacity-0 group-hover:opacity-100 transition-opacity" 
                       style={{
                         transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                       }}/>
                  <span className="relative flex items-center gap-2">
                    Get in touch
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <a href="#" 
                     className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-emerald-500 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" 
                     className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-emerald-500 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Stats/Experience */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ease-out
                           ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "99.9%", label: "System Uptime" },
                { number: "10K+", label: "API Requests/sec" }
              ].map((stat, index) => (
                <div key={index} 
                     className="group bg-white/5 border border-white/10 p-6 rounded-lg
                               hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="text-3xl font-light mb-2 text-emerald-500">{stat.number}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                        transition-all duration-1000 delay-500
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-sm text-zinc-500">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent" />
        </div>
      </section>

      {/* Rest of the sections remain the same */}
    </div>
  );
};

export default Portfolio;