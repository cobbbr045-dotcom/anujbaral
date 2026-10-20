/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  number: string;
  name: string;
  date: string;
  condition: string;
  domain: string;
  description: string;
  image: string;
  category: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  tagline: string;
  description: string;
  idealFor: string;
  features: string[];
  isHighlighted?: boolean;
  buttonText: string;
}

export interface InquiryFormData {
  name: string;
  businessName: string;
  contact: string; // Email address or Instagram username
  projectType: 'Website Development' | 'Website Redesign' | 'Other Inquiry';
  packageChoice: string;
  description: string;
}

export type InquiryValidationErrors = Partial<Record<keyof InquiryFormData, string>>;

export interface ServiceArea {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface CreativeHobby {
  id: string;
  title: string;
  description: string;
  focus: string;
}
