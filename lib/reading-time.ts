import {readFileSync} from "node:fs";
import path from "node:path";

/**
 * Minutes to read a note, from its MDX source at build time.
 *
 * Code blocks are counted too, at the same rate: skimming a snippet is still
 * time spent on the page. Server-only — it reads from disk.
 */
export const readingMinutes = (slug: string, wordsPerMinute = 220): number => {
    const source = readFileSync(path.join(process.cwd(), "content", "notes", `${slug}.mdx`), "utf8");
    const words = source.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / wordsPerMinute));
};
