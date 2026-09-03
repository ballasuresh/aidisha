import { delivery } from "../data";
import { useI18n } from "../i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Delivery() {
  const { t, tx } = useI18n();
  return (
    <section className="bg-parchment text-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading light kicker={t.pedagogyKicker} title={t.pedagogyTitle} />
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {delivery.map((item, i) => (
            <Reveal key={item.title.en} delay={i * 90}>
              <article className="flex h-full flex-col border border-ink/10 bg-paper p-8">
                <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">
                  {t.format} 0{i + 1}
                </p>
                <h3 className="font-serif mt-6 text-3xl">{tx(item.title)}</h3>
                <p className="mt-2 text-sm text-ink/50">{tx(item.meta)}</p>
                <p className="mt-6 text-[15px] leading-relaxed text-ink/70">{tx(item.body)}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 border border-ink/10 bg-ink p-8 text-parchment lg:p-10">
            <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">{t.hackDesk}</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-serif text-2xl">{t.hackEntry}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{t.hackEntryBody}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl">{t.hackOut}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{t.hackOutBody}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl">{t.hackPipe}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{t.hackPipeBody}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
