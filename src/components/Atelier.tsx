import { week } from "../data";
import { Reveal, SectionHeading } from "./Reveal";

export function Atelier() {
  return (
    <section className="bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading kicker="04 — Rhythm" title="How a week at the institute actually feels." />
        </Reveal>
        <div className="mt-16 divide-y divide-line border-y border-line">
          {week.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="grid gap-3 py-8 sm:grid-cols-[160px_200px_1fr] sm:items-baseline">
                <p className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">{item.when}</p>
                <h3 className="font-serif text-[28px] text-parchment">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-mist">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
