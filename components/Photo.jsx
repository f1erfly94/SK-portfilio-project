"use client";

import Image from "next/image";
import {motion, useReducedMotion} from "framer-motion";
import {profile} from "@/lib/site";

/**
 * Portrait panel.
 *
 * Replaces the rotating dashed circle that ships with every copy of the template
 * this site started from: a framed panel with a soft accent glow, a status chip,
 * and a float slow enough to read as depth rather than decoration.
 */
const Photo = () => {
    const reduced = useReducedMotion();

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.96}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
            className="relative w-[300px] sm:w-[360px] xl:w-[440px]"
        >
            {/* Glow behind the panel. */}
            <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-accent/20 blur-3xl"
            />

            <motion.div
                animate={reduced ? undefined : {y: [0, -10, 0]}}
                transition={{duration: 7, repeat: Infinity, ease: "easeInOut"}}
                className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-surface-raised to-primary"
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/25 to-transparent"
                />

                <div className="relative aspect-[4/5] w-full">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-primary via-primary/70 to-transparent"
                    />
                    <Image
                        src="/assets/photo.png"
                        alt={`${profile.name}, ${profile.role}`}
                        fill
                        priority
                        quality={95}
                        sizes="(max-width: 768px) 300px, 440px"
                        className="object-contain object-bottom"
                    />
                </div>

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-line bg-primary/80 px-3 py-1.5 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"/>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"/>
                    </span>
                    <span className="font-mono text-[11px] text-white/80">Open to work</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Photo;
