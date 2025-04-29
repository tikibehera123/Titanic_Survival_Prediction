
import React from 'react';
import { Github, Ship } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 flex items-center">
            <Ship className="h-6 w-6 mr-2" />
            <p>Titanic Survival Prediction - Data Science Tutorial</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/kaggle/titanic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-300 transition-colors"
            >
              <Github className="h-5 w-5 mr-1" />
              <span>Titanic Dataset</span>
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-blue-800 pt-6 text-center text-blue-200">
          <p className="text-sm">
            This is an educational application demonstrating machine learning concepts using the Titanic dataset.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
