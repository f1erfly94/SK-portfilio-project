import type {Metadata} from "next";
import Link from "next/link";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";

// Next adds its own noindex to this page; only the inherited canonical "/" needs removing.
export const metadata: Metadata = {
    title: "Page not found",
    alternates: {canonical: null},
};

export default function NotFound() {
    return (
        <section className="container mx-auto flex min-h-[60vh] flex-col justify-center pb-24 pt-6 xl:pt-10">
            <p className="label">404</p>
            <h1 className="h1 mt-5 max-w-3xl">
                This page <span className="text-accent">doesn&apos;t exist</span>.
            </h1>
            <p className="mt-6 max-w-xl text-white/60">
                The link may be old, or a project may have moved. Everything that is on the site is one
                click away from here.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                    href="/"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-line px-7 py-3.5 font-mono text-sm text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                    <BsArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1"/>
                    Home
                </Link>
                <Link
                    href="/work"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 font-mono text-sm font-medium text-primary transition-transform duration-300 hover:-translate-y-0.5"
                >
                    See the projects
                    <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
                </Link>
            </div>
        </section>
    );
}
