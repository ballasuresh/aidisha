import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useI18n } from "../i18n";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const { lang, setLang, t, nav } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          open
            ? "border-b border-line bg-ink"
            : scrolled
              ? "border-b border-line bg-ink/80 backdrop-blur-xl"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#top" onClick={() => setOpen(false)} aria-label={`AI DISHA ${t.institute}`}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-[11px] tracking-[0.16em] uppercase transition ${
                  active === link.href ? "text-gold" : "text-mist hover:text-parchment"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className="font-mono text-[10px] tracking-[0.18em] text-mist uppercase hover:text-parchment"
              onClick={() => window.dispatchEvent(new Event("aidisha-palette"))}
            >
              {t.hint}
            </button>
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="font-mono text-[10px] tracking-[0.18em] text-gold uppercase"
              aria-label={t.toggleLang}
            >
              {lang === "en" ? "HI" : "EN"}
            </button>
            <a href="#apply" className="btn btn-gold !px-4 !py-2.5">
              {t.apply}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="font-mono text-[10px] tracking-[0.18em] text-gold uppercase"
            >
              {lang === "en" ? "HI" : "EN"}
            </button>
            <button
              type="button"
              className="relative z-50 grid h-10 w-10 place-items-center"
              aria-label={open ? t.closeMenu : t.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex w-5 flex-col gap-1.5">
                <span className={`h-px bg-parchment transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
                <span className={`h-px bg-parchment transition ${open ? "opacity-0" : ""}`} />
                <span className={`h-px bg-parchment transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 top-20 z-40 bg-ink px-6 py-12 lg:hidden">
          <nav className="flex h-full flex-col gap-5">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-serif text-5xl text-parchment"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#apply" onClick={() => setOpen(false)} className="btn btn-gold mt-auto mb-10 w-fit">
              {t.apply}
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
