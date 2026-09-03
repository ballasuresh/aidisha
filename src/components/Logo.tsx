export function Logo({ inverted = false }: { inverted?: boolean }) {
  const mark = inverted ? "border-ink/70" : "border-gold/80";
  const dot = inverted ? "bg-ink" : "bg-gold";
  const word = inverted ? "text-ink" : "text-parchment";
  const sub = inverted ? "text-ink/45" : "text-mist/70";

  return (
    <span className="flex items-center gap-3">
      <span className="relative grid h-8 w-8 place-items-center">
        <span className={`absolute inset-0 rotate-45 border ${mark}`} />
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      </span>
      <span className="leading-none">
        <span className={`block text-[13px] font-semibold tracking-[0.34em] ${word}`}>AI DISHA</span>
        <span className={`mt-1 block font-mono text-[9px] tracking-[0.42em] uppercase ${sub}`}>Institute</span>
      </span>
    </span>
  );
}
