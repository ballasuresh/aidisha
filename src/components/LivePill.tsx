export function LivePill() {
  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-40 hidden items-center gap-3 border border-line bg-ink/80 px-4 py-2.5 backdrop-blur-md md:flex">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
      </span>
      <p className="font-mono text-[10px] tracking-[0.16em] text-mist uppercase">
        Live · Cohort 07 · 18 Sep 2026 · 14 seats
      </p>
    </div>
  );
}
