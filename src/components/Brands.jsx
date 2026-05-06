const BRANDS = [
  { name: 'Linux', label: 'Linux' },
  { name: 'CentOS', label: 'CentOS 8' },
  { name: 'Apache', label: 'Apache' },
  { name: 'NGINX', label: 'NGINX' },
  { name: 'MySQL', label: 'MySQL 8' },
  { name: 'PHP', label: 'PHP 8' },
  { name: 'NVMe', label: 'NVMe' },
  { name: "Let's Encrypt", label: "Let's Encrypt SSL" },
  { name: 'DirectAdmin', label: 'DirectAdmin' },
]

export default function Brands() {
  return (
    <section id="brands" className="py-16 sm:py-20 bg-white">
      <div className="container-x text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-brand-700">
          Open-source first
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-ink-900">
          Built with the most updated Linux &amp; supported applications
        </h2>
        <p className="mt-2 text-ink-500 max-w-2xl mx-auto" style={{ color: '#5b6182' }}>
          Our web servers are largely built on free &amp; open sources for better and
          stable performance.
        </p>

        <ul className="mt-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {BRANDS.map((b) => (
            <li
              key={b.name}
              className="group flex items-center justify-center px-3 py-4 rounded-2xl bg-brand-50 border border-brand-100 hover:bg-white hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/10 transition-all"
            >
              <span className="text-sm font-extrabold text-ink-700 group-hover:text-brand-700" style={{ color: 'inherit' }}>
                {b.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
