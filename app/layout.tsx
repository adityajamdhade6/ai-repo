import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INHAUS — Coin Khakhra",
  description:
    "A new shape of crunch. Whole-grain, slow-roasted, never fried coin khakhra in five flavours. Roasted in-house.",
};

export const viewport: Viewport = {
  themeColor: "#F4F1E9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
