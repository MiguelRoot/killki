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
    icon: "tailwind",
    title: "Tailwind/Sass",
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
  // {
  //   icon: "mongodb",
  //   title: "MongoDB",
  //   level: 3,
  // },
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
  {
    icon: "postgres",
    title: "PostgreSQL",
    level: 3,
  },
  {
    icon: "laravel",
    title: "PHP/Laravel",
    level: 3,
  },
  {
    icon: "java",
    title: "Java/Spring",
    level: 3,
  },
  // {
  //   icon: "awsclaud",
  //   title: "AWS Cloud P.",
  //   level: 3,
  // },
  // {
  //   icon: "awsai",
  //   title: "AWS Ai P.",
  //   level: 3,
  // },
];

const projectsStack = {
  p1: ["Angular", "PrimeNG", "ng2-charts"],
  p2: ["Angular", "NgRx", "PrimeNG", "TypeScript", "SASS"],
  p3: ["JavaScript", "HTML", "CSS", "C#"],
  p4: ["Ionic", "Angular", "Firebase", "SASS", "Login social"],
  p5: [
    "Angular",
    "Ionic",
    "Paypal",
    "Stripe",
    "Firebase",
    "Login social",
    "Google Maps",
    "Notificaciones push",
    "Scanner QR",
    "Algolia",
    "NgRx",
  ],
  p6: ["PHP", "Javascript", "SASS", "Vite", "Tailwind"],
  p7: ["React", "Drag and Drop", "Canva", "Tailwind"],
};

const getExperienceById = (id: string, experienceList: any[]) => {
  return experienceList.find((exp: any) => exp.id === id)?.detalies || [];
};




