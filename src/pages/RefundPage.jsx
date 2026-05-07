import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function RefundPage() {
  usePageTitle('Refund Policy · SahajHost')

  return (
    <div className="gradient-soft py-14 sm:py-20">
      <div className="container-x max-w-3xl space-y-6 text-ink-700 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl text-ink-900">Refund Policy</h1>
        <p className="text-sm text-ink-500">Last updated: May 7, 2026</p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">14-day money-back guarantee</h2>
          <p>
            New shared hosting customers may request a full refund within 14 days of the initial
            purchase if our service does not meet reasonable expectations, subject to the
            exclusions below.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">What is covered</h2>
          <p>
            Refunds apply to standard shared hosting plan fees paid to SahajHost for your first
            invoice with us. Setup or migration fees, if any, follow the terms stated at checkout.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">Exclusions</h2>
          <p>
            Refunds generally do not apply to domain registrations, add-on licenses, violation of
            our acceptable use policy, chargebacks filed before contacting us, or renewals after the
            initial term. Custom or managed services may have separate terms confirmed in writing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900">How to request a refund</h2>
          <p>
            Email{' '}
            <a className="text-brand-600 font-semibold hover:underline" href="mailto:male69calcutta@gmail.com?subject=Refund%20request">
              male69calcutta@gmail.com
            </a>{' '}
            from the address on your account with your domain name and invoice details. We process
            eligible requests as quickly as our payment provider allows.
          </p>
        </section>

        <p className="pt-4 text-sm text-ink-500">
          Plan details and guarantees on the marketing site are summarized on the{' '}
          <Link to="/#plans" className="text-brand-600 font-semibold hover:underline">
            home page
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
