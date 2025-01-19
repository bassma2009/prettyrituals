import React from 'react';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import RegionsSection from '../components/RegionsSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <RegionsSection />
    </div>
  );
}