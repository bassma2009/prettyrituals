import React from 'react';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="bg-[#F7EDE2] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <SocialLinks />
          
          <FooterLinks />
          
          <div className="text-[#4A4A4A] text-sm">
            © {new Date().getFullYear()} Global Beauty Rituals. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}