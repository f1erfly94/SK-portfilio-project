import React from 'react';
import {usePathname} from "next/navigation";
import {SheetTrigger} from "@/components/ui/sheet";

const MobileNav = () => {

    const links= [
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
            <SheetTrigger classname="flex justify-between items-center" >

            </SheetTrigger>

        </Sheet>
    );
};

export default MobileNav;