import type { Metadata } from "next";
import { Geist, Inter, Poppins } from "next/font/google";

import "./globals.css";
import "../styles/theme.css";

import { cn } from "@/lib/utils";

// import TopBar from "@/components/layout/top-bar";
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
  metadataBase: new URL("https://www.koryominsurance.com"),

  title: {
    default: "Koryom Insurance Company Limited",
    template: "%s | Koryom Insurance",
  },

  description:
    "Protecting individuals, families, businesses, NGOs, and institutions with trusted insurance solutions across South Sudan.",

  keywords: [
    "Insurance",
    "Koryom Insurance",
    "South Sudan Insurance",
    "Medical Insurance",
    "Motor Insurance",
    "Life Insurance",
    "Property Insurance",
    "Travel Insurance",
    "Business Insurance",
    "Marine Insurance",
    "Engineering Insurance",
    "Corporate Insurance",
  ],

  authors: [
    {
      name: "Koryom Insurance Company Limited",
    },
  ],

  creator: "Koryom Insurance Company Limited",

  publisher: "Koryom Insurance Company Limited",

  applicationName: "Koryom Insurance",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],

    apple: "/apple-touch-icon.png",

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.koryominsurance.com",
    siteName: "Koryom Insurance Company Limited",

    title: "Koryom Insurance Company Limited",

    description:
      "Protecting individuals, businesses and institutions with trusted insurance solutions across South Sudan.",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Koryom Insurance Company Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Koryom Insurance Company Limited",

    description:
      "Trusted insurance solutions for individuals, businesses and institutions.",

    images: ["/logo.png"],
  },

  category: "Insurance",

  themeColor: "#2f3e9e",
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
          {/* <TopBar /> */}

          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}