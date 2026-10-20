/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, Building2, UtensilsCrossed, Layers } from 'lucide-react';
import { SERVICE_AREAS } from '../data/portfolioData.ts';

interface ServicesProps {
  onStartProject: () => void;
}

export default function Services({ onStartProject }: ServicesProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'business-websites':
        return <Building2 className="w-5 h-5 text-[#B18A5B]" />;
      case 'restaurant-cafe-websites':
        return <UtensilsCrossed className="w-5 h-5 text-[#B18A5B]" />;
      case 'custom-website-experiences':
      default:
        return <Layers className="w-5 h-5 text-[#B18A5B]" />;
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#1B1B19] border-b border-[#2A2A26] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#B18A5B]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.25em] text-[#B18A5B] uppercase">
            WHAT I DO
          </p>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif uppercase tracking-tight text-[#F5F0E8] leading-[1.08]">
            WEBSITES THAT<br />
            WORK AS HARD<br />
            <span className="text-[#B18A5B]">AS YOUR BUSINESS.</span>
          </h2>
        </div>

        <p className="text-lg sm:text-xl text-[#F5F0E8]/80 font-light leading-relaxed max-w-3xl mb-16">
          Your website is often the first impression people get of your business. I build modern, professional websites that help businesses present their identity, share important information, and make it easier for customers to connect with them.
        </p>

        {/* 3 Core Professional Service Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SERVICE_AREAS.map((service) => (
            <div
              key={service.id}
              className="bg-[#111110] border border-[#2A2A26] p-8 flex flex-col justify-between hover:border-[#B18A5B]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-[#B18A5B] tracking-widest font-semibold">
                    {service.number}
                  </span>
                  <div className="p-2.5 bg-[#1B1B19] border border-[#2A2A26]">
                    {getIcon(service.id)}
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#F5F0E8] mb-4">
                  {service.title}
                </h3>

                <p className="text-sm text-[#F5F0E8]/75 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#2A2A26]/60">
                <ul className="space-y-2 text-xs text-[#F5F0E8]/60">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B18A5B] font-mono">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout Bar */}
        <div className="bg-[#111110] border border-[#2A2A26] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B18A5B] block mb-2">
              READY FOR A STRONG DIGITAL PRESENCE?
            </span>
            <p className="text-xl sm:text-2xl font-serif font-bold text-[#F5F0E8]">
              HAVE A WEBSITE IDEA? LET&apos;S DISCUSS IT.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase bg-[#B18A5B] text-[#111110] hover:bg-[#C9A678] transition-colors cursor-pointer shrink-0"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
