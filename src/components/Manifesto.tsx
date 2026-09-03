import { audiences, pillars } from "../data";
import { useI18n } from "../i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Manifesto() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase">{t.manifestoKicker}</p>
          <blockquote className="font-serif mt-8 max-w-4xl text-[36px] leading-[1.15] tracking-tight text-parchment sm:text-5xl lg:text-[64px]">
            {t.manifestoA}
            <em className="mt-2 block text-gold-2"> {t.manifestoB}</em>
          </blockquote>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-mist">{t.manifestoBody}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Audience() {
  const { t, tx } = useI18n();
  return (
    <section id="program" className="bg-parchment text-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading light kicker={t.programKicker} title={t.programTitle} />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">{t.programBody}</p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-3">
          {audiences.map((item, i) => (
            <Reveal key={item.title.en} delay={i * 90}>
              <article className="h-full bg-paper p-9 lg:p-10">
                <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">0{i + 1}</p>
                <h3 className="font-serif mt-6 text-[32px] leading-tight">{tx(item.title)}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/60">{tx(item.body)}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title.en} delay={i * 70}>
              <article className="h-full bg-paper p-9 lg:min-h-[240px] lg:p-10">
                <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{pillar.index} · {t.method}</p>
                <h3 className="font-serif mt-6 text-[28px] leading-tight">{tx(pillar.title)}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/60">{tx(pillar.body)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
