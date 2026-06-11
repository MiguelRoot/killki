import { t } from "./helpers";

const getExperienceById = (id: string, experienceList: any[]) => {
  return experienceList.find((exp: any) => exp.id === id)?.detalies || [];
};

// export const langs = ["es", "en"] as const;

export const contentProfession = (lang: "es" | "en") => {
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
    {
      icon: "figma",
      title: "Figma",
      level: 2,
    },
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
    {
      icon: "flutter",
      title: "Flutter",
      level: 1,
    },
    {
      icon: "nextjs",
      title: "NextJS",
    },
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

  const frontend = {
    link: { es: "/frontend", en: "/en/frontend" },
    career: t(
      {
        es: "Desarrollador Frontend Engineer",
        en: "Frontend Developer Engineer",
      },
      lang,
    ),
    web: "https://miguelkillki.com/frontend",
    profile:
      "Desarrollador Frontend con más de 5 años de experiencia en la creación de aplicaciones web y móviles, especializado en Angular, React, Next.js y React Native. He participado en proyectos para empresas como ADEX y Nettalco, desarrollando soluciones escalables, optimizando procesos y mejorando significativamente la experiencia de usuario.",
    experience: [
      {
        id: "pu2",
        startDate: "Feb 2022 — nov 2025",
        city: t({ es: "Remoto", en: "Remote" }, lang),
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
        stack: ["Angular", "PrimeNG", "ng2-charts"],
      },
      {
        image: "adex_instituto.png",
        link: "https://adex.edu.pe/",
        title: "Instituto Adex - Sistema de evaluación",
        description:
          "Implementé con Angular un sistema de dashboard de evaluación para la contratación virtual de docentes en ADEX, con login basado en roles, formularios avanzados y tablas dinámicas con filtros personalizables. Este sistema permitió que cada postulante avanzara por distintas fases de evaluación gestionadas por diferentes evaluadores, lo que agilizó el proceso de selección, garantizó mayor transparencia y facilitó la contratación docente de manera remota.",
        stack: ["Angular", "NgRx", "PrimeNG", "TypeScript", "SASS"],
      },
      {
        image: "mis_primeros_tres.png",
        link: "https://play.google.com/store/apps/details?id=pe.avanti.app.mp3&hl=es_PE",
        title: "Mis Primeros tres - Aplicación móvil",
        description:
          "Desarrollé con Ionic una app móvil para la Fundación Baltazar y Nicolás, enfocada en el monitoreo de gestantes y recién nacidos. La aplicación incluyó módulos de login y registro social, formularios interactivos y notificaciones push activadas por eventos, lo que facilitó el seguimiento médico y mejoró la comunicación entre pacientes y profesionales de salud.",
        stack: ["Ionic", "Angular", "Firebase", "SASS", "Login social"],
      },
      {
        image: "logo_sigo.png",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        title: "Sigo - Aplicación móvil",
        description:
          "Desarrollé una app móvil para la startup Sigo, orientada a la contratación de servicios y publicación de ofertas. La aplicación incluyó login social, integración con Google Maps para geolocalización y seguimiento en tiempo real, pasarela de pagos, notificaciones push y escáner de códigos QR, lo que permitió optimizar la experiencia del usuario y agilizar los procesos de contratación y pago dentro de la plataforma.",
        stack: [
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
      },
      {
        image: "nettalco.jpg",
        link: "https://www.nettalco.com.pe",
        title: "Nettalco - Aplicación web",
        description:
          "Desarrollé para Textil Nettalco una aplicación web en React que permite a los usuarios diseñar patrones de rayas para camisetas mediante un gestor visual con drag & drop. La plataforma genera archivos listos para la máquina textil industrial, además de ofrecer opciones para exportar y guardar diseños para futuras ediciones, optimizando así el flujo de trabajo y reduciendo tiempos en el proceso de diseño y producción.",
        stack: ["React", "Drag and Drop", "Canva", "Tailwind"],
      },
      {
        image: "inperu.jpg",
        link: "https://inperuexpeditions.com",
        title: "Inperu Expeditions - Tour Perú",
        description:
          "Desarrolle un ecommerce con WordPress y WooCommerce para Inperu Expeditions, una agencia de viajes especializada en tours por Perú. La plataforma incluye gestión de reservas, catálogo de tours, pasarela de pagos y optimización SEO, lo que permitió a la agencia expandir su presencia online y aumentar significativamente sus ventas a través de su sitio web.",
        stack: ["WordPress", "PHP", "WooCommerce", "SEO", "Sage"],
      },
    ],
  };

  const backend = {
    link: { es: "/backend", en: "/en/backend" },
    career: "Backend Developer Engineer",
    web: "https://miguelkillki.com/backend",
    profile:
      "Desarrollador Backend con mas de 2 años de experiencia en Node.js y Java, enfocado en el desarrollo de APIs REST, autenticación con roles y permisos, y despliegue de aplicaciones mediante Docker. Con conocimientos en SQL (MySQL), Linux, Git y trabajo bajo metodologías ágiles (Scrum). Perfil proactivo, con capacidad de aprendizaje rápido y orientación a la calidad del código.",
    experience: [
      {
        id: "pu2",
        startDate: "Feb 2022 — nov 2025",
        city: "Remoto",
        position: "Desarrollador Backend Node.js/Java",
        company: "Avanti Consultores",
        detalies: [
          "Desarrollo de API backend en Java utilizando Spring Boot y Spring Security, con autenticación basada en tokens, gestión de roles y permisos, persistencia de datos en MySQL, y despliegue mediante contenedores Docker.",
          "Desarrollo de API REST en Node.js para programadas y enviar notificaciones push, integradas con Firebase Database y Firebase Cloud Messaging (FCM).",
          "Desarrollo de una API para pasarela de pagos utilizando Node.js y TypeScript, con integración de Stripe para el procesamiento seguro de pagos",
          "Desarrollo de e-commerce headless utilizando MedusaJS como backend, con APIs REST, PostgreSQL, gestión de productos, órdenes y pagos.",
        ],
      },
    ],
    projects: [],
  };

  const fullstack = {
    link: { es: "/", en: "/en" },
    career: "Full Stack Developer Engineer",
    web: "https://miguelkillki.com",
    profile:
      "Desarrollador con más de 5 años de experiencia en la creación de aplicaciones web y móviles. Especializado en Angular, React, React Native, Nodejs y Java con experiencia en proyectos para empresas como ADEX y Nettalco. Enfocado en optimizar procesos, mejorar la experiencia de usuario y desarrollar soluciones escalables.",
    experience: [
      {
        id: "pu2",
        startDate: "Feb 2022 — nov 2025",
        city: "Remoto",
        position: "Desarrollador Fullstack",
        company: "Avanti Consultores",
        description:
          "Encargado de realizar el desarrollo fontend de plataformas web y movil usando las tecnologías Angular, Redux, Ionic,  (HTML, Typescript, JavaScript css sass...) he realizado proyectos como:",
        detalies: [
          ...getExperienceById("pu2", backend.experience),
          ...getExperienceById("pu2", frontend.experience),
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
          ...getExperienceById("pu1", backend.experience),
          ...getExperienceById("pu1", frontend.experience),
        ],
      },
    ],
    projects: [...backend.projects, ...frontend.projects],
  };

  return {
    menu: [
      {
        label: t({ es: "Sobre mí", en: "About Me" }, lang),
        path: "about",
        color: "homemenu-100",
      },
      {
        label: t({ es: "Experiencia", en: "Experience" }, lang),
        path: "experience",
        color: "homemenu-200",
      },
      {
        label: t({ es: "Proyectos", en: "Projects" }, lang),
        path: "projects",
        color: "homemenu-300",
      },
      {
        label: "Skills",
        path: "skills",
        color: "homemenu-400",
      },
    ],
    skills: skillsList,
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
      status: t(
        {
          es: "Disponible para nuevos proyectos",
          en: "Available for new projects",
        },
        lang,
      ),
      welcome: t({ es: "Hey, soy", en: "Hey, I'm" }, lang),
      education: [
        {
          startDate: t({ es: "marzo 2019", en: "March 2019" }, lang),
          city: "Lima, Perú",
          institution: t(
            {
              es: "Instituto de Educación Superior Tecnológico Privado Cibertec",
              en: "Cibertec Institute of Higher Education",
            },
            lang,
          ),
        },
      ],
      presentation: t(
        {
          es: "Me gusta crear productos simples que resuelven problemas complejos. Fuera de la programación disfruto jugar videojuegos 🎮, cuidar mi jardín 🌱 y practicar deporte 💪.",
          en: "I enjoy creating simple products that solve complex problems. Outside of programming, I like playing video games 🎮, taking care of my garden 🌱, and working out 💪.",
        },
        lang,
      ),
    },
    frontend: frontend,
    backend: backend,
    fullstack: fullstack,
  };
};
