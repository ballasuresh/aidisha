import { useEffect, useMemo, useRef, useState } from "react";
import { navLinks } from "../data";
import { useI18n } from "../i18n";

const extras = [
  { href: "#studio", label: "Live agent studio", k: "S" },
  { href: "#apply", label: "Apply for a seat", k: "A" },
  { href: "/programme.pdf", label: "Download prospectus", k: "P", download: true },
];

export function CommandPalette() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const items = useMemo(() => {
    const base = [
      ...navLinks.map((l) => ({ href: l.href, label: l.label, k: "" })),
      ...extras,
      {
        href: "#lang",
        label: lang === "en" ? "Switch to हिन्दी" : "Switch to English",
        k: "L",
      },
    ];
    const n = q.trim().toLowerCase();
    return n ? base.filter((i) => i.label.toLowerCase().includes(n)) : base;
  }, [q, lang]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const openPalette = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("aidisha-palette", openPalette);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("aidisha-palette", openPalette);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      requestAnimationFrame(() => input.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  function go(href: string, download?: boolean) {
    if (href === "#lang") {
      setLang(lang === "en" ? "hi" : "en");
      setOpen(false);
      return;
    }
    setOpen(false);
    if (download) {
      window.location.href = href;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95] bg-ink/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div
        className="mx-auto mt-[12vh] max-w-xl border border-line bg-ink-2 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label={t.search}
      >
        <input
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`${t.search}…`}
          className="w-full border-b border-line bg-transparent px-5 py-4 text-[15px] text-parchment outline-none"
        />
        <ul className="max-h-[50vh] overflow-auto py-2">
          {items.map((item) => (
            <li key={item.href + item.label}>
              <button
                type="button"
                onClick={() => go(item.href, "download" in item ? Boolean(item.download) : false)}
                className="flex w-full items-center justify-between px-5 py-3 text-left text-parchment hover:bg-ink-3"
              >
                <span>{item.label}</span>
                {item.k ? <span className="font-mono text-[10px] text-gold">{item.k}</span> : null}
              </button>
            </li>
          ))}
        </ul>
        <p className="border-t border-line px-5 py-2 font-mono text-[10px] tracking-[0.16em] text-mist/50 uppercase">
          {t.hint} · Esc
        </p>
      </div>
    </div>
  );
}
