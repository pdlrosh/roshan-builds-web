const marks = [
  {
    label: "Water",
    path: "M32 8c0 0-14 15.5-14 25.2C18 41.9 24.3 48 32 48s14-6.1 14-14.8C46 23.5 32 8 32 8z",
  },
  {
    label: "Sustainability",
    path: "M18 54C18 32 30 14 50 10c2 22-10 40-32 44zm4-6c4-12 11-21 21-27",
  },
  {
    label: "Global",
    path: "M32 8a24 24 0 1 0 0 48 24 24 0 0 0 0-48zM8 32h48M32 8c-6.5 6.7-10 15-10 24s3.5 17.3 10 24c6.5-6.7 10-15 10-24s-3.5-17.3-10-24z",
  },
];

export function HeroMarks() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      {marks.map((m, i) => (
        <div key={m.label} className="flex items-center gap-1.5">
          {i > 0 ? <span className="h-px w-4 bg-gold/60 sm:w-5" /> : null}
          <span className="grid size-12 place-items-center rounded-full ring-1 ring-gold/40 sm:size-14">
            <svg
              viewBox="0 0 64 64"
              className="size-8 sm:size-9"
              fill="none"
              stroke="url(#heroGoldStroke)"
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="heroGoldStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.92 0.08 92)" />
                  <stop offset="45%" stopColor="oklch(0.78 0.12 85)" />
                  <stop offset="100%" stopColor="oklch(0.56 0.11 72)" />
                </linearGradient>
              </defs>
              <path d={m.path} />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
