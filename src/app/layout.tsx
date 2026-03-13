import type {Metadata} from "next";
import {DM_Sans, Fraunces} from "next/font/google";
import "./globals.scss";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matt Simpson | Frontend Developer",
  description:
    "Self-taught Frontend Developer crafting polished and responsive websites with Nextjs, TypeScript and SASS",
  openGraph: {
    title: "Matt Simpson | Frontend Developer",
    description:
      "Self-taught Frontend Developer crafting polished and responsive websites with Next.js, TypeScript and SASS.",
    url: "https://mattsimpsondev.netlify.app",
    siteName: "Matt Simpson",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matt Simpson - Frontend Developer",
      },
    ],
  },
  authors: [{name: "Matt Simpson"}],
  creator: "Matt Simpson",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "SASS",
    "React",
    "Web Developer",
    "UK",
  ],
  metadataBase: new URL("https://mattsimpsondev.netlify.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  );
}
