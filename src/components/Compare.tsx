import { compareRows } from "../data";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n } from "../i18n";

export function Compare() {
  const { t, tx } = useI18n();
  return (
    <section className="bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading kicker={t.compareKicker} title={t.compareTitle} />
        </Reveal>
        <div className="mt-14 overflow-hidden border border-line">
          <div className="grid grid-cols-2 border-b border-line bg-ink-3 font-mono text-[10px] tracking-[0.22em] text-gold uppercase">
            <p className="px-6 py-3">{t.compareLeft}</p>
            <p className="px-6 py-3">{t.compareRight}</p>
          </div>
          {compareRows.map((row) => (
            <Reveal key={row.ours.en}>
              <div className="grid grid-cols-1 border-b border-line last:border-b-0 sm:grid-cols-2">
                <p className="px-6 py-5 text-[15px] leading-relaxed text-mist/70">{tx(row.usual)}</p>
                <p className="border-t border-line px-6 py-5 text-[15px] leading-relaxed text-parchment sm:border-t-0 sm:border-l">
                  {tx(row.ours)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
