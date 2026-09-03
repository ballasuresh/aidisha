import { contact, navLinks } from "../data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="font-serif mt-8 text-[26px] leading-tight text-parchment">
              Don't just learn AI. Build products and agents — then walk into the market ready.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-mist/55 uppercase">Explore</p>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-parchment/80 transition hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#studio" className="text-parchment/80 transition hover:text-gold">
                  Live agent
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-mist/55 uppercase">Institute</p>
            <ul className="mt-5 space-y-2.5 text-parchment/75">
              <li>Live studio · 3–4 / week</li>
              <li>70 directed hours</li>
              <li>Hackathons · internships</li>
              <li>India · Remote seats</li>
              <li>English · Global standard</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-mist/55 uppercase">Contact</p>
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
                  Prospectus (PDF)
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-parchment/80 hover:text-gold">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="privacy" className="mt-16 max-w-3xl border-t border-line pt-10 text-sm leading-relaxed text-mist/70">
          <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">Privacy</p>
          <p className="mt-3">
            Applications you submit are stored on your device and optionally sent by email to admissions. We collect name, contact details, and background only to allocate a cohort seat. We do not sell data. Certificates require 70% attendance and a submitted agent.
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] tracking-[0.18em] text-mist/55 uppercase sm:flex-row">
          <p>© {new Date().getFullYear()} AI DISHA Institute. All rights reserved.</p>
          <p>Direction, not content. · India · {contact.site.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
