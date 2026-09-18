/** Canonical URL, used by metadata, the sitemap and the OG image. */
const fromEnv = (value: string | undefined) => (value ? value : undefined);

export const siteUrl =
    fromEnv(process.env.NEXT_PUBLIC_SITE_URL) ??
    (fromEnv(process.env.VERCEL_PROJECT_PRODUCTION_URL)
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000");

export const profile = {
    name: "Serhii Kuznetsov",
    role: "Frontend Developer",
    location: "Cherkasy, Ukraine",
    /** Shown as the availability pill in the header and hero. */
    available: true,
    email: "serhii.kuznetsov05@gmail.com",
    phone: "+38 (067) 715 75 91",
    github: "https://github.com/f1erfly94",
    telegram: "https://t.me/Serhii_Kuznetsov05",
    linkedin: "https://www.linkedin.com/in/serhii-kusnetsov-032823343/",
};
