import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <Reveal>
          <p className="font-mono text-[10px] font-medium tracking-[0.32em] text-gold uppercase">10 — Investment</p>
          <h2 className="font-serif mt-5 text-[40px] leading-[1.08] sm:text-5xl lg:text-[58px]">
            International-grade training.
            <em className="text-gold-2"> Accessible tuition.</em>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
            Two cohorts every month. Intimate enough to be coached, large enough to be a network. Extended ecosystem engagement continues after the 45-day core.
          </p>
          <ul className="mt-8 space-y-3 font-mono text-[12px] tracking-[0.06em] text-mist">
            <li>— Cohorts of 25 to 100 learners</li>
            <li>— Live sessions, workshops, and hackathons included</li>
            <li>— Internship desk and career studio in the same arc</li>
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <div className="border border-gold/35 bg-ink-3 p-8 sm:p-11">
            <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">Indicative tuition</p>
            <p className="font-serif mt-7 text-[52px] leading-none text-parchment sm:text-6xl">
              ₹5,000
              <span className="text-2xl text-mist"> – </span>
              ₹10,000
            </p>
            <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-mist uppercase">per student · per cohort</p>
            <div className="gold-rule my-8" />
            <p className="text-sm leading-relaxed text-mist">
              Final fee depends on batch, campus partnership, and scholarship. Apply and an admissions coordinator will confirm your seat and amount.
            </p>
            <a href="#apply" className="btn btn-gold mt-8">
              Request a seat
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
