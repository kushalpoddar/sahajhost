export default function StackArt({ className = 'w-full h-auto' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 380"
      role="img"
      aria-label="Apache and NGINX combination diagram"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sa-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f6f3ff" />
        </linearGradient>
      </defs>

      {/* User */}
      <g transform="translate(20 150)">
        <circle cx="40" cy="40" r="40" fill="#e8e2ff" />
        <circle cx="40" cy="32" r="14" fill="#5172ff" />
        <path d="M14 70c4-14 18-22 26-22s22 8 26 22" fill="#5172ff" />
      </g>

      {/* Arrow */}
      <path d="M110 190h60" stroke="#5172ff" strokeWidth="3" strokeLinecap="round" />
      <path d="M168 184l8 6-8 6" fill="none" stroke="#5172ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* NGINX card (front-end) */}
      <g transform="translate(180 110)">
        <rect width="150" height="160" rx="18" fill="url(#sa-card)" stroke="#5172ff" strokeWidth="2" />
        <rect x="0" y="0" width="150" height="36" rx="18" fill="#16c784" />
        <text x="75" y="24" textAnchor="middle" fontFamily="Quicksand" fontSize="14" fontWeight="800" fill="#fff">NGINX</text>
        <text x="75" y="60" textAnchor="middle" fontFamily="Quicksand" fontSize="11" fontWeight="700" fill="#5b6182">FRONT-END / PROXY</text>
        <g transform="translate(35 78)">
          {/* speed lines */}
          <path d="M0 12h60" stroke="#16c784" strokeWidth="3" strokeLinecap="round" />
          <path d="M0 24h40" stroke="#16c784" strokeWidth="3" strokeLinecap="round" opacity=".6" />
          <path d="M0 36h70" stroke="#16c784" strokeWidth="3" strokeLinecap="round" opacity=".4" />
        </g>
        <text x="75" y="148" textAnchor="middle" fontFamily="Quicksand" fontSize="10" fontWeight="600" fill="#5b6182">Speed &amp; reverse-proxy</text>
      </g>

      {/* Arrow between */}
      <path d="M340 190h40" stroke="#5172ff" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" />
      <path d="M378 184l8 6-8 6" fill="none" stroke="#5172ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Apache card (back-end) */}
      <g transform="translate(390 110)">
        <rect width="120" height="160" rx="18" fill="url(#sa-card)" stroke="#5172ff" strokeWidth="2" />
        <rect x="0" y="0" width="120" height="36" rx="18" fill="#5172ff" />
        <text x="60" y="24" textAnchor="middle" fontFamily="Quicksand" fontSize="14" fontWeight="800" fill="#fff">APACHE</text>
        <text x="60" y="60" textAnchor="middle" fontFamily="Quicksand" fontSize="11" fontWeight="700" fill="#5b6182">BACK-END</text>
        {/* feather */}
        <g transform="translate(30 76)">
          <path d="M30 0 C 18 8 8 22 6 40 C 4 56 14 60 30 56 C 46 52 58 36 60 18 C 60 8 50 -4 30 0z" fill="#5172ff" opacity=".15" />
          <path d="M30 4 C 22 12 14 26 14 42" fill="none" stroke="#5172ff" strokeWidth="2" />
        </g>
        <text x="60" y="148" textAnchor="middle" fontFamily="Quicksand" fontSize="10" fontWeight="600" fill="#5b6182">Power &amp; dynamic content</text>
      </g>

      {/* MySQL chip */}
      <g transform="translate(200 300)">
        <rect width="120" height="48" rx="14" fill="#ffffff" stroke="#5172ff" strokeWidth="2" />
        <ellipse cx="24" cy="24" rx="10" ry="5" fill="#5172ff" />
        <rect x="14" y="20" width="20" height="10" fill="#5172ff" />
        <ellipse cx="24" cy="30" rx="10" ry="5" fill="#5172ff" />
        <text x="78" y="29" textAnchor="middle" fontFamily="Quicksand" fontSize="13" fontWeight="800" fill="#0d1224">MySQL 8</text>
      </g>

      {/* Connector */}
      <path d="M255 270 v30" stroke="#5172ff" strokeWidth="2" strokeDasharray="4 5" />
    </svg>
  )
}
