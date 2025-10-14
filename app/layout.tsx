import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Giacomo Sepe | Operations Specialist for Capital Raising & Exits",
  description:
    "Giacomo Sepe is an operations specialist helping shareholders increase company value through software systems, positioning, and messaging for capital raising, acquisitions, and exits.",
  keywords: [
    "Giacomo Sepe",
    "Operations specialist",
    "Capital raising",
    "Business operations",
    "Company valuation",
    "M&A",
    "Investor readiness",
    "Exit strategy",
  ],
  authors: [{ name: "Giacomo Sepe" }],
  creator: "Giacomo Sepe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://giacomosepe.com",
    title: "Giacomo Sepe | Operations Specialist for Capital Raising & Exits",
    description:
      "Operations specialist helping shareholders increase company value through software systems, positioning, and messaging for capital raising and exits.",
    siteName: "Giacomo Sepe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giacomo Sepe | Operations Specialist for Capital Raising & Exits",
    description: "Operations specialist helping shareholders increase company value for capital raising and exits.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} antialiased`}>
      <head>
        <Script src="//cdn.cookie-script.com/s/274754e7ccf48301a6d89b1cbfbc08b5.js" strategy="beforeInteractive" />
      </head>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
