import { usePageTitle } from '../hooks/usePageTitle'

export default function TermsPage() {
  usePageTitle('Terms of Service · SahajHost')

  return (
    <div className="gradient-soft py-14 sm:py-20">
      <div className="container-x max-w-3xl space-y-6 text-ink-700 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl text-ink-900">Terms of Service</h1>
        <p className="text-sm text-ink-500">Last updated: May 7, 2026</p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">1. Agreement</h2>
          <p>
            By ordering or using SahajHost services, you agree to these terms. If you do not agree,
            do not use our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">2. Services</h2>
          <p>
            We provide web hosting and related services as described on our website at the time of
            purchase. Features, limits, and pricing may change with reasonable notice where required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">3. Acceptable use</h2>
          <p>
            You may not use our network for unlawful activity, spam, distributing malware, excessive
            resource abuse, or anything that materially harms other customers or our infrastructure.
            We may suspend or terminate accounts that violate this policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">4. Payment &amp; renewal</h2>
          <p>
            Fees are due according to your billing cycle. Failure to pay may result in suspension
            or cancellation of services. You are responsible for keeping contact and billing
            information up to date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">5. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, SahajHost is not liable for indirect, incidental,
            or consequential damages, or for loss of data, revenue, or business. Our total liability
            for any claim relating to the services is limited to fees you paid us in the three
            months before the event giving rise to the claim.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">6. Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
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
