"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import NextImage from "next/image";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import {Button} from "@/components/ui/button";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // The bar only grows a border and a blur once the page has moved, so the
        // hero starts clean.
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 text-white transition-all duration-300 ${
                scrolled ? "border-b border-line bg-primary/95" : "border-b border-transparent"
            }`}
        >
            <div className="container mx-auto flex h-20 items-center justify-between gap-6">
                <Link href="/" aria-label="Home" className="shrink-0">
                    <NextImage src="/assets/Logo.png" alt="Serhii Kuznetsov" width={72} height={72} priority/>
                </Link>

                <div className="hidden items-center gap-10 xl:flex">
                    <Nav/>
                    <Link href="/contacts">
                        <Button variant="default">Hire me</Button>
                    </Link>
                </div>

                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
};

export default Header;
