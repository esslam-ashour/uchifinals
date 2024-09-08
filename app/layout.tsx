import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import NavBar from "@/components/NavBar";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
      </body>
    </html>
  );
}
