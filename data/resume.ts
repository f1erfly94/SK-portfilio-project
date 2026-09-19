/**
 * Everything the /resume page shows.
 *
 * Keep this in step with the PDF in public/assets/download: a recruiter reads
 * both, and any date or title that differs between them is the first thing
 * they notice. Years of experience, location and the role live in `profile`
 * (lib/site.ts) because the header, hero and metadata use them too.
 */
export interface Job {
    company: string;
    link: string | null;
    position: string;
    duration: string;
    bullets: string[];
    stack: string[];
}

export interface Education {
    institution: string;
    degree: string;
    duration: string;
}

export const summary =
    "Frontend developer working in Next.js and TypeScript — commercial work on agency products and client dashboards, and products of my own, from a full-stack recipe app to real-time and WebGL projects.";

export const languages = "Ukrainian, English";

/** Newest first. */
export const experience: Job[] = [
    {
        company: "Amazon Agency",
        link: null,
        position: "Front-End Developer",
        duration: "2025 — 2026",
        stack: ["React 19", "TypeScript", "Tailwind CSS v4", "Chart.js", "TanStack Query", "Vite", "Playwright", "Vitest", "Claude", "ChatGPT"],
        bullets: [
            "Built front-end for automation tools that streamline Amazon ad campaign management across multiple client accounts",
            "Improved Core Web Vitals (LCP, CLS, INP) on client dashboards — achieved measurably faster perceived load times through code splitting, lazy loading, and image optimization",
            "Used Claude and ChatGPT to generate campaign performance summaries and ad copy suggestions integrated directly in the dashboard UI",
            "Created interactive data-rich components — campaign charts, KPI tables, real-time budget trackers — using Chart.js and custom React hooks",
            "Integrated Amazon Advertising and Product APIs; ensured WCAG 2.1 AA accessibility and full cross-browser compatibility",
            "Wrote end-to-end test suites with Playwright covering critical dashboard flows, and unit/component tests with Vitest to prevent regressions across releases",
        ],
    },
    {
        company: "Peiko",
        link: "https://peiko.space/",
        position: "Front-End Developer",
        duration: "2022 — 2024",
        stack: ["Next.js", "React", "TypeScript", "Zustand", "SCSS", "Framer Motion", "GraphQL", "Jest", "Vitest", "Git"],
        bullets: [
            "Developed responsive and accessible web applications using React, Next.js, and TypeScript with a mobile-first approach",
            "Built reusable UI components and design systems with SCSS and Framer Motion, improving development consistency across projects",
            "Implemented efficient state management using Zustand, optimizing application performance and scalability",
            "Integrated REST and GraphQL APIs, ensuring seamless communication between front-end and back-end services",
            "Collaborated closely with designers and back-end developers to deliver high-quality features and maintain code quality through peer reviews",
            "Covered shared UI components and utility logic with Jest and Vitest unit tests, raising confidence in refactors and reducing regressions before release",
        ],
    },
];

/** Grouped the way the PDF groups them, so the two read the same. */
export const skillGroups: {title: string; items: string[]}[] = [
    {title: "Core", items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML5", "CSS3"]},
    {title: "Styling & motion", items: ["Tailwind CSS", "SCSS", "Framer Motion"]},
    {title: "State & data", items: ["Redux", "Zustand", "TanStack Query", "GraphQL", "Prisma", "Chart.js"]},
    {title: "Testing", items: ["Playwright", "Vitest", "Jest"]},
    {title: "Tooling", items: ["Git", "GitHub", "Vite", "Webpack", "Figma"]},
    {title: "AI tools", items: ["Claude", "ChatGPT"]},
];

/** Newest first. */
export const education: Education[] = [
    {institution: "Playtech University", degree: "Web Design UI/UX Beginner course", duration: "2024"},
    {institution: "dev{education}", degree: "Programming Course Front-End", duration: "2021 — 2022"},
    {
        institution: "Kyiv National University of Construction and Architecture",
        degree: "Master's degree in Computer Sciences",
        duration: "2018 — 2019",
    },
    {
        institution: "Kyiv National University of Construction and Architecture",
        degree: "Bachelor's degree in Computer Sciences",
        duration: "2014 — 2018",
    },
];
