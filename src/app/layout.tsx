import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koydo XAT — Xavier Aptitude Test Prep",
  description:
    "Free XAT practice for Verbal, Decision Making, Quantitative, and GK with AI analytics.",
  metadataBase: new URL("https://xat.koydo.app"),
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#B45309" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
