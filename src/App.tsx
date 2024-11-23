import React from 'react';
import { Hero } from './components/Hero';
import { Warning } from './components/Warning';
import { PriceChart } from './components/PriceChart';
import { Tokenomics } from './components/Tokenomics';
import { SocialLinks } from './components/SocialLinks';
import { BuyButton } from './components/BuyButton';
import { Slideshow } from './components/Slideshow';
import { Backstory } from './components/Backstory';

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-20 space-y-24">
        <Hero />
        <Warning />
        <Slideshow />
        <Backstory />
        <PriceChart />
        <Tokenomics />
        <SocialLinks />
        <BuyButton />
      </div>
    </main>
  );
}