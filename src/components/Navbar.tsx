/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_META } from '../data/portfolioData.ts';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Websites', id: 'websites' },
    { label: 'About', id: 'about' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111110]/90 backdrop-blur-md border-b border-[#2A2A26] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
          className="text-xl lg:text-2xl font-bold tracking-[0.2em] text-[#F5F0E8] hover:text-[#B18A5B] transition-colors whitespace-nowrap shrink-0 font-sans"
        >
          ANUJ
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#F5F0E8]/75"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:text-[#F5F0E8] hover:underline underline-offset-8 decoration-[#B18A5B] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => scrollTo('contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-[#B18A5B] text-[#111110] hover:bg-[#C9A678] transition-colors rounded-none whitespace-nowrap cursor-pointer shadow-sm"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2 text-[#F5F0E8] hover:text-[#B18A5B] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1B1B19] border-b border-[#2A2A26] px-6 py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-[#F5F0E8]/85 hover:text-[#B18A5B] py-2 border-b border-[#2A2A26]/50 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold tracking-widest uppercase bg-[#B18A5B] text-[#111110] hover:bg-[#C9A678] transition-colors"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs text-[#F5F0E8]/50 pt-2 flex flex-col gap-1 border-t border-[#2A2A26]/40">
            <span>{STUDIO_META.title}</span>
            <span className="text-[#B18A5B]">{STUDIO_META.email}</span>
          </div>
        </div>
      )}
    </header>
  );
}
