const skillsList = [
  {
    icon: "javascript",
    title: "JavaScript",
  },
  {
    icon: "angular",
    title: "Angular",
  },
  {
    icon: "ionic",
    title: "Ionic",
  },
  {
    icon: "sass",
    title: "Sass",
  },
  {
    icon: "nodejs",
    title: "NodeJS",
  },
  {
    icon: "reactjs",
    title: "ReactJS",
  },
  {
    icon: "mongodb",
    title: "MongoDB",
  },
  {
    icon: "figma",
    title: "Figma",
  },
  {
    icon: "flutter",
    title: "Flutter",
  },
  {
    icon: "github",
    title: "Git/Github",
  },
  {
    icon: "jest",
    title: "Jest",
  },
  {
    icon: "dart",
    title: "Dart",
  },
  {
    icon: "redux",
    title: "Redux",
  },
  {
    icon: "nextjs",
    title: "NextJS",
  },
  {
    icon: "astro",
    title: "Astro",
  },
  {
    icon: "wordpress",
    title: "Wordpress",
  },
];

export const translations = {
  es: {
    welcome: "Hey, soy",
    senior: "Miguel Angel",
    career: "Frontend Developer Engineer",
    presentation:
      "Disfruto transformar problemas complejos en diseños simples, atractivos e intuitivos. Fuera del ámbito de la programación 👨‍💻, me encontrarás sumergido en videojuegos, disfrutando de la jardinería 🌱 o dedicándome a la práctica deportiva 🏀.",
    profile:
      "Con más de 4 años de experiencia en el desarrollo de páginas web y aplicaciones móviles utilizando tecnologías como Ionic, Flutter y Angular. Tuve el privilegio de formar parte en la creación del 'Sistema de selección de docentes' para Adex Datatrade, donde lideré el desarrollo del frontend utilizando Angular. Además, participé en el desarrollo de la aplicación móvil 'Mis Primeros Tres' para Fundación Baltazar y Nicolás, en la que tuve la responsabilidad de desarrollar todo el frontend utilizando Ionic, Angular y Firebase. También formé parte del equipo encargado del desarrollo de la aplicación móvil 'Alerta Vecinos' para la Municipalidad de Santa Maria del Mar, utilizando Flutter y las APIs de Google Maps, entre otras tecnologías.",
    experience: [
      {
        startDate: "2022 — Actualmente...",
        position: "Desarrollador web front-end & móvil",
        company: "Avanti Consultores",
        description:
          "Encargado de realizar el desarrollo fontend de plataformas web y movil usando las tecnologías Angular, Redux, Ionic,  (HTML, Typescript, JavaScript css sass...) he realizado proyectos como:",
      },
      {
        startDate: "2019 — 2021",
        position: "Desarrollador web front-end",
        company: "Municialidad de S.A.",
        description:
          "Encargado de mantener los sistems web de la municipalidad, usando las tecnologías PHP, Java, (HTML, Typescript, JavaScript css sass...)",
      },
    ],
    projects: [
      {
        image: "AdexDataTrade.png",
        title: "Dashboard Adex Datatrade",
        description:
          "Sistema de estadísticas de importaciones de Adex Datatrade, utilizando tecnologías como JavaScript, HTML y CSS para consumir las APIs y generar los gráficos estadísticos usando la librería Chart.js. Gracias a estas actualizaciones, la plataforma ahora ofrece una experiencia de usuario más intuitiva y personalizable, y permite un análisis más profundo y efectivo de los datos.",
        stack: ["JavaScript", "HTML", "CSS", "Chart.js", "C#"],
      },
      {
        image: "adex_instituto.png",
        title: "Sistema de evaluación, Instituto Adex",
        description:
          "He sido el responsable del frontend en el sistema de evaluación de docentes del Instituto Adex, en el cual se pueden realizar evaluaciones continuas y selecciones de docentes para el instituto. Utilicé herramientas como Angular, Material Angular y Redux para desarrollar una plataforma eficiente y fácil de usar para los usuarios. Gracias a estas tecnologías, la plataforma ahora ofrece una experiencia de usuario más fluida y personalizada.",
        stack: ["Angular", "Redux", "TypeScript", "SASS"],
      },
      {
        image: "AdexDataTrade.png",
        title: "Pasarela de pagos, Adex Datatrade",
        description:
          "En este proyecto, he tenido el papel de desarrollador Frontend, encargado de integrar y consumir las APIs necesarias para el correcto funcionamiento del sistema de pasarela de pago de  Adex con Niubiz. Además, he sido responsable de implementar las validaciones pertinentes para asegurar la seguridad de las transacciones y la confiabilidad del sistema.",
        stack: ["JavaScript", "HTML", "CSS", "C#"],
      },
      {
        image: "mis_primeros_tres.png",
        title: "Seguimiento de embarazo (Aplicación móvil)",
        description:
          "He tenido la oportunidad de desarrollar una aplicación móvil para la Fundación Baltazar y Nicolás utiliza tecnologías como Ionic, Angular y Firebase. A través de esta aplicación, las mujeres embarazadas pueden llevar un registro detallado de su salud y la de su bebé, incluyendo registrar médicas, exámenes de laboratorio, síntomas y otros factores relevantes.",
        stack: ["Ionic", "Angular", "TypeScript", "Firebase", "SASS"],
      },
      {
        image: "logo_sigo.png",
        title: "Sigo (Aplicación móvil)",
        description:
          "Me complace haber formado parte del equipo de desarrollo de esta aplicación dedicada a la contratación de servicios y venta de productos. Durante este proyecto, empleé tecnologías avanzadas como Ionic, Google Maps, Angular, Sass y Paypal, contribuyendo así a la creación de una plataforma eficiente y completa.",
        stack: ["Angular", "Ionic", "TypeScript", "Firebase", "Google Maps"],
      },
      {
        image: "lazo_de_ayuda.png",
        title: "Desarrollo del Tema WordPress, Fundación Lazo de Ayuda",
        description:
          "En el marco de este proyecto, tuve la oportunidad elaborar el diseño y desarrollo de un tema personalizado para WordPress destinado a la Fundación Lazo de Ayuda. Durante esta experiencia, implementé tecnologías clave como PHP, Vite, Sass y Tailwind, contribuyendo así a la mejora y modernización del sitio web de la organización.",
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
    welcome: "Hey, I'm",
    senior: "Miguel Angel",
    career: "Frontend Developer Engineer",
    presentation:
      "I enjoy transforming complex problems into simple, attractive, and intuitive designs. Outside the programming field 👨‍💻, you will find me immersed in video games, enjoying gardening 🌱, or dedicating myself to sports practice ⛹️‍♀️.",
    profile:
      "Web developer with more than 5 years of experience in software development. Throughout these years, I have had the privilege of being part of the creation of the Adex Datatrade dashboard, improving efficiency and user experience. I am looking to be part of the frontend developer team contributing my extensive knowledge in Angular.",
    experience: [
      {
        startDate: "08/2019",
        position: "Front-end web developer",
        company: "Avantis",
        description:
          "Help companies hire, pay and develop effectively with talented workforce.",
        // tasks: [
        //     "Migration of management dashboard to Laravel + Angular",
        // ]
      },
    ],
    projects: [
      {
        image: "AdexDataTrade.png",
        title: "Adex Datatrade Dashboard",
        description:
          "Adex Datatrade import statistics system, using technologies such as JavaScript, HTML and CSS to consume APIs and generate statistical charts using the Chart.js library. Thanks to these updates, the platform now offers a more intuitive and customizable user experience, and allows for deeper and more effective data analysis.",
        stack: ["JavaScript", "HTML", "CSS", "Chart.js", "C#"],
      },
      {
        image: "adex_instituto.png",
        title: "Institute Adex evaluation system",
        description:
          "I have been responsible for the frontend in the teacher evaluation system of the Adex Institute, in which continuous evaluations and selections of teachers for the institute can be carried out. I used tools such as Angular, Angular Material and Redux to develop an efficient and easy-to-use platform for users. Thanks to these technologies, the platform now offers a smoother and more personalized user experience.",
        stack: ["Angular", "Redux", "TypeScript", "SASS"],
      },
      {
        image: "AdexDataTrade.png",
        title: "Payment gateway, Adex Datatrade",
        description:
          "In this project, I had the role of Frontend developer, in charge of integrating and consuming the APIs necessary for the correct functioning of the Adex payment gateway system with Niubiz. In addition, I have been responsible for implementing the relevant validations to ensure the security of transactions and the reliability of the system.",
        stack: ["JavaScript", "HTML", "CSS", "C#"],
      },
      {
        image: "mis_primeros_tres.png",
        title: "Pregnancy monitoring (Mobile application)",
        description:
          "I have had the opportunity to develop a mobile application for the Baltazar and Nicolás Foundation using technologies such as Ionic, Angular, and Firebase. Through this application, pregnant women can keep a detailed record of their health and that of their baby, including recording medical appointments, laboratory tests, symptoms, and other relevant factors.",
        stack: ["Ionic", "Angular", "TypeScript", "Firebase", "SASS"],
      },
      {
        image: "logo_sigo.png",
        title: "Sigo (Mobile application)",
        description:
          "I am pleased to have been part of the development team of this application dedicated to hiring services and selling products. During this project, I used advanced technologies such as Ionic, Google Maps, Angular, Sass, and Paypal, thus contributing to the creation of an efficient and complete platform.",
        stack: ["Angular", "Ionic", "TypeScript", "Firebase", "Google Maps"],
      },
      {
        image: "lazo_de_ayuda.png",
        title: "WordPress Theme Development, Lazo de Ayuda Foundation",
        description:
          "As part of this project, I had the opportunity to design and develop a custom theme for WordPress for the Lazo de Ayuda Foundation. During this experience, I implemented key technologies such as PHP, Vite, Sass, and Tailwind, thus contributing to the improvement and modernization of the organization's website.",
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
