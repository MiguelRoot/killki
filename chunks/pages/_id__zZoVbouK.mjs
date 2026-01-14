/* empty css                            */
import { createContext, useState, useRef, useEffect, useContext } from 'react';
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead, A as AstroError, g as UnknownContentCollectionError, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, k as renderHead } from '../astro_sTktP0AK.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */
import { LISTPAGESID } from './listPageId_621gtB1b.mjs';
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import Split from 'react-split';
import Editor from '@monaco-editor/react';
import { create } from 'zustand';
import { marked } from 'marked';
import { styleBase, styleMarkDown } from './defaultStyle_KEE3u2VG.mjs';
import { htmlMarkdown, javascriptMarkdown } from './mardown_PWDFaO7b.mjs';
import { useFullscreenStore } from './useFullscreen_RhtnRS_2.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import * as z from 'zod';
import ts from 'typescript';
import { useStackStore } from './useStackStore_DQfjM3vL.mjs';
import { useContentStore } from './useContentStore_932uEWnP.mjs';
import { useConfigStore } from './useConfigStore_etx_Z9ed.mjs';

const $$Astro$5 = createAstro("https://miguelkillki.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><!-- <link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin /> --><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/components/sections/BaseHead.astro", void 0);

const SITE_TITLE = "Miguel killki";
const SITE_DESCRIPTION = "Welcome to my website!";
const baseUrlHost = "http://localhost:4321";
const rootProject = new URL("..", import.meta.url).pathname;
console.log("rootProject GAA2", rootProject);
let baseUrlStatic = "";
{
  baseUrlStatic = "";
}

const $$Astro$4 = createAstro("https://miguelkillki.com");
const $$AppIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AppIcon;
  const {
    name,
    size = "24",
    class: className = ""
  } = Astro2.props;
  const loadIcon = async (width = 24, className2 = "") => {
    const iconUrl = `${baseUrlHost}/icons/${name}.svg`;
    try {
      const response = await fetch(iconUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let svgContent = await response.text();
      svgContent = svgContent.replace(/width="\d+"/, `width="${width}"`);
      svgContent = svgContent.replace(/height="\d+"/, `height="${width}"`);
      if (svgContent.includes('class="')) {
        svgContent = svgContent.replace(
          /class="([^"]*)"/,
          `class="$1 ${className2}"`
        );
      } else {
        svgContent = svgContent.replace("<svg", `<svg class="${className2}"`);
      }
      return svgContent;
    } catch (error) {
      return `
      <svg width="${width}" height="${width}" viewBox="0 0 800 800" class="${className2}" fill="none" xmlns="http://www.w3.org/2000/svg">
      </svg>
    `;
    }
  };
  const applySizeStyles = (size2) => {
    let sizeIcon;
    const sizeAsNumber = Number(size2);
    if (!isNaN(sizeAsNumber)) {
      sizeIcon = `${size2}`;
    } else {
      switch (size2) {
        case "small":
          sizeIcon = "16";
          break;
        case "large":
          sizeIcon = "48";
          break;
        default:
          sizeIcon = "24";
      }
    }
    return sizeIcon;
  };
  const setSizeStyles = applySizeStyles(size);
  const iconContent = await loadIcon(Number(setSizeStyles), className);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(iconContent)}` })}`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/components/AppIcon.astro", void 0);

