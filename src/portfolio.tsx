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
    "A nevem Molnár Bálint, köszöntelek a portfólióoldalamon! Precíz és elkötelezett fejlesztőként dolgozom, aki szívesen vállal felelősséget egy projekt teljes életciklusáért, a tervezéstől a végleges megjelenésig. Frontend oldalon magabiztosan mozgok HTML, CSS, Bootstrap, JavaScript, Angular, React és Vite technológiákban, backend és adatkezelés terén pedig Java, Swing, JavaFX, Maven, Python, valamint SQL és NoSQL adatbázisok jelentik az eszköztáramat. Emellett több éves gyakorlati tapasztalattal rendelkezem indie videójáték-fejlesztés terén is (Python/Ren'Py, Godot), ahol a teljes fejlesztési folyamatot végigvittem a koncepciótól egészen a Steamen és itch.io-n történő megjelenésig."
  ),
  resumeLink: true,
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
  subTitle: "Fejlesztőként kiemelten fontosnak tartom a folyamatos tanulást és az alkalmazkodóképességet. Ennek bizonyítására egy számomra új technológiát, a React + Vite-ot választottam ehhez a portfólióoldalhoz, megmutatva, hogy nyitott vagyok az új eszközök gyors elsajátítására és a folyamatos önfejlesztésre.", skills: [
    "⚡ Modern UI/UX felületek tervezése, optimalizálása",
    "⚡ SEO optimalizáció implementálása, weboldalak számára",
    "⚡ Java applikációk tervezése, fejlesztése",
    "⚡ Adatbázis kezelés, SQL - NoSQL technologiák segítségével",
    "⚡ Komplex, reszponzív UI/UX rendszerek tervezése videójátékokhoz",
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
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
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
        "Kiemelkedő, jeles eredménnyel elvégzett alapképzés",
      ]
    },
    {
      schoolName: "Pécsi Tudományegyetem - JURIDECO Zrt.",
      logo: new URL("./assets/images/pteJuridecoLogo.webp", import.meta.url).href,
      subHeader: "Vállalkozási mérlegképes könyvelő",
      duration: "2019 Szeptember - 2022 Június",
      desc: "Egyetem elvégzése közben, sikeresen megszerzett Vállalkozási mérlegképes könyvelő végzettség",
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
      schoolName: "Vas Megyei SZC Savaria Technikum",
      logo: new URL("./assets/images/eclLogo.webp", import.meta.url).href,
      subHeader: "OKJ: Logisztikai Ügyintéző + Érettségi",
      duration: "2014 Szeptember - 2019 Május",
      desc: "Logisztikai ügyintéző OKJ-s és kereskedelmi ismeretek szakképesítés megszerzése",
      descBullets: ["Jeles eredménnyel letett érettségi és kiemelkedő (5*) eredménnyel megszerzett OKJ-s szakképesítés"]
    },
  ]
};

// Work experience section 

