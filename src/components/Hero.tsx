/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { STUDIO_META } from '../data/portfolioData.ts';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export default function Hero({ onExploreWork, onStartProject }: HeroProps) {
  return (
    <section id="hero" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#2A2A26]">
      {/* Background subtle architectural grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #F5F0E8 1px, transparent 1px), linear-gradient(to bottom, #F5F0E8 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top small label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-[#B18A5B]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.25em] text-[#B18A5B] uppercase">
            INDEPENDENT WEBSITE DEVELOPER · NEPAL
          </p>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F0E8] leading-[1.05] font-serif uppercase">
            14 YEARS YOUNG.<br />
            <span className="text-[#B18A5B] italic font-serif">100+ WEBSITES.</span><br />
            BUILT FOR BUSINESS.
          </h1>
        </div>

        {/* Hero Grid: Description & Oversized Achievement Counter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-4 pb-12 border-t border-[#2A2A26]/80">
          {/* Left Column: Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-lg sm:text-xl text-[#F5F0E8]/85 leading-relaxed font-sans font-light max-w-2xl">
              I’m Anuj, a young website developer creating professional, modern websites for businesses that want to stand out online. From local cafés and restaurants to growing businesses, I turn ideas into polished digital experiences designed to make a strong first impression.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase bg-[#B18A5B] text-[#111110] hover:bg-[#C9A678] transition-colors cursor-pointer shadow-md"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase bg-transparent text-[#F5F0E8] border border-[#F5F0E8]/20 hover:border-[#B18A5B] hover:text-[#B18A5B] transition-colors cursor-pointer"
              >
                <span>LET&apos;S BUILD YOUR WEBSITE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Oversized Statistic */}
          <div className="lg:col-span-5 bg-[#1B1B19] border border-[#2A2A26] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B18A5B]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B18A5B]">
                PROVEN EXPERTISE & DELIVERY
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-bold font-serif text-[#F5F0E8] tracking-tight tabular-nums">
                  {STUDIO_META.achievements.websitesCount}
                </span>
              </div>
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#F5F0E8]/70">
                WEBSITES CREATED
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-[#2A2A26] flex items-center justify-between text-xs text-[#F5F0E8]/50">
              <span>Studio: Kathmandu, Nepal</span>
              <span>Focus: Commercial Web</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-6 flex items-center justify-between text-xs text-[#F5F0E8]/40 tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <ArrowDown className="w-3.5 h-3.5 text-[#B18A5B] animate-bounce" />
            <span>SCROLL TO DISCOVER</span>
          </div>
          <span className="hidden sm:inline">ANUJ · EST. NEPAL</span>
        </div>
      </div>
    </section>
  );
}
