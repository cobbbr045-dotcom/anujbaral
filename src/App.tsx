/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Achievement from './components/Achievement.tsx';
import Projects from './components/Projects.tsx';
import Services from './components/Services.tsx';
import Hobbies from './components/Hobbies.tsx';
import Pricing from './components/Pricing.tsx';
import Process from './components/Process.tsx';
import Contact from './components/Contact.tsx';
import Closing from './components/Closing.tsx';
import Footer from './components/Footer.tsx';
import type { PricingPackage } from './types.ts';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    setSelectedPackage(`${pkg.name} (${pkg.priceFormatted})`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#111110] text-[#F5F0E8] flex flex-col font-sans selection:bg-[#B18A5B] selection:text-[#111110]">
      {/* Sticky Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Editorial Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('websites')}
          onStartProject={() => scrollToSection('contact')}
        />

        {/* 2. Featured Projects — Latest Website Highlights */}
        <Projects />

        {/* 3. About Section */}
        <About />

        {/* 4. Featured Achievement — 100+ Websites Created */}
        <Achievement />

        {/* 5. Website Development — Main Profession */}
        <Services onStartProject={() => scrollToSection('contact')} />

        {/* 6. Creative Hobbies — Secondary Interests */}
        <Hobbies />

        {/* 7. Website Pricing */}
        <Pricing onSelectPackage={handleSelectPackage} />

        {/* 8. Collaboration Process */}
        <Process />

        {/* 9. Contact & Inquiries */}
        <Contact preselectedPackage={selectedPackage} />

        {/* 10. Closing Statement */}
        <Closing
          onStartProject={() => scrollToSection('contact')}
          onExploreWork={() => scrollToSection('websites')}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
