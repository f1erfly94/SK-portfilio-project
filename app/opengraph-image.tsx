import {ImageResponse} from "next/og";
import {profile} from "@/lib/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

/**
 * Social preview card, generated at build time.
 *
 * Plain system type on purpose: fetching a webfont here would make every build
 * depend on Google Fonts being reachable, for a picture nobody zooms into.
 */
export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px",
                    // Satori has no `background` shorthand: colour and gradient are separate.
                    backgroundColor: "#1c1c22",
                    backgroundImage:
                        "radial-gradient(900px 500px at 85% 0%, rgba(0,255,153,0.22), transparent 60%)",
                    color: "#ffffff",
                    fontFamily: "monospace",
                }}
            >
                <div style={{display: "flex", fontSize: 26, letterSpacing: 6, color: "#00ff99"}}>
                    &lt;SK&gt;
                </div>

                <div style={{display: "flex", flexDirection: "column", gap: 20}}>
                    <div style={{display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05}}>
                        {profile.name}
                    </div>
                    <div style={{display: "flex", fontSize: 34, color: "rgba(255,255,255,0.65)"}}>
                        {profile.role} · Next.js · TypeScript
                    </div>
                </div>

                <div style={{display: "flex", fontSize: 24, color: "rgba(255,255,255,0.45)"}}>
                    {profile.location}
                </div>
            </div>
        ),
        size,
    );
}
