import { tickerItems } from "../data";
import { useI18n } from "../i18n";

export function Ticker() {
  const { tx } = useI18n();
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y border-line bg-ink-2 py-3.5">
      <div className="ticker-track flex w-max gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={`${item.en}-${i}`} className="flex items-center gap-12 font-mono text-[10px] tracking-[0.32em] text-mist uppercase">
            {tx(item)}
            <span className="h-px w-6 bg-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
