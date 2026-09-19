import type {MDXContent} from "mdx/types";

/**
 * Write-ups of bugs and decisions from my projects, newest first.
 *
 * The text of each note lives in content/notes/<slug>.mdx; this list holds
 * everything the index, the home page, the sitemap and the metadata need, so
 * none of them has to load the MDX to render a title.
 */
export interface Note {
    slug: string;
    title: string;
    summary: string;
    /** ISO date, YYYY-MM-DD. */
    published: string;
    tags: string[];
    load: () => Promise<{default: MDXContent}>;
}

export const notes: Note[] = [
    {
        slug: "the-lag-my-test-browser-could-not-see",
        title: "The lag my test browser could not see",
        summary:
            "Headless Chrome draws at 60 fps whatever the monitor. On a 165 Hz screen that hid a 146 ms frame — and the CSS property behind it was one I had decided was free.",
        published: "2026-09-19",
        tags: ["Performance", "CSS", "Measuring"],
        load: () => import("@/content/notes/the-lag-my-test-browser-could-not-see.mdx"),
    },
    {
        slug: "animatepresence-and-the-blank-pages",
        title: "AnimatePresence and the pages that went blank",
        summary:
            "An exit animation in the App Router left 30 of 40 pages at opacity: 0 — header and footer on screen, content invisible, and nothing a text search could find.",
        published: "2026-09-19",
        tags: ["Next.js", "Framer Motion", "Debugging"],
        load: () => import("@/content/notes/animatepresence-and-the-blank-pages.mdx"),
    },
    {
        slug: "the-counter-that-reset-to-zero",
        title: "The counter that reset “4 years” to zero",
        summary:
            "A stats row on this site showed “0 years of experience” to anyone who scrolled past it. The cause was two parts of one library disagreeing about when to start.",
        published: "2026-09-19",
        tags: ["React", "Debugging", "Dependencies"],
        load: () => import("@/content/notes/the-counter-that-reset-to-zero.mdx"),
    },
];

export const noteBySlug = (slug: string): Note | null => notes.find((note) => note.slug === slug) ?? null;

/** Formats an ISO date the same way everywhere: "Sep 19, 2026" (en-GB now prints "Sept"). */
export const formatNoteDate = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    });
