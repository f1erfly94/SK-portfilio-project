/**
 * Every project on the site, newest first.
 *
 * The home page shows the `featured` ones, the work page shows all of them and
 * filters by `category`, so both read from this one list — a project can never
 * appear on one page with a stack or a link the other page does not have.
 */
export const projects = [
    {
        slug: "quorum",
        category: "Real-time",
        title: "Quorum — Planning Poker",
        year: "2026",
        summary:
            "Estimation rooms where votes stay hidden on the server until the host reveals them.",
        highlights: [
            "Everyone picks a card and nobody sees anyone else’s until the reveal — the server strips the value, so there is nothing to find in the network tab.",
            "Presence, host handover and reconnection are derived from the sockets the runtime holds, not from a list the server tries to keep in step.",
            "Room state lives in a Cloudflare Durable Object — one object per room, no database, no cold starts.",
            "Tested with two browsers driving the same room at once, because that is the only honest way to test a shared one.",
        ],
        stack: ["Next.js", "TypeScript", "Cloudflare Workers", "Durable Objects", "Tailwind CSS"],
        image: "/assets/work/Quorum.png",
        live: "https://quorum-planning-poker.vercel.app",
        github: "https://github.com/f1erfly94/quorum-planning-poker",
        featured: true,
    },
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
        image: "/assets/work/Klyk-3d-keyboard.png",
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
        image: "/assets/work/Cook-Galaxy.jpg",
        live: "https://cook-galaxy.vercel.app/",
        github: "https://github.com/f1erfly94/cook-galaxy",
        featured: true,
    },
    {
        slug: "cook-galaxy-mobile",
        category: "Mobile",
        title: "Cook Galaxy — Mobile App",
        year: "2026",
        summary:
            "The Expo app for Cook Galaxy: the same backend, the same account, in your hand at the stove.",
        highlights: [
            "One backend, two clients — every API route accepts either the web session cookie or a mobile bearer token, so a feature ships to both at once.",
            "Recipe import from a photo or a TikTok, Instagram and YouTube link, with the AI parse running server-side.",
            "Meal planner with a shopping list for any period, private per-recipe notes and AI nutrition estimates.",
            "In-app purchases, Google Sign-In and push notifications; 26 screens, each one covered by tests.",
        ],
        stack: ["Expo", "React Native", "TypeScript", "RevenueCat", "Jest"],
        image: "/assets/work/Cook-Galaxy-Mobile.png",
        live: null,
        github: null,
        // Ships through the stores from a private repository, so there is nothing
        // honest to link to — better to say that than to show a dead button.
        linkNote: "Private repository",
        featured: false,
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
        image: "/assets/work/Lumora-lending-saas.jpg",
        live: "https://lending-saas.vercel.app/",
        github: "https://github.com/f1erfly94/lending-saas",
        featured: false,
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
        image: "/assets/work/Ember-landing.jpg",
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
        image: "/assets/work/Scrap-metal.jpg",
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
        image: "/assets/work/LP.jpg",
        live: "https://music-web-app-rho.vercel.app/",
        github: "https://github.com/f1erfly94/music-web-app",
        featured: false,
    },
];

/** Display number: "01" is the newest project. */
export const projectNumber = (index) => String(index + 1).padStart(2, "0");

export const featuredProjects = projects.filter((project) => project.featured);

export const projectBySlug = (slug) => projects.find((project) => project.slug === slug) ?? null;

/** Neighbours for the case-study footer, wrapping around the list. */
export const projectNeighbours = (slug) => {
    const index = projects.findIndex((project) => project.slug === slug);
    if (index === -1) return {previous: null, next: null};
    return {
        previous: projects[(index - 1 + projects.length) % projects.length],
        next: projects[(index + 1) % projects.length],
    };
};

/** Filter chips on the work page, in the order they appear. */
export const categories = ["All", ...new Set(projects.map((project) => project.category))];
