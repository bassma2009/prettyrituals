import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rituals', path: '/rituals' },
    { name: 'DIY Guides', path: '/diy-guides' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-[#F7EDE2] py-4 px-6 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-[#4A4A4A]" />
          <span className="text-2xl font-serif text-[#4A4A4A]">Global Beauty Rituals</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-[#4A4A4A] hover:text-[#B76E79] transition-colors duration-200 ${
                location.pathname === item.path ? 'text-[#B76E79]' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}