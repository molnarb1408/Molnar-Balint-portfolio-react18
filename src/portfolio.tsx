import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1200
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Molnár Bálint",
  title: "Üdv, Bálint vagyok!",
  subTitle: (
    "A nevem Molnár Bálint, köszöntelek a portfólió oldalamon! Magamat, lelkes és elkötelezett fejlesztőként jellemezném, aki frontend és backend technológiák széles skálájában rendelkezik tudással. Frontend területen erősségeim közé tartozik a HTML, CSS, Bootstrap, JavaScript, Angular és Node.js, illetve a NoSQL adatbázisok használata. Backend oldalról Java, Swing és JavaFX, Maven, SQL technológiák"
  ),
  resumeLink:
    "https://mega.nz/folder/oHoRxABT#3VkrF55q0xR112UNTiBaQg",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/molnarb1408",
  linkedin: "https://www.linkedin.com/in/bálint-molnár-a3b66a24b/",
  gmail: "molnar.balint1408@gmail.com",
  gitlab: "",
  facebook: "",
  instagram: "",
  twitter: "",
  medium: "",
  stackoverflow: "",
  kaggle: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Képességeim:",
  subTitle: "Fejlesztőként a tanulási képességet kiemelten fontosnak tartom. Ezt igazolandó, egy számomra új technológiát, a React + Vite -t felhasználva készítettem el ezt a portfólióoldalt, hogy bemutassam: nyitott vagyok az új megoldások elsajátítására és a folyamatos önfejlesztésre.",
  skills: [
    emoji("⚡ Modern frontend felületek tervezése, korszerű eszközökre optimalizálva"),
    emoji("⚡ SEO optimalizáció implementálása, weboldalak-applikációk számára"),
    emoji("⚡ Java applikációk tervezése, fejlesztése"),
    emoji("⚡ Adatbázis kezelés, SQL - NoSQL technologiák segítségével"),

  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "noSql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true
};

// Proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Tervezés",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "71%"
    }
  ],
  displayCodersrank: false
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Pécsi Tudományegyetem",
      logo: new URL("./assets/images/pteLogo.webp", import.meta.url).href,
      subHeader: "Pénzügy és számvitel",
      duration: "2019 Szeptember - 2022 Június",
      desc: "MNB Kiválósági ösztöndíj nyertese",
      descBullets: [
        "Kiemelkedő Jeles érdemjeggyel elvégzet alapképzés",
      ]
    },
    {
      schoolName: "Pécsi Tudományegyetem - JURIDECO Zrt.",
      logo: new URL("./assets/images/pteJuridecoLogo.webp", import.meta.url).href,
      subHeader: "Vállalkozási mérlegképes könyvelő",
      duration: "2019 Szeptember - 2022 Június",
      desc: "Egyetem elvégzése közben, sikeresen megszerzett Vállalkozási mérlegképes könyvelő végzetség",
      descBullets: ["Hivatalos, Vállalkozási mérlegképes könyvelő bizonyítvány"]
    },
    {
      schoolName: "Sárvári Tinódi Gimnázium",
      logo: new URL("./assets/images/savariaLogo.webp", import.meta.url).href,
      subHeader: "ECL: Felsőfokú Angol C1 komplex",
      duration: "2019 November",
      desc: "Felsőfokú Angol C1 komplex nyelvvizsga megszerzése",
      descBullets: ["European Consortium for the Certificate of Attainment in Modern Languages (ECL), English C1 komplex nyelvvizsga"]
    },
    {
      schoolName: "Vas Megyei SZC Savaria Technikum és Kollégium",
      logo: new URL("./assets/images/eclLogo.webp", import.meta.url).href,
      subHeader: "OKJ: Logisztikai Ügyintéző + Érettségi",
      duration: "2014 Szeptember - 2019 Május",
      desc: "Logisztikai ügyintéző OKJ és Kereskedelmi ismeretek végzetség megszerzése",
      descBullets: ["Jeles eredménnyel elvégzett Éretségi és 5* kiemelkedő, OKJ végzetség"]
    },
  ]
};

// Work experience section 

const workExperiences = {
  display: true,
  experience: [
    {
      backgroundColor: [226, 92, 76],
      role: "Vállalati weblap készítés",
      company: "Greensense Consulting",
      companylogo: new URL("./assets/images/greenssenseCroppedLogo.webp", import.meta.url).href,
      date: "2024 Augusztus – 2024 Október",
      desc: "A GreenSense Consulting megbízásából elkészítettem a hívatalos 'GreenSense.hu' weblapot.",
      descBullets: [
        "Technológiák: HTML5, CSS3, Bootstrap, JavaScript, PHP, npm",
        "Informatív, modern sztenderdeknek megfelelő design",
        "SEO optimalizáció",
        "Felület készítés, tesztelés, stb.",
      ]
    },
    {
      backgroundColor: [186, 4, 4],
      role: "Eszkalációs Menedzser (logisztika - autóipar)",
      company: "Provertha Zrt.",
      companylogo: new URL("./assets/images/proverthaLogo.webp", import.meta.url).href,
      date: "2023-04 – 2023-12",
      desc: "Automotive - Logisztika területén töltöttem be menedzseri munkakört.",
      descBullets: [
        "Növeltem a teljesítményt a napi tevékenységek nyomon követésével és a csapattagok mentorálásával.",
        "Számos feladatot sikeresen elvégeztem a meghatározott határidőkön belül.",
        "Javítottam az ügyfél-elégedettséget a viták gyors rendezésével, a folyamatos kommunikációval és a magas színvonalú szolgáltatás biztosításával.",
      ]
    },
    {
      backgroundColor: [255, 229, 0],
      role: "Junior Adótanácsadó",
      company: "Ernst & Young",
      companylogo: new URL("./assets/images/eyLogo.webp", import.meta.url).href,
      date: "2022-12 – 2023-03",
      desc: "Junior Adótanácsadó munkakört töltöttem be a pénzügyi-szolgáltatói szektor 'BIG4' egyik meghatározó multinacionális vállalkozásánál.",
      descBullets: [
        "Figyelemmel kísértem a projekteket, hogy megfeleljenek a jogi és szabályozási előírásoknak.",
        "Részletes jelentéseket készítettem a megfelelési mutatókról, tájékoztatva a felsővezetést a főbb trendekről és a javításra szoruló területekről.",
      ]
    }
  ]
};

