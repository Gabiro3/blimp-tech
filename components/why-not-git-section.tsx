"use client"

import { Button } from "@/components/ui/button"
import { Download, Zap, Code, Users, Sparkles } from "lucide-react"

interface WhyNotGitSectionProps {
  onOpenInstall?: () => void
}

export default function WhyNotGitSection({ onOpenInstall }: WhyNotGitSectionProps) {
  const features = [
    {
      icon: Zap,
      title: "n8n requires technical knowledge.",
      description: "Blimp uses AI — just chat like you would with ChatGPT.",
    },
    {
      icon: Code,
      title: "n8n needs manual node configuration.",
      description: "Blimp builds workflows automatically from your description.",
    },
    {
      icon: Users,
      title: "n8n is built for developers.",
      description: "Blimp works for everyone — no coding required.",
    },
    {
      icon: Sparkles,
      title: "n8n requires learning their system.",
      description: "Blimp understands natural language — start automating instantly.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="mb-6 font-semibold"
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
            Why Not Just n8n?
          </h2>
          <p
            className="max-w-2xl mx-auto text-white/90 mb-8"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "clamp(18px, 3vw, 24px)",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            n8n is powerful. Blimp is effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-orange-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-white font-semibold mb-3"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                      fontSize: "18px",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-white/80"
                    style={{
                      fontFamily: "GeistMono, monospace",
                      fontSize: "15px",
                      lineHeight: "1.5",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p
            className="text-white/80 mb-6 max-w-3xl mx-auto"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            Stop wrestling with complex tools. Start automating with conversation.
          </p>

          {onOpenInstall && (
            <Button
              onClick={onOpenInstall}
              className="bg-white hover:bg-gray-100 text-black font-mono text-sm font-semibold tracking-wider py-3 px-6 rounded-lg"
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
      </div>
    </section>
  )
}