const frontend = {
  es: {
    career: "Desarrollador Frontend Engineer",
    web: "https://miguelkillki.com/frontend",
    profile:
      "Desarrollador Frontend con más de 5 años de experiencia en la creación de aplicaciones web y móviles, especializado en Angular, React, Next.js y React Native. He participado en proyectos para empresas como ADEX y Nettalco, desarrollando soluciones escalables, optimizando procesos y mejorando significativamente la experiencia de usuario.",
    experience: [
      {
        id: "pu2",
        startDate: "Feb 2022 — nov 2024",
        city: "Remoto",
        position: "Desarrollador frontend Angular/React /Next js",
        company: "Avanti Consultores",
        detalies: [
          "Desarrollo de SPA en Angular con arquitectura modular, RxJS, lazy loading, integración de APIs REST y gráficos estadísticos interactivos para análisis de importaciones, desplegado con Docker",
          "Desarrollo de una aplicación web en React, utilizando React Query para gestión de datos asíncronos, Zustand para estado global, autenticación por tokens, rutas protegidas con roles, e integración con APIs REST, con despliegue en AWS.",
          "Desarrollo de una aplicación móvil en Ionic (Cordova Angular), utilizando arquitectura modular, Reactive Forms, manejo de estado, autenticación por tokens, notificaciones push y consumo de APIs REST.",
          "Desarrollo de aplicación web en React, utilizando componentes reutilizables, drag & drop, gestión de estado, y exportación de archivos para procesos industriales textiles.",
          "Desarrollo de una aplicación móvil híbrida con Ionic, integrando registro de usuarios, geolocalización (mapas), pagos stripe, paypal, validación por QR, notificaciones en tiempo real y consumo de APIs REST para la contratación de servicios y gestión de ofertas.",
          "Desarrollo de un e-commerce con React y Next.js, implementando SSR y SSG para optimización de SEO y performance, integrado con Medusa.js como backend headless, gestión de catálogo, carrito, checkout, pagos, autenticación y consumo de APIs REST, bajo arquitectura escalable y orientada a negocio.",
        ],
      },
      {
        id: "pu1",
        startDate: "Ene 2019 — nov 2021",
        city: "Lima, Perú",
        position: "Desarrollador web front-end",
        company: "Municipalidad de S.A.",
        detalies: [
          "Desarrollo de un sitio web en WordPress(CMS), utilizando campos personalizados (custom fields) y Web Components para crear interfaces modulares y reutilizables, junto con optimización de SEO on-page e integración de Google Analytics, Google Search Console y Microsoft Clarity para análisis de tráfico, rendimiento y comportamiento de usuarios",
          "Desarrollo de aplicación móvil en React Native, utilizando componentes reutilizables, manejo de estado con Redux, integración con APIs REST y funcionalidades para gestión de clientes, pedidos y pagos.",
        ],
      },
    ],
    projects: [
      {
        id: "p1",
        image: "AdexDataTrade.png",
        title: "Adex Datatrade - Dashboard",
        link: "https://www.adexdatatrade.com/",
        description:
          "Desarrollé con Angular una plataforma de estadísticas de importaciones para la empresa ADEX, consumiendo datos desde un API para mostrar gráficos comparativos y tablas con filtros avanzados. La solución permitió a los usuarios realizar análisis detallados y personalizados en tiempo real, lo que mejoró la toma de decisiones estratégicas y optimizó la gestión de información comercial.",
        stack: projectsStack["p1"],
      },
      // {
      //   image: "adex_instituto.png",
      //   link: "https://adex.edu.pe/",
      //   title: "Instituto Adex - Sistema de evaluación",
      //   description:
      //     "Implementé con Angular un sistema de dashboard de evaluación para la contratación virtual de docentes en ADEX, con login basado en roles, formularios avanzados y tablas dinámicas con filtros personalizables. Este sistema permitió que cada postulante avanzara por distintas fases de evaluación gestionadas por diferentes evaluadores, lo que agilizó el proceso de selección, garantizó mayor transparencia y facilitó la contratación docente de manera remota.",
      //   stack: projectsStack["p2"],
      // },
      // {
      //   image: "AdexDataTrade.png",
      //   link: "https://www.adexdatatrade.com/PaymentRegistro.aspx?plan=2",
      //   title: "Adex Datatrade - Pasarela de pagos",
      //   description:
      //     "Pasarela de pago con múltiples planes de suscripción, optimizando y automatizando el proceso de contrato de servicio.",
      //   stack: projectsStack["p3"],
      // },
      {
        image: "mis_primeros_tres.png",
        link: "https://play.google.com/store/apps/details?id=pe.avanti.app.mp3&hl=es_PE",
        title: "Mis Primeros tres - Aplicación móvil",
        description:
          "Desarrollé con Ionic una app móvil para la Fundación Baltazar y Nicolás, enfocada en el monitoreo de gestantes y recién nacidos. La aplicación incluyó módulos de login y registro social, formularios interactivos y notificaciones push activadas por eventos, lo que facilitó el seguimiento médico y mejoró la comunicación entre pacientes y profesionales de salud.",
        stack: projectsStack["p4"],
      },
      {
        image: "logo_sigo.png",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        title: "Sigo - Aplicación móvil",
        description:
          "Desarrollé una app móvil para la startup Sigo, orientada a la contratación de servicios y publicación de ofertas. La aplicación incluyó login social, integración con Google Maps para geolocalización y seguimiento en tiempo real, pasarela de pagos, notificaciones push y escáner de códigos QR, lo que permitió optimizar la experiencia del usuario y agilizar los procesos de contratación y pago dentro de la plataforma.",
        stack: projectsStack["p5"],
      },
      {
        image: "nettalco.jpg",
        link: "https://www.nettalco.com.pe",
        title: "Nettalco - Aplicación web",
        description:
          "Desarrollé para Textil Nettalco una aplicación web en React que permite a los usuarios diseñar patrones de rayas para camisetas mediante un gestor visual con drag & drop. La plataforma genera archivos listos para la máquina textil industrial, además de ofrecer opciones para exportar y guardar diseños para futuras ediciones, optimizando así el flujo de trabajo y reduciendo tiempos en el proceso de diseño y producción.",
        stack: projectsStack["p7"],
      },
      // {
      //   image: "lazo_de_ayuda.png",
      //   link: "https://fundacionlazosdeayuda.org/",
      //   title: "Fundación Lazo de Ayuda - Tema WordPress",
      //   description:
      //     "Sitio web dinámico en WordPress, implementando campos personalizados para adaptarlo a las necesidades específicas del cliente.",
      //   stack: projectsStack["p6"],
      // },
    ],
  },
  en: {},
};

