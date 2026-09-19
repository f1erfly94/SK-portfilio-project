import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {BsArrowLeft} from "react-icons/bs";

import NoteList from "@/components/NoteList";
import Reveal from "@/components/Reveal";
import {formatNoteDate, noteBySlug, notes} from "@/data/notes";
import {readingMinutes} from "@/lib/reading-time";
import {profile, siteUrl} from "@/lib/site";

export const generateStaticParams = () => notes.map((note) => ({slug: note.slug}));

// Every note is known at build time; anything else is a 404 rather than an attempt to render.
export const dynamicParams = false;

type PageProps = {params: Promise<{slug: string}>};

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
    const {slug} = await params;
    const note = noteBySlug(slug);
    if (!note) return {};

    return {
        title: note.title,
        description: note.summary,
        alternates: {canonical: `/notes/${note.slug}`},
        openGraph: {
            type: "article",
            url: `/notes/${note.slug}`,
            siteName: `${profile.name} — Portfolio`,
            title: note.title,
            description: note.summary,
            publishedTime: note.published,
            authors: [profile.name],
            tags: note.tags,
        },
        twitter: {card: "summary_large_image", title: note.title, description: note.summary},
    };
}

export default async function NotePage({params}: PageProps) {
    const {slug} = await params;
    const note = noteBySlug(slug);
    if (!note) notFound();

    const {default: Body} = await note.load();
    const others = notes.filter((other) => other.slug !== note.slug);

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: note.title,
        description: note.summary,
        datePublished: note.published,
        url: `${siteUrl}/notes/${note.slug}`,
        keywords: note.tags.join(", "),
        author: {"@type": "Person", name: profile.name, url: siteUrl},
    };

    return (
        <article className="container mx-auto pb-24 pt-6 xl:pt-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c")}}
            />

            <Link
                href="/notes"
                className="group inline-flex items-center gap-2 font-mono text-sm text-white/60 transition-colors hover:text-accent"
            >
                <BsArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1"/>
                All notes
            </Link>

            <Reveal className="mt-8 max-w-3xl">
                <p className="label flex flex-wrap items-center gap-x-4 gap-y-2">
                    <time dateTime={note.published} className="text-accent">
                        {formatNoteDate(note.published)}
                    </time>
                    <span>{readingMinutes(note.slug)} min read</span>
                    {note.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </p>
                <h1 className="mt-5 font-display text-[36px] font-semibold leading-[1.08] tracking-tight sm:text-[48px] xl:text-[56px]">
                    {note.title}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-white/65 xl:text-xl">{note.summary}</p>
            </Reveal>

            <div className="rule mt-12 max-w-3xl"/>

            {/* Not wrapped in Reveal: a long article should be readable the moment it loads. */}
            <div className="note-body mt-12 max-w-[68ch]">
                <Body/>
            </div>

            {others.length > 0 && (
                <section className="mt-24" aria-labelledby="more-notes">
                    <p className="label">Keep reading</p>
                    <h2 id="more-notes" className="h2 mt-3">More notes</h2>
                    <div className="mt-8">
                        <NoteList notes={others}/>
                    </div>
                </section>
            )}
        </article>
    );
}
