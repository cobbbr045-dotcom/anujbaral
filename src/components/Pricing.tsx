/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ArrowUpRight } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/portfolioData.ts';
import type { PricingPackage } from '../types.ts';

interface PricingProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#1B1B19] border-b border-[#2A2A26] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#B18A5B]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.25em] text-[#B18A5B] uppercase">
            CLEAR PRICING. PROFESSIONAL RESULTS.
          </p>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif uppercase tracking-tight text-[#F5F0E8] leading-[1.08]">
            YOUR BUSINESS.<br />
            YOUR WEBSITE.<br />
            <span className="text-[#B18A5B]">YOUR NEXT STEP.</span>
          </h2>
        </div>

        <p className="text-lg sm:text-xl text-[#F5F0E8]/75 font-light leading-relaxed max-w-3xl mb-16">
          Choose a starting package that fits your needs. We can discuss your business, the right approach, and the final scope before beginning.
        </p>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {PRICING_PACKAGES.map((pkg) => {
            const isHighlighted = pkg.isHighlighted;

            return (
              <div
                key={pkg.id}
                className={`bg-[#111110] border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'border-[#B18A5B] shadow-lg shadow-[#B18A5B]/5'
                    : 'border-[#2A2A26] hover:border-[#2A2A26]/90'
                }`}
              >
                {/* Subtle highlight banner for Signature without claiming 'most popular' */}
                {isHighlighted && (
                  <div className="absolute top-0 right-0 bg-[#B18A5B] text-[#111110] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1">
                    DISTINCTIVE IDENTITY
                  </div>
                )}

                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B18A5B] block mb-2">
                    {pkg.name}
                  </span>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl sm:text-5xl font-bold font-serif text-[#F5F0E8] tabular-nums tracking-tight">
                      {pkg.priceFormatted}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-[#F5F0E8]/90 mb-3">
                    {pkg.tagline}
                  </p>

                  <p className="text-xs text-[#F5F0E8]/65 font-light leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Ideal For */}
                  <div className="p-3 bg-[#1B1B19] border border-[#2A2A26] mb-6">
                    <span className="text-[11px] font-semibold tracking-wider text-[#B18A5B] uppercase block mb-1">
                      Ideal for:
                    </span>
                    <p className="text-xs text-[#F5F0E8]/80 font-light">
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-semibold tracking-widest text-[#F5F0E8]/50 uppercase block">
                      Includes:
                    </span>
                    <ul className="space-y-2 text-xs text-[#F5F0E8]/75">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#B18A5B] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Package CTA */}
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full group inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors cursor-pointer ${
                    isHighlighted
                      ? 'bg-[#B18A5B] text-[#111110] hover:bg-[#C9A678]'
                      : 'bg-[#1B1B19] text-[#F5F0E8] border border-[#2A2A26] hover:border-[#B18A5B] hover:text-[#B18A5B]'
                  }`}
                >
                  <span>{pkg.buttonText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Pricing Scope Notice */}
        <div className="p-6 bg-[#111110] border border-[#2A2A26] text-xs text-[#F5F0E8]/60 leading-relaxed flex items-start gap-3">
          <span className="text-[#B18A5B] font-serif font-bold text-base shrink-0">※</span>
          <p>
            Final scope and any domain registration, hosting, maintenance, third-party services, or extra functionality are agreed separately where applicable based on your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
