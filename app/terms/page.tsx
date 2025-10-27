import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-white/70 hover:text-white hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="mb-4 font-semibold"
            style={{
              fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
              fontSize: "clamp(36px, 6vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: "1.15",
              color: "#FFFFFF",
            }}
          >
            Terms of Use
          </h1>
          <p
            className="text-white/60"
            style={{
              fontFamily: "GeistMono, monospace",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            Effective Date: 23/10/2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Section title="1. Agreement to Terms">
            <p>
              By accessing or using Blimp ("Service"), you agree to be bound by these Terms of Use and our Privacy
              Policy. If you do not agree, please discontinue using the Service.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              Blimp is an AI-powered automation platform that allows users to connect and automate tasks between
              supported third-party apps (e.g., Gmail, Google Drive, Notion, Slack, etc.). You are responsible for
              defining and controlling the automations (workflows) you create.
            </p>
          </Section>

          <Section title="3. User Responsibilities">
            <p>By using Blimp, you agree that:</p>
            <ul>
              <li>You will only connect accounts that you own or have permission to use.</li>
              <li>You will review and approve every requested permission (scope) before granting access.</li>
              <li>You are responsible for the content and actions initiated through your workflows.</li>
              <li>
                You will not use Blimp for illegal, abusive, or malicious activities (e.g., spam, harassment, data
                scraping).
              </li>
              <li>
                Blimp will never make any changes or execute workflows without your explicit consent or configuration.
              </li>
            </ul>
          </Section>

          <Section title="4. Intellectual Property">
            <p>
              All trademarks, software, and content on Blimp are owned or licensed by Blimp. You retain ownership of all
              data and content from your connected accounts.
            </p>
          </Section>

          <Section title="5. Account Security">
            <p>
              You are responsible for maintaining the confidentiality of your Blimp credentials. Notify us immediately
              if you suspect unauthorized access to your account.
            </p>
          </Section>

          <Section title="6. Third-Party Integrations">
            <p>
              Blimp uses official APIs of external platforms. Your use of these integrations is also subject to their
              respective terms of service. We are not responsible for service disruptions, limitations, or data loss
              caused by third-party platforms.
            </p>
          </Section>

          <Section title="7. Service Availability">
            <p>
              We strive to keep Blimp running smoothly, but we cannot guarantee uninterrupted access. Maintenance,
              updates, or external API issues may temporarily affect functionality.
            </p>
          </Section>

          <Section title="8. Termination">
            <p>
              You may terminate your account at any time. We reserve the right to suspend or terminate access for users
              who violate these Terms or misuse the Service.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>To the fullest extent permitted by law, Blimp shall not be liable for:</p>
            <ul>
              <li>Any indirect, incidental, or consequential damages.</li>
              <li>Data loss resulting from user error, third-party outages, or unauthorized access.</li>
              <li>Use of the Service is at your own risk.</li>
            </ul>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>
              We may modify these Terms occasionally. Continued use of Blimp after changes means you accept the updated
              Terms.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of [Insert your country or state].
            </p>
          </Section>

          <Section title="12. Contact Information">
            <p>For any questions about these Terms, please contact:</p>
            <p>
              <a href="mailto:support@getblimpy.app" className="text-cyan-400 hover:text-cyan-300 underline">
                support@getblimpy.app
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        className="mb-4 font-semibold text-white"
        style={{
          fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
          fontSize: "24px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: "1.3",
        }}
      >
        {title}
      </h2>
      <div
        className="space-y-4 text-white/80"
        style={{
          fontFamily: "GeistMono, monospace",
          fontSize: "15px",
          lineHeight: "1.7",
        }}
      >
        {children}
      </div>
    </section>
  )
}
