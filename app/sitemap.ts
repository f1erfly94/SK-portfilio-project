import {notes} from "@/data/notes";
import {projects} from "@/data/projects";
import {siteUrl} from "@/lib/site";

const routes = [
    "",
    "/work",
    "/notes",
    "/services",
    "/resume",
    "/contacts",
    ...projects.map((project) => "/work/" + project.slug),
    ...notes.map((note) => "/notes/" + note.slug),
];

export default function sitemap() {
    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
