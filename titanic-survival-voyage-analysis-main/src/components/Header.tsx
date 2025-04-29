
import React from 'react';
import { Anchor } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Anchor className="h-8 w-8 mr-3" />
          <div>
            <h1 className="text-2xl font-bold">Titanic Survival Prediction</h1>
            <p className="text-blue-200">Learning ML through the historic Titanic dataset</p>
          </div>
        </div>
        <div className="space-x-4">
          <a href="#data-exploration" className="text-blue-100 hover:text-white">Data Exploration</a>
          <a href="#model-training" className="text-blue-100 hover:text-white">Model Training</a>
          <a href="#model-comparison" className="text-blue-100 hover:text-white">Results</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
