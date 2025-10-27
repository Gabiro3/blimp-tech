"use client"

import { useEffect, useRef } from "react"
import { X, ExternalLink } from "lucide-react"

interface BlimpModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BlimpModal({ isOpen, onClose }: BlimpModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal with Escape or outside click
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose()
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl bg-black border border-white/10 rounded-[16px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-black sticky top-0">
          <h2
            className="text-xl md:text-2xl font-semibold text-white"
            style={{
              fontFamily: 'var(--font-geist-sans, "GeistSans", sans-serif)',
              letterSpacing: "-0.04em",
              lineHeight: "1.1",
            }}
          >
            Welcome to Blimp 🚀
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <p className="text-white/80 text-sm leading-relaxed">
            <strong>Blimp</strong> is an AI automation platform built for technical users.
            Think of it as <em>n8n + AI</em> — design and run automated workflows powered by large language models.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
            <h3 className="text-white font-semibold text-lg">What You Can Do with Blimp</h3>
            <ul className="list-disc pl-5 text-white/70 text-sm space-y-1">
              <li>Automate repetitive tasks using AI agents and tools</li>
              <li>Connect APIs, databases, and custom actions visually</li>
              <li>Build intelligent pipelines without writing boilerplate code</li>
              <li>Integrate with OpenAI, Anthropic, and other LLM providers</li>
              <li>Deploy automations to production in a single click</li>
            </ul>
          </div>

          <div className="text-white/70 text-sm leading-relaxed">
            Blimp gives you the power of AI orchestration and workflow automation in one intuitive platform —
            no need to glue together scripts and APIs manually.
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
            <h4 className="text-white font-semibold">Getting Started</h4>
            <ol className="list-decimal pl-5 text-white/70 text-sm space-y-1">
              <li>Sign in to your Blimp Dashboard</li>
              <li>Create your first automation workflow</li>
              <li>Add AI actions, triggers, and conditions</li>
              <li>Run and monitor your flow live</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 p-4 md:p-6 bg-black sticky bottom-0 flex flex-col md:flex-row items-center justify-between gap-3">
          <a
            href="https://blimp-dashoard-production.up.railway.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-5 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            Go to Blimp Dashboard
            <ExternalLink size={16} />
          </a>

          <button
            onClick={onClose}
            className="w-full md:w-auto py-3 px-5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-mono text-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
