import Link from "next/link";
import {BsArrowRight} from "react-icons/bs";

import Reveal from "@/components/Reveal";
import {formatNoteDate, type Note} from "@/data/notes";
import {readingMinutes} from "@/lib/reading-time";

/**
 * Notes as a list of rows — the same on /notes and on the home page. A server
 * component: reading time is counted from the MDX source at build time.
 */
const NoteList = ({notes}: {notes: Note[]}) => (
    <ol className="divide-y divide-line border-y border-line">
        {notes.map((note, index) => (
            <Reveal key={note.slug} as="li" delay={index * 0.05}>
                <Link
                    href={`/notes/${note.slug}`}
                    className="group grid gap-3 py-7 md:grid-cols-[9rem_minmax(0,1fr)_auto] md:items-start md:gap-8"
                >
                    <p className="label flex gap-x-3 pt-1.5 md:flex-col md:gap-y-1.5">
                        <time dateTime={note.published}>{formatNoteDate(note.published)}</time>
                        <span>{readingMinutes(note.slug)} min read</span>
                    </p>

                    <div>
                        <h3 className="h3 text-white transition-colors duration-300 group-hover:text-accent">
                            {note.title}
                        </h3>
                        <p className="mt-2 max-w-2xl leading-relaxed text-white/60">{note.summary}</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                            {note.tags.map((tag) => (
                                <li
                                    key={tag}
                                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-white/60"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <BsArrowRight
                        aria-hidden="true"
                        className="hidden text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:mt-2 md:block"
                    />
                </Link>
            </Reveal>
        ))}
    </ol>
);

export default NoteList;
