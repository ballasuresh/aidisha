import { FormEvent, useMemo, useState } from "react";
import { credentialId, ledger } from "../data";
import { escapeXml, issueCredential, lookupCredential, type Issued } from "../lib/cert";
import { useI18n } from "../i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Certificate() {
  const { t } = useI18n();
  const [name, setName] = useState("Ananya Rao");
  const [issued, setIssued] = useState<Issued | null>(null);
  const [query, setQuery] = useState("");
  const [found, setFound] = useState<Issued | null | "miss">(null);

  const previewId = useMemo(() => credentialId(name), [name]);
  const display = issued ?? {
    id: previewId,
    name: name.trim() || "Fellow",
    cohort: "07",
    issued: "18 Sep 2026",
  };

  function onIssue(e: FormEvent) {
    e.preventDefault();
    setIssued(issueCredential(name));
    setFound(null);
  }

  function onVerify(e: FormEvent) {
    e.preventDefault();
    const hit = lookupCredential(query);
    setFound(hit ?? "miss");
  }

  function downloadSvg() {
    const svg = diplomaSvg(display);
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${display.id}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function printCert() {
    document.body.classList.add("print-cert");
    window.print();
    window.setTimeout(() => document.body.classList.remove("print-cert"), 400);
  }

  return (
    <section id="certificate" className="bg-parchment text-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading light kicker={t.credKicker} title={t.credTitle} />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">{t.credBody}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <Reveal>
            <Diploma record={display} kicker={t.certCardKicker} programme={t.certCardTitle} />
          </Reveal>

          <Reveal delay={90}>
            <form onSubmit={onIssue} className="border border-ink/10 bg-paper p-7 sm:p-9">
              <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{t.credIssue}</p>
              <label className="mt-6 block">
                <span className="font-mono text-[10px] tracking-[0.22em] text-ink/40 uppercase">{t.fieldName}</span>
                <input
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setIssued(null);
                  }}
                  className="mt-1 w-full border-b border-ink/15 bg-transparent py-2 text-xl outline-none focus:border-gold"
                />
              </label>
              <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-ink/40 uppercase">
                {t.credSerial} · {previewId}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="submit" className="btn btn-ink">
                  {t.credMint}
                </button>
                <button type="button" className="btn btn-ghost-ink" onClick={downloadSvg}>
                  {t.credSvg}
                </button>
                <button type="button" className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink/50 hover:text-ink" onClick={printCert}>
                  {t.credPrint}
                </button>
              </div>
              {issued ? (
                <p className="mt-5 text-sm text-ink/60">
                  {t.credMinted} {issued.id}
                </p>
              ) : null}
            </form>

            <form onSubmit={onVerify} id="verify" className="mt-6 border border-ink/10 bg-paper p-7 sm:p-9">
              <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">{t.credVerify}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/55">{t.credVerifyBody}</p>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="DISHA-AB-7F2C"
                className="mt-5 w-full border-b border-ink/15 bg-transparent py-2 font-mono text-sm outline-none focus:border-gold"
              />
              <button type="submit" className="btn btn-ink mt-6">
                {t.credLookup}
              </button>
              {found && found !== "miss" ? (
                <p className="mt-5 text-sm text-ink/70">
                  {found.name} · Cohort {found.cohort} · {found.issued} · {found.id}
                </p>
              ) : null}
              {found === "miss" ? <p className="mt-5 text-sm text-red-800">{t.credMiss}</p> : null}
              <ul className="mt-6 space-y-1 font-mono text-[11px] tracking-wide text-ink/40">
                {ledger.map((row) => (
                  <li key={row.id}>
                    {row.id} · {row.name}
                  </li>
                ))}
              </ul>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Diploma({
  record,
  kicker,
  programme,
}: {
  record: Issued;
  kicker: string;
  programme: string;
}) {
  return (
    <article id="diploma" className="cert-sheet relative overflow-hidden bg-[#f7f1e6] p-[18px] text-ink shadow-[0_40px_80px_-40px_rgba(8,9,12,0.45)]">
      <div className="relative border border-[#c4a574]/70 p-5 sm:p-8">
        <div className="pointer-events-none absolute inset-3 border border-[#c4a574]/35" />
        <p className="font-mono text-center text-[9px] tracking-[0.42em] text-[#8a734c] uppercase">{kicker}</p>
        <p className="mt-3 text-center text-[11px] font-semibold tracking-[0.38em] text-ink">AI DISHA INSTITUTE</p>
        <p className="font-serif mt-6 text-center text-sm italic text-ink/55">This is to certify that</p>
        <h3 className="font-serif mt-3 text-center text-[34px] leading-none tracking-tight sm:text-5xl">{record.name}</h3>
        <p className="mx-auto mt-5 max-w-md text-center text-[13px] leading-relaxed text-ink/65">
          has fulfilled the live atelier <em className="text-ink">{programme}</em> — modules complete, one agent shipped, final
          project submitted, 70% studio attendance.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-3 border-y border-[#c4a574]/30 py-4 text-center font-mono text-[9px] tracking-[0.14em] text-ink/50 uppercase">
          <span>Cohort {record.cohort}</span>
          <span>45 days · Live</span>
          <span>{record.issued}</span>
        </div>
        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-serif text-lg italic">K. Iyer</p>
            <p className="font-mono text-[9px] tracking-[0.16em] text-ink/40 uppercase">Studio lead</p>
          </div>
          <div className="grid h-14 w-14 place-items-center border border-[#c4a574] rotate-45">
            <span className="-rotate-45 font-mono text-[8px] tracking-widest text-[#8a734c]">SEAL</span>
          </div>
          <div className="text-right">
            <p className="font-serif text-lg italic">R. Menon</p>
            <p className="font-mono text-[9px] tracking-[0.16em] text-ink/40 uppercase">Registrar</p>
          </div>
        </div>
        <p className="mt-6 text-center font-mono text-[10px] tracking-[0.22em] text-[#8a734c]">{record.id}</p>
      </div>
    </article>
  );
}

function diplomaSvg(record: Issued) {
  const n = escapeXml(record.name);
  const id = escapeXml(record.id);
  const issued = escapeXml(record.issued);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="850" viewBox="0 0 1200 850">
  <rect width="1200" height="850" fill="#f7f1e6"/>
  <rect x="36" y="36" width="1128" height="778" fill="none" stroke="#c4a574" stroke-width="2"/>
  <rect x="58" y="58" width="1084" height="734" fill="none" stroke="#c4a574" stroke-width="1" opacity="0.45"/>
  <text x="600" y="130" text-anchor="middle" fill="#8a734c" font-family="IBM Plex Mono, monospace" font-size="14" letter-spacing="8">CERTIFICATE OF COMPLETION</text>
  <text x="600" y="175" text-anchor="middle" fill="#08090c" font-family="Plus Jakarta Sans, sans-serif" font-size="16" font-weight="600" letter-spacing="10">AI DISHA INSTITUTE</text>
  <text x="600" y="250" text-anchor="middle" fill="#08090c" font-family="Cormorant Garamond, serif" font-size="22" font-style="italic">This is to certify that</text>
  <text x="600" y="340" text-anchor="middle" fill="#08090c" font-family="Cormorant Garamond, serif" font-size="56">${n}</text>
  <text x="600" y="410" text-anchor="middle" fill="#5c564c" font-family="Plus Jakarta Sans, sans-serif" font-size="16">has fulfilled the 45-day live atelier · AI Practitioner to Agent Builder</text>
  <text x="600" y="445" text-anchor="middle" fill="#5c564c" font-family="Plus Jakarta Sans, sans-serif" font-size="14">modules · shipped agent · final project · 70% live attendance</text>
  <text x="600" y="530" text-anchor="middle" fill="#8a734c" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="4">COHORT ${escapeXml(record.cohort)}  ·  ${issued}  ·  INDIA · GLOBAL STANDARD</text>
  <text x="220" y="680" text-anchor="middle" fill="#08090c" font-family="Cormorant Garamond, serif" font-size="28" font-style="italic">K. Iyer</text>
  <text x="220" y="708" text-anchor="middle" fill="#8a734c" font-family="IBM Plex Mono, monospace" font-size="11" letter-spacing="3">STUDIO LEAD</text>
  <text x="980" y="680" text-anchor="middle" fill="#08090c" font-family="Cormorant Garamond, serif" font-size="28" font-style="italic">R. Menon</text>
  <text x="980" y="708" text-anchor="middle" fill="#8a734c" font-family="IBM Plex Mono, monospace" font-size="11" letter-spacing="3">REGISTRAR</text>
  <rect x="570" y="640" width="60" height="60" fill="none" stroke="#c4a574" transform="rotate(45 600 670)"/>
  <text x="600" y="790" text-anchor="middle" fill="#8a734c" font-family="IBM Plex Mono, monospace" font-size="14" letter-spacing="4">${id}</text>
</svg>`;
}
