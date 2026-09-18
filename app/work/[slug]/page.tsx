import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {BsArrowLeft, BsArrowRight, BsArrowUpRight, BsGithub} from "react-icons/bs";

import Reveal from "@/components/Reveal";
import {caseStudyFor} from "@/data/case-studies";
import {projectBySlug, projectNeighbours, projectNumber, projects} from "@/data/projects";

export const generateStaticParams = () => projects.map((project) => ({slug: project.slug}));

type PageProps = {params: Promise<{slug: string}>};

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
    const {slug} = await params;
    const project = projectBySlug(slug);
    if (!project) return {};

    return {
        title: project.title,
        description: project.summary,
        alternates: {canonical: `/work/${project.slug}`},
        openGraph: {
            title: project.title,
            description: project.summary,
            images: [{url: project.image, width: 1200, height: 750, alt: project.title}],
        },
    };
}

export default async function CaseStudy({params}: PageProps) {
    const {slug} = await params;
    const project = projectBySlug(slug);
    if (!project) notFound();

    const study = caseStudyFor(slug);
    const {previous, next} = projectNeighbours(slug);
    const number = projectNumber(projects.indexOf(project));

    return (
        <article className="container mx-auto pb-24 pt-6 xl:pt-10">
            <Link
                href="/work"
                className="group inline-flex items-center gap-2 font-mono text-sm text-white/60 transition-colors hover:text-accent"
            >
                <BsArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1"/>
                All projects
            </Link>

            <Reveal className="mt-8 max-w-3xl">
                <p className="label flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="text-accent">{number}</span>
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                    {study?.role && <span>{study.role}</span>}
                </p>

                <h1 className="h1 mt-5">{project.title}</h1>
                <p className="mt-6 text-lg leading-relaxed text-white/65">{project.summary}</p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    {project.live && (
                        <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm text-primary transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            Open live site
                            <BsArrowUpRight className="text-xs"/>
                        </Link>
                    )}
                    {!project.live && !project.github && project.linkNote && (
                        <p className="font-mono text-sm text-white/40">{project.linkNote}</p>
                    )}
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-sm text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                        >
                            <BsGithub/> Source
                        </Link>
                    )}
                </div>
            </Reveal>

            <Reveal delay={0.08} className="mt-12">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-black/40">
                    <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        priority
                        quality={92}
                        sizes="(max-width: 1120px) 100vw, 1120px"
                        className="object-cover object-top"
                    />
                </div>
            </Reveal>

            {study ? (
                <>
                    <Reveal className="mt-20 grid gap-10 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
                        <h2 className="h3 self-start text-white/50 md:sticky md:top-28">The problem</h2>
                        <p className="max-w-2xl text-lg leading-relaxed text-white/75">{study.problem}</p>
                    </Reveal>

                    <section className="mt-20 grid gap-10 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
                        <Reveal>
                            <h2 className="h3 self-start text-white/50 md:sticky md:top-28">Decisions</h2>
                        </Reveal>

                        <ol className="flex max-w-2xl flex-col gap-10">
                            {study.decisions.map((decision, index) => (
                                <Reveal key={decision.title} as="li" delay={index * 0.05}>
                                    <p className="label text-accent">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>
                                    <h3 className="h3 mt-3">{decision.title}</h3>
                                    <p className="mt-3 leading-relaxed text-white/65">{decision.body}</p>
                                </Reveal>
                            ))}
                        </ol>
                    </section>

                    <section className="mt-20">
                        <Reveal>
                            <h2 className="h3 self-start text-white/50 md:sticky md:top-28">What I measured</h2>
                        </Reveal>

                        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
                            {study.measured.map((item, index) => (
                                <Reveal key={item.label} delay={index * 0.06} className="bg-primary/80 p-6">
                                    <p className="font-display text-3xl font-semibold text-white xl:text-4xl">
                                        {item.value}
                                    </p>
                                    <p className="label mt-3">{item.label}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-white/50">{item.note}</p>
                                </Reveal>
                            ))}
                        </div>
                    </section>

                    {study.gallery && (
                        <section
                            className={`mt-20 grid gap-6 ${
                                study.gallery.some((shot) => shot.portrait)
                                    ? "grid-cols-2 md:grid-cols-4"
                                    : "md:grid-cols-3"
                            }`}
                        >
                            {study.gallery.map((shot, index) => (
                                <Reveal key={shot.src} delay={index * 0.06}>
                                    <div
                                        className={`relative overflow-hidden rounded-xl border border-line bg-black/40 ${
                                            shot.portrait ? "aspect-[9/19]" : "aspect-[16/10]"
                                        }`}
                                    >
                                        <Image
                                            src={shot.src}
                                            alt={shot.alt}
                                            fill
                                            quality={92}
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                            className={shot.portrait ? "object-contain" : "object-cover object-top"}
                                        />
                                    </div>
                                </Reveal>
                            ))}
                        </section>
                    )}
                </>
            ) : (
                <Reveal className="mt-20 grid gap-10 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
                    <h2 className="h3 self-start text-white/50 md:sticky md:top-28">What it does</h2>
                    <ul className="flex max-w-2xl flex-col gap-4">
                        {project.highlights.map((item) => (
                            <li key={item} className="flex gap-3 leading-relaxed text-white/70">
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"/>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            )}

            <Reveal className="mt-20 grid gap-10 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
                <h2 className="h3 self-start text-white/50 md:sticky md:top-28">Built with</h2>
                <ul className="flex max-w-2xl flex-wrap gap-2">
                    {project.stack.map((item) => (
                        <li
                            key={item}
                            className="rounded-full border border-line px-4 py-2 font-mono text-sm text-white/70"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </Reveal>

            <nav className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {[
                    {project: previous, direction: "Previous", icon: <BsArrowLeft/>},
                    {project: next, direction: "Next", icon: <BsArrowRight/>},
                ].map(({project: neighbour, direction, icon}) =>
                    neighbour ? (
                        <Link
                            key={direction}
                            href={`/work/${neighbour.slug}`}
                            className={`group flex flex-col gap-2 bg-primary/80 p-6 transition-colors hover:bg-surface xl:p-8 ${
                                direction === "Next" ? "sm:items-end sm:text-right" : ""
                            }`}
                        >
                            <span className="label flex items-center gap-2">
                                {direction === "Previous" && icon}
                                {direction}
                                {direction === "Next" && icon}
                            </span>
                            <span className="font-display text-lg font-medium text-white transition-colors group-hover:text-accent">
                                {neighbour.title}
                            </span>
                        </Link>
                    ) : null,
                )}
            </nav>
        </article>
    );
}
