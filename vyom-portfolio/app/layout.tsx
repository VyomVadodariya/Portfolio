import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StatusBar } from "@/components/StatusBar";
import { PillNav } from "@/components/PillNav";
import { Cursor } from "@/components/Cursor";
import { CommandPalette } from "@/components/CommandPalette";
import { LenisProvider } from "@/components/LenisProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vyomvadodariya.github.io/Portfolio'),
  title: "VYOM VADODARIYA — AI/ML & Systems Engineering",
  description:
    "Portfolio of Vyom Vadodariya. Building intelligent systems, researching AI/ML, and exploring quantitative technology.",
  keywords: ["AI", "ML", "Systems Engineering", "Vyom Vadodariya", "Quantitative Technology", "Quantum Computing", "Hackathons"],
  authors: [{ name: "Vyom Vadodariya" }],
  openGraph: {
    title: "VYOM VADODARIYA — VYOM LAB",
    description: "Builder. Researcher. AI Systems Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased text-foreground bg-background selection:bg-accent/30 selection:text-white relative">
        <LenisProvider>
          <CommandPalette />
          <StatusBar />
          <Cursor />
          {children}
          <PillNav />
        </LenisProvider>
      </body>
    </html>
  );
}
