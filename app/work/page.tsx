"use client";

import {useMemo, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import EarlierWork from "@/components/EarlierWork";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import {categories, currentProjects, projectNumber, projects} from "@/data/projects";

const Work = () => {
    const [filter, setFilter] = useState("All");

    const visible = useMemo(
        () => (filter === "All" ? currentProjects : currentProjects.filter((item) => item.category === filter)),
        [filter],
    );

    return (
        <section className="container mx-auto pb-24 pt-6 xl:pt-10">
            <Reveal>
                <p className="label">Work</p>
                <h1 className="h1 mt-4">Projects</h1>
                <p className="mt-5 max-w-2xl text-white/60">
                    Nearly everything here is live, so you can click through it instead of taking my word
                    for it. Open a case study to read what the problem was, which decisions it forced, and
                    what the result measured.
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
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <EarlierWork/>
        </section>
    );
};

export default Work;
