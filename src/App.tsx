import { AgentStudio } from "./components/AgentStudio";
import { Agents } from "./components/Agents";
import { Apply } from "./components/Apply";
import { Atelier } from "./components/Atelier";
import { Career } from "./components/Career";
import { Close } from "./components/Close";
import { CommandPalette } from "./components/CommandPalette";
import { Compare } from "./components/Compare";
import { CompassNav } from "./components/CompassNav";
import { Curriculum } from "./components/Curriculum";
import { Cursor } from "./components/Cursor";
import { Delivery } from "./components/Delivery";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { LivePill } from "./components/LivePill";
import { Audience, Manifesto } from "./components/Manifesto";
import { Navbar } from "./components/Navbar";
import { Outcomes } from "./components/Outcomes";
import { Preloader } from "./components/Preloader";
import { Pricing } from "./components/Pricing";
import { Progress } from "./components/Progress";
import { Ticker } from "./components/Ticker";
import { useI18n } from "./i18n";

export default function App() {
  const { t } = useI18n();

  return (
    <div className="min-h-svh bg-ink">
      <a
        href="#program"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        {t.skip}
      </a>
      <Preloader />
      <Progress />
      <Cursor />
      <CommandPalette />
      <Navbar />
      <CompassNav />
      <LivePill />
      <main id="main">
        <Hero />
        <Ticker />
        <Manifesto />
        <Audience />
        <Compare />
        <Atelier />
        <Curriculum />
        <Agents />
        <AgentStudio />
        <Delivery />
        <Outcomes />
        <Career />
        <Pricing />
        <Faq />
        <Apply />
        <Close />
      </main>
      <Footer />
    </div>
  );
}
