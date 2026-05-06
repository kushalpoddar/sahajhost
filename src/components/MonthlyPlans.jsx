import { CheckIcon } from './icons/Icons'

const PLANS = [
  {
    name: 'Mini',
    price: 99,
    tagline: 'Single small site, just getting started',
    accent: 'from-brand-300 to-brand-500',
    features: [
      { label: 'NVMe Storage', value: '500 MB' },
      { label: 'Bandwidth', value: '10 GB / mo' },
      { label: 'Domains', value: '1' },
      { label: 'MySQL Databases', value: '1' },
      { label: 'Email Mailboxes', value: '2' },
      { label: 'Free SSL', value: '✓' },
      { label: 'NGINX + Apache', value: '✓' },
    ],
  },
  {
    name: 'Lite',
    price: 199,
    tagline: 'Growing blog or small portfolio',
    accent: 'from-brand-400 to-brand-600',
    features: [
      { label: 'NVMe Storage', value: '2 GB' },
      { label: 'Bandwidth', value: '50 GB / mo' },
      { label: 'Domains', value: '3' },
      { label: 'MySQL Databases', value: '3' },
      { label: 'Email Mailboxes', value: '10' },
      { label: 'Free SSL', value: '✓' },
      { label: 'Daily Backup', value: '✓' },
    ],
  },
  {
    name: 'Plus',
    price: 249,
    tagline: 'Most chosen for active websites',
    accent: 'from-brand-500 to-brand-700',
    popular: true,
    features: [
      { label: 'NVMe Storage', value: '5 GB' },
      { label: 'Bandwidth', value: '100 GB / mo' },
      { label: 'Domains', value: '5' },
      { label: 'MySQL Databases', value: '5' },
      { label: 'Email Mailboxes', value: '25' },
      { label: 'Free SSL', value: '✓' },
      { label: 'Daily Backup', value: '✓' },
      { label: 'Free Site Migration', value: '✓' },
    ],
  },
  {
    name: 'Pro',
    price: 399,
    tagline: 'Multiple sites, unmetered traffic',
    accent: 'from-brand-600 to-brand-800',
    features: [
      { label: 'NVMe Storage', value: '10 GB' },
      { label: 'Bandwidth', value: 'Unmetered*' },
      { label: 'Domains', value: 'Unlimited' },
      { label: 'MySQL Databases', value: '10' },
      { label: 'Email Mailboxes', value: '100' },
      { label: 'Free SSL', value: '✓' },
      { label: 'Daily Backup', value: '✓' },
      { label: 'Free Site Migration', value: '✓' },
      { label: 'Priority Email Support', value: '✓' },
    ],
  },
]

export default function MonthlyPlans() {
  return (
    <section
      id="plans"
      className="relative py-20 sm:py-24"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f6f3ff 100%)' }}
    >
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-700">
            Monthly Plans
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold"
            style={{ color: '#0d1224' }}
          >
            Pick a plan, billed every 30 days.
          </h2>
          <p className="mt-3" style={{ color: '#2c3251' }}>
            All plans run on Apache + NGINX + MySQL 8 with NVMe storage and free
            SSL. Switch up or down anytime.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl bg-white shadow-2xl transition-transform hover:-translate-y-1 ${
                plan.popular
                  ? 'ring-2 ring-amber-300 scale-[1.015]'
                  : 'ring-1 ring-brand-100'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-300 text-amber-950 text-xs font-extrabold tracking-wider uppercase shadow">
                  Best value
                </span>
              )}

              <div className="p-6 sm:p-7 border-b border-brand-100">
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${plan.accent}`}
                >
                  {plan.name}
                </div>
                <p
                  className="mt-3 text-sm font-semibold"
                  style={{ color: '#5b6182' }}
                >
                  {plan.tagline}
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span
                    className="text-sm font-bold"
                    style={{ color: '#5b6182' }}
                  >
                    ₹
                  </span>
                  <span
                    className="text-5xl font-extrabold tracking-tight"
                    style={{ color: '#0d1224' }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: '#5b6182' }}
                  >
                    / month
                  </span>
                </div>
              </div>

              <ul className="p-6 sm:p-7 space-y-3 text-sm flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center justify-between gap-3"
                  >
                    <span
                      className="inline-flex items-center gap-2"
                      style={{ color: '#2c3251' }}
                    >
                      <CheckIcon className="w-4 h-4 text-emerald-600" />
                      {f.label}
                    </span>
                    <span
                      className="font-bold"
                      style={{ color: '#0d1224' }}
                    >
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="p-6 sm:p-7 pt-0">
                <a
                  href={`mailto:male69calcutta@gmail.com?subject=${encodeURIComponent(
                    `Monthly ${plan.name} plan — ₹${plan.price}/mo`,
                  )}`}
                  className={`inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/40 hover:-translate-y-0.5'
                      : 'text-white hover:bg-brand-700'
                  }`}
                  style={!plan.popular ? { backgroundColor: '#0d1224' } : undefined}
                >
                  Choose {plan.name}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p
          className="mt-8 text-center text-xs"
          style={{ color: '#5b6182' }}
        >
          *Unmetered = no hard cap, fair-use applies. Resource limits per shared
          hosting policy.
        </p>
      </div>
    </section>
  )
}
