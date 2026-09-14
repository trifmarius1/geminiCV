import { ContactInfo, ExperienceItem, SkillCategory, EducationItem, LanguageSkill, CANMessage, RecommendationItem, FaqItem } from '../types';

export const contactData: ContactInfo = {
  name: "Marius Trif",
  title: "Software Test Engineer",
  secondaryTitle: "Automotive Systems (EV Body Control Modules & Clusters) • AI-Augmented Testing • ASPICE & ISO 26262",
  phone: "+40745221158",
  email: "trif_marius1@yahoo.com",
  secondaryEmail: "trifmarius1@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/marius-trif-239aa8104/",
  linkedInHandle: "marius-trif-239aa8104",
  location: "Cluj-Napoca, Romania",
  remoteStatus: "Open to Remote, Hybrid & Relocation",
  availability: "Available for Senior / Lead Test Engineer Opportunities",
  yearsOfExperience: "10+ Years",
  itExperience: "16+ Years Total IT & Engineering",
  summary: "Results-driven Software Test Engineer with 10+ years of dedicated experience delivering high-quality solutions across the automotive and IT sectors, complemented by an additional 6 years in mission-critical IT and engineering projects. Specialized in validating complex, safety-critical systems including Body Control Modules (BCM) for next-generation electric vehicles (EV), Instrument Clusters, and Mobile/Web platforms. Proven ability to ensure product reliability and strict compliance by driving quality throughout the entire SDLC, mitigating functional safety risks in high-stakes environments, and applying ASPICE-aligned processes and ISO 26262 standards. Known for integrating state-of-the-art AI agents into the testing lifecycle to amplify test coverage, accelerate SWIT/SWT Python automation, and ensure flawless production readiness."
};

