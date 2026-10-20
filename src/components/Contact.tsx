/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { Mail, Instagram, ArrowUpRight, Copy, Check, Send, AlertCircle } from 'lucide-react';
import { STUDIO_META, PRICING_PACKAGES } from '../data/portfolioData.ts';
import { validateInquiryForm, generateInquiryDraft } from '../utils/portfolio.ts';
import type { InquiryFormData, InquiryValidationErrors } from '../types.ts';

interface ContactProps {
  preselectedPackage?: string;
}

export default function Contact({ preselectedPackage }: ContactProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    businessName: '',
    contact: '',
    projectType: 'Website Development',
    packageChoice: 'SIGNATURE (Rs 10,000)',
    description: '',
  });

  const [errors, setErrors] = useState<InquiryValidationErrors>({});
  const [draftGenerated, setDraftGenerated] = useState<{
    subject: string;
    body: string;
    mailtoUrl: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedPackage) {
      setFormData((prev) => ({
        ...prev,
        packageChoice: preselectedPackage,
      }));
    }
  }, [preselectedPackage]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateInquiryForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const draft = generateInquiryDraft(formData);
      setDraftGenerated(draft);

      // Open user's default email client with prefilled details
      window.location.href = draft.mailtoUrl;
    }
  };

  const copyDraftToClipboard = async () => {
    if (!draftGenerated) return;
    try {
      await navigator.clipboard.writeText(
        `Subject: ${draftGenerated.subject}\n\n${draftGenerated.body}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#1B1B19] border-b border-[#2A2A26] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#B18A5B]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.25em] text-[#B18A5B] uppercase">
            HAVE A BUSINESS IN MIND?
          </p>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif uppercase tracking-tight text-[#F5F0E8] leading-[1.08]">
            LET&apos;S BUILD<br />
            SOMETHING<br />
            <span className="text-[#B18A5B]">EXCEPTIONAL.</span>
          </h2>
        </div>

        <p className="text-lg sm:text-xl text-[#F5F0E8]/75 font-light leading-relaxed max-w-3xl mb-16">
          Have a business that deserves a better online presence? Tell me about your project, and let&apos;s discuss how a professional website can help represent your business.
        </p>

        {/* Two-Column Grid: Contact Channels & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Direct Email Card */}
            <div className="bg-[#111110] border border-[#2A2A26] p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B18A5B] uppercase block mb-3">
                  DIRECT EMAIL INQUIRY
                </span>
                <p className="text-sm text-[#F5F0E8]/70 font-light mb-6">
                  Prefer direct correspondence? Click below to launch your email client or copy the address.
                </p>
                <div className="p-4 bg-[#1B1B19] border border-[#2A2A26] mb-6 font-mono text-sm text-[#F5F0E8] select-all break-all">
                  {STUDIO_META.email}
                </div>
              </div>

              <a
                href={`mailto:${STUDIO_META.email}`}
                className="group w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 text-xs font-semibold tracking-[0.18em] uppercase bg-[#B18A5B] text-[#111110] hover:bg-[#C9A678] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL ANUJ</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Instagram Portfolio & Creative Accounts */}
            <div className="bg-[#111110] border border-[#2A2A26] p-8">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#B18A5B] uppercase block mb-4">
                INSTAGRAM CHANNELS
              </span>

              <div className="space-y-4">
                {/* @anujsites */}
                <a
                  href={STUDIO_META.instagramSites.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-[#1B1B19] border border-[#2A2A26] hover:border-[#B18A5B]/60 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-[#B18A5B]" />
                    <div>
                      <p className="text-sm font-bold text-[#F5F0E8] group-hover:text-[#B18A5B] transition-colors">
                        {STUDIO_META.instagramSites.handle}
                      </p>
                      <p className="text-xs text-[#F5F0E8]/50">
                        {STUDIO_META.instagramSites.label}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#F5F0E8]/40 group-hover:text-[#B18A5B] transition-colors" />
                </a>

                {/* @anujmode */}
                <a
                  href={STUDIO_META.instagramMode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-[#1B1B19] border border-[#2A2A26] hover:border-[#B18A5B]/60 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-[#B18A5B]" />
                    <div>
                      <p className="text-sm font-bold text-[#F5F0E8] group-hover:text-[#B18A5B] transition-colors">
                        {STUDIO_META.instagramMode.handle}
                      </p>
                      <p className="text-xs text-[#F5F0E8]/50">
                        {STUDIO_META.instagramMode.label}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#F5F0E8]/40 group-hover:text-[#B18A5B] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#111110] border border-[#2A2A26] p-8 sm:p-10">
            <h3 className="text-2xl font-serif font-bold text-[#F5F0E8] mb-2">
              Project Inquiry Form
            </h3>
            <p className="text-xs text-[#F5F0E8]/60 font-light mb-8">
              Fill out your details below to prepare a detailed project draft.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="client-name" className="block text-xs font-semibold tracking-wider uppercase text-[#F5F0E8]/80 mb-2">
                    Your Name <span className="text-[#B18A5B]">*</span>
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Ramesh Shrestha"
                    className="w-full bg-[#1B1B19] border border-[#2A2A26] focus:border-[#B18A5B] focus:outline-none px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/25 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="business-name" className="block text-xs font-semibold tracking-wider uppercase text-[#F5F0E8]/80 mb-2">
                    Business Name <span className="text-xs text-[#F5F0E8]/40 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="business-name"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Himalayan Mountain Café"
                    className="w-full bg-[#1B1B19] border border-[#2A2A26] focus:border-[#B18A5B] focus:outline-none px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/25 transition-colors"
                  />
                </div>
              </div>

              {/* Contact (Email or IG) & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="client-contact" className="block text-xs font-semibold tracking-wider uppercase text-[#F5F0E8]/80 mb-2">
                    Email or Instagram <span className="text-[#B18A5B]">*</span>
                  </label>
                  <input
                    id="client-contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => {
                      setFormData({ ...formData, contact: e.target.value });
                      if (errors.contact) setErrors({ ...errors, contact: undefined });
                    }}
                    placeholder="email@example.com or @instagram_handle"
                    className="w-full bg-[#1B1B19] border border-[#2A2A26] focus:border-[#B18A5B] focus:outline-none px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/25 transition-colors"
                  />
                  {errors.contact && (
                    <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.contact}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="project-type" className="block text-xs font-semibold tracking-wider uppercase text-[#F5F0E8]/80 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectType: e.target.value as InquiryFormData['projectType'],
                      })
                    }
                    className="w-full bg-[#1B1B19] border border-[#2A2A26] focus:border-[#B18A5B] focus:outline-none px-4 py-3 text-sm text-[#F5F0E8] transition-colors cursor-pointer"
                  >
                    <option value="Website Development">Website Development (New Website)</option>
                    <option value="Website Redesign">Website Redesign / Modernization</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Package / Budget Selection */}
              <div>
                <label htmlFor="package-choice" className="block text-xs font-semibold tracking-wider uppercase text-[#F5F0E8]/80 mb-2">
                  Selected Package / Budget
                </label>
                <select
                  id="package-choice"
                  value={formData.packageChoice}
                  onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                  className="w-full bg-[#1B1B19] border border-[#2A2A26] focus:border-[#B18A5B] focus:outline-none px-4 py-3 text-sm text-[#F5F0E8] transition-colors cursor-pointer"
                >
                  {PRICING_PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={`${pkg.name} (${pkg.priceFormatted})`}>
                      {pkg.name} — {pkg.priceFormatted} ({pkg.tagline})
                    </option>
                  ))}
                  <option value="Custom Scope / To Be Discussed">
                    Custom Scope / To Be Discussed
                  </option>
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="project-desc" className="block text-xs font-semibold tracking-wider uppercase text-[#F5F0E8]/80 mb-2">
                  Project Description <span className="text-[#B18A5B]">*</span>
                </label>
                <textarea
                  id="project-desc"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    if (errors.description) setErrors({ ...errors, description: undefined });
                  }}
                  placeholder="Tell me about your business, the sections you envision, your timeline, or any specific goals..."
                  className="w-full bg-[#1B1B19] border border-[#2A2A26] focus:border-[#B18A5B] focus:outline-none px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/25 transition-colors resize-none"
                />
                {errors.description && (
                  <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.description}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-3 py-4 px-8 text-xs font-semibold tracking-[0.2em] uppercase bg-[#B18A5B] text-[#111110] hover:bg-[#C9A678] transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>SEND PROJECT INQUIRY VIA EMAIL</span>
              </button>
            </form>

            {/* Honest Feedback & Fallback Action Bar */}
            {draftGenerated && (
              <div className="mt-6 p-6 bg-[#1B1B19] border border-[#B18A5B]/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#B18A5B] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    Email Draft Prepared Successfully
                  </span>
                  <button
                    type="button"
                    onClick={copyDraftToClipboard}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#F5F0E8]/80 hover:text-[#B18A5B] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Draft Text</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-[#F5F0E8]/70 leading-relaxed mb-4">
                  Your default email application was triggered with your inquiry addressed to <strong className="text-[#F5F0E8]">{STUDIO_META.email}</strong>. If your email application didn&apos;t open automatically, you can open it directly or paste the copied text:
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={draftGenerated.mailtoUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#B18A5B] text-[#111110] text-xs font-semibold tracking-wider uppercase hover:bg-[#C9A678] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyDraftToClipboard}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111110] border border-[#2A2A26] text-xs font-semibold tracking-wider uppercase text-[#F5F0E8] hover:border-[#B18A5B] hover:text-[#B18A5B] transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy Inquiry Draft'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
