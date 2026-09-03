import { FormEvent, useState, type ReactNode } from "react";
import { contact } from "../data";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

const empty = {
  name: "",
  email: "",
  phone: "",
  city: "",
  country: "India",
  background: "Student",
  note: "",
};

type Application = typeof empty & { id: string; at: string };

function loadApps(): Application[] {
  try {
    const raw = localStorage.getItem("aidisha-applications");
    return raw ? (JSON.parse(raw) as Application[]) : [];
  } catch {
    return [];
  }
}

export function Apply() {
  const { t } = useI18n();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [receipt, setReceipt] = useState<Application | null>(null);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (form.phone.replace(/\D/g, "").length < 10) {
      setError("Enter a valid phone number with at least 10 digits.");
      return;
    }
    const record: Application = {
      ...form,
      id: `DISHA-2026-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
      at: new Date().toISOString(),
    };
    const next = [record, ...loadApps()].slice(0, 25);
    localStorage.setItem("aidisha-applications", JSON.stringify(next));
    setReceipt(record);
    setStatus("sent");

    const body = [
      `Application ${record.id}`,
      `Name: ${record.name}`,
      `Email: ${record.email}`,
      `Phone: ${record.phone}`,
      `City: ${record.city}`,
      `Country: ${record.country}`,
      `Background: ${record.background}`,
      `Note: ${record.note || "—"}`,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`DISHA cohort application — ${record.name}`)}&body=${encodeURIComponent(body)}`;
  }

  function downloadReceipt() {
    if (!receipt) return;
    const blob = new Blob(
      [
        `AI DISHA Institute — application receipt\n${receipt.id}\n${receipt.at}\n\n${receipt.name}\n${receipt.email}\n${receipt.phone}\n${receipt.city}, ${receipt.country}\n${receipt.background}\n${receipt.note}`,
      ],
      { type: "text/plain" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${receipt.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section id="apply" className="bg-parchment text-ink">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
        <Reveal>
          <p className="font-mono text-[10px] font-medium tracking-[0.32em] text-gold uppercase">{t.applyKicker}</p>
          <h2 className="font-serif mt-5 text-[40px] leading-[1.08] sm:text-5xl lg:text-[52px]">
            {t.applyTitle}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/65">{t.applyLead}</p>
          <ul className="mt-8 space-y-2 text-sm text-ink/50">
            <li>— Preference for applicants who can commit to 70% live attendance</li>
            <li>
              — Prospectus:{" "}
              <a href={contact.prospectus} className="text-ink underline decoration-gold underline-offset-4" download>
                {t.prospectus}
              </a>
            </li>
            <li>
              — Direct line:{" "}
              <a href={`mailto:${contact.email}`} className="text-ink underline decoration-gold underline-offset-4">
                {contact.email}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={80}>
          {status === "sent" && receipt ? (
            <div className="border border-ink/10 bg-paper p-10">
              <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">Received · {receipt.id}</p>
              <h3 className="font-serif mt-4 text-3xl">Your application is in the queue.</h3>
              <p className="mt-4 leading-relaxed text-ink/65">
                Thank you, {receipt.name.split(" ")[0]}. Keep the reference {receipt.id}. Your mail client should open so admissions receives the same details.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" className="btn btn-ink" onClick={downloadReceipt}>
                  Download receipt
                </button>
                <button
                  type="button"
                  className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/45 hover:text-ink"
                  onClick={() => {
                    setForm(empty);
                    setReceipt(null);
                    setStatus("idle");
                  }}
                >
                  Submit another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="border border-ink/10 bg-paper p-7 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label={t.fieldName} required>
                  <input
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
                <Field label={t.fieldEmail} required>
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
                <Field label={t.fieldPhone} required>
                  <input
                    required
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
                <Field label={t.fieldCity}>
                  <input
                    autoComplete="address-level2"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
                <Field label={t.fieldCountry}>
                  <input
                    autoComplete="country-name"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
                <Field label={t.fieldBackground}>
                  <select
                    value={form.background}
                    onChange={(e) => setForm({ ...form, background: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  >
                    <option>Student</option>
                    <option>Working professional</option>
                    <option>Career switcher</option>
                    <option>Founder</option>
                  </select>
                </Field>
                <Field label={t.fieldNote} className="sm:col-span-2">
                  <textarea
                    rows={3}
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    className="w-full resize-none border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
              </div>
              {error ? <p className="mt-4 text-sm text-red-800">{error}</p> : null}
              <button type="submit" className="btn btn-ink mt-9">
                {t.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  required,
  className = "",
}: {
  label: string;
  children: ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[10px] tracking-[0.22em] text-ink/40 uppercase">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}
