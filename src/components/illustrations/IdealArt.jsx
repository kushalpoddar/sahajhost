export default function IdealArt({ className = 'w-full h-auto' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 380"
      role="img"
      aria-label="Performance and tuned hosting stack"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ia-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5172ff" />
          <stop offset="100%" stopColor="#2c43b8" />
        </linearGradient>
      </defs>

      <circle cx="240" cy="190" r="170" fill="#ffffff" opacity=".5" />
      <circle cx="240" cy="190" r="130" fill="#ffffff" opacity=".75" />

      {/* Speedometer */}
      <g transform="translate(120 80)">
        <rect width="240" height="220" rx="22" fill="url(#ia-card)" />
        {/* Gauge arc bg */}
        <path
          d="M40 150 a 80 80 0 0 1 160 0"
          fill="none"
          stroke="#ffffff"
          strokeOpacity=".25"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Gauge arc fg */}
        <path
          d="M40 150 a 80 80 0 0 1 130 -55"
          fill="none"
          stroke="#16c784"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Needle */}
        <g transform="translate(120 150) rotate(-30)">
          <rect x="-2" y="-70" width="4" height="76" rx="2" fill="#ffffff" />
          <circle r="9" fill="#ffffff" />
          <circle r="4" fill="#5172ff" />
        </g>
        {/* Label */}
        <text x="120" y="190" textAnchor="middle" fontFamily="Quicksand" fontSize="22" fontWeight="800" fill="#ffffff">99.5%</text>
        <text x="120" y="208" textAnchor="middle" fontFamily="Quicksand" fontSize="11" fontWeight="600" fill="#ffffff" opacity=".8">UPTIME GUARANTEED</text>
      </g>

      {/* Floating chips */}
      <g transform="translate(40 60)">
        <rect width="120" height="36" rx="18" fill="#ffffff" stroke="#b3a3ff" />
        <circle cx="20" cy="18" r="6" fill="#16c784" />
        <text x="34" y="22" fontFamily="Quicksand" fontSize="12" fontWeight="700" fill="#0d1224">NVMe Storage</text>
      </g>

      <g transform="translate(330 50)">
        <rect width="120" height="36" rx="18" fill="#ffffff" stroke="#b3a3ff" />
        <rect x="14" y="13" width="10" height="10" rx="2" fill="#5172ff" />
        <text x="34" y="22" fontFamily="Quicksand" fontSize="12" fontWeight="700" fill="#0d1224">CentOS 8</text>
      </g>

      <g transform="translate(60 320)">
        <rect width="160" height="36" rx="18" fill="#ffffff" stroke="#b3a3ff" />
        <text x="20" y="22" fontFamily="Quicksand" fontSize="12" fontWeight="700" fill="#0d1224">Intel Xeon E3v6 · 3.7 GHz</text>
      </g>

      <g transform="translate(290 320)">
        <rect width="150" height="36" rx="18" fill="#ffffff" stroke="#b3a3ff" />
        <text x="20" y="22" fontFamily="Quicksand" fontSize="12" fontWeight="700" fill="#0d1224">DirectAdmin Panel</text>
      </g>
    </svg>
  )
}