const backend = {
  es: {
    career: "Backend Developer Engineer",
    web: "https://miguelkillki.com/backend",
    profile:
      "Desarrollador Backend con experiencia en Node.js y Java, enfocado en el desarrollo de APIs REST, autenticación con roles y permisos, y despliegue de aplicaciones mediante Docker. Con conocimientos en SQL (MySQL), Linux, Git y trabajo bajo metodologías ágiles (Scrum). Perfil proactivo, con capacidad de aprendizaje rápido y orientación a la calidad del código.",
    experience: [
      {
        id: "pu2",
        startDate: "Feb 2022 — nov 2024",
        city: "Remoto",
        position: "Desarrollador Backend Node.js/Java",
        company: "Avanti Consultores",
        detalies: [
          "Desarrollo de API backend en Java utilizando Spring Boot y Spring Security, con autenticación basada en tokens, gestión de roles y permisos, persistencia de datos en MySQL, y despliegue mediante contenedores Docker.",
          "Desarrollo de API REST en Node.js para programadas y enviar notificaciones push, integradas con Firebase Database y Firebase Cloud Messaging (FCM).",
          "Desarrollo de una API para pasarela de pagos utilizando Node.js y TypeScript, con integración de Stripe para el procesamiento seguro de pagos",
          "Desarrollo de e-commerce headless utilizando MedusaJS como backend, con APIs REST, PostgreSQL, gestión de productos, órdenes y pagos."
        ],
      },
    ],
    projects: [
      // {
      //   id: "p1",
      //   image: "AdexDataTrade.png",
      //   title: "Adex Datatrade - Dashboard",
      //   link: "https://www.adexdatatrade.com/",
      //   description:
      //     "Desarrollé con Angular una plataforma de estadísticas de importaciones para la empresa ADEX, consumiendo datos desde un API para mostrar gráficos comparativos y tablas con filtros avanzados. La solución permitió a los usuarios realizar análisis detallados y personalizados en tiempo real, lo que mejoró la toma de decisiones estratégicas y optimizó la gestión de información comercial.",
      //   stack: projectsStack["p1"],
      // },
    ],
  },
  en: {
    career: "Backend Developer Engineer",
    web: "https://miguelkillki.com/backend",
    profile:
      "Desarrollador Backend con experiencia en Node.js y Java, enfocado en el desarrollo de APIs REST, autenticación con roles y permisos, y despliegue de aplicaciones mediante Docker. Con conocimientos en SQL (MySQL), Linux, Git y trabajo bajo metodologías ágiles (Scrum). Perfil proactivo, con capacidad de aprendizaje rápido y orientación a la calidad del código.",
    experience: [
      {
        id: "pu2",
        startDate: "Feb 2022 — nov 2024",
        city: "Remoto",
        position: "Desarrollador Backend Node.js/Java",
        company: "Avanti Consultores",
        detalies: [
          "Desarrollo de API backend en Java utilizando Spring Boot y Spring Security, con autenticación basada en tokens, gestión de roles y permisos, persistencia de datos en MySQL, y despliegue mediante contenedores Docker.",
          "Desarrollo de API REST en Node.js para programadas y enviar notificaciones push, integradas con Firebase Database y Firebase Cloud Messaging (FCM).",
          "Desarrollo de una API para pasarela de pagos utilizando Node.js y TypeScript, con integración de Stripe para el procesamiento seguro de pagos",
          "Desarrollo de e-commerce headless utilizando MedusaJS como backend, con APIs REST, PostgreSQL, gestión de productos, órdenes y pagos."
        ],
      },
    ],
    projects: [
      // {
      //   id: "p1",
      //   image: "AdexDataTrade.png",
      //   title: "Adex Datatrade - Dashboard",
      //   link: "https://www.adexdatatrade.com/",
      //   description:
      //     "Desarrollé con Angular una plataforma de estadísticas de importaciones para la empresa ADEX, consumiendo datos desde un API para mostrar gráficos comparativos y tablas con filtros avanzados. La solución permitió a los usuarios realizar análisis detallados y personalizados en tiempo real, lo que mejoró la toma de decisiones estratégicas y optimizó la gestión de información comercial.",
      //   stack: projectsStack["p1"],
      // },
    ],
  },
};

