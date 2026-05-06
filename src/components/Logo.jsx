export default function Logo({ className = 'h-10 w-auto' }) {
  return (
    <img
      src="/logo.svg"
      alt="SahajHost"
      width="250"
      height="56"
      decoding="async"
      className={className}
    />
  )
}
