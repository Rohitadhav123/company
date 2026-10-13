export interface TranslationDictionary {
  // Navigation
  nav: {
    work: string;
    services: string;
    about: string;
    process: string;
    contact: string;
    startProject: string;
    studioStatus: string;
    openMenu: string;
    closeMenu: string;
    toggleLanguageLabel: string;
  };

  // Hero Section
  hero: {
    badgeStudio: string;
    badgePill: string;
    headline1: string;
    headline2: string;
    subtext: string;
    startProjectCta: string;
    exploreWorkCta: string;
    videoActive: string;
    canvasFallback: string;
    guideLabel: string;
    scrollToDiscover: string;
    guideTitle: string;
    guideClose: string;
    guideText1: string;
    guideText2: string;
    guideGotIt: string;
  };

  // Selected Work Section
  work: {
    sectionTag: string;
    heading: string;
    subheading: string;
    disclaimerTitle: string;
    disclaimerText: string;
    filterAll: string;
    filterAi: string;
    filterWeb: string;
    filterBrand: string;
    filterMotion: string;
    viewCaseStudy: string;
    enquireProject: string;
    deliverablesLabel: string;
    techStackLabel: string;
    impactLabel: string;
    modalBadge: string;
    modalClose: string;
    modalOverview: string;
    modalChallenge: string;
    modalSolution: string;
    modalCta: string;
  };

  // Services Section
  services: {
    sectionTag: string;
    headingLine1: string;
    headingLine2: string;
    subheading: string;
    transparencyTitle: string;
    transparencyText: string;
    filterDiscipline: string;
    filterAll: string;
    filterAi: string;
    filterEngineering: string;
    filterStrategy: string;
    practiceLabel: string;
    viewSpecs: string;
    enquireService: string;
    bundleTag: string;
    bundleHeading: string;
    bundleDescription: string;
    bundleCta: string;
    modalOverview: string;
    modalCapabilities: string;
    modalDeliverables: string;
    modalWorkflow: string;
    modalTech: string;
    modalCta: string;
  };

  // About Section
  about: {
    sectionTag: string;
    headingPart1: string;
    headingPart2: string;
    paragraph1: string;
    paragraph2: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
    teamHeading: string;
    teamSubheading: string;
    coreCompetencies: string;
  };

  // Process Section
  process: {
    sectionTag: string;
    heading: string;
    subheading: string;
    milestoneDeliverable: string;
    stepIndicator: string;
    keyDeliverables: string;
  };

  // Contact Section
  contact: {
    sectionTag: string;
    headingLine1: string;
    headingLine2: string;
    subheading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    serviceLabel: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successBadge: string;
    successTitle: string;
    successMessage: string;
    openEmailCta: string;
    whatsappCta: string;
    submitAnother: string;
    errName: string;
    errEmail: string;
    errEmailValid: string;
    errDescription: string;
  };

  // Footer
  footer: {
    tagline: string;
    statusAvailable: string;
    liveStudioTime: string;
    istTime: string;
    backToTop: string;
    quickLinks: string;
    studioCapabilities: string;
    directContact: string;
    rights: string;
    privacy: string;
    terms: string;
  };

  // Generic / Common
  common: {
    language: string;
    english: string;
    marathi: string;
    backToHome: string;
    conceptNotice: string;
  };
}