const fullstack = {
  es: {
    career: "Full Stack Developer Engineer",
    web: "https://miguelkillki.com",
    profile:
      "Desarrollador Frontend con más de 5 años de experiencia en la creación de aplicaciones web y móviles. Especializado en Angular, React y React Native, con experiencia en proyectos para empresas como ADEX, Avanti Consultoría y Nettalco. Enfocado en optimizar procesos, mejorar la experiencia de usuario y desarrollar soluciones escalables.",
    experience: [
      {
        id: "pu2",
        startDate: "Feb 2022 — nov 2024",
        city: "Remoto",
        position: "Desarrollador Fullstack",
        company: "Avanti Consultores",
        description:
          "Encargado de realizar el desarrollo fontend de plataformas web y movil usando las tecnologías Angular, Redux, Ionic,  (HTML, Typescript, JavaScript css sass...) he realizado proyectos como:",
        detalies: [
          ...getExperienceById("pu2", backend.es.experience),
          ...getExperienceById("pu2", frontend.es.experience),
        ],
      },
      {
        id: "pu1",
        startDate: "Ene 2019 — nov 2021",
        city: "Lima, Perú",
        position: "Desarrollador web front-end",
        company: "Municialidad de S.A.",
        description:
          "Encargado de mantener los sistems web de la municipalidad, usando las tecnologías PHP, Java, (HTML, Typescript, JavaScript css sass...)",
        detalies: [
          ...getExperienceById("pu1", backend.es.experience),
          ...getExperienceById("pu1", frontend.es.experience),
        ],
      },
    ],
    projects: [
      ...backend.es.projects,
      ...frontend.es.projects,
    ],
  },
  en: {},
};

export const profession = {
  menu: {
    es: [
      { label: "Sobre mí", path: "about", color: "homemenu-100" },
      { label: "Experiencia", path: "experience", color: "homemenu-200" },
      { label: "Proyectos", path: "projects", color: "homemenu-300" },
      { label: "Skills", path: "skills", color: "homemenu-400" },
    ],
    en: [
      { label: "About me", path: "about", color: "homemenu-100" },
      { label: "Experience", path: "experience", color: "homemenu-200" },
      { label: "Projects", path: "projects", color: "homemenu-300" },
      { label: "Skills", path: "skills", color: "homemenu-400" },
    ],
  },
  skillsList: [
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
      icon: "tailwind",
      title: "Tailwind/Sass",
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
    // {
    //   icon: "mongodb",
    //   title: "MongoDB",
    //   level: 3,
    // },
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
    {
      icon: "postgres",
      title: "PostgreSQL",
      level: 3,
    },
    {
      icon: "laravel",
      title: "PHP/Laravel",
      level: 3,
    },
    {
      icon: "java",
      title: "Java/Spring",
      level: 3,
    },
    // {
    //   icon: "awsclaud",
    //   title: "AWS Cloud P.",
    //   level: 3,
    // },
    // {
    //   icon: "awsai",
    //   title: "AWS Ai P.",
    //   level: 3,
    // },
  ],
  detail: {
    senior: "Miguel Angel",
    name: "Miguel Angel LLacta Flores",
    city: "Lima, Perú",
    linkedin: "https://linkedin.com/in/miguelkillki",
    web: "https://miguelkillki.com",
    phone: "+51999486139",
    email: "miguelkillki@gmail.com",
  },
  global: {
    es: {
      status: "No disponible",
      welcome: "Hey, soy",
      education: [
        {
          startDate: "marzo 2019",
          city: "Lima, Perú",
          institution:
            "Instituto de Educación Superior Tecnológico Privado Cibertec",
        },
      ],
      presentation:
        "Me gusta crear productos simples que resuelven problemas complejos. Fuera de la programación disfruto jugar videojuegos 🎮, cuidar mi jardín 🌱 y practicar deporte 💪.",
    },
    en: {
      status: "Not available",
      welcome: "Hey, I'm",
      education: [
        {
          startDate: "March 2019",
          city: "Lima, Perú",
          institution:
            "Cibertec Private Technological Higher Education Institute",
        },
      ],
      presentation:
        "I enjoy creating simple products that solve complex problems. Outside the programming world, I like to play video games 👨‍💻, do gardening 🌱 and practice sports 💪.",
    },
  },
  frontend: frontend,
  backend: backend,
  fullstack: fullstack,
};