const $$Astro$3 = createAstro("https://miguelkillki.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class=""> <div class=""> <div class="mx-auto text-primary-950 max-w-screen-xl py-5 md:flex justify-between items-center border-t-2 border-primary-200 mt-10 mb-2"> <div class="flex items-center"> ${renderComponent($$result, "AppIcon", $$AppIcon, { "name": "logo", "size": "38" })} <div class="ms-1 text-primary-950">Developer Miguel Angel.</div> </div> <div class="mx-2 flex items-center text-primary-950">
by
${renderComponent($$result, "AppIcon", $$AppIcon, { "name": "frog", "size": "32", "class": "text-primary-950" })} </div> </div> </div> </footer>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/components/sections/Footer.astro", void 0);

const skillsList = [
  {
    icon: "javascript",
    title: "JavaScript",
    level: 1
  },
  {
    icon: "angular",
    title: "Angular",
    level: 1
  },
  {
    icon: "ionic",
    title: "Ionic",
    level: 1
  },
  {
    icon: "tailwind",
    title: "Tailwind/Sass",
    level: 1
  },
  {
    icon: "nodejs",
    title: "NodeJS",
    level: 3
  },
  {
    icon: "reactjs",
    title: "ReactJs",
    level: 3
  },
  {
    icon: "react-native",
    title: "React Native",
    level: 3
  },
  // {
  //   icon: "mongodb",
  //   title: "MongoDB",
  //   level: 3,
  // },
  {
    icon: "figma",
    title: "Figma",
    level: 2
  },
  // {
  //   icon: "flutter",
  //   title: "Flutter",
  // },
  {
    icon: "github",
    title: "Git/Github",
    level: 1
  },
  {
    icon: "jest",
    title: "Jest",
    level: 1
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
    level: 2
  },
  {
    icon: "wordpress",
    title: "Wordpress",
    level: 2
  },
  {
    icon: "postgres",
    title: "PostgreSQL",
    level: 3
  },
  {
    icon: "laravel",
    title: "PHP/Laravel",
    level: 3
  },
  {
    icon: "java",
    title: "Java/Spring",
    level: 3
  }
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
    "NgRx"
  ],
  p6: ["PHP", "Javascript", "SASS", "Vite", "Tailwind"],
  p7: ["React", "Drag and Drop", "Canva", "Tailwind"]
};
const getExperienceById = (id, experienceList) => {
  return experienceList.find((exp) => exp.id === id)?.detalies || [];
};
const frontend = {
  es: {
    career: "Desarrollador Frontend Engineer",
    web: "https://miguelkillki.com/frontend",
    profile: "Desarrollador Frontend con más de 5 años de experiencia en la creación de aplicaciones web y móviles, especializado en Angular, React, Next.js y React Native. He participado en proyectos para empresas como ADEX y Nettalco, desarrollando soluciones escalables, optimizando procesos y mejorando significativamente la experiencia de usuario.",
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
          "Desarrollo de un e-commerce con React y Next.js, implementando SSR y SSG para optimización de SEO y performance, integrado con Medusa.js como backend headless, gestión de catálogo, carrito, checkout, pagos, autenticación y consumo de APIs REST, bajo arquitectura escalable y orientada a negocio."
        ]
      },
      {
        id: "pu1",
        startDate: "Ene 2019 — nov 2021",
        city: "Lima, Perú",
        position: "Desarrollador web front-end",
        company: "Municipalidad de S.A.",
        description: "Encargado de mantener los sistems web de la municipalidad, usando las tecnologías PHP, Java, (HTML, Typescript, JavaScript css sass...)",
        detalies: [
          "Desarrollo de un sitio web en WordPress, utilizando campos personalizados (custom fields), optimización de SEO on-page, e integración de Google Analytics, Google Search Console y Microsoft Clarity para análisis de tráfico, rendimiento y comportamiento de usuarios.",
          "Desarrollo de aplicación móvil en React Native, utilizando componentes reutilizables, manejo de estado con Redux, integración con APIs REST y funcionalidades para gestión de clientes, pedidos y pagos."
        ]
      }
    ],
    projects: [
      {
        id: "p1",
        image: "AdexDataTrade.png",
        title: "Adex Datatrade - Dashboard",
        link: "https://www.adexdatatrade.com/",
        description: "Desarrollé con Angular una plataforma de estadísticas de importaciones para la empresa ADEX, consumiendo datos desde un API para mostrar gráficos comparativos y tablas con filtros avanzados. La solución permitió a los usuarios realizar análisis detallados y personalizados en tiempo real, lo que mejoró la toma de decisiones estratégicas y optimizó la gestión de información comercial.",
        stack: projectsStack["p1"]
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
        description: "Desarrollé con Ionic una app móvil para la Fundación Baltazar y Nicolás, enfocada en el monitoreo de gestantes y recién nacidos. La aplicación incluyó módulos de login y registro social, formularios interactivos y notificaciones push activadas por eventos, lo que facilitó el seguimiento médico y mejoró la comunicación entre pacientes y profesionales de salud.",
        stack: projectsStack["p4"]
      },
      {
        image: "logo_sigo.png",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        title: "Sigo - Aplicación móvil",
        description: "Desarrollé una app móvil para la startup Sigo, orientada a la contratación de servicios y publicación de ofertas. La aplicación incluyó login social, integración con Google Maps para geolocalización y seguimiento en tiempo real, pasarela de pagos, notificaciones push y escáner de códigos QR, lo que permitió optimizar la experiencia del usuario y agilizar los procesos de contratación y pago dentro de la plataforma.",
        stack: projectsStack["p5"]
      },
      {
        image: "nettalco.jpg",
        link: "https://www.nettalco.com.pe",
        title: "Nettalco - Aplicación web",
        description: "Desarrollé para Textil Nettalco una aplicación web en React que permite a los usuarios diseñar patrones de rayas para camisetas mediante un gestor visual con drag & drop. La plataforma genera archivos listos para la máquina textil industrial, además de ofrecer opciones para exportar y guardar diseños para futuras ediciones, optimizando así el flujo de trabajo y reduciendo tiempos en el proceso de diseño y producción.",
        stack: projectsStack["p7"]
      }
      // {
      //   image: "lazo_de_ayuda.png",
      //   link: "https://fundacionlazosdeayuda.org/",
      //   title: "Fundación Lazo de Ayuda - Tema WordPress",
      //   description:
      //     "Sitio web dinámico en WordPress, implementando campos personalizados para adaptarlo a las necesidades específicas del cliente.",
      //   stack: projectsStack["p6"],
      // },
    ]
  },
  en: {}
};
const backend = {
  es: {
    career: "Backend Developer Engineer",
    web: "https://miguelkillki.com/backend",
    profile: "Desarrollador Backend con experiencia en Node.js y Java, enfocado en el desarrollo de APIs REST, autenticación con roles y permisos, y despliegue de aplicaciones mediante Docker. Con conocimientos en SQL (MySQL), Linux, Git y trabajo bajo metodologías ágiles (Scrum). Perfil proactivo, con capacidad de aprendizaje rápido y orientación a la calidad del código.",
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
        ]
      }
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
    ]
  },
  en: {
    career: "Backend Developer Engineer",
    web: "https://miguelkillki.com/backend",
    profile: "Desarrollador Backend con experiencia en Node.js y Java, enfocado en el desarrollo de APIs REST, autenticación con roles y permisos, y despliegue de aplicaciones mediante Docker. Con conocimientos en SQL (MySQL), Linux, Git y trabajo bajo metodologías ágiles (Scrum). Perfil proactivo, con capacidad de aprendizaje rápido y orientación a la calidad del código.",
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
        ]
      }
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
    ]
  }
};
const fullstack = {
  es: {
    career: "Full Stack Developer Engineer",
    web: "https://miguelkillki.com",
    profile: "Desarrollador Frontend con más de 5 años de experiencia en la creación de aplicaciones web y móviles. Especializado en Angular, React y React Native, con experiencia en proyectos para empresas como ADEX, Avanti Consultoría y Nettalco. Enfocado en optimizar procesos, mejorar la experiencia de usuario y desarrollar soluciones escalables.",
    experience: [
      {
        id: "pu2",
        startDate: "Feb 2022 — nov 2024",
        city: "Remoto",
        position: "Desarrollador Fullstack",
        company: "Avanti Consultores",
        description: "Encargado de realizar el desarrollo fontend de plataformas web y movil usando las tecnologías Angular, Redux, Ionic,  (HTML, Typescript, JavaScript css sass...) he realizado proyectos como:",
        detalies: [
          ...getExperienceById("pu2", backend.es.experience),
          ...getExperienceById("pu2", frontend.es.experience)
        ]
      },
      {
        id: "pu1",
        startDate: "Ene 2019 — nov 2021",
        city: "Lima, Perú",
        position: "Desarrollador web front-end",
        company: "Municialidad de S.A.",
        description: "Encargado de mantener los sistems web de la municipalidad, usando las tecnologías PHP, Java, (HTML, Typescript, JavaScript css sass...)",
        detalies: [
          ...getExperienceById("pu1", backend.es.experience),
          ...getExperienceById("pu1", frontend.es.experience)
        ]
      }
    ],
    projects: [
      ...backend.es.projects,
      ...frontend.es.projects
    ]
  },
  en: {}
};
const profession = {
  menu: {
    es: [
      { label: "Sobre mí", path: "about", color: "homemenu-100" },
      { label: "Experiencia", path: "experience", color: "homemenu-200" },
      { label: "Proyectos", path: "projects", color: "homemenu-300" },
      { label: "Skills", path: "skills", color: "homemenu-400" }
    ],
    en: [
      { label: "About me", path: "about", color: "homemenu-100" },
      { label: "Experience", path: "experience", color: "homemenu-200" },
      { label: "Projects", path: "projects", color: "homemenu-300" },
      { label: "Skills", path: "skills", color: "homemenu-400" }
    ]
  },
  skillsList: [
    {
      icon: "javascript",
      title: "JavaScript",
      level: 1
    },
    {
      icon: "angular",
      title: "Angular",
      level: 1
    },
    {
      icon: "ionic",
      title: "Ionic",
      level: 1
    },
    {
      icon: "tailwind",
      title: "Tailwind/Sass",
      level: 1
    },
    {
      icon: "nodejs",
      title: "NodeJS",
      level: 3
    },
    {
      icon: "reactjs",
      title: "ReactJs",
      level: 3
    },
    {
      icon: "react-native",
      title: "React Native",
      level: 3
    },
    // {
    //   icon: "mongodb",
    //   title: "MongoDB",
    //   level: 3,
    // },
    {
      icon: "figma",
      title: "Figma",
      level: 2
    },
    // {
    //   icon: "flutter",
    //   title: "Flutter",
    // },
    {
      icon: "github",
      title: "Git/Github",
      level: 1
    },
    {
      icon: "jest",
      title: "Jest",
      level: 1
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
      level: 2
    },
    {
      icon: "wordpress",
      title: "Wordpress",
      level: 2
    },
    {
      icon: "postgres",
      title: "PostgreSQL",
      level: 3
    },
    {
      icon: "laravel",
      title: "PHP/Laravel",
      level: 3
    },
    {
      icon: "java",
      title: "Java/Spring",
      level: 3
    }
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
    email: "miguelkillki@gmail.com"
  },
  global: {
    es: {
      status: "No disponible",
      welcome: "Hey, soy",
      education: [
        {
          startDate: "marzo 2019",
          city: "Lima, Perú",
          institution: "Instituto de Educación Superior Tecnológico Privado Cibertec"
        }
      ],
      presentation: "Me gusta crear productos simples que resuelven problemas complejos. Fuera de la programación disfruto jugar videojuegos 🎮, cuidar mi jardín 🌱 y practicar deporte 💪."
    },
    en: {
      status: "Not available",
      welcome: "Hey, I'm",
      education: [
        {
          startDate: "March 2019",
          city: "Lima, Perú",
          institution: "Cibertec Private Technological Higher Education Institute"
        }
      ],
      presentation: "I enjoy creating simple products that solve complex problems. Outside the programming world, I like to play video games 👨‍💻, do gardening 🌱 and practice sports 💪."
    }
  },
  frontend,
  backend,
  fullstack
};
const translations = {
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
    presentation: "Me gusta crear productos simples que resuelven problemas complejos. Fuera de la programación disfruto jugar videojuegos 🎮, cuidar mi jardín 🌱 y practicar deporte 💪.",
    profile: "Desarrollador Frontend con más de 5 años de experiencia en la creación de aplicaciones web y móviles. Especializado en Angular, React y React Native, con experiencia en proyectos para empresas como ADEX, Avanti Consultoría y Nettalco. Enfocado en optimizar procesos, mejorar la experiencia de usuario y desarrollar soluciones escalables.",
    detalies: [
      "🔴 Angular: Dashboards, formularios complejos, tablas dinámicas y gráficos. Uso de Angular Material, PrimeNG, Formly y Algolia. Integración con APIs REST, pasarelas de pago (PayPal, Stripe), gestión de estado con NgRx y pruebas con Jest.",
      "⚛️ React: Desarrollo de dashboards, formularios y tablas con PrimeReact. Integración de APIs REST, gestión de estado con (Redux, Zustand) y pruebas con Jest/React Testing.",
      "📱 Ionic & React Native: Creación de apps móviles con login social, formularios interactivos, notificaciones push, GPS tracking, lector QR, cámara, Google Maps y pasarelas de pago.",
      "🌐 WordPress: Desarrollo de sitios personalizados con Sage y Tailwind. Implementación de Custom Post Types, WooCommerce y soporte multilenguaje.",
      "☕ Java & Spring Boot: Implementación de login e integración de APIs REST conectadas a MySQL, construyendo servicios escalables y mantenibles.",
      "🤝 Buenas prácticas: uso de control de versiones (Git), metodologías ágiles Scrumy despliegue en la nube (Firebase, Vercel, Docker)."
    ],
    education: [
      {
        startDate: "marzo 2019",
        city: "Lima, Perú",
        career: "Ingeniería de Informática",
        institution: "Instituto de Educación Superior Tecnológico Privado Cibertec"
      }
    ],
    experience: [
      {
        startDate: "Feb 2022 — nov 2024",
        city: "Remoto",
        position: "Desarrollador frontend Angular/React",
        company: "Avanti Consultores",
        description: "Encargado de realizar el desarrollo fontend de plataformas web y movil usando las tecnologías Angular, Redux, Ionic,  (HTML, Typescript, JavaScript css sass...) he realizado proyectos como:",
        detalies: [
          "Desarrollé con Angular una plataforma interactiva de estadísticas de importaciones, que permitió a los usuarios realizar análisis detallados y personalizados en tiempo real mediante filtros y comparaciones dinámicas, mejorando la toma de decisiones estratégicas.",
          "Implementé con Angular un sistema de evaluación y contratación virtual de docentes, donde cada postulante avanzaba por distintas fases revisadas por evaluadores con roles específicos. Esta solución agilizó el proceso de selección, garantizó mayor transparencia y facilitó la contratación remota de docentes.",
          "Creé una app móvil en Ionic para el monitoreo de gestantes y recién nacidos, que permitió a los usuarios registrarse fácilmente, completar formularios interactivos y recibir notificaciones en tiempo real sobre eventos importantes, mejorando el seguimiento médico y facilitando la comunicación entre pacientes y profesionales de salud.",
          "Desarrollé una app móvil con Ionic para la contratación de servicios y gestión de ofertas, que permitió a los usuarios registrarse fácilmente, localizar servicios cercanos en un mapa, realizar pagos seguros y recibir notificaciones en tiempo real, validación por QR, mejorando la experiencia de contratación y aumentando la eficiencia del proceso.",
          "Desarrollé una aplicación web en Angular para el diseño de patrones textiles de camisetas rayadas, que permitía a los usuarios crear de forma visual los diseños de líneas mediante drag & drop y generar archivos con las medidas exactas requeridas por la máquina industrial de teñido. Además, incluía la opción de guardar y exportar diseños editables, lo que facilitó la producción de telas personalizadas y redujo tiempos en la preparación de nuevos modelos.",
          "Desarrollé con React Native una aplicación móvil para la gestión de clientes y pedidos, donde los trabajadores podían registrar clientes, gestionar sus pedidos de productos avícolas y facilitar el proceso de pago, optimizando la administración de ventas y mejorando la experiencia del cliente."
        ]
      },
      {
        startDate: "Ene 2019 — nov 2021",
        city: "Lima, Perú",
        position: "Desarrollador web front-end",
        company: "Municialidad de S.A.",
        description: "Encargado de mantener los sistems web de la municipalidad, usando las tecnologías PHP, Java, (HTML, Typescript, JavaScript css sass...)",
        detalies: [
          "Desarrollé un sitio web dinámico en WordPress, implementando campos personalizados adaptados a las necesidades del cliente, lo que permitió una gestión de contenidos más flexible y una mejor personalización de la experiencia del usuario.",
          "Creé con Flutter una aplicación móvil para el envío de reportes, que permitía capturar y enviar información en texto, fotos y audio, facilitando la comunicación en tiempo real."
        ]
      }
    ],
    projects: [
      {
        id: "p1",
        image: "AdexDataTrade.png",
        title: "Adex Datatrade - Dashboard",
        link: "https://www.adexdatatrade.com/",
        description: "Desarrollé con Angular una plataforma de estadísticas de importaciones para la empresa ADEX, consumiendo datos desde un API para mostrar gráficos comparativos y tablas con filtros avanzados. La solución permitió a los usuarios realizar análisis detallados y personalizados en tiempo real, lo que mejoró la toma de decisiones estratégicas y optimizó la gestión de información comercial.",
        stack: projectsStack["p1"]
      },
      {
        image: "adex_instituto.png",
        link: "https://adex.edu.pe/",
        title: "Instituto Adex - Sistema de evaluación",
        description: "Implementé con Angular un sistema de dashboard de evaluación para la contratación virtual de docentes en ADEX, con login basado en roles, formularios avanzados y tablas dinámicas con filtros personalizables. Este sistema permitió que cada postulante avanzara por distintas fases de evaluación gestionadas por diferentes evaluadores, lo que agilizó el proceso de selección, garantizó mayor transparencia y facilitó la contratación docente de manera remota.",
        stack: projectsStack["p2"]
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
        description: "Desarrollé con Ionic una app móvil para la Fundación Baltazar y Nicolás, enfocada en el monitoreo de gestantes y recién nacidos. La aplicación incluyó módulos de login y registro social, formularios interactivos y notificaciones push activadas por eventos, lo que facilitó el seguimiento médico y mejoró la comunicación entre pacientes y profesionales de salud.",
        stack: projectsStack["p4"]
      },
      {
        image: "logo_sigo.png",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        title: "Sigo - Aplicación móvil",
        description: "Desarrollé una app móvil para la startup Sigo, orientada a la contratación de servicios y publicación de ofertas. La aplicación incluyó login social, integración con Google Maps para geolocalización y seguimiento en tiempo real, pasarela de pagos, notificaciones push y escáner de códigos QR, lo que permitió optimizar la experiencia del usuario y agilizar los procesos de contratación y pago dentro de la plataforma.",
        stack: projectsStack["p5"]
      },
      {
        image: "nettalco.jpg",
        link: "https://www.nettalco.com.pe",
        title: "Nettalco - Aplicación web",
        description: "Desarrollé para Textil Nettalco una aplicación web en Angular que permite a los usuarios diseñar patrones de rayas para camisetas mediante un gestor visual con drag & drop. La plataforma genera archivos listos para la máquina textil industrial, además de ofrecer opciones para exportar y guardar diseños para futuras ediciones, optimizando así el flujo de trabajo y reduciendo tiempos en el proceso de diseño y producción.",
        stack: projectsStack["p7"]
      }
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
      { label: "Skills", path: "skills", color: "homemenu-400" }
    ]
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
    presentation: "I enjoy creating simple products that solve complex problems. Outside the programming world, I like to play video games 👨‍💻, do gardening 🌱 and practice sports 💪.",
    profile: "👨‍💻 With over 4 years of experience in software development, working as a Frontend developer, I have worked throughout my career with various technologies, creating web and mobile solutions that combine scalability and a good user experience.",
    detalies: [
      "🔴 Angular: Dashboards, complex forms, dynamic tables, and charts. Use of Angular Material, PrimeNG, Formly, and Algolia. Integration with REST APIs, payment gateways (PayPal, Stripe), state management with NgRx, and testing with Jest.",
      "⚛️ React: Development of dashboards, forms, and tables with PrimeReact. Integration of REST APIs, state management with (Redux, Zustand), and testing with Jest/React Testing.",
      "📱 Ionic (Angular): Creation of mobile apps with social login, interactive forms, push notifications, GPS tracking, QR reader, camera, Google Maps, and payment gateways.",
      "🌐 WordPress: Development of custom sites with Sage and Tailwind. Implementation of Custom Post Types, WooCommerce, and multi-language support.",
      "🛠️ Best practices: use of version control (Git), Agile Scrum methodologies, and cloud deployment (Firebase, Vercel, Docker)."
    ],
    education: [
      {
        startDate: "March 2019",
        city: "Lima, Perú",
        career: "Computer Engineering",
        institution: "Instituto de Educación Superior Tecnológico Privado Cibertec"
      }
    ],
    experience: [
      {
        startDate: "2022 — Jan 2024",
        city: "Remote",
        position: "Frontend web & mobile developer",
        company: "Avanti Consultores",
        description: "Responsible for developing the frontend of web and mobile platforms using technologies such as Angular, Redux, Ionic, (HTML, Typescript, JavaScript, CSS, Sass...). I have carried out projects such as:",
        detalies: [
          "I developed an import statistics platform with advanced filter tables and comparative charts, enabling detailed and personalized analysis.",
          "I implemented an evaluation dashboard system for hiring teachers virtually, incorporating role-based login, advanced forms, and dynamic tables with customizable filters.",
          "I integrated a payment gateway with multiple subscription plans, automating the service purchase process.",
          "I created a mobile app in Ionic for monitoring pregnant women and newborns, featuring modules for social login and registration, interactive forms, and event-based push notifications.",
          "I developed a mobile app for service and offer hiring, including social login, Google Maps integration for tracking, a payment gateway, push notifications, and a QR code scanner.",
          "Web application in Angular to design stripe patterns with drag & drop, generate files for textile machine and save/export editable designs.",
          "I built a dynamic WordPress website, implementing custom fields to meet the client's specific needs."
        ]
      },
      {
        startDate: "Jan 2019 — Nov 2021",
        city: "Lima, Perú",
        position: "Frontend web developer",
        company: "Municialidad de S.A.",
        description: "Responsible for maintaining the municipal web systems, using technologies such as PHP, Java, (HTML, Typescript, JavaScript, CSS, Sass...)",
        detalies: [
          "I developed an institutional website in WordPress with custom fields tailored to specific requirements.",
          "I created a Flutter application for submitting reports with text, photos, and audio, streamlining the capture and transmission of information."
        ]
      }
    ],
    projects: [
      {
        image: "AdexDataTrade.png",
        title: "Adex Datatrade Dashboard",
        link: "https://www.adexdatatrade.com/",
        description: "Import statistics platform with advanced filter tables and comparative charts, optimized for detailed analysis tailored to user needs.",
        stack: projectsStack["p1"]
      },
      {
        image: "adex_instituto.png",
        title: "Institute Adex evaluation system",
        link: "https://adex.edu.pe/",
        description: "Evaluation dashboard system for virtual teacher hiring, with role-based login, advanced forms, and dynamic tables with customizable filters.",
        stack: projectsStack["p2"]
      },
      {
        image: "AdexDataTrade.png",
        title: "Payment gateway, Adex Datatrade",
        link: "https://www.adexdatatrade.com/PaymentRegistro.aspx?plan=2",
        description: "Payment gateway with multiple subscription plans, optimizing and automating the service contract process.",
        stack: projectsStack["p3"]
      },
      {
        image: "mis_primeros_tres.png",
        title: "Pregnancy monitoring (Mobile application)",
        link: "https://play.google.com/store/apps/details?id=pe.avanti.app.mp3&hl=es_PE",
        description: "A mobile app in Ionic for monitoring pregnant women and newborns, featuring social login and registration modules, interactive forms, and event-triggered push notifications.",
        stack: projectsStack["p4"]
      },
      {
        image: "logo_sigo.png",
        title: "Sigo (Mobile application)",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        description: "A mobile app for hiring services and offers, featuring social login, Google Maps integration for tracking, a payment gateway, push notifications, and a QR code scanner.",
        stack: projectsStack["p5"]
      },
      {
        image: "nettalco.jpg",
        title: "Nettalco (Web application)",
        link: "https://www.nettalco.com.pe",
        description: "A web application with Angular that allows designers to create stripe patterns for t-shirts using a visual drag & drop editor, generating files for the textile machine and enabling designs to be exported and saved for future edits."
      }
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
      { label: "Skills", path: "skills" }
    ]
  }
};

