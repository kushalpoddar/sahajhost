import Logo from './components/Logo'
import Footer from './components/Footer'
import MonthlyPlans from './components/MonthlyPlans'
import { ArrowRightIcon } from './components/icons/Icons'

export default function MonthlyApp() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Slim header — only logo + back-home link, no marketing nav */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-brand-100">
        <div className="container-x flex items-center justify-between h-16 sm:h-20">
          <a href="/" aria-label="SahajHost home" className="flex items-center">
            <Logo className="h-9 sm:h-11 w-auto" />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-semibold text-sm hover:bg-brand-100 transition-colors"
          >
            <span aria-hidden="true">←</span>
            Back to home
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden gradient-soft pt-14 sm:pt-20 pb-20"
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
            style={{
              background:
                'radial-gradient(closest-side, rgba(81,114,255,0.25), transparent)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full"
            style={{
              background:
                'radial-gradient(closest-side, rgba(179,163,255,0.35), transparent)',
            }}
          />

          <div className="container-x relative text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-200 text-brand-700 text-xs font-bold tracking-wide uppercase">
              Monthly billing
            </span>
            <h1
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]"
              style={{ color: '#0d1224' }}
            >
              Pay-as-you-go{' '}
              <span className="text-gradient">monthly hosting</span>
            </h1>
            <p
              className="mt-5 text-lg max-w-xl mx-auto"
              style={{ color: '#2c3251' }}
            >
              Same Apache + NGINX + MySQL 8 stack. Billed every 30 days, no long
              commitments — pause or upgrade anytime.
            </p>

            <div className="mt-7 flex items-center justify-center gap-4 flex-wrap text-sm" style={{ color: '#5b6182' }}>
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                Free SSL on every plan
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                Cancel anytime
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                Indian data centre
              </span>
            </div>

            <div className="mt-8">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 transition-all"
              >
                See plans
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <MonthlyPlans />

        {/* Tiny info strip */}
        <section className="py-12 bg-white">
          <div className="container-x grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <InfoCard
              title="Switch anytime"
              body="Move between monthly plans with one email — pro-rata adjustments, no fuss."
            />
            <InfoCard
              title="Yearly cheaper?"
              body={
                <>
                  Yes — annual plans run from ₹325 / 6 mo on the{' '}
                  <a className="text-brand-600 underline underline-offset-2" href="/#plans">
                    main plans page
                  </a>
                  .
                </>
              }
            />
            <InfoCard
              title="Need a quote?"
              body={
                <>
                  Drop a line to{' '}
                  <a
                    className="text-brand-600 underline underline-offset-2"
                    href="mailto:male69calcutta@gmail.com"
                  >
                    male69calcutta@gmail.com
                  </a>
                  .
                </>
              }
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function InfoCard({ title, body }) {
  return (
    <div className="card p-5">
      <h3 className="text-base font-extrabold" style={{ color: '#0d1224' }}>
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: '#2c3251' }}>
        {body}
      </p>
    </div>
  )
}
