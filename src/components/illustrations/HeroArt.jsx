export default function HeroArt({ className = 'w-full h-auto' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 560 460"
      role="img"
      aria-label="Hosting servers and global delivery illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ha-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6f3ff" />
          <stop offset="100%" stopColor="#e8e2ff" />
        </linearGradient>
        <linearGradient id="ha-server" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5172ff" />
          <stop offset="100%" stopColor="#2c43b8" />
        </linearGradient>
        <linearGradient id="ha-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Backdrop blob */}
      <path
        d="M40 250c0-130 110-220 240-220s240 70 240 200-90 200-220 200S40 380 40 250z"
        fill="url(#ha-bg)"
      />

      {/* Floating ring */}
      <circle cx="120" cy="110" r="42" fill="none" stroke="#b3a3ff" strokeWidth="2" strokeDasharray="3 6" />
      <circle cx="470" cy="370" r="28" fill="none" stroke="#5172ff" strokeWidth="2" strokeDasharray="3 6" />

      {/* Cloud */}
      <g transform="translate(370 90)">
        <path
          d="M30 40c-12 0-22 8-25 19-9 1-15 8-15 17 0 10 8 17 18 17h70c12 0 22-9 22-21s-10-21-22-21c-2 0-4 0-6 1-3-7-12-12-21-12-9 0-17 5-21 0z"
          fill="#ffffff"
          stroke="#b3a3ff"
          strokeWidth="2"
        />
      </g>

      {/* Earth */}
      <g transform="translate(60 280)">
        <circle cx="50" cy="50" r="50" fill="#5172ff" />
        <path
          d="M10 40c20 10 50 0 70 14M5 60c20-6 50 6 80-2M20 25c10 6 30 4 50-2M30 80c10-2 24 4 38 0"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          opacity=".7"
        />
      </g>

      {/* Main server stack */}
      <g transform="translate(220 130)">
        <rect x="0" y="0" width="180" height="220" rx="18" fill="url(#ha-server)" />
        {/* highlight */}
        <rect x="0" y="0" width="180" height="80" rx="18" fill="url(#ha-glow)" opacity=".25" />
        {/* rack rows */}
        {[0, 1, 2, 3].map((r) => (
          <g key={r} transform={`translate(16 ${24 + r * 48})`}>
            <rect width="148" height="32" rx="8" fill="#ffffff" opacity=".15" />
            <circle cx="14" cy="16" r="4" fill="#16c784" />
            <circle cx="28" cy="16" r="4" fill="#ffffff" opacity=".7" />
            <rect x="44" y="11" width="80" height="4" rx="2" fill="#ffffff" opacity=".55" />
            <rect x="44" y="19" width="50" height="4" rx="2" fill="#ffffff" opacity=".35" />
          </g>
        ))}
        {/* base shadow */}
        <ellipse cx="90" cy="240" rx="120" ry="14" fill="#5172ff" opacity=".25" />
      </g>

      {/* Connecting lines */}
      <path
        d="M140 320 Q 220 360 310 360"
        fill="none"
        stroke="#5172ff"
        strokeWidth="2"
        strokeDasharray="4 6"
      />
      <path
        d="M410 130 Q 360 160 320 200"
        fill="none"
        stroke="#5172ff"
        strokeWidth="2"
        strokeDasharray="4 6"
      />

      {/* Floating cards */}
      <g transform="translate(40 130)">
        <rect width="140" height="56" rx="14" fill="#ffffff" stroke="#e8e2ff" />
        <circle cx="22" cy="28" r="12" fill="#16c784" opacity=".15" />
        <path d="M16 28l5 5 9-10" fill="none" stroke="#16c784" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="42" y="18" width="74" height="6" rx="3" fill="#0d1224" />
        <rect x="42" y="30" width="50" height="5" rx="2" fill="#5b6182" opacity=".6" />
      </g>

      <g transform="translate(420 220)">
        <rect width="120" height="56" rx="14" fill="#ffffff" stroke="#e8e2ff" />
        <rect x="14" y="14" width="28" height="28" rx="8" fill="#5172ff" />
        <text x="28" y="33" textAnchor="middle" fontFamily="Quicksand" fontSize="14" fontWeight="700" fill="#fff">99.5%</text>
        <rect x="50" y="18" width="58" height="6" rx="3" fill="#0d1224" />
        <rect x="50" y="30" width="40" height="5" rx="2" fill="#5b6182" opacity=".6" />
      </g>
    </svg>
  )
}
