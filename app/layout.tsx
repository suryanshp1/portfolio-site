import "./globals.css";
import type { Metadata } from "next";
import { Inter, Bangers } from "next/font/google"; // Import Bangers for comic headers
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export const metadata: Metadata = {
  title: "Suryansh Pandey | Senior Backend & AI Engineer",
  description:
    "Portfolio of Suryansh Pandey, a Senior Backend & AI Engineer specialized in Python, Cloud Native, and Agentic AI.",
  keywords: [
    "Suryansh Pandey",
    "Backend Engineer",
    "AI Engineer",
    "Python",
    "Django",
    "FastAPI",
    "LangChain",
    "Portfolio",
  ],
  authors: [{ name: "Suryansh Pandey", url: "https://suryanshp1.github.io/portfolio-site" }],
  creator: "Suryansh Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suryanshp1.github.io/portfolio-site",
    title: "Suryansh Pandey | Senior Backend & AI Engineer",
    description: "Building resilient, scalable systems that power the future of AI and Security.",
    siteName: "Suryansh Pandey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryansh Pandey | Senior Backend & AI Engineer",
    description: "Building resilient, scalable systems that power the future of AI and Security.",
    creator: "@suryanshp1",
  },
  icons: {
    icon: "/portfolio-site/icon",
    apple: "/portfolio-site/icon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          bangers.variable,
          "bg-light-bg dark:bg-dark-bg min-h-screen antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
