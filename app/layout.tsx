import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luna's Lawn Care & Landscaping | Highlands County FL",
  description:
    "Professional lawn care, landscaping, and sod installation services in Highlands County, Florida. Family-owned, licensed, and insured. Same-week service available.",
  keywords: "lawn care, landscaping, sod installation, Highlands County FL, aeration, weed control",
  openGraph: {
    title: "Luna's Lawn Care & Landscaping | Highlands County FL",
    description: "Professional lawn care and landscaping services in Highlands County, FL",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/lunas-favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Luna's Lawn Care & Landscaping",
              description: "Professional lawn care and landscaping services",
              telephone: "8632730555",
              areaServed: "Highlands County, FL",
              foundingDate: "2024",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
