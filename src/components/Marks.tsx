export function Compass({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 520" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="needle" x1="260" y1="46" x2="260" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EAD7A2" />
          <stop offset="1" stopColor="#C9A45B" />
        </linearGradient>
      </defs>
      <circle cx="260" cy="260" r="248" stroke="rgba(201,164,91,0.2)" strokeWidth="1" />
      <circle cx="260" cy="260" r="188" stroke="rgba(246,241,232,0.1)" strokeWidth="1" />
      <circle cx="260" cy="260" r="118" stroke="rgba(201,164,91,0.32)" strokeWidth="1" />
      <circle cx="260" cy="260" r="42" stroke="rgba(234,215,162,0.55)" strokeWidth="1.2" />
      <g stroke="rgba(246,241,232,0.14)" strokeWidth="1">
        <line x1="260" y1="12" x2="260" y2="508" />
        <line x1="12" y1="260" x2="508" y2="260" />
        <line x1="78" y1="78" x2="442" y2="442" />
        <line x1="442" y1="78" x2="78" y2="442" />
      </g>
      <polygon points="260,46 274,250 260,260 246,250" fill="url(#needle)" />
      <polygon points="260,474 246,270 260,260 274,270" fill="#F6F1E8" opacity="0.5" />
      <polygon points="46,260 250,246 260,260 250,274" fill="#F6F1E8" opacity="0.24" />
      <polygon points="474,260 270,274 260,260 270,246" fill="#F6F1E8" opacity="0.24" />
      <circle cx="260" cy="260" r="8" fill="#C9A45B" />
      <text x="260" y="34" textAnchor="middle" fill="#EAD7A2" fontSize="13" fontFamily="IBM Plex Mono, monospace" letterSpacing="5">
        N
      </text>
    </svg>
  );
}

export function StarField() {
  const stars = [
    [8, 12],
    [18, 38],
    [72, 8],
    [88, 28],
    [42, 18],
    [62, 48],
    [28, 62],
    [91, 71],
    [12, 82],
    [54, 78],
  ];

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 0.28 : 0.18} fill="#EAD7A2" opacity={0.3 + (i % 4) * 0.1} />
      ))}
    </svg>
  );
}
