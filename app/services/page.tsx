import Link from "next/link";
import {BsArrowRight} from "react-icons/bs";

import Reveal from "@/components/Reveal";
import {type Project, projectBySlug} from "@/data/projects";

/**
 * What I offer, each backed by a project where it has already been done.
 *
 * Proof is referenced by slug and resolved against the project list, so a
 * renamed or removed project can never leave a service pointing at a dead
 * case study.
 */
const services = [
    {
        title: "Product front ends",
        description:
            "Complete product interfaces in Next.js and TypeScript: accounts, forms validated on both ends, subscriptions, notifications — built to be maintained for years, not to demo once.",
        proof: ["cook-galaxy", "cook-galaxy-mobile"],
    },
    {
        title: "Fast landing pages",
        description:
            "Marketing pages with motion that stays on the compositor and full UA/EN localisation, checked with Lighthouse on the production build rather than promised.",
        proof: ["ember", "lumora"],
    },
    {
        title: "Real-time features",
        description:
            "State shared between people — presence, reconnection, server-authoritative data — designed so what one person sees cannot be read early from the network tab.",
        proof: ["tessera", "quorum"],
    },
    {
        title: "Accessibility",
        description:
            "Components that work from the keyboard and with a screen reader, verified with axe scans and keyboard-only end-to-end tests instead of just labelled accessible.",
        proof: ["accessible-combobox"],
    },
    {
        title: "3D and WebGL",
        description:
            "Interactive three.js and React Three Fiber scenes, with a lightweight fallback for phones so the page stays fast where WebGL does not pay for itself.",
        proof: ["klyk"],
    },
    {
        title: "Tests that catch bugs",
        description:
            "Playwright end-to-end suites, component and unit tests, and CI that runs them on every push — aimed at the flows that would actually cost you users when they break.",
        proof: ["tessera", "accessible-combobox"],
    },
];

const resolveProof = (slugs: string[]) =>
    slugs.map(projectBySlug).filter((project): project is Project => project !== null);

export default function Services() {
    return (
        <section className="container mx-auto pb-24 pt-6 xl:pt-10">
            <Reveal>
                <p className="label">Services</p>
                <h1 className="h1 mt-4 max-w-4xl">What I can build for you</h1>
                <p className="mt-5 max-w-2xl text-white/60">
                    Front-end work in Next.js and TypeScript, from a single landing page to a product with its
                    own backend and mobile app. Each item links to a project where I have already done it.
                </p>
            </Reveal>

            <ol className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service, index) => (
                    <Reveal
                        key={service.title}
                        as="li"
                        delay={index * 0.04}
                        className="card flex h-full flex-col gap-4 p-7 xl:p-8"
                    >
                        <span className="label text-accent">{String(index + 1).padStart(2, "0")}</span>
                        <h2 className="h3">{service.title}</h2>
                        <p className="leading-relaxed text-white/60">{service.description}</p>

                        <div className="mt-auto border-t border-line pt-4">
                            <p className="label">See it in</p>
                            <ul className="mt-2 flex flex-col gap-1.5">
                                {resolveProof(service.proof).map((project) => (
                                    <li key={project.slug}>
                                        <Link
                                            href={`/work/${project.slug}`}
                                            className="group text-sm text-white/80 transition-colors hover:text-accent"
                                        >
                                            {project.title}
                                            {/* Inline, not flex: a wrapped title keeps its arrow
                                                after the last word instead of at the card's edge. */}
                                            <BsArrowRight
                                                aria-hidden="true"
                                                className="ml-2 inline align-[-1px] text-xs transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </ol>

            <Reveal className="mt-16 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="h3 max-w-xl">Something like this on your roadmap?</p>
                <Link
                    href="/contacts"
                    className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-mono text-sm font-medium text-primary transition-transform duration-300 hover:-translate-y-0.5"
                >
                    Start a conversation
                    <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
                </Link>
            </Reveal>
        </section>
    );
}