export const translations = {
  es: {
    status: "No disponible",
    welcome: "Hey, soy",
    senior: "Miguel Angel",
    name: "Miguel Angel LLacta Flores",
    career: "Full Stack Developer Engineer",
    city: "Lima, Perú",
    linkedin: "https://linkedin.com/in/miguelkillki",
    web: "https://miguelkillki.com",
    phone: "+51999486139",
    email: "miguelkillki@gmail.com",
    presentation:
      "Me gusta crear productos simples que resuelven problemas complejos. Fuera de la programación disfruto jugar videojuegos 🎮, cuidar mi jardín 🌱 y practicar deporte 💪.",
    profile:
      "Desarrollador Frontend con más de 5 años de experiencia en la creación de aplicaciones web y móviles. Especializado en Angular, React y React Native, con experiencia en proyectos para empresas como ADEX, Avanti Consultoría y Nettalco. Enfocado en optimizar procesos, mejorar la experiencia de usuario y desarrollar soluciones escalables.",
    detalies: [
      "🔴 Angular: Dashboards, formularios complejos, tablas dinámicas y gráficos. Uso de Angular Material, PrimeNG, Formly y Algolia. Integración con APIs REST, pasarelas de pago (PayPal, Stripe), gestión de estado con NgRx y pruebas con Jest.",
      "⚛️ React: Desarrollo de dashboards, formularios y tablas con PrimeReact. Integración de APIs REST, gestión de estado con (Redux, Zustand) y pruebas con Jest/React Testing.",
      "📱 Ionic & React Native: Creación de apps móviles con login social, formularios interactivos, notificaciones push, GPS tracking, lector QR, cámara, Google Maps y pasarelas de pago.",
      "🌐 WordPress: Desarrollo de sitios personalizados con Sage y Tailwind. Implementación de Custom Post Types, WooCommerce y soporte multilenguaje.",
      "☕ Java & Spring Boot: Implementación de login e integración de APIs REST conectadas a MySQL, construyendo servicios escalables y mantenibles.",
      "🤝 Buenas prácticas: uso de control de versiones (Git), metodologías ágiles Scrumy despliegue en la nube (Firebase, Vercel, Docker).",
    ],
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
        startDate: "Feb 2022 — nov 2024",
        city: "Remoto",
        position: "Desarrollador frontend Angular/React",
        company: "Avanti Consultores",
        description:
          "Encargado de realizar el desarrollo fontend de plataformas web y movil usando las tecnologías Angular, Redux, Ionic,  (HTML, Typescript, JavaScript css sass...) he realizado proyectos como:",
        detalies: [
          "Desarrollé con Angular una plataforma interactiva de estadísticas de importaciones, que permitió a los usuarios realizar análisis detallados y personalizados en tiempo real mediante filtros y comparaciones dinámicas, mejorando la toma de decisiones estratégicas.",
          "Implementé con Angular un sistema de evaluación y contratación virtual de docentes, donde cada postulante avanzaba por distintas fases revisadas por evaluadores con roles específicos. Esta solución agilizó el proceso de selección, garantizó mayor transparencia y facilitó la contratación remota de docentes.",
          "Creé una app móvil en Ionic para el monitoreo de gestantes y recién nacidos, que permitió a los usuarios registrarse fácilmente, completar formularios interactivos y recibir notificaciones en tiempo real sobre eventos importantes, mejorando el seguimiento médico y facilitando la comunicación entre pacientes y profesionales de salud.",
          "Desarrollé una app móvil con Ionic para la contratación de servicios y gestión de ofertas, que permitió a los usuarios registrarse fácilmente, localizar servicios cercanos en un mapa, realizar pagos seguros y recibir notificaciones en tiempo real, validación por QR, mejorando la experiencia de contratación y aumentando la eficiencia del proceso.",
          "Desarrollé una aplicación web en Angular para el diseño de patrones textiles de camisetas rayadas, que permitía a los usuarios crear de forma visual los diseños de líneas mediante drag & drop y generar archivos con las medidas exactas requeridas por la máquina industrial de teñido. Además, incluía la opción de guardar y exportar diseños editables, lo que facilitó la producción de telas personalizadas y redujo tiempos en la preparación de nuevos modelos.",
          "Desarrollé con React Native una aplicación móvil para la gestión de clientes y pedidos, donde los trabajadores podían registrar clientes, gestionar sus pedidos de productos avícolas y facilitar el proceso de pago, optimizando la administración de ventas y mejorando la experiencia del cliente.",
        ],
      },
      {
        startDate: "Ene 2019 — nov 2021",
        city: "Lima, Perú",
        position: "Desarrollador web front-end",
        company: "Municialidad de S.A.",
        description:
          "Encargado de mantener los sistems web de la municipalidad, usando las tecnologías PHP, Java, (HTML, Typescript, JavaScript css sass...)",
        detalies: [
          "Desarrollé un sitio web dinámico en WordPress, implementando campos personalizados adaptados a las necesidades del cliente, lo que permitió una gestión de contenidos más flexible y una mejor personalización de la experiencia del usuario.",
          "Creé con Flutter una aplicación móvil para el envío de reportes, que permitía capturar y enviar información en texto, fotos y audio, facilitando la comunicación en tiempo real.",
        ],
      },
    ],
    projects: [
      {
        id: "p1",
        image: "AdexDataTrade.png",
        title: "Adex Datatrade - Dashboard",
        link: "https://www.adexdatatrade.com/",
        description:
          "Desarrollé con Angular una plataforma de estadísticas de importaciones para la empresa ADEX, consumiendo datos desde un API para mostrar gráficos comparativos y tablas con filtros avanzados. La solución permitió a los usuarios realizar análisis detallados y personalizados en tiempo real, lo que mejoró la toma de decisiones estratégicas y optimizó la gestión de información comercial.",
        stack: projectsStack["p1"],
      },
      {
        image: "adex_instituto.png",
        link: "https://adex.edu.pe/",
        title: "Instituto Adex - Sistema de evaluación",
        description:
          "Implementé con Angular un sistema de dashboard de evaluación para la contratación virtual de docentes en ADEX, con login basado en roles, formularios avanzados y tablas dinámicas con filtros personalizables. Este sistema permitió que cada postulante avanzara por distintas fases de evaluación gestionadas por diferentes evaluadores, lo que agilizó el proceso de selección, garantizó mayor transparencia y facilitó la contratación docente de manera remota.",
        stack: projectsStack["p2"],
      },
      // {
      //   image: "AdexDataTrade.png",
      //   link: "https://www.adexdatatrade.com/PaymentRegistro.aspx?plan=2",
      //   title: "Adex Datatrade - Pasarela de pagos",
      //   description:
      //     "Pasarela de pago con múltiples planes de suscripción, optimizando y automatizando el proceso de contrato de servicio.",
      //   stack: projectsStack["p3"],
      // },
      {
        image: "mis_primeros_tres.png",
        link: "https://play.google.com/store/apps/details?id=pe.avanti.app.mp3&hl=es_PE",
        title: "Mis Primeros tres - Aplicación móvil",
        description:
          "Desarrollé con Ionic una app móvil para la Fundación Baltazar y Nicolás, enfocada en el monitoreo de gestantes y recién nacidos. La aplicación incluyó módulos de login y registro social, formularios interactivos y notificaciones push activadas por eventos, lo que facilitó el seguimiento médico y mejoró la comunicación entre pacientes y profesionales de salud.",
        stack: projectsStack["p4"],
      },
      {
        image: "logo_sigo.png",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        title: "Sigo - Aplicación móvil",
        description:
          "Desarrollé una app móvil para la startup Sigo, orientada a la contratación de servicios y publicación de ofertas. La aplicación incluyó login social, integración con Google Maps para geolocalización y seguimiento en tiempo real, pasarela de pagos, notificaciones push y escáner de códigos QR, lo que permitió optimizar la experiencia del usuario y agilizar los procesos de contratación y pago dentro de la plataforma.",
        stack: projectsStack["p5"],
      },
      {
        image: "nettalco.jpg",
        link: "https://www.nettalco.com.pe",
        title: "Nettalco - Aplicación web",
        description:
          "Desarrollé para Textil Nettalco una aplicación web en Angular que permite a los usuarios diseñar patrones de rayas para camisetas mediante un gestor visual con drag & drop. La plataforma genera archivos listos para la máquina textil industrial, además de ofrecer opciones para exportar y guardar diseños para futuras ediciones, optimizando así el flujo de trabajo y reduciendo tiempos en el proceso de diseño y producción.",
        stack: projectsStack["p7"],
      },
      // {
      //   image: "lazo_de_ayuda.png",
      //   link: "https://fundacionlazosdeayuda.org/",
      //   title: "Fundación Lazo de Ayuda - Tema WordPress",
      //   description:
      //     "Sitio web dinámico en WordPress, implementando campos personalizados para adaptarlo a las necesidades específicas del cliente.",
      //   stack: projectsStack["p6"],
      // },
    ],
    skills: skillsList,
    menu: [
      { label: "Sobre mí", path: "about", color: "homemenu-100" },
      { label: "Experiencia", path: "experience", color: "homemenu-200" },
      { label: "Proyectos", path: "projects", color: "homemenu-300" },
      { label: "Skills", path: "skills", color: "homemenu-400" },
    ],
  },
  en: {
    status: "Not available",
    welcome: "Hey, I'm",
    senior: "Miguel Angel",
    name: "Miguel Angel LLacta Flores",
    career: "Full Stack Developer Engineer",
    city: "Lima, Perú",
    linkedin: "https://linkedin.com/in/miguelkillki",
    web: "https://miguelkillki.com",
    phone: "+51999486139",
    email: "miguelkillki@gmail.com",
    presentation:
      "I enjoy creating simple products that solve complex problems. Outside the programming world, I like to play video games 👨‍💻, do gardening 🌱 and practice sports 💪.",
    profile:
      "👨‍💻 With over 4 years of experience in software development, working as a Frontend developer, I have worked throughout my career with various technologies, creating web and mobile solutions that combine scalability and a good user experience.",
    detalies: [
      "🔴 Angular: Dashboards, complex forms, dynamic tables, and charts. Use of Angular Material, PrimeNG, Formly, and Algolia. Integration with REST APIs, payment gateways (PayPal, Stripe), state management with NgRx, and testing with Jest.",
      "⚛️ React: Development of dashboards, forms, and tables with PrimeReact. Integration of REST APIs, state management with (Redux, Zustand), and testing with Jest/React Testing.",
      "📱 Ionic (Angular): Creation of mobile apps with social login, interactive forms, push notifications, GPS tracking, QR reader, camera, Google Maps, and payment gateways.",
      "🌐 WordPress: Development of custom sites with Sage and Tailwind. Implementation of Custom Post Types, WooCommerce, and multi-language support.",
      "🛠️ Best practices: use of version control (Git), Agile Scrum methodologies, and cloud deployment (Firebase, Vercel, Docker).",
    ],
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
        startDate: "2022 — Jan 2024",
        city: "Remote",
        position: "Frontend web & mobile developer",
        company: "Avanti Consultores",
        description:
          "Responsible for developing the frontend of web and mobile platforms using technologies such as Angular, Redux, Ionic, (HTML, Typescript, JavaScript, CSS, Sass...). I have carried out projects such as:",
        detalies: [
          "I developed an import statistics platform with advanced filter tables and comparative charts, enabling detailed and personalized analysis.",
          "I implemented an evaluation dashboard system for hiring teachers virtually, incorporating role-based login, advanced forms, and dynamic tables with customizable filters.",
          "I integrated a payment gateway with multiple subscription plans, automating the service purchase process.",
          "I created a mobile app in Ionic for monitoring pregnant women and newborns, featuring modules for social login and registration, interactive forms, and event-based push notifications.",
          "I developed a mobile app for service and offer hiring, including social login, Google Maps integration for tracking, a payment gateway, push notifications, and a QR code scanner.",
          "Web application in Angular to design stripe patterns with drag & drop, generate files for textile machine and save/export editable designs.",
          "I built a dynamic WordPress website, implementing custom fields to meet the client's specific needs.",
        ],
      },
      {
        startDate: "Jan 2019 — Nov 2021",
        city: "Lima, Perú",
        position: "Frontend web developer",
        company: "Municialidad de S.A.",
        description:
          "Responsible for maintaining the municipal web systems, using technologies such as PHP, Java, (HTML, Typescript, JavaScript, CSS, Sass...)",
        detalies: [
          "I developed an institutional website in WordPress with custom fields tailored to specific requirements.",
          "I created a Flutter application for submitting reports with text, photos, and audio, streamlining the capture and transmission of information.",
        ],
      },
    ],
    projects: [
      {
        image: "AdexDataTrade.png",
        title: "Adex Datatrade Dashboard",
        link: "https://www.adexdatatrade.com/",
        description:
          "Import statistics platform with advanced filter tables and comparative charts, optimized for detailed analysis tailored to user needs.",
        stack: projectsStack["p1"],
      },
      {
        image: "adex_instituto.png",
        title: "Institute Adex evaluation system",
        link: "https://adex.edu.pe/",
        description:
          "Evaluation dashboard system for virtual teacher hiring, with role-based login, advanced forms, and dynamic tables with customizable filters.",
        stack: projectsStack["p2"],
      },
      {
        image: "AdexDataTrade.png",
        title: "Payment gateway, Adex Datatrade",
        link: "https://www.adexdatatrade.com/PaymentRegistro.aspx?plan=2",
        description:
          "Payment gateway with multiple subscription plans, optimizing and automating the service contract process.",
        stack: projectsStack["p3"],
      },
      {
        image: "mis_primeros_tres.png",
        title: "Pregnancy monitoring (Mobile application)",
        link: "https://play.google.com/store/apps/details?id=pe.avanti.app.mp3&hl=es_PE",
        description:
          "A mobile app in Ionic for monitoring pregnant women and newborns, featuring social login and registration modules, interactive forms, and event-triggered push notifications.",
        stack: projectsStack["p4"],
      },
      {
        image: "logo_sigo.png",
        title: "Sigo (Mobile application)",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        description:
          "A mobile app for hiring services and offers, featuring social login, Google Maps integration for tracking, a payment gateway, push notifications, and a QR code scanner.",
        stack: projectsStack["p5"],
      },
      {
        image: "nettalco.jpg",
        title: "Nettalco (Web application)",
        link: "https://www.nettalco.com.pe",
        description:
          "A web application with Angular that allows designers to create stripe patterns for t-shirts using a visual drag & drop editor, generating files for the textile machine and enabling designs to be exported and saved for future edits.",
      },
      // {
      //   image: "lazo_de_ayuda.png",
      //   title: "WordPress Theme Development, Lazo de Ayuda Foundation",
      //   link: "https://fundacionlazosdeayuda.org/",
      //   description:
      //     "A dynamic WordPress website, implementing custom fields to tailor it to the client's specific needs.",
      //   stack: projectsStack["p6"],
      // },
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
//export profession
export type Profession = keyof typeof profession;
