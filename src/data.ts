export type Bi = { en: string; hi: string };

export const navLinks = [
  { href: "#program", en: "Institute", hi: "संस्थान" },
  { href: "#curriculum", en: "Curriculum", hi: "पाठ्यक्रम" },
  { href: "#agents", en: "Atelier", hi: "एटेलियर" },
  { href: "#outcomes", en: "Outcomes", hi: "परिणाम" },
  { href: "#apply", en: "Admissions", hi: "प्रवेश" },
];

export const stats = [
  { value: 45, suffix: { en: "days", hi: "दिन" }, label: { en: "Live core programme", hi: "लाइव मुख्य कार्यक्रम" } },
  { value: 70, suffix: { en: "hrs", hi: "घंटे" }, label: { en: "Directed studio time", hi: "निर्देशित स्टूडियो समय" } },
  { value: 9, suffix: { en: "phases", hi: "चरण" }, label: { en: "Python to placement", hi: "पाइथन से प्लेसमेंट" } },
  { value: 1, suffix: { en: "agent", hi: "एजेंट" }, label: { en: "Shipped by every graduate", hi: "हर स्नातक का एजेंट" } },
];

export const pillars = [
  {
    index: "01",
    title: { en: "Build, don't spectate", hi: "बनाओ, सिर्फ़ देखो मत" },
    body: {
      en: "Live coding, weekly workshops, and a public GitHub trail. You leave with working products — not a folder of notes.",
      hi: "लाइव कोडिंग, साप्ताहिक वर्कशॉप, और सार्वजनिक GitHub पगडंडी। नोट्स की फ़ाइल नहीं — काम करते उत्पाद लेकर निकलोगे।",
    },
  },
  {
    index: "02",
    title: { en: "Agents as the destination", hi: "मंज़िल है एजेंट" },
    body: {
      en: "Research, code, automation, and multi-tool agents are the core outcome. This is how serious teams now ship intelligence.",
      hi: "रिसर्च, कोड, ऑटोमेशन और मल्टी-टूल एजेंट ही मुख्य परिणाम हैं। गंभीर टीमें अब इसी तरह इंटेलिजेंस शिप करती हैं।",
    },
  },
  {
    index: "03",
    title: { en: "A path after the atelier", hi: "एटेलियर के बाद का रास्ता" },
    body: {
      en: "Internship allocation, résumé and interview craft, and a hiring pipeline — so momentum does not end on day forty-five.",
      hi: "इंटर्नशिप आवंटन, रिज़्यूमे और इंटरव्यू शिल्प, और हायरिंग पाइपलाइन — ताकि वेग पैंतालीसवें दिन न रुक जाए।",
    },
  },
];

