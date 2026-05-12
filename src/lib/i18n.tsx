import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "hr" | "en";

type Dict = Record<string, { hr: string; en: string }>;

export const dict: Dict = {
  // Navbar
  "nav.home": { hr: "POČETNA", en: "HOME" },
  "nav.about": { hr: "O MENI", en: "ABOUT" },
  "nav.projects": { hr: "PROJEKTI", en: "PROJECTS" },
  "nav.awards": { hr: "NAGRADE", en: "AWARDS" },
  "nav.contact": { hr: "KONTAKT", en: "CONTACT" },

  // Hero
  "hero.greeting": { hr: "POZDRAV, JA SAM", en: "HELLO, I AM" },
  "hero.role": { hr: "STUDENT MEHATRONIKE I ROBOTIKE", en: "MECHATRONICS AND ROBOTICS STUDENT" },
  "hero.cv": { hr: "ŽIVOTOPIS", en: "RESUME" },
  "hero.portfolio": { hr: "PORTFOLIO", en: "PORTFOLIO" },

  // About
  "about.title": { hr: "O meni", en: "About me" },
  "about.intro": {
    hr: "Student sam FSB-a (Mehatronika i robotika) i najviše me zanimaju sustavi koji spajaju mehaniku, elektroniku i softver u jednu funkcionalnu cjelinu. Volim raditi projekte „od nule\" — od konstrukcije i izbora komponenti do upravljanja i testiranja.",
    en: "I am a student at FSB (Mechatronics and Robotics) and I am most interested in systems that combine mechanics, electronics and software into a single functional whole. I love working on projects \"from scratch\" — from design and component selection to control and testing.",
  },
  "about.tech": { hr: "TEHNIČKE VJEŠTINE", en: "TECHNICAL SKILLS" },
  "about.method": { hr: "NAČIN RADA", en: "WORK STYLE" },
  "about.more": { hr: "VIŠE O MENI", en: "MORE ABOUT ME" },

  // Skills
  "skill.cad.title": { hr: "CAD i tehnička dokumantacija", en: "CAD and technical documentation" },
  "skill.cad.sub": { hr: "(SolidWorks, CATIA V5R21, Fusion 360)", en: "(SolidWorks, CATIA V5R21, Fusion 360)" },
  "skill.print.title": { hr: "Aditivna proizvodnja", en: "Additive manufacturing" },
  "skill.print.sub": { hr: "(Bambu Lab, Prusa, Creality)", en: "(Bambu Lab, Prusa, Creality)" },
  "skill.comm.title": { hr: "Komunikacija", en: "Communication" },
  "skill.comm.sub": { hr: "(TCP/IP, MODBUS, RC)", en: "(TCP/IP, MODBUS, RC)" },
  "skill.code.title": { hr: "Automatizacija i razvoj softvera", en: "Automation and software development" },
  "skill.code.sub": { hr: "(MATLAB, SIMULINK, OpenCV, Python, C++)", en: "(MATLAB, SIMULINK, OpenCV, Python, C++)" },
  "skill.plc.title": { hr: "PLC/HMI programiranje", en: "PLC/HMI programming" },
  "skill.plc.sub": { hr: "(Mitsubishi MELSEC GX Works3 i GT Designer3)", en: "(Mitsubishi MELSEC GX Works3 and GT Designer3)" },
  "skill.pcb.title": { hr: "Elektronika i PCB dizajn", en: "Electronics and PCB design" },
  "skill.pcb.sub": { hr: "(JLCPCB EasyEDA)", en: "(JLCPCB EasyEDA)" },
  "skill.robot.title": { hr: "Simuliranje i programiranje robota", en: "Robot simulation and programming" },
  "skill.robot.sub": { hr: "(RoboDK, FANUC RoboGuide, Universal Robot URSim, ROS2)", en: "(RoboDK, FANUC RoboGuide, Universal Robot URSim, ROS2)" },
  "skill.ai.title": { hr: "AI prompting", en: "AI prompting" },
  "skill.ai.sub": { hr: "(ChatGPT)", en: "(ChatGPT)" },
  "skill.air.title": { hr: "Pneumatika", en: "Pneumatics" },
  "skill.air.sub": { hr: "(SMC, FESTO, FluidSIM)", en: "(SMC, FESTO, FluidSIM)" },
  "skill.web.title": { hr: "Web dizajn", en: "Web design" },
  "skill.web.sub": { hr: "(HTML, CSS, JS)", en: "(HTML, CSS, JS)" },

  // Methods
  "method.integration": { hr: "Integracija mehanike, elektronike i softvera", en: "Integration of mechanics, electronics and software" },
  "method.communication": { hr: "Komunikacija s mentorima i sponzorima", en: "Communication with mentors and sponsors" },
  "method.docs": { hr: "Tehnička dokumentacija i planiranje", en: "Technical documentation and planning" },
  "method.problems": { hr: "Rješavanje tehničkih problema", en: "Solving technical problems" },
  "method.iterate": { hr: "Iterativni razvoj i testiranje", en: "Iterative development and testing" },

  // Projects
  "projects.title": { hr: "Projekti", en: "Projects" },
  "projects.subtitle": { hr: "Neki od projekata na kojima sam radio.", en: "Some of the projects I've worked on." },
  "projects.view": { hr: "Pogledaj projekt", en: "View project" },
  "projects.more": { hr: "VIŠE PROJEKATA", en: "MORE PROJECTS" },
  "tag.fsb": { hr: "FSB", en: "FSB" },
  "tag.tsrb": { hr: "TSRB", en: "TSRB" },
  "tag.awarded": { hr: "Nagrađeno", en: "Awarded" },
  "tag.thesis": { hr: "Završni rad", en: "Thesis" },
  "tag.partners": { hr: "Partneri", en: "Partners" },

  "project.borovnice.title": { hr: "STROJ ZA AUTOMATSKO PAKIRANJE BOROVNICA", en: "AUTOMATIC BLUEBERRY PACKAGING MACHINE" },
  "project.borovnice.desc": {
    hr: "Automatizirani sustav za doziranje, vaganje i zatvaranje posuda s borovnicama razvijen kao završni rad iz područja mehatronike i robotike. Projekt obuhvaća kompletnu konstrukciju stroja, razvoj električnog ormara, PLC/HMI upravljanje, integraciju pneumatskih sustava i precizno mjerenje mase pomoću load cell senzora. Cilj sustava je ubrzanje procesa pakiranja, smanjenje ručnog rada i povećanje ponovljivosti i preciznosti u proizvodnom procesu.",
    en: "Automated system for dosing, weighing and closing blueberry containers developed as a thesis in mechatronics and robotics. The project covers the full machine construction, electrical cabinet design, PLC/HMI control, pneumatic system integration and precise mass measurement via load cell sensors. The system aims to speed up packaging, reduce manual labor and increase repeatability and precision in production.",
  },
  "project.hvataljka.title": { hr: "ROBOTSKA HVATALJKA ZA MANIPULACIJU KUĆIŠTIMA PROTUPOŽARNIH ZAKLOPKI", en: "ROBOTIC GRIPPER FOR HANDLING FIRE DAMPER HOUSINGS" },
  "project.hvataljka.desc": {
    hr: "Robotski sustav za prihvat i manipulaciju kućištima protupožarnih zaklopki različitih dimenzija. Projekt uključuje razvoj hvataljke, pneumatskog sustava i simulaciju robotskih kretnji za preciznu i ponovljivu automatizaciju procesa.",
    en: "Robotic system for picking and handling fire damper housings of different dimensions. The project includes gripper development, pneumatic system and robot motion simulation for precise and repeatable process automation.",
  },
  "project.rc.title": { hr: "IZRADA MODELA RC AUTOMOBILA POMOĆU 3D PRINTERA", en: "BUILDING AN RC CAR MODEL USING A 3D PRINTER" },
  "project.rc.desc": {
    hr: "Projekt izrade RC automobila korištenjem 3D ispisa i vlastitog dizajna mehaničkih komponenti. Razvoj uključuje modeliranje dijelova, integraciju elektronike i optimizaciju konstrukcije za funkcionalno daljinsko upravljanje i testiranje prototipa.",
    en: "RC car project using 3D printing and custom mechanical component design. Development includes part modeling, electronics integration and structural optimization for functional remote control and prototype testing.",
  },

  // Awards
  "awards.title": { hr: "Nagrade", en: "Awards" },
  "awards.subtitle": { hr: "Priznanja koja potvrđuju kvalitetu, inovativnost i predanost u svakom projektu.", en: "Recognitions that confirm quality, innovation and dedication in every project." },
  "awards.more": { hr: "VIŠE O NAGRADAMA", en: "MORE ABOUT AWARDS" },
  "award.inova": { hr: "INOVA 2025 (Zagreb, Hrvatska)", en: "INOVA 2025 (Zagreb, Croatia)" },
  "award.inova.sub": { hr: "Zlatna medalja i posebno priznanje", en: "Gold medal and special recognition" },
  "award.arca": { hr: "ARCA 2025 (Zagreb, Hrvatska)", en: "ARCA 2025 (Zagreb, Croatia)" },
  "award.arca.sub": { hr: "Zlatna medalja", en: "Gold medal" },
  "award.kide": { hr: "KIDE 2025 (Kaohsiung, Taiwan)", en: "KIDE 2025 (Kaohsiung, Taiwan)" },
  "award.kide.sub": { hr: "Zlatna medalja i WIIPA pokal", en: "Gold medal and WIIPA trophy" },
  "award.klima": { hr: "Klimaoprema 2025 — Inovativnost i kreativnost", en: "Klimaoprema 2025 — Innovation and creativity" },
  "award.klima.sub": { hr: "1. mjesto", en: "1st place" },
  "award.ipitex": { hr: "IPITEX 2026 (Bangkok, Tajland)", en: "IPITEX 2026 (Bangkok, Thailand)" },
  "award.ipitex.sub": { hr: "Brončana medalja", en: "Bronze medal" },

  // Contact
  "contact.title.l1": { hr: "Radi", en: "Work" },
  "contact.title.l2": { hr: "sa mnom", en: "with me" },
  "contact.address": { hr: "ADRESA", en: "ADDRESS" },
  "contact.address.value": { hr: "Zagreb, Hrvatska", en: "Zagreb, Croatia" },
  "contact.phone": { hr: "BROJ MOBITELA", en: "PHONE NUMBER" },
  "contact.email": { hr: "EMAIL ADRESA", en: "EMAIL ADDRESS" },
  "contact.linkedin": { hr: "LINKEDIN", en: "LINKEDIN" },

  // Subpage placeholders
  "page.back": { hr: "← Natrag", en: "← Back" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: keyof typeof dict) => string };
const LangCtx = createContext<Ctx>({ lang: "hr", setLang: () => {}, t: (k) => dict[k]?.hr ?? String(k) });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("hr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "hr" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const t = (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key);

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useT = () => useContext(LangCtx);
