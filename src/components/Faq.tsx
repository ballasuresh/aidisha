import { useState } from "react";
import { faqs } from "../data";
import { Reveal, SectionHeading } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading kicker="11 — Questions" title="Before you commit a season of your life." />
        </Reveal>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-2xl text-parchment sm:text-[28px]">{item.q}</span>
                    <span className={`mt-2 text-gold transition ${isOpen ? "rotate-45" : ""}`} aria-hidden>
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="overflow-hidden max-w-3xl text-[15px] leading-relaxed text-mist">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
