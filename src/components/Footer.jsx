import Logo from './Logo'
import { FacebookIcon, MailIcon, PhoneIcon } from './icons/Icons'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(180deg, #0d1224 0%, #16245e 100%)' }}
    >
      <div className="container-x py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="bg-white inline-block rounded-xl p-3">
            <Logo className="h-9 w-auto" />
          </div>
          <p className="mt-5 text-white/75 max-w-md">
            Innovative shared hosting on Apache + NGINX + MySQL 8 with NVMe storage,
            DirectAdmin and 99.5% uptime — at a price that respects your budget.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.facebook.com/sahajhost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-500 transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:male69calcutta@gmail.com"
              aria-label="Email us"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-500 transition-colors"
            >
              <MailIcon className="w-4 h-4" />
            </a>
            <a
              href="tel:+919432556920"
              aria-label="Call us"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-500 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-white/75">
            <li><a className="hover:text-white" href="/#solution">Solution</a></li>
            <li><a className="hover:text-white" href="/#stack">Stack</a></li>
            <li><a className="hover:text-white" href="/#plans">Plans</a></li>
            <li><a className="hover:text-white" href="/#vps">Managed VPS</a></li>
            <li><a className="hover:text-white" href="/#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
            Legal
          </h4>
          <ul className="mt-4 space-y-2 text-white/75">
            <li><a className="hover:text-white" href="/aboutus">About us</a></li>
            <li><a className="hover:text-white" href="/contact-us">Contact us</a></li>
            <li><a className="hover:text-white" href="/tos">Terms of Service</a></li>
            <li><a className="hover:text-white" href="/privacy">Privacy Policy</a></li>
            <li><a className="hover:text-white" href="/refund">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <span>© {YEAR} SahajHost. All rights reserved.</span>
          <span>Made with care in India.</span>
        </div>
      </div>
    </footer>
  )
}
