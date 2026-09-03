import { phases } from "../data";
import { Reveal, SectionHeading } from "./Reveal";

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading kicker="05 — Nine phases" title="The 45-day curriculum, without the noise." />
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-sm text-sm leading-relaxed text-mist">
              Seventy guided hours. Live studio as the spine. Every phase ends in something you can show — a chatbot, a tool workflow, an agent, a capstone.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-3 bottom-3 left-[5px] hidden w-px bg-line sm:block" />
          <ol>
            {phases.map((phase, i) => (
              <Reveal key={phase.title} delay={Math.min(i * 40, 240)}>
                <li className="group relative grid gap-3 border-b border-line py-7 sm:grid-cols-[140px_1fr_1.3fr] sm:items-baseline sm:gap-8 sm:pl-10 lg:grid-cols-[150px_260px_1fr]">
                  <span className="absolute top-8 left-0 hidden h-2.5 w-2.5 border border-gold bg-ink sm:block" />
                  <span className="font-mono text-[11px] tracking-[0.22em] text-gold uppercase">Days {phase.days}</span>
                  <h3 className="font-serif text-2xl text-parchment transition group-hover:text-gold-2 sm:text-[28px]">
                    {phase.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-mist">{phase.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