export const statsData = [
  { label: "Automotive & QA Experience", value: "10+ Yrs", sub: "EV BCM & Instrument Clusters" },
  { label: "Total Tech Track Record", value: "16+ Yrs", sub: "Engineering & IT Projects" },
  { label: "Functional Safety Standard", value: "ISO 26262", sub: "ASIL-B/D Compliance" },
  { label: "Process Standard", value: "ASPICE", sub: "V-Model Traceability in DOORS" },
  { label: "Automation & Protocols", value: "Vector CAN", sub: "CANoe, CANalyzer, Python SWIT" },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "aumovio",
    company: "AUMOVIO",
    role: "Software Test Engineer",
    location: "Iași, Romania (Remote)",
    period: "September 2023 - Present",
    duration: "2 yrs 11 mos",
    isCurrent: true,
    domain: "automotive",
    highlightBadge: "Current Role • EV BCM & AI QA",
    summary: "Leading software verification and validation for cutting-edge Body Control Module (BCM) platforms in Electric Vehicles within an ASPICE-certified, ISO 26262 safety-compliant framework.",
    keyResponsibilities: [
      "Validate and verify software functionalities for Body Control Module (BCM) platforms in electric vehicles under ASPICE-certified automotive standards.",
      "Utilize AI agents to innovate test generation, edge-case discovery, test coverage optimization, and software reliability throughout the SDLC.",
      "Analyze and validate real-time in-vehicle communications using Vector CAN tools (CANalyzer, CANoe).",
      "Interpret and rigorously test against ISO 26262 Functional Safety requirements to prevent hazardous system behaviors.",
      "Automate SWIT (Software Integration Testing) and SWT (Software Testing) test script creation and execution using Python extensions within VS Code.",
      "Decompose and classify complex system requirements into appropriate test levels (unit, integration, and system) using IBM DOORS as the Test Management Tool.",
      "Assess requirement maturity, identify inconsistencies or gaps, and evaluate SUT (System Under Test) behavior.",
      "Collaborate cross-functionally with technical experts, systems architects, and Scrum teams in an Agile delivery rhythm.",
      "Prepare comprehensive test coverage reports and defect trend metrics to drive rapid course corrections and process improvement initiatives."
    ],
    technologies: [
      "Vector CANoe",
      "Vector CANalyzer",
      "ISO 26262",
      "ASPICE",
      "AI Agents",
      "Python SWIT/SWT",
      "IBM DOORS",
      "WinIDEA",
      "VS Code",
      "JIRA",
      "GitHub",
      "Bitbucket",
      "Confluence",
      "Artifactory"
    ],
    impactMetric: "Zero critical escape defects on BCM EV release milestones & automated test coverage expansion using AI agents"
  },
  {
    id: "marelli",
    company: "Marelli",
    role: "Software Function Tester",
    location: "Cluj, Romania",
    period: "August 2018 - August 2023",
    duration: "5 yrs 1 mo",
    domain: "automotive",
    highlightBadge: "5+ Years • Instrument Clusters & Mentorship",
    summary: "Spearheaded functional testing of Instrument Cluster systems in ASPICE automotive programs, leading new joiner onboarding and delivering end-to-end hardware-in-the-loop diagnostics.",
    keyResponsibilities: [
      "Designed and delivered structured onboarding and training programs for new joiners, creating comprehensive training modules and mentoring colleagues to accelerate ramp-up time significantly.",
      "Validated vehicle functionalities for high-performance Instrument Cluster systems in ASPICE-certified automotive environments.",
      "Analyzed in-vehicle bus traffic and validated communication protocols using Vector CANalyzer and CANoe.",
      "Conducted rigorous testing aligned with ISO 26262 Functional Safety standards.",
      "Operated specialized microcontroller diagnostics and flashing tools including Renesas Flash Programmer, eFlashLoad, DLT Viewer, MULTI, and TeraTerm.",
      "Tracked, documented, and triaged defects using JIRA, ensuring full requirement-to-defect traceability in IBM DOORS.",
      "Designed, maintained, and executed manual and semi-automated test suites across unit, integration, and system validation levels.",
      "Participated in cross-domain coordination meetings and release planning to ensure alignment across international engineering hubs."
    ],
    technologies: [
      "Vector CANoe",
      "Vector CANalyzer",
      "Renesas Flash Programmer",
      "eFlashLoad",
      "DLT Viewer",
      "MULTI",
      "TeraTerm",
      "ISO 26262",
      "ASPICE",
      "IBM DOORS",
      "JIRA",
      "SharePoint",
      "Alfresco",
      "Bitbucket"
    ],
    impactMetric: "Onboarded and mentored multiple testing cohorts; sustained 99%+ test case coverage across automotive cluster releases"
  },
  {
    id: "endava",
    company: "Endava",
    role: "Software Tester / Junior Tester",
    location: "Cluj, Romania",
    period: "April 2016 - July 2018",
    duration: "2 yrs 4 mos",
    domain: "it",
    highlightBadge: "Mobile & Cross-Browser Web QA",
    summary: "Delivered comprehensive Quality Assurance for native mobile applications (iOS & Android) and high-traffic web applications with cross-browser compatibility.",
    keyResponsibilities: [
      "Performed exhaustive Mobile Testing across real iOS and Android physical devices and emulators.",
      "Conducted extensive Web Testing, validating cross-browser functionality, responsive breakpoints, and performance.",
      "Executed Sanity, Smoke, System Integration (SIT), and comprehensive Regression testing cycles.",
      "Managed defects and test case execution repositories using HP Quality Center (ALM) and JIRA frameworks.",
      "Collaborated directly with international client technical experts and product owners to clarify specifications and validate change requests.",
      "Promoted from Junior Tester to Software Tester based on testing precision, bug reporting thoroughness, and fast feature turnarounds."
    ],
    technologies: [
      "Mobile Testing (iOS & Android)",
      "Web Cross-Browser Testing",
      "HP Quality Center / ALM",
      "JIRA",
      "Regression Testing",
      "System Integration (SIT)",
      "Agile Scrum"
    ],
    impactMetric: "Recognized with internal promotion from Junior to Mid Tester; validated multi-platform releases with zero blocker escapes"
  },
  {
    id: "emerson",
    company: "Emerson Process Management",
    role: "Proposal Engineer",
    location: "Cluj-Napoca, Romania",
    period: "January 2012 - April 2016",
    duration: "4 yrs 4 mos",
    domain: "engineering",
    highlightBadge: "Multimillion-Dollar Engineering Proposals",
    summary: "Designed proactive technical and commercial engineering solutions for industrial process management clients across Europe, securing high-value international contracts.",
    keyResponsibilities: [
      "Designed proactive technical solutions and compiled comprehensive proposals to drive business growth for new and existing clients.",
      "Delivered technical sales support to European commercial teams, crafting tailored engineering proposals that secured multimillion-dollar deals.",
      "Liaised with engineering leads, Key Account Managers, and system integrators to evaluate technical drawings, schematics, and project plans.",
      "Participated in project startup meetings to align technical, operational, and commercial commitments for client satisfaction.",
      "Prepared data-driven reports analyzing product usage, quotations, and equipment specifications across European operational divisions."
    ],
    technologies: [
      "Engineering Schematics & Drawings",
      "Industrial Process Systems",
      "Proposal Engineering",
      "Technical-Commercial Alignment",
      "Client Integrations",
      "European Enterprise Accounts"
    ],
    impactMetric: "Co-authored and aligned competitive technical bids that secured multimillion-dollar European industrial contracts"
  },
  {
    id: "upc",
    company: "UPC Romania",
    role: "Customer Service Support",
    location: "Cluj-Napoca, Romania",
    period: "September 2010 - December 2011",
    duration: "1 yr 4 mos",
    domain: "telecom",
    highlightBadge: "Telecom & Network Diagnostics",
    summary: "Provided tier-1 and tier-2 technical diagnostic resolution for enterprise and residential telecommunications services including VoIP, Digital TV, and broadband networks.",
    keyResponsibilities: [
      "Applied advanced diagnostic applications to analyze and triage complex telecommunication faults in real time.",
      "Diagnosed VoIP protocol issues, digital television (DTV) signal degradations, and broadband routing failures.",
      "Maintained rapid resolution SLA metrics and delivered empathetic customer communication during high-severity outages."
    ],
    technologies: [
      "VoIP Network Diagnostics",
      "Digital TV (DTV) Systems",
      "Broadband IP Routing",
      "Incident Resolution",
      "Diagnostic Tools"
    ],
    impactMetric: "Maintained top-tier first-contact diagnostic resolution rates across network support services"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "automotive",
    title: "Automotive Systems & Protocols",
    description: "Deep expertise in Electric Vehicle architectures, in-vehicle networking, and ECU testing.",
    skills: [
      { name: "Vector CANoe", level: "Expert", category: "automotive", isKeySkill: true, description: "Simulation, analysis, and automated test environments for CAN networks." },
      { name: "Vector CANalyzer", level: "Expert", category: "automotive", isKeySkill: true, description: "In-depth packet sniffing, trace logging, and bus load monitoring." },
      { name: "EV Body Control Module (BCM)", level: "Expert", category: "automotive", isKeySkill: true, description: "Door locks, lighting, wiper systems, power distribution, and immobilizers in EVs." },
      { name: "Instrument Cluster Systems", level: "Expert", category: "automotive", isKeySkill: true, description: "Digital gauges, telltales, driver alert systems, and HMI display verification." },
      { name: "CAN / CAN-FD Bus Protocol", level: "Expert", category: "automotive", isKeySkill: true, description: "Signal decoding, frame timing, checksum verification, and arbitration validation." },
      { name: "Renesas Flash Programmer", level: "Advanced", category: "automotive", description: "Microcontroller binary flashing, memory verification, and bootloader tests." },
      { name: "eFlashLoad & WinIDEA", level: "Advanced", category: "automotive", description: "Hardware debugging, flashing targets, and runtime register inspection." },
      { name: "DLT Viewer & TeraTerm", level: "Advanced", category: "automotive", description: "Diagnostic log and trace decoding, serial console communication, and error auditing." }
    ]
  },
  {
    id: "standards",
    title: "Methodologies & Standards",
    description: "Industry-certified quality engineering and rigorous compliance standards.",
    skills: [
      { name: "ASPICE Compliance", level: "Expert", category: "standards", isKeySkill: true, description: "ASPICE Level 2/3 processes, SWE.4, SWE.5, SWE.6 verification and bidirectional traceability." },
      { name: "ISO 26262 (Functional Safety)", level: "Expert", category: "standards", isKeySkill: true, description: "ASIL-B & ASIL-D safety requirements testing, fault injection, and risk containment." },
      { name: "V-Model SDLC", level: "Expert", category: "standards", isKeySkill: true, description: "Mapping system requirements to integration and acceptance validation levels." },
      { name: "IBM DOORS", level: "Expert", category: "standards", isKeySkill: true, description: "Requirement decomposition, test management, baseline comparisons, and full traceability." },
      { name: "Requirement Maturity Analysis", level: "Expert", category: "standards", isKeySkill: true, description: "Deconstructing ambiguity, edge-case identification, and test-case coverage mapping." },
      { name: "Defect Lifecycle & JIRA", level: "Expert", category: "standards", isKeySkill: true, description: "Systematic bug reproduction, severity classification, and release gate auditing." }
    ]
  },
  {
    id: "automation",
    title: "AI & Test Automation",
    description: "Next-generation QA techniques augmenting traditional test suites.",
    skills: [
      { name: "AI Agents in Testing", level: "Expert", category: "automation", isKeySkill: true, description: "Using AI agent workflows to formulate edge-case scenarios, synthesize test matrices, and increase coverage." },
      { name: "Python SWIT / SWT Automation", level: "Advanced", category: "automation", isKeySkill: true, description: "Automated Software Integration Testing scripts in VS Code with Python extensions." },
      { name: "Semi-Automated Test Scenarios", level: "Expert", category: "automation", description: "Hardware-in-the-loop and software test rigs combining scripted sequences with diagnostic probes." },
      { name: "VS Code & Git/GitHub", level: "Advanced", category: "automation", description: "Version-controlled test repositories, PR reviews, and CI/CD artifact integration." },
      { name: "Artifactory & Bitbucket", level: "Proficient", category: "automation", description: "Binary repository management and enterprise source control." }
    ]
  },
  {
    id: "software_qa",
    title: "Mobile, Web & Systems QA",
    description: "Comprehensive software testing foundations across multiple device ecosystems.",
    skills: [
      { name: "Mobile Testing (iOS & Android)", level: "Expert", category: "software_qa", isKeySkill: true, description: "Native app validation, touch gesture responsiveness, OS fragmentation, and power tests." },
      { name: "Web & Cross-Browser Testing", level: "Expert", category: "software_qa", isKeySkill: true, description: "Responsive layouts, Chromium/WebKit/Gecko compatibility, DOM stability." },
      { name: "HP Quality Center (ALM)", level: "Advanced", category: "software_qa", description: "Enterprise test lab scheduling, execution logs, and traceability matrices." },
      { name: "Sanity, SIT & Regression", level: "Expert", category: "software_qa", description: "Multi-tier testing cycles prioritizing high-risk build deltas." },
      { name: "Technical Training & Mentorship", level: "Expert", category: "software_qa", description: "Authoring comprehensive onboarding guides and accelerating engineering team ramp-up." }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    institution: "Universitatea Tehnică din Cluj-Napoca (UTCN)",
    degree: "Bachelor of Engineering (B.Eng.)",
    field: "Faculty of Electronics, Telecommunications and Information Technology",
    period: "2005 - 2009",
    details: "Specialized in electronic circuits, microprocessors, digital signal processing, telecommunication protocols, and embedded system foundations.",
    badge: "Official University Degree"
  },
  {
    institution: "The Informal School of IT",
    degree: "Professional QA Certification",
    field: "Software Quality Assurance",
    period: "2015",
    details: "Intensive industry-aligned training covering manual & automated testing, test case design techniques, boundary value analysis, and defect management.",
    badge: "QA Specialization"
  },
  {
    institution: "National College \"IOAN SLAVICI\", Satu Mare",
    degree: "Baccalaureate Diploma",
    field: "Mathematics - Informatics",
    period: "2001 - 2005",
    details: "Rigorous analytical education in advanced mathematics, algorithmic logic, computer science fundamentals, and programming principles.",
    badge: "STEM Foundations"
  }
];

