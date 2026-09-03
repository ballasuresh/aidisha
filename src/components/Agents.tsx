import { agents } from "../data";
import { useI18n } from "../i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Agents() {
  const { t, tx } = useI18n();
  return (
    <section id="agents" className="relative overflow-hidden bg-ink-2">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading kicker={t.atelierKicker} title={t.atelierTitle} />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{t.atelierBody}</p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {agents.map((agent, i) => (
            <Reveal key={agent.name.en} delay={i * 70}>
              <article className="group h-full border border-line bg-ink/40 p-8 transition hover:border-gold/40 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-3xl text-parchment">{tx(agent.name)}</h3>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-gold">0{i + 1}</span>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-mist">{tx(agent.copy)}</p>
                <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-mist/70 uppercase">{t.input}</dt>
                    <dd className="mt-1 text-parchment">{tx(agent.input)}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-mist/70 uppercase">{t.output}</dt>
                    <dd className="mt-1 text-parchment">{tx(agent.output)}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
