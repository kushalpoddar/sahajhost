import { MailIcon, PhoneIcon } from '../components/icons/Icons'
import { usePageTitle } from '../hooks/usePageTitle'

export default function ContactPage() {
  usePageTitle('Contact us · SahajHost')

  return (
    <div className="gradient-soft py-14 sm:py-20">
      <div className="container-x max-w-3xl">
        <h1 className="text-3xl sm:text-4xl text-ink-900">Contact us</h1>
        <p className="mt-4 text-lg text-ink-500">
          Questions about plans, migration, or billing? Reach out — we typically reply within one
          business day.
        </p>

        <ul className="mt-10 space-y-4">
          <li>
            <a
              href="mailto:male69calcutta@gmail.com?subject=Hosting%20enquiry"
              className="card flex items-center gap-4 p-5 hover:border-brand-300 transition-colors group"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100">
                <MailIcon className="w-6 h-6" />
              </span>
              <div>
                <div className="font-bold text-ink-900">Email</div>
                <div className="text-brand-600 font-semibold">male69calcutta@gmail.com</div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="tel:+919432556920"
              className="card flex items-center gap-4 p-5 hover:border-brand-300 transition-colors group"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100">
                <PhoneIcon className="w-6 h-6" />
              </span>
              <div>
                <div className="font-bold text-ink-900">Phone</div>
                <div className="text-brand-600 font-semibold">+91 94 3255 6920</div>
              </div>
            </a>
          </li>
        </ul>

        <p className="mt-10 text-sm text-ink-500">
          For sales and general hosting questions, email is often fastest. For urgent technical
          issues, call during business hours.
        </p>
      </div>
    </div>
  )
}
