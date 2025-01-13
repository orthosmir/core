import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROOT LAYOUR TITLE",
  description: "ROOT LAYOUR DESCRIPTION",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
