import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // next build's own lint pass runs ESLint in a worker thread and tries
        // to pass the resolved flat config across the thread boundary. With
        // ESLint 9 + @typescript-eslint/parser (pulled in by eslint-config-next)
        // the parser is a module object with a `parse` function, which can't be
        // structured-cloned, so the build fails with:
        // "ESLint: Cannot serialize key "parse" in parser: Function values are
        // not supported." `npm run lint` (outside the build worker) still works
        // normally, so linting itself isn't skipped, just this broken build hook.
        ignoreDuringBuilds: true,
    },
};

// Notes in content/notes are MDX modules imported by app/notes/[slug], not pages
// of their own, so pageExtensions stays at the default. No remark/rehype plugins:
// Turbopack only accepts them as strings, and nothing here needs one yet.
const withMDX = createMDX({});

export default withMDX(nextConfig);
