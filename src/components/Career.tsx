import { companies, pipeline } from "../data";
import { Reveal, SectionHeading } from "./Reveal";

export function Career() {
  return (
    <section className="bg-parchment text-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading light kicker="09 — After the atelier" title="The classroom is not the last mile." />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Training, internal project work, internship allocation, then placement preparation. Indicative destination organisations include services majors and product companies — including aspirational tracks toward global teams.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <li className="h-full bg-paper p-7">
                <p className="font-mono text-[10px] tracking-[0.24em] text-gold uppercase">{item.step}</p>
                <h3 className="font-serif mt-5 text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-ink/10 pt-10">
            <p className="font-mono text-[10px] tracking-[0.22em] text-ink/40 uppercase">Indicative pathway</p>
            {companies.map((name) => (
              <span key={name} className="font-serif text-xl text-ink/80">
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
