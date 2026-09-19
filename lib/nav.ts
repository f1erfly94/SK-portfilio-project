/** Top-level sections, shared by the desktop and the mobile navigation. */
export const navLinks = [
    {name: "home", path: "/"},
    {name: "work", path: "/work"},
    {name: "notes", path: "/notes"},
    {name: "services", path: "/services"},
    {name: "resume", path: "/resume"},
];

/** A section stays highlighted on its own pages too: /work/klyk belongs to "work". */
export const isActivePath = (pathname: string, path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);
