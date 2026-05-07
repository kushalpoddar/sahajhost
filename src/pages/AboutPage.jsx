import { usePageTitle } from '../hooks/usePageTitle'

export default function AboutPage() {
  usePageTitle('About us · SahajHost')

  return (
    <div className="gradient-soft py-14 sm:py-20">
      <div className="container-x max-w-3xl">
        <h1 className="text-3xl sm:text-4xl text-ink-900">About SahajHost</h1>
        <p className="mt-4 text-lg text-ink-500">
          SahajHost offers shared web hosting built on a modern Apache + NGINX + MySQL 8 stack,
          NVMe storage, and DirectAdmin — designed for reliability and clarity, not hype.
        </p>
        <div className="mt-10 space-y-4 text-ink-700 leading-relaxed">
          <p>
            We focus on straightforward plans, honest uptime targets, and support you can reach by
            email or phone. Our infrastructure is hosted in India to keep latency low for local
            sites and businesses.
          </p>
          <p>
            Whether you are launching a blog, a small business site, or a client project, we aim to
            be a hosting partner you do not have to think about every day.
          </p>
        </div>
      </div>
    </div>
  )
}
