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
        <nav className={`fixed w-full z-20 top-0 left-0 p-4 flex justify-between items-center ${isDarkMode ? 'bg-gray-800 bg-opacity-800' : 'bg-white bg-opacity-800'} backdrop-blur-md px-6 md:px-12`}>
          {/* Logo */}
          <div className={`text-2xl font-bold flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <img src="/assets/alogo.png" alt="Logo" className="w-8 h-8 mr-2" /> {/* Replace with actual logo path */}
            {/* <span>Ankit</span> */}
          </div>
    
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
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
<header className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center pt-16 px-6 md:px-12">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="text-center md:text-left md:w-2/3 mb-8 md:mb-0">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Hi, I am <span className="text-blue-500">Ankit Karki</span>
        <br />
        <TypeAnimation
          sequence={[
            'A Python Enthusiast',
            10,
            'A Django Developer',
            1000,
            'A Data Science Explorer',
            1000
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="text-4xl text-lg md:text-3xl text-blue-500 mt-2"
        />
      </h1>
      <p className="text-lg mb-8 max-w-2xl mx-auto justify">
        BCA student and passionate Django developer, transforming ideas into innovative digital solutions.
      </p>
      <div className="flex justify-center md:justify-start space-x-4">
        <a 
          href="https://github.com/ankitkarki27" 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm md:text-base flex items-center"
        >
          <FaCode className="mr-2" /> View Projects
        </a>
        <a 
          href="#contact" 
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition text-sm md:text-base flex items-center"
        >
          <FaPaperPlane className="mr-2" /> Contact Me
        </a>
      </div>
    </div>
    <div className="md:w-1/3 flex justify-center">
      <img 
        src="/assets/myphoto.jpg" 
        alt="Ankit Karki Profile" 
        className="rounded-full border-4 border-blue-500 w-80 h-80 object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
</header>



     {/* Skills Section with Enhanced Representation */}
<section id="skills" className={`py-16 px-6 sm:px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
  <div className="max-w-6xl mx-auto">
    <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>
      Technical Skills
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 ${isDarkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
        >
          <h4 className="text-lg font-semibold mb-2">{skill}</h4>
          <p className="text-sm">{/* Optional description or additional info can go here */}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Projects Section with Images */}
<section id="projects" className={`py-16 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
  <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
    Featured Projects
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <div
        key={index}
        className={`rounded-lg overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border`}
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          {/* Project Title */}
          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {project.title}
          </h3>
          {/* Project Description */}
          <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {project.description}
          </p>
          {/* Technologies Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
              >
                {tech}
              </span>
            ))}
          </div>
          {/* GitHub Link */}
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
</section>

{/* Simplified Education Section */}
<section id="education" className={`py-16 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="max-w-4xl mx-auto">
    <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      Education Journey
    </h2>

    {/* Timeline Container */}
    <div className="relative">
      {/* Vertical Line */}
      <div className={`absolute left-4 top-0 h-full w-0.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

      {educationDetails.map((edu, index) => (
        <div key={index} className="relative mb-12 pl-12">
          {/* Marker */}
          <div 
            className={`absolute w-8 h-8 rounded-full -left-4 top-0 transform -translate-y-1/2 flex items-center justify-center ${
              isDarkMode ? 'bg-blue-500 border-4 border-gray-900' : 'bg-blue-600 border-4 border-white'
            }`}
          >
            <FaUniversity className="text-white text-lg" />
          </div>

          {/* Card */}
          <div 
            className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${
              isDarkMode ? 'border-gray-700' : 'border border-gray-200'
            }`}
          >
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {edu.degree}
            </h3>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {edu.institution} | {edu.year}
            </p>
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
      <section id="contact" className={`py-16 px-6 sm:px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
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