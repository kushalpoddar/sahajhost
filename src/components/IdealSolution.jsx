import IdealArt from './illustrations/IdealArt'

export default function IdealSolution() {
  return (
    <section
      id="solution"
      className="relative py-20 sm:py-24 text-white"
      style={{ background: 'linear-gradient(135deg, #5172ff 0%, #3b58e6 60%, #2c43b8 100%)' }}
    >
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-100/80">
            The Ideal Solution
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Built for performance, priced for everyone.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-brand-50/90 max-w-xl">
            <p>
              An advanced, price-sensitive shared hosting solution built on
              <strong className="text-white"> Apache + NGINX + MySQL 8 </strong>—
              a rare, out-performing combination we adopted after rigorous
              testing.
            </p>
            <p>
              Designed to solve real performance issues for passionate creators
              hosting their content on a limited budget.
            </p>
            <p className="text-brand-50/80">
              We&rsquo;re confident others will follow — keeping{' '}
              <em>price &amp; performance</em> as the benchmark.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            <div className="rounded-2xl bg-white/10 backdrop-blur p-4">
              <dt className="text-xs text-brand-50/70 font-semibold">Uptime</dt>
              <dd className="text-2xl font-extrabold mt-1">99.5%</dd>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur p-4">
              <dt className="text-xs text-brand-50/70 font-semibold">Plans from</dt>
              <dd className="text-2xl font-extrabold mt-1">₹325</dd>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur p-4">
              <dt className="text-xs text-brand-50/70 font-semibold">Refund</dt>
              <dd className="text-2xl font-extrabold mt-1">14 d</dd>
            </div>
          </dl>
        </div>

        <div className="order-1 lg:order-2">
          <IdealArt className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
