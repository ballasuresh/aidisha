import { AgentStudio } from "./components/AgentStudio";
import { Agents } from "./components/Agents";
import { Apply } from "./components/Apply";
import { Atelier } from "./components/Atelier";
import { Career } from "./components/Career";
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

export default function App() {
  return (
    <div className="min-h-svh bg-ink">
      <Preloader />
      <Progress />
      <Cursor />
      <Navbar />
      <CompassNav />
      <LivePill />
      <main>
        <Hero />
        <Ticker />
        <Manifesto />
        <Audience />
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
      </main>
      <Footer />
    </div>
  );
}
