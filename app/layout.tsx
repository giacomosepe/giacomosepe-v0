import type React from "react";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import GtmPageView from "./gtmPageView";
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";
import { PersonSchema } from "@/components/seo/PersonSchema";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Giacomo Sepe | Institutional Capital Raising & Corporate Development",
  description:
    "Partnering with private equity fund managers on institutional capital raising and portfolio companies on value generation through corporate development, partnerships, and technology investments.",
  keywords: [
    "Giacomo Sepe",
    "Private Equity",
    "Institutional Capital Raising",
    "Corporate Development",
    "Portfolio Management",
    "Technology Investments",
    "Partnership Strategy",
    "Fund Management",
    "Business Development",
    "LP Relations",
    "GP Investment",
    "Family Office",
  ],
  authors: [{ name: "Giacomo Sepe" }],
  creator: "Giacomo Sepe",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://giacomosepe.com",
    title:
      "Giacomo Sepe | Institutional Capital Raising & Corporate Development",
    description:
      "Partnering with private equity fund managers on institutional capital raising and portfolio companies on value generation. 15 years across PE firms, family offices, and operating roles.",
    siteName: "Giacomo Sepe",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Giacomo Sepe | Institutional Capital Raising & Corporate Development",
    description:
      "Partnering with PE fund managers on capital raising and portfolio companies on value generation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.VERCEL_ENV === "production";
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  const DF_ID = process.env.NEXT_PUBLIC_DATAFAST_WEBSITE_ID!;
  const DF_DOMAIN = process.env.NEXT_PUBLIC_DATAFAST_DOMAIN!;

  return (
    <html lang="en" className={`${geistMono.variable} antialiased`}>
      <head>
        <PersonSchema />
        {/* Google Tag Manager */}
        {isProd && GTM_ID && (
          <Script
            id="gtm-base"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}

        {/* DataFast Analytics */}
        {isProd && DF_ID && DF_DOMAIN && (
          <Script
            data-website-id={DF_ID}
            data-domain={DF_DOMAIN}
            src="https://datafa.st/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </head>

      <body className="font-sans">
        {/* GTM Page View Tracker */}
        {isProd && GTM_ID && (
          <Suspense fallback={null}>
            <GtmPageView />
          </Suspense>
        )}

        {/* GTM noscript fallback */}
        {isProd && GTM_ID && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}

        <LanguageProvider>
          <div className="container mx-auto px-6">
            <Nav />
            <main className="flex-1 py-16">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </main>
            <Foot />
          </div>
        </LanguageProvider>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
