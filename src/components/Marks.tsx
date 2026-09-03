export function Compass({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 520" className={className} fill="none" aria-hidden="true">
      <circle cx="260" cy="260" r="248" stroke="rgba(212,175,119,0.18)" strokeWidth="1" />
      <circle cx="260" cy="260" r="188" stroke="rgba(232,224,212,0.12)" strokeWidth="1" />
      <circle cx="260" cy="260" r="118" stroke="rgba(212,175,119,0.28)" strokeWidth="1" />
      <circle cx="260" cy="260" r="42" stroke="rgba(212,175,119,0.5)" strokeWidth="1.2" />
      <g stroke="rgba(232,224,212,0.16)" strokeWidth="1">
        <line x1="260" y1="12" x2="260" y2="508" />
        <line x1="12" y1="260" x2="508" y2="260" />
        <line x1="78" y1="78" x2="442" y2="442" />
        <line x1="442" y1="78" x2="78" y2="442" />
      </g>
      <polygon points="260,46 274,250 260,260 246,250" fill="#D4AF77" />
      <polygon points="260,474 246,270 260,260 274,270" fill="#E8E0D4" opacity="0.55" />
      <polygon points="46,260 250,246 260,260 250,274" fill="#E8E0D4" opacity="0.28" />
      <polygon points="474,260 270,274 260,260 270,246" fill="#E8E0D4" opacity="0.28" />
      <circle cx="260" cy="260" r="8" fill="#D4AF77" />
      <text x="260" y="34" textAnchor="middle" fill="#C4A574" fontSize="13" fontFamily="IBM Plex Mono, monospace" letterSpacing="5">
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
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 0.28 : 0.18} fill="#E8E0D4" opacity={0.35 + (i % 4) * 0.1} />
      ))}
    </svg>
  );
}
