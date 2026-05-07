import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const SECTION_LINKS = [
  { id: 'solution', label: 'Solution' },
  { id: 'stack', label: 'Stack' },
  { id: 'plans', label: 'Plans' },
  { id: 'vps', label: 'Managed VPS' },
  { id: 'faq', label: 'FAQ' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const sectionHref = (id) => (pathname === '/' ? `#${id}` : `/#${id}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-[0_6px_30px_-15px_rgba(13,18,36,0.25)] border-b border-brand-100'
          : 'bg-white/0'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 sm:h-20">
        <Link to="/" aria-label="SahajHost home" className="flex items-center">
          <Logo className="h-9 sm:h-11 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {SECTION_LINKS.map((l) => (
            <a
              key={l.id}
              href={sectionHref(l.id)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-ink-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
              style={{ color: '#2c3251' }}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/contact-us"
            className="px-3 py-2 rounded-lg text-sm font-semibold text-ink-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
            style={{ color: '#2c3251' }}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:male69calcutta@gmail.com?subject=Hosting%20enquiry"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold text-sm shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 transition-all"
          >
            Contact us
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-brand-100 text-ink-900"
          >
            <span className="sr-only">Open menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-brand-100 bg-white"
        >
          <nav className="container-x py-3 flex flex-col">
            {SECTION_LINKS.map((l) => (
              <a
                key={l.id}
                href={sectionHref(l.id)}
                onClick={() => setOpen(false)}
                className="py-3 px-2 rounded-lg text-base font-semibold text-ink-900 hover:bg-brand-50"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/contact-us"
              onClick={() => setOpen(false)}
              className="py-3 px-2 rounded-lg text-base font-semibold text-ink-900 hover:bg-brand-50"
            >
              Contact
            </Link>
            <a
              href="mailto:male69calcutta@gmail.com?subject=Hosting%20enquiry"
              className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold text-sm"
            >
              Contact us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
