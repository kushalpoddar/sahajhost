import StackArt from './illustrations/StackArt'

const POINTS = [
  {
    title: 'Market leaders',
    body: 'Apache & NGINX are both trusted free, open-source Linux web servers — proven in production at every scale.',
  },
  {
    title: 'Apache for power',
    body: 'Battle-tested for dynamic content, modular extensions and rich .htaccess flexibility per site.',
  },
  {
    title: 'NGINX for speed',
    body: 'Lightweight event-driven engine, brilliant as a reverse proxy for static assets and concurrent traffic.',
  },
  {
    title: 'Better together',
    body: 'NGINX runs at the front handling requests, Apache serves dynamic logic at the back — the new normal globally.',
  },
]

export default function WhyApacheNginx() {
  return (
    <section
      id="stack"
      className="relative py-20 sm:py-24"
      style={{ backgroundColor: '#f6f3ff' }}
    >
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1">
          <StackArt className="w-full h-auto" />
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-700">
            Why both?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900">
            Apache + NGINX,
            <span className="text-brand-600"> together. </span>
          </h2>
          <p className="mt-4 text-lg text-ink-700 max-w-xl" style={{ color: '#2c3251' }}>
            Two market leaders, often compared as competitors, working in
            harmony — speed at the front, power at the back.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {POINTS.map((p) => (
              <li
                key={p.title}
                className="card p-5 hover:-translate-y-1 transition-transform"
              >
                <h3 className="text-base font-extrabold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed" style={{ color: '#2c3251' }}>
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
