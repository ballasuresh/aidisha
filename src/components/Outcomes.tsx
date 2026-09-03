import { assessment, certRules, outputs } from "../data";
import { Reveal, SectionHeading } from "./Reveal";

export function Outcomes() {
  return (
    <section id="outcomes" className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading kicker="08 — Proof" title="Proof of work, not a certificate on a wall." />
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outputs.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="border border-line p-7">
                <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">Output 0{i + 1}</p>
                <h3 className="font-serif mt-4 text-2xl text-parchment">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="border border-line p-8 lg:p-10">
              <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">Assessment</p>
              <h3 className="font-serif mt-3 text-3xl">How you are evaluated</h3>
              <ul className="mt-8 space-y-5">
                {assessment.map((row) => (
                  <li key={row.label} className="flex items-center justify-between border-b border-line pb-4">
                    <span className="text-mist">{row.label}</span>
                    <span className="font-serif text-2xl text-parchment">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="border border-line bg-ink-3 p-8 lg:p-10">
              <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">Certification</p>
              <h3 className="font-serif mt-3 text-3xl">Earned, not issued</h3>
              <ul className="mt-8 space-y-4">
                {certRules.map((rule) => (
                  <li key={rule} className="flex gap-3 text-[15px] leading-relaxed text-mist">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
