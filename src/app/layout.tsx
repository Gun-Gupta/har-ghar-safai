import type { Metadata, Viewport } from "next";
import "./globals.css";
import SeoStructuredData from "@/components/SeoStructuredData";

export const viewport: Viewport = {
  themeColor: "#FAF6F0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hargharsafai.in"),
  title: {
    default: "Har Ghar Safai™ | Professional Home Deep Cleaning Services (₹199 / Room)",
    template: "%s | Har Ghar Safai™",
  },
  description:
    "Har Ghar Safai delivers honest, spotless deep cleaning services across gwalior. Per Room ₹199, Kitchen ₹199, Bathroom ₹199, and Full House under ₹1,000. Zero advance required — pay strictly after inspection.",
  keywords: [
    "har ghar safai",
    "home cleaning services",
    "deep cleaning gwalior",
    "room cleaning 199",
    "kitchen deep cleaning 199",
    "bathroom cleaning 199",
    "full house cleaning under 1000",
    "pay after cleaning",
    "home cleaning gwalior",
    "flat deep cleaning",
    "sofa cleaning",
    "balcony wash",
    "chimney cleaning service",
  ],
  authors: [{ name: "Har Ghar Safai", url: "https://hargharsafai.in" }],
  creator: "Har Ghar Safai",
  publisher: "Har Ghar Safai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Har Ghar Safai™ | Honest Flat Pricing Home Deep Cleaning",
    description:
      "Per Room ₹199 • Kitchen ₹199 • Bathroom ₹199 • Full House Under ₹1,000 (₹899). Pay only after inspecting clean results. Book instantly via WhatsApp or Call.",
    url: "https://hargharsafai.in",
    siteName: "Har Ghar Safai",
    images: [
      {
        url: "/images/hero-cleaner.jpg",
        width: 1200,
        height: 630,
        alt: "Har Ghar Safai Professional Home Deep Cleaning Staff",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Har Ghar Safai™ | Affordable & Spotless Home Cleaning Services",
    description:
      "Per Room ₹199, Kitchen ₹199, Bathroom ₹199, Full House ₹899. 0% Advance • 100% Pay After Service.",
    images: ["/images/hero-cleaner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>"
        />
        <SeoStructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
