import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/public/layout/navbar";
import Footer from "@/components/public/layout/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Bong Diaspora Alliance",
    default: "Bong Diaspora Alliance",
  },
  icons: {
    icon: "/logo.jpeg",
  },
  description:
    "Bong Diaspora Alliance Rwanda Chapter. Join us to connect with Liberian students in Rwanda.",
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
