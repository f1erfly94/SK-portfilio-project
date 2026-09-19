import type {Metadata} from "next";
import {profile} from "@/lib/site";

interface PageMetadataInput {
    title: string;
    description: string;
    /** Path of the page, e.g. "/work" — resolved against `metadataBase`. */
    path: string;
}

/**
 * Metadata for a top-level page.
 *
 * The root layout sets the canonical to "/", and a page that does not set its
 * own inherits it — which told search engines that /work, /resume and the rest
 * were duplicates of the home page. `openGraph` and `twitter` replace the root
 * ones wholesale instead of merging with them, so the shared fields are
 * repeated here.
 */
export const pageMetadata = ({title, description, path}: PageMetadataInput): Metadata => {
    const fullTitle = `${title} — ${profile.name}`;

    return {
        title,
        description,
        alternates: {canonical: path},
        openGraph: {
            type: "website",
            url: path,
            siteName: `${profile.name} — Portfolio`,
            title: fullTitle,
            description,
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
        },
    };
};
