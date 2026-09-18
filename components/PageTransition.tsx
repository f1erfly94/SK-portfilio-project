"use client";

import {motion} from "framer-motion";
import type {ReactNode} from "react";
import {usePathname} from "next/navigation";

/**
 * Page change: a short fade and lift on the way in.
 *
 * Deliberately no `AnimatePresence` and no exit animation. With `mode="wait"` the
 * new page mounts only after the old one finishes fading out, and a second
 * navigation that interrupts that fade leaves the wrapper stuck at `opacity: 0` —
 * a full-height page you cannot see, with the header and footer still in place.
 * Keying on the pathname re-runs the entrance instead, which cannot get stuck:
 * the element is only ever animating towards being visible.
 */
const PageTransition = ({children}: {children: ReactNode}) => {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial={{opacity: 0, y: 6}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.22, ease: [0.16, 1, 0.3, 1]}}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
