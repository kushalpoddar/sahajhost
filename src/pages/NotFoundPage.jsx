import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Page not found · SahajHost')

  return (
    <div className="gradient-soft py-24 sm:py-32">
      <div className="container-x max-w-lg text-center">
        <p className="text-sm font-bold text-brand-600 uppercase tracking-wider">404</p>
        <h1 className="mt-2 text-3xl sm:text-4xl text-ink-900">Page not found</h1>
        <p className="mt-4 text-ink-600">
          That URL does not match anything on our site. Try the home page or contact us if you
          followed a broken link.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold text-sm shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
