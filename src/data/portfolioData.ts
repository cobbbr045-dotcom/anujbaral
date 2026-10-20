/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Project, PricingPackage, ServiceArea, ProcessStep, CreativeHobby } from '../types.ts';

export const STUDIO_META = {
  name: 'Anuj',
  title: 'Independent Website Developer · Nepal',
  location: 'Nepal',
  age: 14,
  achievements: {
    websitesCount: '100+',
    websitesLabel: 'WEBSITES CREATED',
    headlineClaim: '14 YEARS YOUNG. 100+ WEBSITES. BUILT FOR BUSINESS.',
  },
  email: 'cobbbr046@gmail.com',
  instagramSites: {
    handle: '@anujsites',
    url: 'https://www.instagram.com/anujsites/',
    label: 'Website Portfolio',
  },
  instagramMode: {
    handle: '@anujmode',
    url: 'https://www.instagram.com/anujmode/',
    label: 'Creative & Personal',
  },
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'cafe-camellia',
    number: '01',
    name: 'Cafe Camellia',
    date: '10/11/2026',
    condition: 'Negotiating',
    domain: 'https://cafecamellia1.vercel.app',
    description:
      'A refined digital showcase for Cafe Camellia, designed to present the café with a polished online identity and give visitors a convenient destination to explore its online presence.',
    image: '/src/assets/images/preview_cafe_camellia_1792496171790.jpg',
    category: 'Café & Artisan Bakery',
  },
  {
    id: 'fire-pizza',
    number: '02',
    name: 'Fire Pizza',
    date: '10/16/2026',
    condition: 'Awaiting payment; Google Maps listing arrangement pending',
    domain: 'https://firepizza22.vercel.app',
    description:
      'A bold website concept for Fire Pizza, created to give the restaurant a dedicated online presence and a professional platform to showcase its brand.',
    image: '/src/assets/images/preview_fire_pizza_1792496172538.jpg',
    category: 'Restaurant & Pizzeria',
  },
  {
    id: 'du-chhuk-ken',
    number: '03',
    name: 'Du Chhuk Ken',
    date: '10/05/2026',
    condition: 'Previously delivered; upgraded and replaced with a new website',
    domain: 'https://duchhukken1.vercel.app',
    description:
      'An upgraded digital experience for Du Chhuk Ken, featuring a refreshed website designed to present the business professionally and offer visitors a clear, accessible online destination.',
    image: '/src/assets/images/preview_du_chhuk_ken_1792496173316.jpg',
    category: 'Cultural Dining & Hospitality',
  },
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Websites',
    description:
      'Professional websites that communicate your services, business details, and brand identity clearly.',
    deliverables: [
      'Clear service showcases & value propositions',
      'High-contrast contact and conversion points',
      'Fast-loading responsive architecture',
      'Local business credibility design',
    ],
  },
  {
    id: 'restaurant-cafe-websites',
    number: '02',
    title: 'Restaurant and Café Websites',
    description:
      'Beautiful websites for cafés and restaurants, with space for menus, business information, photographs, location details, and contact links where appropriate.',
    deliverables: [
      'Appetizing visual hierarchy & photography layout',
      'Clear digital food & drink menus',
      'Operating hours, location & Google Maps alignment',
      'Reservation & direct inquiry shortcuts',
    ],
  },
  {
    id: 'custom-website-experiences',
    number: '03',
    title: 'Custom Website Experiences',
    description:
      'More tailored website projects for businesses that need a distinct design, specific sections, or additional agreed functionality.',
    deliverables: [
      'Bespoke layout & visual art direction',
      'Multi-section content architecture',
      'Tailored business workflows & inquiries',
      'Brand-faithful interactions and animations',
    ],
  },
];

export const CREATIVE_HOBBIES: CreativeHobby[] = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    description:
      'I enjoy shaping footage, working with pacing, and turning ideas into engaging visual stories.',
    focus: 'Pacing · Narrative Flow · Motion Timing',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description:
      'I enjoy experimenting with typography, layout, composition, and visual identity.',
    focus: 'Typography · Spatial Grid · Visual Balance',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description:
      'I enjoy developing creative concepts and making content that captures attention.',
    focus: 'Creative Ideation · Visual Hooks · Aesthetics',
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'essential',
    name: 'ESSENTIAL',
    price: 5000,
    priceFormatted: 'Rs 5,000',
    tagline: 'A clean start for your online presence.',
    description:
      'A simple, professional website with the essential information your business needs to get online.',
    idealFor: 'Small businesses that need a straightforward website.',
    features: [
      'Clean, professional design',
      'Essential business information',
      'Mobile-friendly layout',
      'Contact details and relevant links',
      'Clear navigation',
    ],
    buttonText: 'DISCUSS ESSENTIAL',
  },
  {
    id: 'signature',
    name: 'SIGNATURE',
    price: 10000,
    priceFormatted: 'Rs 10,000',
    tagline: 'A stronger identity for your business.',
    description:
      'A more polished website with a distinctive visual style that reflects your business’s own personality.',
    idealFor:
      'Cafés, restaurants, and businesses that want a more refined online presence.',
    features: [
      'More customized visual design',
      'Thoughtful colors and typography',
      'Dedicated content sections',
      'Responsive layouts',
      'Relevant contact and social links',
    ],
    isHighlighted: true,
    buttonText: 'DISCUSS SIGNATURE',
  },
  {
    id: 'premier',
    name: 'PREMIER',
    price: 20000,
    priceFormatted: 'Rs 20,000',
    tagline: 'A more complete digital experience.',
    description:
      'A professional website with richer presentation, additional sections, and more functionality based on your needs.',
    idealFor:
      'Growing businesses that need a more comprehensive online presence.',
    features: [
      'Professional multi-section website',
      'More customized page layouts',
      'Richer visual presentation',
      'Additional functionality agreed upon for the project',
      'Responsive design and contact integration',
    ],
    buttonText: 'DISCUSS PREMIER',
  },
  {
    id: 'bespoke',
    name: 'BESPOKE',
    price: 50000,
    priceFormatted: 'Rs 50,000',
    tagline: 'Built around your business alone.',
    description:
      'A fully custom website planned around your individual requirements, brand identity, and goals.',
    idealFor: 'Businesses seeking a tailored digital experience.',
    features: [
      'Custom design direction',
      'Tailored website structure',
      'Project-specific functionality',
      'Detailed visual refinement',
      'Custom implementation according to the agreed scope',
    ],
    buttonText: 'DISCUSS BESPOKE',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCUSS',
    description:
      'We talk about your business, goals, budget, and what you need from your website.',
  },
  {
    step: '02',
    title: 'PLAN',
    description:
      'We agree on the package, design direction, content, functionality, and scope.',
  },
  {
    step: '03',
    title: 'BUILD',
    description:
      'I create the website and refine the details according to our agreed plan.',
  },
  {
    step: '04',
    title: 'DELIVER',
    description:
      'We review the finished website and prepare it for launch according to the agreed requirements.',
  },
];
