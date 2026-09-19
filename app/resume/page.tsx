import type {ReactNode} from "react";
import {BsArrowUpRight, BsDownload} from "react-icons/bs";

import Reveal from "@/components/Reveal";
import {education, experience, languages, skillGroups, summary} from "@/data/resume";
import {cvPath, profile} from "@/lib/site";

/**
 * One page instead of the template's four tabs: a recruiter scrolls, they do
 * not click through tabs looking for the dates. Rendered on the server — the
 * only moving parts are the `Reveal` wrappers.
 */
const facts = [
    {label: "Experience", value: `${profile.yearsOfExperience} years`},
    {label: "Based in", value: profile.location},
    {label: "Languages", value: languages},
    {label: "Open to work", value: profile.available ? "Yes — full-time or freelance" : "Not right now"},
];

/** Same two-column rhythm as the case studies: a sticky heading on the left, content on the right. */
const Block = ({title, children}: {title: string; children: ReactNode}) => (
    <section className="mt-20 grid gap-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-10">
        <Reveal>
            <h2 className="h3 self-start text-white/50 md:sticky md:top-28">{title}</h2>
        </Reveal>
        <div className="min-w-0">{children}</div>
    </section>
);

export default function Resume() {
    return (
        <article className="container mx-auto pb-24 pt-6 xl:pt-10">
            <Reveal className="max-w-3xl">
                <p className="label">Resume</p>
                <h1 className="h1 mt-4">{profile.name}</h1>
                <p className="mt-3 font-display text-xl text-accent xl:text-2xl">{profile.role}</p>
                <p className="mt-6 text-lg leading-relaxed text-white/65">{summary}</p>

                <a
                    href={cvPath}
                    download
                    className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-mono text-sm font-medium text-primary transition-transform duration-300 hover:-translate-y-0.5"
                >
                    Download CV (PDF)
                    <BsDownload aria-hidden="true"/>
                </a>
            </Reveal>

            <Reveal delay={0.06} className="mt-14">
                <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
                    {facts.map((fact) => (
                        <div key={fact.label} className="bg-primary/80 p-6">
                            <dt className="label">{fact.label}</dt>
                            <dd className="mt-2 text-white">{fact.value}</dd>
                        </div>
                    ))}
                </dl>
            </Reveal>

            <Block title="Experience">
                <ol className="flex flex-col gap-6">
                    {experience.map((job, index) => (
                        <Reveal key={job.company} as="li" delay={index * 0.05} className="card p-6 xl:p-8">
                            <p className="label flex flex-wrap items-center gap-x-4 gap-y-1">
                                <span className="text-accent">{job.duration}</span>
                                {job.link ? (
                                    <a
                                        href={job.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                                    >
                                        {job.company}
                                        <BsArrowUpRight aria-hidden="true"/>
                                    </a>
                                ) : (
                                    <span>{job.company}</span>
                                )}
                            </p>
                            <h3 className="h3 mt-3">{job.position}</h3>

                            <ul className="mt-5 flex flex-col gap-3">
                                {job.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-white/70 xl:text-base">
                                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"/>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                                {job.stack.map((tech) => (
                                    <li
                                        key={tech}
                                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-white/70"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </ol>
            </Block>

            <Block title="Skills">
                <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div key={group.title} className="bg-primary/80 p-6">
                            <h3 className="label text-accent">{group.title}</h3>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-white/80"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Block>

            <Block title="Education">
                <ol className="divide-y divide-line border-y border-line">
                    {education.map((item) => (
                        <li
                            key={item.degree}
                            className="grid gap-2 py-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6"
                        >
                            <span className="label pt-1 text-accent">{item.duration}</span>
                            <div>
                                <p className="font-display text-lg font-semibold text-white">{item.degree}</p>
                                <p className="mt-1 text-sm text-white/55">{item.institution}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </Block>
        </article>
    );
}
