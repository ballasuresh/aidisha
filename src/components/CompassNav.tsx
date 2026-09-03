import { navLinks } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import { useI18n } from "../i18n";

export function CompassNav() {
  const active = useActiveSection();
  const { t } = useI18n();
  const items = [{ href: "#top", label: "N" }, ...navLinks.map((l, i) => ({ href: l.href, label: String(i + 1) }))];

  return (
    <nav
      className="pointer-events-auto fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex"
      aria-label={t.compass}
    >
      {items.map((item) => {
        const on = active === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            title={item.href.slice(1)}
            className={`grid h-7 w-7 place-items-center font-mono text-[9px] tracking-widest transition ${
              on ? "border border-gold text-gold" : "text-mist/50 hover:text-parchment"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
