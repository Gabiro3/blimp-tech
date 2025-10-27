import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
  title: "Blimp | AI Workflow Automation for Everyone",
  description:
    "Blimp is the easiest way to automate your workflows — no code required. Connect apps, build powerful AI automations, and let Blimp handle the busywork. An n8n alternative built for non-technical users.",
  keywords:
    "workflow automation, no-code automation, n8n alternative, AI workflows, connect apps, Zapier alternative, automation builder, Blimp automation, AI task runner, AI bots",
  authors: [{ name: "Blimp Team" }],
  creator: "Blimp",
  publisher: "Blimp",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blimp.so",
    siteName: "Blimp - AI Workflow Automation",
    title: "Blimp – Automate Anything Without Code",
    description:
      "Blimp lets anyone automate workflows using AI. Connect apps, trigger actions, and build smart automations with natural language — no coding required.",
    images: [
      {
        url: "https://blimp.so/images/og-blimp.jpeg",
        width: 1200,
        height: 630,
        alt: "Blimp AI automation dashboard connecting multiple apps",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blimp – AI Workflow Automation for Non-Technical Users",
    description:
      "Blimp is a no-code automation tool that lets anyone connect apps and create AI-powered workflows — an easier, smarter alternative to n8n.",
    images: ["https://blimp.so/images/og-blimp.jpeg"],
    creator: "@jackjack_eth",
    site: "@blimp_ai",
  },
  alternates: {
    canonical: "https://blimp.so",
  },
  category: "Automation",
  classification: "AI Workflow Builder",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  generator: "Next.js",
  applicationName: "Blimp - AI Workflow Automation",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@geist-ui/core@latest/dist/geist-ui.css"
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://blimp.so" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Software Application JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Blimp - AI Workflow Automation",
              description:
                "Blimp helps anyone automate their workflows using AI — no code required. Connect your favorite apps, trigger automations, and build smart workflows in minutes.",
              url: "https://blimp.so",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web-based, Windows, macOS, Linux",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Blimp",
                url: "https://blimp.so",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1500",
              },
              featureList: [
                "No-code workflow builder",
                "AI-powered task automation",
                "App and API integrations",
                "Drag-and-drop editor",
                "Conditional logic and triggers",
                "Collaboration for teams",
              ],
              audience: {
                "@type": "Audience",
                audienceType: "non-technical professionals, small business owners, creators, teams",
              },
            }),
          }}
        />

        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Blimp?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Blimp is an AI-powered workflow automation tool that lets anyone connect apps and automate repetitive tasks — no coding required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Blimp free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Blimp offers a generous free tier with paid plans for teams and power users.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How is Blimp different from n8n or Zapier?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Unlike n8n or Zapier, Blimp is designed for non-technical users. It uses AI to help you build workflows in plain English, with a simpler and more visual interface.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I connect APIs or webhooks?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Blimp lets you connect any app via APIs, webhooks, or built-in integrations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to host anything?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Blimp is fully cloud-based and requires no installation or server setup.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Product Demo Video Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Blimp Automation Demo - Build Workflows in Minutes",
              description:
                "Watch how Blimp lets you build automations visually with AI — connect apps, add triggers, and automate tasks without writing a line of code.",
              thumbnailUrl: "https://blimp.so/images/blimp-demo-thumbnail.jpeg",
              uploadDate: "2025-03-01",
              duration: "PT60S",
              contentUrl: "https://blimp.so/videos/blimp-demo.mp4",
              embedUrl: "https://blimp.so",
              publisher: {
                "@type": "Organization",
                name: "Blimp",
                logo: {
                  "@type": "ImageObject",
                  url: "https://blimp.so/android-chrome-512x512.png",
                },
              },
              keywords:
                "no-code automation, AI workflows, n8n alternative, workflow builder, automation for non-technical users",
              category: "Automation",
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
