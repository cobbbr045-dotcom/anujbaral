/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight } from 'lucide-react';

interface ClosingProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export default function Closing({ onStartProject, onExploreWork }: ClosingProps) {
  return (
    <section className="py-28 lg:py-40 bg-[#111110] border-b border-[#2A2A26] relative overflow-hidden">
      {/* Subtle bronze glow backdrop */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#B18A5B]/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Decorative mark */}
        <div className="w-10 h-10 border border-[#B18A5B]/40 flex items-center justify-center mb-8">
          <span className="text-sm font-serif font-bold text-[#B18A5B]">A</span>
        </div>

        {/* Oversized Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif uppercase tracking-tight text-[#F5F0E8] leading-[1.08] max-w-5xl mb-8">
          WISHING YOU<br />
          AND YOUR BUSINESS<br />
          AN OUTSTANDING<br />
          <span className="text-[#B18A5B]">ONLINE PRESENCE.</span>
        </h2>

        {/* Supporting description */}
        <p className="text-lg sm:text-2xl text-[#F5F0E8]/75 font-light leading-relaxed max-w-2xl mb-12">
          Your business has a story worth sharing. Let’s give it a website that helps tell that story.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase bg-[#B18A5B] text-[#111110] hover:bg-[#C9A678] transition-colors cursor-pointer shadow-md"
          >
            <span>LET&apos;S BUILD YOUR WEBSITE</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase bg-transparent text-[#F5F0E8] border border-[#F5F0E8]/20 hover:border-[#B18A5B] hover:text-[#B18A5B] transition-colors cursor-pointer"
          >
            <span>EXPLORE LATEST WORK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
