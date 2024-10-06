/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, i as renderHead } from '../astro_Heksqiom.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$IconApp, b as baseUrlStatic, S as SITE_TITLE, a as SITE_DESCRIPTION, c as $$BaseHead, d as $$Footer } from './__Xb4qrwF8.mjs';
import { LISTPAGESID } from './listPageId_AMQuRaDo.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, createContext, useRef, useEffect, useContext } from 'react';
import { decode, encode } from 'js-base64';
import Split from 'react-split';
import Editor from '@monaco-editor/react';
import { marked } from 'marked';
import { styleBase, styleMarkDown } from './defaultStyle_KCpGwl0M.mjs';
import { javascriptMarkdown, htmlMarkdown } from './mardown_BSSR2HPN.mjs';
import { useFullscreenStore } from './useFullscreen_RhtnRS_2.mjs';
import { create } from 'zustand';

const skillsList = [
  {
    icon: "javascript",
    title: "JavaScript"
  },
  {
    icon: "angular",
    title: "Angular"
  },
  {
    icon: "ionic",
    title: "Ionic"
  },
  {
    icon: "sass",
    title: "Sass"
  },
  {
    icon: "nodejs",
    title: "NodeJS"
  },
  {
    icon: "reactjs",
    title: "ReactJs"
  },
  {
    icon: "react-native",
    title: "React Native"
  },
  {
    icon: "mongodb",
    title: "MongoDB"
  },
  {
    icon: "figma",
    title: "Figma"
  },
  // {
  //   icon: "flutter",
  //   title: "Flutter",
  // },
  {
    icon: "github",
    title: "Git/Github"
  },
  {
    icon: "jest",
    title: "Jest"
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
    title: "Astro"
  },
  {
    icon: "wordpress",
    title: "Wordpress"
  },
  // {
  //   icon: "odoo",
  //   title: "Odoo",
  // },
  {
    icon: "java",
    title: "Java"
  }
];
const translations = {
  es: {
    status: "No disponible",
    welcome: "Hey, soy",
    senior: "Miguel Angel",
    career: "Frontend Developer Engineer",
    presentation: "Disfruto transformar problemas complejos en diseños simples, atractivos e intuitivos. Fuera del ámbito de la programación 👨‍💻, me encontrarás sumergido en videojuegos, disfrutando de la jardinería 🌱 o dedicándome a la práctica deportiva 🏀.",
    profile: "Con más de 4 años de experiencia en el desarrollo de páginas web y aplicaciones móviles utilizando tecnologías como Ionic, Flutter y Angular. Tuve el privilegio de formar parte en la creación del 'Sistema de selección de docentes' para Adex Datatrade, donde lideré el desarrollo del frontend utilizando Angular. Además, participé en el desarrollo de la aplicación móvil 'Mis Primeros Tres' para Fundación Baltazar y Nicolás, en la que tuve la responsabilidad de desarrollar todo el frontend utilizando Ionic, Angular y Firebase. También formé parte del equipo encargado del desarrollo de la aplicación móvil 'Alerta Vecinos' para la Municipalidad de Santa Maria del Mar, utilizando Flutter y las APIs de Google Maps, entre otras tecnologías.",
    experience: [
      {
        startDate: "2022 — Actualmente...",
        position: "Desarrollador web front-end & móvil",
        company: "Avanti Consultores",
        description: "Encargado de realizar el desarrollo fontend de plataformas web y movil usando las tecnologías Angular, Redux, Ionic,  (HTML, Typescript, JavaScript css sass...) he realizado proyectos como:"
      },
      {
        startDate: "2019 — 2021",
        position: "Desarrollador web front-end",
        company: "Municialidad de S.A.",
        description: "Encargado de mantener los sistems web de la municipalidad, usando las tecnologías PHP, Java, (HTML, Typescript, JavaScript css sass...)"
      }
    ],
    projects: [
      {
        image: "AdexDataTrade.png",
        title: "Dashboard Adex Datatrade",
        description: "Sistema de estadísticas de importaciones de Adex Datatrade, utilizando tecnologías como JavaScript, HTML y CSS para consumir las APIs y generar los gráficos estadísticos usando la librería Chart.js. Gracias a estas actualizaciones, la plataforma ahora ofrece una experiencia de usuario más intuitiva y personalizable, y permite un análisis más profundo y efectivo de los datos.",
        stack: ["JavaScript", "HTML", "CSS", "Chart.js", "C#"]
      },
      {
        image: "adex_instituto.png",
        title: "Sistema de evaluación, Instituto Adex",
        description: "He sido el responsable del frontend en el sistema de evaluación de docentes del Instituto Adex, en el cual se pueden realizar evaluaciones continuas y selecciones de docentes para el instituto. Utilicé herramientas como Angular, Material Angular y Redux para desarrollar una plataforma eficiente y fácil de usar para los usuarios. Gracias a estas tecnologías, la plataforma ahora ofrece una experiencia de usuario más fluida y personalizada.",
        stack: ["Angular", "Redux", "TypeScript", "SASS"]
      },
      {
        image: "AdexDataTrade.png",
        title: "Pasarela de pagos, Adex Datatrade",
        description: "En este proyecto, he tenido el papel de desarrollador Frontend, encargado de integrar y consumir las APIs necesarias para el correcto funcionamiento del sistema de pasarela de pago de  Adex con Niubiz. Además, he sido responsable de implementar las validaciones pertinentes para asegurar la seguridad de las transacciones y la confiabilidad del sistema.",
        stack: ["JavaScript", "HTML", "CSS", "C#"]
      },
      {
        image: "mis_primeros_tres.png",
        title: "Seguimiento de embarazo (Aplicación móvil)",
        description: "He tenido la oportunidad de desarrollar una aplicación móvil para la Fundación Baltazar y Nicolás utiliza tecnologías como Ionic, Angular y Firebase. A través de esta aplicación, las mujeres embarazadas pueden llevar un registro detallado de su salud y la de su bebé, incluyendo registrar médicas, exámenes de laboratorio, síntomas y otros factores relevantes.",
        stack: ["Ionic", "Angular", "TypeScript", "Firebase", "SASS"]
      },
      {
        image: "logo_sigo.png",
        title: "Sigo (Aplicación móvil)",
        description: "Me complace haber formado parte del equipo de desarrollo de esta aplicación dedicada a la contratación de servicios y venta de productos. Durante este proyecto, empleé tecnologías avanzadas como Ionic, Google Maps, Angular, Sass y Paypal, contribuyendo así a la creación de una plataforma eficiente y completa.",
        stack: ["Angular", "Ionic", "TypeScript", "Firebase", "Google Maps"]
      },
      {
        image: "lazo_de_ayuda.png",
        title: "Desarrollo del Tema WordPress, Fundación Lazo de Ayuda",
        description: "En el marco de este proyecto, tuve la oportunidad elaborar el diseño y desarrollo de un tema personalizado para WordPress destinado a la Fundación Lazo de Ayuda. Durante esta experiencia, implementé tecnologías clave como PHP, Vite, Sass y Tailwind, contribuyendo así a la mejora y modernización del sitio web de la organización.",
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
    career: "Frontend Developer Engineer",
    presentation: "I enjoy transforming complex problems into simple, attractive, and intuitive designs. Outside the programming field 👨‍💻, you will find me immersed in video games, enjoying gardening 🌱, or dedicating myself to sports practice 🏀.",
    profile: "With over 4 years of experience in web page and mobile application development using technologies such as Ionic, Flutter, and Angular. I had the privilege of being part of the creation of the 'Teacher Selection System' for Adex Datatrade, where I led the frontend development using Angular. I also participated in the development of the mobile application 'Mis Primeros Tres' for the Baltazar and Nicolás Foundation, where I was responsible for developing the entire frontend using Ionic, Angular, and Firebase. I also formed part of the team responsible for the development of the mobile application 'Alerta Vecinos' for the Municipality of Santa Maria del Mar, using Flutter and Google Maps APIs, among other technologies.",
    experience: [
      {
        startDate: "2022 — Currently...",
        position: "Frontend web & mobile developer",
        company: "Avanti Consultores",
        description: "Responsible for developing the frontend of web and mobile platforms using technologies such as Angular, Redux, Ionic, (HTML, Typescript, JavaScript, CSS, Sass...). I have carried out projects such as:"
      },
      {
        startDate: "2019 — 2021",
        position: "Frontend web developer",
        company: "Municialidad de S.A.",
        description: "Responsible for maintaining the municipal web systems, using technologies such as PHP, Java, (HTML, Typescript, JavaScript, CSS, Sass...)"
      }
    ],
    projects: [
      {
        image: "AdexDataTrade.png",
        title: "Adex Datatrade Dashboard",
        description: "Adex Datatrade import statistics system, using technologies such as JavaScript, HTML and CSS to consume APIs and generate statistical charts using the Chart.js library. Thanks to these updates, the platform now offers a more intuitive and customizable user experience, and allows for deeper and more effective data analysis.",
        stack: ["JavaScript", "HTML", "CSS", "Chart.js", "C#"]
      },
      {
        image: "adex_instituto.png",
        title: "Institute Adex evaluation system",
        description: "I have been responsible for the frontend in the teacher evaluation system of the Adex Institute, in which continuous evaluations and selections of teachers for the institute can be carried out. I used tools such as Angular, Angular Material and Redux to develop an efficient and easy-to-use platform for users. Thanks to these technologies, the platform now offers a smoother and more personalized user experience.",
        stack: ["Angular", "Redux", "TypeScript", "SASS"]
      },
      {
        image: "AdexDataTrade.png",
        title: "Payment gateway, Adex Datatrade",
        description: "In this project, I had the role of Frontend developer, in charge of integrating and consuming the APIs necessary for the correct functioning of the Adex payment gateway system with Niubiz. In addition, I have been responsible for implementing the relevant validations to ensure the security of transactions and the reliability of the system.",
        stack: ["JavaScript", "HTML", "CSS", "C#"]
      },
      {
        image: "mis_primeros_tres.png",
        title: "Pregnancy monitoring (Mobile application)",
        description: "I have had the opportunity to develop a mobile application for the Baltazar and Nicolás Foundation using technologies such as Ionic, Angular, and Firebase. Through this application, pregnant women can keep a detailed record of their health and that of their baby, including recording medical appointments, laboratory tests, symptoms, and other relevant factors.",
        stack: ["Ionic", "Angular", "TypeScript", "Firebase", "SASS"]
      },
      {
        image: "logo_sigo.png",
        title: "Sigo (Mobile application)",
        description: "I am pleased to have been part of the development team of this application dedicated to hiring services and selling products. During this project, I used advanced technologies such as Ionic, Google Maps, Angular, Sass, and Paypal, thus contributing to the creation of an efficient and complete platform.",
        stack: ["Angular", "Ionic", "TypeScript", "Firebase", "Google Maps"]
      },
      {
        image: "lazo_de_ayuda.png",
        title: "WordPress Theme Development, Lazo de Ayuda Foundation",
        description: "As part of this project, I had the opportunity to design and develop a custom theme for WordPress for the Lazo de Ayuda Foundation. During this experience, I implemented key technologies such as PHP, Vite, Sass, and Tailwind, thus contributing to the improvement and modernization of the organization's website.",
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
  return renderTemplate`${maybeRenderHead()}<div class="mt-14 columns-2 md:grid md:grid-cols-3"> <div class="break-inside-avoid"> <h4 class="font-bold mb-2 text-secondary-0">Secciones</h4> <ul class="[&>*]:mb-2"> <li><a href="/">${currentLocale === "en" ? "Home" : "Inicio"}</a></li> ${texts.menu.map((item) => renderTemplate`<li> <a class="text-primary-1000"${addAttribute(`${currentLocale === "en" ? "/en" : ""}/#${item.path}`, "href")}> ${item.label} </a> </li>`)} </ul> </div> <div class="break-inside-avoid"> <h4 class="font-bold mb-2 text-secondary-0">Cheatsheet</h4> <ul class="[&>*]:mb-2"> ${LISTPAGESID.map((item) => renderTemplate`<li> <a class="text-primary-1000"${addAttribute("/sheet/" + item.pageId, "href")}> ${item.title} </a> </li>`)} </ul> </div> <div class="break-inside-avoid"> <h4 class="font-bold mb-2 text-secondary-0">Utilities</h4> <ul> <li> <a class="text-primary-1000 blank" target="_blank" href="https://github.com/MiguelRoot/angular-sidebar-admin">
Angular Sidebar Admin
</a> </li> </ul> </div> </div>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/shared-astro/components/MenuFooter.astro", void 0);

const $$Astro$1 = createAstro("https://miguelkillki.com");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead()}<div class="flex pb-3 [&>*]:me-3 mt-4 md:pb-10 lg:mt-0"> <a href="https://www.linkedin.com/in/miguelkillki/" class="relative inline-flex items-center justify-center p-0.5 bg-gray-200 mb-1 overflow-hidden text-sm font-medium hover:text-primary-0 rounded-full group hover:bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-full"> ${renderComponent($$result, "IconApp", $$IconApp, { "name": "linkedin" })} </span> </a> <a href="https://github.com/MiguelRoot" class="relative inline-flex items-center justify-center p-0.5 bg-gray-200 mb-1 overflow-hidden text-sm font-medium hover:text-primary-0 rounded-full group hover:bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-full"> ${renderComponent($$result, "IconApp", $$IconApp, { "name": "github" })} </span> </a> <a href="https://twitter.com/MiguelKillki" class="relative inline-flex items-center justify-center p-0.5 bg-gray-200 mb-1 overflow-hidden text-sm font-medium hover:text-primary-0 rounded-full group hover:bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-full"> ${renderComponent($$result, "IconApp", $$IconApp, { "name": "twitter" })} </span> </a> <a href="https://www.instagram.com/miguelkillki/" class="relative inline-flex items-center justify-center p-0.5 bg-gray-200 mb-1 overflow-hidden text-sm font-medium hover:text-primary-0 rounded-full group hover:bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0" target="_blank"> <span class="relative p-3.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-full"> ${renderComponent($$result, "IconApp", $$IconApp, { "name": "instagram" })} </span> </a> </div>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/shared-astro/components/Social.astro", void 0);

const useMenuItem = (menuItem) => {
  const [item, setItem] = useState(menuItem);
  const toggleActive = () => {
    setItem((prevItem) => ({
      ...prevItem,
      active: !prevItem.active
    }));
  };
  const updateContent = (newContent) => {
    setItem((prevItem) => ({
      ...prevItem,
      content: newContent
    }));
  };
  const updateTitleAndCode = (code) => {
    setItem((prevItem) => ({
      ...prevItem,
      title: code.title,
      // Cambia el título
      code: code.code
      // Cambia el código
    }));
  };
  const updateState = (newState) => {
    setItem(newState);
  };
  return { item, toggleActive, updateContent, updateState, updateTitleAndCode };
};

const useTabStore = create((set) => ({
  activeTab: "",
  setActiveTab: (tabValue) => set({ activeTab: tabValue })
}));

const TabHeader = ({ value, children }) => {
  const { activeTab, setActiveTab } = useTabStore();
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick: () => setActiveTab(value),
      className: `flex  items-center justify-center py-[8px] px-4 rounded-[4px] text-primary-600 min-w-[80px] font-bold cursor-pointer ${value === activeTab ? "bg-primary-600 text-white" : ""}`,
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
Dropdown.Menu = ({ children, align = "left" }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown.Menu must be used within a Dropdown");
  }
  const { isOpen } = context;
  const alignmentClass = align === "right" ? "dropdown-menu-right" : "dropdown-menu-left";
  return isOpen ? /* @__PURE__ */ jsx("div", { className: `dropdown-menu ${alignmentClass}`, children }) : null;
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

const IconReact = ({ name, size = "24" }) => {
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

const TabContent = ({ value, children }) => {
  const { activeTab, setActiveTab } = useTabStore();
  return /* @__PURE__ */ jsx("div", { style: { display: value === activeTab ? "block" : "none" }, children });
};

const createHtml = ([html, css, js]) => {
  if (!html || !css || !js)
    return "";
  let htmlContent;
  let cssDefault = "";
  let javascriptMarkdownRef = "";
  let htmlMarkdownRef = "";
  if (html && html.code == "markdown") {
    htmlContent = marked(html.content);
    marked.setOptions({
      gfm: true,
      breaks: true
    });
    cssDefault = styleMarkDown;
    javascriptMarkdownRef = javascriptMarkdown;
    htmlMarkdownRef = htmlMarkdown;
  } else {
    htmlContent = html?.content;
  }
  return (
    /*html*/
    `<!DOCTYPE html>
  <html lang="en" onload="resizeIframe()">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style id="preview-style">
        ${styleBase}
        ${cssDefault}
        ${css?.content}
      </style>
    </head>
    <body>
      ${htmlMarkdownRef}
      <div  id="markdown-content">
      ${htmlContent}
      </div>
      <script type="module">
        ${js?.content}
        function resizeIframe() {
          const document = window.parent.document;
          const iframe = document.getElementById('widget'); 
          iframe.style.height = (document.documentElement.scrollHeight + 18) + 'px';
          console.log(iframe);
        }
      <\/script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs/loader.js"><\/script>
      <script>
        ${javascriptMarkdownRef}
      <\/script>
    </body>
  </html>`
  );
};
const hashedCode = (datahashed) => {
  const hashedCode2 = encode(JSON.stringify(datahashed));
  return hashedCode2;
};
const onCopy = async (document) => {
  try {
    await navigator.clipboard.writeText(document);
    await navigator.clipboard.writeText(document);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
const copyToClipboard = async (data) => {
  const hashed = hashedCode(data);
  onCopy(hashed);
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
const hashedDecode2 = (hash) => {
  try {
    const [isvalidJson, data] = isJSONValid(hash);
    if (isvalidJson) {
      if (data.version === "1.0.0") {
        return data;
      }
    }
    const databefore = JSON.parse(decode(hash));
    const config = databefore.config;
    const version = databefore.version;
    const languages = databefore.languages;
    const [html, css, javascript] = languages;
    const languagesjson = {
      html: {
        codeId: "HTML",
        title: Object.values(html).find((language) => {
          return language.active;
        })?.title || "HTML",
        active: Object.values(html).some((language) => language.active),
        content: Object.values(html).find((language) => {
          return language.active;
        })?.content || "",
        code: Object.values(html).find((language) => {
          return language.active;
        })?.code || "html",
        codes: [
          { title: "HTML", code: "html" },
          { title: "Markdown", code: "markdown" },
          { title: "PUG", code: "pug" }
        ]
      },
      css: {
        codeId: "CSS",
        title: Object.values(css).find((language) => {
          return language.active;
        })?.title || "CSS",
        active: Object.values(css).some((language) => language.active),
        content: Object.values(css).find((language) => {
          if (language.active) {
            return language.content;
          }
        })?.content || "",
        code: Object.values(css).find((language) => {
          return language.code;
        })?.code || "css",
        codes: [
          { title: "CSS", code: "css" },
          { title: "SCSS", code: "scss" }
        ]
      },
      javascript: {
        codeId: "JS",
        title: Object.values(javascript).find((language) => {
          return language.active;
        })?.title || "JS",
        active: Object.values(javascript).some(
          (language) => language.active
        ),
        content: Object.values(javascript).find((language) => {
          return language.active;
        })?.content || "",
        code: Object.values(javascript).find((language) => {
          return language.active;
        })?.code || "javascript",
        codes: [
          { title: "JS", code: "javascript" },
          { title: "TypeScript", code: "typescript" }
        ]
      }
    };
    const response = {
      config,
      version: version || "1.0.0",
      languages: languagesjson
    };
    return response;
  } catch (error) {
    return {
      version: "1.0.0",
      config: {
        splitSize: [50, 50],
        setting: true,
        view: "html",
        sizeWindow: "auto"
      },
      languages: {
        html: {
          codeId: "HTML",
          title: "HTML",
          active: true,
          content: "",
          code: "html",
          codes: [
            { title: "HTML", code: "html" },
            { title: "Markdown", code: "markdown" },
            { title: "PUG", code: "pug" }
          ]
        },
        css: {
          codeId: "CSS",
          title: "CSS",
          active: false,
          content: "",
          code: "css",
          codes: [
            { title: "CSS", code: "css" },
            { title: "SCSS", code: "scss" }
          ]
        },
        javascript: {
          codeId: "JS",
          title: "JS",
          active: false,
          content: "",
          code: "javascript",
          codes: [
            { title: "JS", code: "javascript" },
            { title: "TypeScript", code: "typescript" }
          ]
        }
      }
    };
  }
};
const ContentEditor = ({
  updateHtml,
  defaultLanguage,
  iniValue
}) => {
  const { isFullscreen, toggleFullscreen } = useFullscreenStore();
  const handleEditorChange = (value) => {
    if (value !== void 0) {
      updateHtml(value);
    }
  };
  return /* @__PURE__ */ jsx(
    Editor,
    {
      theme: "vs-light",
      height: isFullscreen ? "calc(100vh - 47px)" : "70vh",
      defaultLanguage,
      value: iniValue,
      onChange: handleEditorChange,
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
  output,
  setting
}) => {
  const iframeRef = useRef(null);
  const { isFullscreen, toggleFullscreen } = useFullscreenStore();
  const handleIframeResize = () => {
    console.log(setting, "setting");
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
  }, [output]);
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
          frameBorder: "0",
          width: "100%",
          scrolling: "auto",
          srcDoc: output,
          style: {
            height: "100%"
          }
        }
      )
    }
  );
};
const getAllActiveTitles = (groups) => {
  return groups.reduce((acc, lang) => {
    if (lang.active) {
      acc.push(lang.codeId);
      return acc;
    }
    return acc;
  }, []);
};
const CodeEditor = ({
  dataCode,
  titleCode
}) => {
  const { config, languages, version } = hashedDecode2(dataCode);
  const { html, css, javascript } = languages;
  const [output, setOutput] = useState("");
  const { activeTab, setActiveTab } = useTabStore();
  const [configSetting, setConfigSetting] = useState(config);
  const { isFullscreen, toggleFullscreen } = useFullscreenStore();
  const htmlGroup2 = useMenuItem(html);
  const cssGroup2 = useMenuItem(css);
  const jsGroup2 = useMenuItem(javascript);
  useEffect(() => {
    htmlGroup2.updateState(html);
    cssGroup2.updateState(css);
    jsGroup2.updateState(javascript);
    setConfigSetting(config);
  }, [dataCode]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutput(createHtml([htmlGroup2.item, cssGroup2.item, jsGroup2.item]));
    }, 300);
    const firstActiveTitle = getAllActiveTitles([
      htmlGroup2.item,
      cssGroup2.item,
      jsGroup2.item
    ]);
    const tabActive = firstActiveTitle.some((title) => title === activeTab);
    if (!tabActive) {
      setActiveTab(firstActiveTitle[0] || "");
    }
    return () => clearTimeout(timeout);
  }, [htmlGroup2.item, cssGroup2.item, jsGroup2.item]);
  const toggleSetting = () => {
    console.log("click");
    setConfigSetting((prevConfig) => ({
      splitSize: prevConfig.setting ? [0, 100] : [50, 50],
      setting: !prevConfig.setting
    }));
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
        /* @__PURE__ */ jsxs("div", { className: "g-border-b flex justify-between items-center text-[14px] pb-1", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                paddingLeft: isFullscreen ? "8px" : "auto"
              },
              className: "flex-grow basis-0",
              children: configSetting.setting && /* @__PURE__ */ jsxs("div", { className: "flex ", children: [
                [htmlGroup2.item, cssGroup2.item, jsGroup2.item].map(
                  (lang) => {
                    if (lang.active) {
                      return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(TabHeader, { value: lang.codeId, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                        lang.codeId,
                        /* @__PURE__ */ jsx("span", { className: "ms-1 text-[12px]", children: lang.codeId !== lang.title && /* @__PURE__ */ jsxs("span", { children: [
                          "(",
                          lang.title,
                          ")"
                        ] }) })
                      ] }) }) }, lang.codeId);
                    } else {
                      return "";
                    }
                  }
                ),
                /* @__PURE__ */ jsxs(Dropdown, { children: [
                  /* @__PURE__ */ jsx(Dropdown.Toggle, { className: "-rotate-90", children: /* @__PURE__ */ jsx(IconReact, { name: "arrow-up" }) }),
                  /* @__PURE__ */ jsx(Dropdown.Menu, { children: /* @__PURE__ */ jsx("div", { children: [htmlGroup2, cssGroup2, jsGroup2].map((lang) => {
                    return /* @__PURE__ */ jsx("div", { className: "item", children: /* @__PURE__ */ jsx("button", { onClick: () => lang.toggleActive(), children: /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: `p-1 flex items-center text-primary-0`,
                        children: [
                          lang.item.active ? /* @__PURE__ */ jsx(IconReact, { size: "20", name: "close" }) : (
                            // <IconReact size="20" name="plus" />
                            /* @__PURE__ */ jsx(
                              IconReact,
                              {
                                size: "20",
                                name: lang.item.code
                              }
                            )
                          ),
                          /* @__PURE__ */ jsxs("div", { className: "ps-3", children: [
                            lang.item.codeId,
                            " "
                          ] })
                        ]
                      }
                    ) }) }, lang.item.codeId);
                  }) }) })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-secondary-950", children: [
            "(",
            titleCode,
            ")"
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
                    onClick: () => toggleSetting(),
                    className: "p-2 hover:bg-secondary-200 rounded-md",
                    children: configSetting.setting ? /* @__PURE__ */ jsx(IconReact, { name: "code", size: "small" }) : /* @__PURE__ */ jsx(IconReact, { name: "view", size: "small" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "p-2 hover:bg-secondary-200 rounded-md",
                    onClick: toggleFullscreen,
                    children: /* @__PURE__ */ jsx(IconReact, { name: "fullscreen", size: "small" })
                  }
                ),
                /* @__PURE__ */ jsxs(Dropdown, { children: [
                  /* @__PURE__ */ jsx(Dropdown.Toggle, { children: /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-secondary-100 rounded-md", children: /* @__PURE__ */ jsx(IconReact, { name: "menu-kebab", size: "small" }) }) }),
                  /* @__PURE__ */ jsxs(Dropdown.Menu, { align: "right", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-gray-100/60 rounded-md", children: /* @__PURE__ */ jsx(
                      Dropdown.Item,
                      {
                        onClick: () => {
                          copyJson({
                            version,
                            config: configSetting,
                            languages: {
                              html: htmlGroup2.item,
                              css: cssGroup2.item,
                              javascript: jsGroup2.item
                            }
                          });
                        },
                        children: "Copiar json"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "p-2 hover:bg-gray-100/60 rounded-md", children: /* @__PURE__ */ jsx(
                      Dropdown.Item,
                      {
                        onClick: () => {
                          copyToClipboard({
                            version,
                            config: configSetting,
                            languages: [
                              htmlGroup2.item,
                              cssGroup2.item,
                              jsGroup2.item
                            ]
                          });
                        },
                        children: "Copiar hash"
                      }
                    ) })
                  ] })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { style: { height: isFullscreen ? "100%" : "auto" }, children: /* @__PURE__ */ jsxs(
          Split,
          {
            className: "wrap",
            sizes: configSetting.splitSize,
            minSize: 0,
            expandToMin: false,
            gutterSize: configSetting.setting ? 8 : 0,
            gutterAlign: "center",
            snapOffset: 30,
            dragInterval: 1,
            direction: "horizontal",
            cursor: "col-resize",
            children: [
              /* @__PURE__ */ jsx("div", { children: [htmlGroup2, cssGroup2, jsGroup2].map((lang) => {
                return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(TabContent, { value: lang.item.codeId, children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
                  configSetting.setting && /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-0 z-10", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
                    /* @__PURE__ */ jsx(Dropdown.Toggle, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center px-2 py-[2px] rounded-md text-[12px] bg-white/95 border border-primary-0 text-primary-0", children: [
                      lang.item.title,
                      " ",
                      /* @__PURE__ */ jsx(
                        IconReact,
                        {
                          size: "small",
                          name: "arrow-up"
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsx(Dropdown.Menu, { align: "right", children: lang.item.codes.map((code) => {
                      return /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `p-2 hover:bg-gray-100/80 rounded-md my-1 cursor-pointer text-sm ${code.code === lang.item.code ? "bg-gray-100/80" : ""}`,
                          children: /* @__PURE__ */ jsx(
                            Dropdown.Item,
                            {
                              onClick: () => lang.updateTitleAndCode(code),
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
                      updateHtml: (newContent) => lang.updateContent(newContent),
                      defaultLanguage: lang.item.code,
                      iniValue: lang.item.content
                    }
                  )
                ] }) }) }, lang.item.codeId);
              }) }),
              /* @__PURE__ */ jsx(
                IframePreview,
                {
                  output,
                  setting: configSetting.setting
                }
              )
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
function aggregateData(dataSheet, titleSelector, itemFields) {
  if (!Array.isArray(dataSheet))
    return [];
  const groupedResult = [];
  let currentGroup = null;
  for (const row of dataSheet) {
    if (!row || row.length === 0) {
      continue;
    }
    if (row[0] === titleSelector.title) {
      if (currentGroup) {
        groupedResult.push(currentGroup);
      }
      currentGroup = {
        title: row[1] || "",
        // Asegurarse de que no sea undefined
        items: []
      };
    } else if (currentGroup) {
      const item = {};
      for (let i = 0; i < itemFields.length; i++) {
        item[itemFields[i]] = row[i + 1] || null;
      }
      currentGroup.items.push(item);
    }
  }
  if (currentGroup) {
    groupedResult.push(currentGroup);
  }
  return groupedResult;
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
      const columns = googleSheetData(data, 0, ["A", "B", "C"]);
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
  const outputArray = aggregateData(dataSheet, { title: "#" }, [
    "subtitle",
    "code"
  ]);
  return /* @__PURE__ */ jsxs("div", { children: [
    isLoading && /* @__PURE__ */ jsx("div", { className: "text-lg text-primary-0 flex justify-center w-full", children: /* @__PURE__ */ jsx("div", { className: "loading", children: "Cargando" }) }),
    !isLoading && /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "md:columns-2 lg:columns-4 text-sm gap-4 mb-14", children: outputArray.map(({ title, items }, index) => {
        return /* @__PURE__ */ jsxs("div", { className: "break-inside-avoid mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "g-border-b", children: /* @__PURE__ */ jsx("span", { className: "text-white inline-block pb-1 pt-2 px-4 font-bold bg-primary-0 rounded-t-md  rounded-sm", children: title }) }),
          /* @__PURE__ */ jsx("ul", { className: " [&>*:nth-child(even)]:bg-primary-100", children: items.map(
            ({ subtitle, description = null, code }, indexChild) => {
              return /* @__PURE__ */ jsx(
                "li",
                {
                  className: active === index.toString() + indexChild.toString() ? "text-white font-bold px-3 py-1 !bg-secondary-0 cursor-pointer text-shadow  rounded-sm" : "font-bold px-3 py-1 cursor-pointer",
                  onClick: () => {
                    handleScroll();
                    handleActive(
                      index.toString() + indexChild.toString(),
                      {
                        subtitle,
                        description,
                        code
                      }
                    );
                  },
                  children: subtitle
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
            className: "absolute top-[-120px] opacity-30 z-[-1]",
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
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": LISTPAGESID.find((item) => item.pageId === id)?.title || SITE_TITLE, "description": LISTPAGESID.find((item) => item.pageId === id)?.description || SITE_DESCRIPTION })}${renderHead()}</head> <body> <main class="mx-auto px-3 md:px-8 max-w-screen-xl"> <svg class="fixed z-10 top-[-450px] start-[-300px] opacity-30 pointer-events-none" width="1020" height="932" viewBox="0 0 1020 932" fill="none" xmlns="http://www.w3.org/2000/svg"> <g opacity="0.3" filter="url(#filter0_f_8710_4643)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M864.057 486.614C846.653 541.287 806.82 583.111 770.741 627.698C739.657 666.112 706.529 700.357 667.059 730.064C623.094 763.155 581.632 809.207 526.674 811.397C471.538 813.594 425.235 772.698 379.685 741.515C336.858 712.197 306.364 671.8 269.447 635.304C218.92 585.354 131.721 557.014 121.837 486.614C112.283 418.556 181.643 365.732 224.009 311.657C261.557 263.732 303.468 221.284 355.036 188.966C407.988 155.781 464.867 112.886 526.674 121.978C588.379 131.055 614.616 209.842 671.469 235.515C737.749 265.445 836.532 224.162 880.816 281.9C923.187 337.144 885.182 420.249 864.057 486.614Z" fill="#8873EF"></path> </g> <defs> <filter id="filter0_f_8710_4643" x="0.94458" y="0.740356" width="1019.06" height="930.741" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_8710_4643"></feGaussianBlur> </filter> </defs> </svg> <div class="mt-10"> <a href="/"> <div class="relative inline-flex items-center justify-center p-0.5 mb-1 overflow-hidden text-sm font-medium text-primary-0 rounded-full group bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0"> <span class="relative p-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.4375 18.75L4.6875 12L11.4375 5.25M5.625 12H19.3125" stroke="#F91111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span> </div> </a> </div> <div> <!-- {JSON.stringify(listIds)} --> <h1 class="font-black text-primary-0 text-4xl md:text-5xl mb-12 mt-7"> ${LISTPAGESID.map((item) => {
    if (item.pageId === id) {
      return item.title;
    }
  })} </h1> </div> <!-- {id} --> ${renderComponent($$result, "Content", Content, { "idSheet": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/BySna/Documents/killki/work/mypage/src/pages/sheet/Content", "client:component-export": "default" })} <!-- <MyComponent client:load /> --> <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-16"> <div class="mt-14"> ${renderComponent($$result, "Social", $$Social, {})} </div> ${renderComponent($$result, "MenuFooter", $$MenuFooter, {})} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
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

export { $$Social as $, LANG as L, _id_ as _, $$MenuFooter as a, i18n as i };
