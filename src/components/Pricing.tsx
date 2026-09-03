import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function Pricing() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <Reveal>
          <p className="font-mono text-[10px] font-medium tracking-[0.32em] text-gold uppercase">{t.investKicker}</p>
          <h2 className="font-serif mt-5 text-[40px] leading-[1.08] sm:text-5xl lg:text-[58px]">
            {t.investTitleA}
            <em className="text-gold-2"> {t.investTitleB}</em>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">{t.investBody}</p>
          <ul className="mt-8 space-y-3 font-mono text-[12px] tracking-[0.06em] text-mist">
            <li>{t.invest1}</li>
            <li>{t.invest2}</li>
            <li>{t.invest3}</li>
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <div className="border border-gold/35 bg-ink-3 p-8 sm:p-11">
            <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{t.tuitionKicker}</p>
            <p className="font-serif mt-7 text-[52px] leading-none text-parchment sm:text-6xl">
              ₹5,000
              <span className="text-2xl text-mist"> – </span>
              ₹10,000
            </p>
            <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-mist uppercase">{t.tuitionMeta}</p>
            <div className="gold-rule my-8" />
            <p className="text-sm leading-relaxed text-mist">{t.tuitionNote}</p>
            <a href="#apply" className="btn btn-gold mt-8">
              {t.requestSeat}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
