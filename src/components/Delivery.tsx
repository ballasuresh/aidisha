import { delivery } from "../data";
import { Reveal, SectionHeading } from "./Reveal";

export function Delivery() {
  return (
    <section className="bg-parchment text-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading light kicker="07 — Pedagogy" title="Studio first. Recordings later, if ever." />
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {delivery.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="flex h-full flex-col border border-ink/10 bg-paper p-8">
                <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">Format 0{i + 1}</p>
                <h3 className="font-serif mt-6 text-3xl">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/50">{item.meta}</p>
                <p className="mt-6 text-[15px] leading-relaxed text-ink/70">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 border border-ink/10 bg-ink p-8 text-parchment lg:p-10">
            <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">Hackathon desk</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-serif text-2xl">Entry</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">Internal cohort and external teams. Three to five people. 24–48 hours.</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl">Output</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">Working AI prototypes. Not slide decks. Talent is identified live.</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl">Pipeline</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">Strong builds feed the internship desk. Pressure is the filter.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
