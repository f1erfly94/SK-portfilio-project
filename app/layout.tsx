import type {Viewport} from "next";
import {Inter, JetBrains_Mono, Space_Grotesk} from "next/font/google";
import type {ReactNode} from "react";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import SiteFooter from "@/components/SiteFooter";
import {profile, siteUrl} from "@/lib/site";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    // Only the weights the design actually uses: labels and nav at 400,
    // buttons at 500. Shipping 300/600/700 as well meant three more font files
    // parsed on every load with nothing to apply them to.
    weight: ["400", "500"],
    variable: "--font-jetbrainsMono",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-spaceGrotesk",
    display: "swap",
});

const description =
    "Frontend developer from Cherkasy, Ukraine. I build production web apps and landing pages with Next.js and TypeScript — from a multiplayer whiteboard with its own sync engine to an AI recipe product with a mobile app.";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: `${profile.name} — ${profile.role}`,
        template: `%s — ${profile.name}`,
    },
    description,
    keywords: ["Frontend Developer", "Next.js", "React", "TypeScript", "Serhii Kuznetsov", "Portfolio"],
    authors: [{name: profile.name, url: profile.github}],
    openGraph: {
        type: "website",
        url: siteUrl,
        siteName: `${profile.name} — Portfolio`,
        title: `${profile.name} — ${profile.role}`,
        description,
    },
    twitter: {
        card: "summary_large_image",
        title: `${profile.name} — ${profile.role}`,
        description,
    },
    alternates: {canonical: "/"},
};

export const viewport: Viewport = {
    themeColor: "#1c1c22",
    colorScheme: "dark",
};

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
        <body className={`${jetbrainsMono.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
        <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:font-mono focus:text-sm focus:text-primary"
        >
            Skip to content
        </a>
        <ScrollProgress/>
        <Header/>
        <main id="main">
            <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter/>
        </body>
        </html>
    );
}
