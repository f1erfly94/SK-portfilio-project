"use client";

import {useEffect, useRef} from "react";
import {animate, useInView, useReducedMotion} from "framer-motion";

/**
 * Counts from zero to `end` the first time it scrolls into view.
 *
 * This replaced react-countup. Its scroll spy started the counter with no delay
 * on mount instead of on scroll, never marked it "once", and then reset it the
 * moment it left the viewport, so scrolling past the stats row turned
 * "4 years of experience" into "0". Driving it from `useInView`, the same way
 * `Reveal` works, removes that second source of truth.
 */
interface CountUpNumberProps {
    end: number;
    delay?: number;
    className?: string;
}

const CountUpNumber = ({end, delay = 0, className}: CountUpNumberProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    // No negative margin: on a 1440x900 screen the stats row already peeks in at
    // the bottom on load, and a row of zeroes waiting to be scrolled 10% further
    // reads as broken, not as an animation about to start.
    const inView = useInView(ref, {once: true});
    const reduced = useReducedMotion();

    useEffect(() => {
        const node = ref.current;
        if (!node || !inView) return;

        if (reduced) {
            node.textContent = end.toLocaleString("en-US");
            return;
        }

        // Written straight to the DOM: a re-render per frame for a number nobody
        // interacts with would be wasted work.
        const controls = animate(0, end, {
            duration: 2.2,
            delay,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
                node.textContent = Math.round(value).toLocaleString("en-US");
            },
        });
        return () => controls.stop();
    }, [inView, reduced, end, delay]);

    return (
        <span ref={ref} className={className}>
            0
        </span>
    );
};

export default CountUpNumber;
