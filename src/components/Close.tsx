import { contact } from "../data";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function Close() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="gold-rule" />
      <div className="mx-auto max-w-6xl px-6 py-24 text-center lg:py-32">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase">{t.closeKicker}</p>
          <h2 className="font-serif mx-auto mt-5 max-w-3xl text-[40px] leading-[1.08] sm:text-5xl lg:text-[58px]">
            {t.closeTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">{t.closeBody}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#apply" className="btn btn-gold">
              {t.applyNow}
            </a>
            <a href={contact.prospectus} className="btn btn-ghost" download>
              {t.prospectus}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
