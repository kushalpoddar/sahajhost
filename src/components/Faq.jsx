import { useState } from 'react'
import FaqArt from './illustrations/FaqArt'
import { ChevronDownIcon } from './icons/Icons'

const ITEMS = [
  {
    q: 'Why SahajHost?',
    a: (
      <>
        <strong>Performance.</strong> It can be tested for free on platforms like
        webpagetest.org, gtmetrix.com or Google PageSpeed. Similar offerings rarely
        match our <strong>First Byte ranking</strong> — the upside of higher resources
        per site.
      </>
    ),
  },
  {
    q: 'How fast can we host with SahajHost?',
    a: 'Once your order is placed, in roughly 5 – 30 minutes you will receive an email with your hosting credentials at your registered email address.',
  },
  {
    q: 'What does “limited support” mean?',
    a: 'We take full responsibility for the smooth working of our platform, but cannot take responsibility for your content — that may need an expert/developer who knows your specific stack.',
  },
  {
    q: 'Do you accept add-on feature requests?',
    a: 'Shared hosting is a highly tuned, pre-configured setup serving many sites at once, so site-specific or unusual feature requests typically can’t be accepted.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: (
      <>
        <p>A. 14-day money-back guarantee on every plan, no questions asked.</p>
        <p className="mt-2">
          B. Anytime refund on a pro-rata basis (unused balance returned after deducting
          discounts already applied).
        </p>
      </>
    ),
  },
  {
    q: 'Still having doubts?',
    a: 'We strongly recommend clearing every doubt before placing an order. We may even allow you to host your content temporarily on our platform so you can compare results yourself.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-24"
      style={{ background: 'linear-gradient(180deg, #5172ff 0%, #3b58e6 100%)' }}
    >
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-100">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Questions, answered.
          </h2>
          <p className="mt-4 text-brand-50/85 max-w-md">
            Quick straight answers to what most folks ask before hosting with us.
            Couldn&rsquo;t find yours?{' '}
            <a
              href="mailto:male69calcutta@gmail.com"
              className="text-white underline underline-offset-4 decoration-brand-100/60 hover:decoration-white"
            >
              Email us
            </a>
            .
          </p>
          <div className="mt-8 hidden lg:block">
            <FaqArt className="w-full max-w-md" />
          </div>
        </div>

        <ul className="space-y-3" role="list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q} className="rounded-2xl bg-white/95 shadow-lg shadow-brand-900/15 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5"
                >
                  <span className="font-extrabold text-ink-900 text-base sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-full transition-transform ${
                      isOpen ? 'rotate-180 bg-brand-500 text-white' : 'bg-brand-100 text-brand-700'
                    }`}
                  >
                    <ChevronDownIcon className="w-5 h-5" />
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-ink-700 leading-relaxed" style={{ color: '#2c3251' }}>
                      {item.a}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
