'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#home" aria-label="Bella Ciao Homepage">
          <Image
            src="/bellaciao.JPG"
            width={100}
            height={100}
            alt="Bella Ciao Café logo"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><a href="#home" className="hover:text-red-500">Home</a></li>
          <li><a href="#about" className="hover:text-red-500">About</a></li>
          <li><a href="#items" className="hover:text-red-500">Items</a></li>
          <li><a href="#hours" className="hover:text-red-500">Hours</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
          <li>
            <a
              href="https://www.instagram.com/bella.ciaocaffe"
              aria-label="Bella Ciao on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#ff1a1a" }} />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-white font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#items" onClick={() => setIsOpen(false)}>Items</a></li>
            <li><a href="#hours" onClick={() => setIsOpen(false)}>Hours</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li>
              <a
                href="https://www.instagram.com/bella.ciaocaffe"
                onClick={() => setIsOpen(false)}
                aria-label="Bella Ciao on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#ff1a1a" }} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
