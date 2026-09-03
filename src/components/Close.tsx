import { contact } from "../data";
import { Reveal } from "./Reveal";

export function Close() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="gold-rule" />
      <div className="mx-auto max-w-6xl px-6 py-24 text-center lg:py-32">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase">13 — Next bearing</p>
          <h2 className="font-serif mx-auto mt-5 max-w-3xl text-[40px] leading-[1.08] sm:text-5xl lg:text-[58px]">
            Forty-five days. One agent. A public trail.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Cohort 07 opens 18 September 2026. Fourteen seats on the current board. Apply, or read the prospectus first.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#apply" className="btn btn-gold">
              Apply now
            </a>
            <a href={contact.prospectus} className="btn btn-ghost" download>
              Download prospectus
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
