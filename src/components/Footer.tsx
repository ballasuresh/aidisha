import { navLinks } from "../data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="font-serif mt-8 max-w-sm text-[28px] leading-tight text-parchment">
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
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-mist/55 uppercase">Institute</p>
            <ul className="mt-5 space-y-2.5 text-parchment/75">
              <li>Live studio · 3–4 / week</li>
              <li>70 directed hours</li>
              <li>Hackathons · internships</li>
              <li>India · Remote seats</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] tracking-[0.18em] text-mist/55 uppercase sm:flex-row">
          <p>© {new Date().getFullYear()} AI DISHA Institute. All rights reserved.</p>
          <p>Direction, not content.</p>
        </div>
      </div>
    </footer>
  );
}
