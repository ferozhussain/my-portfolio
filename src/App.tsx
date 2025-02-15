import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section id="about" className="pt-24 min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                Full Stack Developer
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                I am a results-driven software engineer with a passion for developing high-quality software solutions that meet business objectives.
              </p>
              <div className="flex space-x-4 mb-12">
                <a href="https://www.linkedin.com/in/feroz913" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
              <a href="#skills" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Explore my skills <ChevronDown className="ml-2" />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
                alt="Developer workspace"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillBadge name="C#" level="Expert" />
            <SkillBadge name=".NET Core" level="Expert" />
            <SkillBadge name="React" level="Advanced" />
            <SkillBadge name="PostgreSQL" level="Advanced" />
            <SkillBadge name="JavaScript" level="Advanced" />
            <SkillBadge name="Bootstrap" level="Advanced" />
            <SkillBadge name="HTML/CSS" level="Expert" />
            <SkillBadge name="SQL" level="Expert" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="SecureText"
              description="Simple Light-Weight Utility follows the industry standard encryption algorithm to secure sensitive information."
              image="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=800"
              tags={['C#', '.NET', 'Encryption']}
              link="https://www.nuget.org/packages/SecureText"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
          <form 
            action="https://formspree.io/f/mqkjayjv" 
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Mohammed Feroz Hussain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
