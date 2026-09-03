import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { navLinks, type Bi } from "./data";

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
  method: "Method",
  compareKicker: "Why DISHA",
  compareTitle: "Not another content library. A directed 45 days.",
  compareLeft: "Typical AI course",
  compareRight: "AI DISHA",
  rhythmKicker: "04 — Rhythm",
  rhythmTitle: "How a week at the institute actually feels.",
  currKicker: "05 — Nine phases",
  currTitle: "The 45-day curriculum, without the noise.",
  currBody:
    "Seventy guided hours. Live studio as the spine. Every phase ends in something you can show — a chatbot, a tool workflow, an agent, a capstone.",
  days: "Days",
  atelierKicker: "06 — The atelier",
  atelierTitle: "You will not graduate without an agent.",
  atelierBody:
    "Four canonical builds. Each one maps to how serious teams now use language models: research, code, automation, orchestration. Then try the live research agent below.",
  input: "Input",
  output: "Output",
  studioKicker: "Live atelier",
  studioTitle: "Direct an agent. Research, code, or automation.",
  studioBody: "Three canonical DISHA builds, simulated in the browser. Run one. Export the brief. This is the programme, not a brochure.",
  studioResearch: "Research",
  studioCode: "Code",
  studioAuto: "Automation",
  studioRun: "Run agent",
  studioBusy: "Bearing…",
  studioCopy: "Copy brief",
  studioCopied: "Copied",
  studioExport: "Export .md",
  studioIdle: "Pick an agent. Give it a bearing. Export what it returns.",
  pedagogyKicker: "07 — Pedagogy",
  pedagogyTitle: "Studio first. Recordings later, if ever.",
  format: "Format",
  hackDesk: "Hackathon desk",
  hackEntry: "Entry",
  hackEntryBody: "Internal cohort and external teams. Three to five people. About 25 per event. 24–48 hours.",
  hackOut: "Output",
  hackOutBody: "Working AI prototypes. Not slide decks. Talent is identified live.",
  hackPipe: "Pipeline",
  hackPipeBody: "Strong builds feed the internship desk. Pressure is the filter.",
  proofKicker: "08 — Proof",
  proofTitle: "Proof of work, not a certificate on a wall.",
  outputLabel: "Output",
  assessKicker: "Assessment",
  assessTitle: "How you are evaluated",
  certKicker: "Certification",
  certTitle: "Earned, not issued",
  certCardKicker: "Certificate of completion",
  certCardTitle: "AI Practitioner to Agent Builder",
  certCardBody:
    "Awarded only when modules, one shipped agent, the final project, and 70% live attendance are all true. The name on the paper is the easy part.",
  careerKicker: "09 — After the atelier",
  careerTitle: "The classroom is not the last mile.",
  careerBody:
    "Training, internal project work, internship allocation, then placement preparation. Indicative destination organisations include services majors and product companies — including aspirational tracks toward global teams.",
  pathway: "Indicative pathway",
  investKicker: "10 — Investment",
  investTitleA: "International-grade training.",
  investTitleB: "Accessible tuition.",
  investBody:
    "Two cohorts every month. Intimate enough to be coached, large enough to be a network. Extended ecosystem engagement continues after the 45-day core.",
  invest1: "— Cohorts of 25 to 100 learners",
  invest2: "— Live sessions, workshops, and hackathons included",
  invest3: "— Internship desk and career studio in the same arc",
  tuitionKicker: "Indicative tuition",
  tuitionMeta: "per student · per cohort",
  tuitionNote:
    "Final fee depends on batch, campus partnership, and scholarship. Apply and an admissions coordinator will confirm your seat and amount.",
  requestSeat: "Request a seat",
  faqKicker: "11 — Questions",
  faqTitle: "Before you commit a season of your life.",
  applyKicker: "12 — Admissions",
  applyTitle: "Request a place on the next DISHA cohort.",
  applyLead: "Two cohorts a month. Tell us who you are. We will reply with dates, seat availability, and fee confirmation.",
  applyPref: "— Preference for applicants who can commit to 70% live attendance",
  applyProspectus: "— Prospectus:",
  applyLine: "— Direct line:",
  fieldName: "Full name",
  fieldEmail: "Email",
  fieldPhone: "Phone",
  fieldCity: "City",
  fieldCountry: "Country",
  fieldBackground: "Background",
  fieldNote: "Anything we should know",
  bgStudent: "Student",
  bgPro: "Working professional",
  bgSwitch: "Career switcher",
  bgFounder: "Founder",
  phoneError: "Enter a valid phone number with at least 10 digits.",
  submit: "Submit application",
  received: "Received",
  applyThanksTitle: "Your application is in the queue.",
  applyThanksBody: "Thank you. Keep this reference. Your mail client should open so admissions receives the same details.",
  downloadReceipt: "Download receipt",
  submitAnother: "Submit another",
  closeKicker: "13 — Next bearing",
  closeTitle: "Forty-five days. One agent. A public trail.",
  closeBody: "Cohort 07 opens 18 September 2026. Fourteen seats on the current board. Apply, or read the prospectus first.",
  prospectus: "Read prospectus",
  explore: "Explore",
  institute: "Institute",
  contact: "Contact",
  privacy: "Privacy",
  liveAgent: "Live agent",
  paletteStudio: "Live agent studio",
  paletteApply: "Apply for a seat",
  palettePdf: "Read prospectus",
  switchHi: "Switch to हिन्दी",
  switchEn: "Switch to English",
  footerLine: "Don't just learn AI. Build products and agents — then walk into the market ready.",
  footLive: "Live studio · 3–4 / week",
  footHours: "70 directed hours",
  footHack: "Hackathons · internships",
  footSeats: "India · Remote seats",
  footLang: "English · Global standard",
  copyright: "AI DISHA Institute. All rights reserved.",
  tagline: "Direction, not content. · India",
  privacyBody:
    "Applications you submit are stored on your device and optionally sent by email to admissions. We collect name, contact details, and background only to allocate a cohort seat. We do not sell data. Certificates require 70% attendance and a submitted agent.",
  livePill: "Live · Cohort 07",
  seats: "14 seats",
  compass: "Section compass",
  pageTitle: "AI DISHA Institute — From Practitioner to Agent Builder",
  toggleLang: "Toggle language",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  mailSubject: "DISHA cohort application",
  mailApp: "Application",
  receiptTitle: "AI DISHA Institute — application receipt",
  stackKicker: "Studio stack",
  stackTitle: "The kit you actually work in.",
  scaleKicker: "Reach",
  scaleTitle: "From one atelier to the country.",
  scaleBody: "Live first. Then colleges. Then pan-India hybrid — without replacing the studio.",
  ecosys: "Two months of ecosystem engagement after the 45-day core.",
  prosKicker: "Prospectus",
  prosTitle: "The programme on one sheet.",
  prosBody: "Nine phases, assessment, certification, tuition. Print it, or download the full document.",
  prosPrint: "Print this sheet",
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
  method: "विधि",
  compareKicker: "क्यों दिशा",
  compareTitle: "कंटेंट लाइब्रेरी नहीं। एक निर्देशित 45 दिन।",
  compareLeft: "सामान्य AI कोर्स",
  compareRight: "AI दिशा",
  rhythmKicker: "04 — लय",
  rhythmTitle: "संस्थान का एक सप्ताह वास्तव में कैसा लगता है।",
  currKicker: "05 — नौ चरण",
  currTitle: "पैंतालीस दिन का पाठ्यक्रम, शोर के बिना।",
  currBody:
    "सत्तर निर्देशित घंटे। रीढ़ है लाइव स्टूडियो। हर चरण ऐसे काम पर खत्म होता है जिसे दिखा सको — चैटबॉट, टूल वर्कफ़्लो, एजेंट, कैपस्टोन।",
  days: "दिन",
  atelierKicker: "06 — एटेलियर",
  atelierTitle: "एजेंट के बिना स्नातक नहीं।",
  atelierBody:
    "चार मुख्य बिल्ड। हर एक उस तरह मैप होता है जैसे गंभीर टीमें अब भाषा मॉडल इस्तेमाल करती हैं: रिसर्च, कोड, ऑटोमेशन, ऑर्केस्ट्रेशन। नीचे लाइव रिसर्च एजेंट आज़माओ।",
  input: "इनपुट",
  output: "आउटपुट",
  studioKicker: "लाइव एटेलियर",
  studioTitle: "एजेंट चलाएँ। रिसर्च, कोड, या ऑटोमेशन।",
  studioBody: "तीन मुख्य दिशा बिल्ड, ब्राउज़र में। एक चलाएँ। ब्रीफ एक्सपोर्ट करें। यह कार्यक्रम है, ब्रोशर नहीं।",
  studioResearch: "रिसर्च",
  studioCode: "कोड",
  studioAuto: "ऑटोमेशन",
  studioRun: "एजेंट चलाएँ",
  studioBusy: "दिशा तय…",
  studioCopy: "ब्रीफ कॉपी",
  studioCopied: "कॉपी हो गया",
  studioExport: "एक्सपोर्ट .md",
  studioIdle: "एजेंट चुनो। दिशा दो। जो लौटे उसे एक्सपोर्ट करो।",
  pedagogyKicker: "07 — शिक्षा विधि",
  pedagogyTitle: "पहले स्टूडियो। रिकॉर्डिंग बाद में, अगर कभी।",
  format: "प्रारूप",
  hackDesk: "हैकथॉन डेस्क",
  hackEntry: "प्रवेश",
  hackEntryBody: "आंतरिक कोहोर्ट और बाहरी टीमें। तीन से पाँच लोग। प्रति आयोजन लगभग 25। 24–48 घंटे।",
  hackOut: "आउटपुट",
  hackOutBody: "काम करते AI प्रोटोटाइप। स्लाइड डेक नहीं। प्रतिभा लाइव पहचानी जाती है।",
  hackPipe: "पाइपलाइन",
  hackPipeBody: "मज़बूत बिल्ड इंटर्नशिप डेस्क तक जाते हैं। दबाव ही फ़िल्टर है।",
  proofKicker: "08 — प्रमाण",
  proofTitle: "काम का प्रमाण, दीवार पर प्रमाणपत्र नहीं।",
  outputLabel: "आउटपुट",
  assessKicker: "मूल्यांकन",
  assessTitle: "तुम्हारा मूल्यांकन कैसे होता है",
  certKicker: "प्रमाणन",
  certTitle: "कमाया जाता है, जारी नहीं होता",
  certCardKicker: "पूर्णता प्रमाणपत्र",
  certCardTitle: "AI अभ्यासी से एजेंट बिल्डर",
  certCardBody:
    "तब ही मिलता है जब मॉड्यूल, एक शिप किया एजेंट, अंतिम प्रोजेक्ट, और 70% लाइव उपस्थिति — सब सत्य हों। काग़ज़ पर नाम आसान हिस्सा है।",
  careerKicker: "09 — एटेलियर के बाद",
  careerTitle: "कक्षा आख़िरी मील नहीं है।",
  careerBody:
    "प्रशिक्षण, आंतरिक प्रोजेक्ट, इंटर्नशिप आवंटन, फिर प्लेसमेंट तैयारी। संकेतात्मक गंतव्य में सेवा प्रमुख और उत्पाद कंपनियाँ शामिल हैं — वैश्विक टीमों तक आकांक्षी पटरियाँ भी।",
  pathway: "संकेतात्मक मार्ग",
  investKicker: "10 — निवेश",
  investTitleA: "अंतरराष्ट्रीय स्तर का प्रशिक्षण।",
  investTitleB: "पहुँच के भीतर शुल्क।",
  investBody:
    "हर महीने दो कोहोर्ट। कोचिंग के लिए घनिष्ठ, नेटवर्क के लिए पर्याप्त बड़ा। पैंतालीस दिन के बाद भी इकोसिस्टम जुड़ाव जारी रहता है।",
  invest1: "— 25 से 100 शिक्षार्थियों के कोहोर्ट",
  invest2: "— लाइव सत्र, वर्कशॉप और हैकथॉन शामिल",
  invest3: "— उसी चाप में इंटर्नशिप डेस्क और करियर स्टूडियो",
  tuitionKicker: "संकेतात्मक शुल्क",
  tuitionMeta: "प्रति विद्यार्थी · प्रति कोहोर्ट",
  tuitionNote:
    "अंतिम शुल्क बैच, कैंपस साझेदारी और छात्रवृत्ति पर निर्भर है। आवेदन करो — प्रवेश समन्वयक सीट और राशि की पुष्टि करेगा।",
  requestSeat: "सीट माँगें",
  faqKicker: "11 — प्रश्न",
  faqTitle: "जीवन का एक मौसम देने से पहले।",
  applyKicker: "12 — प्रवेश",
  applyTitle: "अगले दिशा कोहोर्ट में स्थान माँगें।",
  applyLead: "महीने में दो बैच। बताएँ आप कौन हैं। हम तिथि, सीट और शुल्क भेजेंगे।",
  applyPref: "— उन आवेदकों को प्राथमिकता जो 70% लाइव उपस्थिति दे सकें",
  applyProspectus: "— प्रॉस्पेक्टस:",
  applyLine: "— सीधी लाइन:",
  fieldName: "पूरा नाम",
  fieldEmail: "ईमेल",
  fieldPhone: "फ़ोन",
  fieldCity: "शहर",
  fieldCountry: "देश",
  fieldBackground: "पृष्ठभूमि",
  fieldNote: "और कुछ जो हमें पता होना चाहिए",
  bgStudent: "विद्यार्थी",
  bgPro: "कार्यरत पेशेवर",
  bgSwitch: "करियर बदलने वाले",
  bgFounder: "संस्थापक",
  phoneError: "कम से कम 10 अंकों वाला सही फ़ोन नंबर लिखें।",
  submit: "आवेदन जमा करें",
  received: "प्राप्त",
  applyThanksTitle: "तुम्हारा आवेदन कतार में है।",
  applyThanksBody: "धन्यवाद। यह संदर्भ संभालकर रखो। मेल क्लाइंट खुलेगा ताकि प्रवेश को वही विवरण मिले।",
  downloadReceipt: "रसीद डाउनलोड",
  submitAnother: "एक और जमा करें",
  closeKicker: "13 — अगली दिशा",
  closeTitle: "पैंतालीस दिन। एक एजेंट। एक सार्वजनिक पगडंडी।",
  closeBody: "कोहोर्ट 07: 18 सितंबर 2026। इस बोर्ड पर चौदह सीटें। आवेदन करें, या पहले प्रॉस्पेक्टस पढ़ें।",
  prospectus: "प्रॉस्पेक्टस पढ़ें",
  explore: "खोजें",
  institute: "संस्थान",
  contact: "संपर्क",
  privacy: "गोपनीयता",
  liveAgent: "लाइव एजेंट",
  paletteStudio: "लाइव एजेंट स्टूडियो",
  paletteApply: "सीट के लिए आवेदन",
  palettePdf: "प्रॉस्पेक्टस पढ़ें",
  switchHi: "हिन्दी पर जाएँ",
  switchEn: "English पर जाएँ",
  footerLine: "केवल AI मत सीखो। उत्पाद और एजेंट बनाओ — फिर बाज़ार में तैयार होकर निकलो।",
  footLive: "लाइव स्टूडियो · सप्ताह में 3–4",
  footHours: "70 निर्देशित घंटे",
  footHack: "हैकथॉन · इंटर्नशिप",
  footSeats: "भारत · रिमोट सीटें",
  footLang: "अंग्रेज़ी · वैश्विक मानक",
  copyright: "AI दिशा संस्थान। सर्वाधिकार सुरक्षित।",
  tagline: "दिशा, कंटेंट नहीं। · भारत",
  privacyBody:
    "आवेदन आपके उपकरण पर संग्रहीत होता है और वैकल्पिक रूप से प्रवेश को ईमेल होता है। हम नाम और संपर्क केवल सीट के लिए लेते हैं। डेटा नहीं बेचते। प्रमाणपत्र के लिए 70% उपस्थिति और एक एजेंट अनिवार्य है।",
  livePill: "लाइव · कोहोर्ट 07",
  seats: "14 सीटें",
  compass: "खंड कम्पास",
  pageTitle: "AI दिशा संस्थान — अभ्यासी से एजेंट बिल्डर तक",
  toggleLang: "भाषा बदलें",
  openMenu: "मेनू खोलें",
  closeMenu: "मेनू बंद करें",
  mailSubject: "दिशा कोहोर्ट आवेदन",
  mailApp: "आवेदन",
  receiptTitle: "AI दिशा संस्थान — आवेदन रसीद",
  stackKicker: "स्टूडियो स्टैक",
  stackTitle: "जिस किट पर वास्तव में काम करते हो।",
  scaleKicker: "पहुँच",
  scaleTitle: "एक एटेलियर से देश तक।",
  scaleBody: "पहले लाइव। फिर कॉलेज। फिर अखिल भारत हाइब्रिड — स्टूडियो की जगह लिए बिना।",
  ecosys: "पैंतालीस दिन के बाद दो महीने का इकोसिस्टम जुड़ाव।",
  prosKicker: "प्रॉस्पेक्टस",
  prosTitle: "कार्यक्रम एक पन्ने पर।",
  prosBody: "नौ चरण, मूल्यांकन, प्रमाणन, शुल्क। प्रिंट करो, या पूरा दस्तावेज़ डाउनलोड करो।",
  prosPrint: "यह पन्ना प्रिंट करें",
};

const pack: Record<Lang, Copy> = { en, hi };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Copy;
  nav: { href: string; label: string }[];
  tx: (text: Bi) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function tx(lang: Lang, text: Bi) {
  return text[lang];
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("aidisha-lang");
    if (saved === "hi" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
    document.title = pack[lang].pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", pack[lang].heroBody);
  }, [lang]);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("aidisha-lang", l);
  }

  const nav = navLinks.map((l) => ({ href: l.href, label: lang === "hi" ? l.hi : l.en }));

  return (
    <I18nContext.Provider
      value={{
        lang,
        setLang,
        t: pack[lang],
        nav,
        tx: (text) => tx(lang, text),
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("I18n");
  return ctx;
}
