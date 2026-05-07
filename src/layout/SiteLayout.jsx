import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SiteLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Header />
      <main id="top" className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-30 inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-600 text-white shadow-lg shadow-brand-500/40 hover:bg-brand-700 hover:-translate-y-0.5 transition-all"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  )
}