const { es, en } = translations;
const LANG = {
  es: {
    link: "/",
    text: "es"
  },
  en: {
    link: "en",
    text: "en"
  }
};
const i18n = (lang) => {
  const t = lang === "es" ? es : en;
  return t;
};
const i18nDetail = (page, lang) => {
  const dataPage = {
    profile: profession[page]?.[lang],
    detail: profession["detail"],
    menu: profession["menu"]?.[lang],
    skillsList: profession["skillsList"],
    global: profession["global"][lang]
  };
  return dataPage;
};

const $$Astro$2 = createAstro("https://miguelkillki.com");
const $$MenuFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MenuFooter;
  const { currentLocale } = Astro2;
  const texts = i18n(currentLocale);
  return renderTemplate`${maybeRenderHead()}<div class="mt-14 columns-2 md:grid md:grid-cols-3"> <div class="break-inside-avoid"> <h4 class="font-bold font-raleway mb-2 text-secondary-0">Secciones</h4> <ul class="[&>*]:mb-1"> <li> <a class="text-primary-950 hover:text-secondary-0" href="/">${currentLocale === "en" ? "Home" : "Inicio"}</a> </li> ${texts.menu.map((item) => renderTemplate`<li> <a class="text-primary-950 hover:text-secondary-0"${addAttribute(`${currentLocale === "en" ? "/en" : ""}/#${item.path}`, "href")}> ${item.label} </a> </li>`)} </ul> </div> <div class="break-inside-avoid"> <h4 class="font-bold mb-2 text-secondary-0">Cheatsheet</h4> <ul class="[&>*]:mb-1"> ${LISTPAGESID.map((item) => renderTemplate`<li> <a class="text-primary-950 hover:text-secondary-0"${addAttribute("/sheet/" + item.pageId, "href")}> ${item.title} </a> </li>`)} </ul> </div> <div class="break-inside-avoid"> <h4 class="font-bold mb-2 text-secondary-0">Utilities</h4> <ul> <li> <a class="text-primary-950 hover:text-secondary-0 blank" target="_blank" href="https://github.com/MiguelRoot/angular-sidebar-admin">
Angular Sidebar Admin
</a> </li> </ul> </div> </div>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/components/sections/MenuFooter.astro", void 0);

const $$Astro$1 = createAstro("https://miguelkillki.com");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead()}<div> <!-- <div class="text-primary-400 mb-2 font-raleway font-semibold">
    Redes sociale:
  </div> --> <div class="flex pb-3 [&>*]:me-3 mt-4 md:pb-6 lg:mt-0"> <a href="https://www.linkedin.com/in/miguelkillki/" class="custom-bg-button relative inline-flex items-center justify-center p-0.5 bg-primary-100 mb-1 overflow-hidden text-sm font-medium text-primary-800 hover:text-secondary-700 rounded-full group hover:bg-gradient-to-br from-secondary-600 to-primary-600" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-primary-50 rounded-full"> ${renderComponent($$result, "AppIcon", $$AppIcon, { "name": "linkedin" })} </span> </a> <a href="https://github.com/MiguelRoot" class="custom-bg-button relative inline-flex items-center justify-center p-0.5 bg-primary-100 mb-1 overflow-hidden text-sm font-medium text-primary-800 hover:text-secondary-700 rounded-full group hover:bg-gradient-to-br from-secondary-600 to-primary-600" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-primary-50 rounded-full"> ${renderComponent($$result, "AppIcon", $$AppIcon, { "name": "github" })} </span> </a> <a href="https://twitter.com/MiguelKillki" class="custom-bg-button relative inline-flex items-center justify-center p-0.5 bg-primary-100 mb-1 overflow-hidden text-sm font-medium text-primary-800 hover:text-secondary-700 rounded-full group hover:bg-gradient-to-br from-secondary-600 to-primary-600" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-primary-50 rounded-full"> ${renderComponent($$result, "AppIcon", $$AppIcon, { "name": "twitter" })} </span> </a> <!-- <a
      href="https://www.instagram.com/miguelkillki/"
      class="custom-bg-button relative inline-flex items-center justify-center p-0.5 bg-primary-100 mb-1 overflow-hidden text-sm font-medium hover:text-primary-0 rounded-full group hover:bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0"
      target="_blank"
    >
      <span
        class="relative p-3.5 transition-all ease-in duration-75 bg-primary-50 dark:bg-gray-900 rounded-full"
      >
        <AppIcon name="instagram" />
      </span>
    </a> --> </div> </div>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/components/sections/Social.astro", void 0);

function defineCollection(config) {
  if (!config.type)
    config.type = "content";
  return config;
}
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://miguelkillki.com", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('../first-post_rynfQRw9.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide__079PGTk.mjs'),"/src/content/blog/second-post.md": () => import('../second-post_Fgg3EQl5.mjs'),"/src/content/blog/third-post.md": () => import('../third-post_vcA0cv2m.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_29_9y1Rl.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"first-post":"/src/content/blog/first-post.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md","second-post":"/src/content/blog/second-post.md","using-mdx":"/src/content/blog/using-mdx.mdx","third-post":"/src/content/blog/third-post.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('../first-post_J97B3xbX.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide_szQ_MSiq.mjs'),"/src/content/blog/second-post.md": () => import('../second-post_lH1IdRrS.mjs'),"/src/content/blog/third-post.md": () => import('../third-post_QTZezskR.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_FqOLdTrv.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

function googleSheetData(jsonData, filaInicial, columnas) {
  const cols = jsonData.table.cols;
  const rows = jsonData.table.rows;
  const indicesColumnas = columnas.map((col) => {
    const columnaIndex = cols.findIndex((c) => c.id === col);
    return columnaIndex !== -1 ? columnaIndex : null;
  });
  const resultados = rows.slice(filaInicial).map((fila) => {
    return indicesColumnas.map((indice) => {
      if (indice !== null && fila.c[indice]) {
        return fila.c[indice]?.v || null;
      }
      return null;
    });
  });
  return resultados;
}
function getUrlSheets(id, gid) {
  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:json&tq&gid=${gid}`;
}
async function fetchDataByUrl(url) {
  return fetch(url).then((res) => res.text()).then(
    (json) => JSON.parse(json.substring(json.indexOf("{"), json.lastIndexOf("}") + 1))
  );
}
function aggregateData(dataSheet, header, title, itemFields) {
  if (!Array.isArray(dataSheet))
    return [];
  const groupedResult = [];
  let currentGroup = null;
  for (const row of dataSheet) {
    if (!row || row.length === 0) {
      continue;
    }
    if (row[0] === header.header) {
      if (currentGroup) {
        groupedResult.push(currentGroup);
      }
      currentGroup = {
        header: row[1] || "",
        // Asegurarse de que no sea undefined
        items: []
      };
    } else if (currentGroup) {
      const item = {};
      for (let i = 0; i < itemFields.length; i++) {
        if (i === 0) {
          const titleRow = row[i + 1] || null;
          const typeRow = row[i] || null;
          item[title] = { title: titleRow, type: typeRow };
        }
        item[itemFields[i]] = row[i + 2] || null;
      }
      currentGroup.items.push(item);
    }
  }
  if (currentGroup) {
    groupedResult.push(currentGroup);
  }
  return groupedResult;
}

