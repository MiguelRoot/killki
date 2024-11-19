import { createContext, useState, useRef, useEffect, useContext } from 'react';
/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, l as renderHead } from '../astro_rr27FtTQ.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$AppIcon, d as defineCollection, b as baseUrlStatic, S as SITE_TITLE, a as SITE_DESCRIPTION, c as $$BaseHead, e as $$Footer } from './__j0pHW8U4.mjs';
import { LISTPAGESID } from './listPageId_FcdmTQtG.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import Split from 'react-split';
import Editor from '@monaco-editor/react';
import { create } from 'zustand';
import { marked } from 'marked';
import { styleBase, styleMarkDown } from './defaultStyle_VNxoUei3.mjs';
import { htmlMarkdown, javascriptMarkdown } from './mardown_lw4_CDBo.mjs';
import { useFullscreenStore } from './useFullscreen_RhtnRS_2.mjs';
import * as z from 'zod';
import ts from 'typescript';
import { useStackStore } from './useStackStore_DQfjM3vL.mjs';
import { useContentStore } from './useContentStore_932uEWnP.mjs';
import { useConfigStore } from './useConfigStore_etx_Z9ed.mjs';

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
    icon: "sass",
    title: "Sass",
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
  {
    icon: "mongodb",
    title: "MongoDB",
    level: 3
  },
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
  // {
  //   icon: "odoo",
  //   title: "Odoo",
  // },
  {
    icon: "java",
    title: "Java",
    level: 3
  }
];
const translations = {
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
    presentation: "Disfruto transformar problemas complejos en diseños simples, atractivos e intuitivos. Fuera del ámbito de la programación 👨‍💻, me encontrarás sumergido en videojuegos, disfrutando de la jardinería 🌱 o dedicándome a la práctica deportiva 🏀.",
    profile: "Con más de 4 años de experiencia en el desarrollo de páginas web y aplicaciones móviles utilizando tecnologías como Ionic, Flutter y Angular. Tuve el privilegio de formar parte en la creación del 'Sistema de selección de docentes' para Adex Datatrade, donde lideré el desarrollo del frontend utilizando Angular. Además, participé en el desarrollo de la aplicación móvil 'Mis Primeros Tres' para Fundación Baltazar y Nicolás, en la que tuve la responsabilidad de desarrollar todo el frontend utilizando Ionic, Angular y Firebase. También formé parte del equipo encargado del desarrollo de la aplicación móvil 'Alerta Vecinos' para la Municipalidad de Santa Maria del Mar, utilizando Flutter y las APIs de Google Maps, entre otras tecnologías.",
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
        startDate: "Febrero 2022 — Actualmente...",
        city: "Remoto",
        position: "Desarrollador web front-end & móvil",
        company: "Avanti Consultores",
        description: "Encargado de realizar el desarrollo fontend de plataformas web y movil usando las tecnologías Angular, Redux, Ionic,  (HTML, Typescript, JavaScript css sass...) he realizado proyectos como:",
        detalies: [
          "Desarrollé una plataforma de estadísticas de importaciones con tablas filtrables y gráficos comparativos, permitiendo análisis detallados y personalizados.",
          "Implementé un sistema de evaluación docente con login por roles, formularios avanzados y tablas dinámicas con filtros, optimizando la gestión de evaluaciones.",
          "Integré un sistema de login y pasarela de pago con múltiples planes de suscripción, mejorando la seguridad y eficiencia del proceso de registro.",
          "Creé una app móvil para el monitoreo de gestantes y recién nacidos, con login social, formularios de perfil y notificaciones push basadas en eventos registrados.",
          "Desarrollé una app móvil con login social, integración con Google Maps, creación de ofertas y un carrito de compras con pasarela de pago.",
          "Dirigí el desarrollo un sitio web dinámico en WordPress con campos personalizados para satisfacer las necesidades específicas del cliente."
        ]
      },
      {
        startDate: "Enero 2019 — noviembre 2021",
        city: "Lima, Perú",
        position: "Desarrollador web front-end",
        company: "Municialidad de S.A.",
        description: "Encargado de mantener los sistems web de la municipalidad, usando las tecnologías PHP, Java, (HTML, Typescript, JavaScript css sass...)",
        detalies: [
          "Desarrollé una página institucional en WordPress con campos personalizados adaptados a las necesidades del cliente.",
          "Creé una aplicación en Flutter para enviar reportes con texto, fotos y audio, facilitando la captura y envío de información."
        ]
      }
    ],
    projects: [
      {
        image: "AdexDataTrade.png",
        title: "Dashboard Adex Datatrade",
        link: "https://www.adexdatatrade.com/",
        description: "Desarrollé el sistema de estadísticas de importaciones de Adex Datatrade, generando gráficos interactivos con Chart.js y mejorando la experiencia de usuario y el análisis de datos.",
        stack: ["JavaScript", "HTML", "CSS", "Chart.js", "C#"]
      },
      {
        image: "adex_instituto.png",
        link: "https://adex.edu.pe/",
        title: "Sistema de evaluación, Instituto Adex",
        description: "Fui responsable del frontend del sistema de evaluación de docentes del Instituto Adex, utilizando Angular y Redux para crear una plataforma fluida y eficiente.",
        stack: ["Angular", "Redux", "TypeScript", "SASS"]
      },
      {
        image: "AdexDataTrade.png",
        link: "https://www.adexdatatrade.com/PaymentRegistro.aspx?plan=2",
        title: "Pasarela de pagos, Adex Datatrade",
        description: "Integré las APIs del sistema de pasarela de pago de Adex con Niubiz, implementando validaciones de seguridad para garantizar la confiabilidad de las transacciones.",
        stack: ["JavaScript", "HTML", "CSS", "C#"]
      },
      {
        image: "mis_primeros_tres.png",
        link: "https://play.google.com/store/apps/details?id=pe.avanti.app.mp3&hl=es_PE",
        title: "Seguimiento de embarazo (Aplicación móvil)",
        description: "Desarrollé una app móvil para la Fundación Baltazar y Nicolás que permite a las gestantes registrar y monitorear su salud usando Ionic y Firebase.",
        stack: ["Ionic", "Angular", "TypeScript", "Firebase", "SASS"]
      },
      {
        image: "logo_sigo.png",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        title: "Sigo (Aplicación móvil)",
        description: "Lidere el desarrollo de una app de servicios y ventas, implementando Google Maps, un carrito de compras y pasarela de pago, creando una plataforma completa y eficiente.",
        stack: ["Angular", "Ionic", "TypeScript", "Firebase", "Google Maps"]
      },
      {
        image: "lazo_de_ayuda.png",
        link: "https://fundacionlazosdeayuda.org/",
        title: "Desarrollo del Tema WordPress, Fundación Lazo de Ayuda",
        description: "Desarrollé un tema personalizado en WordPress para la Fundación Lazo de Ayuda, utilizando PHP, Vite y Tailwind, mejorando su sitio web.",
        stack: ["PHP", "Javascript", "SASS", "Vite", "Tailwind"]
      }
    ],
    skills: skillsList,
    menu: [
      { label: "Sobre mí", path: "about" },
      { label: "Experiencia", path: "experience" },
      { label: "Proyectos", path: "projects" },
      { label: "Skills", path: "skills" }
    ]
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
    presentation: "I enjoy transforming complex problems into simple, attractive, and intuitive designs. Outside the programming field 👨‍💻, you will find me immersed in video games, enjoying gardening 🌱, or dedicating myself to sports practice 🏀.",
    profile: "With over 4 years of experience in web page and mobile application development using technologies such as Ionic, Flutter, and Angular. I had the privilege of being part of the creation of the 'Teacher Selection System' for Adex Datatrade, where I led the frontend development using Angular. I also participated in the development of the mobile application 'Mis Primeros Tres' for the Baltazar and Nicolás Foundation, where I was responsible for developing the entire frontend using Ionic, Angular, and Firebase. I also formed part of the team responsible for the development of the mobile application 'Alerta Vecinos' for the Municipality of Santa Maria del Mar, using Flutter and Google Maps APIs, among other technologies.",
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
        startDate: "2022 — Currently...",
        city: "Remote",
        position: "Frontend web & mobile developer",
        company: "Avanti Consultores",
        description: "Responsible for developing the frontend of web and mobile platforms using technologies such as Angular, Redux, Ionic, (HTML, Typescript, JavaScript, CSS, Sass...). I have carried out projects such as:",
        detalies: [
          "Developed an import statistics platform with filterable tables and comparative charts, enabling detailed and personalized analysis.",
          "Implemented a teacher evaluation system with role-based login, advanced forms, and dynamic tables with filters, optimizing evaluation management.",
          "Integrated a login system and payment gateway with multiple subscription plans, improving security and efficiency in the registration process.",
          "Created a mobile app for monitoring pregnant women and newborns, featuring social login, profile forms, and push notifications based on registered events.",
          "Developed a mobile app with social login, integration with Google Maps, offer creation, and a shopping cart with a payment gateway.",
          "Led the development of a dynamic website in WordPress with custom fields to meet the client's specific needs."
        ]
      },
      {
        startDate: "2019 — 2021",
        city: "Lima, Perú",
        position: "Frontend web developer",
        company: "Municialidad de S.A.",
        description: "Responsible for maintaining the municipal web systems, using technologies such as PHP, Java, (HTML, Typescript, JavaScript, CSS, Sass...)",
        detalies: [
          "Developed an institutional page in WordPress with custom fields adapted to the client's needs.",
          "Created a Flutter application to send reports with text, photos, and audio, facilitating the capture and sending of information."
        ]
      }
    ],
    projects: [
      {
        image: "AdexDataTrade.png",
        title: "Adex Datatrade Dashboard",
        link: "https://www.adexdatatrade.com/",
        description: "Developed the import statistics system for Adex Datatrade, generating interactive charts with Chart.js and improving user experience and data analysis.",
        stack: ["JavaScript", "HTML", "CSS", "Chart.js", "C#"]
      },
      {
        image: "adex_instituto.png",
        title: "Institute Adex evaluation system",
        link: "https://adex.edu.pe/",
        description: "I was responsible for the frontend of the teacher evaluation system at Instituto Adex, using Angular and Redux to create a fluid and efficient platform.",
        stack: ["Angular", "Redux", "TypeScript", "SASS"]
      },
      {
        image: "AdexDataTrade.png",
        title: "Payment gateway, Adex Datatrade",
        link: "https://www.adexdatatrade.com/PaymentRegistro.aspx?plan=2",
        description: "Integrated the payment gateway APIs of Adex with Niubiz, implementing security validations to ensure transaction reliability.",
        stack: ["JavaScript", "HTML", "CSS", "C#"]
      },
      {
        image: "mis_primeros_tres.png",
        title: "Pregnancy monitoring (Mobile application)",
        link: "https://play.google.com/store/apps/details?id=pe.avanti.app.mp3&hl=es_PE",
        description: "Developed a mobile app for the Baltazar and Nicolás Foundation, allowing pregnant women to register and monitor their health using Ionic and Firebase.",
        stack: ["Ionic", "Angular", "TypeScript", "Firebase", "SASS"]
      },
      {
        image: "logo_sigo.png",
        title: "Sigo (Mobile application)",
        link: "https://play.google.com/store/apps/details?id=app.si.go.com&hl=es_PE",
        description: "Led the development of a services and sales app, implementing Google Maps, a shopping cart, and payment gateway, creating a complete and efficient platform.",
        stack: ["Angular", "Ionic", "TypeScript", "Firebase", "Google Maps"]
      },
      {
        image: "lazo_de_ayuda.png",
        title: "WordPress Theme Development, Lazo de Ayuda Foundation",
        link: "https://fundacionlazosdeayuda.org/",
        description: "Developed a custom WordPress theme for the Lazo de Ayuda Foundation, using PHP, Vite, and Tailwind, improving their website.",
        stack: ["PHP", "Javascript", "SASS", "Vite", "Tailwind"]
      }
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

const $$Astro$2 = createAstro("https://miguelkillki.com");
const $$MenuFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MenuFooter;
  const { currentLocale } = Astro2;
  const texts = i18n(currentLocale);
  return renderTemplate`${maybeRenderHead()}<div class="mt-14 columns-2 md:grid md:grid-cols-3"> <div class="break-inside-avoid"> <h4 class="font-bold font-raleway mb-2 text-secondary-0">Secciones</h4> <ul class="[&>*]:mb-1"> <li><a href="/">${currentLocale === "en" ? "Home" : "Inicio"}</a></li> ${texts.menu.map((item) => renderTemplate`<li> <a class="text-primary-1000"${addAttribute(`${currentLocale === "en" ? "/en" : ""}/#${item.path}`, "href")}> ${item.label} </a> </li>`)} </ul> </div> <div class="break-inside-avoid"> <h4 class="font-bold mb-2 text-secondary-0">Cheatsheet</h4> <ul class="[&>*]:mb-1"> ${LISTPAGESID.map((item) => renderTemplate`<li> <a class="text-primary-1000"${addAttribute("/sheet/" + item.pageId, "href")}> ${item.title} </a> </li>`)} </ul> </div> <div class="break-inside-avoid"> <h4 class="font-bold mb-2 text-secondary-0">Utilities</h4> <ul> <li> <a class="text-primary-1000 blank" target="_blank" href="https://github.com/MiguelRoot/angular-sidebar-admin">
Angular Sidebar Admin
</a> </li> </ul> </div> </div>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/components/sections/MenuFooter.astro", void 0);

const $$Astro$1 = createAstro("https://miguelkillki.com");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead()}<div class="flex pb-3 [&>*]:me-3 mt-4 md:pb-10 lg:mt-0"> <a href="https://www.linkedin.com/in/miguelkillki/" class="relative inline-flex items-center justify-center p-0.5 bg-primary-100 mb-1 overflow-hidden text-sm font-medium hover:text-primary-0 rounded-full group hover:bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-primary-50 dark:bg-gray-900 rounded-full"> ${renderComponent($$result, "AppIcon", $$AppIcon, { "name": "linkedin" })} </span> </a> <a href="https://github.com/MiguelRoot" class="relative inline-flex items-center justify-center p-0.5 bg-primary-100 mb-1 overflow-hidden text-sm font-medium hover:text-primary-0 rounded-full group hover:bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-primary-50 dark:bg-gray-900 rounded-full"> ${renderComponent($$result, "AppIcon", $$AppIcon, { "name": "github" })} </span> </a> <a href="https://twitter.com/MiguelKillki" class="relative inline-flex items-center justify-center p-0.5 bg-primary-100 mb-1 overflow-hidden text-sm font-medium hover:text-primary-0 rounded-full group hover:bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-primary-50 dark:bg-gray-900 rounded-full"> ${renderComponent($$result, "AppIcon", $$AppIcon, { "name": "twitter" })} </span> </a> <a href="https://www.instagram.com/miguelkillki/" class="relative inline-flex items-center justify-center p-0.5 bg-primary-100 mb-1 overflow-hidden text-sm font-medium hover:text-primary-0 rounded-full group hover:bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-primary-50 dark:bg-gray-900 rounded-full"> ${renderComponent($$result, "AppIcon", $$AppIcon, { "name": "instagram" })} </span> </a> </div>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/components/sections/Social.astro", void 0);

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
            ${javascriptMarkdown}
            function resizeIframe() {
              const document = window.parent.document;
              const iframe = document.getElementById('widget'); 
              iframe.style.height = (document.documentElement.scrollHeight + 18) + 'px';
              console.log(iframe);
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
  console.log("dataResObject v3", dataResObject);
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
    console.log("newObject v3 v3", newObject);
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
      rules: [
        { token: "comment", foreground: "808080" }
        // { token: "tag", foreground: "6a15d6" },
        // { token: "attribute", foreground: "6a15d6" },
      ],
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
  const { updateLanguage } = useContentStore();
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
      const tabActive = Object.values(
        currentStack[currentConfig.stack].language
      );
      if (tabActive.length > 0) {
        const active = tabActive[0].codeId;
        setActiveTab(active);
      }
    }
  }, [currentStack, currentConfig]);
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
      children: /* @__PURE__ */ jsxs(Fragment, { children: [
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
                          copyJson({
                            version: "2.0.0",
                            config: currentConfig,
                            stacks: currentStack
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
      const columns = googleSheetData(data, 0, ["A", "B", "C", "D", "E"]);
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
    "content",
    "description",
    "note"
  ]);
  console.log("outputArray 😀😀😀", outputArray);
  return /* @__PURE__ */ jsxs("div", { children: [
    isLoading && /* @__PURE__ */ jsx("div", { className: "text-lg text-primary-0 flex justify-center w-full", children: /* @__PURE__ */ jsx("div", { className: "loading", children: "Cargando" }) }),
    !isLoading && /* @__PURE__ */ jsxs("div", { className: "mb-5 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "md:columns-2 lg:columns-4 text-sm gap-4 mb-14", children: outputArray.map(({ header, items }, index) => {
        return /* @__PURE__ */ jsxs("div", { className: "break-inside-avoid mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "g-border-b", children: /* @__PURE__ */ jsx("span", { className: "text-white inline-block pb-1 pt-2 px-4 font-bold bg-primary-0 rounded-t-md  rounded-sm", children: header }) }),
          /* @__PURE__ */ jsx("ul", { className: " [&>*:nth-child(even)]:bg-primary-50 [&>*:nth-child(odd)]:bg-white", children: items.map(
            ({ title, content: content2, description, note }, indexChild) => {
              const isActive = active === index.toString() + indexChild.toString();
              const type$ = title.type === "$" ? " !bg-primary-300" : "";
              const type$$ = title.type === "$$" ? " !bg-primary-200" : "";
              const classActive = isActive ? " !bg-secondary-0 text-white" : "";
              const activeTitle = isActive ? " !opacity-100" : "";
              const cursor = content2 ? " cursor-pointer" : "";
              return /* @__PURE__ */ jsxs(
                "li",
                {
                  className: `relative group font-bold font-raleway px-3 mt-[0.113rem] py-1 rounded-[3px] ${type$} ${type$$} ${classActive} ${cursor}`,
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
                      /* @__PURE__ */ jsx("span", { className: "pe-3", children: title.title }),
                      description && /* @__PURE__ */ jsx("span", { className: "block text-[13px] font-normal pe-2 leading-tight whitespace-pre-wrap", children: description })
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
  return renderTemplate`<html lang="es" data-astro-cid-2jimifd6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": LISTPAGESID.find((item) => item.pageId === id)?.title || SITE_TITLE, "description": LISTPAGESID.find((item) => item.pageId === id)?.description || SITE_DESCRIPTION, "data-astro-cid-2jimifd6": true })}${renderHead()}</head> <body data-astro-cid-2jimifd6> <main class="mx-auto px-3 md:px-8 max-w-screen-xl min-h-screen" data-astro-cid-2jimifd6> <div class="absolute top-0 left-0 pointer-events-none w-[100vw] md:w-[50vw] z-10 max-w-full" data-astro-cid-2jimifd6> <svg class="mt-[-450px] opacity-30 max-w-full" width="1020" height="932" viewBox="0 0 1020 932" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2jimifd6> <g opacity="0.3" filter="url(#filter0_f_8710_4643)" data-astro-cid-2jimifd6> <path fill-rule="evenodd" clip-rule="evenodd" d="M864.057 486.614C846.653 541.287 806.82 583.111 770.741 627.698C739.657 666.112 706.529 700.357 667.059 730.064C623.094 763.155 581.632 809.207 526.674 811.397C471.538 813.594 425.235 772.698 379.685 741.515C336.858 712.197 306.364 671.8 269.447 635.304C218.92 585.354 131.721 557.014 121.837 486.614C112.283 418.556 181.643 365.732 224.009 311.657C261.557 263.732 303.468 221.284 355.036 188.966C407.988 155.781 464.867 112.886 526.674 121.978C588.379 131.055 614.616 209.842 671.469 235.515C737.749 265.445 836.532 224.162 880.816 281.9C923.187 337.144 885.182 420.249 864.057 486.614Z" fill="#8873EF" data-astro-cid-2jimifd6></path> </g> <defs data-astro-cid-2jimifd6> <filter id="filter0_f_8710_4643" x="0.94458" y="0.740356" width="1019.06" height="930.741" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-astro-cid-2jimifd6> <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-2jimifd6></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-2jimifd6></feBlend> <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_8710_4643" data-astro-cid-2jimifd6></feGaussianBlur> </filter> </defs> </svg> </div> <div class="mt-10" data-astro-cid-2jimifd6> <a href="/" data-astro-cid-2jimifd6> <div class="relative inline-flex items-center justify-center p-0.5 mb-1 overflow-hidden text-sm font-medium text-primary-0 rounded-full group bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0" data-astro-cid-2jimifd6> <span class="relative p-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full" data-astro-cid-2jimifd6> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2jimifd6> <path d="M11.4375 18.75L4.6875 12L11.4375 5.25M5.625 12H19.3125" stroke="#F91111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2jimifd6></path> </svg> </span> </div> </a> </div> <div data-astro-cid-2jimifd6> <!-- {JSON.stringify(listIds)} --> <h1 class="font-extrabold font-raleway text-primary-0 text-4xl md:text-5xl mb-4 mt-7" data-astro-cid-2jimifd6> ${LISTPAGESID.map((item) => {
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

export { $$Social as $, LANG as L, MONACO_BASE_PATH as M, _id_ as _, $$MenuFooter as a, i18n as i };
