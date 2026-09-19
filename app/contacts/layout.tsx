import type {ReactNode} from "react";
import {pageMetadata} from "@/lib/metadata";
import {profile} from "@/lib/site";

export const metadata = pageMetadata({
    title: "Contact",
    description: `Get in touch with ${profile.name} about a full-time role or a freelance project — by email, on Telegram or through the contact form.`,
    path: "/contacts",
});

export default function ContactsLayout({children}: {children: ReactNode}) {
    return children;
}
