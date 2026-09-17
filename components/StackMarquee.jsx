"use client";

/** The tools that actually show up in the projects below, on a slow loop. */
const stack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma",
    "PostgreSQL", "three.js", "React Three Fiber", "Zustand", "TanStack Query",
    "GraphQL", "Vitest", "Playwright", "Expo", "Git",
];

const StackMarquee = () => (
    <div className="marquee-mask relative overflow-hidden border-y border-line py-5">
        {/* The list is rendered twice and the track slides exactly half its width,
            so the loop has no visible seam. */}
        <div className="animate-marquee flex w-max gap-10 hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
                <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-10">
                    {stack.map((item) => (
                        <li key={item} className="flex items-center gap-10 font-mono text-sm text-white/45">
                            {item}
                            <span className="h-1 w-1 rounded-full bg-accent/60"/>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    </div>
);

export default StackMarquee;
