import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/LayoutClient";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mangrove Lawn Care | Jacksonville FL",
  description:
    "Jacksonville's detail-driven lawn care team. Professional lawn mowing, edging, trimming, mulching and more. Get a free estimate today.",
  openGraph: {
    title: "Mangrove Lawn Care | Jacksonville FL",
    description:
      "Jacksonville's detail-driven lawn care team. Professional lawn mowing, edging, trimming, mulching and more.",
    images: ["/photos/hero/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* TODO: Replace with client's GA4 Measurement ID */}
        {process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID &&
          process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}');
                  `,
                }}
              />
            </>
          )}
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <LayoutClient>{children}</LayoutClient>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
