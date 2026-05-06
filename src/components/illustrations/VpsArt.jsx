export default function VpsArt({ className = 'w-full h-auto' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 380"
      role="img"
      aria-label="Managed VPS server illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vps-server" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5172ff" />
          <stop offset="100%" stopColor="#2c43b8" />
        </linearGradient>
      </defs>

      {/* Soft circle */}
      <circle cx="240" cy="190" r="160" fill="#ffffff" opacity=".55" />

      {/* Server tower */}
      <g transform="translate(150 60)">
        <rect width="180" height="260" rx="20" fill="url(#vps-server)" />
        {/* Top label */}
        <rect x="20" y="20" width="140" height="34" rx="10" fill="#ffffff" opacity=".15" />
        <text x="90" y="42" textAnchor="middle" fontFamily="Quicksand" fontSize="13" fontWeight="800" fill="#fff">VPS · NVMe</text>

        {/* RAM modules */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(20 ${72 + i * 32})`}>
            <rect width="140" height="22" rx="6" fill="#ffffff" opacity=".18" />
            <rect x="6" y="6" width="6" height="10" fill="#ffffff" opacity=".7" />
            <rect x="14" y="6" width="6" height="10" fill="#ffffff" opacity=".7" />
            <rect x="22" y="6" width="6" height="10" fill="#ffffff" opacity=".7" />
            <rect x="36" y="9" width="60" height="4" rx="2" fill="#ffffff" opacity=".5" />
            <text x="120" y="16" fontFamily="Quicksand" fontSize="9" fontWeight="700" fill="#fff" opacity=".8">2 GB</text>
          </g>
        ))}

        {/* status pills */}
        <g transform="translate(20 174)">
          <rect width="140" height="64" rx="10" fill="#ffffff" opacity=".15" />
          <circle cx="16" cy="20" r="5" fill="#16c784" />
          <text x="28" y="24" fontFamily="Quicksand" fontSize="11" fontWeight="700" fill="#fff">Online · Healthy</text>
          <rect x="12" y="38" width="116" height="6" rx="3" fill="#ffffff" opacity=".25" />
          <rect x="12" y="38" width="80" height="6" rx="3" fill="#16c784" />
          <text x="12" y="58" fontFamily="Quicksand" fontSize="9" fontWeight="700" fill="#fff" opacity=".8">CPU 64%</text>
        </g>
      </g>

      {/* Floating dashboard card */}
      <g transform="translate(40 240)">
        <rect width="160" height="86" rx="14" fill="#ffffff" stroke="#e8e2ff" />
        <text x="14" y="24" fontFamily="Quicksand" fontSize="11" fontWeight="800" fill="#0d1224">Resources</text>
        {/* mini bars */}
        <rect x="14" y="36" width="14" height="36" rx="3" fill="#5172ff" />
        <rect x="34" y="44" width="14" height="28" rx="3" fill="#8a7aff" />
        <rect x="54" y="30" width="14" height="42" rx="3" fill="#5172ff" />
        <rect x="74" y="50" width="14" height="22" rx="3" fill="#8a7aff" />
        <rect x="94" y="40" width="14" height="32" rx="3" fill="#5172ff" />
        <rect x="114" y="34" width="14" height="38" rx="3" fill="#8a7aff" />
      </g>

      {/* Settings icon card */}
      <g transform="translate(320 60)">
        <rect width="120" height="60" rx="14" fill="#ffffff" stroke="#e8e2ff" />
        <g transform="translate(20 16)">
          <circle cx="14" cy="14" r="14" fill="#e8e2ff" />
          <circle cx="14" cy="14" r="5" fill="none" stroke="#5172ff" strokeWidth="2" />
          <g stroke="#5172ff" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2v3" />
            <path d="M14 23v3" />
            <path d="M2 14h3" />
            <path d="M23 14h3" />
            <path d="M5.5 5.5l2 2" />
            <path d="M20.5 20.5l2 2" />
            <path d="M22.5 5.5l-2 2" />
            <path d="M7.5 20.5l-2 2" />
          </g>
        </g>
        <text x="60" y="34" fontFamily="Quicksand" fontSize="11" fontWeight="800" fill="#0d1224">Fully</text>
        <text x="60" y="48" fontFamily="Quicksand" fontSize="11" fontWeight="800" fill="#5172ff">Managed</text>
      </g>
    </svg>
  )
}
