import { useEffect, useState } from "react";
import { stats } from "../data";
import { useI18n } from "../i18n";
import { Compass } from "./Marks";
import { Constellation } from "./Constellation";
import { CountUp } from "./CountUp";

export function Hero() {
  const { t, tx } = useI18n();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * -8;
      setTilt({ x: y, y: x });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="grain frame relative min-h-svh overflow-hidden meridian">
      <Constellation />
      <p className="watermark pointer-events-none absolute -left-6 top-[18%] hidden select-none lg:block">DISHA</p>
      <div
        className="pointer-events-none absolute -right-16 top-20 hidden w-[640px] opacity-70 lg:block"
        style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="origin-center animate-[spin-slow_90s_linear_infinite]">
          <Compass className="h-full w-full" />
        </div>
      </div>
      <div className="pointer-events-none absolute left-[18%] top-[22%] h-72 w-72 rounded-full bg-gold/14 blur-[100px]" />
      <div className="pointer-events-none absolute right-[8%] bottom-[18%] h-56 w-56 rounded-full bg-gold-2/8 blur-[90px]" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-6 pb-14 pt-32 lg:justify-center lg:pb-20">
        <p className="animate-rise font-mono text-[10px] tracking-[0.38em] text-gold uppercase">
          {t.intro}
        </p>
        <h1
          className="animate-rise font-serif mt-7 max-w-[18ch] text-[52px] leading-[0.92] tracking-[-0.02em] text-parchment sm:text-7xl lg:text-[96px]"
          style={{ animationDelay: "90ms" }}
        >
          {t.h1a}
          <br />
          <em className="text-gold-2">{t.h1b}</em>
        </h1>
        <p className="animate-rise mt-8 max-w-md text-[17px] leading-[1.75] text-mist" style={{ animationDelay: "180ms" }}>
          {t.heroBody}
        </p>
        <div className="animate-rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "260ms" }}>
            <a href="#apply" className="btn btn-gold">
              {t.applyCohort}
            </a>
            <a href="#studio" className="btn btn-ghost">
              {t.directAgent}
            </a>
            <a href="#certificate" className="font-mono text-[11px] tracking-[0.16em] text-gold uppercase">
              {t.credPreview}
            </a>
        </div>

        <dl
          className="animate-rise mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-4"
          style={{ animationDelay: "340ms" }}
        >
          {stats.map((item) => (
            <div key={item.label.en}>
              <dt className="font-serif text-[42px] leading-none text-parchment sm:text-5xl">
                <CountUp to={item.value} pad={2} />
                <span className="ml-1.5 font-sans text-[11px] font-medium tracking-[0.18em] text-gold uppercase">{tx(item.suffix)}</span>
              </dt>
              <dd className="mt-3 max-w-[12ch] text-[13px] leading-relaxed text-mist">{tx(item.label)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
