import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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
            Privacy Policy
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
            <br />
            Last Updated: 23/10/2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Section title="1. Introduction">
            <p>
              Welcome to Blimp ("we," "us," or "our"). Blimp is an AI-powered automation platform that allows users to
              connect, automate, and schedule tasks across their favorite apps, such as Gmail, Google Calendar, Google
              Drive, Slack, Notion, and others.
            </p>
            <p>
              Your privacy and data security are our top priority. This Privacy Policy explains how we collect, use, and
              protect your personal information when you use Blimp.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <SubSection title="a. Information You Provide">
              <p>When you create an account or connect external apps, we collect:</p>
              <ul>
                <li>Account information: such as your name, email address, and profile image.</li>
                <li>Connected app data: limited to the permissions (scopes) you grant Blimp.</li>
                <li>Support communications: if you contact us for help.</li>
              </ul>
            </SubSection>

            <SubSection title="b. Information from Connected Apps">
              <p>
                When you connect third-party services (like Gmail, Google Drive, Slack, Notion, etc.), Blimp accesses
                only the data necessary to perform the automation tasks you authorize. Here are examples of permissions
                we may request:
              </p>
              <ul>
                <li>Gmail: read, send, or manage emails.</li>
                <li>Google Drive & Sheets: create, edit, and manage spreadsheets or files.</li>
                <li>Google Calendar: read and write calendar events.</li>
                <li>Slack: send and manage messages, channels, and files.</li>
                <li>LinkedIn: post updates or access your profile.</li>
                <li>Notion: read and write workspace pages.</li>
                <li>Discord & WhatsApp: send or read permitted messages and manage content.</li>
              </ul>
              <p>You can review the full list of access scopes before authorizing any integration.</p>
            </SubSection>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the data collected to:</p>
            <ul>
              <li>Execute your automation workflows as defined by you.</li>
              <li>Refresh tokens in the background to keep your integrations working securely.</li>
              <li>Schedule, run, and monitor workflows in your dashboard.</li>
              <li>Communicate important updates, security alerts, or support messages.</li>
              <li>Improve Blimp's reliability, performance, and user experience.</li>
            </ul>
            <p>We never sell your data or use it to train third-party AI models without your explicit consent.</p>
          </Section>

          <Section title="4. Data Storage and Security">
            <ul>
              <li>All credentials and tokens are securely encrypted both at rest and in transit.</li>
              <li>
                Tokens are auto-refreshed in the background to maintain seamless integrations unless you revoke access
                or change your connected account password.
              </li>
              <li>
                We follow industry-standard security measures (TLS encryption, limited access keys, and isolated
                storage).
              </li>
              <li>
                If you revoke a connection under the Connected Accounts page, all associated tokens and cached data are
                permanently deleted from our servers.
              </li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your account and workflow data only for as long as necessary to provide the service. When you
              delete your Blimp account, all user data, tokens, and workflows are permanently erased from our system.
            </p>
          </Section>

          <Section title="6. Third-Party Services">
            <p>
              Blimp relies on APIs from third-party providers (e.g., Google, Slack, Notion). Each service's data use is
              also governed by its respective privacy policy:
            </p>
            <ul>
              <li>Google Privacy Policy</li>
              <li>Slack Privacy Policy</li>
              <li>Notion Privacy Policy</li>
              <li>LinkedIn Privacy Policy</li>
              <li>Meta/WhatsApp Privacy Policy</li>
            </ul>
          </Section>

          <Section title="7. User Controls and Data Deletion">
            <p>You are always in control of your data:</p>
            <ul>
              <li>Manage integrations: via Connected Accounts.</li>
              <li>Monitor workflows: via the Workflows page.</li>
              <li>Delete account/data: directly from your settings or by contacting us at support@blimp.ai.</li>
            </ul>
            <p>We will honor all deletion requests within a reasonable timeframe.</p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              Blimp is not directed to individuals under the age of 13 (or the minimum legal age in your jurisdiction).
              We do not knowingly collect personal data from children.
            </p>
          </Section>

          <Section title="9. Updates to This Policy">
            <p>
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. The updated
              version will always be available on this page with a revised "Last Updated" date.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>If you have questions or concerns about this Privacy Policy, contact us at:</p>
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3
        className="mb-3 font-semibold text-white/90"
        style={{
          fontFamily: 'GeistSans, "GeistSans Fallback", sans-serif',
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "1.4",
        }}
      >
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
