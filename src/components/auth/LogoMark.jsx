/** The round "K" mark used above the Log in heading */
export default function LogoMark({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" className="fill-ink" />
      <path d="M11 8h3.6v6.6L20.6 8H25l-7 7.8L25.4 24H21l-6.4-6.6V24H11z" className="fill-brand" />
    </svg>
  );
}