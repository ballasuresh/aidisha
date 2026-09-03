import { FormEvent, useState, type ReactNode } from "react";
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

export function Apply() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section id="apply" className="bg-parchment text-ink">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
        <Reveal>
          <p className="font-mono text-[10px] font-medium tracking-[0.32em] text-gold uppercase">12 — Admissions</p>
          <h2 className="font-serif mt-5 text-[40px] leading-[1.08] sm:text-5xl lg:text-[52px]">
            Request a place on the next DISHA cohort.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/65">
            Two cohorts a month. Tell us who you are. We will reply with dates, seat availability, and fee confirmation.
          </p>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink/45">
            Preference is given to applicants who can commit to 70% live attendance — the certificate requires it.
          </p>
        </Reveal>

        <Reveal delay={80}>
          {status === "sent" ? (
            <div className="border border-ink/10 bg-paper p-10">
              <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">Received</p>
              <h3 className="font-serif mt-4 text-3xl">Your application is in the queue.</h3>
              <p className="mt-4 leading-relaxed text-ink/65">
                Thank you, {form.name.split(" ")[0] || "applicant"}. An admissions coordinator will reach you on {form.email} with the next cohort dates.
              </p>
              <button
                type="button"
                className="mt-8 font-mono text-[11px] tracking-[0.18em] uppercase text-ink/45 hover:text-ink"
                onClick={() => {
                  setForm(empty);
                  setStatus("idle");
                }}
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="border border-ink/10 bg-paper p-7 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
                <Field label="Phone" required>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
                <Field label="City">
                  <input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
                <Field label="Country">
                  <input
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
                <Field label="Background">
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
                <Field label="Anything we should know" className="sm:col-span-2">
                  <textarea
                    rows={3}
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    className="w-full resize-none border-b border-ink/15 bg-transparent py-2 outline-none focus:border-gold"
                  />
                </Field>
              </div>
              <button type="submit" className="btn btn-ink mt-9">
                Submit application
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
