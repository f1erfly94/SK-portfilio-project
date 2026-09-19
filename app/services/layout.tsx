import type {ReactNode} from "react";
import {pageMetadata} from "@/lib/metadata";

export const metadata = pageMetadata({
    title: "Services",
    description:
        "What I can build for you: front ends in Next.js and TypeScript, performance and accessibility work, real-time features and full-stack products.",
    path: "/services",
});

export default function ServicesLayout({children}: {children: ReactNode}) {
    return children;
}
