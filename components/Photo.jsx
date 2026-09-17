import Image from "next/image";
import {profile} from "@/lib/site";

/**
 * Portrait panel.
 *
 * Replaces the rotating dashed circle that ships with every copy of the
 * template this site started from: a framed panel with a soft glow, a status
 * chip, and a float slow enough to read as depth rather than decoration.
 *
 * Entirely CSS, so it is a server component and the hero does not wait on
 * JavaScript to appear. `prefers-reduced-motion` is handled by the global rule
 * in globals.css, which stops both animations without a hook.
 */
const Photo = () => (
    <div className="relative w-[300px] animate-rise sm:w-[360px] xl:w-[440px]">
        {/*
          Glow as a gradient rather than a blur filter. A 64px blur on an element
          this size is re-rendered whenever anything above it moves — with the
          portrait floating over it, that was the worst frame on the page.
        */}
        <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-[3rem]"
            style={{
                background:
                    "radial-gradient(50% 50% at 50% 55%, rgba(0, 255, 153, 0.24), rgba(0, 255, 153, 0.06) 55%, transparent 72%)",
            }}
        />

        <div className="animate-float relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-surface-raised to-primary">
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
                    src="/assets/photo.webp"
                    alt={`${profile.name}, ${profile.role}`}
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 300px, 440px"
                    className="object-contain object-bottom"
                />
            </div>

            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-line bg-primary/95 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[11px] text-white/80">Open to work</span>
            </div>
        </div>
    </div>
);

export default Photo;
