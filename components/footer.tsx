import { Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 text-center">
      <div className="flex items-center justify-center gap-4 mb-4">
        <Link
          href="/privacy"
          className="text-white/50 hover:text-white/80 text-sm font-mono transition-colors"
          style={{
            fontFamily:
              'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
          }}
        >
          Privacy Policy
        </Link>
        <span className="text-white/30">•</span>
        <Link
          href="/terms"
          className="text-white/50 hover:text-white/80 text-sm font-mono transition-colors"
          style={{
            fontFamily:
              'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
          }}
        >
          Terms of Use
        </Link>
      </div>
      <p
        className="text-white/50 text-sm font-mono flex items-center justify-center gap-1.5"
        style={{
          fontFamily:
            'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
        }}
      >
        Made with <Heart className="h-3.5 w-3.5 text-red-500 inline-block" fill="currentColor" /> in Kigali
      </p>
    </footer>
  )
}
