"use client";

import {useRef, type ReactNode} from "react";
import {motion, useInView, useReducedMotion} from "framer-motion";

/**
 * Reveals its children once they scroll into view.
 *
 * Driven by `useInView` plus an explicit `animate` target rather than
 * `whileInView`: the visible state is then ordinary React state, so an animation
 * interrupted by a page change cannot leave the section parked at `opacity: 0`.
 */
interface RevealProps {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
    as?: "div" | "li";
}

const Reveal = ({children, delay = 0, y = 10, className, as = "div"}: RevealProps) => {
    const reduced = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, {once: true, margin: "0px 0px 140px 0px"});
    const MotionTag = motion[as] as typeof motion.div;

    if (reduced) {
        return (
            <MotionTag ref={ref} className={className}>
                {children}
            </MotionTag>
        );
    }

    return (
        <MotionTag
            ref={ref}
            className={className}
            initial={{opacity: 0, y}}
            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y}}
            transition={{duration: 0.32, delay, ease: [0.16, 1, 0.3, 1]}}
        >
            {children}
        </MotionTag>
    );
};

export default Reveal;
