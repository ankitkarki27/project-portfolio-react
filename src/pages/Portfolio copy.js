import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-400 font-mono p-8 md:p-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-2xl text-white mb-4 md:mb-0">ankit karki</h1>
        <div className="flex gap-4 items-center">
          <a href="https://linkedin.com" className="hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com" className="hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://twitter.com" className="hover:text-white transition-colors">
            <Twitter size={18} />
          </a>
          <span className="text-sm hidden md:block">ankitkarki8088@gmail.com</span>
        </div>
      </header>

      {/* About Section */}
      <section className="mb-12 space-y-2">
        <div className="flex gap-2">
          <span className="text-zinc-500">•</span>
          <p>
            <span className="text-zinc-500">backend</span> engineer based in{" "}
            <span className="text-white">Nepal</span>
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-zinc-500">•</span>
          <p>
            worked on a few projects,{" "}
            <a href="#" className="text-white hover:underline">
              learn more
            </a>
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-zinc-500">•</span>
          <p>currently exploring DRF & DS</p>
        </div>
        {/* <div className="flex gap-2">
          <span className="text-zinc-500">•</span>
          <p>
            talks about frontend on{" "}
            <a href="#" className="text-white hover:underline">
              youtube
            </a>
          </p>
        </div> */}
      </section>

      {/* Navigation */}
      <nav className="mb-8">
        <ul className="flex gap-6 justify-center md:justify-start">
          <li className="text-white cursor-pointer">web apps</li>
          <li className="hover:text-white cursor-pointer">plugins</li>
          <li className="hover:text-white cursor-pointer">fun</li>
        </ul>
      </nav>

      {/* Projects */}
      <section className="space-y-4 mb-12">
        {['Jobportal', 'Ecommerce System','Donors Nepal', 'Uthaoo'].map((project, index) => (
          <div key={index} className="flex justify-between items-center group">
            <div>
              <span className="text-white">{project}</span>
              <span className="mx-2">-</span>
              <span>
                {project === 'noterr'
                  ? 'save & organize your bookmarks like a pro'
                  : project === 'updatly'
                  ? 'ready to use changelog for your saas'
                  : project === 'lemmaui'
                  ? 'generate code using prompt/json using ai'
                  : 'match with developers, connect with people, etc'}
              </span>
            </div>
            {/* <div className="flex items-center gap-2">
              <span>{index === 0 ? '50' : index === 1 ? '35' : index === 2 ? '20' : '100'} users</span>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div> */}
          </div>
        ))}
      </section>

      {/* Writings */}
      <section>
        <h2 className="text-white text-xl mb-4">writings</h2>
        <div className="space-y-3">
          {[
            { title: 'the journey of building noterr', date: '30 jan, 2025' },
            { title: 'light and dark mode in react native', date: '29 dec, 2024' },
            { title: 'script to accept all invites on linkedin', date: '24 dec, 2024' },
          ].map((writing, index) => (
            <div key={index} className="flex justify-between items-center">
              <a href="#" className="hover:text-white">
                {writing.title}
              </a>
              <span>{writing.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
