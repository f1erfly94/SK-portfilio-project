/**
 * Every project on the site, newest first.
 *
 * The home page shows the `featured` ones, the work page shows all of them and
 * filters by `category`, so both read from this one list — a project can never
 * appear on one page with a stack or a link the other page does not have.
 */
export const projects = [
    {
        slug: "klyk",
        category: "3D / WebGL",
        title: "KLYK-65 — Interactive 3D Keyboard",
        year: "2026",
        summary:
            "A scroll-driven WebGL landing page whose keyboard reacts to the keys you actually press.",
        highlights: [
            "Five page sections are five camera keyframes: the board rotates, comes apart into its five layers and reassembles as you scroll.",
            "No 3D model, texture, image or audio file in the repository — the case, the keycaps, their legends and the studio lighting are all generated in code.",
            "Presses on your physical keyboard are matched by event.code and travel on the matching 3D cap; switch clicks are synthesised with the Web Audio API.",
            "Phones never start a WebGL context: they get the same board as server-rendered SVG, which is why mobile scores higher than desktop in Lighthouse.",
        ],
        stack: ["Next.js", "TypeScript", "three.js", "React Three Fiber", "Tailwind CSS"],
        image: "/assets/work/Klyk-3d-keyboard.jpg",
        live: "https://klyk-3d-keyboard.vercel.app",
        github: "https://github.com/f1erfly94/klyk-3d-keyboard",
        featured: true,
    },
    {
        slug: "cook-galaxy",
        category: "Full-Stack Product",
        title: "Cook Galaxy — Recipe & Meal-Planning App",
        year: "2025 — now",
        summary:
            "A full-stack cooking product with AI import, meal plans, subscriptions and a companion mobile app.",
        highlights: [
            "Save recipes, import them from a photo or a link, and plan a week of meals that builds its own shopping list.",
            "AI features on Gemini: recipe import from a photo or screenshot, and suggestions from whatever is in your fridge.",
            "Recurring subscriptions, a trial, moderation, notifications and PDF export — maintained as a running product, not a demo.",
            "An Expo mobile app shares the same backend: every API route accepts both session cookies and mobile bearer tokens.",
        ],
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
        image: "/assets/work/Cook-Galaxy.png",
        live: "https://cook-galaxy.vercel.app/",
        github: "https://github.com/f1erfly94/cook-galaxy",
        featured: true,
    },
    {
        slug: "lumora",
        category: "Landing Page",
        title: "Lumora — AI Analytics Landing Page",
        year: "2026",
        summary:
            "An animated SaaS landing page for a fictional AI product-analytics platform, in light and dark.",
        highlights: [
            "Live churn/retention chart mock, bento feature grid, pricing toggle and testimonial marquees — no charting library.",
            "Full UA/EN localisation with a language switcher and per-locale metadata.",
            "Every visual is drawn in CSS and SVG, so the page ships no image weight at all.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
        image: "/assets/work/Lumora-lending-saas.png",
        live: "https://lending-saas.vercel.app/",
        github: "https://github.com/f1erfly94/lending-saas",
        featured: true,
    },
    {
        slug: "ember",
        category: "Landing Page",
        title: "EMBER — Bistro & Wine Landing Page",
        year: "2026",
        summary:
            "A fast, editorial landing page for a fictional bistro, tuned until the numbers stopped moving.",
        highlights: [
            "Hero slider, menu, gallery and a table-booking form with date and time pickers.",
            "Full UA/EN localisation in a dark, editorial design.",
            "Lighthouse 99+ on desktop and ~90 on mobile — the runtime ceiling for this kind of page.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
        image: "/assets/work/Ember-landing.png",
        live: "https://landing-page-eight-theta-57.vercel.app/",
        github: "https://github.com/f1erfly94/landing-page",
        featured: false,
    },
    {
        slug: "crypto-dashboard",
        category: "Data Dashboard",
        title: "Crypto Dashboard",
        year: "2025",
        summary: "A real-time price tracker for Bitcoin and Solana with a dual-axis 24-hour chart.",
        highlights: [
            "Live prices with an interactive dual-axis chart for the last 24 hours.",
            "A dense, quiet dark UI built for reading at a glance.",
            "Next.js App Router with Recharts.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
        image: "/assets/work/Crypto-dashboard.png",
        live: "https://crypto-ape-peach.vercel.app/",
        github: "https://github.com/f1erfly94/crypto-ape",
        featured: false,
    },
    {
        slug: "scrap-metal",
        category: "Commercial",
        title: "Scrap Metal & Recycling Website",
        year: "2025",
        summary: "An SEO-focused commercial site for a scrap metal and recycling company.",
        highlights: [
            "Built for search: metadata, structured content and fast static pages.",
            "Contact forms delivered straight to Telegram so enquiries reach the owner in seconds.",
            "Responsive and quick on the cheap phones the audience actually uses.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/assets/work/Scrap-metal.png",
        live: "https://scrap-metal-ten.vercel.app/",
        github: "https://github.com/f1erfly94/Scrap-metal",
        featured: false,
    },
    {
        slug: "music-web-app",
        category: "Frontend",
        title: "Linkin Park — Music Web App",
        year: "2025",
        summary: "A fan site with an interactive discography driven by live Spotify data.",
        highlights: [
            "Album and song data pulled from the Spotify API.",
            "Parallax scenes and an audio player with a custom UI.",
            "Album pages with smooth transitions between them.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Spotify API"],
        image: "/assets/work/LP.png",
        live: "https://music-web-app-rho.vercel.app/",
        github: "https://github.com/f1erfly94/music-web-app",
        featured: false,
    },
];

/** Display number: "01" is the newest project. */
export const projectNumber = (index) => String(index + 1).padStart(2, "0");

export const featuredProjects = projects.filter((project) => project.featured);

/** Filter chips on the work page, in the order they appear. */
export const categories = ["All", ...new Set(projects.map((project) => project.category))];
