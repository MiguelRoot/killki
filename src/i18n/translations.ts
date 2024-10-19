const skillsList = [
  {
    icon: "javascript",
    title: "JavaScript",
    level: 1,
  },
  {
    icon: "angular",
    title: "Angular",
    level: 1,
  },
  {
    icon: "ionic",
    title: "Ionic",
    level: 1,
  },
  {
    icon: "sass",
    title: "Sass",
    level: 1,
  },
  {
    icon: "nodejs",
    title: "NodeJS",
    level: 3,
  },
  {
    icon: "reactjs",
    title: "ReactJs",
    level: 3,
  },
  {
    icon: "react-native",
    title: "React Native",
    level: 3,
  },
  {
    icon: "mongodb",
    title: "MongoDB",
    level: 3,
  },
  {
    icon: "figma",
    title: "Figma",
    level: 2,
  },
  // {
  //   icon: "flutter",
  //   title: "Flutter",
  // },
  {
    icon: "github",
    title: "Git/Github",
    level: 1,
  },
  {
    icon: "jest",
    title: "Jest",
    level: 1,
  },
  // {
  //   icon: "dart",
  //   title: "Dart",
  // },
  // {
  //   icon: "redux",
  //   title: "Redux",
  // },
  // {
  //   icon: "nextjs",
  //   title: "NextJS",
  // },
  {
    icon: "astro",
    title: "Astro",
    level: 2,
  },
  {
    icon: "wordpress",
    title: "Wordpress",
    level: 2,
  },
  // {
  //   icon: "odoo",
  //   title: "Odoo",
  // },
  {
    icon: "java",
    title: "Java",
    level: 3,
  },
];

