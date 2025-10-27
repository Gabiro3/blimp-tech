"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Play } from "lucide-react"

interface SearchQuery {
  id: string
  question: string
  imageSrc: string
  category: string
}

const searchQueries: SearchQuery[] = [
  {
    id: "email",
    question: "Send me a Slack message when I get important emails",
    imageSrc: "/email-to-slack-automation-workflow.jpg",
    category: "Email",
  },
  {
    id: "crm",
    question: "Add new customers to my CRM automatically",
    imageSrc: "/crm-automation-workflow-dashboard.jpg",
    category: "CRM",
  },
  {
    id: "social",
    question: "Post to all my social media at once",
    imageSrc: "/social-media-automation-dashboard.png",
    category: "Social",
  },
  {
    id: "data",
    question: "Sync data between my apps every hour",
    imageSrc: "/data-sync-automation-workflow.jpg",
    category: "Data",
  },
]

interface AgenticAISearchSectionProps {
  onOpenInstall?: () => void
}

export default function AgenticAISearchSection({ onOpenInstall }: AgenticAISearchSectionProps) {
  const [activeQuery, setActiveQuery] = useState(searchQueries[0])
  const [hoveredQuery, setHoveredQuery] = useState<string | null>(null)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Email":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-400/30"
      case "CRM":
        return "bg-orange-500/20 text-orange-300 border-orange-400/30"
      case "Social":
        return "bg-pink-500/20 text-pink-300 border-pink-400/30"
      case "Data":
        return "bg-purple-500/20 text-purple-300 border-purple-400/30"
      default:
        return "bg-white/20 text-white border-white/30"
    }
  }

  return (
    <div className="my-24">
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
          AI-Powered Automation
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
          Just describe what you want — Blimp builds the workflow for you.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="gradient-container gradient-blue-red max-w-[1296px] w-full relative">
          <div className="absolute inset-0 bg-black/35 rounded-[16px]"></div>
          <div className="noise-texture"></div>

          <div className="relative z-10 pt-4 sm:pt-12 md:pt-16 pb-0 px-4 sm:px-6 md:px-12">
            <div className="rounded-t-lg overflow-hidden shadow-2xl max-w-4xl mx-auto border border-white/10 border-b-0 relative">
              <img
                src={activeQuery.imageSrc || "/placeholder.svg"}
                alt={`AI Automation: ${activeQuery.question}`}
                className="w-full h-auto object-cover"
              />

              {/* Mobile Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden z-20">
                <div className="flex gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2">
                  {searchQueries.map((query) => (
                    <button
                      key={query.id}
                      onClick={() => setActiveQuery(query)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        activeQuery.id === query.id ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Switch to query: ${query.question}`}
                    />
                  ))}
                </div>
              </div>

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 hidden lg:block pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 40%, transparent 70%)",
                }}
              ></div>

              {/* Overlay Content */}
              <div className="absolute inset-0 hidden lg:flex flex-col justify-end p-6 lg:p-8">
                <div className="flex gap-4 lg:gap-8 items-end justify-between">
                  <div className="flex-1 max-w-xs lg:max-w-md">
                    <h3
                      className="text-white text-xl lg:text-2xl font-semibold mb-3"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                        letterSpacing: "-0.02em",
                        textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      AI Automation
                    </h3>
                    <p
                      className="text-white/95 mb-6 text-base lg:text-lg"
                      style={{
                        fontFamily: "GeistMono, monospace",
                        lineHeight: "1.4",
                        textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      "{activeQuery.question}"
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

                  {/* Query Buttons */}
                  <div className="flex flex-col gap-2 w-[280px]">
                    {searchQueries.map((query) => (
                      <button
                        key={query.id}
                        onClick={() => setActiveQuery(query)}
                        onMouseEnter={() => setHoveredQuery(query.id)}
                        onMouseLeave={() => setHoveredQuery(null)}
                        className={`group relative text-left p-3 rounded-xl border-2 transition-colors duration-200 ${
                          activeQuery.id === query.id
                            ? "bg-white/15 border-white/60 text-white shadow-lg"
                            : "bg-black/30 border-white/20 text-white/90 hover:bg-white/10 hover:border-white/40"
                        }`}
                        style={{
                          backdropFilter: "blur(8px)",
                          minHeight: "64px",
                        }}
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${getCategoryColor(
                                  query.category,
                                )}`}
                                style={{
                                  fontFamily: "GeistMono, monospace",
                                }}
                              >
                                {query.category}
                              </span>
                              {activeQuery.id === query.id && (
                                <Play className="w-3 h-3 text-white/80" fill="currentColor" />
                              )}
                            </div>
                            <p
                              className="text-xs leading-relaxed"
                              style={{
                                fontFamily: "GeistMono, monospace",
                                textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                              }}
                            >
                              "{query.question}"
                            </p>
                          </div>
                        </div>
                      </button>
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
