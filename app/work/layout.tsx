import type {ReactNode} from "react";
import {pageMetadata} from "@/lib/metadata";

// The work page itself is a client component (the filter chips hold state), so
// its metadata has to live here. Case studies override all of it with their own.
export const metadata = pageMetadata({
    title: "Work",
    description:
        "Projects with case studies: a full-stack recipe product with its own mobile app, real-time planning poker on Cloudflare Durable Objects, a 3D keyboard in WebGL, an accessibility study and landing pages.",
    path: "/work",
});

export default function WorkLayout({children}: {children: ReactNode}) {
    return children;
}
