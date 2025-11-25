import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100 text-neutral-700 mt-auto border-t border-rose-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          
          <div className="flex gap-4 items-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-500 hover:text-lime-600 transition-all duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-lime-600 transition-all duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-lime-600 transition-all duration-300 hover:scale-110 transform"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
