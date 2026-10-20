/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData.ts';
import type { Project } from '../types.ts';

export default function Projects() {
  const handleCardClick = (project: Project) => {
    window.open(project.domain, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="websites" className="py-24 lg:py-32 bg-[#111110] border-b border-[#2A2A26] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#B18A5B]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.25em] text-[#B18A5B] uppercase">
            RECENT PROJECTS
          </p>
        </div>

        <div className="max-w-4xl mb-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif uppercase tracking-tight text-[#F5F0E8] leading-[1.08]">
            LATEST<br />
            <span className="text-[#B18A5B]">WEBSITE HIGHLIGHTS.</span>
          </h2>
        </div>

        <p className="text-lg sm:text-xl text-[#F5F0E8]/75 font-light leading-relaxed max-w-3xl mb-16">
          A closer look at some of my latest website projects for local businesses. Each project has its own story, purpose, and approach to presenting a business online.
        </p>

        {/* 3 Featured Projects — Large Editorial Case Study Cards */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {FEATURED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={project.id}
                onClick={() => handleCardClick(project)}
                className="group relative bg-[#1B1B19] border border-[#2A2A26] hover:border-[#B18A5B]/60 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Preview Container */}
                  <div className={`lg:col-span-7 relative overflow-hidden bg-[#111110] flex items-center justify-center min-h-[280px] sm:min-h-[360px] lg:min-h-[460px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Browser Chrome Header Mockup */}
                    <div className="absolute top-0 inset-x-0 h-10 bg-[#161614] border-b border-[#2A2A26] px-4 flex items-center justify-between z-20">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A26]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A26]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A26]" />
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#F5F0E8]/50 max-w-[240px] truncate">
                        <Globe className="w-3 h-3 text-[#B18A5B]" />
                        <span>{project.domain.replace('https://', '')}</span>
                      </div>
                      <div className="w-8" />
                    </div>

                    {/* Project Image with subtle zoom on hover */}
                    <div className="w-full h-full pt-10 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={`${project.name} website preview`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B19]/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    </div>
                  </div>

                  {/* Project Editorial Information */}
                  <div className={`lg:col-span-5 p-8 sm:p-10 lg:py-12 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Project Index & Category */}
                      <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#B18A5B] font-semibold mb-4">
                        <span>PROJECT {project.number}</span>
                        <span className="text-[#F5F0E8]/40">{project.category}</span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F5F0E8] group-hover:text-[#B18A5B] transition-colors mb-4">
                        {project.name}
                      </h3>

                      {/* Clean Unboxed Metadata (Date & Current Status) */}
                      <div className="text-xs text-[#F5F0E8]/60 mb-6 flex flex-wrap items-center gap-2">
                        <span>Date: {project.date}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#B18A5B]/90">Condition: {project.condition}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#F5F0E8]/80 font-light leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="pt-6 border-t border-[#2A2A26] flex items-center justify-between">
                      <a
                        href={project.domain}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#B18A5B] hover:text-[#C9A678] transition-colors py-2 group/btn"
                      >
                        <span>VIEW LIVE WEBSITE</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>

                      <span className="text-xs text-[#F5F0E8]/40 font-mono hidden sm:inline">
                        {project.domain.replace('https://', '')}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
