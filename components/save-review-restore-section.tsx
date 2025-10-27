"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface FeatureData {
  id: string
  title: string
  description: string
  imageSrc: string
}

const features: FeatureData[] = [
  {
    id: "design",
    title: "Design",
    description: "Describe your workflow in plain English — AI builds it for you.",
    imageSrc: "/workflow-design-interface-with-ai-chat.jpg",
  },
  {
    id: "test",
    title: "Test",
    description: "Run your automation instantly and see results in real-time.",
    imageSrc: "/automation-testing-dashboard-with-live-results.jpg",
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Activate your workflow with one click — it runs automatically.",
    imageSrc: "/deployment-dashboard-showing-active-workflows.jpg",
  },
]

interface SaveReviewRestoreSectionProps {
  onOpenInstall?: () => void
}

export default function SaveReviewRestoreSection({ onOpenInstall }: SaveReviewRestoreSectionProps) {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <div className="my-24">
      {/* Title and Description outside the gradient section */}
      <div className="text-center mb-6 md:mb-12 px-4">
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
          Design, Test, Deploy
        </h2>
        <p
          className="max-w-2xl mx-auto"
          style={{
            color: "#f5f5f5",
            fontFamily: "GeistMono, monospace",
            fontSize: "clamp(16px, 3vw, 22px)",
            lineHeight: "1.3",
            textAlign: "center",
          }}
        >
          Build powerful automations in minutes — no coding required, just conversation.
        </p>
      </div>

      {/* Gradient Section with Image */}
      <div className="flex justify-center">
        <div className="gradient-container gradient-yellow-red max-w-[1296px] w-full relative">
          <div className="absolute inset-0 bg-black/35 rounded-[16px]"></div>
          <div className="noise-texture"></div>

          <div className="relative z-10 pt-4 sm:pt-12 md:pt-16 pb-0 px-4 sm:px-6 md:px-12">
            <div className="rounded-t-lg overflow-hidden shadow-2xl max-w-4xl mx-auto border border-white/10 border-b-0 relative">
              <img
                src={activeFeature.imageSrc || "/placeholder.svg"}
                alt={activeFeature.title}
                className="w-full h-auto object-cover"
              />

              {/* Mobile Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden z-20">
                <div className="flex gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        activeFeature.id === feature.id ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Switch to ${feature.title}`}
                    />
                  ))}
                </div>
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div
                className="absolute inset-0 hidden lg:block pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 70%)",
                }}
              ></div>

              {/* Overlay Content */}
              <div className="absolute inset-0 hidden lg:flex flex-col justify-end p-6 lg:p-8">
                <div className="flex gap-4 lg:gap-8 items-end">
                  <div className="flex-1 max-w-xs lg:max-w-md">
                    <h3
                      className="text-white text-2xl lg:text-3xl font-semibold mb-3"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                        letterSpacing: "-0.02em",
                        textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {activeFeature.title}
                    </h3>
                    <p
                      className="text-white/95 mb-6 text-base lg:text-lg"
                      style={{
                        fontFamily: "GeistMono, monospace",
                        lineHeight: "1.4",
                        textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      {activeFeature.description}
                    </p>
                    {onOpenInstall && (
                      <Button
                        onClick={onOpenInstall}
                        className="bg-white hover:bg-gray-100 text-black font-mono text-sm font-semibold tracking-wider py-3 px-6 rounded-lg shadow-lg"
                        style={{
                          fontFamily: "GeistMono, monospace",
                          letterSpacing: "0.56px",
                          height: "48px",
                        }}
                      >
                        <Download className="mr-2 h-4 w-4 stroke-[2.5px]" />
                        GET STARTED
                      </Button>
                    )}
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-3">
                    {features.map((feature) => (
                      <div
                        key={feature.id}
                        className="relative group cursor-pointer"
                        onClick={() => setActiveFeature(feature)}
                      >
                        <div
                          className={`w-24 h-15 lg:w-32 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 shadow-lg ${
                            activeFeature.id === feature.id
                              ? "border-white shadow-xl scale-105"
                              : "border-white/40 hover:border-white/70 hover:scale-102"
                          }`}
                        >
                          <img
                            src={feature.imageSrc || "/placeholder.svg"}
                            alt={`${feature.title} feature`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          <span
                            className={`text-sm font-mono transition-colors duration-200 ${
                              activeFeature.id === feature.id ? "text-white" : "text-white/80"
                            }`}
                            style={{
                              fontFamily: "GeistMono, monospace",
                              textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                            }}
                          >
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
