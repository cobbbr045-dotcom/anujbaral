/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROCESS_STEPS } from '../data/portfolioData.ts';

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-[#111110] border-b border-[#2A2A26] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#B18A5B]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.25em] text-[#B18A5B] uppercase">
            COLLABORATION TIMELINE
          </p>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold font-serif uppercase tracking-tight text-[#F5F0E8] leading-[1.08]">
            HOW A PROJECT<br />
            <span className="text-[#B18A5B]">WORKS.</span>
          </h2>
        </div>

        {/* Desktop Horizontal Timeline & Mobile Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Subtle horizontal connecting bar on desktop */}
          <div 
            className="hidden md:block absolute top-7 left-8 right-8 h-[1px] bg-[#2A2A26] z-0" 
            aria-hidden="true" 
          />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative z-10 flex flex-col bg-[#111110] md:bg-transparent"
            >
              {/* Step indicator circle */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-[#1B1B19] border border-[#B18A5B]/40 flex items-center justify-center font-mono text-sm font-bold text-[#B18A5B]">
                  {step.step}
                </div>
                <div className="md:hidden h-[1px] flex-1 bg-[#2A2A26]" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif font-bold text-[#F5F0E8] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#F5F0E8]/75 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
