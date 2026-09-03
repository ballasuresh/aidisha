import { useEffect, useState } from "react";
import { useI18n } from "../i18n";

const OPEN = new Date("2026-09-18T00:00:00+05:30").getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function LivePill() {
  const { t } = useI18n();
  const [left, setLeft] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = Math.max(0, OPEN - Date.now());
      const days = Math.floor(d / 86400000);
      const hrs = Math.floor((d % 86400000) / 3600000);
      const mins = Math.floor((d % 3600000) / 60000);
      setLeft(`${days}d ${pad(hrs)}h ${pad(mins)}m`);
    };
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-40 hidden items-center gap-3 border border-line bg-ink/80 px-4 py-2.5 backdrop-blur-md md:flex">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
      </span>
      <p className="font-mono text-[10px] tracking-[0.14em] text-mist uppercase">
        {t.livePill} · {left} · {t.seats}
      </p>
    </div>
  );
}
