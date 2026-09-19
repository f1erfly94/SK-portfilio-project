"use client";

import {CiMenuFries} from "react-icons/ci";
import {usePathname} from "next/navigation";
import Link from 'next/link';
import {Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {useState} from "react";
import {isActivePath, navLinks} from "@/lib/nav";

const links = [...navLinks, {name: "Hire Me", path: "/contacts"}];

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger aria-label="Open navigation menu" className="flex justify-between items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={handleLinkClick}>
                        {/* Not an h1: the page underneath already has one. */}
                        <p className="font-display text-4xl font-semibold">
                            Serhii<span className="text-accent">.</span>
                        </p>
                    </Link>
                </div>
                <nav className="flex flex-col justify-between items-center gap-8">
                    {links.map((link) => (
                        <Link
                            href={link.path}
                            key={link.path}
                            onClick={handleLinkClick}
                            aria-current={link.path === pathname ? "page" : undefined}
                            className={`${isActivePath(pathname, link.path) ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
