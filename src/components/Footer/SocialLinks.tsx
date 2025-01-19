import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'Youtube' }
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-[#4A4A4A] hover:text-[#274472] transition-colors duration-200"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}