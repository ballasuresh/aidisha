import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { navLinks } from "./data";

export type Lang = "en" | "hi";

type Copy = Record<string, string>;

const en: Copy = {
  skip: "Skip to programme",
  intro: "01 — Introduction · Live cohort · India · Global standard",
  h1a: "From practitioner",
  h1b: "to agent builder.",
  heroBody:
    "A 45-day live atelier. You do not merely study artificial intelligence — you ship agents, publish a portfolio, and enter an internship pipeline.",
  applyCohort: "Apply for the next cohort",
  directAgent: "Direct an agent now",
  apply: "Apply",
  applyNow: "Apply now",
  manifestoKicker: "02 — Manifesto",
  manifestoA: "Do not merely learn AI.",
  manifestoB: "Direct it.",
  manifestoBody:
    "DISHA is Sanskrit for direction. The institute exists so learners become builders: agents in production, a public body of work, and a path into internships — taught live, to a global standard, from India.",
  search: "Search the institute",
  hint: "Ctrl K",
  programKicker: "03 — The programme",
  programTitle: "A directed 45 days. Not another content library.",
  programBody:
    "One arc. Python, fundamentals, the modern toolstack, security, careers, robotics — then the thing the market actually pays for: agents you can demo.",
  compareKicker: "Why DISHA",
  compareTitle: "Not another content library. A directed 45 days.",
  compareLeft: "Typical AI course",
  compareRight: "AI DISHA",
  studioKicker: "Live atelier",
  studioTitle: "Direct an agent. Research, code, or automation.",
  studioBody: "Three canonical DISHA builds, simulated in the browser. Run one. Export the brief. This is the programme, not a brochure.",
  applyKicker: "12 — Admissions",
  applyTitle: "Request a place on the next DISHA cohort.",
  applyLead: "Two cohorts a month. Tell us who you are. We will reply with dates, seat availability, and fee confirmation.",
  fieldName: "Full name",
  fieldEmail: "Email",
  fieldPhone: "Phone",
  fieldCity: "City",
  fieldCountry: "Country",
  fieldBackground: "Background",
  fieldNote: "Anything we should know",
  submit: "Submit application",
  closeKicker: "13 — Next bearing",
  closeTitle: "Forty-five days. One agent. A public trail.",
  closeBody: "Cohort 07 opens 18 September 2026. Fourteen seats on the current board. Apply, or read the prospectus first.",
  prospectus: "Download prospectus",
  explore: "Explore",
  institute: "Institute",
  contact: "Contact",
  privacy: "Privacy",
  liveAgent: "Live agent",
  paletteStudio: "Live agent studio",
  paletteApply: "Apply for a seat",
  palettePdf: "Download prospectus",
  footerLine: "Don't just learn AI. Build products and agents — then walk into the market ready.",
  privacyBody:
    "Applications you submit are stored on your device and optionally sent by email to admissions. We collect name, contact details, and background only to allocate a cohort seat. We do not sell data. Certificates require 70% attendance and a submitted agent.",
};

