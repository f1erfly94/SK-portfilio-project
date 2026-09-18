import Link from "next/link";
import Socials from "@/components/Socials";
import {profile} from "@/lib/site";

const SiteFooter = () => (
    <footer className="mt-8 border-t border-line">
        <div className="container mx-auto flex flex-col gap-10 py-12 xl:flex-row xl:items-end xl:justify-between">
            <div>
                <p className="label">Available for work</p>
                <p className="h3 mt-3 max-w-md text-white">
                    Have a project in mind? Let&apos;s talk about it.
                </p>
                <Link
                    href={`mailto:${profile.email}`}
                    className="mt-4 inline-block font-mono text-accent underline-offset-4 hover:underline"
                >
                    {profile.email}
                </Link>
            </div>

            <div className="flex flex-col gap-6 xl:items-end">
                <Socials
                    containerStyles="flex gap-4"
                    iconStyles="w-10 h-10 text-lg border border-line rounded-full flex justify-center items-center text-white/70 hover:border-accent hover:text-accent transition-colors duration-300"
                />
                <p className="font-mono text-xs text-white/40">
                    © {new Date().getFullYear()} {profile.name} · {profile.location}
                </p>
            </div>
        </div>
    </footer>
);

export default SiteFooter;
