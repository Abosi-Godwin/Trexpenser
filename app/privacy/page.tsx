 export const metadata = {
  title: "Privacy Policy | Trexpenser",
  description:
    "Privacy policy for Trexpenser — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-24 text-ui-text">
      <h1 className="text-3xl font-bold mb-2 text-ui-text">Privacy Policy</h1>
      <p className="text-sm text-ui-subtext mb-10">Last updated April 27, 2026</p>

      <section className="space-y-8 text-sm leading-7 text-ui-text">
        <div>
          <p>
            This Privacy Notice for <strong>Trexpenser</strong> (&quot;we,&quot;{" "}
            &quot;us,&quot; or &quot;our&quot;) describes how and why we might
            access, collect, store, use, and/or share (&quot;process&quot;) your
            personal information when you use our services, including when you:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>
              Visit our website at{" "}
              <a
                href="https://trexpenser.vercel.app"
                className="text-ui-cta underline hover:text-ui-ctaHover 
                  transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://trexpenser.vercel.app
              </a>
            </li>
            <li>
              Use Trexpenser — a personal finance web application that helps
              individuals track income and expenses, set savings goals, and
              manage spending budgets.
            </li>
            <li>
              Engage with us in other related ways, including marketing or
              events.
            </li>
          </ul>
          <p className="mt-4">
            <strong>Questions or concerns?</strong> If you do not agree with our
            policies, please do not use our Services. For questions, contact us
            at{" "}
            <a
              href="mailto:bbnl6060@gmail.com"
              className="text-ui-cta underline hover:text-ui-ctaHover 
                transition-colors"
            >
              bbnl6060@gmail.com
            </a>
            .
          </p>
        </div>

        {[
          {
            title: "1. What Information Do We Collect?",
            content: (
              <>
                <p>We collect information you provide directly when you:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Create an account — email address and display name</li>
                  <li>Upload a profile photo</li>
                  <li>
                    Log financial transactions — amounts, categories, dates, and
                    descriptions
                  </li>
                  <li>Create savings goals and budget limits</li>
                  <li>Subscribe to our newsletter</li>
                </ul>
                <p className="mt-3">
                  We also automatically collect certain information when you use
                  our Services, including session data, authentication tokens,
                  and usage analytics via Supabase.
                </p>
              </>
            ),
          },
          {
            title: "2. How Do We Process Your Information?",
            content: (
              <>
                <p>We process your information to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Create and manage your account</li>
                  <li>
                    Provide financial tracking features and AI-generated insights
                  </li>
                  <li>Send newsletter emails if you opted in</li>
                  <li>Improve and administer our Services</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with applicable laws</li>
                </ul>
              </>
            ),
          },
          {
            title: "3. AI-Powered Features",
            content: (
              <p>
                Trexpenser uses Google Gemini AI to generate personalized
                financial summaries, spending reviews, and advice. When you
                trigger this feature, your anonymized financial data (transaction
                totals, budget status, savings progress) is sent to
                Google&apos;s Generative AI API for processing. We do not store
                raw prompts or AI responses beyond your active session cache.
              </p>
            ),
          },
          {
            title: "4. Do We Share Your Information?",
            content: (
              <>
                <p>We only share your information in the following situations:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <strong>Supabase</strong> — our database and authentication
                    provider stores your account and financial data securely
                  </li>
                  <li>
                    <strong>Resend</strong> — used to send welcome and newsletter
                    emails to subscribers
                  </li>
                  <li>
                    <strong>Google Gemini API</strong> — receives anonymized
                    financial data when you use the AI insights feature
                  </li>
                  <li>
                    <strong>Vercel</strong> — our hosting provider may process
                    request data through their infrastructure
                  </li>
                </ul>
                <p className="mt-3">
                  We do not sell your personal information to any third party.
                </p>
              </>
            ),
          },
          {
            title: "5. Do We Use Cookies?",
            content: (
              <p>
                We use cookies and similar tracking technologies only as
                necessary for authentication and session management via Supabase.
                We do not use advertising or tracking cookies.
              </p>
            ),
          },
          {
            title: "6. How Long Do We Keep Your Information?",
            content: (
              <p>
                We retain your personal information for as long as your account
                is active. If you delete your account, your data will be
                permanently removed from our systems within 30 days, except
                where retention is required by law.
              </p>
            ),
          },
          {
            title: "7. How Do We Keep Your Information Safe?",
            content: (
              <p>
                We use industry-standard security measures including encrypted
                data storage via Supabase, HTTPS for all data transmission,
                row-level security policies, and secure authentication. However,
                no system is 100% secure and we cannot guarantee absolute
                security.
              </p>
            ),
          },
          {
            title: "8. Your Privacy Rights",
            content: (
              <>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your account and data</li>
                  <li>Withdraw consent for newsletter emails at any time</li>
                  <li>Object to or restrict certain processing</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, contact us at{" "}
                  <a
                    href="mailto:bbnl6060@gmail.com"
                    className="text-ui-cta underline hover:text-ui-ctaHover 
                      transition-colors"
                  >
                    bbnl6060@gmail.com
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            title: "9. Newsletter Unsubscribe",
            content: (
              <p>
                If you subscribed to our newsletter, you can unsubscribe at any
                time by contacting us at{" "}
                <a
                  href="mailto:bbnl6060@gmail.com"
                  className="text-ui-cta underline hover:text-ui-ctaHover 
                    transition-colors"
                >
                  bbnl6060@gmail.com
                </a>{" "}
                with the subject line &quot;Unsubscribe.&quot; We will remove
                you within 5 business days.
              </p>
            ),
          },
          {
            title: "10. Updates to This Policy",
            content: (
              <p>
                We may update this Privacy Policy from time to time. The updated
                version will be indicated by a revised &quot;Last updated&quot;
                date at the top of this page. We encourage you to review this
                policy periodically.
              </p>
            ),
          },
          {
            title: "11. Contact Us",
            content: (
              <>
                <p>
                  If you have questions or comments about this policy, you may
                  contact us at:
                </p>
                <div className="mt-3 space-y-1">
                  <p>
                    <strong>Trexpenser</strong>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:bbnl6060@gmail.com"
                      className="text-ui-cta underline hover:text-ui-ctaHover 
                        transition-colors"
                    >
                      bbnl6060@gmail.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://trexpenser.vercel.app"
                      className="text-ui-cta underline hover:text-ui-ctaHover 
                        transition-colors"
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
        ].map(({ title, content }) => (
          <div key={title}>
            <h2 className="text-xl font-bold text-ui-text mb-3">{title}</h2>
            {content}
          </div>
        ))}
      </section>
    </main>
  );
}