import { faculty } from "../data";
import { useI18n } from "../i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Faculty() {
  const { t, tx } = useI18n();
  return (
    <section id="faculty" className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading kicker={t.facultyKicker} title={t.facultyTitle} />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{t.facultyBody}</p>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
          {faculty.map((person, i) => (
            <Reveal key={person.name.en} delay={i * 80}>
              <article className="h-full bg-ink-2 p-8 lg:p-10">
                <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{tx(person.chair)}</p>
                <h3 className="font-serif mt-6 text-3xl text-parchment">{tx(person.name)}</h3>
                <p className="mt-2 text-sm text-gold-2">{tx(person.title)}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-mist">{tx(person.note)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
