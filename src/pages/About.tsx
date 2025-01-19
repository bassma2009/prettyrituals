import React from 'react';
import { Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <div className="bg-[#F7EDE2] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-8 h-8 text-[#B76E79] mr-3" />
            <h1 className="text-4xl font-serif text-[#4A4A4A]">About</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg">
          <p className="text-lg text-[#4A4A4A] mb-6">
            Global Beauty Rituals was founded with a mission to preserve and share traditional beauty practices from cultures around the world. Beauty is universal, and ancient wisdom holds valuable secrets for modern self-care.
          </p>

          <h2 className="text-2xl font-serif text-[#4A4A4A] mt-12 mb-6">Mission</h2>
          <p className="text-lg text-[#4A4A4A] mb-6">
            The goal is to document, preserve, and share authentic beauty rituals while supporting local communities and artisans who keep these traditions alive.
          </p>

          <h2 className="text-2xl font-serif text-[#4A4A4A] mt-12 mb-6">Values</h2>
          <ul className="space-y-4 text-[#4A4A4A]">
            <li>Authenticity in preserving traditional practices</li>
            <li>Sustainability in sourcing and production</li>
            <li>Community support and fair trade practices</li>
            <li>Education and cultural appreciation</li>
          </ul>

          <div className="mt-12 bg-[#F7EDE2] p-8 rounded-lg">
            <h2 className="text-2xl font-serif text-[#4A4A4A] mb-4">Join the Community</h2>
            <p className="text-[#4A4A4A] mb-6">
              Subscribe to receive updates about new rituals, DIY guides, and special offers.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-full border border-[#B76E79] focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
              />
              <button className="bg-[#B76E79] text-white px-6 py-2 rounded-full hover:bg-[#a25964] transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}