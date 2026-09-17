"use client";

import {motion, useScroll, useSpring} from "framer-motion";

/** Thin accent bar across the top showing how far down the page you are. */
const ScrollProgress = () => {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {stiffness: 120, damping: 24, restDelta: 0.001});

    return (
        <motion.div
            aria-hidden="true"
            style={{scaleX}}
            className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
        />
    );
};

export default ScrollProgress;
