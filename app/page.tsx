"use client"

import { Download, GitBranch, GitCompare } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroImage from "@/components/hero-image"
import Navbar from "@/components/navbar"
import InstallModal from "@/components/install-modal"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"
import SaveReviewRestoreSection from "@/components/save-review-restore-section"
import AgenticAISearchSection from "@/components/agentic-ai-search-section"
import WhyNotGitSection from "@/components/why-not-git-section"
import TestimonialsSection from "@/components/testimonials-section"
import VibeCodingTweetsSection from "@/components/vibe-coding-tweets-section"
import { useState } from "react"
import AnnouncementBanner from "@/components/announcement-banner"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isBannerVisible, setIsBannerVisible] = useState(true)

  const openInstallModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div
      className={`min-h-screen bg-black text-white font-geist transition-all duration-300 ${isBannerVisible ? "pt-[108px] sm:pt-28" : "pt-20"}`}
    >
      {/* Announcement Banner */}
      <AnnouncementBanner onVisibilityChange={setIsBannerVisible} />

      {/* Navigation */}
      <Navbar isBannerVisible={isBannerVisible} />

      {/* Rest of the content remains the same... */}
      <div className="max-w-[1920px] mx-auto relative px-6 md:px-8">
        {/* Hero Section */}
        <section className="relative rounded-[16px] rounded-all-devices mt-2 mb-6 md:h-[calc(100vh-144px)] font-geist text-white flex flex-col">
          {/* Gradient Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[16px]">
            <div
              className="absolute inset-0 w-full h-full rounded-[16px]"
              style={{
                background: "linear-gradient(135deg, #22D3EE 0%, #FF5C28 50%, #FF5C9D 100%)",
              }}
            />
            <div
              className="absolute inset-0 w-full h-full rounded-[16px]"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.35)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center pt-[38px] sm:pt-[50px] pb-8 md:pt-[70px] md:pb-12 z-10 flex flex-col h-full">
            {/* Mobile Layout (Stack: Text -> Image -> Buttons) */}
            <div className="flex flex-col md:hidden">
              <div className="mb-4">
                <h1
                  className="font-semibold mb-2 overflow-visible select-text heading-with-selection"
                  style={{
                    fontSize: "clamp(36px, 8vw, 154px)",
                    lineHeight: "1.1",
                    letterSpacing: "clamp(-2px, -0.04em, -5.18998px)",
                    fontFamily: 'var(--font-geist-sans), "GeistSans Fallback", sans-serif',
                    height: "auto",
                    maxWidth: "100%",
                    paddingBottom: "0",
                    marginBottom: "0.2em",
                    color: "#FFFFFF",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                  aria-label="Automate Anything"
                >
                  Automate
                  <br />
                  Anything
                </h1>
                <p
                  className="mx-auto h-auto select-text mb-3"
                  style={{
                    fontFamily:
                      'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                    fontSize: "clamp(14px, 4vw, 22px)",
                    lineHeight: "1.3",
                    fontWeight: "400",
                    letterSpacing: "normal",
                    maxWidth: "2xl",
                    color: "#FFFFFF",
                    backgroundColor: "transparent",
                  }}
                >
                  Build powerful workflows with AI. No code required. Just chat.
                </p>
              </div>

              {/* Image in the middle for mobile */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-full">
                  <HeroImage />
                </div>
              </div>

              {/* Buttons at the bottom for mobile */}
              <div>
                <div className="flex flex-col gap-3 sm:gap-4 mb-4">
                  <Button
                    className="bg-white hover:bg-gray-100 flex items-center justify-center px-4 sm:px-6 w-full rounded-lg shadow-lg font-mono text-xs sm:text-sm md:text-base font-semibold tracking-wider text-black h-[50px] sm:h-[60px]"
                    onClick={openInstallModal}
                  >
                    <Download className="mr-2 h-4 w-4" /> CREATE A WORKFLOW
                  </Button>
                  <a
                    href="https://www.linkedin.com/in/gabiro-arnaud/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-black/80 flex items-center justify-center px-4 sm:px-6 w-full rounded-lg shadow-lg font-mono text-xs sm:text-sm md:text-base font-semibold tracking-wider text-white h-[50px] sm:h-[60px] border border-white/10"
                  >
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    DM FOUNDER
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Layout (Original) */}
            <div className="hidden md:flex md:flex-col md:flex-grow">
              <h1
                className="font-semibold mb-2 whitespace-nowrap overflow-visible select-text heading-with-selection"
                style={{
                  fontSize: "clamp(36px, 8vw, 154px)",
                  lineHeight: "1.1",
                  letterSpacing: "clamp(-2px, -0.04em, -5.18998px)",
                  fontFamily: 'var(--font-geist-sans), "GeistSans Fallback", sans-serif',
                  height: "auto",
                  maxWidth: "100%",
                  paddingBottom: "0",
                  marginBottom: "0.2em",
                  color: "#FFFFFF",
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
                aria-label="Automate Anything"
              >
                Automate Anything
              </h1>
              <p
                className="mb-6 sm:mb-8 mx-auto h-auto select-text"
                style={{
                  fontFamily:
                    'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                  fontSize: "clamp(16px, 4vw, 24px)",
                  lineHeight: "1.3",
                  fontWeight: "400",
                  letterSpacing: "normal",
                  maxWidth: "2xl",
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                }}
              >
                Build powerful workflows with AI — no code, just chat like ChatGPT.
              </p>
              <div className="flex flex-row justify-center gap-2 sm:gap-4 mb-4">
                <Button
                  className="bg-white hover:bg-gray-100 flex items-center justify-center px-4 sm:px-6 w-full sm:w-auto rounded-lg shadow-lg font-mono text-xs sm:text-sm md:text-base font-semibold tracking-wider text-black h-[50px] sm:h-[60px]"
                  onClick={openInstallModal}
                >
                  <GitCompare className="mr-2 h-4 w-4" /> CREATE A WORKFLOW
                </Button>

                <a
                  href="https://www.linkedin.com/in/gabiro-arnaud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-black/80 flex items-center justify-center px-4 sm:px-6 w-full sm:w-auto rounded-lg shadow-lg font-mono text-xs sm:text-sm md:text-base font-semibold tracking-wider text-white h-[50px] sm:h-[60px] border border-white/10"
                >
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  DM FOUNDER
                </a>
              </div>


              <div className="relative w-full flex-grow flex items-center justify-center rounded-md overflow-hidden">
                <div className="w-full sm:w-[85%] md:max-w-[1200px] mx-auto">
                  <HeroImage />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-16 bg-black mt-[60px] md:mt-[112px]">
          <div className="container mx-auto px-4 text-center">
            <p
              className="uppercase mb-6 md:mb-8"
              style={{
                fontFamily:
                  'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: "400",
                letterSpacing: "0.5px",
                color: "#999999",
              }}
            >
              Connects with your favorite apps
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-y-8 sm:gap-y-12 gap-x-6 md:gap-x-8 mb-8 md:mb-12 max-w-6xl mx-auto">
              <CompanyName name="Slack" />
              <CompanyName name="Gmail" />
              <CompanyName name="Notion" />
              <CompanyName name="Airtable" />
              <CompanyName name="Stripe" />
              <CompanyName name="Shopify" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-12 gap-x-6 md:gap-x-8 max-w-4xl mx-auto">
              <CompanyName name="Google Sheets" noWrapDesktop={true} />
              <CompanyName name="HubSpot" />
              <CompanyName name="Salesforce" />
              <CompanyName name="Zapier" />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12">
            <h2
              className="mb-4 font-semibold"
              style={{
                backgroundImage: "linear-gradient(rgb(245, 245, 245), rgb(245, 245, 245) 29%, rgb(153, 153, 153))",
                color: "transparent",
                fontFamily: "GeistSans, sans-serif",
                fontSize: "clamp(32px, 6vw, 52px)",
                fontWeight: 600,
                letterSpacing: "clamp(-1.5px, -0.04em, -2.08px)",
                lineHeight: "1.15",
                textAlign: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Trusted by Teams Worldwide
            </h2>
            <p
              className="max-w-3xl mx-auto text-white/80"
              style={{
                fontFamily: "GeistMono, monospace",
                fontSize: "clamp(16px, 3vw, 22px)",
                lineHeight: "1.4",
                textAlign: "center",
              }}
            >
              From startups to enterprises — automating workflows without code.
            </p>
          </div>

          <div className="space-y-8 overflow-hidden">
            <div className="relative">
              <div className="flex animate-scroll-left whitespace-nowrap">
                <div className="flex">
                  {[
                    "San Francisco",
                    "New York",
                    "London",
                    "Berlin",
                    "Tokyo",
                    "Sydney",
                    "Toronto",
                    "Amsterdam",
                    "Barcelona",
                    "Singapore",
                    "Mumbai",
                    "São Paulo",
                    "Stockholm",
                    "Tel Aviv",
                    "Austin",
                    "Seattle",
                    "Dublin",
                    "Copenhagen",
                    "Zurich",
                    "Melbourne",
                  ]
                    .concat([
                      "San Francisco",
                      "New York",
                      "London",
                      "Berlin",
                      "Tokyo",
                      "Sydney",
                      "Toronto",
                      "Amsterdam",
                      "Barcelona",
                      "Singapore",
                      "Mumbai",
                      "São Paulo",
                      "Stockholm",
                      "Tel Aviv",
                      "Austin",
                      "Seattle",
                      "Dublin",
                      "Copenhagen",
                      "Zurich",
                      "Melbourne",
                    ])
                    .map((city, index) => (
                      <span
                        key={index}
                        style={{
                          fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          letterSpacing: "normal",
                          color: "#999999",
                          whiteSpace: "nowrap",
                          padding: "0 1rem",
                        }}
                      >
                        {city}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex animate-scroll-right whitespace-nowrap">
                <div className="flex">
                  {[
                    "Vancouver",
                    "Paris",
                    "Los Angeles",
                    "Boston",
                    "Chicago",
                    "Miami",
                    "Denver",
                    "Portland",
                    "Montreal",
                    "Edinburgh",
                    "Prague",
                    "Vienna",
                    "Helsinki",
                    "Oslo",
                    "Lisbon",
                    "Madrid",
                    "Rome",
                    "Brussels",
                    "Warsaw",
                    "Budapest",
                  ]
                    .concat([
                      "Vancouver",
                      "Paris",
                      "Los Angeles",
                      "Boston",
                      "Chicago",
                      "Miami",
                      "Denver",
                      "Portland",
                      "Montreal",
                      "Edinburgh",
                      "Prague",
                      "Vienna",
                      "Helsinki",
                      "Oslo",
                      "Lisbon",
                      "Madrid",
                      "Rome",
                      "Brussels",
                      "Warsaw",
                      "Budapest",
                    ])
                    .map((city, index) => (
                      <span
                        key={index}
                        style={{
                          fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          letterSpacing: "normal",
                          color: "#999999",
                          whiteSpace: "nowrap",
                          padding: "0 1rem",
                        }}
                      >
                        {city}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SaveReviewRestoreSection onOpenInstall={openInstallModal} />
        <AgenticAISearchSection onOpenInstall={openInstallModal} />
        <WhyNotGitSection onOpenInstall={openInstallModal} />
        <VibeCodingTweetsSection onOpenInstall={openInstallModal} />
        <TestimonialsSection />
        <FAQSection onOpenInstall={openInstallModal} />
        <Footer />
      </div>

      <InstallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

function CompanyName({
  name,
  noWrapDesktop = false,
  className = "",
}: { name: string; noWrapDesktop?: boolean; className?: string }) {
  return (
    <div className={`flex justify-center items-center h-10 px-2 ${className}`}>
      <span
        className={`text-[#999999] text-center ${noWrapDesktop ? "md:whitespace-nowrap" : ""}`}
        style={{
          fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: "700",
          letterSpacing: "normal",
        }}
      >
        {name}
      </span>
    </div>
  )
}
