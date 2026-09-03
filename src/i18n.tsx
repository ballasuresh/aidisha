import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

type Copy = Record<
  | "skip"
  | "intro"
  | "h1a"
  | "h1b"
  | "heroBody"
  | "applyCohort"
  | "directAgent"
  | "apply"
  | "manifestoKicker"
  | "manifestoA"
  | "manifestoB"
  | "manifestoBody"
  | "search"
  | "hint",
  string
>;

const copy: Record<Lang, Copy> = {
  en: {
    skip: "Skip to programme",
    intro: "01 — Introduction · Live cohort · India · Global standard",
    h1a: "From practitioner",
    h1b: "to agent builder.",
    heroBody:
      "A 45-day live atelier. You do not merely study artificial intelligence — you ship agents, publish a portfolio, and enter an internship pipeline.",
    applyCohort: "Apply for the next cohort",
    directAgent: "Direct an agent now",
    apply: "Apply",
    manifestoKicker: "02 — Manifesto",
    manifestoA: "Do not merely learn AI.",
    manifestoB: "Direct it.",
    manifestoBody:
      "DISHA is Sanskrit for direction. The institute exists so learners become builders: agents in production, a public body of work, and a path into internships — taught live, to a global standard, from India.",
    search: "Search the institute",
    hint: "Ctrl K",
  },
  hi: {
    skip: "कार्यक्रम पर जाएँ",
    intro: "01 — परिचय · लाइव कोहोर्ट · भारत · वैश्विक मानक",
    h1a: "अभ्यासी से",
    h1b: "एजेंट बिल्डर तक।",
    heroBody:
      "पैंतालीस दिन का लाइव एटेलियर। केवल कृत्रिम बुद्धिमत्ता पढ़ना नहीं — एजेंट बनाना, पोर्टफोलियो प्रकाशित करना, इंटर्नशिप तक पहुँचना।",
    applyCohort: "अगले कोहोर्ट के लिए आवेदन",
    directAgent: "अभी एजेंट चलाएँ",
    apply: "आवेदन",
    manifestoKicker: "02 — घोषणा",
    manifestoA: "केवल AI मत सीखो।",
    manifestoB: "उसे दिशा दो।",
    manifestoBody:
      "दिशा संस्कृत में direction है। यह संस्थान सीखने वालों को निर्माता बनाता है: उत्पादन में एजेंट, सार्वजनिक कार्य, और इंटर्नशिप का मार्ग — भारत से, वैश्विक मानक पर, लाइव।",
    search: "संस्थान खोजें",
    hint: "Ctrl K",
  },
} satisfies Record<Lang, Copy>;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Copy;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("aidisha-lang");
    if (saved === "hi" || saved === "en") setLangState(saved);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("aidisha-lang", l);
    document.documentElement.lang = l === "hi" ? "hi" : "en";
  }

  return <I18nContext.Provider value={{ lang, setLang, t: copy[lang] }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("I18n");
  return ctx;
}
