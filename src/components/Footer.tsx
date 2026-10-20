/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Instagram, Mail } from 'lucide-react';
import { STUDIO_META } from '../data/portfolioData.ts';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111110] text-[#F5F0E8] border-t border-[#2A2A26] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2A2A26]">
          {/* Brand & Studio Information */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="text-2xl font-bold font-sans tracking-[0.2em] text-[#F5F0E8] hover:text-[#B18A5B] transition-colors inline-block mb-3"
              >
                ANUJ
              </a>
              <p className="text-xs tracking-[0.18em] uppercase text-[#B18A5B] font-semibold mb-4">
                Independent Website Developer · Nepal
              </p>

              <div className="space-y-2 text-xs text-[#F5F0E8]/70">
                <p>
                  <strong className="text-[#F5F0E8] font-medium">Primary focus:</strong>{' '}
                  Website Development
                </p>
                <p>
                  <strong className="text-[#F5F0E8] font-medium">Creative hobbies:</strong>{' '}
                  Video Editing · Graphic Design · Content Creation
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#2A2A26]/50">
              <span className="text-xs text-[#F5F0E8]/40 block mb-2">Direct Contact</span>
              <a
                href={`mailto:${STUDIO_META.email}`}
                className="inline-flex items-center gap-2 text-xs text-[#B18A5B] hover:text-[#C9A678] font-mono transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{STUDIO_META.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B18A5B] block mb-4">
                NAVIGATION
              </span>
              <ul className="space-y-3 text-sm text-[#F5F0E8]/75">
                <li>
                  <button
                    onClick={() => onNavigate('hero')}
                    className="hover:text-[#B18A5B] transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('websites')}
                    className="hover:text-[#B18A5B] transition-colors cursor-pointer"
                  >
                    Latest Website Highlights
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-[#B18A5B] transition-colors cursor-pointer"
                  >
                    Website Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="hover:text-[#B18A5B] transition-colors cursor-pointer"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="hover:text-[#B18A5B] transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Instagram & Social Channels */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B18A5B] block mb-4">
                INSTAGRAM
              </span>
              <ul className="space-y-3 text-sm text-[#F5F0E8]/75">
                <li>
                  <a
                    href={STUDIO_META.instagramSites.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#B18A5B] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#B18A5B]" />
                    <span>{STUDIO_META.instagramSites.handle}</span>
                    <span className="text-xs text-[#F5F0E8]/40">(Websites)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={STUDIO_META.instagramMode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#B18A5B] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#B18A5B]" />
                    <span>{STUDIO_META.instagramMode.handle}</span>
                    <span className="text-xs text-[#F5F0E8]/40">(Creative)</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top of page"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F0E8]/60 hover:text-[#B18A5B] transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>BACK TO TOP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E8]/50">
          <p>© {currentYear} Anuj. All rights reserved.</p>
          <p className="tracking-wide">
            Crafted for Local Businesses · Independent Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
