export default function FaqArt({ className = 'w-full h-auto' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 460 400"
      role="img"
      aria-label="Frequently asked questions illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="faq-bubble" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f6f3ff" />
        </linearGradient>
      </defs>

      {/* Soft halo */}
      <circle cx="230" cy="200" r="160" fill="#ffffff" opacity=".18" />

      {/* Big speech bubble */}
      <g transform="translate(70 60)">
        <path
          d="M20 0h240c12 0 20 9 20 20v140c0 12-8 20-20 20h-150l-52 40v-40h-38c-12 0-20-8-20-20V20C0 9 8 0 20 0z"
          fill="url(#faq-bubble)"
          stroke="#b3a3ff"
          strokeWidth="2"
        />
        {/* Question mark */}
        <text
          x="140"
          y="115"
          textAnchor="middle"
          fontFamily="Quicksand"
          fontSize="100"
          fontWeight="800"
          fill="#5172ff"
        >
          ?
        </text>
        {/* line dots */}
        <circle cx="40" cy="160" r="3" fill="#b3a3ff" />
        <circle cx="56" cy="160" r="3" fill="#b3a3ff" />
        <circle cx="72" cy="160" r="3" fill="#b3a3ff" />
      </g>

      {/* Small bubble */}
      <g transform="translate(310 240)">
        <path
          d="M14 0h90c8 0 14 6 14 14v54c0 8-6 14-14 14h-44l-22 18v-18H14C6 82 0 76 0 68V14C0 6 6 0 14 0z"
          fill="#5172ff"
        />
        <circle cx="34" cy="40" r="4" fill="#fff" />
        <circle cx="58" cy="40" r="4" fill="#fff" />
        <circle cx="82" cy="40" r="4" fill="#fff" />
      </g>

      {/* Floating accents */}
      <circle cx="50" cy="50" r="10" fill="#ffb020" opacity=".6" />
      <rect x="380" y="60" width="20" height="20" rx="6" fill="#16c784" opacity=".7" />
      <path d="M40 360l8-8 8 8-8 8z" fill="#5172ff" opacity=".5" />
    </svg>
  )
}