export const translations = {
  es: {
    status: "No disponible",
    welcome: "Hey, soy",
    senior: "Miguel Angel",
    name: "Miguel Angel LLacta Flores",
    career: "Frontend Developer Engineer",
    city: "Lima, Perú",
    linkedin: "https://linkedin.com/in/miguelkillki",
    phone: "+51999486139",
    email: "miguelkillki@gmail.com",
    presentation:
      "Disfruto transformar problemas complejos en diseños simples, atractivos e intuitivos. Fuera del ámbito de la programación 👨‍💻, me encontrarás sumergido en videojuegos, disfrutando de la jardinería 🌱 o dedicándome a la práctica deportiva 🏀.",
    profile:
      "Con más de 4 años de experiencia en el desarrollo de páginas web y aplicaciones móviles utilizando tecnologías como Ionic, Flutter y Angular. Tuve el privilegio de formar parte en la creación del 'Sistema de selección de docentes' para Adex Datatrade, donde lideré el desarrollo del frontend utilizando Angular. Además, participé en el desarrollo de la aplicación móvil 'Mis Primeros Tres' para Fundación Baltazar y Nicolás, en la que tuve la responsabilidad de desarrollar todo el frontend utilizando Ionic, Angular y Firebase. También formé parte del equipo encargado del desarrollo de la aplicación móvil 'Alerta Vecinos' para la Municipalidad de Santa Maria del Mar, utilizando Flutter y las APIs de Google Maps, entre otras tecnologías.",
    education: [
      {
        startDate: "marzo 2019",
        city: "Lima, Perú",
        career: "Ingeniería de Informática",
        institution:
          "Instituto de Educación Superior Tecnológico Privado Cibertec",
      },
    ],

    experience: [
      {
        startDate: "Febrero 2022 — Actualmente...",
        city: "Remoto",
        position: "Desarrollador web front-end & móvil",
        company: "Avanti Consultores",
        description:
          "Encargado de realizar el desarrollo fontend de plataformas web y movil usando las tecnologías Angular, Redux, Ionic,  (HTML, Typescript, JavaScript css sass...) he realizado proyectos como:",
        detalies: [
          "Desarrollé una plataforma de estadísticas de importaciones con tablas filtrables y gráficos comparativos, permitiendo análisis detallados y personalizados.",
          "Implementé un sistema de evaluación docente con login por roles, formularios avanzados y tablas dinámicas con filtros, optimizando la gestión de evaluaciones.",
          "Integré un sistema de login y pasarela de pago con múltiples planes de suscripción, mejorando la seguridad y eficiencia del proceso de registro.",
          "Creé una app móvil para el monitoreo de gestantes y recién nacidos, con login social, formularios de perfil y notificaciones push basadas en eventos registrados.",
          "Desarrollé una app móvil con login social, integración con Google Maps, creación de ofertas y un carrito de compras con pasarela de pago.",
          "Dirigí el desarrollo un sitio web dinámico en WordPress con campos personalizados para satisfacer las necesidades específicas del cliente.",
        ],
      },
      {
        startDate: "Enero 2019 — noviembre 2021",
        city: "Lima, Perú",
        position: "Desarrollador web front-end",
        company: "Municialidad de S.A.",
        description:
          "Encargado de mantener los sistems web de la municipalidad, usando las tecnologías PHP, Java, (HTML, Typescript, JavaScript css sass...)",
        detalies: [
          "Desarrollé una página institucional en WordPress con campos personalizados adaptados a las necesidades del cliente.",
          "Creé una aplicación en Flutter para enviar reportes con texto, fotos y audio, facilitando la captura y envío de información.",
        ],
      },
    ],
    projects: [
      {
        image: "AdexDataTrade.png",
        title: "Dashboard Adex Datatrade",
        link: "https://www.adexdatatrade.com/",
        description:
          "Desarrollé el sistema de estadísticas de importaciones de Adex Datatrade, generando gráficos interactivos con Chart.js y mejorando la experiencia de usuario y el análisis de datos.",
        stack: ["JavaScript", "HTML", "CSS", "Chart.js", "C#"],
      },
      {
        image: "adex_instituto.png",
        link: "https://adex.edu.pe/",
        title: "Sistema de evaluación, Instituto Adex",
        description:
          "Fui responsable del frontend del sistema de evaluación de docentes del Instituto Adex, utilizando Angular y Redux para crear una plataforma fluida y eficiente.",
        stack: ["Angular", "Redux", "TypeScript", "SASS"],
      },
      {
        image: "AdexDataTrade.png",
        link: "https://www.adexdatatrade.com/PaymentRegistro.aspx?plan=2",
        title: "Pasarela de pagos, Adex Datatrade",
        description:
          "Integré las APIs del sistema de pasarela de pago de Adex con Niubiz, implementando validaciones de seguridad para garantizar la confiabilidad de las transacciones.",
        stack: ["JavaScript", "HTML", "CSS", "C#"],
      },
      {
        image: "mis_primeros_tres.png",
        link: "https://play.google.com/store/apps/details?id=pe.avanti.app.mp3&hl=es_PE",
        title: "Seguimiento de embarazo (Aplicación móvil)",
        description:
          "Desarrollé una app móvil para la Fundación Baltazar y Nicolás que permite a las gestantes registrar y monitorear su salud usando Ionic y Firebase.",
        stack: ["Ionic", "Angular", "TypeScript", "Firebase", "SASS"],
      },
      {
        image: "logo_sigo.png",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        title: "Sigo (Aplicación móvil)",
        description:
          "Lidere el desarrollo de una app de servicios y ventas, implementando Google Maps, un carrito de compras y pasarela de pago, creando una plataforma completa y eficiente.",
        stack: ["Angular", "Ionic", "TypeScript", "Firebase", "Google Maps"],
      },
      {
        image: "lazo_de_ayuda.png",
        link: "https://fundacionlazosdeayuda.org/",
        title: "Desarrollo del Tema WordPress, Fundación Lazo de Ayuda",
        description:
          "Desarrollé un tema personalizado en WordPress para la Fundación Lazo de Ayuda, utilizando PHP, Vite y Tailwind, mejorando su sitio web.",
        stack: ["PHP", "Javascript", "SASS", "Vite", "Tailwind"],
      },
    ],
    skills: skillsList,
    menu: [
      { label: "Sobre mí", path: "about" },
      { label: "Experiencia", path: "experience" },
      { label: "Proyectos", path: "projects" },
      { label: "Skills", path: "skills" },
    ],
  },
  en: {
    status: "Not available",
    welcome: "Hey, I'm",
    senior: "Miguel Angel",
    name: "Miguel Angel LLacta Flores",
    career: "Frontend Developer Engineer",
    city: "Lima, Perú",
    linkedin: "https://linkedin.com/in/miguelkillki",
    phone: "+51999486139",
    email: "miguelkillki@gmail.com",
    presentation:
      "I enjoy transforming complex problems into simple, attractive, and intuitive designs. Outside the programming field 👨‍💻, you will find me immersed in video games, enjoying gardening 🌱, or dedicating myself to sports practice 🏀.",
    profile:
      "With over 4 years of experience in web page and mobile application development using technologies such as Ionic, Flutter, and Angular. I had the privilege of being part of the creation of the 'Teacher Selection System' for Adex Datatrade, where I led the frontend development using Angular. I also participated in the development of the mobile application 'Mis Primeros Tres' for the Baltazar and Nicolás Foundation, where I was responsible for developing the entire frontend using Ionic, Angular, and Firebase. I also formed part of the team responsible for the development of the mobile application 'Alerta Vecinos' for the Municipality of Santa Maria del Mar, using Flutter and Google Maps APIs, among other technologies.",
    education: [
      {
        startDate: "March 2019",
        city: "Lima, Perú",
        career: "Computer Engineering",
        institution:
          "Instituto de Educación Superior Tecnológico Privado Cibertec",
      },
    ],
    experience: [
      {
        startDate: "2022 — Currently...",
        city: "Remote",
        position: "Frontend web & mobile developer",
        company: "Avanti Consultores",
        description:
          "Responsible for developing the frontend of web and mobile platforms using technologies such as Angular, Redux, Ionic, (HTML, Typescript, JavaScript, CSS, Sass...). I have carried out projects such as:",
        detalies: [
          "Developed an import statistics platform with filterable tables and comparative charts, enabling detailed and personalized analysis.",
          "Implemented a teacher evaluation system with role-based login, advanced forms, and dynamic tables with filters, optimizing evaluation management.",
          "Integrated a login system and payment gateway with multiple subscription plans, improving security and efficiency in the registration process.",
          "Created a mobile app for monitoring pregnant women and newborns, featuring social login, profile forms, and push notifications based on registered events.",
          "Developed a mobile app with social login, integration with Google Maps, offer creation, and a shopping cart with a payment gateway.",
          "Led the development of a dynamic website in WordPress with custom fields to meet the client's specific needs.",
        ],
      },
      {
        startDate: "2019 — 2021",
        city: "Lima, Perú",
        position: "Frontend web developer",
        company: "Municialidad de S.A.",
        description:
          "Responsible for maintaining the municipal web systems, using technologies such as PHP, Java, (HTML, Typescript, JavaScript, CSS, Sass...)",
        detalies: [
          "Developed an institutional page in WordPress with custom fields adapted to the client's needs.",
          "Created a Flutter application to send reports with text, photos, and audio, facilitating the capture and sending of information.",
        ],
      },
    ],
    projects: [
      {
        image: "AdexDataTrade.png",
        title: "Adex Datatrade Dashboard",
        link: "https://www.adexdatatrade.com/",
        description:
          "Developed the import statistics system for Adex Datatrade, generating interactive charts with Chart.js and improving user experience and data analysis.",
        stack: ["JavaScript", "HTML", "CSS", "Chart.js", "C#"],
      },
      {
        image: "adex_instituto.png",
        title: "Institute Adex evaluation system",
        link: "https://adex.edu.pe/",
        description:
          "I was responsible for the frontend of the teacher evaluation system at Instituto Adex, using Angular and Redux to create a fluid and efficient platform.",
        stack: ["Angular", "Redux", "TypeScript", "SASS"],
      },
      {
        image: "AdexDataTrade.png",
        title: "Payment gateway, Adex Datatrade",
        link: "https://www.adexdatatrade.com/PaymentRegistro.aspx?plan=2",
        description:
          "Integrated the payment gateway APIs of Adex with Niubiz, implementing security validations to ensure transaction reliability.",
        stack: ["JavaScript", "HTML", "CSS", "C#"],
      },
      {
        image: "mis_primeros_tres.png",
        title: "Pregnancy monitoring (Mobile application)",
        link: "https://play.google.com/store/apps/details?id=pe.avanti.app.mp3&hl=es_PE",
        description:
          "Developed a mobile app for the Baltazar and Nicolás Foundation, allowing pregnant women to register and monitor their health using Ionic and Firebase.",
        stack: ["Ionic", "Angular", "TypeScript", "Firebase", "SASS"],
      },
      {
        image: "logo_sigo.png",
        title: "Sigo (Mobile application)",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        description:
          "Led the development of a services and sales app, implementing Google Maps, a shopping cart, and payment gateway, creating a complete and efficient platform.",
        stack: ["Angular", "Ionic", "TypeScript", "Firebase", "Google Maps"],
      },
      {
        image: "lazo_de_ayuda.png",
        title: "WordPress Theme Development, Lazo de Ayuda Foundation",
        link: "https://fundacionlazosdeayuda.org/",
        description:
          "Developed a custom WordPress theme for the Lazo de Ayuda Foundation, using PHP, Vite, and Tailwind, improving their website.",
        stack: ["PHP", "Javascript", "SASS", "Vite", "Tailwind"],
      },
    ],
    skills: skillsList,
    menu: [
      { label: "About me", path: "about" },
      { label: "Experience", path: "experience" },
      { label: "Projects", path: "projects" },
      { label: "Skills", path: "skills" },
    ],
  },
};

export type Locale = keyof typeof translations;
