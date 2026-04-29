export const metadata = {
  title: "Terms of Use | Trexpenser",
  description:
    "Terms of use for Trexpenser — your rights and responsibilities when using our service.",
};

const linkClass = "text-ui-cta underline hover:text-ui-ctaHover transition-colors";

const sections = [
  {
    title: "1. About Trexpenser",
    content: (
      <p>
        Trexpenser is a personal finance web application that allows users to
        track income and expenses, set savings goals, manage budgets, and
        receive AI-generated financial insights powered by Google Gemini.
        Trexpenser is intended for personal, non-commercial use only.
      </p>
    ),
  },
  {
    title: "2. Eligibility",
    content: (
      <p>
        You must be at least 13 years of age to use Trexpenser. By creating an
        account, you represent that you meet this age requirement and that the
        information you provide during registration is accurate and complete.
      </p>
    ),
  },
  {
    title: "3. Your Account",
    content: (
      <>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activity that occurs under your
          account. You agree to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Provide accurate information when creating your account</li>
          <li>Not share your account with others</li>
          <li>
            Notify us immediately at{" "}
            <a href="mailto:bbnl6060@gmail.com" className={linkClass}>
              bbnl6060@gmail.com
            </a>{" "}
            if you suspect unauthorized access to your account
          </li>
          <li>Not create multiple accounts for the same person</li>
        </ul>
        <p className="mt-3">
          We reserve the right to suspend or terminate accounts that violate
          these Terms.
        </p>
      </>
    ),
  },
  {
    title: "4. Acceptable Use",
    content: (
      <>
        <p>You agree not to use Trexpenser to:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Violate any applicable local, national, or international law</li>
          <li>
            Attempt to gain unauthorized access to our systems or other
            users&apos; data
          </li>
          <li>Upload malicious code, scripts, or harmful content</li>
          <li>
            Reverse engineer, copy, or redistribute any part of the application
          </li>
          <li>
            Use the service for commercial purposes without prior written consent
          </li>
          <li>
            Abuse the AI insights feature in ways that violate Google&apos;s
            usage policies
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Financial Information Disclaimer",
    content: (
      <>
        <p>
          Trexpenser is a personal finance <strong>tracking tool</strong> — it
          is not a licensed financial advisor, bank, or investment service. All
          AI-generated summaries, insights, suggestions, and advice produced by
          Trexpenser are for informational purposes only and do not constitute
          professional financial, investment, tax, or legal advice.
        </p>
        <p className="mt-3">
          You should consult a qualified financial professional before making
          any significant financial decisions. We accept no liability for
          decisions made based on information provided by Trexpenser or its AI
          features.
        </p>
      </>
    ),
  },
  {
    title: "6. AI-Powered Features",
    content: (
      <>
        <p>
          Trexpenser uses Google Gemini to generate financial insights. By using
          this feature, you acknowledge that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Anonymized financial data is sent to Google&apos;s Generative AI
            API for processing
          </li>
          <li>AI responses may not always be accurate or complete</li>
          <li>
            AI insights are subject to usage limits and may be unavailable at
            times
          </li>
          <li>
            You use AI-generated content at your own risk and discretion
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Your Data",
    content: (
      <>
        <p>
          You own all financial data you input into Trexpenser. By using our
          Services, you grant us a limited license to store and process your
          data solely for the purpose of providing and improving the Trexpenser
          service. We do not sell, rent, or share your financial data with third
          parties for advertising purposes.
        </p>
        <p className="mt-3">
          You may request deletion of your account and all associated data at
          any time by contacting us at{" "}
          <a href="mailto:bbnl6060@gmail.com" className={linkClass}>
            bbnl6060@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "8. Newsletter",
    content: (
      <p>
        If you subscribe to our newsletter, you consent to receiving periodic
        emails about Trexpenser updates, financial tips, and product news. You
        may unsubscribe at any time by contacting us at{" "}
        <a href="mailto:bbnl6060@gmail.com" className={linkClass}>
          bbnl6060@gmail.com
        </a>{" "}
        with the subject line &quot;Unsubscribe.&quot;
      </p>
    ),
  },
  {
    title: "9. Intellectual Property",
    content: (
      <p>
        All content, design, code, branding, and materials within Trexpenser —
        excluding data you personally enter — are the intellectual property of
        Abosi Godwin. You may not copy, reproduce, modify, or distribute any
        part of Trexpenser without prior written permission.
      </p>
    ),
  },
  {
    title: "10. Third-Party Services",
    content: (
      <>
        <p>Trexpenser integrates with the following third-party services:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Supabase</strong> — database, authentication, and file
            storage
          </li>
          <li>
            <strong>Google Gemini API</strong> — AI-powered financial insights
          </li>
          <li>
            <strong>Resend</strong> — email delivery for newsletters and
            notifications
          </li>
          <li>
            <strong>Vercel</strong> — application hosting and deployment
          </li>
        </ul>
        <p className="mt-3">
          Your use of Trexpenser is also subject to the terms and privacy
          policies of these providers. We are not responsible for the practices
          of these third parties.
        </p>
      </>
    ),
  },
  {
    title: "11. Service Availability",
    content: (
      <p>
        We strive to keep Trexpenser available at all times but do not guarantee
        uninterrupted access. We reserve the right to modify, suspend, or
        discontinue any part of the service at any time without prior notice. We
        will not be liable for any loss or inconvenience caused by service
        interruptions.
      </p>
    ),
  },
  {
    title: "12. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by law, Trexpenser and its creator shall
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages arising from your use of or inability to use the
        service, including but not limited to financial loss, data loss, or
        reliance on AI-generated financial advice.
      </p>
    ),
  },
  {
    title: "13. Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. The updated version will be
        reflected by a revised &quot;Last updated&quot; date at the top of this
        page. Continued use of Trexpenser after changes are posted constitutes
        your acceptance of the revised Terms.
      </p>
    ),
  },
  {
    title: "14. Contact Us",
    content: (
      <>
        <p>If you have any questions about these Terms, please contact us:</p>
        <div className="mt-3 space-y-1">
          <p>
            <strong>Trexpenser</strong>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:bbnl6060@gmail.com" className={linkClass}>
              bbnl6060@gmail.com
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://trexpenser.vercel.app"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://trexpenser.vercel.app
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function TermsOfUse() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-24 text-ui-text">
      <h1 className="text-3xl font-bold mb-2 text-ui-text">Terms of Use</h1>
      <p className="text-sm text-ui-subtext mb-10">Last updated April 27, 2026</p>

      <section className="space-y-8 text-sm leading-7 text-ui-text">
        <div>
          <p>
            These Terms of Use (&quot;Terms&quot;) govern your access to and
            use of Trexpenser, operated by Abosi Godwin (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). By accessing or using
            Trexpenser at{" "}
            <a
              href="https://trexpenser.vercel.app"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://trexpenser.vercel.app
            </a>{" "}
            or the Trexpenser dashboard, you agree to be bound by these Terms.
            If you do not agree, please do not use our Services.
          </p>
        </div>

        {sections.map(({ title, content }) => (
          <div key={title}>
            <h2 className="text-xl font-bold text-ui-text mb-3">{title}</h2>
            {content}
          </div>
        ))}
      </section>
    </main>
  );
}