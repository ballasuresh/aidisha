import { contact } from "../data";
import { useI18n } from "../i18n";
import { Logo } from "./Logo";

export function Footer() {
  const { t, nav } = useI18n();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="font-serif mt-8 text-[26px] leading-tight text-parchment">{t.footerLine}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-mist/55 uppercase">{t.explore}</p>
            <ul className="mt-5 space-y-2.5">
              {nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-parchment/80 transition hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#studio" className="text-parchment/80 transition hover:text-gold">
                  {t.liveAgent}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-mist/55 uppercase">{t.institute}</p>
            <ul className="mt-5 space-y-2.5 text-parchment/75">
              <li>Live studio · 3–4 / week</li>
              <li>70 directed hours</li>
              <li>Hackathons · internships</li>
              <li>India · Remote seats</li>
              <li>English · Global standard</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-mist/55 uppercase">{t.contact}</p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a href={`mailto:${contact.email}`} className="text-parchment/80 hover:text-gold">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.github} className="text-parchment/80 hover:text-gold" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={contact.prospectus} className="text-parchment/80 hover:text-gold" download>
                  {t.prospectus}
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-parchment/80 hover:text-gold">
                  {t.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="privacy" className="mt-16 max-w-3xl border-t border-line pt-10 text-sm leading-relaxed text-mist/70">
          <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">{t.privacy}</p>
          <p className="mt-3">{t.privacyBody}</p>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] tracking-[0.18em] text-mist/55 uppercase sm:flex-row">
          <p>© {new Date().getFullYear()} AI DISHA Institute. All rights reserved.</p>
          <p>Direction, not content. · India · {contact.site.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