export const phases = [
  {
    days: "01–10",
    title: { en: "Python foundation", hi: "पाइथन नींव" },
    detail: {
      en: "Syntax to APIs. Close the phase by shipping a mini chatbot — your first working AI surface.",
      hi: "सिंटैक्स से API तक। चरण का अंत: मिनी चैटबॉट — तुम्हारी पहली काम करती AI सतह।",
    },
  },
  {
    days: "11–15",
    title: { en: "AI fundamentals", hi: "AI मूल सिद्धांत" },
    detail: {
      en: "Models, context, and prompt engineering with the discipline of a practitioner, not a tourist.",
      hi: "मॉडल, कॉन्टेक्स्ट और प्रॉम्प्ट इंजीनियरिंग — पर्यटक नहीं, अभ्यासी की अनुशासन से।",
    },
  },
  {
    days: "16–22",
    title: { en: "The AI toolstack", hi: "AI टूलस्टैक" },
    detail: {
      en: "Text, image, audio, video, and code tools — used as a production kit, not a toy chest.",
      hi: "टेक्स्ट, इमेज, ऑडियो, वीडियो और कोड टूल — खिलौना पेटी नहीं, प्रोडक्शन किट।",
    },
  },
  {
    days: "23–26",
    title: { en: "AI & cybersecurity", hi: "AI और साइबरसुरक्षा" },
    detail: {
      en: "Data protection, model risk, and how security teams actually use AI in the field.",
      hi: "डेटा सुरक्षा, मॉडल जोखिम, और सुरक्षा टीमें मैदान में AI का इस्तेमाल कैसे करती हैं।",
    },
  },
  {
    days: "27–29",
    title: { en: "Trends & careers", hi: "रुझान और करियर" },
    detail: {
      en: "Where the roles are, how portfolios are read, and how to position yourself in a noisy market.",
      hi: "भूमिकाएँ कहाँ हैं, पोर्टफोलियो कैसे पढ़े जाते हैं, शोर भरे बाज़ार में खुद को कैसे रखें।",
    },
  },
  {
    days: "30–32",
    title: { en: "AI + robotics", hi: "AI + रोबोटिक्स" },
    detail: {
      en: "The physical layer: perception, control basics, and why agents will not stay on screens.",
      hi: "भौतिक परत: परसेप्शन, कंट्रोल की बुनियाद, और एजेंट स्क्रीन पर क्यों नहीं रुकेंगे।",
    },
  },
  {
    days: "33–40",
    title: { en: "AI agent development", hi: "AI एजेंट विकास" },
    detail: {
      en: "The core: research agents, code agents, and multi-tool systems that take real work off a human's desk.",
      hi: "मूल: रिसर्च एजेंट, कोड एजेंट, और मल्टी-टूल सिस्टम जो इंसान की मेज़ से असली काम उठाते हैं।",
    },
  },
  {
    days: "41–43",
    title: { en: "Capstone projects", hi: "कैपस्टोन प्रोजेक्ट" },
    detail: {
      en: "A demo-ready product under assessment. This is the piece you show a hiring manager.",
      hi: "मूल्यांकन के तहत डेमो-तैयार उत्पाद। यही टुकड़ा हायरिंग मैनेजर को दिखाते हो।",
    },
  },
  {
    days: "44–45",
    title: { en: "Career studio", hi: "करियर स्टूडियो" },
    detail: {
      en: "Résumé, interview, and internship matching — converting skill into an offer conversation.",
      hi: "रिज़्यूमे, इंटरव्यू, इंटर्नशिप मैचिंग — कौशल को ऑफ़र बातचीत में बदलना।",
    },
  },
];

export const agents = [
  {
    name: { en: "Research agent", hi: "रिसर्च एजेंट" },
    input: { en: "A topic", hi: "एक विषय" },
    output: { en: "A structured brief", hi: "संरचित ब्रीफ" },
    copy: {
      en: "Ingest a question, search, synthesise, and return a report a professional can act on.",
      hi: "प्रश्न लो, खोजो, संश्लेषण करो, और ऐसी रिपोर्ट दो जिस पर पेशेवर काम कर सके।",
    },
  },
  {
    name: { en: "Code assistant", hi: "कोड सहायक" },
    input: { en: "A codebase", hi: "कोडबेस" },
    output: { en: "Fixes & generation", hi: "सुधार और निर्माण" },
    copy: {
      en: "Debug, scaffold, and explain. The agent as a pair-programmer you designed yourself.",
      hi: "डिबग, स्कैफ़ोल्ड, समझाओ। एजेंट एक पेयर-प्रोग्रामर की तरह — जिसे तुमने स्वयं डिज़ाइन किया।",
    },
  },
  {
    name: { en: "Automation agent", hi: "ऑटोमेशन एजेंट" },
    input: { en: "A workflow", hi: "वर्कफ़्लो" },
    output: { en: "Multi-step execution", hi: "बहु-चरण निष्पादन" },
    copy: {
      en: "Chain tools across a process so routine work happens without a human in every loop.",
      hi: "प्रक्रिया में टूल जोड़ो ताकि नियमित काम हर लूप में इंसान के बिना हो।",
    },
  },
  {
    name: { en: "Multi-tool agent", hi: "मल्टी-टूल एजेंट" },
    input: { en: "A messy brief", hi: "बिखरा ब्रीफ" },
    output: { en: "Search · summarise · ship", hi: "खोज · सार · शिप" },
    copy: {
      en: "Orchestrate several capabilities into one coherent product — the signature DISHA build.",
      hi: "कई क्षमताओं को एक सुसंगत उत्पाद में बाँधो — दिशा का हस्ताक्षर बिल्ड।",
    },
  },
];

