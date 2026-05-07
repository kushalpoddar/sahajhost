import HeroArt from './illustrations/HeroArt'
import { ArrowRightIcon, BoltIcon, CheckIcon, ShieldIcon } from './icons/Icons'

const FEATURES = [
  'Advance Web Server Combination',
  'Superior Hardware Configuration',
  'Higher Performance Benchmark',
  '99.5% Uptime Guaranteed',
]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden gradient-soft pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24"
    >
      {/* decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(81,114,255,0.25), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(179,163,255,0.35), transparent)' }}
      />

      <div className="container-x relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-brand-200 text-brand-700 text-xs font-bold tracking-wide uppercase">
            <BoltIcon className="w-4 h-4" />
            New: Apache + NGINX + MySQL 8
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-extrabold text-ink-900">
            Simple &amp; Reliable{' '}
            <span className="text-gradient">Web Hosting</span>
            <span className="block text-ink-900">at a reasonable price.</span>
          </h1>

          <p className="mt-5 text-lg text-ink-700 max-w-xl" style={{ color: '#2c3251' }}>
            An out-performing shared-hosting stack tuned for speed, stability and value —
            built on NVMe storage, Intel Xeon and DirectAdmin. Hosted with care from India.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3 max-w-xl">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/85 border border-brand-100"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-50 text-emerald-600">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-ink-900">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#plans"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 transition-all"
            >
              See plans
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink-900 font-semibold border border-brand-200 hover:bg-brand-50 transition-colors"
            >
              How it works
            </a>
          </div>

          <div className="mt-7 flex items-center gap-5 text-sm text-ink-500" style={{ color: '#5b6182' }}>
            <span className="inline-flex items-center gap-2">
              <ShieldIcon className="w-4 h-4 text-brand-600" />
              14-day money-back
            </span>
            <span className="hidden sm:inline-flex items-center gap-2">
              ₹1/day · ₹1 demo for a week
            </span>
          </div>
        </div>

        <div className="relative">
          <HeroArt className="w-full h-auto drop-shadow-xl" />
        </div>
      </div>
    </section>
  )
}
