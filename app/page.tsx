import Link from "next/link";
import {BsArrowRight, BsDownload} from "react-icons/bs";

import Photo from "@/components/Photo";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Socials from "@/components/Socials";
import StackMarquee from "@/components/StackMarquee";
import Stats from "@/components/Stats";
import {featuredProjects, projectNumber, projects} from "@/data/projects";
import {profile} from "@/lib/site";

const CV_PATH = "/assets/download/Serhii_Kuznetsov_Resume.pdf";

export default function Home() {
    return (
        <div className="flex flex-col gap-24 pb-24 xl:gap-32">
            <section className="container mx-auto pt-6 xl:pt-10">
                <div className="flex flex-col items-center gap-12 xl:flex-row xl:items-center xl:justify-between xl:gap-16">
                    <div className="order-2 max-w-2xl text-center xl:order-none xl:text-left">
                        <p className="label animate-rise">{profile.role} · {profile.location}</p>

                        <h1 className="h1 mt-5 animate-rise [animation-delay:40ms]">
                            I build web apps
                            <br/>
                            that <span className="text-accent">ship</span>.
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 xl:mx-0 animate-rise [animation-delay:80ms]">
                            I&apos;m {profile.name}, a frontend developer working in Next.js and TypeScript.
                            Lately that has meant a full-stack cooking product with AI recipe import,
                            subscriptions and its own mobile app — and a 3D keyboard landing page rendered
                            in WebGL without a single model file.
                        </p>

                        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row xl:justify-start animate-rise [animation-delay:120ms]">
                            <Link
                                href="/work"
                                className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-mono text-sm font-medium text-primary transition-transform duration-300 hover:-translate-y-0.5"
                            >
                                View my work
                                <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
                            </Link>

                            <a
                                href={CV_PATH}
                                download
                                className="inline-flex items-center gap-3 rounded-full border border-line px-7 py-3.5 font-mono text-sm text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                            >
                                Download CV
                                <BsDownload/>
                            </a>
                        </div>

                        <div className="mt-9 flex justify-center xl:justify-start animate-rise [animation-delay:160ms]">
                            <Socials
                                containerStyles="flex gap-4"
                                iconStyles="w-11 h-11 text-lg border border-line rounded-full flex justify-center items-center text-white/70 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="order-1 xl:order-none">
                        <Photo/>
                    </div>
                </div>
            </section>

            <Stats/>

            <section className="container mx-auto">
                <Reveal className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="label">Selected work</p>
                        <h2 className="h2 mt-3">Things I&apos;ve built</h2>
                    </div>
                    <Link
                        href="/work"
                        className="group inline-flex items-center gap-2 font-mono text-sm text-white/70 transition-colors hover:text-accent"
                    >
                        All {projects.length} projects
                        <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
                    </Link>
                </Reveal>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {featuredProjects.map((project, index) => (
                        <Reveal key={project.slug} delay={index * 0.04} className="h-full">
                            <ProjectCard
                                project={project}
                                number={projectNumber(projects.indexOf(project))}
                                priority={index === 0}
                            />
                        </Reveal>
                    ))}
                </div>
            </section>

            <StackMarquee/>

            <section className="container mx-auto">
                <Reveal className="card overflow-hidden px-8 py-14 text-center xl:px-16">
                    <p className="label">What&apos;s next</p>
                    <h2 className="h2 mx-auto mt-4 max-w-2xl">
                        Looking for someone to build the front end properly?
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-white/60">
                        I&apos;m open to full-time and freelance work. Tell me what you&apos;re building and
                        I&apos;ll tell you honestly whether I&apos;m the right person for it.
                    </p>
                    <Link
                        href="/contacts"
                        className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-mono text-sm font-medium text-primary transition-transform duration-300 hover:-translate-y-0.5"
                    >
                        Start a conversation
                        <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
                    </Link>
                </Reveal>
            </section>
        </div>
    );
}