export const delivery = [
  {
    title: { en: "Live studio", hi: "लाइव स्टूडियो" },
    meta: { en: "3–4 sessions / week · 60–90 min", hi: "सप्ताह में 3–4 सत्र · 60–90 मिनट" },
    body: {
      en: "Concepts, live coding, and tool walkthroughs with an instructor in the room — not a playlist you abandon.",
      hi: "अवधारणाएँ, लाइव कोडिंग, टूल वॉकथ्रू — कमरे में इंस्ट्रक्टर के साथ। वह प्लेलिस्ट नहीं जिसे छोड़ देते हो।",
    },
  },
  {
    title: { en: "Workshops", hi: "वर्कशॉप" },
    meta: { en: "Weekly / bi-weekly deep dives", hi: "साप्ताहिक / पाक्षिक गहराई" },
    body: {
      en: "Hands-on labs on tools, agent architecture, and deployment. This is where theory becomes muscle memory.",
      hi: "टूल, एजेंट आर्किटेक्चर, डिप्लॉयमेंट की लैब। यहीं सिद्धांत मांसपेशी-स्मृति बनता है।",
    },
  },
  {
    title: { en: "Hackathons", hi: "हैकथॉन" },
    meta: { en: "24–48 hours · teams of 3–5", hi: "24–48 घंटे · 3–5 की टीमें" },
    body: {
      en: "Internal and external entries. Prototypes under pressure — and a live talent identification track.",
      hi: "आंतरिक और बाहरी प्रविष्टियाँ। दबाव में प्रोटोटाइप — और लाइव प्रतिभा पहचान।",
    },
  },
];

export const outputs = [
  {
    title: { en: "3–5 shipped projects", hi: "3–5 शिप किए प्रोजेक्ट" },
    body: { en: "A body of work, not a single assignment.", hi: "काम का समूह, एक असाइनमेंट नहीं।" },
  },
  {
    title: { en: "One production AI agent", hi: "एक प्रोडक्शन AI एजेंट" },
    body: { en: "The non-negotiable graduate requirement.", hi: "स्नातक की अनिवार्य शर्त।" },
  },
  {
    title: { en: "Public GitHub portfolio", hi: "सार्वजनिक GitHub पोर्टफोलियो" },
    body: { en: "Readable history a recruiter can open tonight.", hi: "पढ़ने योग्य इतिहास जो रिक्रूटर आज रात खोल सके।" },
  },
  {
    title: { en: "Interview-ready résumé", hi: "इंटरव्यू-तैयार रिज़्यूमे" },
    body: { en: "Positioned for AI practitioner and builder roles.", hi: "AI अभ्यासी और बिल्डर भूमिकाओं के लिए।" },
  },
  {
    title: { en: "Demo-ready product", hi: "डेमो-तैयार उत्पाद" },
    body: { en: "Something you can walk through, live, without slides.", hi: "जिसे बिना स्लाइड, लाइव चलाकर दिखा सको।" },
  },
];

export const assessment = [
  { label: { en: "Projects", hi: "प्रोजेक्ट" }, value: "40–50%" },
  { label: { en: "Final project", hi: "अंतिम प्रोजेक्ट" }, value: "20–30%" },
  { label: { en: "Assignments", hi: "असाइनमेंट" }, value: "15–25%" },
  { label: { en: "Participation", hi: "सहभागिता" }, value: "10%" },
];

export const certRules: Bi[] = [
  { en: "Complete every module", hi: "हर मॉड्यूल पूरा करो" },
  { en: "Ship at least one AI agent", hi: "कम से कम एक AI एजेंट शिप करो" },
  { en: "Submit the final project", hi: "अंतिम प्रोजेक्ट जमा करो" },
  { en: "Attend 70% or more of live sessions", hi: "लाइव सत्रों में 70% या अधिक उपस्थिति" },
];

