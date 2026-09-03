import { Reveal, SectionHeading } from "./Reveal";

const rows = [
  { usual: "A recorded playlist you abandon in week two", ours: "Live studio, three to four sessions a week, camera on" },
  { usual: "A certificate for sitting through slides", ours: "A certificate only if you ship an agent" },
  { usual: "Prompt tricks as the whole curriculum", ours: "Python → tools → security → robotics → agents" },
  { usual: "The course ends when the Zoom ends", ours: "Internship desk and career studio on days 44–45" },
  { usual: "One language, one city, one recording", ours: "English, India and remote, taught to a global standard" },
];

export function Compare() {
  return (
    <section className="bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <SectionHeading kicker="Why DISHA" title="Not another content library. A directed 45 days." />
        </Reveal>
        <div className="mt-14 overflow-hidden border border-line">
          <div className="grid grid-cols-2 border-b border-line bg-ink-3 font-mono text-[10px] tracking-[0.22em] text-gold uppercase">
            <p className="px-6 py-3">Typical AI course</p>
            <p className="px-6 py-3">AI DISHA</p>
          </div>
          {rows.map((row) => (
            <Reveal key={row.ours}>
              <div className="grid grid-cols-1 border-b border-line last:border-b-0 sm:grid-cols-2">
                <p className="px-6 py-5 text-[15px] leading-relaxed text-mist/70">{row.usual}</p>
                <p className="border-t border-line px-6 py-5 text-[15px] leading-relaxed text-parchment sm:border-t-0 sm:border-l">
                  {row.ours}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
