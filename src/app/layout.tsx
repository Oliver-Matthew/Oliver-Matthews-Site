import type { Metadata } from "next";
import "./globals.scss";
import AppProvider from "./provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Oliver's & Matthews",
    default: "Oliver's & Matthews",
  },
  description:
    " A solution-oriented firm that excels in understanding your unique challenges and providing resources to help you achieve your objectives and sustainable growth",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Data Analysis",
    "IT",
    "Cloud",
    "DevOps",
    "Business",
    "Business Analysis",
    "Data",
    "Software",
    "Software Engineering",
    "Cloud Engineering",
    "Data Science",
    "Machine Learning",
    "Career",
    "Talent",
    "Cybersecurity",
  ],
  // metadataBase: new URL("https://fractalvisions.io"),
  // openGraph: {
  //   url: "https://fractalvisions.io",
  //   title: "Fractal Visions NFT Marketplace",
  //   description:
  //     "A Community Public Goods and NFTs Marketplace for Creators and Artists",
  //   siteName: "Fractal Visions NFT Marketplace",
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Fractal Visions NFT Marketplace",
  //   description:
  //     "A Community Public Goods and NFT Marketplace for Creators and Artists",
  //   creator: "@Fractal_Visions",
  // },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <AppProvider> {children}</AppProvider>
      </body>
    </html>
  );
}
