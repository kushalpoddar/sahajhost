import { FacebookIcon, MailIcon, PhoneIcon } from './icons/Icons'

export default function Topbar() {
  return (
    <div className="bg-ink-900 text-white text-xs sm:text-sm" style={{ backgroundColor: '#0d1224' }}>
      <div className="container-x py-2 flex flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="https://www.facebook.com/sahajhost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-brand-500 transition-colors shrink-0"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <span className="hidden sm:inline text-white/70">Innovative Hosting · Made in India</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          <a
            href="tel:+919432556920"
            aria-label="Call us"
            className="inline-flex items-center gap-2 hover:text-brand-200 transition-colors shrink-0"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>+91 94 3255 6920</span>
          </a>
          <a
            href="mailto:male69calcutta@gmail.com"
            aria-label="Email us"
            className="inline-flex items-center gap-2 hover:text-brand-200 transition-colors shrink-0"
          >
            <MailIcon className="w-4 h-4" />
            <span className="hidden sm:inline">male69calcutta@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}
