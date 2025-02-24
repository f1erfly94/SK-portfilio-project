"use client";

import {CiMenuFries} from "react-icons/ci";
import {usePathname} from "next/navigation";
import Link from 'next/link';
import {Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {useState} from "react";

const links = [
    {name: 'home', path: '/'},
    {name: 'services', path: '/services'},
    {name: 'resume', path: '/resume'},
    {name: 'contacts', path: '/contacts'},
];

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false); // закриває меню після кліку
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex justify-between items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={handleLinkClick}>
                        <h1 className="text-4xl font-semibold">
                            Serhii<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-between items-center gap-8">
                    {links.map((link) => (
                        <Link
                            href={link.path}
                            key={link.path}
                            onClick={handleLinkClick}
                            className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all`}
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
