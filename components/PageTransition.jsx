"use client";

import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";

/**
 * Page change: a short fade and lift.
 *
 * This replaced a full-screen "stairs" wipe that took about two seconds, which
 * every page then had to wait out before showing its own content — the reason
 * the old pages all animated in on a `delay: 2.4`.
 */
const PageTransition = ({children}) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{opacity: 0, y: 12}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -8}}
                transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
