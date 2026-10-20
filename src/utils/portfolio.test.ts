/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { validateInquiryForm, generateInquiryDraft, getPackageById, formatPrice } from './portfolio.ts';
import { FEATURED_PROJECTS, PRICING_PACKAGES, STUDIO_META } from '../data/portfolioData.ts';

test('validateInquiryForm detects missing required fields', () => {
  const errors = validateInquiryForm({
    name: '',
    businessName: '',
    contact: '',
    projectType: 'Website Development',
    packageChoice: 'SIGNATURE (Rs 10,000)',
    description: '',
  });

  assert.ok(errors.name, 'Name should be flagged as required');
  assert.ok(errors.contact, 'Contact should be flagged as required');
  assert.ok(errors.description, 'Description should be flagged as required');
});

test('validateInquiryForm accepts valid email or instagram handle', () => {
  const validEmail = validateInquiryForm({
    name: 'Rohan Sharma',
    businessName: 'Kathmandu Bakery',
    contact: 'rohan@example.com',
    projectType: 'Website Development',
    packageChoice: 'SIGNATURE (Rs 10,000)',
    description: 'We need a clean 5-page café website with full menu and location.',
  });
  assert.equal(Object.keys(validEmail).length, 0);

  const validInstagram = validateInquiryForm({
    name: 'Sunita Thapa',
    businessName: 'Himalayan Craft',
    contact: '@sunitadesign',
    projectType: 'Website Redesign',
    packageChoice: 'PREMIER (Rs 20,000)',
    description: 'Need a refreshed modern website to showcase our craft brand.',
  });
  assert.equal(Object.keys(validInstagram).length, 0);
});

test('validateInquiryForm flags invalid contact format', () => {
  const invalidContact = validateInquiryForm({
    name: 'Sunita Thapa',
    businessName: 'Himalayan Craft',
    contact: 'invalid@@@@contact!!!',
    projectType: 'Website Development',
    packageChoice: 'ESSENTIAL (Rs 5,000)',
    description: 'Looking for a basic website for local presence.',
  });
  assert.ok(invalidContact.contact, 'Should flag invalid contact');
});

test('generateInquiryDraft creates valid mailto URL and formatted draft', () => {
  const draft = generateInquiryDraft({
    name: 'Milan Adhikari',
    businessName: 'Everest Coffee',
    contact: 'milan@everestcoffee.com',
    projectType: 'Website Development',
    packageChoice: 'SIGNATURE (Rs 10,000)',
    description: 'We need an appetizing website with our coffee menu and hours.',
  });

  assert.ok(draft.mailtoUrl.startsWith('mailto:cobbbr046@gmail.com'));
  assert.ok(draft.subject.includes('Milan Adhikari'));
  assert.ok(draft.subject.includes('Everest Coffee'));
  assert.ok(draft.body.includes('SIGNATURE (Rs 10,000)'));
  assert.ok(draft.body.includes('milan@everestcoffee.com'));
});

test('pricing packages integrity check', () => {
  assert.equal(PRICING_PACKAGES.length, 4);
  const essential = getPackageById('essential');
  assert.equal(essential?.price, 5000);
  assert.equal(essential?.name, 'ESSENTIAL');

  const signature = getPackageById('signature');
  assert.equal(signature?.price, 10000);
  assert.equal(signature?.isHighlighted, true);

  const premier = getPackageById('premier');
  assert.equal(premier?.price, 20000);

  const bespoke = getPackageById('bespoke');
  assert.equal(bespoke?.price, 50000);
});

test('featured projects integrity check', () => {
  assert.equal(FEATURED_PROJECTS.length, 3);

  const camellia = FEATURED_PROJECTS.find(p => p.name === 'Cafe Camellia');
  assert.ok(camellia);
  assert.equal(camellia?.domain, 'https://cafecamellia1.vercel.app');
  assert.equal(camellia?.condition, 'Negotiating');

  const firePizza = FEATURED_PROJECTS.find(p => p.name === 'Fire Pizza');
  assert.ok(firePizza);
  assert.equal(firePizza?.domain, 'https://firepizza22.vercel.app');
  assert.equal(firePizza?.condition, 'Awaiting payment; Google Maps listing arrangement pending');

  const duChhukKen = FEATURED_PROJECTS.find(p => p.name === 'Du Chhuk Ken');
  assert.ok(duChhukKen);
  assert.equal(duChhukKen?.domain, 'https://duchhukken1.vercel.app');
  assert.equal(duChhukKen?.condition, 'Previously delivered; upgraded and replaced with a new website');
});

test('formatPrice outputs expected format', () => {
  assert.equal(formatPrice(5000), 'Rs 5,000');
  assert.equal(formatPrice(10000), 'Rs 10,000');
  assert.equal(formatPrice(50000), 'Rs 50,000');
});
