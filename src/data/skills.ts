export const skills = [
  {
    // Code brackets icon
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Full-Stack Development",
    description:
      "End-to-end features with React/Next.js and NestJS/Laravel, converting Figma designs to production code with TypeScript and TailwindCSS throughout.",
  },
  {
    // Server/layers stack icon
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.27L4.5 6.14 12 3.73l7.5 2.41L12 9.27zM2 12l10 5 10-5-1.5-.68-8.5 4.27-8.5-4.27L2 12zm0 5l10 5 10-5-1.5-.68-8.5 4.27-8.5-4.27L2 17z"/></svg>`,
    title: "Backend Architecture",
    description:
      "Modular NestJS and Laravel APIs with JWT/OAuth2 auth, RBAC, multi-tenant data isolation, and RESTful design documented via Swagger/OpenAPI.",
  },
  {
    // Credit card / payment icon
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>`,
    title: "Payment Integrations",
    description:
      "Stripe and PayPal payment intents, saved cards, webhook handling for real-time transaction sync, and Paddle subscriptions.",
  },
  {
    // Database cylinder icon
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.07 6 2s-2.13 2-6 2-6-1.07-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.07-6-2v-1.72C7.58 16.28 9.72 17 12 17s4.42-.72 6-1.72V17c0 .93-2.13 2-6 2zm0-4c-3.87 0-6-1.07-6-2v-1.72C7.58 12.28 9.72 13 12 13s4.42-.72 6-1.72V13c0 .93-2.13 2-6 2z"/></svg>`,
    title: "Databases",
    description:
      "Schema design and querying across MySQL, PostgreSQL, MongoDB, and SQLite; TypeORM for migrations and entity management in multi-tenant contexts.",
  },
  {
    // Shield / lock icon
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h6c-.46 3.06-2.6 5.8-6 6.93V12H6V6.68l6-2.67v7.98z"/></svg>`,
    title: "Auth & Security",
    description:
      "JWT, OAuth2 (Google), RBAC, and bcrypt hardening; session management and secure multi-tenant access control across shared infrastructure.",
  },
  {
    // Git branch / workflow icon
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2zm12-2a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2zM6 15a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2zm.5-7.5A.5.5 0 007 10v4a.5.5 0 00.5.5h9a2.5 2.5 0 000-5h-5.27A3.01 3.01 0 007 9.27V9.5h-.5z"/></svg>`,
    title: "Dev Tooling & Workflow",
    description:
      "Git/GitHub-based branching and code review workflows, Docker for local environments, CSV/XLS data imports, and PDF generation pipelines.",
  },
];

export type Skill = (typeof skills)[number];
