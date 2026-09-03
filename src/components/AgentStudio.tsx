import { FormEvent, useEffect, useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { useI18n, type Lang } from "../i18n";

type Kind = "research" | "code" | "automation";

const samples: Record<Lang, Record<Kind, string[]>> = {
  en: {
    research: ["climate intelligence for farms", "campus cybersecurity copilot", "portfolio review agent"],
    code: ["debug a Python API timeout", "scaffold a RAG service", "explain a messy notebook"],
    automation: ["weekly admissions digest", "lead-to-CRM handoff", "session notes to GitHub issues"],
  },
  hi: {
    research: ["खेतों के लिए जलवायु बुद्धिमत्ता", "कैंपस साइबरसुरक्षा कोपायलट", "पोर्टफोलियो समीक्षा एजेंट"],
    code: ["पाइथन API टाइमआउट डिबग", "RAG सेवा स्कैफ़ोल्ड", "अस्त-व्यस्त नोटबुक समझाओ"],
    automation: ["साप्ताहिक प्रवेश सार", "लीड से CRM हैंडऑफ़", "सत्र नोट्स से GitHub इश्यू"],
  },
};

function brief(lang: Lang, kind: Kind, topic: string) {
  const t = topic.trim() || (lang === "hi" ? "ब्रीफ" : "the brief");
  if (kind === "code") {
    return lang === "hi"
      ? [
          { k: "पुनरुत्पादन", v: `“${t}” की विफलता को बंद करो। इनपुट, अपेक्षित आउटपुट, वास्तविक आउटपुट। एजेंट अंधेरे में अनुमान न लगाए।` },
          { k: "पैच", v: `सबसे छोटा बदलाव: पहले टेस्ट, फिर फ़ंक्शन, फिर वह लॉग लाइन जिसे साथी grep कर सके।` },
          { k: "हैंडऑफ़", v: `दिशा कोड एजेंट ऐसा डिफ लौटाता है जिसे इंसान मर्ज कर सके — स्पष्टीकरण का उपन्यास नहीं।` },
        ]
      : [
          { k: "Reproduce", v: `Lock the failure for “${t}”. Inputs, expected output, actual output. No agent should guess in the dark.` },
          { k: "Patch", v: `Propose the smallest change: tests first, then the function, then the log line a teammate can grep.` },
          { k: "Handoff", v: `A DISHA code agent returns a diff a human can merge, not a novel of explanations.` },
        ];
  }
  if (kind === "automation") {
    return lang === "hi"
      ? [
          { k: "ट्रिगर", v: `“${t}” शुरू करने वाली घटना नाम दो। कैलेंडर, फ़ॉर्म, वेबहुक — एक ट्रिगर, पाँच नहीं।` },
          { k: "चरण", v: `लाओ → बदलो → लिखो → सूचित करो। हर चरण सफलता लॉग करे या रुके। चुप विफलता असफलता है।` },
          { k: "मालिक", v: `दिशा ऑटोमेशन एजेंट ऑडिट पगडंडी छोड़ता है। आकलन इसी पर होगा, कितने टूल जोड़े उस पर नहीं।` },
        ]
      : [
          { k: "Trigger", v: `Name the event that starts “${t}”. Calendar, form, webhook — one trigger, not five.` },
          { k: "Steps", v: `Fetch → transform → write → notify. Each step logs success or stops. Silent failure is a fail.` },
          { k: "Owner", v: `A DISHA automation agent leaves an audit trail. You will be assessed on that, not on how many tools you chained.` },
        ];
  }
  return lang === "hi"
    ? [
        { k: "थीसिस", v: `${t} पहले वर्कफ़्लो समस्या है, मॉडल समस्या बाद में।` },
        { k: "एजेंट आकार", v: `खोजो, रैंक करो, लिखो। संरचित ब्रीफ जिस पर पेशेवर काम कर सके — दिशा रिसर्च एजेंट का हस्ताक्षर।` },
        { k: "निर्माण पथ", v: `पाइथन और API, फिर टूल, फिर ऑर्केस्ट्रेशन। कैपस्टोन: ${t} का लाइव डेमो, बिना स्लाइड।` },
        { k: "जोखिम", v: `भ्रम, बासी डेटा, चुप विफलता। उद्धृत करो, मना करो, पगडंडी छोड़ो।` },
      ]
    : [
        { k: "Thesis", v: `${t.charAt(0).toUpperCase() + t.slice(1)} is a workflow problem first, a model problem second.` },
        { k: "Agent shape", v: `Search, rank, write. A structured brief a professional can act on — the signature DISHA research agent.` },
        { k: "Build path", v: `Python and APIs, then tools, then orchestration. Capstone: a live demo of ${t}, without slides.` },
        { k: "Risks", v: `Hallucination, stale data, silent failure. Cite, refuse, leave a trail.` },
      ];
}

function stepsFor(lang: Lang, kind: Kind, topic: string) {
  if (lang === "hi") {
    if (kind === "code") return ["खोलो · वर्कस्पेस", `पुनरुत्पादन · “${topic}”`, "पैच · सबसे छोटा डिफ", "सत्यापन · टेस्ट + लॉग"];
    if (kind === "automation") return ["मानचित्र · ट्रिगर", `तार · “${topic}”`, "चलाओ · चरण लॉग", "सूचित · मालिक"];
    return ["उत्तर · दिशा बंद", `खोज · “${topic}”`, "समूह · दावे और अंतराल", "रचना · संरचित ब्रीफ"];
  }
  if (kind === "code") return ["open · workspace", `reproduce · “${topic}”`, "patch · smallest diff", "verify · tests + log"];
  if (kind === "automation") return ["map · trigger", `wire · “${topic}”`, "run · step log", "notify · owner"];
  return ["north · locking bearing", `search · “${topic}”`, "cluster · claims and gaps", "compose · structured brief"];
}

export function AgentStudio() {
  const { t, lang } = useI18n();
  const [kind, setKind] = useState<Kind>("research");
  const [topic, setTopic] = useState(samples.en.research[0]);
  const [logs, setLogs] = useState<string[]>([]);
  const [rows, setRows] = useState<{ k: string; v: string }[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  const kinds: { id: Kind; label: string }[] = [
    { id: "research", label: t.studioResearch },
    { id: "code", label: t.studioCode },
    { id: "automation", label: t.studioAuto },
  ];

  useEffect(() => {
    setTopic(samples[lang][kind][0]);
    setRows(null);
    setLogs([]);
  }, [lang, kind]);

  async function run(e?: FormEvent) {
    e?.preventDefault();
    if (busy || !topic.trim()) return;
    setBusy(true);
    setRows(null);
    setCopied(false);
    setLogs([]);
    for (const step of stepsFor(lang, kind, topic.trim())) {
      setLogs((prev) => [...prev, step]);
      await wait(380);
    }
    setRows(brief(lang, kind, topic));
    setBusy(false);
  }

  function exportMd() {
    if (!rows) return;
    const md = [`# DISHA ${kind} agent`, "", `Topic: ${topic}`, "", ...rows.map((r) => `## ${r.k}\n\n${r.v}`)].join("\n");
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `disha-${kind}-brief.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function copyMd() {
    if (!rows) return;
    const md = rows.map((r) => `${r.k}: ${r.v}`).join("\n\n");
    await navigator.clipboard.writeText(md);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section id="studio" className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 pb-24 lg:pb-32">
        <Reveal>
          <SectionHeading kicker={t.studioKicker} title={t.studioTitle} />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">{t.studioBody}</p>
        </Reveal>

        <div className="mt-10 flex gap-2">
          {kinds.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => {
                setKind(k.id);
                setRows(null);
                setLogs([]);
              }}
              className={`font-mono px-4 py-2 text-[11px] tracking-[0.16em] uppercase ${
                kind === k.id ? "bg-gold text-ink" : "border border-line text-mist hover:text-parchment"
              }`}
            >
              {k.label}
            </button>
          ))}
        </div>

        <div className="mt-4 grid overflow-hidden border border-line lg:grid-cols-[0.9fr_1.1fr]">
          <form onSubmit={run} className="border-b border-line p-7 lg:border-b-0 lg:border-r lg:p-9">
            <p className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase">
              {t.input} · {kinds.find((k) => k.id === kind)?.label}
            </p>
            <textarea
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              rows={4}
              className="mt-4 w-full resize-none border-b border-line bg-transparent py-2 text-lg text-parchment outline-none focus:border-gold"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {samples[lang][kind].map((s) => (
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
              {busy ? t.studioBusy : t.studioRun}
            </button>
          </form>

          <div className="min-h-[320px] bg-ink-3 p-7 font-mono text-[12px] leading-relaxed lg:p-9" aria-live="polite">
            <p className="tracking-[0.22em] text-gold uppercase">
              DISHA · {kinds.find((k) => k.id === kind)?.label} · v1.0
            </p>
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
                <div className="flex flex-wrap gap-3 pt-2">
                  <button type="button" onClick={copyMd} className="font-mono text-[10px] tracking-[0.16em] text-gold uppercase">
                    {copied ? t.studioCopied : t.studioCopy}
                  </button>
                  <button type="button" onClick={exportMd} className="font-mono text-[10px] tracking-[0.16em] text-gold uppercase">
                    {t.studioExport}
                  </button>
                </div>
              </div>
            ) : !busy && logs.length === 0 ? (
              <p className="mt-10 max-w-sm text-mist/70">{t.studioIdle}</p>
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