export const TRANSLATIONS: Record<"en" | "mr", TranslationDictionary> = {
  en: {
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      process: "Process",
      contact: "Contact",
      startProject: "Start Project",
      studioStatus: "Q2 Sprints Open",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      toggleLanguageLabel: "मराठी",
    },
    hero: {
      badgeStudio: "TEKZO DIGITAL STUDIO",
      badgePill: "AI CREATIVE • WEB • MOBILE • AUTOMATION",
      headline1: "WE MAKE DIGITAL",
      headline2: "FEEL ALIVE.",
      subtext:
        "We create powerful digital experiences through AI creativity, modern websites, mobile apps, and innovative business solutions.",
      startProjectCta: "START A PROJECT",
      exploreWorkCta: "EXPLORE OUR WORK",
      videoActive: "CUSTOM HERO VIDEO ACTIVE (/videos/tekzo-hero.mp4)",
      canvasFallback: "CINEMATIC CANVAS FALLBACK",
      guideLabel: "[Guide]",
      scrollToDiscover: "SCROLL TO DISCOVER",
      guideTitle: "CUSTOM CANVA HERO VIDEO SETUP",
      guideClose: "CLOSE [✕]",
      guideText1: "The website is configured to automatically play your Canva cinematic video from:",
      guideText2: "Once you drop your exported tekzo-hero.mp4 file into that folder, it will instantly stream right here!",
      guideGotIt: "GOT IT",
    },
    work: {
      sectionTag: "CURATED CASE STUDIES",
      heading: "SELECTED WORK",
      subheading:
        "Explore four self-initiated concept projects demonstrating our mastery in AI creative generation, high-velocity web engineering, and kinetic 3D experiences.",
      disclaimerTitle: "CONCEPT SHOWCASE NOTICE",
      disclaimerText:
        "All four projects below are fictional concepts and R&D prototypes created to demonstrate design and technical capabilities without synthetic claims.",
      filterAll: "All Projects",
      filterAi: "AI Creative",
      filterWeb: "Web & SaaS",
      filterBrand: "Brand & Commerce",
      filterMotion: "3D Motion Lab",
      viewCaseStudy: "VIEW FULL CASE STUDY",
      enquireProject: "Commission Similar Project",
      deliverablesLabel: "KEY DELIVERABLES",
      techStackLabel: "ENGINEERING STACK",
      impactLabel: "PERFORMANCE METRICS",
      modalBadge: "CONCEPT SHOWCASE — R&D PROTOTYPE",
      modalClose: "Close Modal",
      modalOverview: "PROJECT ARCHITECTURE & VISION",
      modalChallenge: "CORE CHALLENGE",
      modalSolution: "ENGINEERED SOLUTION",
      modalCta: "COMMISSION SIMILAR PROJECT",
    },
    services: {
      sectionTag: "TEKZO CAPABILITIES & PRACTICES",
      headingLine1: "SERVICES BUILT",
      headingLine2: "TO PERFORM.",
      subheading:
        "We bridge generative AI art direction, high-velocity engineering, and strategic business architecture. Explore our six core practices designed to launch and scale ambitious brands.",
      transparencyTitle: "INTERACTIVE CAPABILITY LAB",
      transparencyText:
        "Every card below contains a live interactive micro-demonstration of our engineering and visual synthesis pipelines. Interact directly with each canvas to test parameters.",
      filterDiscipline: "DISCIPLINE:",
      filterAll: "All Practices (6)",
      filterAi: "AI & Motion",
      filterEngineering: "Web & Mobile",
      filterStrategy: "Strategy & Automation",
      practiceLabel: "PRACTICE",
      viewSpecs: "View Detailed Specs",
      enquireService: "Commission This Practice",
      bundleTag: "CROSS-PRACTICE COLLABORATION",
      bundleHeading: "NEED AN INTEGRATED FULL-STACK CAMPAIGN?",
      bundleDescription:
        "Most forward-thinking clients bundle our practices—combining AI Key Visuals, a Next.js Web Flagship, and Automated Workflow Telemetry for seamless omnichannel execution.",
      bundleCta: "COMMISSION CROSS-PRACTICE BRIEF",
      modalOverview: "PRACTICE OVERVIEW",
      modalCapabilities: "CORE OFFERINGS & SCOPE",
      modalDeliverables: "KEY DELIVERABLES",
      modalWorkflow: "EXECUTION PIPELINE",
      modalTech: "TECHNOLOGY & TOOLS",
      modalCta: "ENQUIRE ABOUT THIS SERVICE",
    },
    about: {
      sectionTag: "ABOUT TEKZO STUDIO",
      headingPart1: "A COMPACT STUDIO FOR",
      headingPart2: "AMBITIOUS BRANDS.",
      paragraph1:
        "Tekzo is an independent, boutique digital studio operating at the intersection of generative AI art, motion design, and high-performance software engineering.",
      paragraph2:
        "We collaborate with visionary founders and forward-thinking companies to craft immersive web flagships, viral advertising creatives, and transformative digital products.",
      val1Title: "Boutique Studio Model",
      val1Desc:
        "No multi-layered account managers or bureaucratic bottlenecks. You collaborate directly with senior creators and technical architects.",
      val2Title: "Cinematic Aesthetic Bar",
      val2Desc:
        "We reject generic corporate templates. Every project is crafted with bold typography, dark palettes, and motion that commands attention.",
      val3Title: "Modern Engineering Stack",
      val3Desc:
        "We build on Next.js, React 19, TypeScript, and hardware-accelerated WebGL to achieve instant loading and buttery 60fps responsiveness.",
      teamHeading: "LEADERSHIP & TALENT ROSTER",
      teamSubheading:
        "Meet the multidisciplinary specialists leading creative direction, engineering, motion graphics, and strategic delivery.",
      coreCompetencies: "CORE COMPETENCIES",
    },
    process: {
      sectionTag: "EXECUTION FRAMEWORK",
      heading: "OUR PROCESS",
      subheading:
        "We adhere to a rigorous 4-stage engineering and design sprint model ensuring clear communication, tight iteration loops, and flawless production delivery.",
      milestoneDeliverable: "MILESTONE DELIVERABLE",
      stepIndicator: "STAGE",
      keyDeliverables: "KEY DELIVERABLES & ACTIVITIES",
    },
    contact: {
      sectionTag: "START A COLLABORATION",
      headingLine1: "LET'S BUILD SOMETHING",
      headingLine2: "EXTRAORDINARY.",
      subheading:
        "Have a brief ready or need creative consultation? Send your enquiry below, or reach out directly via WhatsApp or Email. We respond within 24 business hours.",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Alex Mercer",
      emailLabel: "Work Email",
      emailPlaceholder: "alex@company.com",
      companyLabel: "Company / Organization",
      companyPlaceholder: "e.g. Acme Innovations",
      serviceLabel: "Primary Service Needed",
      descriptionLabel: "Project Overview & Objectives",
      descriptionPlaceholder:
        "Describe your project vision, target timeline, key requirements, or reference links...",
      submitButton: "SUBMIT PROJECT BRIEF",
      submittingButton: "SAVING TO POSTGRESQL...",
      successBadge: "STORED IN POSTGRESQL",
      successTitle: "ENQUIRY RECEIVED!",
      successMessage:
        "Thank you! Your project specifications have been successfully recorded into our PostgreSQL database. We will respond within 24 hours.",
      openEmailCta: "Open in Email App",
      whatsappCta: "Send via WhatsApp",
      submitAnother: "Submit Another Enquiry",
      errName: "Please enter your name",
      errEmail: "Please enter your email",
      errEmailValid: "Please enter a valid email address",
      errDescription: "Please tell us briefly about your project goals",
    },
    footer: {
      tagline:
        "We make digital feel alive through synthetic AI art direction, dynamic web engineering, and motion graphics inspired by world-class studio design.",
      statusAvailable: "ACCEPTING NEW COMMISSIONS",
      liveStudioTime: "STUDIO TIME",
      istTime: "IST (PUNE / MUMBAI)",
      backToTop: "BACK TO TOP",
      quickLinks: "EXPLORE",
      studioCapabilities: "CAPABILITIES",
      directContact: "DIRECT COMMISSIONS",
      rights: "All rights reserved. Built with Next.js, Three.js & Tailwind CSS.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    common: {
      language: "Language",
      english: "English",
      marathi: "मराठी",
      backToHome: "BACK TO HOMEPAGE",
      conceptNotice: "Concept Prototype",
    },
  },
  mr: {
    nav: {
      work: "प्रकल्प",
      services: "सेवा",
      about: "आमच्याबद्दल",
      process: "कार्यपद्धती",
      contact: "संपर्क",
      startProject: "प्रकल्प सुरू करा",
      studioStatus: "नवीन प्रकल्पांसाठी उपलब्ध",
      openMenu: "मेनू उघडा",
      closeMenu: "मेनू बंद करा",
      toggleLanguageLabel: "English",
    },
    hero: {
      badgeStudio: "टेक्झो डिजिटल स्टुडिओ",
      badgePill: "एआय सर्जनशीलता • वेब • मोबाइल • ऑटोमेशन",
      headline1: "आम्ही डिजिटल विश्वाला",
      headline2: "जिवंत रूप देतो.",
      subtext:
        "आम्ही अत्याधुनिक AI सर्जनशीलता, आधुनिक वेबसाइट्स, मोबाइल अ‍ॅप्स आणि नाविन्यपूर्ण व्यावसायिक तंत्रज्ञानाद्वारे शक्तिशाली डिजिटल अनुभव घडवतो.",
      startProjectCta: "प्रकल्प सुरू करा",
      exploreWorkCta: "आमचे काम पहा",
      videoActive: "कस्टम हिरो व्हिडिओ सुरू (/videos/tekzo-hero.mp4)",
      canvasFallback: "सिनेमॅटिक 3D कॅन्व्हास डिस्प्ले",
      guideLabel: "[मार्गदर्शक]",
      scrollToDiscover: "अधिक जाणून घेण्यासाठी खाली स्क्रोल करा",
      guideTitle: "कॅनव्हा हिरो व्हिडिओ कसा जोडायचा",
      guideClose: "बंद करा [✕]",
      guideText1: "वेबसाइट तुमचा सिनेमॅटिक व्हिडिओ खालील फोल्डरमधून आपोआप प्ले करण्यासाठी तयार आहे:",
      guideText2: "तुम्ही तुमची tekzo-hero.mp4 फाइल त्या फोल्डरमध्ये ठेवताच, व्हिडिओ त्वरित येथे सुरू होईल!",
      guideGotIt: "समजले",
    },
    work: {
      sectionTag: "निवडक प्रकल्प व संकल्पना",
      heading: "आमचे उत्कृष्ट काम",
      subheading:
        "AI निर्मिती, हाय-स्पीड वेब इंजिनिअरिंग आणि 3D मोशन तंत्रज्ञानातील आमची कौशल्ये दाखवणारे चार विशेष संकल्पना प्रकल्प पहा.",
      disclaimerTitle: "संकल्पना प्रदर्शन सूचना",
      disclaimerText:
        "खालील सर्व चार प्रकल्प हे आमची डिझाइन आणि तांत्रिक क्षमता प्रदर्शित करण्यासाठी विकसित केलेले काल्पनिक संकल्पना व संशोधन प्रोटोटाइप आहेत.",
      filterAll: "सर्व प्रकल्प",
      filterAi: "एआय क्रिएटिव्ह",
      filterWeb: "वेब आणि सास",
      filterBrand: "ब्रँड आणि ई-कॉमर्स",
      filterMotion: "3D मोशन लॅब",
      viewCaseStudy: "संपूर्ण केस स्टडी पहा",
      enquireProject: "अशा प्रकल्पासाठी संपर्क करा",
      deliverablesLabel: "महत्त्वाचे डिलिव्हरेबल्स",
      techStackLabel: "वापरलेले तंत्रज्ञान",
      impactLabel: "कामगिरी मेट्रिक्स",
      modalBadge: "संकल्पना प्रदर्शन — R&D प्रोटोटाइप",
      modalClose: "खिडकी बंद करा",
      modalOverview: "प्रकल्प रचना आणि दृष्टिकोन",
      modalChallenge: "मुख्य आव्हान",
      modalSolution: "आम्ही शोधलेला तोडगा",
      modalCta: "अशा प्रकल्पासाठी चौकशी करा",
    },
    services: {
      sectionTag: "टेक्झो क्षमता व व्यावसायिक सेवा",
      headingLine1: "सर्वोत्कृष्ट कामगिरीसाठी",
      headingLine2: "सज्ज सेवा.",
      subheading:
        "आम्ही जेनेरेटिव्ह AI कला, वेगवान वेब-मोबाइल इंजिनिअरिंग आणि धोरणात्मक व्यावसायिक रचनेचा संगम घडवतो. महत्त्वाकांक्षी ब्रँड्सना पुढे नेण्यासाठी आमच्या ६ मुख्य सेवा पहा.",
      transparencyTitle: "इंटरअ‍ॅक्टिव्ह टेस्टिंग लॅब",
      transparencyText:
        "खालील प्रत्येक कार्डमध्ये आमच्या तंत्रज्ञानाचे थेट प्रात्यक्षिक (Live Demo) समाविष्ट आहे. विविध पर्याय तपासण्यासाठी थेट संवाद साधा.",
      filterDiscipline: "विभाग:",
      filterAll: "सर्व सेवा (६)",
      filterAi: "एआय आणि मोशन",
      filterEngineering: "वेब आणि मोबाइल",
      filterStrategy: "स्ट्रॅटेजी आणि ऑटोमेशन",
      practiceLabel: "सेवा क्रमांक",
      viewSpecs: "सविस्तर माहिती पहा",
      enquireService: "या सेवेसाठी संपर्क करा",
      bundleTag: "सर्वसमावेशक पॅकेज",
      bundleHeading: "पूर्ण डिजिटल पॅकेज हवे आहे का?",
      bundleDescription:
        "अनेक दूरदृष्टी असलेले ग्राहक आमच्या सर्व सेवा एकत्र निवडतात—ज्यामध्ये AI की-व्हिज्युअल्स, Next.js वेबसाइट आणि स्वयंचलित ऑटोमेशन प्रणाली एकत्र मिळते.",
      bundleCta: "संपूर्ण पॅकेजची चौकशी करा",
      modalOverview: "सेवेचा सविस्तर परिचय",
      modalCapabilities: "मुख्य वैशिष्ट्ये व व्याप्ती",
      modalDeliverables: "तुम्हाला काय मिळेल",
      modalWorkflow: "कामाची टप्प्याटप्प्याने पद्धत",
      modalTech: "वापरली जाणारी टूल्स",
      modalCta: "या सेवेबद्दल चौकशी करा",
    },
    about: {
      sectionTag: "टेक्झो स्टुडिओबद्दल",
      headingPart1: "महत्त्वाकांक्षी ब्रँड्ससाठी",
      headingPart2: "एक समर्पित डिजिटल स्टुडिओ.",
      paragraph1:
        "टेक्झो हा एक स्वतंत्र, प्रिमियम डिजिटल स्टुडिओ आहे जो प्रगत AI कला, मोशन डिझाइन आणि उच्च कार्यक्षमतेच्या सॉफ्टवेअर इंजिनिअरिंगच्या संगमावर काम करतो.",
      paragraph2:
        "आम्ही उद्योजक आणि प्रगतीशील कंपन्यांसोबत काम करून अत्यंत प्रभावी वेबसाइट्स, आकर्षक जाहिराती आणि डिजिटल प्रॉडक्ट्स तयार करतो.",
      val1Title: "थेट सहकार्य मॉडेल",
      val1Desc:
        "कोणतेही मध्यस्थ किंवा वेळखाऊ व्यवस्थापक नाहीत. तुम्ही थेट आमच्या तज्ज्ञ डिझायनर्स आणि सॉफ्टवेअर आर्किटेक्ट्सशी संवाद साधता.",
      val2Title: "सिनेमॅटिक सौंदर्यशास्त्र",
      val2Desc:
        "आम्ही सामान्य किंवा जुनाट टेम्पलेट्स वापरत नाही. प्रत्येक प्रकल्प आकर्षक टायपोग्राफी, डार्क शेड्स आणि मोहक अ‍ॅनिमेशनने सजवला जातो.",
      val3Title: "आधुनिक तंत्रज्ञान",
      val3Desc:
        "आम्ही Next.js, React 19, TypeScript आणि WebGL वापरतो, ज्यामुळे वेबसाइट क्षणार्धात लोड होते आणि अत्यंत वेगाने चालते.",
      teamHeading: "आमची तज्ज्ञ टीम",
      teamSubheading:
        "क्रिएटिव्ह डिझाइन, सॉफ्टवेअर इंजिनिअरिंग, 3D मोशन आणि व्यवसाय रणनीतीचे नेतृत्व करणाऱ्या तज्ज्ञांना भेटा.",
      coreCompetencies: "मुख्य कौशल्ये",
    },
    process: {
      sectionTag: "कार्यपद्धतीची चौकट",
      heading: "आमची कार्यप्रणाली",
      subheading:
        "आम्ही ४ शिस्तबद्ध टप्प्यांत काम करतो, ज्यामुळे स्पष्ट संवाद, अचूक बदल आणि वेळेवर निर्दोष काम पूर्ण होण्याची खात्री मिळते.",
      milestoneDeliverable: "टप्प्यातील मुख्य फलित",
      stepIndicator: "टप्पा",
      keyDeliverables: "महत्त्वाचे उपक्रम व डिलिव्हरेबल्स",
    },
    contact: {
      sectionTag: "नवे सहकार्य सुरू करा",
      headingLine1: "चला, एकत्र मिळून",
      headingLine2: "काहीतरी अद्वितीय घडवूया.",
      subheading:
        "तुमच्याकडे प्रकल्पाची कल्पना तयार आहे का? खाली फॉर्म भरा किंवा थेट WhatsApp किंवा ईमेलवर संपर्क साधा. आम्ही २४ तासांच्या आत प्रतिसाद देतो.",
      nameLabel: "तुमचे पूर्ण नाव",
      namePlaceholder: "उदा. अमित पाटील",
      emailLabel: "कामाचा ईमेल",
      emailPlaceholder: "amit@company.com",
      companyLabel: "कंपनी किंवा व्यवसायाचे नाव",
      companyPlaceholder: "उदा. स्टार एंटरप्रायझेस",
      serviceLabel: "आवश्यक असलेली मुख्य सेवा",
      descriptionLabel: "प्रकल्पाचे उद्दिष्ट व माहिती",
      descriptionPlaceholder:
        "तुमच्या प्रकल्पाची कल्पना, अपेक्षित मुदत, मुख्य गरजा किंवा संदर्भासाठी लिंक्स येथे लिहा...",
      submitButton: "प्रकल्पाची माहिती पाठवा",
      submittingButton: "डेटाबेसमध्ये सेव्ह करत आहे...",
      successBadge: "माहिती यशस्वीरित्या नोंदवली",
      successTitle: "चौकशी स्वीकारली गेली!",
      successMessage:
        "धन्यवाद! तुमच्या प्रकल्पाची माहिती आमच्या डेटाबेसमध्ये सुरक्षितपणे नोंदवली गेली आहे. आमची टीम २४ तासांत तुमच्याशी संपर्क साधेल.",
      openEmailCta: "ईमेल अ‍ॅपमध्ये उघडा",
      whatsappCta: "WhatsApp वर मेसेज करा",
      submitAnother: "दुसरी चौकशी पाठवा",
      errName: "कृपया तुमचे नाव प्रविष्ट करा",
      errEmail: "कृपया तुमचा ईमेल प्रविष्ट करा",
      errEmailValid: "कृपया वैध ईमेल पत्ता प्रविष्ट करा",
      errDescription: "कृपया तुमच्या प्रकल्पाबद्दल थोडक्यात सांगा",
    },
    footer: {
      tagline:
        "आम्ही AI कला, आधुनिक वेब तंत्रज्ञान आणि आंतरराष्ट्रीय दर्जाच्या मोशन डिझाइनद्वारे डिजिटल अनुभवांना चैतन्यमय बनवतो.",
      statusAvailable: "नवीन प्रकल्पांसाठी बुकिंग सुरू आहे",
      liveStudioTime: "स्टुडिओ वेळ",
      istTime: "IST (पुणे / मुंबई)",
      backToTop: "वर जा",
      quickLinks: "महत्त्वाच्या लिंक्स",
      studioCapabilities: "आमच्या सेवा",
      directContact: "थेट संपर्क",
      rights: "सर्व हक्क राखीव. Next.js, Three.js आणि Tailwind CSS द्वारे निर्मित.",
      privacy: "गोपनीयता धोरण",
      terms: "वापराच्या अटी",
    },
    common: {
      language: "भाषा",
      english: "English",
      marathi: "मराठी",
      backToHome: "मुख्यपृष्ठावर परत जा",
      conceptNotice: "संकल्पना प्रोटोटाइप",
    },
  },
};
