import { ImageResponse } from "next/og";
import { RESUME_DATA } from "@/data/resume";

export const dynamic = "force-static";

export const alt = "Suryansh Pandey Portfolio";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#1a1a2e", // Dark BG
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "sans-serif",
                    position: "relative",
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: "radial-gradient(#4B68F7 2px, transparent 2px)",
                        backgroundSize: "32px 32px",
                        opacity: 0.2,
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#4B68F7", // Hero Blue
                        padding: "20px 60px",
                        border: "4px solid black",
                        boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
                        transform: "rotate(-2deg)",
                        marginBottom: "40px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "64px",
                            fontWeight: 900,
                            color: "white",
                            margin: 0,
                            textTransform: "uppercase",
                        }}
                    >
                        {RESUME_DATA.name}
                    </h1>
                </div>

                <div
                    style={{
                        display: "flex",
                        background: "#F4D734", // Golden
                        padding: "10px 30px",
                        border: "3px solid black",
                        boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                        transform: "rotate(1deg)",
                    }}
                >
                    <p
                        style={{
                            fontSize: "32px",
                            fontWeight: "bold",
                            color: "black",
                            margin: 0,
                        }}
                    >
                        Senior Backend & AI Engineer
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
