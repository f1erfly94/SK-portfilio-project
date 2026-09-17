/**
 * Long-form notes for the projects I built myself, keyed by the slug in
 * `data/projects.js`.
 *
 * Only projects with a real story get an entry: the rest fall back to their
 * summary and highlights, because a case study padded with invented detail is
 * worse than no case study.
 */
export const caseStudies = {
    quorum: {
        role: "Solo — protocol, worker, interface",
        problem:
            "Nothing in this portfolio showed the hardest thing a front-end developer does: keeping state in step between people. Landing pages and even a full product are, in the end, one browser talking to one server. Planning poker is small enough to finish and rich enough to be interesting — presence, authority, hidden state and reconnection, all in a domain anyone understands in ten seconds.",
        decisions: [
            {
                title: "The server hides the votes, not the interface",
                body: "The obvious implementation broadcasts every vote and hides them in the UI — one devtools panel and the round is over. Here the room strips the card value from everyone else's participant until the reveal, so a client that peeks finds nothing. The end-to-end test asserts on the page's HTML rather than on what is visible, because that is the claim being made.",
            },
            {
                title: "Presence is the connection, not a list",
                body: "Who is in the room comes from the sockets the runtime is actually holding, so there is no join/leave bookkeeping to drift out of step and a closed laptop cannot leave a ghost behind.",
            },
            {
                title: "One Durable Object per room",
                body: "The room id maps to an object, and that object is the room: no database, no shared table, no locking. Round state lives in its storage and per-person state rides on the socket, so the runtime can hibernate the object between messages and bring it back without dropping anyone.",
            },
            {
                title: "Chosen over a managed realtime service",
                body: "Free tiers that sleep after a week of inactivity make a poor portfolio demo — a recruiter opening a dead page learns the wrong thing. Durable Objects stay warm on the free plan, and writing the synchronisation myself is the part worth showing; handing it to a library would have removed the project's reason to exist.",
            },
            {
                title: "Room codes you can read out on a call",
                body: "The alphabet has no vowels, so a generated code cannot accidentally spell something, and none of the characters people confuse when dictating them: no 0/O, no 1/l/I.",
            },
            {
                title: "Local green is not green",
                body: "Two things passed locally and failed against the deployed worker. The test assumed the host would be whoever connected first — true over loopback, not over the internet, where the join messages arrive in whatever order they arrive. And it reused one room id, while a Durable Object keeps its state, so the second run walked into the first run's revealed round. Both were bugs in the test rather than the server, and only a real deployment surfaced them.",
            },
        ],
        measured: [
            {value: "2.5 KB", label: "worker, gzipped", note: "the whole synchronisation layer"},
            {value: "15", label: "protocol checks", note: "two raw sockets against a real Durable Object"},
            {value: "3", label: "two-browser tests", note: "one test driving both sides of the same room"},
            {value: "0", label: "cold starts", note: "the room is awake whenever someone opens the link"},
        ],
        gallery: [
            {src: "/assets/work/quorum/hidden.jpg", alt: "Before the reveal: your own card is visible, everyone else shows only a tick"},
            {src: "/assets/work/quorum/landing.jpg", alt: "The landing page"},
            {src: "/assets/work/quorum/mobile.jpg", alt: "A room on a phone"},
        ],
    },

    klyk: {
        role: "Solo — concept, design, build, deploy",
        problem:
            "Every junior portfolio has landing pages in it, so another one proves nothing. I wanted a project in a genre that is hard to fake — real-time 3D — and I wanted it to be honestly mine: most WebGL showcases are a bought model with a camera orbiting it, which says more about the marketplace than about the developer.",
        decisions: [
            {
                title: "The model is generated in code, not downloaded",
                body: "There is no GLTF, texture, image or audio file in the repository. Every part is an extruded rounded rectangle: the caps are tapered and chamfered, the case walls are one extrusion with a hole in it. A change to the layout table reshapes the model, because the geometry is a function of that table.",
            },
            {
                title: "68 caps, about a dozen draw calls",
                body: "Caps are grouped by width into one instanced mesh each. A single mesh for all of them would have to scale the spacebar 6.25x on X and stretch its corner radius into an ellipse; seven meshes keep every corner identical and still cost far less than 68 separate objects.",
            },
            {
                title: "Legends are drawn at runtime into one atlas",
                body: "All 68 legends live in a canvas texture generated in the browser and render as a single instanced quad with a shader that offsets UVs per instance. Glyphs are white and tinted per instance, so switching colourway costs an attribute update instead of a texture rebuild — and the 3D layer ships no font file.",
            },
            {
                title: "I threw out the helper library for the lighting",
                body: "The usual environment helper pulled RGBELoader, EXRLoader and a gain-map decoder into the bundle — HDRI machinery for files this page never loads. I replaced it with four emissive panels prefiltered in the browser. The 3D chunk dropped from 964 KB to 892 KB raw and the desktop score went up four points.",
            },
            {
                title: "The choreography is pure functions",
                body: "Scroll progress maps to a camera pose, an explode amount and a canvas opacity through functions that know nothing about three.js, anchored to the sections' real offsets so a section taller than the viewport cannot drag the keyframes out of step. That is what made the timeline unit testable; the scene only damps towards whatever those functions return.",
            },
            {
                title: "Phones do not get WebGL at all",
                body: "Below 768px, or without WebGL2, the same keyboard renders as server-side SVG from the same layout table — so crawlers and no-JavaScript visitors get the whole board too, and the configurator keeps working there.",
            },
        ],
        measured: [
            {value: "93", label: "Lighthouse mobile", note: "higher than desktop — phones never load three.js"},
            {value: "74", label: "Lighthouse desktop", note: "0.74 s of blocking time, nearly all of it evaluating the 3D engine"},
            {value: "0.6 s", label: "LCP, CLS 0", note: "the page is readable long before the scene arrives"},
            {value: "37", label: "tests", note: "30 unit on layout, timeline and geometry; 7 end-to-end"},
        ],
        gallery: [
            {src: "/assets/work/klyk/anatomy.jpg", alt: "Exploded view: caps, switches, plate, PCB and case"},
            {src: "/assets/work/klyk/keypress.jpg", alt: "Close-up of a pressed key"},
            {src: "/assets/work/klyk/mobile.jpg", alt: "Mobile fallback: the board drawn as SVG"},
        ],
    },

    "cook-galaxy": {
        role: "Solo — product, backend, web and mobile",
        problem:
            "Recipes live in screenshots, bookmarks and messages to yourself, and none of that survives contact with a kitchen. I wanted one place for the recipes you actually cook, with a weekly plan that turns into a shopping list without retyping anything — and then I kept it running as a product instead of stopping at a demo.",
        decisions: [
            {
                title: "AI where it removes typing, not where it looks clever",
                body: "Import a recipe from a photo, a screenshot or a link, and ask what you can cook from what is in your fridge. Both are model calls behind a gate: the trial plan needs a verified email and gets a daily cap on AI actions, because an ungated model endpoint is someone else's free API.",
            },
            {
                title: "One backend for the site and the mobile app",
                body: "The Expo app is not a second product. Every API route accepts either a session cookie or a mobile bearer token, so a feature shipped on the web is available in the app without a parallel implementation.",
            },
            {
                title: "Subscriptions on two rails",
                body: "Recurring card billing on the web and in-app purchases on mobile resolve to the same subscription state, with a trial that is granted once and cannot be re-granted by deleting the account.",
            },
            {
                title: "Separate databases for production and previews",
                body: "Preview deployments and local development share a throwaway database; migrations never run against production from a preview. It sounds obvious until the first time a preview branch tries.",
            },
            {
                title: "The tests run against a real database",
                body: "The end-to-end suite spins up Postgres and a mail catcher inside the CI runner rather than pointing at a preview deployment, so a run is reproducible and does not depend on someone else's environment being awake.",
            },
        ],
        measured: [
            {value: "78", label: "API routes", note: "all of them serving both the web session and the mobile token"},
            {value: "26", label: "mobile screens", note: "every one with a test, including error and retry states"},
            {value: "33 → 0", label: "flaky e2e failures", note: "after the suite moved into a hermetic CI environment"},
            {value: "21", label: "security findings closed", note: "from an audit, plus a content security policy now enforced"},
        ],
    },

    lumora: {
        role: "Solo — design and build",
        problem:
            "A SaaS landing page is the easiest thing to make look generic: buy a template, drop in stock screenshots of a dashboard that does not exist, ship. I wanted one that carries its own weight — every visual drawn rather than photographed, and a light theme that is a real design rather than the dark one with the colours flipped.",
        decisions: [
            {
                title: "No images at all",
                body: "The dashboard mock, the churn chart, the integration orbit and the logos are CSS and SVG. The page ships no image weight, which is also why it stays fast on a phone.",
            },
            {
                title: "Two languages with real negotiation",
                body: "Ukrainian and English, chosen from the browser's own preference on first visit, with per-locale metadata and hreflang rather than a flag that swaps strings client-side.",
            },
            {
                title: "One schema validates the form twice",
                body: "The same schema runs in the browser for instant feedback and again in the API route, because client-side validation is a convenience, not a guarantee. The form's code is only fetched once its section nears the viewport.",
            },
        ],
        measured: [
            {value: "88", label: "Lighthouse mobile", note: "with 100 for accessibility, best practices and SEO"},
            {value: "0", label: "image requests", note: "every visual is CSS or SVG"},
        ],
    },

    ember: {
        role: "Solo — design and build",
        problem:
            "A restaurant page has one job: make someone hungry and then let them book a table without friction. Most of them bury the booking behind a phone number and a PDF menu.",
        decisions: [
            {
                title: "Editorial rather than decorative",
                body: "Type and spacing do the work — a hero slider, a menu that reads like a menu, and a gallery that does not fight the text for attention.",
            },
            {
                title: "Booking that fits on a phone",
                body: "Date and time pickers sized for thumbs, with the form reachable from anywhere on the page.",
            },
        ],
        measured: [
            {value: "99+", label: "Lighthouse desktop", note: "and around 90 on mobile — the runtime ceiling for this kind of page"},
        ],
    },
};

export const caseStudyFor = (slug) => caseStudies[slug] ?? null;
