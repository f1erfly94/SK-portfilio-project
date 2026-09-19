/**
 * Long-form notes for the projects I built myself, keyed by the slug in
 * `data/projects.js`.
 *
 * Only projects with a real story get an entry: the rest fall back to their
 * summary and highlights, because a case study padded with invented detail is
 * worse than no case study.
 */
export interface CaseStudy {
    role: string;
    problem: string;
    decisions: {title: string; body: string}[];
    measured: {value: string; label: string; note: string}[];
    /** Optional: not every project has extra screenshots. */
    gallery?: {src: string; alt: string; portrait?: boolean}[];
}

export const caseStudies: Record<string, CaseStudy> = {
    tessera: {
        role: "Solo — sync protocol, server, renderer, interface",
        problem:
            "Quorum showed I can keep a little state in step between people. A whiteboard is the hard version of that: a large shared document, several people editing the same objects at once, and connections that drop in the middle of a drag. I wanted to build the synchronisation myself rather than hand it to a CRDT library or a realtime service — that is the part worth showing — and then test it hard enough to trust it.",
        decisions: [
            {
                title: "The server's only job is order",
                body: "Each room is one Durable Object, and a Durable Object is single-threaded, so every change gets applied in one sequence and broadcast with its number. Conflicts resolve per property in that order: move a shape while someone recolours it and both survive. It is the model Figma describes for its own multiplayer, and for shapes it is enough — nobody types into the same word character by character, so there is nothing a sequence CRDT would add.",
            },
            {
                title: "Instant, but never flickering",
                body: "Each client keeps the server's board and its own view: the server's board plus its unacknowledged changes. A remote write to a property this client is still waiting to hear back about is not shown, because the server has already ordered it before ours — showing it in between would make the shape jump back and forth.",
            },
            {
                title: "Exactly once, even after a reconnect",
                body: "Every change carries its client's id and a counter. The room remembers the last counter it applied per client and says so when a client reconnects, so a change is never applied twice and never re-sent once applied. A client may only use the id it said hello with — otherwise one tab could advance another's counter and silently swallow its edits.",
            },
            {
                title: "Offline is the same code path",
                body: "While disconnected, changes queue exactly as they do online, are also written to local storage so a reload keeps them, and go out on reconnect; the server's ordering then does the merging. The Go offline switch exists because browsers' own offline emulation does not reliably cut an open WebSocket — and a visitor should be able to try it without unplugging anything.",
            },
            {
                title: "Layer order that never renumbers",
                body: "Stacking order is a fractional index: there is always a key between two keys, so bringing a shape to the front rewrites that one shape. The first version used fractions only, and a test that kept putting new shapes on top pushed keys past the 64-character limit within a few hundred inserts. Keys now carry an integer part; ten thousand such inserts stay at four characters.",
            },
            {
                title: "Measured the renderer before optimising it",
                body: "Ten thousand separate strokeRect calls took 1.8 ms of JavaScript and 34 ms of frame — every fill or stroke is its own operation for the GPU process. So above 800 visible shapes the renderer batches one path per style, a few dozen calls instead of ten thousand, and small or plentiful note text is drawn as grey bars, because fillText at a zoom that changes every frame rasterises every glyph again.",
            },
        ],
        measured: [
            {value: "120 × 500", label: "simulated sessions × steps", note: "2–4 clients, dropped connections, refused changes — every one converges"},
            {value: "54 + 7", label: "unit + end-to-end tests", note: "each end-to-end test drives two browsers against the real Worker"},
            {value: "5.6 ms", label: "render at 10,000 shapes", note: "JavaScript per frame, in batched mode"},
            {value: "0", label: "sync libraries", note: "ordering, merging, offline and exactly-once are all in the repo"},
        ],
        gallery: [
            {src: "/assets/work/tessera/together.png", alt: "Two people on one board: the other person's cursor and selection in their colour"},
            {src: "/assets/work/tessera/offline.png", alt: "Working offline with two changes queued"},
            {src: "/assets/work/tessera/bench.png", alt: "The renderer benchmark with 20,000 shapes"},
        ],
    },

    "accessible-combobox": {
        role: "Solo — implementation, testing, tooling",
        problem:
            "Nothing else here shows how I actually verify a claim like \"accessible\" instead of just asserting it. A combobox is a small enough surface to finish and a large enough one to get wrong in every classic way — focus management, virtualization fighting ARIA, a live region that goes silent exactly when it's needed most — so I built two, identical on the outside, and let real tests decide which one earns the label.",
        decisions: [
                {
                    title: "The naive version is not a straw man",
                    body: "Same input, same-looking dropdown, shown on focus — built with plain useState and <div onClick> rows, because that is a genuinely common way custom dropdowns get built, not an exaggerated worst case.",
                },
                {
                    title: "aria-activedescendant has to survive virtualization",
                    body: "With 8,000 options only a slice is ever rendered. The one rule that adds on top of the combobox pattern: the highlighted option's id must always exist in the DOM, so moving the highlight off-window has to scroll it back into view as part of handling the key, not after the fact.",
                },
                {
                    title: "\"No results\" stays inside the listbox, on purpose",
                    body: "The first version closed the popup on a zero-match query — and that silently broke the live region, because the announcement effect only fires while the list is open. Now a zero-match query keeps it open with a disabled placeholder option, so \"No results\" gets announced instead of nothing.",
                },
                {
                    title: "The virtualization wrapper needed role=\"presentation\"",
                    body: "The spacer element and its offset wrapper, needed to position a rendered slice within the full scroll height, sat between role=\"listbox\" and role=\"option\" — which axe correctly flagged as a broken required-parent relationship. Marking them presentational removes them from the accessibility tree without touching the layout.",
                },
                {
                    title: "An honest ceiling for automated scanning",
                    body: "I scanned both versions with axe-core rather than assume the outcome. Closed, both score zero violations — a plain labelled input is valid HTML either way. Opened, the naive one gets exactly one (a non-focusable scrollable region), not the dozen a reader might expect. That number is the point: automated tools catch a real slice of accessibility bugs, not most of them.",
                },
                {
                    title: "A build that hung forever, with no error",
                    body: "The 8,000-item dataset is generated by a seeded PRNG so tests stay deterministic. The first version multiplied plain floating-point numbers, which overflows safe-integer precision and can degenerate into a short cycle — for this seed it did, and the generation loop never reached its target. Nothing but the page itself imported that module, so it surfaced as next build hanging indefinitely rather than a failing test. Rewritten as a proper integer PRNG and pinned down with a regression test.",
                },
            ],
        measured: [
            {value: "0", label: "axe violations, accessible version", note: "open, with results, and in the No results state"},
            {value: "1", label: "axe violation, naive version", note: "the honest number — not a dozen"},
            {value: "49", label: "tests", note: "36 unit (pure functions), 13 end-to-end (keyboard flows, axe scans)"},
            {value: "100 / 98", label: "Lighthouse a11y / perf", note: "97 perf on mobile — a11y still just means axe-clean"},
        ],
        gallery: [
            {src: "/assets/work/accessible-combobox/comparison.jpg", alt: "Both comboboxes, closed, with their badges"},
            {src: "/assets/work/accessible-combobox/announcement.jpg", alt: "The live-region transcript: result counts, then a selection"},
            {src: "/assets/work/accessible-combobox/mobile.jpg", alt: "The accessible combobox open on a phone"},
        ],
    },

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

    "cook-galaxy-mobile": {
        role: "Solo — the app, and the backend it shares with the web",
        problem:
            "Cook Galaxy is used in a kitchen, and nobody carries a laptop to the stove. But shipping a mobile app usually means a second product: a second API, a second set of business rules, and two codebases that drift apart until a feature exists in one and not the other. I wanted the app to be a second client, not a second product.",
        decisions: [
            {
                title: "The backend did not get a mobile branch",
                body: "Every route accepts either the web session cookie or a mobile bearer token, resolved by the same helper. Nothing is implemented twice, and a feature shipped on the web is available in the app as soon as the screen exists — there is no 'mobile support' ticket per endpoint.",
            },
            {
                title: "The expensive work stays on the server",
                body: "Photo and link import send the image or URL to the API and get a parsed recipe back. The phone never talks to the AI provider, which keeps the key server-side, the cost gated by the same daily limits as the web, and the app small.",
            },
            {
                title: "Every screen has a state for when things go wrong",
                body: "All the list screens have a loading state, an empty state and an error state with a retry — plus pull-to-refresh. Half of them did not, and adding them was a deliberate pass rather than something bolted on after a bug report.",
            },
            {
                title: "The upload that broke on an SDK upgrade",
                body: "Expo SDK 57 routes global fetch through its own implementation, whose FormData converter rejects the classic React Native upload descriptor — the one every tutorial still shows. Photo upload broke silently on upgrade; the fix was to hand it a real file object from expo-file-system instead. The kind of failure you only find by running the thing on a device.",
            },
            {
                title: "Not every web interaction survives the port",
                body: "Reordering ingredients is drag-and-drop on the web. On a phone, inside a scrolling form, drag-and-drop fights the scroll and loses — so it became up and down buttons. The same feature, a different gesture, because the constraint is different.",
            },
        ],
        measured: [
            {value: "26", label: "screens", note: "every one with a test, including its error and retry states"},
            {value: "743", label: "tests", note: "across 78 suites"},
            {value: "1", label: "backend", note: "shared with the web app, route for route"},
            {value: "0", label: "duplicated business rules", note: "limits, trials and subscriptions resolve server-side"},
        ],
        gallery: [
            {src: "/assets/work/cook-galaxy-mobile/home.jpg", alt: "Home: recipe of the day and categories", portrait: true},
            {src: "/assets/work/cook-galaxy-mobile/import.jpg", alt: "Recipe import from a link or a photo", portrait: true},
            {src: "/assets/work/cook-galaxy-mobile/planner.jpg", alt: "Meal planner with a shopping list for the period", portrait: true},
            {src: "/assets/work/cook-galaxy-mobile/recipe.jpg", alt: "Recipe: AI nutrition estimate and a private note", portrait: true},
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

export const caseStudyFor = (slug: string): CaseStudy | null => caseStudies[slug] ?? null;