export const pipeline = [
  {
    step: "01",
    title: { en: "Train", hi: "प्रशिक्षण" },
    body: { en: "Forty-five days of live instruction across nine phases.", hi: "नौ चरणों में पैंतालीस दिन की लाइव शिक्षा।" },
  },
  {
    step: "02",
    title: { en: "Build internally", hi: "आंतरिक निर्माण" },
    body: { en: "Project work that proves you can ship, not just sit.", hi: "प्रोजेक्ट कार्य जो साबित करे कि तुम शिप कर सकते हो, सिर्फ़ बैठ नहीं सकते।" },
  },
  {
    step: "03",
    title: { en: "Intern", hi: "इंटर्न" },
    body: { en: "Allocation through the institute's internship desk.", hi: "संस्थान के इंटर्नशिप डेस्क से आवंटन।" },
  },
  {
    step: "04",
    title: { en: "Place", hi: "प्लेसमेंट" },
    body: { en: "Interview craft aimed at product and services organisations.", hi: "उत्पाद और सेवा संगठनों के लिए इंटरव्यू शिल्प।" },
  },
];

export const companies: Bi[] = [
  { en: "TCS", hi: "TCS" },
  { en: "Infosys", hi: "Infosys" },
  { en: "Amazon", hi: "Amazon" },
  { en: "Product houses", hi: "उत्पाद घराने" },
  { en: "AI-native teams", hi: "AI-नेटिव टीमें" },
];

export const audiences = [
  {
    title: { en: "The student", hi: "विद्यार्थी" },
    body: {
      en: "You want a first career that does not begin with a tutorial graveyard. Ten days of Python. Then the real work.",
      hi: "पहला करियर ट्यूटोरियल कब्रिस्तान से न शुरू हो। दस दिन पाइथन। फिर असली काम।",
    },
  },
  {
    title: { en: "The professional", hi: "पेशेवर" },
    body: {
      en: "You already work. You need agents, not another certificate. Studio hours that respect a calendar.",
      hi: "तुम पहले से काम करते हो। और एक सर्टिफिकेट नहीं, एजेंट चाहिए। स्टूडियो घंटे जो कैलेंडर का सम्मान करें।",
    },
  },
  {
    title: { en: "The founder", hi: "संस्थापक" },
    body: {
      en: "You need a working product and a public trail. DISHA is an atelier, not a lecture hall.",
      hi: "काम करता उत्पाद और सार्वजनिक पगडंडी चाहिए। दिशा एटेलियर है, व्याख्यान कक्ष नहीं।",
    },
  },
];

export const week = [
  {
    when: { en: "Mon – Thu", hi: "सोम – गुरु" },
    title: { en: "Live studio", hi: "लाइव स्टूडियो" },
    body: {
      en: "Concepts, live coding, tool demonstrations. 60–90 minutes. Camera on.",
      hi: "अवधारणाएँ, लाइव कोडिंग, टूल प्रदर्शन। 60–90 मिनट। कैमरा ऑन।",
    },
  },
  {
    when: { en: "Weekly", hi: "साप्ताहिक" },
    title: { en: "Workshop", hi: "वर्कशॉप" },
    body: {
      en: "Deep dives: tools, agent architecture, deployment. Hands on the metal.",
      hi: "गहरी गोताखोरी: टूल, एजेंट आर्किटेक्चर, डिप्लॉयमेंट। हाथ धातु पर।",
    },
  },
  {
    when: { en: "Cohort", hi: "कोहोर्ट" },
    title: { en: "Hackathon", hi: "हैकथॉन" },
    body: {
      en: "24–48 hours. Teams of three to five. Prototypes under pressure.",
      hi: "24–48 घंटे। तीन से पाँच की टीमें। दबाव में प्रोटोटाइप।",
    },
  },
  {
    when: { en: "Continuous", hi: "निरंतर" },
    title: { en: "Build trail", hi: "बिल्ड पगडंडी" },
    body: {
      en: "Projects, GitHub, reviews. The portfolio is the attendance record.",
      hi: "प्रोजेक्ट, GitHub, समीक्षा। पोर्टफोलियो ही उपस्थिति है।",
    },
  },
];

