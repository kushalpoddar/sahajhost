export default function Logo({
  className = 'h-10 w-auto',
  showWordmark = true,
  variant = 'light', // 'light' = on white bg, 'dark' = on dark bg
}) {
  const inkPrimary = variant === 'dark' ? '#ffffff' : '#0d1224'
  const inkMuted = variant === 'dark' ? 'rgba(255,255,255,0.7)' : '#5b6182'

  return (
    <svg
      className={className}
      viewBox="0 0 260 56"
      role="img"
      aria-label="SahajHost — सहज Host"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SahajHost</title>

      <defs>
        <linearGradient id="lg-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5172ff" />
          <stop offset="55%" stopColor="#3b58e6" />
          <stop offset="100%" stopColor="#2c43b8" />
        </linearGradient>
        <linearGradient id="lg-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lg-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* Mark */}
      <g>
        {/* base tile */}
        <rect x="2" y="4" width="48" height="48" rx="14" fill="url(#lg-bg)" />
        {/* glossy highlight */}
        <rect x="2" y="4" width="48" height="22" rx="14" fill="url(#lg-shine)" />

        {/* stacked layer bars (server tiers, ascending) */}
        <rect x="11" y="14" width="22" height="6" rx="3" fill="url(#lg-bar)" />
        <rect x="11" y="25" width="30" height="6" rx="3" fill="#ffffff" opacity="0.9" />
        <rect x="11" y="36" width="26" height="6" rx="3" fill="#ffffff" opacity="0.7" />

        {/* live status dot */}
        <circle cx="42" cy="17" r="3" fill="#16c784" />
        <circle cx="42" cy="17" r="6" fill="#16c784" opacity="0.25" />
      </g>

      {showWordmark && (
        <g>
          {/* "सहज" + "Host" wordmark, vertically centered with the mark */}
          <text
            x="62"
            y="30"
            dominantBaseline="middle"
            fontFamily="'Noto Sans Devanagari', system-ui, sans-serif"
            fontSize="26"
            fontWeight="700"
            fill={inkPrimary}
          >
            सहज
            <tspan
              dx="6"
              fontFamily="Quicksand, system-ui, sans-serif"
              fontSize="26"
              fontWeight="800"
              fill="#5172ff"
              letterSpacing="-0.5"
            >
              Host
            </tspan>
          </text>

          {/* tagline */}
          <text
            x="62"
            y="46"
            fontFamily="Quicksand, system-ui, sans-serif"
            fontSize="9"
            fontWeight="700"
            fill={inkMuted}
            letterSpacing="3"
          >
            INNOVATIVE HOSTING
          </text>
        </g>
      )}
    </svg>
  )
}