const useTabStore = create((set) => {
  return {
    activeTab: "tab1",
    setActiveTab: (tabValue) => set({ activeTab: tabValue })
  };
});

const TabContent = ({ value, children }) => {
  const { activeTab, setActiveTab } = useTabStore();
  return /* @__PURE__ */ jsx("div", { style: { display: value === activeTab ? "block" : "none" }, children });
};

const TabHeader = ({ value, children }) => {
  const { activeTab, setActiveTab } = useTabStore();
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick: () => setActiveTab(value),
      className: `flex items-center justify-center py-[8px] text-sm px-4 rounded-[4px] text-secondary-300 min-w-[70px] font-semibold cursor-pointer ${value === activeTab ? " !text-secondary-0 " : ""}`,
      children
    }
  );
};

const DropdownContext = createContext(
  void 0
);
const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /* @__PURE__ */ jsx(DropdownContext.Provider, { value: { isOpen, toggleDropdown, closeDropdown }, children: /* @__PURE__ */ jsx("div", { className: "dropdown", ref: dropdownRef, children }) });
};
Dropdown.Toggle = ({ children, className }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown.Toggle must be used within a Dropdown");
  }
  const { isOpen, toggleDropdown } = context;
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleDropdown,
      className: `transform-gpu dropdown-toggle ${isOpen ? className : ""}`,
      children
    }
  );
};
Dropdown.Menu = ({ children, align = "left", className = "" }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown.Menu must be used within a Dropdown");
  }
  const { isOpen } = context;
  const alignmentClass = align === "right" ? "dropdown-menu-right" : "dropdown-menu-left";
  return isOpen ? /* @__PURE__ */ jsx("div", { className: `dropdown-menu ${alignmentClass} ${className}`, children }) : null;
};
Dropdown.Item = ({ children, onClick }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown.Item must be used within a Dropdown");
  }
  const { closeDropdown } = context;
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    closeDropdown();
  };
  return /* @__PURE__ */ jsx("div", { className: "dropdown-item", onClick: handleClick, children });
};

const ReactIcon = ({ name, size = "24" }) => {
  const iconRef = useRef(null);
  useEffect(() => {
    const loadIcon = async () => {
      const iconUrl = `${baseUrlStatic}/icons/${name}.svg`;
      try {
        const response = await fetch(iconUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const svgContent = await response.text();
        setSvgContent(svgContent);
      } catch (error) {
        setSvgContent(`
          <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Default SVG content here -->
          </svg>
        `);
      }
    };
    const setSvgContent = (svgContent) => {
      if (iconRef.current) {
        iconRef.current.innerHTML = svgContent;
        const svgElement = iconRef.current.querySelector("svg");
        if (svgElement) {
          applyContainerStyles(svgElement);
          applySizeStyles(svgElement);
        }
      }
    };
    const applyContainerStyles = (svgElement) => {
      svgElement.style.width = "100%";
      svgElement.style.height = "100%";
    };
    const applySizeStyles = (svgElement) => {
      let width, height;
      const sizeAsNumber = Number(size);
      if (!isNaN(sizeAsNumber)) {
        width = `${size}px`;
        height = `${size}px`;
      } else {
        switch (size) {
          case "small":
            width = "16px";
            height = "16px";
            break;
          case "large":
            width = "48px";
            height = "48px";
            break;
          default:
            width = height = "24px";
        }
      }
      svgElement.style.width = width;
      svgElement.style.height = height;
    };
    loadIcon();
  }, [name, size]);
  return /* @__PURE__ */ jsx("div", { ref: iconRef });
};

defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional()
  })
});
const MONACO_BASE_PATH = "/static/monaco/vs" ;

