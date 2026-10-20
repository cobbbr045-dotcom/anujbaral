/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, Compass, Sparkles, UserCheck } from 'lucide-react';
import { STUDIO_META } from '../data/portfolioData.ts';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#111110] border-b border-[#2A2A26] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#B18A5B]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.25em] text-[#B18A5B] uppercase">
            THE PERSON BEHIND THE WEBSITES
          </p>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif uppercase tracking-tight text-[#F5F0E8] leading-[1.08]">
            YOUNG MIND.<br />
            <span className="text-[#B18A5B]">SERIOUS CRAFT.</span>
          </h2>
        </div>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="space-y-6 text-[#F5F0E8]/85 text-base sm:text-lg font-light leading-relaxed">
              <p>
                I’m Anuj, a 14-year-old website developer from Nepal with a passion for creating modern, professional websites. I help businesses build a stronger online presence through thoughtful design, clear information, and useful functionality.
              </p>
              <p>
                I believe every business deserves a website that represents it well. My goal is to combine creativity, attention to detail, and practical thinking to build websites that look excellent and help businesses present themselves confidently online.
              </p>
            </div>

            {/* Approach Statement */}
            <div className="p-6 sm:p-8 bg-[#1B1B19] border border-[#2A2A26] mt-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B18A5B] block mb-2">
                MY CORE APPROACH
              </span>
              <p className="text-xl sm:text-2xl font-serif font-bold text-[#F5F0E8]">
                Good design. Clear communication. Purposeful development.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-[#2A2A26] text-xs text-[#F5F0E8]/70">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B18A5B]" />
                  <span>Intentional Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#B18A5B]" />
                  <span>Direct Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#B18A5B]" />
                  <span>Clean Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Placeholder Frame (no fake face) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="w-full h-full min-h-[380px] sm:min-h-[460px] bg-[#1B1B19] border border-[#2A2A26] p-8 flex flex-col justify-between relative overflow-hidden group">
              {/* Subtle background monogram */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
                <span className="text-[160px] font-serif font-bold text-[#F5F0E8]">A</span>
              </div>

              {/* Top Bar of Portrait Container */}
              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B18A5B] uppercase">
                  STUDIO ARCHIVE
                </span>
                <span className="text-xs text-[#F5F0E8]/40">
                  {STUDIO_META.location}
                </span>
              </div>

              {/* Center Content: Minimalist Monogram & Photography Frame */}
              <div className="my-auto py-10 flex flex-col items-center text-center z-10">
                <div className="w-24 h-24 border border-[#B18A5B]/40 flex items-center justify-center mb-6 bg-[#111110]">
                  <span className="text-3xl font-serif font-bold text-[#B18A5B] tracking-wider">
                    ANUJ
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#F5F0E8] mb-2">
                  Anuj
                </h3>
                <p className="text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/60 mb-4">
                  Independent Website Developer · Nepal
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111110] border border-[#2A2A26] text-[11px] text-[#F5F0E8]/50 tracking-wide">
                  <UserCheck className="w-3.5 h-3.5 text-[#B18A5B]" />
                  <span>Replaceable portrait area for personal photography</span>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="pt-6 border-t border-[#2A2A26] flex items-center justify-between text-xs text-[#F5F0E8]/50 z-10">
                <span>Age: 14 Years</span>
                <span>Active Since 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
