import type {ReactNode} from "react";
import {pageMetadata} from "@/lib/metadata";
import {profile} from "@/lib/site";

export const metadata = pageMetadata({
    title: "Resume",
    description: `Experience, education and skills of ${profile.name}, ${profile.role.toLowerCase()} — Next.js, React, TypeScript, and testing with Playwright and Vitest.`,
    path: "/resume",
});

export default function ResumeLayout({children}: {children: ReactNode}) {
    return children;
}
