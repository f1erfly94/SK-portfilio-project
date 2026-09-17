"use client";

import {useMemo, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import {Dialog, DialogContent, DialogDescription, DialogTitle} from "@/components/ui/dialog";
import {categories, projectNumber, projects} from "@/data/projects";

const Work = () => {
    const [filter, setFilter] = useState("All");
    const [selected, setSelected] = useState(null);

    const visible = useMemo(
        () => (filter === "All" ? projects : projects.filter((item) => item.category === filter)),
        [filter],
    );

    return (
        <section className="container mx-auto pb-24 pt-6 xl:pt-10">
            <Reveal>
                <p className="label">Work</p>
                <h1 className="h1 mt-4">Projects</h1>
                <p className="mt-5 max-w-2xl text-white/60">
                    Everything here is live or open source. Commercial work sits next to things I built
                    to learn something specific — the case notes say which is which.
                </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
                {categories.map((category) => {
                    const active = category === filter;
                    return (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setFilter(category)}
                            aria-pressed={active}
                            className={`rounded-full border px-5 py-2 font-mono text-sm transition-colors duration-300 ${
                                active
                                    ? "border-accent bg-accent text-primary"
                                    : "border-line text-white/60 hover:border-accent/50 hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </Reveal>

            <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {visible.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            layout
                            initial={{opacity: 0, scale: 0.96}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.96}}
                            transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
                        >
                            <ProjectCard
                                project={project}
                                number={projectNumber(projects.indexOf(project))}
                                priority={index < 3}
                                onDetails={setSelected}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
                <DialogContent>
                    {selected && (
                        <>
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl border-b border-line">
                                <Image
                                    src={selected.image}
                                    alt={`${selected.title} screenshot`}
                                    fill
                                    sizes="768px"
                                    className="object-cover object-top"
                                />
                            </div>

                            <div className="flex flex-col gap-5 p-6 xl:p-8">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="label text-accent">{selected.category}</span>
                                    <span className="label">{selected.year}</span>
                                </div>

                                <DialogTitle>{selected.title}</DialogTitle>
                                <DialogDescription>{selected.summary}</DialogDescription>

                                <ul className="flex flex-col gap-3">
                                    {selected.highlights.map((item) => (
                                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/70">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"/>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <ul className="flex flex-wrap gap-2">
                                    {selected.stack.map((item) => (
                                        <li
                                            key={item}
                                            className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-white/70"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap items-center gap-3 border-t border-line pt-5">
                                    {selected.live && (
                                        <Link
                                            href={selected.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm text-primary transition-transform duration-300 hover:-translate-y-0.5"
                                        >
                                            Open live site
                                            <BsArrowUpRight className="text-xs"/>
                                        </Link>
                                    )}
                                    {selected.github && (
                                        <Link
                                            href={selected.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-sm text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                                        >
                                            <BsGithub/> Source
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Work;
