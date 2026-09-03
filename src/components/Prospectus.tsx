import { assessment, certRules, contact, phases } from "../data";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function Prospectus() {
  const { t, tx } = useI18n();

  function printDoc() {
    document.body.classList.add("print-prospectus");
    window.print();
    window.setTimeout(() => document.body.classList.remove("print-prospectus"), 400);
  }

  return (
    <section id="prospectus" className="bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase">{t.prosKicker}</p>
          <h2 className="font-serif mt-5 max-w-3xl text-[40px] leading-[1.08] sm:text-5xl">{t.prosTitle}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">{t.prosBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="btn btn-gold" onClick={printDoc}>
              {t.prosPrint}
            </button>
            <a href="#apply" className="btn btn-ghost">
              {t.applyNow}
            </a>
            <a href={`mailto:${contact.email}`} className="btn btn-ghost">
              {contact.email}
            </a>
          </div>
        </Reveal>

        <article id="prospectus-sheet" className="mt-14 border border-line bg-ink p-8 sm:p-12">
          <header className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase">AI DISHA Institute</p>
              <h3 className="font-serif mt-3 text-3xl text-parchment sm:text-4xl">{t.certCardTitle}</h3>
            </div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-mist uppercase">45 days · Cohort 07 · 18 Sep 2026</p>
          </header>

          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-mist">{t.heroBody}</p>

          <h4 className="font-mono mt-12 text-[10px] tracking-[0.28em] text-gold uppercase">{t.currKicker}</h4>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {phases.map((p) => (
              <li key={p.days} className="border-b border-line pb-3">
                <span className="font-mono text-[10px] text-gold">
                  {t.days} {p.days}
                </span>
                <p className="font-serif text-xl text-parchment">{tx(p.title)}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h4 className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{t.assessKicker}</h4>
              <ul className="mt-4 space-y-3">
                {assessment.map((row) => (
                  <li key={row.label.en} className="flex justify-between border-b border-line pb-2 text-sm text-mist">
                    <span>{tx(row.label)}</span>
                    <span className="text-parchment">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{t.certKicker}</h4>
              <ul className="mt-4 space-y-3">
                {certRules.map((rule) => (
                  <li key={rule.en} className="text-sm leading-relaxed text-mist">
                    — {tx(rule)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 font-mono text-[11px] tracking-[0.12em] text-mist/70">
            {t.tuitionKicker}: ₹5,000 – ₹10,000 {t.tuitionMeta} · {contact.email}
          </p>
        </article>
      </div>
    </section>
  );
}
