export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center ${className}`} aria-label="Muser">
      <svg
        viewBox="0 0 60 60"
        className="absolute -left-[0.3em] top-1/2 h-[1.9em] w-auto -translate-y-1/2"
        aria-hidden
      >
        <ellipse
          cx="30"
          cy="30"
          rx="27"
          ry="13"
          transform="rotate(-55 30 30)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
      <span
        aria-hidden
        className="relative font-display text-[1em] leading-none font-black italic tracking-tight [font-stretch:115%]"
      >
        muser
      </span>
    </span>
  );
}