// Big projects

const bigProjects = {
  title: "Nagyobb Projekjeim",
  subtitle: "NÉHÁNY CÉGEK ÁLTAL MEGRENDELT, ILLETVE SAJÁT KÉSZÍTÉSŰ PROJECT",
  projects: [
    {
      image: new URL("./assets/images/greenssenseCroppedLogo.webp", import.meta.url).href,
      projectName: "GreenSense.hu",
      projectDesc: "A GreenSense Consulting tréningeket, workshopokat, előadásokat és egyéb programokat kínál fenntarthatósági és ESG témákban. A cég elkötelezett abban, hogy a fenntarthatóságot a vállalati kultúra szerves részévé tegye. Céljuk, hogy segítsék partnereiket az ESG céljaik és vállalásaik elérésében. Ennek a célnak a nevében készült el egy lehető legjobban a fenntarthatóságra koncentráló weboldal.",
      footerLink: [
        {
          name: "Weboldal Megnyítása",
          url: "https://greensense.hu"
        }
      ]
    },
    {
      image: new URL("./assets/images/bossRushDemoLogo.webp", import.meta.url).href,
      projectName: "Boss Rush - Demo",
      projectDesc: "Az első nagyobb projektemet Angular-ban valósítottam meg, amely egy körökre osztott játék volt. A kódot teljes mértékben magam írtam, és én terveztem meg az egyszerűbb architektúrát, beleértve a komponensek kapcsolatait és a játék háttérlogikáját. Ezt a projektet mindössze négy hónappal azután készítettem el, hogy elkezdtem programozni életemben először. Bár a kód sok refaktorálást igényel, büszke vagyok rá, hogy képes voltam egy összetettebb projektet létrehozni.",
      footerLink: [
        {
          name: "Játék Indítása",
          url: "https://boss-rush-demo.netlify.app"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Eredmények és Bizonyítványok 🏆 "),
  subtitle:
    "Achievementek, Bizonyítványok, Díjak amiket elértem, és büszke vagyok rájuk!",

  achievementsCards: [
    {
      title: "Magyar Nemzeti Bank - Kiválósági ösztöndíj",
      subtitle: "Sikeresen megszerzett MNB kíválósági ösztöndíj, kiemelkedő tanulmányi teljesítményért!",
      image: new URL("./assets/images/mnbLogo.webp", import.meta.url).href,
      imageAlt: "MNB Logo",
      footerLink: [
        { name: "Ösztöndíj", url: "https://mega.nz/file/8H5wlAIZ#RuKZYqNavUr6ikjAOqbQJkaYb2Sq0mymMB6KlecFaE0" },
        {
          name: "Felhívás",
          url: "https://www.mnb.hu/oktatas/mnb-kivalosagi-osztondij"
        }
      ]
    },
    {
      title: "Ruander - Frontend fejlesztő",
      subtitle:
        "Sikeresen elvégzett Frontend fejlesztői képzés, kiemelkedő 5* eredménnyel!",
      image: new URL("./assets/images/ruanderLogo.webp", import.meta.url).href,
      imageAlt: "Ruander Logo",
      footerLink: [
        {
          name: "Felhívás",
          url: "https://www.ruander.hu/junior-frontend-fejleszto-tanfolyam.html"
        }
      ]
    },
    {
      title: "Ruander - Backend fejlesztő",
      subtitle:
        "Folyamatban lévő Backend fejlesztői képzés!",
      image: new URL("./assets/images/ruanderLogo.webp", import.meta.url).href,
      imageAlt: "Ruander Logo",
      footerLink: [
        {
          name: "Felhívás",
          url: "https://www.ruander.hu/java-programozo.html"
        }
      ]
    },
  ],
  display: true
};

// GitHub Section

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Resume Section
const resumeSection = {
  title: "Önéletrajz",
  subtitle: "Töltsd az önéletrajzom!",

  display: false
};

const contactInfo = {
  title: emoji("Elérhetőségem ☎️"),
  subtitle:
    "Bármilyen project, munka lehetőség vagy egyéb kérdés esetén keres bátran!",
  number: "+36-307130207",
  email_address: "molnar.balint1408@gmail.com"
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
