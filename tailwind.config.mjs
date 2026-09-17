/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '15px',
        },
        extend: {
            fontFamily: {
                // Kept for anything still asking for it by name.
                primary: "var(--font-jetbrainsMono)",
                // Mono is the accent voice now — labels, numbers, nav — not body copy.
                mono: ["var(--font-jetbrainsMono)", "ui-monospace", "monospace"],
                sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
                display: ["var(--font-spaceGrotesk)", "var(--font-inter)", "ui-sans-serif", "sans-serif"],
            },
            screens: {
                // Lowered from the Tailwind default (1280px) so the desktop
                // layout survives common laptop widths under browser zoom
                // (e.g. a 1366px/1440px laptop at 110-125% zoom) instead of
                // prematurely collapsing into the mobile/tablet layout.
                xl: '1120px',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: '#1c1c22',
                accent: {
                    DEFAULT: '#00ff99',
                    soft: 'rgba(0, 255, 153, 0.12)',
                },
                surface: {
                    DEFAULT: '#202027',
                    raised: '#26262f',
                },
                line: 'rgba(255, 255, 255, 0.10)',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },

                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },

                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            transitionTimingFunction: {
                'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            keyframes: {
                marquee: { to: { transform: 'translateX(-50%)' } },
                rise: {
                    from: { opacity: '0', transform: 'translateY(1.25rem)' },
                    to: { opacity: '1', transform: 'none' },
                },
            },
            animation: {
                marquee: 'marquee var(--marquee-duration, 38s) linear infinite',
                rise: 'rise 0.45s cubic-bezier(0.16, 1, 0.3, 1) both',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
