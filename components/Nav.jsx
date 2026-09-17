"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";

const links = [
    {name: "home", path: "/"},
    {name: "work", path: "/work"},
    {name: "services", path: "/services"},
    {name: "resume", path: "/resume"},
];

/**
 * The active underline is a single shared element (`layoutId`), so it slides
 * between links instead of blinking off one and on the next.
 */
const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link) => {
                const active = link.path === pathname;

                return (
                    <Link
                        key={link.path}
                        href={link.path}
                        aria-current={active ? "page" : undefined}
                        className={`relative py-1 font-mono text-sm capitalize transition-colors duration-300 ${
                            active ? "text-accent" : "text-white/70 hover:text-white"
                        }`}
                    >
                        {link.name}
                        {active && (
                            <motion.span
                                layoutId="nav-underline"
                                className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-accent"
                                transition={{type: "spring", stiffness: 380, damping: 30}}
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
