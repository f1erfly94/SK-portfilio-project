import type {ReactNode} from "react";
import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTelegram} from "react-icons/fa";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Socials from "@/components/Socials";
import {profile} from "@/lib/site";

/** Everything here comes from `profile`, so the page cannot drift from the header, footer or CV link. */
const channels: {icon: ReactNode; title: string; value: string; href?: string}[] = [
    {icon: <FaEnvelope/>, title: "Email", value: profile.email, href: `mailto:${profile.email}`},
    {
        icon: <FaTelegram/>,
        title: "Telegram",
        value: `@${profile.telegram.split("/").pop()}`,
        href: profile.telegram,
    },
    {icon: <FaPhoneAlt/>, title: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`},
    {icon: <FaMapMarkerAlt/>, title: "Based in", value: profile.location},
];

export default function Contacts() {
    return (
        <section className="container mx-auto pb-24 pt-6 xl:pt-10">
            <div className="grid gap-14 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:gap-16">
                <Reveal>
                    <p className="label">Contact</p>
                    <h1 className="h1 mt-4">Let&apos;s talk</h1>
                    <p className="mt-5 max-w-md text-white/60">
                        A full-time role or a freelance project — tell me what you&apos;re building. The form,
                        email and Telegram all reach me directly, so use whichever is easiest.
                    </p>

                    <ul className="mt-10 flex flex-col gap-6">
                        {channels.map((channel) => (
                            <li key={channel.title} className="flex items-center gap-5">
                                <span
                                    aria-hidden="true"
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-accent"
                                >
                                    {channel.icon}
                                </span>
                                <div className="min-w-0">
                                    <p className="label">{channel.title}</p>
                                    {channel.href ? (
                                        <a
                                            href={channel.href}
                                            {...(channel.href.startsWith("http")
                                                ? {target: "_blank", rel: "noopener noreferrer"}
                                                : {})}
                                            className="mt-1 block break-words text-lg text-white transition-colors hover:text-accent"
                                        >
                                            {channel.value}
                                        </a>
                                    ) : (
                                        <p className="mt-1 text-lg text-white">{channel.value}</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <Socials
                        containerStyles="mt-10 flex gap-4"
                        iconStyles="w-11 h-11 text-lg border border-line rounded-full flex justify-center items-center text-white/70 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                    />
                </Reveal>

                <Reveal delay={0.08}>
                    <ContactForm/>
                </Reveal>
            </div>
        </section>
    );
}
