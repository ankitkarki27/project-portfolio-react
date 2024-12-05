import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaUniversity,FaGithub, FaLinkedin, FaFileAlt, FaSun, FaMoon, FaCode, FaPaperPlane, FaLaptopCode } from 'react-icons/fa';
import { FaServer,FaPython,FaChartLine,FaCloud }from 'react-icons/fa';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Enhanced Projects data with images
  const projects = [
    {
      title: "Django E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced payment integration and robust backend architecture.",
      technologies: ["Django", "Python", "PostgreSQL", "Docker"],
      githubLink: "https://github.com/ankitkarki27",
      image: "/assets/project-todo.jpg" 
    },
    {
      title: "Data Science Analytics Dashboard",
      description: "Comprehensive data visualization platform with machine learning insights and interactive reporting.",
      technologies: ["Python", "Pandas", "Plotly", "Scikit-learn"],
      githubLink: "https://github.com/ankitkarki27",
      image: "/assets/project-trendy.jpg" 
    },
    
  ];

  // Enhanced Skills with categories
  // Updated Skills with more detailed information
  const skills = [
    "Python", 
    "Django", 
    "Django Rest Framework", 
    "PostgreSQL", 
    "Docker", 
    "RESTful APIs", 
    "Microservices",
    "Git",
    "Linux"
  ];
  const educationDetails = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "XYZ Engineering College",
      year: "2019 - 2023",
      description: "Specialized in backend development and software engineering principles."
    },
    {
        degree: "BCA",
        institution: "XYZ Engineering College",
        year: "2019 - 2023",
        description: "Specialized in backend development and software engineering principles."
      },
      {
        degree: "Bachelor of Technology in Computer Science",
        institution: "XYZ Engineering College",
        year: "2019 - 2023",
        description: "Specialized in backend development and software engineering principles."
      }
  
  
  ];

   // Navigation items
   const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className={`${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      {/* Navbar with Underline Hover Effect */}
      <nav className={`fixed w-full z-20 top-0 left-0 p-4 flex justify-between items-center ${isDarkMode ? 'bg-gray-800 bg-opacity-800' : 'bg-white bg-opacity-800'} backdrop-blur-md`}>
        <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{'<Ankit Karki/>'}</div>
        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className={`relative group ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                <span className="text-base font-medium">
                  {item.label}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
          </button>
        </div>
      </nav>
      {/* Hero Section with Profile and Content */}
      <header className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-2/3 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Ankit Karki
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
            <p className="text-xl mb-8 max-w-2xl">
              Passionate backend developer and data science enthusiast, transforming complex challenges into elegant, scalable solutions. With a blend of technical expertise and creative problem-solving, I craft robust digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com/ankitkarki27" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                <FaCode className="mr-2" /> View Projects
              </a>
              <a href="#contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition flex items-center">
                <FaPaperPlane className="mr-2" /> Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="/assets/myphoto.jpg" 
              alt="Ankit Karki Profile" 
              className="rounded-full border-4 border-blue-500 w-80 h-80 object-cover shadow-lg"
            />
          </div>
        </div>
      </header>

     
      {/* Skills Section with Enhanced Representation */}
      <section id="skills" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className={`
                  px-4 py-2 rounded-full text-sm font-medium 
                  ${isDarkMode 
                    ? 'bg-gray-700 text-blue-300' 
                    : 'bg-blue-100 text-blue-800'
                  }
                `}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Images */}
      <section id="projects" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`${isDarkMode ? 'bg-gray-800' : 'bg-white border'} rounded-lg overflow-hidden shadow-lg transform transition hover:-translate-y-2`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.title}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} text-xs px-2 py-1 rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.githubLink} 
                    className={`flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Education Section */}
{/* Education Section with Timeline */}
<section id="education" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Education Journey
          </h2>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            
            {/* Education Timeline Items */}
            {educationDetails.map((edu, index) => (
              <div 
                key={index} 
                className={`
                  mb-8 flex items-center w-full 
                  ${index % 2 === 0 ? 'flex-row-reverse' : ''}
                `}
              >
                {/* Timeline Marker */}
                <div className={`
                  w-6 h-6 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10
                  ${isDarkMode 
                    ? 'bg-blue-500 border-4 border-gray-900' 
                    : 'bg-blue-600 border-4 border-white'
                  }
                `}></div>
                
                {/* Education Card */}
                <div 
                  className={`
                    w-5/12 p-6 rounded-lg shadow-md relative
                    ${index % 2 === 0 ? 'mr-auto pl-12' : 'ml-auto pr-12'}
                    ${isDarkMode 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border border-gray-200'
                    }
                  `}
                >
                  {/* Pointer for Timeline */}
                  <div 
                    className={`
                      absolute w-0 h-0 border-t-8 border-b-8 border-transparent 
                      ${index % 2 === 0 
                        ? 'left-0 -ml-4 border-r-8 border-r-gray-800' 
                        : 'right-0 -mr-4 border-l-8 border-l-white'
                      }
                    `}
                    style={{
                      borderColor: isDarkMode 
                        ? (index % 2 === 0 ? 'transparent transparent transparent #1f2937' : 'transparent')
                        : (index % 2 === 0 ? 'transparent transparent transparent white' : 'transparent')
                    }}
                  ></div>

                  {/* Education Content */}
                  <div className="flex items-center mb-4">
                    <FaUniversity className={`mr-4 text-4xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <div>
                      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {edu.degree}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {edu.institution} | {edu.year}
                      </p>
                    </div>
                  </div>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-md mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>Get In Touch</h2>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ankitkarki27" className={`${isDarkMode ? 'text-white hover:text-blue-500' : 'text-black hover:text-blue-600'} transition`}>
              <FaGithub size={32} />
            </a>
            <a href="https://github.com/ankitkarki27" className={`${isDarkMode ? 'text-white hover:text-blue-500' : 'text-black hover:text-blue-600'} transition`}>
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/ankitkarki27" className={`${isDarkMode ? 'text-white hover:text-blue-500' : 'text-black hover:text-blue-600'} transition`}>
              <FaFileAlt size={32} />
            </a>
          </div>
          <p className={`mt-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Open to collaboration, interesting projects, and tech discussions. 
            Let's connect and create something amazing!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 text-center ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-200 text-black'}`}>
        <p>© 2024 My Developer Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;