import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-5 font-mono text-[10px] font-medium tracking-[0.32em] uppercase ${
        light ? "text-ink/40" : "text-gold"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  kicker,
  light = false,
}: {
  title: string;
  kicker?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {kicker ? <Eyebrow light={light}>{kicker}</Eyebrow> : null}
      <h2
        className={`font-serif text-[40px] leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[58px] ${
          light ? "text-ink" : "text-parchment"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
