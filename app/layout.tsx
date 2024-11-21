import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import NavBar from "@/components/NavBar";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import "@/styles/globals.css";
import { SP } from "next/dist/shared/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: "uchifinals",
  description: "access your uchicago finals in a less painful way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <head />
      <body
        className={cn(
          "overscroll-none bg-background font-sans antialiased bg-[#800000]",
          fontSans.variable
        )} 
      >
        <NavBar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
