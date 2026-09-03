import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "../i18n";

type Item = { href: string; label: string; k: string; download?: boolean };

export function CommandPalette() {
  const { t, lang, setLang, nav } = useI18n();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [hi, setHi] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(() => {
    const base: Item[] = [
      ...nav.map((l) => ({ href: l.href, label: l.label, k: "" })),
      { href: "#studio", label: t.paletteStudio, k: "S" },
      { href: "#apply", label: t.paletteApply, k: "A" },
      { href: "/programme.pdf", label: t.palettePdf, k: "P", download: true },
      {
        href: "#lang",
        label: lang === "en" ? "Switch to हिन्दी" : "Switch to English",
        k: "L",
      },
    ];
    const n = q.trim().toLowerCase();
    return n ? base.filter((i) => i.label.toLowerCase().includes(n)) : base;
  }, [q, lang, nav, t]);

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
      setHi(0);
      requestAnimationFrame(() => input.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  function go(item: Item) {
    if (item.href === "#lang") {
      setLang(lang === "en" ? "hi" : "en");
      setOpen(false);
      return;
    }
    setOpen(false);
    if (item.download) {
      window.location.href = item.href;
      return;
    }
    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
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
          onChange={(e) => {
            setQ(e.target.value);
            setHi(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setHi((i) => Math.min(items.length - 1, i + 1));
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              setHi((i) => Math.max(0, i - 1));
            }
            if (e.key === "Enter" && items[hi]) {
              e.preventDefault();
              go(items[hi]);
            }
          }}
          placeholder={`${t.search}…`}
          className="w-full border-b border-line bg-transparent px-5 py-4 text-[15px] text-parchment outline-none"
        />
        <ul className="max-h-[50vh] overflow-auto py-2">
          {items.map((item, i) => (
            <li key={item.href + item.label}>
              <button
                type="button"
                onClick={() => go(item)}
                className={`flex w-full items-center justify-between px-5 py-3 text-left ${
                  i === hi ? "bg-ink-3 text-parchment" : "text-parchment hover:bg-ink-3"
                }`}
              >
                <span>{item.label}</span>
                {item.k ? <span className="font-mono text-[10px] text-gold">{item.k}</span> : null}
              </button>
            </li>
          ))}
        </ul>
        <p className="border-t border-line px-5 py-2 font-mono text-[10px] tracking-[0.16em] text-mist/50 uppercase">
          {t.hint} · ↑↓ · Enter · Esc
        </p>
      </div>
    </div>
  );
}
