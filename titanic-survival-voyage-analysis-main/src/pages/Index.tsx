
import React from 'react';
import Header from '@/components/Header';
import DataExploration from '@/components/DataExploration';
import ModelTraining from '@/components/ModelTraining';
import ModelComparison from '@/components/ModelComparison';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Titanic Survival Prediction
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 mb-8">
              Exploring Machine Learning through Historical Data
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                This interactive guide walks through the process of predicting Titanic passenger survival using 
                Linear Regression and Decision Trees. Learn about data cleaning, feature engineering, 
                model training, and performance evaluation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a 
                href="#data-exploration" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Start Learning
              </a>
              <a 
                href="#model-comparison" 
                className="bg-white hover:bg-blue-50 text-blue-600 font-bold py-3 px-6 rounded-lg border border-blue-200 transition-colors"
              >
                View Results
              </a>
            </div>
          </div>
        </section>
        
        <DataExploration />
        <ModelTraining />
        <ModelComparison />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
