import { useEffect, useState } from "react";
import { useI18n } from "../i18n";

export function Preloader() {
  const { t } = useI18n();
  const [fade, setFade] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const a = window.setTimeout(() => setFade(true), 1700);
    const b = window.setTimeout(() => setGone(true), 2400);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex flex-col items-center justify-center bg-ink transition-opacity duration-700 ${
        fade ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <p className="font-mono text-[10px] tracking-[0.5em] text-gold uppercase" style={{ animation: "mark-in 0.9s ease both" }}>
        AI DISHA
      </p>
      <span
        className="gold-rule mt-6 w-40 origin-center"
        style={{ animation: "line-grow 0.8s 0.25s cubic-bezier(0.22,1,0.36,1) both" }}
      />
      <p className="font-serif mt-8 text-4xl italic text-parchment/85" style={{ animation: "rise 0.9s 0.55s both" }}>
        {t.institute}
      </p>
    </div>
  );
}
