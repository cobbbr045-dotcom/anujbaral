/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { InquiryFormData, InquiryValidationErrors, PricingPackage } from '../types.ts';
import { PRICING_PACKAGES, STUDIO_META } from '../data/portfolioData.ts';

export function validateInquiryForm(data: InquiryFormData): InquiryValidationErrors {
  const errors: InquiryValidationErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your name (at least 2 characters).';
  }

  const contactTrimmed = data.contact ? data.contact.trim() : '';
  if (!contactTrimmed) {
    errors.contact = 'Please enter your email address or Instagram username.';
  } else {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactTrimmed);
    const isInstagram = /^@?[a-zA-Z0-9._]{2,30}$/.test(contactTrimmed);
    if (!isEmail && !isInstagram) {
      errors.contact = 'Please enter a valid email address or Instagram username (e.g. @username).';
    }
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.description = 'Please describe your project or inquiry in at least 10 characters.';
  }

  return errors;
}

export function generateInquiryDraft(data: InquiryFormData) {
  const businessLine = data.businessName?.trim() ? `Business: ${data.businessName.trim()}\n` : '';
  const packageLine = data.packageChoice ? `Selected Package / Budget: ${data.packageChoice}\n` : '';

  const subject = `Website Project Inquiry — ${data.name.trim()}${data.businessName?.trim() ? ` (${data.businessName.trim()})` : ''}`;
  const body = `Hi Anuj,\n\nI would like to discuss a website project with you.\n\n` +
    `Client Name: ${data.name.trim()}\n` +
    businessLine +
    `Contact (Email / Instagram): ${data.contact.trim()}\n` +
    `Project Type: ${data.projectType}\n` +
    packageLine +
    `\nProject Description & Scope:\n${data.description.trim()}\n\n` +
    `Looking forward to hearing from you!`;

  const mailtoUrl = `mailto:${STUDIO_META.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return {
    subject,
    body,
    mailtoUrl,
  };
}

export function getPackageById(id: string): PricingPackage | undefined {
  return PRICING_PACKAGES.find(p => p.id === id || p.name.toLowerCase() === id.toLowerCase());
}

export function formatPrice(amount: number): string {
  return `Rs ${amount.toLocaleString()}`;
}
