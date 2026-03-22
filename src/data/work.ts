import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Stagiaire Développeur Full-Stack",
    company: "NewDev",
    region: "Fès, Maroc",
    description:
      "Built the backend for Bazar, a multi-vendor e-commerce platform: modular NestJS architecture, JWT/OAuth2/RBAC auth, full order workflow (taxes, shipping, coupons, refunds), Stripe & PayPal integration with webhooks, PDF invoicing, and Swagger-documented REST API. Also contributed to takepack.tech — a collaborative delivery app — converting Figma mockups into a Next.js/TypeScript frontend and building the Laravel API backend.",
    technologies: [
      "NestJS",
      "TypeORM",
      "MySQL",
      "JWT",
      "Stripe",
      "PayPal",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Laravel",
      "Swagger",
      "Git",
    ],
  },
  {
    title: "Stagiaire Développeur Full-Stack",
    company: "ArtiWeb",
    region: "Fès, Maroc",
    description:
      "Designed and built a multi-tenant e-commerce platform serving multiple shops from a single database. Implemented secure authentication, product and order management, Paddle payment integration, and responsive admin dashboards with FilamentPHP. Frontend built with React, TypeScript, and TailwindCSS via Inertia.js.",
    technologies: [
      "Laravel",
      "React",
      "Inertia.js",
      "FilamentPHP",
      "Paddle",
      "TypeScript",
      "TailwindCSS",
      "MySQL",
      "Git",
    ],
  },
];

export type WorkItem = (typeof work)[number];