function previewFactory(indexStack, contents) {
  if (indexStack === "angular") {
    let tsCode = contents.javascript?.content || "";
    let codeContent = `
      const { NgModule } = ng.core;
      const { CommonModule } = ng.common;
      const { BrowserModule } = ng.platformBrowser;

      
      @Component({
        selector: 'app-root',
        template: \`${contents.html?.content}\`
      })
      class AppComponent {}

      @NgModule({
      imports: [
        BrowserModule,
        CommonModule,
      ],
        declarations: [AppComponent, ...DECLARATIONS],
        bootstrap: [AppComponent],
        providers: []
      })

      class AppModule {}
      const { platformBrowserDynamic } = ng.platformBrowserDynamic;
      platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  `;
    let joinCode = tsCode + codeContent;
    const angularUMDMap = {
      "@angular/core": "ng.core",
      "@angular/common": "ng.common",
      "@angular/platform-browser": "ng.platformBrowser",
      "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
      "@angular/compiler": "ng.compiler",
      "@angular/forms": "ng.forms"
    };
    for (const [angularModule, umdReference] of Object.entries(angularUMDMap)) {
      const regex = new RegExp(
        `import\\s*{([^}]*)}\\s*from\\s*['"]${angularModule}['"];?`,
        "g"
      );
      joinCode = joinCode.replace(regex, (_, imports) => {
        const formattedImports = imports.split(",").map((item) => item.trim()).join(", ");
        return `const { ${formattedImports} } = ${umdReference};`;
      });
    }
    const jsCode = ts.transpileModule(joinCode, {
      compilerOptions: { module: ts.ModuleKind.CommonJS }
    }).outputText;
    return (
      /*html*/
      `
        <html>
          <style>${contents.css?.content}</style>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/typescript/4.9.5/typescript.min.js"><\/script>

            <!-- Angular and Dependencies -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.0/zone.min.js"><\/script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js"><\/script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.5/core.min.js"><\/script>

            <!-- Angular UMD Modules -->
            <script src="https://unpkg.com/@angular/core@12.2.17/bundles/core.umd.js"><\/script>
            <script src="https://unpkg.com/@angular/common@12.2.17/bundles/common.umd.js"><\/script>
            <script src="https://unpkg.com/@angular/compiler@12.2.17/bundles/compiler.umd.js"><\/script>
            <script src="https://unpkg.com/@angular/platform-browser@12.2.17/bundles/platform-browser.umd.js"><\/script>
            <script src="https://unpkg.com/@angular/platform-browser-dynamic@12.2.17/bundles/platform-browser-dynamic.umd.js"><\/script>

          </head>
            <body>
              <app-root></app-root>
              <script>
                ${jsCode}
              <\/script>
            </body>
        </html>
      `
    );
  } else if (indexStack === "react") {
    return (
      /*html*/
      `
        <html>
        <!-- CDN para React y ReactDOM -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"><\/script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"><\/script>
        <!-- CDN para TypeScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typescript/4.9.5/typescript.min.js"><\/script>
          <style>${contents.css?.content}</style>
          <body>${contents.html?.content}</body>
          <script>${contents.javascript?.content}<\/script>
            <!-- Configuración de TypeScript -->
            <script data-tsconfig>
              {
                "compilerOptions": {
                  "jsx": "react-jsx",
                  "target": "es5"
                }
              }
            <\/script>
        </html>

      `
    );
  } else if (indexStack === "vanillaJs") {
    return (
      /*html*/
      `
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #121212;
              color: white;
              margin: 0;
              padding: 20px;
            }
            #console-output {
              background: #1e1e1e;
              border: 1px solid #333;
              border-radius: 4px;
              padding: 10px;
              height: 300px;
              overflow-y: auto;
              font-family: monospace;
              white-space: pre-wrap;
            }
            .log { color: #90ee90; } /* Verde */
            .warn { color: #ffa500; } /* Naranja */
            .error { color: #ff6f6f; } /* Rojo */
            .info { color: #87ceeb; } /* Azul claro */
          </style>
        </head>
          <body><div id="console-output"></div></body>
          <script>
            const consoleOutput = document.getElementById("console-output");

            // Función para agregar mensajes al DOM
            function addMessage(type, message) {
              const msgDiv = document.createElement("div");
              msgDiv.className = type;

              // Si el mensaje es un objeto, formatearlo como JSON
              if (typeof message === "object") {
                msgDiv.textContent = "[" + type.toUpperCase() + "] " + JSON.stringify(message, null, 2);
              } else {
                msgDiv.textContent = "[" + type.toUpperCase() + "] " + message;
              }

              consoleOutput.appendChild(msgDiv);
              consoleOutput.scrollTop = consoleOutput.scrollHeight; // Scroll automático
            }

            // Sobrescribir métodos de la consola
            const originalConsole = {
              log: console.log,
              warn: console.warn,
              error: console.error,
              info: console.info
            };

            console.log = function (...args) {
              originalConsole.log.apply(console, args);
              args.forEach(arg => addMessage("log", arg));
            };

            console.warn = function (...args) {
              originalConsole.warn.apply(console, args);
              args.forEach(arg => addMessage("warn", arg));
            };

            console.error = function (...args) {
              originalConsole.error.apply(console, args);
              args.forEach(arg => addMessage("error", arg));
            };

            console.info = function (...args) {
              originalConsole.info.apply(console, args);
              args.forEach(arg => addMessage("info", arg));
            };

            // Capturar errores no manejados en JavaScript
            window.addEventListener("error", function (event) {
              addMessage("error", "Error no manejado: " + event.message + " en " + event.filename + ":" + event.lineno + ":" + event.colno);
            });

            // Capturar Promesas rechazadas no manejadas
            window.addEventListener("unhandledrejection", function (event) {
              addMessage("error", "Promesa no manejada: " + event.reason);
            });
          <\/script>
          <script type="module">${contents.javascript?.content}<\/script>
        </html>
      `
    );
  } else if (indexStack === "vanillaTs") {
    return (
      /*html*/
      `
        <html>
          <body></body>
          <script>${contents.javascript?.content}<\/script>
        </html>
      `
    );
  } else if (indexStack === "static") {
    return (
      /*html*/
      `
        <html>
          <style>${contents.css?.content}</style>
          <body>${contents.html?.content}</body>
          <script>${contents.javascript?.content}<\/script>
        </html>
      `
    );
  } else {
    const mardownhtml = contents.html?.content || "";
    const htmlContent = marked(mardownhtml);
    marked.setOptions({
      gfm: true,
      breaks: true
    });
    return (
      /*html*/
      `
        <html lang="es" onload="resizeIframe()">
          <style>${styleBase} ${styleMarkDown}</style>
          <body>
            ${htmlMarkdown}
            <div id="markdown-content">
              ${htmlContent}
            </div>
          </body>
          <script src="${MONACO_BASE_PATH}/loader.js"><\/script>
          
          <script  type="module">
            require.config({
              paths: { 'vs': "${MONACO_BASE_PATH}" }
            });
            ${javascriptMarkdown}
            function resizeIframe() {
              const document = window.parent.document;
              const iframe = document.getElementById('widget'); 
              iframe.style.height = (document.documentElement.scrollHeight + 18) + 'px';
              
            }
          <\/script>
        </html>
      `
    );
  }
}
const onCopy = async (document) => {
  try {
    await navigator.clipboard.writeText(document);
    await navigator.clipboard.writeText(document);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
const copyJson = async (data) => {
  const hashed = JSON.stringify(data);
  onCopy(hashed);
};
function isJSONValid(cadena) {
  try {
    const resParse = JSON.parse(cadena);
    return [true, resParse];
  } catch (e) {
    return [false, null];
  }
}
const hashedDecode3 = (dataRes) => {
  const [valid, dataResObject] = isJSONValid(dataRes);
  if (valid && dataResObject?.version === "2.0.0") {
    return dataResObject;
  }
  const html = { title: "HTML", code: "html" };
  const css = { title: "CSS", code: "css" };
  const scss = { title: "SCSS", code: "scss" };
  const javascript = { title: "JS", code: "javascript" };
  const typescript = { title: "TS", code: "typescript" };
  const markdown = { title: "Markdown", code: "markdown" };
  const typescriptReact = { title: "TSX", code: "typescript" };
  if (valid && dataResObject?.version === "1.0.0") {
    const markdownActive = dataResObject.languages.html.code === "markdown";
    const stack = markdownActive ? "notes" : "static";
    const newObject = {
      version: "2.0.0",
      config: {
        splitSize: dataResObject.config.splitSize,
        setting: dataResObject.config.setting,
        sizeWindow: "auto",
        stack
      },
      stacks: {
        angular: {
          icon: "angular",
          title: "Angular",
          subtitle: "Typescript",
          console: true,
          view: true,
          language: {
            html: {
              codeId: "HTML",
              content: "",
              active: "html",
              codes: [html]
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "scss",
              codes: [scss, css]
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "typescript",
              codes: [typescript]
            }
          }
        },
        react: {
          icon: "react",
          title: "React",
          subtitle: "Typescript",
          console: true,
          view: true,
          language: {
            html: {
              codeId: "HTML",
              content: "",
              active: "html",
              codes: [html]
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "scss",
              codes: [scss, css]
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "typescript",
              codes: [typescriptReact]
            }
          }
        },
        vanillaJs: {
          icon: "javascript",
          title: "Vanilla",
          subtitle: "Javascript",
          console: true,
          view: false,
          language: {
            javascript: {
              codeId: "JS",
              content: "",
              active: "javascript",
              codes: [javascript]
            }
          }
        },
        vanillaTs: {
          icon: "typescript",
          title: "Vanilla",
          subtitle: "Typescript",
          console: true,
          view: false,
          language: {
            javascript: {
              codeId: "JS",
              content: "",
              active: "typescript",
              codes: [typescript]
            }
          }
        },
        static: {
          icon: "html5",
          title: "Static",
          subtitle: "HTML/CSS/JS",
          console: true,
          view: true,
          language: {
            html: {
              codeId: "HTML",
              content: "",
              active: "html",
              codes: [html]
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "css",
              codes: [css, scss]
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "javascript",
              codes: [javascript]
            }
          }
        },
        notes: {
          icon: "markdown",
          title: "Notes",
          subtitle: "Markdown",
          console: false,
          view: false,
          language: {
            html: {
              codeId: "HTML",
              content: "",
              active: "markdown",
              codes: [markdown]
            }
          }
        }
      }
    };
    if (stack === "notes") {
      newObject.stacks[stack].language.html.content = dataResObject.languages.html.content;
      newObject.stacks[stack].language.html.active = "markdown";
    } else {
      newObject.stacks[stack].language.html.content = dataResObject.languages.html.content;
      newObject.stacks[stack].language.html.active = "html";
      newObject.stacks[stack].language.css.content = dataResObject.languages.css.content;
      newObject.stacks[stack].language.css.active = "css";
      newObject.stacks[stack].language.javascript.content = dataResObject.languages.javascript.content;
      newObject.stacks[stack].language.javascript.active = "javascript";
    }
    return newObject;
  } else {
    return {
      version: "2.0.0",
      config: {
        splitSize: [50, 50],
        setting: true,
        sizeWindow: "auto",
        stack: "notes"
      },
      stacks: {
        angular: {
          icon: "angular",
          title: "Angular",
          subtitle: "Typescript",
          console: true,
          view: true,
          language: {
            html: {
              codeId: "HTML",
              content: "",
              active: "html",
              codes: [html]
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "scss",
              codes: [scss, css]
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "typescript",
              codes: [typescript]
            }
          }
        },
        react: {
          icon: "react",
          title: "React",
          subtitle: "Typescript",
          console: true,
          view: true,
          language: {
            html: {
              codeId: "HTML",
              content: "",
              active: "html",
              codes: [html]
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "scss",
              codes: [scss, css]
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "typescript",
              codes: [typescriptReact]
            }
          }
        },
        vanillaJs: {
          icon: "javascript",
          title: "Vanilla",
          subtitle: "Javascript",
          console: true,
          view: false,
          language: {
            javascript: {
              codeId: "JS",
              content: "",
              active: "javascript",
              codes: [javascript]
            }
          }
        },
        vanillaTs: {
          icon: "typescript",
          title: "Vanilla",
          subtitle: "Typescript",
          console: true,
          view: false,
          language: {
            javascript: {
              codeId: "JS",
              content: "",
              active: "typescript",
              codes: [typescript]
            }
          }
        },
        static: {
          icon: "html5",
          title: "Static",
          subtitle: "HTML/CSS/JS",
          console: true,
          view: true,
          language: {
            html: {
              codeId: "HTML",
              content: "",
              active: "html",
              codes: [html]
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "css",
              codes: [css, scss]
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "javascript",
              codes: [javascript]
            }
          }
        },
        notes: {
          icon: "markdown",
          title: "Notes",
          subtitle: "Markdown",
          console: false,
          view: false,
          language: {
            html: {
              codeId: "HTML",
              content: "",
              active: "markdown",
              codes: [markdown]
            }
          }
        }
      }
    };
  }
};
const ContentEditor = ({
  indexLang,
  codeId,
  defaultLanguage,
  iniValue
}) => {
  const { isFullscreen } = useFullscreenStore();
  const { currentStack } = useStackStore();
  const { updateContent } = useContentStore();
  useConfigStore();
  const handleEditorChange = (value) => {
    if (value != void 0) {
      if (currentStack) {
        updateContent(indexLang, value);
      }
    }
  };
  const handleEditorDidMount = (monaco) => {
    monaco.editor.defineTheme("default", {
      base: "vs",
      inherit: true,
      rules: [{ token: "comment", foreground: "808080" }],
      colors: {}
    });
  };
  return /* @__PURE__ */ jsx(
    Editor,
    {
      theme: "vs-light",
      height: isFullscreen ? "calc(100vh - 47px)" : "70vh",
      defaultLanguage,
      value: iniValue,
      onChange: handleEditorChange,
      beforeMount: handleEditorDidMount,
      options: {
        minimap: { enabled: false },
        automaticLayout: true,
        fixedOverflowWidgets: true,
        scrollBeyondLastLine: false,
        roundedSelection: false,
        padding: { top: 12, bottom: 12 }
        // scrollbar: {
        //   handleMouseWheel: false,
        // },
      }
    }
  );
};
const IframePreview = ({
  initValue,
  setting
}) => {
  const iframeRef = useRef(null);
  const { isFullscreen } = useFullscreenStore();
  const { currentConfig } = useConfigStore();
  const [delayedContent, setDelayedContent] = useState(null);
  const { contentStore } = useContentStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!currentConfig)
        return;
      const newhtml = previewFactory(currentConfig?.stack, contentStore);
      setDelayedContent(newhtml);
    }, 1e3);
    return () => clearTimeout(timer);
  }, [contentStore]);
  useEffect(() => {
  }, [initValue]);
  const handleIframeResize = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow && iframe.contentDocument) {
      const iframeBody = iframe.contentDocument.body;
      const iframeHeight = iframeBody.scrollHeight;
      iframe.style.height = isFullscreen ? "calc(100vh - 47px)" : setting ? "70vh" : `${iframeHeight + 50}px`;
    }
  };
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = handleIframeResize;
    }
    return () => {
      if (iframe) {
        iframe.onload = null;
      }
    };
  }, [delayedContent]);
  useEffect(() => {
    handleIframeResize();
  }, [setting, isFullscreen]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        width: "100%",
        minHeight: "70vh"
      },
      children: /* @__PURE__ */ jsx(
        "iframe",
        {
          ref: iframeRef,
          id: "widget",
          className: "bg-white-degrade",
          name: "widget",
          title: "widget",
          width: "100%",
          scrolling: "auto",
          srcDoc: delayedContent ?? "",
          style: {
            height: "100%"
          }
        }
      )
    }
  );
};
const CodeEditor = ({
  dataCode,
  titleCode
}) => {
  const { config, stacks } = hashedDecode3(dataCode);
  const { currentStack, updateStack } = useStackStore();
  const { currentConfig, updateConfig } = useConfigStore();
  const { contentStore, updateLanguage } = useContentStore();
  useEffect(() => {
    updateStack(stacks);
    updateConfig(config);
  }, [dataCode]);
  useEffect(() => {
    if (currentStack && currentConfig) {
      const valueHtml = currentStack[currentConfig.stack].language.html;
      valueHtml && updateLanguage("html", valueHtml);
      const valueCss = currentStack[currentConfig.stack].language.css;
      valueCss && updateLanguage("css", valueCss);
      const valueJs = currentStack[currentConfig.stack].language.javascript;
      valueJs && updateLanguage("javascript", valueJs);
    }
  }, [currentStack]);
  useEffect(() => {
    if (!currentStack || !currentConfig)
      return;
    const tabActive = Object.values(
      currentStack[currentConfig.stack].language
    );
    if (tabActive.length > 0) {
      const active = tabActive[0].codeId;
      setActiveTab(active);
    }
  }, [currentConfig]);
  const updateActiveStack = (index) => {
    if (!currentConfig)
      return;
    updateConfig({
      ...currentConfig,
      stack: index
    });
  };
  const { setActiveTab } = useTabStore();
  const { isFullscreen, toggleFullscreen } = useFullscreenStore();
  const toggleSetting = () => {
    if (!currentConfig)
      return;
    updateConfig({
      ...currentConfig,
      splitSize: currentConfig.setting ? [0, 100] : [50, 50],
      setting: !currentConfig.setting
    });
  };
  return /* @__PURE__ */ jsx("div", { className: "editor-container", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "App", style: { minHeight: "70vh" }, children: /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        position: isFullscreen ? "fixed" : "relative",
        // Fijo si está en pantalla completa
        top: isFullscreen ? 0 : "auto",
        left: isFullscreen ? 0 : "auto",
        width: isFullscreen ? "100%" : "auto",
        // 80% del ancho inicialmente, 100% si es fullscreen
        height: isFullscreen ? "100vh" : "auto",
        // Altura inicial de 300px, 100% si es fullscreen
        zIndex: isFullscreen ? 1e3 : "auto",
        // Z-index alto solo cuando está en pantalla completa
        backgroundColor: isFullscreen ? "white" : "initial",
        // Fondo blanco
        transition: "all 0.2s ease-in-out"
        // Transición suave
      },
      children: /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-primary-900 rounded-t-lg flex text-primary-50 pe-2 ps-4 justify-between items-center text-[14px] py-1", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-base font-raleway font-bold flex gap-2 items-center", children: [
            currentConfig && /* @__PURE__ */ jsx(ReactIcon, { name: currentConfig.stack, size: "18" }),
            titleCode
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                paddingRight: isFullscreen ? "8px" : "auto"
              },
              className: "flex items-center flex-grow basis-0 justify-end",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "p-2 hover:bg-primary-0 cursor-pointer rounded-md",
                    onClick: toggleFullscreen,
                    children: /* @__PURE__ */ jsx(ReactIcon, { name: "update", size: "small" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "p-2 hover:bg-primary-0 cursor-pointer rounded-md",
                    onClick: toggleFullscreen,
                    children: /* @__PURE__ */ jsx(ReactIcon, { name: "fullscreen", size: "small" })
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "border-l border-white/30 h-[18px] mx-3" }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => toggleSetting(),
                    className: "p-2 hover:bg-primary-0 cursor-pointer rounded-md",
                    children: currentConfig?.setting ? /* @__PURE__ */ jsx(ReactIcon, { name: "view", size: "small" }) : /* @__PURE__ */ jsx(ReactIcon, { name: "code", size: "small" })
                  }
                ),
                /* @__PURE__ */ jsxs(Dropdown, { children: [
                  /* @__PURE__ */ jsx(Dropdown.Toggle, { children: /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-primary-0 rounded-md", children: /* @__PURE__ */ jsx(ReactIcon, { name: "menu-kebab", size: "small" }) }) }),
                  /* @__PURE__ */ jsxs(Dropdown.Menu, { align: "right", className: "leading-snug", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-gray-100/60 rounded-md cursor-pointer", children: /* @__PURE__ */ jsx(
                      Dropdown.Item,
                      {
                        onClick: () => {
                          const udpateContent = () => {
                            const languages = stacks[currentConfig.stack].language;
                            let resLeng = { ...languages };
                            if (languages.css) {
                              resLeng.css.content = contentStore.css?.content || "";
                            }
                            if (languages?.html) {
                              resLeng.html.content = contentStore.html?.content || "";
                            }
                            if (languages?.javascript) {
                              resLeng.javascript.content = contentStore.javascript?.content || "";
                            }
                            return resLeng;
                          };
                          copyJson({
                            version: "2.0.0",
                            config: currentConfig,
                            stacks: {
                              ...stacks,
                              ...stacks[currentConfig.stack].language = udpateContent()
                            }
                          });
                        },
                        children: "Copiar json"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "w-full border-t border-primary-0/5 my-2" }),
                    /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-gray-100/60 rounded-md cursor-pointer", children: /* @__PURE__ */ jsx(
                      Dropdown.Item,
                      {
                        onClick: () => {
                          updateActiveStack("angular");
                        },
                        children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                          /* @__PURE__ */ jsx(ReactIcon, { name: "angular", size: "16" }),
                          /* @__PURE__ */ jsx("span", { children: "Angular" })
                        ] })
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-gray-100/60 rounded-md cursor-pointer", children: /* @__PURE__ */ jsx(
                      Dropdown.Item,
                      {
                        onClick: () => {
                          updateActiveStack("react");
                        },
                        children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                          /* @__PURE__ */ jsx(ReactIcon, { name: "react", size: "16" }),
                          /* @__PURE__ */ jsx("span", { children: "React" })
                        ] })
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-gray-100/60 rounded-md cursor-pointer", children: /* @__PURE__ */ jsx(
                      Dropdown.Item,
                      {
                        onClick: () => {
                          updateActiveStack("static");
                        },
                        children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                          /* @__PURE__ */ jsx(ReactIcon, { name: "static", size: "16" }),
                          /* @__PURE__ */ jsx("span", { children: "Static" })
                        ] })
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-gray-100/60 rounded-md cursor-pointer", children: /* @__PURE__ */ jsx(
                      Dropdown.Item,
                      {
                        onClick: () => {
                          updateActiveStack("vanillaJs");
                        },
                        children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                          /* @__PURE__ */ jsx(ReactIcon, { name: "javascript", size: "16" }),
                          /* @__PURE__ */ jsx("span", { children: "Vanilla JS" })
                        ] })
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-gray-100/60 rounded-md cursor-pointer", children: /* @__PURE__ */ jsx(
                      Dropdown.Item,
                      {
                        onClick: () => {
                          updateActiveStack("vanillaTs");
                        },
                        children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                          /* @__PURE__ */ jsx(ReactIcon, { name: "typescript", size: "16" }),
                          /* @__PURE__ */ jsx("span", { children: "Vanilla TS" })
                        ] })
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-gray-100/60 rounded-md cursor-pointer", children: /* @__PURE__ */ jsx(
                      Dropdown.Item,
                      {
                        onClick: () => {
                          updateActiveStack("notes");
                        },
                        children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                          /* @__PURE__ */ jsx(ReactIcon, { name: "markdown", size: "16" }),
                          /* @__PURE__ */ jsx("span", { children: "Notas" })
                        ] })
                      }
                    ) })
                  ] })
                ] })
              ]
            }
          )
        ] }),
        currentConfig && currentStack && /* @__PURE__ */ jsx("div", { style: { height: isFullscreen ? "100%" : "auto" }, children: /* @__PURE__ */ jsxs(
          Split,
          {
            className: "wrap",
            sizes: currentConfig.splitSize,
            minSize: 0,
            expandToMin: false,
            gutterSize: currentConfig.setting ? 8 : 0,
            gutterAlign: "center",
            snapOffset: 30,
            dragInterval: 1,
            direction: "horizontal",
            cursor: "col-resize",
            children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    overflow: isFullscreen ? "hidden" : "auto"
                  },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "bg-secondary-50", children: /* @__PURE__ */ jsx(
                      "div",
                      {
                        style: {
                          paddingLeft: isFullscreen ? "8px" : "auto"
                        },
                        className: "flex-grow basis-0",
                        children: currentStack && currentConfig && currentConfig.setting && /* @__PURE__ */ jsx("div", { className: "flex ", children: Object.values(
                          currentStack[currentConfig.stack].language
                        ).map((lang) => {
                          return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(TabHeader, { value: lang.codeId, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                            lang.codeId,
                            /* @__PURE__ */ jsx("span", { className: "ms-1 text-[12px]", children: lang.codeId !== lang.codeId && /* @__PURE__ */ jsxs("span", { children: [
                              "(",
                              lang.codeId,
                              ")"
                            ] }) })
                          ] }) }) }, lang.codeId);
                        }) })
                      }
                    ) }),
                    Object.entries(
                      currentStack[currentConfig.stack].language
                    ).map(([index, lang]) => {
                      return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(TabContent, { value: lang.codeId, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                        currentConfig.setting && lang.codes.length > 1 && /* @__PURE__ */ jsx("div", { className: "absolute right-4 -top-[35px] z-10", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
                          /* @__PURE__ */ jsx(Dropdown.Toggle, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center px-2 py-[2px] rounded-md text-[12px] border border-primary-0 text-primary-0", children: [
                            lang.active,
                            " ",
                            /* @__PURE__ */ jsx(
                              ReactIcon,
                              {
                                size: "small",
                                name: "arrow-up"
                              }
                            )
                          ] }) }),
                          /* @__PURE__ */ jsx(Dropdown.Menu, { align: "right", children: lang.codes.map((code) => {
                            return /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: `p-2 hover:bg-gray-100/80 rounded-md my-1 cursor-pointer text-sm ${code.code === lang.active ? "bg-gray-100/80" : ""}`,
                                children: /* @__PURE__ */ jsx(
                                  Dropdown.Item,
                                  {
                                    onClick: () => {
                                      console.log(
                                        "Cambiar de lenguaje"
                                      );
                                    },
                                    children: code.title
                                  }
                                )
                              },
                              code.code
                            );
                          }) })
                        ] }) }),
                        /* @__PURE__ */ jsx(
                          ContentEditor,
                          {
                            indexLang: index,
                            codeId: lang.codeId,
                            defaultLanguage: lang.active,
                            iniValue: lang.content
                          }
                        )
                      ] }) }) }, lang.codeId);
                    })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                IframePreview,
                {
                  initValue: currentStack[currentConfig.stack],
                  setting: currentConfig.setting
                }
              ) })
            ]
          }
        ) })
      ] })
    }
  ) }) }) });
};
const AppEditor = ({ dataCode, title }) => {
  return /* @__PURE__ */ jsx(CodeEditor, { dataCode, titleCode: title });
};

