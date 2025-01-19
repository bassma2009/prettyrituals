import React from 'react';

const links = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact Us', href: '#' }
];

export default function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-6">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="text-[#4A4A4A] hover:text-[#274472] transition-colors duration-200"
        >
          {label}
        </a>
      ))}
    </div>
  );
}