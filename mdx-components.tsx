import type {MDXComponents} from "mdx/types";
import Link from "next/link";
import type {ComponentPropsWithoutRef} from "react";

/**
 * Element overrides for every MDX note. Required by @next/mdx in the App Router.
 *
 * Typography itself lives in the `.note-body` rules in globals.css, so a note is
 * plain Markdown with no class names; only links need logic — internal ones go
 * through next/link, external ones open in a new tab.
 */
const NoteLink = ({href = "", ...props}: ComponentPropsWithoutRef<"a">) =>
    href.startsWith("/") || href.startsWith("#") ? (
        <Link href={href} {...props}/>
    ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}/>
    );

const components: MDXComponents = {
    a: NoteLink,
};

export function useMDXComponents(): MDXComponents {
    return components;
}
