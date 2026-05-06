import VpsArt from './illustrations/VpsArt'
import { CheckIcon, ClockIcon } from './icons/Icons'

const POINTS = [
  'Available only on demand',
  'Intel Xeon 3.7 GHz · 2 GB RAM · NVMe',
  'Starts from ₹2,150 / month',
  'Built with Free Webpanel & Open Sources',
  'Delivery in 24–72 hrs as per requirement',
]

export default function ManagedVPS() {
  return (
    <section
      id="vps"
      className="relative py-20 sm:py-24"
      style={{ backgroundColor: '#e8e2ff' }}
    >
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-700">
            Managed VPS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900">
            Need more power?
            <span className="block text-brand-600">Go Managed VPS.</span>
          </h2>

          <p className="mt-4 text-lg text-ink-700 max-w-xl" style={{ color: '#2c3251' }}>
            Dedicated resources, hand-tuned by our team — only when you actually
            need them. Tell us your workload and we&rsquo;ll build it.
          </p>

          <ul className="mt-7 space-y-3 max-w-lg">
            {POINTS.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-brand-100"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-100 text-brand-700">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-ink-900">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="mailto:male69calcutta@gmail.com?subject=Managed%20VPS%20Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 transition-all"
            >
              Request VPS quote
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-ink-700" style={{ color: '#2c3251' }}>
              <ClockIcon className="w-4 h-4 text-brand-600" />
              Reply within 1 business day
            </span>
          </div>
        </div>

        <div>
          <VpsArt className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