export const faqs = [
  {
    q: { en: "Who is this for?", hi: "यह किसके लिए है?" },
    a: {
      en: "Students and early professionals who want to move from using AI tools to building AI systems. Python beginners are welcome — the first ten days exist for that reason.",
      hi: "विद्यार्थी और शुरुआती पेशेवर जो AI टूल इस्तेमाल करने से AI सिस्टम बनाने तक जाना चाहते हैं। पाइथन शुरुआती स्वागत योग्य हैं — पहले दस दिन इसीलिए हैं।",
    },
  },
  {
    q: { en: "Is this recorded content?", hi: "क्या यह रिकॉर्डेड सामग्री है?" },
    a: {
      en: "No. Live sessions are the primary mode, supported by workshops, hackathons, and projects. Later scale adds hybrid and recorded material without replacing the studio.",
      hi: "नहीं। लाइव सत्र मुख्य माध्यम हैं, वर्कशॉप, हैकथॉन और प्रोजेक्ट के साथ। बाद में स्केल पर हाइब्रिड और रिकॉर्डेड सामग्री आएगी — स्टूडियो की जगह नहीं लेगी।",
    },
  },
  {
    q: { en: "What do I walk away with?", hi: "साथ क्या लेकर जाऊँगा?" },
    a: {
      en: "Three to five projects, one AI agent, a GitHub portfolio, a résumé, and a demo-ready product — plus internship and placement preparation.",
      hi: "तीन से पाँच प्रोजेक्ट, एक AI एजेंट, GitHub पोर्टफोलियो, रिज़्यूमे, और डेमो-तैयार उत्पाद — साथ में इंटर्नशिप और प्लेसमेंट तैयारी।",
    },
  },
  {
    q: { en: "How are cohorts structured?", hi: "कोहोर्ट कैसे बने होते हैं?" },
    a: {
      en: "Two cohorts a month, typically 25–100 learners. Extended ecosystem engagement continues for about two months beyond the 45-day core.",
      hi: "महीने में दो कोहोर्ट, आमतौर पर 25–100 शिक्षार्थी। पैंतालीस दिन के बाद लगभग दो महीने तक विस्तारित इकोसिस्टम जुड़ाव जारी रहता है।",
    },
  },
  {
    q: { en: "How is the certificate awarded?", hi: "प्रमाणपत्र कैसे मिलता है?" },
    a: {
      en: "You must complete all modules, build at least one agent, submit the final project, and attend at least 70% of sessions. It is earned, not issued for enrolment.",
      hi: "सभी मॉड्यूल पूरे करो, कम से कम एक एजेंट बनाओ, अंतिम प्रोजेक्ट जमा करो, और कम से कम 70% सत्रों में उपस्थित रहो। यह कमाया जाता है, नामांकन पर नहीं दिया जाता।",
    },
  },
  {
    q: { en: "What does it cost?", hi: "शुल्क कितना है?" },
    a: {
      en: "Indicative tuition is ₹5,000–₹10,000 per student, per cohort. The final amount depends on batch, campus partnership, and scholarship. Admissions confirms the figure with your seat.",
      hi: "संकेतात्मक शुल्क ₹5,000–₹10,000 प्रति विद्यार्थी, प्रति कोहोर्ट। अंतिम राशि बैच, कैंपस साझेदारी और छात्रवृत्ति पर निर्भर है। प्रवेश सीट के साथ राशि की पुष्टि करेगा।",
    },
  },
  {
    q: { en: "Can I join remotely?", hi: "क्या मैं रिमोट से जुड़ सकता हूँ?" },
    a: {
      en: "Yes. Live studio is the primary mode, with seats in India and remote. Camera on. The certificate still requires 70% attendance.",
      hi: "हाँ। लाइव स्टूडियो मुख्य माध्यम है, भारत और रिमोट दोनों सीटें। कैमरा ऑन। प्रमाणपत्र के लिए फिर भी 70% उपस्थिति चाहिए।",
    },
  },
  {
    q: { en: "What language is the programme taught in?", hi: "कार्यक्रम किस भाषा में पढ़ाया जाता है?" },
    a: {
      en: "English, to a global standard. Studio, briefs, GitHub, and the final demo are in English so the portfolio travels.",
      hi: "अंग्रेज़ी, वैश्विक मानक पर। स्टूडियो, ब्रीफ, GitHub और अंतिम डेमो अंग्रेज़ी में हैं ताकि पोर्टफोलियो दुनिया में चले।",
    },
  },
  {
    q: { en: "Are internships guaranteed?", hi: "क्या इंटर्नशिप गारंटी है?" },
    a: {
      en: "No honest institute guarantees an offer. DISHA runs an internship desk and placement preparation after internal project work. Outcomes depend on your builds and attendance.",
      hi: "कोई ईमानदार संस्थान ऑफ़र की गारंटी नहीं देता। दिशा आंतरिक प्रोजेक्ट के बाद इंटर्नशिप डेस्क और प्लेसमेंट तैयारी चलाता है। परिणाम तुम्हारे बिल्ड और उपस्थिति पर निर्भर हैं।",
    },
  },
];

