import React from 'react';
import {usePathname} from "next/navigation";
import {SheetContent, SheetTrigger, Sheet} from "@/components/ui/sheet";
import {CiMenuFries} from "react-icons/ci";
import Link from 'next/link';

const MobileNav = () => {

    const links = [
        {
            name: 'home',
            path: '/',
        },
        {
            name: 'services',
            path: '/services',
        },
        {
            name: 'resume',
            path: '/resume',
        },
        {
            name: 'work',
            path: '/work',
        },
        {
            name: 'contacts',
            path: '/contacts',
        },
    ]
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger clasName="flex justify-between items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Serhii<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;