const hi: Copy = {
  skip: "कार्यक्रम पर जाएँ",
  intro: "01 — परिचय · लाइव कोहोर्ट · भारत · वैश्विक मानक",
  h1a: "अभ्यासी से",
  h1b: "एजेंट बिल्डर तक।",
  heroBody:
    "पैंतालीस दिन का लाइव एटेलियर। केवल कृत्रिम बुद्धिमत्ता पढ़ना नहीं — एजेंट बनाना, पोर्टफोलियो प्रकाशित करना, इंटर्नशिप तक पहुँचना।",
  applyCohort: "अगले कोहोर्ट के लिए आवेदन",
  directAgent: "अभी एजेंट चलाएँ",
  apply: "आवेदन",
  applyNow: "अभी आवेदन करें",
  manifestoKicker: "02 — घोषणा",
  manifestoA: "केवल AI मत सीखो।",
  manifestoB: "उसे दिशा दो।",
  manifestoBody:
    "दिशा संस्कृत में direction है। यह संस्थान सीखने वालों को निर्माता बनाता है: उत्पादन में एजेंट, सार्वजनिक कार्य, और इंटर्नशिप का मार्ग — भारत से, वैश्विक मानक पर, लाइव।",
  search: "संस्थान खोजें",
  hint: "Ctrl K",
  programKicker: "03 — कार्यक्रम",
  programTitle: "दिशा वाला पैंतालीस दिन। एक और कंटेंट लाइब्रेरी नहीं।",
  programBody:
    "एक चाप। पाइथन, मूल सिद्धांत, टूलस्टैक, सुरक्षा, करियर, रोबोटिक्स — फिर वह जिसे बाज़ार खरीदता है: एजेंट जिन्हें आप दिखा सकें।",
  compareKicker: "क्यों दिशा",
  compareTitle: "कंटेंट लाइब्रेरी नहीं। एक निर्देशित 45 दिन।",
  compareLeft: "सामान्य AI कोर्स",
  compareRight: "AI दिशा",
  studioKicker: "लाइव एटेलियर",
  studioTitle: "एजेंट चलाएँ। रिसर्च, कोड, या ऑटोमेशन।",
  studioBody: "तीन मुख्य दिशा बिल्ड, ब्राउज़र में। एक चलाएँ। ब्रीफ एक्सपोर्ट करें। यह कार्यक्रम है, ब्रोशर नहीं।",
  applyKicker: "12 — प्रवेश",
  applyTitle: "अगले दिशा कोहोर्ट में स्थान माँगें।",
  applyLead: "महीने में दो बैच। बताएँ आप कौन हैं। हम तिथि, सीट और शुल्क भेजेंगे।",
  fieldName: "पूरा नाम",
  fieldEmail: "ईमेल",
  fieldPhone: "फ़ोन",
  fieldCity: "शहर",
  fieldCountry: "देश",
  fieldBackground: "पृष्ठभूमि",
  fieldNote: "और कुछ जो हमें पता होना चाहिए",
  submit: "आवेदन जमा करें",
  closeKicker: "13 — अगली दिशा",
  closeTitle: "पैंतालीस दिन। एक एजेंट। एक सार्वजनिक पगडंडी।",
  closeBody: "कोहोर्ट 07: 18 सितंबर 2026। इस बोर्ड पर चौदह सीटें। आवेदन करें, या पहले प्रॉस्पेक्टस पढ़ें।",
  prospectus: "प्रॉस्पेक्टस डाउनलोड",
  explore: "खोजें",
  institute: "संस्थान",
  contact: "संपर्क",
  privacy: "गोपनीयता",
  liveAgent: "लाइव एजेंट",
  paletteStudio: "लाइव एजेंट स्टूडियो",
  paletteApply: "सीट के लिए आवेदन",
  palettePdf: "प्रॉस्पेक्टस डाउनलोड",
  footerLine: "केवल AI मत सीखो। उत्पाद और एजेंट बनाओ — फिर बाज़ार में तैयार होकर निकलो।",
  privacyBody:
    "आवेदन आपके उपकरण पर संग्रहीत होता है और वैकल्पिक रूप से प्रवेश को ईमेल होता है। हम नाम और संपर्क केवल सीट के लिए लेते हैं। डेटा नहीं बेचते। प्रमाणपत्र के लिए 70% उपस्थिति और एक एजेंट अनिवार्य है।",
};

const pack: Record<Lang, Copy> = { en, hi };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Copy;
  nav: { href: string; label: string }[];
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("aidisha-lang");
    if (saved === "hi" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("aidisha-lang", l);
  }

  const nav = navLinks.map((l) => ({ href: l.href, label: lang === "hi" ? l.hi : l.en }));

  return (
    <I18nContext.Provider value={{ lang, setLang, t: pack[lang], nav }}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("I18n");
  return ctx;
}
