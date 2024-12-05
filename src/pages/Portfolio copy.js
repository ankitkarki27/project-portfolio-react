import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFileAlt,FaSun, FaMoon, FaCode, FaPaperPlane  } from 'react-icons/fa';  // Import icons from react-icons


// Tailwind CSS for styling
const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Projects data
  const projects = [
    {
      title: "Django E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced payment integration",
      technologies: ["Django", "Python", "PostgreSQL", "Docker"],
      githubLink: "https://github.com/ankitkarki27"
    },
    {
      title: "Data Science Analytics Dashboard",
      description: "Comprehensive data visualization and machine learning insights",
      technologies: ["Python", "Pandas", "Plotly", "Scikit-learn"],
      githubLink: "https://github.com/ankitkarki27"
    },
    {
      title: "RESTful API Backend",
      description: "Scalable microservices architecture with JWT authentication",
      technologies: ["Django Rest Framework", "Redis", "Celery"],
      githubLink: "https://github.com/ankitkarki27"
    }
  ];

  // Skills
  const skills = [
    "Python", "Django", "Django Rest Framework", 
    "PostgreSQL", "Docker", "Pandas", 
    "Machine Learning", "Data Analysis", 
    "RESTful APIs", "Backend Development"
  ];

  return (
    
    <div className={`${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      {/* Navbar */}
      <nav className="fixed w-full z-20 top-0 left-0 p-4 flex justify-between items-center bg-opacity-80 backdrop-blur-md">
        <div className="text-2xl font-bold">{'<DevPortfolio />'}</div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-700 transition"
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="text-center max-w-4xl">
        <div className="bg-blue-500 text-white p-4">Tailwind is working!</div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Backend Developer & 
            <br />
            <TypeAnimation
              sequence={[
                'Python Enthusiast',
                1000,
                'Django Developer',
                1000,
                'Data Science Explorer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-blue-500"
            />
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Crafting scalable backend solutions and diving deep into data science with a passion for clean, efficient code.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/ankitkarki27" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
              <FaCode className="mr-2" /> View Projects
            </a>
            <a href="https://github.com/ankitkarki27" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition flex items-center">
              <FaPaperPlane className="mr-2" /> Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Tech Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-700 text-white px-4 py-2 rounded-full hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubLink} 
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          {/* <div className="flex justify-center space-x-6">
            <a href="https://github.com/ankitkarki27" className="hover:text-blue-500 transition">
              <FaGithub size={32} />
            </a>
            <a href="https://github.com/ankitkarki27" className="hover:text-blue-500 transition">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/ankitkarki27" className="hover:text-blue-500 transition">
              <FaFileAlt size={32} />
            </a>
          </div> */}
          <p className="mt-8">
            Open to collaboration, interesting projects, and tech discussions. 
            Let's connect and create something amazing!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p>© 2024 My Developer Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
