import { scale } from "../data";
import { useI18n } from "../i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Scale() {
  const { t, tx } = useI18n();
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading kicker={t.scaleKicker} title={t.scaleTitle} />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">{t.scaleBody}</p>
        </Reveal>
        <ol className="mt-16 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
          {scale.map((item, i) => (
            <Reveal key={item.phase} delay={i * 80}>
              <li className="h-full bg-ink-2 p-8 lg:p-10">
                <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{item.phase}</p>
                <h3 className="font-serif mt-5 text-3xl text-parchment">{tx(item.title)}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-mist">{tx(item.body)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="mt-8 font-mono text-[11px] tracking-[0.12em] text-mist/60">{t.ecosys}</p>
      </div>
    </section>
  );
}
