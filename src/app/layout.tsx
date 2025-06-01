import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Bong Diaspora Alliance",
    default: "Bong Diaspora Alliance",
  },
  description:
    "Bong Diaspora Alliance Rwanda Chapter. Join us to connect with Liberian students in Rwanda.",
  icons: {
    icon: "/logo.jpeg",
  },
  keywords: [
    "Bong Diaspora Alliance",
    "Liberian students in Rwanda",
    "Bong County students in Rwanda",
    "Bong Diaspora Alliance Rwanda Chapter",
    "Bong Diaspora Alliance Rwanda",
  ],
};

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
