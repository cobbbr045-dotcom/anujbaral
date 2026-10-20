/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

export default function Achievement() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Smooth deterministic count-up animation strictly ending at 100
    const duration = 1200; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextCount = Math.round(easedProgress * 100);

      if (currentStep >= steps) {
        setCount(100);
        clearInterval(timer);
      } else {
        setCount(nextCount);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#1B1B19] border-b border-[#2A2A26] relative overflow-hidden">
      {/* Decorative ambient blur */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B18A5B]/5 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-baseline lg:items-center justify-between gap-10">
          {/* Large Bold Metric */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B18A5B] uppercase mb-2">
              FEATURED MILESTONE
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl sm:text-8xl md:text-9xl font-bold font-serif text-[#F5F0E8] tracking-tight tabular-nums leading-none">
                {count}+
              </span>
            </div>
            <p className="text-base sm:text-xl font-bold tracking-[0.2em] text-[#B18A5B] uppercase mt-3">
              WEBSITES CREATED
            </p>
          </div>

          {/* Supporting Text — strictly matching the prompt */}
          <div className="max-w-xl lg:border-l lg:border-[#2A2A26] lg:pl-12">
            <p className="text-lg sm:text-xl text-[#F5F0E8]/85 font-light leading-relaxed">
              Building digital experiences with a focus on professional presentation, thoughtful design, and the needs of real businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