const workExperiences = {
  display: true,
  experience: [
    {
      backgroundColor: [60, 60, 60],
      role: "Szoftverfejlesztő",
      company: "Aphyra Games",
      companylogo: new URL("./assets/images/aphyraGameslogo.webp", import.meta.url).href,
      date: "2025 Január – 2026 Augusztus",
      desc: "Teljes értékű indie videójáték fejlesztése, önálló fejlesztői szerepben, a teljes fejlesztési életciklus lefedésével.",
      descBullets: [
        "Fejlesztés, tesztelés, hibajavítás, buildelés, lokalizáció pipeline kezelése",
        "CI/CD Pipeline kialakítása és karbantartása",
        "Komplex, reszponzív, játékosbarát UI/UX rendszerek tervezése",
        "UI-, state-management-, input-, transition-, audio- és timing megvalósítása",
        "Moduláris, karbantartható kód, reusable komponensek, naming convention",
        "Multimédiás pipeline kezelése (képek, animációk, hangok, videók)",
        "Cross-platform szemlélet PC / Mobile és Steam Deck -re optimalizálás",
        "A/B tesztelés és felhasználói visszajelzések alapján történő iteráció",
      ]
    },
    {
      backgroundColor: [226, 92, 76],
      role: "Vállalati (full-stack) weblap készítés",
      company: "Greensense Consulting",
      companylogo: new URL("./assets/images/greenssenseCroppedLogo.webp", import.meta.url).href,
      date: "2024 Július – 2025 Április",
      desc: "A GreenSense Consulting megbízásából elkészítettem a hívatalos 'GreenSense.hu' weblapot.",
      descBullets: [
        "Technológiák (Stack): HTML5, CSS3, Bootstrap, JavaScript, PHP, Hosting: RackForest",
        "Informatív, modern sztenderdeknek megfelelő design",
        "Egyértelmű vizuális hierarchia",
        "Reszponzív, mobilbarát design",
        "Optimalizált képek (WebP)",
        "Következetes színpaletta, tipográfia és spacing",
        "Gyors initial page load",
        "Contact / lead formok",
        "SEO optimalizáció",
        "A/B tesztelés",
        "Egyedi szerverkonfigurációt végeztem a stabil és gyors működés érdekében"
      ]
    },
    {
      backgroundColor: [64, 105, 225],
      role: "Logisztikai Szakértő",
      company: "Autoliv Kft.",
      companylogo: new URL("./assets/images/autolivLogo.webp", import.meta.url).href,
      date: "2024-01 – 2024-02",
      desc: "Logisztikai szakértőként dolgoztam az Autoliv Kft. sopronkövesdi telephelyén, az autóipari beszállítói szektorban.",
      descBullets: [
        "Bizonyított képesség a gyors tanulásra és az új helyzetekhez való alkalmazkodásra",
        "Kiváló kommunikációs készségek, szóban és írásban egyaránt",
      ]
    },
    {
      backgroundColor: [226, 50, 50],
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
    },
    {
      backgroundColor: [46, 139, 87],
      role: "Pénzügyi specialista (Egyetemi munka)",
      company: "ProITCon",
      companylogo: new URL("./assets/images/proitconLogo.webp", import.meta.url).href,
      date: "2022-01 – 2022-09",
      desc: "Egyetemi munka keretében pénzügyi specialistaként vettem részt cégek közötti projektek megvalósításában.",
      descBullets: [
        "Együttműködtem különböző cégek szakembereivel a projektek céljainak időben és költségkereten belüli eléréséhez.",
        "Növeltem az ügyfél-elégedettséget proaktív problémamegoldással és hatékony panaszkezeléssel.",
        "Aktívan hozzájárultam a kapcsolatiháló bővítéséhez a rendelkezésre álló közösségi médiaplatformokon.",
      ]
    },
    {
      backgroundColor: [70, 130, 180],
      role: "Interpreter – Angol tolmács (Diák munka)",
      company: "FLEX Sárvár",
      companylogo: new URL("./assets/images/flexLogo.webp", import.meta.url).href,
      date: "2019-05 – 2019-08",
      desc: "Diákmunka keretében angol tolmácsként segítettem az üzleti partnerek közötti kommunikációt.",
      descBullets: [
        "Lehetővé tettem az üzleti partnerek közötti egyértelmű kommunikációt a bonyolult technikai zsargon közérthető nyelvezetre fordításával.",
        "Javítottam az ügyfélkommunikációt pontos és időben történő tolmácsolási szolgáltatásokkal megbeszélések és konferenciák során.",
      ]
    },
    {
      backgroundColor: [229, 39, 39],
      role: "Logisztikai ügyintéző (Gyakornok)",
      company: "Galambos Logistic Kft.",
      companylogo: new URL("./assets/images/galambosLogo.webp", import.meta.url).href,
      date: "2017-09 – 2018-06",
      desc: "Gyakornokként logisztikai ügyintézői feladatokat láttam el a vépi telephelyen.",
      descBullets: [
        "Részletes nyilvántartást vezettem a szállítmányokról, nyomon követve azok előrehaladását a rendelés leadásától a végső kézbesítésig.",
      ]
    },
    {
      backgroundColor: [178, 234, 74],
      role: "Logisztikai ügyintéző (Gyakornok)",
      company: "Sága Foods Zrt.",
      companylogo: new URL("./assets/images/sagaLogo.webp", import.meta.url).href,
      date: "2016-06 – 2016-08",
      desc: "Gyakornokként raktárszervezési feladatokban vettem részt a sárvári telephelyen.",
      descBullets: [
        "A raktárszerveződés javításával foglalkoztam, egyértelmű címkézési rendszer és hatékony tárolási elrendezés fenntartásával.",
      ]
    },
  ]
};

// Big projects

const bigProjects = {
  title: "Nagyobb Projekjeim",
  subtitle: "NÉHÁNY CÉGEK ÁLTAL MEGRENDELT, ILLETVE SAJÁT KÉSZÍTÉSŰ PROJECT",
  projects: [
    {
      image: new URL("./assets/images/fmdLogo.webp", import.meta.url).href,
      projectName: "For My Darling",
      projectDesc: "Vizuális novella az Aphyra Games kiadásában, Python / Ren'Py motorral fejlesztve, Steamen és itch.io-n elérhető. Teljes körű fejlesztői szerepet töltöttem be, és emellett megvalósítottam: Story, Gameplay, UI/UX, Graphic/Visual design, Composer, Marketing, Social Media, CI/CD stb. Végigvezettem a release-folyamatot, optimalizáltam a több ezer elemből álló képi asset pipeline-t, illetve elláttam a márka- és megjelenés-menedzsmentet (press kit, arculati útmutató). A játék megjelent többek közt a 80.lv magazinban is.",
      footerLink: [
        {
          name: "Website",
          url: "https://aphyra-games.com"
        },
        {
          name: "Steam",
          url: "https://store.steampowered.com/app/4599310/For_My_Darling/"
        },
        {
          name: "Itch.io",
          url: "https://aphyra-games.itch.io/for-my-darling"
        }
      ]
    },
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
  title: "Eredmények és Bizonyítványok 🏆 ",
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
        "Sikeresen elvégzett Java Backend fejlesztői képzés, kiemelkedő 5* eredménnyel!!",
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
  title: "Elérhetőségem ☎️",
  subtitle:
    "Bármilyen project, munka lehetőség vagy egyéb kérdés esetén keres bátran!",
  number: "",
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
