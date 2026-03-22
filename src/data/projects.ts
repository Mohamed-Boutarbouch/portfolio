import PhoenixIcon from '../assets/logos/Phoenix-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import PosthogIcon from '../assets/logos/posthog-logo.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';


export const projects = [
  {
    title: "Bazar – Multi-Vendor E-commerce Platform",
    techStack: "NestJS • TypeORM • MySQL • JWT • Stripe • PayPal",
    description:
      "Modular NestJS backend for a multi-tenant marketplace: JWT/OAuth2 auth, RBAC, isolated vendor shops, full order workflow (taxes, shipping, coupons, refunds), Stripe & PayPal payment intents with webhooks, PDF invoicing, and Swagger-documented REST API.",
    ctaText: "View Project →",
    ctaLink: "https://github.com/Mohamed-Boutarbouch/pickbazar",
  },
  {
    title: "takepack.tech – Collaborative Delivery App",
    techStack: "Laravel • Next.js • TypeScript • TailwindCSS",
    description:
      "Web app for managing and tracking collaborative deliveries. Built a Laravel REST API backend, converted Figma designs pixel-perfectly into a Next.js/TypeScript frontend, and managed the codebase with a structured Git workflow.",
    ctaText: "View Project →",
    ctaLink: "https://github.com/Mohamed-Boutarbouch/takepack",
  },
  {
    title: "Multi-Tenant E-commerce – ArtiWeb Internship",
    techStack: "Laravel • React • Inertia.js • FilamentPHP • Paddle • TypeScript",
    description:
      "Multi-tenant storefront serving multiple shops from a single database. Secure auth, product and order management, Paddle payment integration, and responsive admin dashboards built with FilamentPHP.",
    ctaText: "View Project →",
    ctaLink: "https://github.com/Mohamed-Boutarbouch/multi-store_app",
  },
];

export type ProjectItem = (typeof projects)[number];