function Response({ dataType }) {
  let result = "";
  let badgeColor = "";
  if (dataType === "boolean") {
    result = "b";
    badgeColor = "bg-orange-300 text-yellow-900";
  } else if (dataType === "string") {
    result = "s";
    badgeColor = "bg-blue-300 text-blue-900";
  } else if (dataType === "number") {
    result = "n";
    badgeColor = "bg-green-300 text-green-900";
  } else if (dataType === "object") {
    result = "o";
    badgeColor = "bg-purple-300 text-purple-900";
  } else if (dataType === "array") {
    result = "a";
    badgeColor = "bg-pink-300 text-pink-900";
  }
  return /* @__PURE__ */ jsx(Fragment$1, { children: result && /* @__PURE__ */ jsx("span", { className: `px-1 py-px rounded-md font-bold text-xs ${badgeColor}`, children: result }) });
}

function Content({ idSheet }) {
  const [content, setContent] = useState(null);
  const [active, setActive] = useState(null);
  const [activeAudio, setActiveAudio] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSheet, setdataSheet] = useState(null);
  const boxcodeRef = useRef(null);
  useEffect(() => {
    const initFech = async () => {
      const url = getUrlSheets(idSheet, 0);
      const data = await fetchDataByUrl(url);
      const columns = googleSheetData(data, 1, ["A", "B", "C", "D", "E", "F"]);
      setdataSheet(columns);
      setIsLoading(false);
    };
    initFech();
  }, []);
  function handleActive(index, contentCode) {
    setActive(index);
    setContent(contentCode);
  }
  const handleScroll = () => {
    setTimeout(() => {
      if (boxcodeRef.current) {
        boxcodeRef.current.scrollIntoView({
          behavior: "smooth",
          // Desplazamiento suave
          block: "start"
          // Alineación al principio del elemento
        });
      }
    }, 200);
  };
  function onStartAudio() {
    if (activeAudio) {
      return;
    }
    setActiveAudio(true);
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(content?.description);
    utterThis.onend = function(_) {
      setActiveAudio(false);
    };
    synth.speak(utterThis);
  }
  const titleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const outputArray = aggregateData(dataSheet, { header: "#" }, "title", [
    "response",
    "description",
    "content",
    "note"
  ]);
  console.log(outputArray, "outputArray");
  return /* @__PURE__ */ jsxs("div", { children: [
    isLoading && /* @__PURE__ */ jsx("div", { className: "text-lg text-primary-0 flex justify-center w-full", children: /* @__PURE__ */ jsx("div", { className: "loading", children: "Cargando" }) }),
    !isLoading && /* @__PURE__ */ jsxs("div", { className: "mb-5 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "md:columns-2 lg:columns-4 text-sm gap-4 mb-14", children: outputArray.map(({ header, items }, index) => {
        return /* @__PURE__ */ jsxs("div", { className: "break-inside-avoid mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "g-border-b", children: /* @__PURE__ */ jsx("span", { className: "text-white inline-block pb-1 pt-2 px-4 font-bold bg-primary-0 rounded-t-md  rounded-sm", children: header }) }),
          /* @__PURE__ */ jsx("ul", { className: " [&>*:nth-child(even)]:bg-white text-primary-950 [&>*:nth-child(odd)]:bg-primary-50", children: items.map(
            ({ title, content: content2, description, note, response }, indexChild) => {
              const isActive = active === index.toString() + indexChild.toString();
              const type$ = title.type === "$" ? " !bg-primary-300" : "";
              const typei = title.type === "-" ? " border-l-4 border-primary-300" : "";
              const type$$ = title.type === "$$" ? " !bg-primary-200" : "";
              const typeii = title.type === "--" ? " border-l-2 border-primary-200" : "";
              const classActive = isActive ? " !bg-secondary-0 text-white" : "";
              const activeTitle = isActive ? " !opacity-100" : "";
              const cursor = content2 ? " cursor-pointer" : "";
              return /* @__PURE__ */ jsxs(
                "li",
                {
                  className: `relative group font-semibold font-raleway px-3 mt-[0.113rem] py-1 rounded-[2px] ${type$} ${type$$} ${classActive} ${cursor} ${typeii} ${typei}`,
                  onClick: () => {
                    if (!content2)
                      return;
                    handleScroll();
                    handleActive(
                      index.toString() + indexChild.toString(),
                      {
                        subtitle: title.title,
                        code: content2
                      }
                    );
                  },
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        response && /* @__PURE__ */ jsx(Response, { dataType: response ?? "" }),
                        /* @__PURE__ */ jsx("span", { className: "pe-3", children: title.title })
                      ] }),
                      description && /* @__PURE__ */ jsx("span", { className: "block text-[13px] font-normal pe-2 mt-1 mb-1 leading-tight whitespace-pre-wrap", children: description })
                    ] }),
                    content2 && /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `absolute top-1 right-1 text-primary-200 opacity-40 group-hover:opacity-100 ${activeTitle}`,
                        children: /* @__PURE__ */ jsx(ReactIcon, { name: "arrow-up", size: "21" })
                      }
                    ),
                    note && /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `absolute top-0 z-10 bottom-0 my-auto h-[21px] right-1 text-primary-200 ${activeTitle}`,
                        children: /* @__PURE__ */ jsxs(Dropdown, { children: [
                          /* @__PURE__ */ jsx(Dropdown.Toggle, { children: /* @__PURE__ */ jsx("span", { className: "opacity-40 group-hover:opacity-100", children: /* @__PURE__ */ jsx(ReactIcon, { name: "exclamation", size: "21" }) }) }),
                          /* @__PURE__ */ jsx(
                            Dropdown.Menu,
                            {
                              align: "right",
                              className: "w-full !min-w-[230px]",
                              children: /* @__PURE__ */ jsx("div", { className: "text-xs w-full whitespace-pre-wrap", children: note })
                            }
                          )
                        ] })
                      }
                    )
                  ]
                },
                indexChild
              );
            }
          ) })
        ] }, index);
      }) }),
      content && /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "1247",
            height: "513",
            viewBox: "0 0 1247 513",
            fill: "none",
            className: "absolute top-[-120px] opacity-30 z-[-1] max-w-full",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx("g", { opacity: "0.3", filter: "url(#filter0_f_8979_5)", children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M1080.47 264.172C1057.98 285.716 1006.49 302.197 959.86 319.766C919.683 334.903 876.866 348.397 825.851 360.103C769.027 373.142 715.437 391.289 644.403 392.152C573.14 393.018 513.294 376.903 454.421 364.615C399.068 353.063 359.654 337.144 311.939 322.763C246.633 303.08 133.928 291.913 121.154 264.172C108.804 237.354 198.452 216.539 253.21 195.231C301.741 176.346 355.911 159.619 422.562 146.884C491.003 133.808 564.518 116.905 644.403 120.488C724.157 124.064 758.069 155.11 831.551 165.227C917.218 177.021 1044.89 160.753 1102.13 183.505C1156.9 205.274 1107.77 238.021 1080.47 264.172Z",
                  fill: "#8873EF"
                }
              ) }),
              /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
                "filter",
                {
                  id: "filter0_f_8979_5",
                  x: "0",
                  y: "0",
                  width: "1246.93",
                  height: "512.186",
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                  children: [
                    /* @__PURE__ */ jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    /* @__PURE__ */ jsx(
                      "feBlend",
                      {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "BackgroundImageFix",
                        result: "shape"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "feGaussianBlur",
                      {
                        stdDeviation: "60",
                        result: "effect1_foregroundBlur_8979_5"
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: boxcodeRef,
            className: "boxcode flex items-center justify-between mb-3",
            children: content.description && /* @__PURE__ */ jsx(
              "div",
              {
                onClick: onStartAudio,
                className: activeAudio ? "opacity-50 border rounded-full p-2" : "border rounded-full p-2 cursor-pointer",
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        d: "M12.9218 3.00001C12.7635 3.00615 12.6125 3.06774 12.495 3.17401L6.79502 7.91401C6.70196 8.00643 6.58917 8.07658 6.46512 8.11919C6.34107 8.16179 6.20898 8.17575 6.07877 8.16001H2.40602C2.28682 8.15921 2.16865 8.1821 2.05837 8.22735C1.94809 8.2726 1.84789 8.3393 1.7636 8.42359C1.67931 8.50788 1.61261 8.60807 1.56736 8.71835C1.52211 8.82864 1.49922 8.94681 1.50002 9.06601V14.9355C1.49942 15.0546 1.52246 15.1726 1.5678 15.2827C1.61313 15.3928 1.67987 15.4928 1.76414 15.577C1.84841 15.6611 1.94854 15.7276 2.05872 15.7728C2.1689 15.818 2.28695 15.8408 2.40602 15.84H6.07502C6.20523 15.8243 6.33732 15.8382 6.46137 15.8808C6.58542 15.9234 6.69821 15.9936 6.79127 16.086L12.4913 20.826C12.882 21.1508 13.302 20.994 13.302 20.6093V3.39151C13.3049 3.34028 13.2972 3.28901 13.2793 3.24093C13.2614 3.19286 13.2336 3.14903 13.1979 3.11223C13.1622 3.07542 13.1191 3.04644 13.0716 3.02712C13.0241 3.00781 12.9731 2.99857 12.9218 3.00001ZM20.25 4.72501L18.9068 6.06976C20.0409 7.84389 20.6436 9.90558 20.6436 12.0113C20.6436 14.1169 20.0409 16.1786 18.9068 17.9528L20.2455 19.2848C21.7132 17.1409 22.499 14.6037 22.4998 12.0056C22.5006 9.40747 21.7164 6.86974 20.25 4.72501ZM17.0003 7.96726L15.6788 9.30001C16.2655 10.0831 16.5826 11.0353 16.5826 12.0139C16.5826 12.9924 16.2655 13.9446 15.6788 14.7278L16.9958 16.0448C17.9223 14.9032 18.4287 13.478 18.43 12.0077C18.4314 10.5374 17.9277 9.1113 17.0033 7.96801L17.0003 7.96726Z",
                        fill: "#8873EF"
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          AppEditor,
          {
            dataCode: content.code,
            title: titleCase(content?.subtitle)
          }
        )
      ] })
    ] })
  ] });
}

