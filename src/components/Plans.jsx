import { useState } from 'react'
import { CheckIcon, DatabaseIcon, LockIcon, ServerIcon } from './icons/Icons'

const PLAN_DATA = {
  'Extreme-1': {
    storage: '1 GB NVMe',
    domains: '1 + 0',
    db_email: '1',
    io_ep: '1 MB / 20',
    accent: 'from-brand-400 to-brand-600',
    prices: {
      '6 mo': 325,
      '1 yr': 525,
      '2 yr': 875,
      '3 yr': 1095,
    },
    note: '3 yrs ≈ ₹1 / day',
  },
  'Extreme-2': {
    storage: '2 GB NVMe',
    domains: '1 + 1',
    db_email: '2',
    io_ep: '1 MB / 20',
    accent: 'from-brand-500 to-brand-700',
    prices: {
      '6 mo': 650,
      '1 yr': 1050,
      '2 yr': 1750,
      '3 yr': 2190,
    },
    popular: true,
    note: 'Most chosen',
  },
  'Extreme-3': {
    storage: '5 GB NVMe',
    domains: '5 + 5',
    db_email: '5',
    io_ep: '1 MB / 20',
    accent: 'from-brand-600 to-brand-800',
    prices: {
      '6 mo': 1350,
      '1 yr': 2150,
      '2 yr': 3550,
      '3 yr': 4440,
    },
    note: 'Best for multiple sites',
  },
}

const TERMS = ['6 mo', '1 yr', '2 yr', '3 yr']

const COMMON = [
  { icon: ServerIcon, label: 'Intel Xeon E3v6 · 3.7 GHz' },
  { icon: DatabaseIcon, label: 'CentOS 8 · NGINX · Apache · MySQL 8' },
  { icon: LockIcon, label: 'Free SSL & DirectAdmin Panel' },
]

export default function Plans() {
  const [term, setTerm] = useState('1 yr')

  return (
    <section
      id="plans"
      className="relative py-20 sm:py-24 text-white overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #2c43b8 0%, #5172ff 100%)' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-100">
            Plans &amp; Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Fully Managed SAHAJ Plans
          </h2>
          <p className="mt-3 text-brand-50/85">
            Pre-configured shared hosting for every kind of content — pick a plan that
            matches your site, switch terms anytime.
          </p>
        </div>

        {/* Common stack chips */}
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {COMMON.map((c) => (
            <li
              key={c.label}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-sm font-semibold"
            >
              <c.icon className="w-4 h-4" />
              {c.label}
            </li>
          ))}
        </ul>

        {/* Term toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full bg-white/10 backdrop-blur p-1 border border-white/15">
            {TERMS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTerm(t)}
                aria-pressed={term === t}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  term === t
                    ? 'bg-white text-brand-700 shadow'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {Object.entries(PLAN_DATA).map(([name, plan]) => (
            <article
              key={name}
              className={`relative rounded-3xl p-6 sm:p-8 bg-white text-ink-900 shadow-2xl transition-transform hover:-translate-y-1 ${
                plan.popular ? 'ring-2 ring-amber-300 scale-[1.02]' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-300 text-amber-950 text-xs font-extrabold tracking-wider uppercase">
                  Most popular
                </span>
              )}

              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${plan.accent}`}
              >
                {name}
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-sm font-bold text-ink-500" style={{ color: '#5b6182' }}>₹</span>
                <span className="text-5xl font-extrabold text-ink-900 tracking-tight">
                  {plan.prices[term].toLocaleString('en-IN')}
                </span>
                <span className="text-sm font-semibold text-ink-500" style={{ color: '#5b6182' }}>
                  / {term}
                </span>
              </div>

              {plan.note && (
                <p className="mt-1 text-xs font-bold text-brand-700">{plan.note}</p>
              )}

              <ul className="mt-6 space-y-3 text-sm">
                <PlanRow label="NVMe Storage" value={plan.storage} />
                <PlanRow label="Domains + Sub-domains" value={plan.domains} />
                <PlanRow label="MySQL DB / Email A/c" value={plan.db_email} />
                <PlanRow label="I/O · EP" value={plan.io_ep} />
                <PlanRow label="Free SSL · Daily Backup" value="Included" />
                <PlanRow label="DirectAdmin Panel" value="Included" />
              </ul>

              <a
                href={`mailto:male69calcutta@gmail.com?subject=${encodeURIComponent(
                  `Hosting enquiry — ${name} (${term}) · ₹${plan.prices[term].toLocaleString('en-IN')}`,
                )}`}
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/40 hover:-translate-y-0.5'
                    : 'bg-ink-900 text-white hover:bg-brand-700'
                }`}
                style={!plan.popular ? { backgroundColor: '#0d1224' } : undefined}
              >
                Contact us — {name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-brand-50/80 text-sm">
          Pay just <strong className="text-white">₹1</strong> for a fully working{' '}
          <strong className="text-white">DEMO</strong> account for a week. 14-day money-back
          guarantee on every plan.
        </p>
      </div>
    </section>
  )
}

function PlanRow({ label, value }) {
  return (
    <li className="flex items-center justify-between gap-3">
      <span className="inline-flex items-center gap-2 text-ink-700" style={{ color: '#2c3251' }}>
        <CheckIcon className="w-4 h-4 text-emerald-600" />
        {label}
      </span>
      <span className="font-bold text-ink-900">{value}</span>
    </li>
  )
}
