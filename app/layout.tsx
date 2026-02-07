import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const siteUrl = "https://hedrize.com" // TODO: Replace with your actual domain
const siteName = "Hedrize"
const siteDescription = "Hedrize is your trusted head hunting partner, connecting top talent with innovative companies across industries."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hedrize - Premium Head Hunting Solutions",
    template: "%s | Hedrize", // For child pages
  },
  description: siteDescription,
  keywords: [
    "head hunting",
    "executive search",
    "recruitment services",
    "talent acquisition",
    "HR consulting",
    "premium recruitment",
    "top talent",
  ],
  authors: [{ name: "Hedrize" }],
  creator: "Hedrize",
  publisher: "Hedrize",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Hedrize - Premium Head Hunting Solutions",
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg", // TODO: Create a 1200x630px image
        width: 1200,
        height: 630,
        alt: "Hedrize - Premium Head Hunting Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hedrize - Premium Head Hunting Solutions",
    description: siteDescription,
    images: ["/og-image.jpg"],
    creator: "@hedrize", // TODO: Replace with your Twitter handle
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code", // TODO: Add Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hedrize",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`, // TODO: Ensure logo.png exists in /public
    description: siteDescription,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX", // TODO: Replace with actual phone
      contactType: "Customer Service",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    sameAs: [
      // TODO: Replace with actual social profiles
      "https://www.linkedin.com/company/hedrize",
      "https://twitter.com/hedrize",
      "https://www.facebook.com/hedrize",
    ],
  }

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
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