const $$Astro = createAstro("https://miguelkillki.com");
async function getStaticPaths() {
  return LISTPAGESID.map((item) => ({
    params: { id: item.pageId }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`<html lang="es" data-astro-cid-2jimifd6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": LISTPAGESID.find((item) => item.pageId === id)?.title || SITE_TITLE, "description": LISTPAGESID.find((item) => item.pageId === id)?.description || SITE_DESCRIPTION, "data-astro-cid-2jimifd6": true })}${renderHead()}</head> <body data-astro-cid-2jimifd6> <main class="mx-auto px-3 md:px-8 max-w-screen-xl min-h-screen" data-astro-cid-2jimifd6> <div class="absolute top-0 left-0 pointer-events-none w-[100vw] md:w-[50vw] z-10 max-w-full" data-astro-cid-2jimifd6> <svg class="mt-[-450px] opacity-30 max-w-full" width="1020" height="932" viewBox="0 0 1020 932" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2jimifd6> <g opacity="0.3" filter="url(#filter0_f_8710_4643)" data-astro-cid-2jimifd6> <path fill-rule="evenodd" clip-rule="evenodd" d="M864.057 486.614C846.653 541.287 806.82 583.111 770.741 627.698C739.657 666.112 706.529 700.357 667.059 730.064C623.094 763.155 581.632 809.207 526.674 811.397C471.538 813.594 425.235 772.698 379.685 741.515C336.858 712.197 306.364 671.8 269.447 635.304C218.92 585.354 131.721 557.014 121.837 486.614C112.283 418.556 181.643 365.732 224.009 311.657C261.557 263.732 303.468 221.284 355.036 188.966C407.988 155.781 464.867 112.886 526.674 121.978C588.379 131.055 614.616 209.842 671.469 235.515C737.749 265.445 836.532 224.162 880.816 281.9C923.187 337.144 885.182 420.249 864.057 486.614Z" fill="#8873EF" data-astro-cid-2jimifd6></path> </g> <defs data-astro-cid-2jimifd6> <filter id="filter0_f_8710_4643" x="0.94458" y="0.740356" width="1019.06" height="930.741" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-astro-cid-2jimifd6> <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-2jimifd6></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-2jimifd6></feBlend> <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_8710_4643" data-astro-cid-2jimifd6></feGaussianBlur> </filter> </defs> </svg> </div> <div class="mt-10" data-astro-cid-2jimifd6> <a href="/" class="custom-bg-button relative inline-flex items-center justify-center p-0.5 mb-1 overflow-hidden text-sm font-medium text-primary-0 rounded-full group bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0" data-astro-cid-2jimifd6> <span class="relative p-2 bg-white rounded-full" data-astro-cid-2jimifd6> ${renderComponent($$result, "AppIcon", $$AppIcon, { "name": "arrow-back", "data-astro-cid-2jimifd6": true })} </span> </a> </div> <div data-astro-cid-2jimifd6> <!-- {JSON.stringify(listIds)} --> <h1 class="font-extrabold font-raleway text-primary-0 text-4xl md:text-5xl mb-4 mt-7" data-astro-cid-2jimifd6> ${LISTPAGESID.map((item) => {
    if (item.pageId === id) {
      return item.title;
    }
  })} </h1> <p class="mb-12" data-astro-cid-2jimifd6> ${LISTPAGESID.map((item) => {
    if (item.pageId === id) {
      return item.description;
    }
  })} </p> </div> <!-- {id} --> ${renderComponent($$result, "Content", Content, { "idSheet": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/BySna/Documents/killki/work/mypage/src/pages/sheet/Content", "client:component-export": "default", "data-astro-cid-2jimifd6": true })} <!-- <MyComponent client:load /> --> <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-16" data-astro-cid-2jimifd6> <div class="mt-14" data-astro-cid-2jimifd6> ${renderComponent($$result, "Social", $$Social, { "data-astro-cid-2jimifd6": true })} </div> ${renderComponent($$result, "MenuFooter", $$MenuFooter, { "data-astro-cid-2jimifd6": true })} </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-2jimifd6": true })} </body></html>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/pages/sheet/[id].astro", void 0);

const $$file = "C:/Users/BySna/Documents/killki/work/mypage/src/pages/sheet/[id].astro";
const $$url = "/sheet/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AppIcon as $, LANG as L, SITE_TITLE as S, _id_ as _, i18n as a, $$Footer as b, $$MenuFooter as c, $$Social as d, $$BaseHead as e, SITE_DESCRIPTION as f, getCollection as g, i18nDetail as i };
