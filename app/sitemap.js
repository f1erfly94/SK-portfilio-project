import {siteUrl} from "@/lib/site";

const routes = ["", "/work", "/services", "/resume", "/contacts"];

export default function sitemap() {
    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
