"use client";

import Image from "next/image";
import Link from "next/link";
import {motion, useReducedMotion} from "framer-motion";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";

/**
 * One project.
 *
 * The screenshot is framed `object-top` inside a fixed 16:10 window: these are
 * wide desktop captures, and the old `object-cover` on a tall box sliced the
 * left third off every one of them.
 */
const ProjectCard = ({project, number, priority = false}) => {
    const reduced = useReducedMotion();

    return (
        <motion.article
            whileHover={reduced ? undefined : {y: -6}}
            transition={{type: "spring", stiffness: 260, damping: 22}}
            className="card card-hover group flex h-full flex-col overflow-hidden"
        >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-black/40">
                <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1120px) 50vw, 33vw"
                    priority={priority}
                    className="object-cover object-top transition-transform duration-400 ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"/>
                <span className="label absolute left-4 top-4 rounded-full border border-line bg-primary/95 px-3 py-1 text-white/70">
                    {number}
                </span>
            </div>

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

                <div className="flex items-center gap-4 border-t border-line pt-4">
                    <Link
                        href={"/work/" + project.slug}
                        className="font-mono text-sm text-white transition-colors hover:text-accent"
                    >
                        Case study
                    </Link>

                    {project.live ? (
                        <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-sm text-white transition-colors hover:text-accent"
                        >
                            Live <BsArrowUpRight className="text-xs"/>
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
                            <BsGithub/>
                        </Link>
                    )}
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;
