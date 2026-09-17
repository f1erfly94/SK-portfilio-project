"use client";

import {motion, useReducedMotion} from "framer-motion";

/**
 * Reveals its children once they scroll into view.
 *
 * One component for the whole site, so every section enters the same way — and
 * with reduced motion it simply renders, no transform, no delay.
 */
const Reveal = ({children, delay = 0, y = 24, className, as = "div"}) => {
    const reduced = useReducedMotion();
    const MotionTag = motion[as] ?? motion.div;

    if (reduced) return <MotionTag className={className}>{children}</MotionTag>;

    return (
        <MotionTag
            className={className}
            initial={{opacity: 0, y}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
            transition={{duration: 0.6, delay, ease: [0.16, 1, 0.3, 1]}}
        >
            {children}
        </MotionTag>
    );
};

export default Reveal;
