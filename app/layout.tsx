import type { Metadata } from "next";
import { Geist, Inter, Poppins } from "next/font/google";

import "./globals.css";
import "../styles/theme.css";

import { cn } from "@/lib/utils";

import TopBar from "@/components/layout/top-bar";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Koryom Insurance Company",
    template: "%s | Koryom Insurance Company",
  },
  description:
    "Your World, Protected. Comprehensive insurance solutions for individuals, families, businesses, and institutions across South Sudan.",
  keywords: [
    "Insurance",
    "Koryom Insurance",
    "South Sudan Insurance",
    "Medical Insurance",
    "Motor Insurance",
    "Life Insurance",
    "Property Insurance",
    "Business Insurance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth",
        geist.variable,
        inter.variable,
        poppins.variable
      )}
    >
      <body className="min-h-screen bg-background font-inter antialiased">
        <div className="relative flex min-h-screen flex-col">
          <TopBar />
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}