import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Introduction() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FFF9F4] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-[#4A4A4A] mb-6">
          Explore Global Beauty Rituals from Around the World
        </h2>
        <p className="text-lg text-[#4A4A4A] mb-8">
          Discover time-honored beauty secrets passed down through generations. From ancient Arabic henna to Korean ginseng rituals, explore how different cultures have defined and pursued beauty throughout history.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate('/rituals')}
            className="bg-[#E25C2C] text-white px-6 py-3 rounded-full hover:bg-[#c94d23] transition-colors duration-200"
          >
            Explore Rituals
          </button>
          <button 
            onClick={() => navigate('/diy-guides')}
            className="bg-[#F7EDE2] text-[#4A4A4A] px-6 py-3 rounded-full hover:bg-[#ead8c4] transition-colors duration-200"
          >
            DIY Guides
          </button>
        </div>
      </div>
    </section>
  );
}