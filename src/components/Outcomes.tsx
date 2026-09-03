import { assessment, certRules, outputs } from "../data";
import { useI18n } from "../i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Outcomes() {
  const { t, tx } = useI18n();
  return (
    <section id="outcomes" className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading kicker={t.proofKicker} title={t.proofTitle} />
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outputs.map((item, i) => (
            <Reveal key={item.title.en} delay={i * 60}>
              <article className="border border-line p-7">
                <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">
                  {t.outputLabel} 0{i + 1}
                </p>
                <h3 className="font-serif mt-4 text-2xl text-parchment">{tx(item.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{tx(item.body)}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="border border-line p-8 lg:p-10">
              <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">{t.assessKicker}</p>
              <h3 className="font-serif mt-3 text-3xl">{t.assessTitle}</h3>
              <ul className="mt-8 space-y-5">
                {assessment.map((row) => (
                  <li key={row.label.en} className="flex items-center justify-between border-b border-line pb-4">
                    <span className="text-mist">{tx(row.label)}</span>
                    <span className="font-serif text-2xl text-parchment">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="border border-line bg-ink-3 p-8 lg:p-10">
              <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">{t.certKicker}</p>
              <h3 className="font-serif mt-3 text-3xl">{t.certTitle}</h3>
              <ul className="mt-8 space-y-4">
                {certRules.map((rule) => (
                  <li key={rule.en} className="flex gap-3 text-[15px] leading-relaxed text-mist">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {tx(rule)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 border border-gold/35 bg-ink-3 p-8 lg:flex lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-xl">
              <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{t.certCardKicker}</p>
              <h3 className="font-serif mt-3 text-3xl text-parchment">{t.certCardTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{t.certCardBody}</p>
            </div>
            <p className="font-serif mt-8 text-6xl text-gold/40 lg:mt-0">45</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
