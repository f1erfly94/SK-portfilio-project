import Link from "next/link";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import Reveal from "@/components/Reveal";
import {earlierProjects, projectNumber, projects} from "@/data/projects";

/**
 * Older, smaller projects as a compact list under the grid: still one click away,
 * but not competing for attention with the work that has case studies.
 */
const EarlierWork = () => {
    if (earlierProjects.length === 0) return null;

    return (
        <section className="mt-24" aria-labelledby="earlier-work">
            <Reveal>
                <p className="label">Archive</p>
                <h2 id="earlier-work" className="h2 mt-3">Earlier work</h2>
                <p className="mt-4 max-w-2xl text-white/60">
                    Smaller projects from before the ones above, kept here for the record.
                </p>
            </Reveal>

            <ul className="mt-10 divide-y divide-line border-y border-line">
                {earlierProjects.map((project, index) => (
                    <Reveal
                        key={project.slug}
                        as="li"
                        delay={index * 0.05}
                        className="grid gap-4 py-6 md:grid-cols-[4rem_minmax(0,1fr)_auto] md:items-center md:gap-8"
                    >
                        <span className="label text-accent">{projectNumber(projects.indexOf(project))}</span>

                        <div>
                            <Link
                                href={`/work/${project.slug}`}
                                className="font-display text-lg font-semibold text-white transition-colors duration-300 hover:text-accent xl:text-xl"
                            >
                                {project.title}
                            </Link>
                            <p className="mt-1.5 text-sm leading-relaxed text-white/55">{project.summary}</p>
                            <p className="mt-2 font-mono text-[11px] text-white/40">
                                {project.year} · {project.stack.join(" · ")}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            {project.live && (
                                <Link
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title}, live site`}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 font-mono text-sm text-white/70 transition-colors duration-300 hover:border-accent hover:text-accent"
                                >
                                    Live <BsArrowUpRight className="text-xs" aria-hidden="true"/>
                                </Link>
                            )}
                            {project.github && (
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} on GitHub`}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-white/70 transition-colors duration-300 hover:border-accent hover:text-accent"
                                >
                                    <BsGithub aria-hidden="true"/>
                                </Link>
                            )}
                        </div>
                    </Reveal>
                ))}
            </ul>
        </section>
    );
};

export default EarlierWork;
