import Image from "next/image";
import Link from "next/link";
import {BsArrowRight, BsArrowUpRight, BsGithub, BsLock} from "react-icons/bs";

import type {Project} from "@/data/projects";

/**
 * One project.
 *
 * A server component on purpose: the lift on hover is a CSS transition rather
 * than a spring, so nine of these on the work page cost nothing to hydrate. The
 * global reduced-motion rule switches the transitions off without any JS.
 *
 * The screenshot is framed `object-top` inside a fixed 16:10 window: these are
 * wide desktop captures, and `object-cover` on a tall box sliced the left third
 * off every one of them.
 */
interface ProjectCardProps {
    project: Project;
    number: string;
    priority?: boolean;
}

const ProjectCard = ({project, number, priority = false}: ProjectCardProps) => (
    <article className="card card-hover group flex h-full flex-col overflow-hidden transition-transform duration-300 ease-out-expo hover:-translate-y-1.5">
        {/* Same destination as the "Case study" button below, so it is hidden from
            keyboard and screen-reader users to avoid a duplicate tab stop. */}
        <Link
            href={`/work/${project.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className="relative block aspect-[16/10] overflow-hidden border-b border-line bg-black/40"
        >
            <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1120px) 50vw, 33vw"
                priority={priority}
                quality={92}
                className="object-cover object-top transition-transform duration-400 ease-out-expo group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <span className="label absolute left-4 top-4 rounded-full border border-line bg-primary/95 px-3 py-1 text-white/70">
                {number}
            </span>
        </Link>

        <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex items-center justify-between gap-4">
                <span className="label text-accent">{project.category}</span>
                <span className="label whitespace-nowrap">{project.year}</span>
            </div>

            <h3 className="h3 text-white transition-colors duration-300 group-hover:text-accent">
                {project.title}
            </h3>

            <p className="text-sm leading-relaxed text-white/60">{project.summary}</p>

            <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.stack.map((item) => (
                    <li
                        key={item}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-white/70"
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 border-t border-line pt-4">
                <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 font-mono text-sm text-primary transition-transform duration-300 hover:-translate-y-0.5"
                >
                    Case study <BsArrowRight className="text-xs" />
                </Link>

                {project.live ? (
                    <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/live inline-flex items-center gap-1.5 rounded-full border border-accent/60 px-3.5 py-2 font-mono text-sm text-accent transition-colors duration-300 hover:bg-accent/10"
                    >
                        {/* Pulsing "on air" dot: only transform + opacity animate, so it
                            stays on the compositor; reduced-motion turns it off globally. */}
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                        Live
                        <BsArrowUpRight className="text-xs transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5" />
                    </Link>
                ) : (
                    <span className="font-mono text-sm text-white/35">
                        {project.linkNote ?? "Deploy pending"}
                    </span>
                )}

                {project.github && (
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-white/70 transition-colors hover:border-accent hover:text-accent"
                    >
                        <BsGithub />
                    </Link>
                )}

                {/* Same footprint as the GitHub button, so a card with a private
                    repository keeps the same one-line footer; dashed and dimmed to
                    read as "not a link". The case study spells the note out. */}
                {!project.github && project.sourceNote && (
                    <span
                        title={project.sourceNote}
                        className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-line text-white/35"
                    >
                        <BsLock aria-hidden="true" />
                        <span className="sr-only">{project.sourceNote}</span>
                    </span>
                )}
            </div>
        </div>
    </article>
);

export default ProjectCard;
