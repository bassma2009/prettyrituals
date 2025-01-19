import React from 'react';
import { useNavigate } from 'react-router-dom';

interface RegionCardProps {
  region: {
    name: string;
    description: string;
    image: string;
    backgroundColor: string;
    accentColor: string;
    headerColor: string;
    textColor?: string;
    rituals: Array<{
      name: string;
      description: string;
      fullDescription?: string;
    }>;
  };
}

export default function RegionCard({ region }: RegionCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
      style={{ backgroundColor: region.backgroundColor }}
    >
      <div 
        className="h-64 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${region.image})`,
          backgroundPosition: region.name === 'Africa' ? 'center 30%' : 'center'
        }}
      />
      
      <div className="p-6">
        <h3 
          className="text-2xl font-serif mb-4"
          style={{ color: region.headerColor }}
        >
          {region.name}
        </h3>
        
        <p style={{ color: region.name === 'Europe' ? '#000000' : '#4A4A4A' }} className="mb-6">
          {region.description}
        </p>
        
        <div className="space-y-4">
          {region.rituals.map((ritual) => (
            <div key={ritual.name} className="bg-white bg-opacity-50 p-4 rounded-lg">
              <h4 
                className="text-lg font-medium mb-2"
                style={{ color: region.accentColor }}
              >
                {ritual.name}
              </h4>
              <p className="text-sm text-[#4A4A4A]">
                {ritual.description}
              </p>
              {ritual.fullDescription && (
                <p className="mt-4 text-sm text-[#4A4A4A] whitespace-pre-line">
                  {ritual.fullDescription}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}