export const languagesData: LanguageSkill[] = [
  { name: "Română", level: "Native or Bilingual (Maternă)", code: "RO", stars: 5 },
  { name: "English", level: "Professional Working Proficiency", code: "EN", stars: 5 },
  { name: "Italiano", level: "Elementary Proficiency", code: "IT", stars: 2 }
];

export const simulatedCANMessages: CANMessage[] = [
  {
    id: "msg-1",
    canId: "0x1A4",
    name: "BCM_DoorLock_Status",
    ecuSource: "BCM_EV_Master",
    dlc: 8,
    payloadHex: "01 80 00 FF 12 00 5A 9C",
    cycleTimeMs: 20,
    safetyLevel: "ASIL-B",
    status: "VALIDATED",
    description: "Central vehicle lock status, keyless proximity acknowledgment, and door latch sensors."
  },
  {
    id: "msg-2",
    canId: "0x2B0",
    name: "BCM_ExteriorLight_Ctrl",
    ecuSource: "BCM_EV_Master",
    dlc: 8,
    payloadHex: "03 00 24 10 00 FF 4B A1",
    cycleTimeMs: 10,
    safetyLevel: "ASIL-B",
    status: "VALIDATED",
    description: "Bi-LED Matrix low beam activation, automatic light sensor feedback, and hazard flashers."
  },
  {
    id: "msg-3",
    canId: "0x3C8",
    name: "CLUSTER_Speedo_Telltale",
    ecuSource: "Instrument_Cluster",
    dlc: 8,
    payloadHex: "00 48 00 00 02 1A 8F 33",
    cycleTimeMs: 20,
    safetyLevel: "ASIL-D",
    status: "VALIDATED",
    description: "Vehicle speed broadcast, ABS/ESC indicator lamp state, and critical driver safety warnings."
  },
  {
    id: "msg-4",
    canId: "0x4F2",
    name: "EV_Thermal_PreCondition",
    ecuSource: "BCM_Power_Gateway",
    dlc: 8,
    payloadHex: "14 22 05 01 00 00 C3 E4",
    cycleTimeMs: 50,
    safetyLevel: "ASIL-B",
    status: "SIMULATED",
    description: "HV battery pack pre-conditioning trigger and cabin HVAC climate command."
  },
  {
    id: "msg-5",
    canId: "0x510",
    name: "BCM_Ambient_Magenta_Theme",
    ecuSource: "BCM_Interior_Lighting",
    dlc: 8,
    payloadHex: "E1 1D 48 D9 46 EF FF 00",
    cycleTimeMs: 100,
    safetyLevel: "QM",
    status: "VALIDATED",
    description: "RGB interior mood lighting control sending luxury deep magenta RGB values across CAN-FD bus."
  }
];

