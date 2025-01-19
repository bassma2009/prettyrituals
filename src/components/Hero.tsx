import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Discover Ancient Beauty Wisdom
          </h1>
          <p className="text-xl text-white mb-8">
            Explore centuries-old beauty rituals from cultures around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/rituals')}
              className="bg-[#B76E79] text-white px-8 py-3 rounded-full hover:bg-[#a25964] transition-colors duration-200 text-lg"
            >
              Start Exploring
            </button>
            <button 
              onClick={() => navigate('/marketplace')}
              className="bg-[#E25C2C] text-white px-8 py-3 rounded-full hover:bg-[#c94d23] transition-colors duration-200 text-lg"
            >
              Shop Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}