import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 20,
                    background: "#F4D734", // Golden
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                    border: "2px solid black",
                    borderRadius: "4px", // Slight rounded corners
                    fontFamily: "sans-serif",
                    fontWeight: 900,
                }}
            >
                SP
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
