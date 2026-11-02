import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Har Ghar Safai™ | Professional Home Deep Cleaning Services",
  description: "Experience clean, sparkling living with Har Ghar Safai. Per room ₹199, kitchen ₹199, bathroom ₹199, full house under ₹1,000. Zero advance required, pay after inspection.",
  keywords: ["har ghar safai", "cleaning services", "home deep cleaning", "room cleaning 199", "kitchen cleaning", "bathroom cleaning", "full house cleaning"],
  openGraph: {
    title: "Har Ghar Safai™ | Affordable & Spotless Home Cleaning",
    description: "Professional Home Cleaning That Brings Cleanliness & Fresh Glow. Per Room ₹199, Kitchen ₹199, Bathroom ₹199.",
    type: "website",
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
