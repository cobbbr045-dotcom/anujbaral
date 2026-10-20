/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Film, Palette, Sparkles } from 'lucide-react';
import { CREATIVE_HOBBIES } from '../data/portfolioData.ts';

export default function Hobbies() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'video-editing':
        return <Film className="w-4 h-4 text-[#B18A5B]" />;
      case 'graphic-design':
        return <Palette className="w-4 h-4 text-[#B18A5B]" />;
      case 'content-creation':
      default:
        return <Sparkles className="w-4 h-4 text-[#B18A5B]" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#111110] border-b border-[#2A2A26] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#B18A5B]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.25em] text-[#B18A5B] uppercase">
            OUTSIDE OF WEB DEVELOPMENT
          </p>
        </div>

        {/* Headline & Description */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif uppercase tracking-tight text-[#F5F0E8] leading-tight mb-4">
            CREATIVE BY NATURE.
          </h2>
          <p className="text-base sm:text-lg text-[#F5F0E8]/75 font-light leading-relaxed">
            Outside of building websites, I enjoy exploring other creative fields. These hobbies help me develop my eye for design, storytelling, and visual communication.
          </p>
        </div>

        {/* 3 Subtle Cards — Personal interests only, strictly no pricing or commercial buy buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CREATIVE_HOBBIES.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-[#1B1B19]/70 border border-[#2A2A26] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F0E8]/40">
                    Personal Interest
                  </span>
                  <div className="p-2 bg-[#111110] border border-[#2A2A26]">
                    {getIcon(hobby.id)}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#F5F0E8] mb-3">
                  {hobby.title}
                </h3>

                <p className="text-sm text-[#F5F0E8]/70 font-light leading-relaxed mb-6">
                  {hobby.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A2A26]/50 text-xs text-[#B18A5B]/80 font-mono">
                {hobby.focus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
