import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-900">Mohammed Feroz Hussain</h1>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="pt-2 pb-4 space-y-2">
              <li><a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#skills" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Skills</a></li>
              <li><a href="#projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Projects</a></li>
              <li><a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;