export const recommendationsData: RecommendationItem[] = [
  {
    id: "rec-1",
    author: "Automotive Lead System Architect",
    role: "Senior Engineering Manager",
    company: "Automotive EV Tier-1 Partner",
    relationship: "Managed Marius directly on BCM projects",
    text: "Marius has an extraordinary grasp of automotive safety standards and in-vehicle communication. His ability to trace complex requirements in DOORS down to the exact CANoe test cases and Python automated scripts was invaluable in obtaining our ASPICE certification without a single safety hitch. He brings calm rigor and modern AI-driven QA techniques that save dozens of engineering hours.",
    avatarColor: "from-fuchsia-600 to-pink-600"
  },
  {
    id: "rec-2",
    author: "Cluster Software Validation Lead",
    role: "Validation & Test Lead",
    company: "Automotive Electronics Hub",
    relationship: "Worked alongside Marius at Marelli",
    text: "Beyond his deep technical know-how with Renesas flashing, DLT Viewer, and Vector CANalyzer, Marius was the backbone of our onboarding and mentorship initiative. He personally authored clear guides and mentored new engineers, turning newcomers into high-performing testers in record time. A tremendous asset to any engineering team.",
    avatarColor: "from-purple-600 to-fuchsia-600"
  },
  {
    id: "rec-3",
    author: "Agile Project Director",
    role: "Quality Assurance Director",
    company: "Enterprise IT Solutions",
    relationship: "Supervised mobile & web testing projects at Endava",
    text: "Marius demonstrated outstanding precision in cross-browser and mobile device testing. His structured approach to sanity, integration, and regression testing ensured our multi-platform client apps were consistently shipped bug-free. Fast learner, meticulous reporter, and great team player.",
    avatarColor: "from-pink-600 to-rose-600"
  }
];

