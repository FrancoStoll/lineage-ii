import type { Metadata, Viewport } from "next";
import { Roboto, Cinzel } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { Embers } from "@/components/Embers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
});

const siteUrl = "https://lineage-ii.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lineage II — Shield of the Kingdom",
    template: "%s · Lineage II",
  },
  description:
    "Experience the epic of Lineage II: castle sieges, legendary raid bosses, massive PvP and a community that never sleeps. Create your hero and enter the battle.",
  keywords: [
    "Lineage II",
    "Lineage 2",
    "MMORPG",
    "L2 server",
    "PvP",
    "epic bosses",
    "castle siege",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Lineage II",
    title: "Lineage II — Shield of the Kingdom",
    description:
      "Castle sieges, legendary raid bosses and massive PvP. Create your hero and enter the battle.",
    images: [
      {
        url: "/Lineage-2-Essence-W-Arata.jpg",
        width: 1200,
        height: 630,
        alt: "Lineage II",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lineage II — Shield of the Kingdom",
    description: "Castle sieges, legendary raid bosses and massive PvP.",
    images: ["/Lineage-2-Essence-W-Arata.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#121119",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${cinzel.variable} font-sans bg-background text-white`}
      >
        <Embers />
        <Navbar />
        <main className="relative z-10 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
