import { usePageTitle } from '../hooks/usePageTitle'

export default function PrivacyPage() {
  usePageTitle('Privacy Policy · SahajHost')

  return (
    <div className="gradient-soft py-14 sm:py-20">
      <div className="container-x max-w-3xl space-y-6 text-ink-700 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl text-ink-900">Privacy Policy</h1>
        <p className="text-sm text-ink-500">Last updated: May 7, 2026</p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">1. Information we collect</h2>
          <p>
            We collect information you provide when you register, order services, or contact support
            (such as name, email, phone, billing details, and account credentials). We also collect
            technical data needed to operate hosting (for example IP addresses and server logs).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">2. How we use information</h2>
          <p>
            We use your information to provide and bill for hosting, communicate about your account,
            improve our services, comply with law, and protect against fraud or abuse.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">3. Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with payment processors,
            infrastructure providers, or authorities when required by law or to enforce our terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">4. Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect your data. No method
            of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">5. Retention</h2>
          <p>
            We retain information as long as needed to provide services and meet legal, tax, or
            accounting obligations, then delete or anonymize it where possible.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">6. Your choices</h2>
          <p>
            You may request access, correction, or deletion of certain personal data where
            applicable law allows. Contact us at{' '}
            <a className="text-brand-600 font-semibold hover:underline" href="mailto:male69calcutta@gmail.com">
              male69calcutta@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