export const tickerItems: Bi[] = [
  { en: "Live studio", hi: "लाइव स्टूडियो" },
  { en: "Agent engineering", hi: "एजेंट इंजीनियरिंग" },
  { en: "Hackathons", hi: "हैकथॉन" },
  { en: "Internship pipeline", hi: "इंटर्नशिप पाइपलाइन" },
  { en: "Python to production", hi: "पाइथन से प्रोडक्शन" },
  { en: "Cybersecurity + AI", hi: "साइबरसुरक्षा + AI" },
  { en: "Portfolio reviews", hi: "पोर्टफोलियो समीक्षा" },
  { en: "Career studio", hi: "करियर स्टूडियो" },
  { en: "Pan-India · Remote seats", hi: "अखिल भारत · रिमोट सीटें" },
];

export const compareRows = [
  {
    usual: {
      en: "A recorded playlist you abandon in week two",
      hi: "रिकॉर्डेड प्लेलिस्ट जिसे दूसरे हफ़्ते छोड़ देते हो",
    },
    ours: {
      en: "Live studio, three to four sessions a week, camera on",
      hi: "लाइव स्टूडियो, सप्ताह में तीन-चार सत्र, कैमरा ऑन",
    },
  },
  {
    usual: { en: "A certificate for sitting through slides", hi: "स्लाइड देखकर मिला प्रमाणपत्र" },
    ours: { en: "A certificate only if you ship an agent", hi: "प्रमाणपत्र तभी जब एजेंट शिप करो" },
  },
  {
    usual: { en: "Prompt tricks as the whole curriculum", hi: "पूरा पाठ्यक्रम सिर्फ़ प्रॉम्प्ट ट्रिक" },
    ours: {
      en: "Python → tools → security → robotics → agents",
      hi: "पाइथन → टूल → सुरक्षा → रोबोटिक्स → एजेंट",
    },
  },
  {
    usual: { en: "The course ends when the Zoom ends", hi: "ज़ूम खत्म तो कोर्स खत्म" },
    ours: { en: "Internship desk and career studio on days 44–45", hi: "दिन 44–45 पर इंटर्नशिप डेस्क और करियर स्टूडियो" },
  },
  {
    usual: { en: "One language, one city, one recording", hi: "एक भाषा, एक शहर, एक रिकॉर्डिंग" },
    ours: { en: "English, India and remote, taught to a global standard", hi: "अंग्रेज़ी, भारत और रिमोट, वैश्विक मानक पर" },
  },
];

export const contact = {
  email: "admissions@aidisha.vercel.app",
  site: "https://aidisha.vercel.app",
  github: "https://github.com/ballasuresh/aidisha",
  prospectus: "/programme.pdf",
};
