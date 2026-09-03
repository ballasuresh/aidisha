import { FormEvent, useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";

const samples = ["climate intelligence for farms", "campus cybersecurity copilot", "portfolio review agent"];

function brief(topic: string) {
  const t = topic.trim() || "a chosen domain";
  return [
    { k: "Thesis", v: `${t.charAt(0).toUpperCase() + t.slice(1)} is a workflow problem first, a model problem second. DISHA trains you to draw the workflow, then put an agent on it.` },
    { k: "Agent shape", v: `A research layer gathers sources. A reasoning layer ranks claims. A writer layer returns a structured brief a professional can act on — the same pattern as the institute's signature research agent.` },
    { k: "Build path", v: `Week 1–2: Python and APIs. Week 3: toolstack. Week 5–6: agent orchestration. Capstone: a demo of ${t} you can walk through live, without slides.` },
    { k: "Risks", v: `Hallucination, stale data, and silent failure. You will be assessed on whether the agent cites, refuses, and leaves an audit trail — not on how fluent it sounds.` },
  ];
}

export function AgentStudio() {
  const [topic, setTopic] = useState("climate intelligence for farms");
  const [logs, setLogs] = useState<string[]>([]);
  const [rows, setRows] = useState<{ k: string; v: string }[] | null>(null);
  const [busy, setBusy] = useState(false);

  async function run(e?: FormEvent) {
    e?.preventDefault();
    if (busy) return;
    setBusy(true);
    setRows(null);
    const steps = [
      "north · locking bearing",
      `search · corpora for “${topic.trim()}”`,
      "cluster · claims, counter-claims, gaps",
      "compose · structured brief",
    ];
    setLogs([]);
    for (const step of steps) {
      setLogs((prev) => [...prev, step]);
      await wait(420);
    }
    setRows(brief(topic));
    setBusy(false);
  }

  return (
    <section id="studio" className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 pb-24 lg:pb-32">
        <Reveal>
          <SectionHeading kicker="Live atelier" title="Direct a research agent. Right here." />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            This is a signature DISHA build, simulated in the browser — so you can feel the programme in thirty seconds.
          </p>
        </Reveal>

        <div className="mt-12 grid overflow-hidden border border-line lg:grid-cols-[0.9fr_1.1fr]">
          <form onSubmit={run} className="border-b border-line p-7 lg:border-b-0 lg:border-r lg:p-9">
            <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">Input · topic</p>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              rows={4}
              className="mt-4 w-full resize-none border-b border-line bg-transparent py-2 text-lg text-parchment outline-none focus:border-gold"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {samples.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setTopic(s)}
                  className="font-mono border border-line px-3 py-1.5 text-[10px] tracking-[0.12em] text-mist uppercase hover:border-gold hover:text-gold"
                >
                  {s}
                </button>
              ))}
            </div>
            <button type="submit" disabled={busy} className="btn btn-gold mt-8 disabled:opacity-50">
              {busy ? "Bearing…" : "Run research agent"}
            </button>
          </form>

          <div className="min-h-[320px] bg-ink-3 p-7 font-mono text-[12px] leading-relaxed lg:p-9">
            <p className="tracking-[0.22em] text-gold uppercase">DISHA · research agent · v0.9</p>
            <ul className="mt-6 space-y-2 text-mist">
              {logs.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-gold">›</span>
                  {line}
                </li>
              ))}
              {busy ? <li className="text-gold">█</li> : null}
            </ul>
            {rows ? (
              <div className="mt-8 space-y-5 font-sans">
                {rows.map((row) => (
                  <article key={row.k}>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase">{row.k}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-parchment/90">{row.v}</p>
                  </article>
                ))}
              </div>
            ) : !busy && logs.length === 0 ? (
              <p className="mt-10 max-w-sm text-mist/70">Give it a bearing. The agent returns a brief you could hand to a founder tonight.</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
