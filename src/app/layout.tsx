import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fetchSiteSettings } from "@/sanity/lib/fetchSiteSettings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchSiteSettings()

  return {
    title: settings?.metaTitle || 'Yo Bae',
    description: settings?.metaDescription || 'Yo Bae serves up delicious froyo with no fuss. We invite everyone to join the Yo Club, where we celebrate good vibes and great times.',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