export const faqData: FaqItem[] = [
  {
    category: "Automotive & EV",
    question: "What is Marius's core experience in automotive Electric Vehicles (EV)?",
    answer: "Marius currently works as a Software Test Engineer at AUMOVIO validating Body Control Module (BCM) platforms for electric vehicles. His work covers in-vehicle networking with Vector CANoe and CANalyzer, functional safety compliance (ISO 26262), requirements decomposition in IBM DOORS, and automated SWIT/SWT tests in Python."
  },
  {
    category: "AI in QA",
    question: "How does Marius leverage AI Agents in modern software testing?",
    answer: "Marius integrates AI agents into the software testing lifecycle to accelerate requirement edge-case discovery, automatically formulate comprehensive test scenarios, synthesize regression suites, and boost Python test script coverage. This allows him to detect complex boundary conditions before hardware-in-the-loop integration."
  },
  {
    category: "Standards & Compliance",
    question: "What experience does Marius have with ASPICE and ISO 26262?",
    answer: "Marius has worked for over 7+ years in strict ASPICE-certified automotive environments (at AUMOVIO and Marelli). He specializes in bidirectional traceability between DOORS requirements and test runs, ASIL-B and ASIL-D functional safety verification, and defect prevention throughout the V-Model SDLC."
  },
  {
    category: "Availability",
    question: "Is Marius open to remote work, hybrid roles, or international teams?",
    answer: "Yes. Marius is based in Cluj-Napoca, Romania, has extensive experience working remotely for teams in Iași and international enterprise clients across Europe, and is open to high-impact remote, hybrid, or relocation opportunities in automotive, embedded systems, or AI-driven quality engineering."
  },
  {
    category: "Languages",
    question: "What languages does Marius communicate in?",
    answer: "Marius is a native Romanian speaker, has professional working fluency in English (regularly used with international teams, documentation, and European clients), and possesses elementary Italian proficiency."
  }
];

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skill Matrix",
      bcmDemo: "CAN / BCM Lab",
      aiTesting: "AI in QA",
      education: "Education",
      contact: "Contact",
      connectLinkedIn: "Connect on LinkedIn",
      printCV: "Export / Print CV"
    },
    hero: {
      verified: "LinkedIn Verified Profile",
      available: "Open to High-Impact Opportunities",
      remoteBadge: "Remote • Cluj-Napoca, Romania",
      headingLine1: "Marius Trif",
      headline: "Software Test Engineer | Automotive Systems (EV BCM) | AI-Augmented QA Specialist",
      summaryIntro: "Delivering safety-critical software reliability across next-gen Electric Vehicle Body Control Modules, Instrument Clusters, and Enterprise IT through ASPICE rigor, ISO 26262 compliance, Vector CAN tools, and modern AI agents.",
      primaryCta: "Connect on LinkedIn",
      secondaryCta: "Explore Automotive CAN Lab",
      downloadCta: "Download vCard / Contact",
      printCta: "Print Full CV"
    },
    bcm: {
      title: "Interactive Virtual BCM & CAN Bus Diagnostics Lab",
      subtitle: "Demonstrating hands-on automotive testing techniques with live signal simulation, CAN message payload generation, and ISO 26262 ASIL safety checks.",
      triggerTitle: "Simulate In-Vehicle Actuator Signals",
      logTitle: "CANoe / CANalyzer Telemetry Stream",
      clearLogs: "Clear Stream",
      transmitBtn: "Transmit CAN Signal",
      statusValidated: "ASPICE / ISO 26262 Validated"
    }
  },
  ro: {
    nav: {
      about: "Despre",
      experience: "Experiență",
      skills: "Competențe",
      bcmDemo: "Laborator BCM / CAN",
      aiTesting: "AI în Testare",
      education: "Educație",
      contact: "Contact",
      connectLinkedIn: "Conectează-te pe LinkedIn",
      printCV: "Exportă / Printează CV"
    },
    hero: {
      verified: "Profil LinkedIn Verificat",
      available: "Disponibil pentru Noi Oportunități",
      remoteBadge: "Remote • Cluj-Napoca, România",
      headingLine1: "Marius Trif",
      headline: "Inginer Testare Software | Sisteme Automotive (BCM Vehicule Electrice) | Specialist QA Asistat de AI",
      summaryIntro: "Asigur fiabilitatea software pentru module de control caroserie (BCM) în vehicule electrice, tablouri de bord și platforme IT, prin procese ASPICE, conformitate ISO 26262, instrumente Vector CAN și agenți moderni de inteligență artificială.",
      primaryCta: "Conectează-te pe LinkedIn",
      secondaryCta: "Explorează Laboratorul CAN",
      downloadCta: "Descarcă Contact vCard",
      printCta: "Printează CV-ul Complet"
    },
    bcm: {
      title: "Laborator Interactiv de Diagnoză BCM & Magistrală CAN",
      subtitle: "Demonstrație practică a metodologiilor de testare automotive cu simulare de semnale, generare pachete CAN și verificări de siguranță funcțională ISO 26262.",
      triggerTitle: "Simulare Semnale Actuatori Vehicul",
      logTitle: "Flux Telemetrie CANoe / CANalyzer",
      clearLogs: "Șterge Jurnal",
      transmitBtn: "Transmite Semnal CAN",
      statusValidated: "Validat ASPICE / ISO 26262"
    }
  },
  it: {
    nav: {
      about: "Chi Sono",
      experience: "Esperienza",
      skills: "Competenze",
      bcmDemo: "Laboratorio CAN / BCM",
      aiTesting: "AI nel Testing",
      education: "Formazione",
      contact: "Contatto",
      connectLinkedIn: "Collegati su LinkedIn",
      printCV: "Esporta / Stampa CV"
    },
    hero: {
      verified: "Profilo LinkedIn Verificato",
      available: "Disponibile per Nuove Opportunità",
      remoteBadge: "Remote • Cluj-Napoca, Romania",
      headingLine1: "Marius Trif",
      headline: "Ingegnere del Test Software | Sistemi Automotive (BCM Veicoli Elettrici) | Specialista QA con AI",
      summaryIntro: "Garantisco l'affidabilità software dei moduli di controllo della carrozzeria (BCM) per veicoli elettrici, quadri strumenti e piattaforme IT attraverso rigore ASPICE, ISO 26262, strumenti Vector CAN e agenti IA moderni.",
      primaryCta: "Collegati su LinkedIn",
      secondaryCta: "Esplora Laboratorio CAN",
      downloadCta: "Scarica vCard",
      printCta: "Stampa CV Completo"
    },
    bcm: {
      title: "Laboratorio Diagnostico Virtuale BCM e Bus CAN",
      subtitle: "Dimostrazione interattiva di metodologie di testing automotive con simulazione di segnali, pacchetti CAN e controlli di sicurezza ISO 26262.",
      triggerTitle: "Simulazione Segnali Veicolo",
      logTitle: "Stream Telemetria CANoe / CANalyzer",
      clearLogs: "Cancella Log",
      transmitBtn: "Invia Segnale CAN",
      statusValidated: "Validato ASPICE / ISO 26262"
    }
  }
};
