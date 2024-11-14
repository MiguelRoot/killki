import { useState, useEffect, type FC, useRef } from "react";
import { encode, decode } from "js-base64";
import Split from "react-split";
import Editor from "@monaco-editor/react";
import TabContent from "../../react/tab/TabContent";
import TabHeader from "../../react/tab/TabHeader";

import Dropdown from "../../react/components/Dropdown/Dropdown";
import { marked, use } from "marked";
import { styleBase, styleMarkDown } from "./defaultStyle";
import useMenuItem, { type MenuItemType } from "./useMenuItem";
import { htmlMarkdown, javascriptMarkdown } from "./editor/mardown";
import { useFullscreenStore } from "./editor/useFullscreen";
import { useTabStore } from "../../react/tab/TabContext";
import ReactIcon from "../../react/components/Icon/IconApp";
import { MONACO_BASE_PATH } from "../../content/config";
// const ts = require("typescript");
import ts from "typescript";
import type {
  IConfig,
  IStoreSheets,
  IStacks,
  IIndexStack,
  ICode,
  ILanguage,
  IContent,
  IIndexLanguage,
} from "./editor/editor.model";
import { useStackStore } from "./editor/useStackStore";
import { useContentStore, type IRollContent } from "./editor/useContentStore";
import { useConfigStore } from "./editor/useConfigStore";
interface ComponentThatSetsHtmlProps {
  // updateHtml: (newHtml: string) => void;
  indexLang: IIndexLanguage;
  codeId: string;
  defaultLanguage: string; // Nueva prop para configurar el lenguaje por defecto
  iniValue: string;
}

const transpileTypeScriptToJavaScript = (typeScriptCode: string) => {
  const result = ts.transpileModule(typeScriptCode, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  return result.outputText;
};

function previewFactory(indexStack: IIndexStack, contents: IRollContent) {
  if (indexStack === "angular") {
    // Código TypeScript

    // import { Component } from "@angular/core";
    // @Component({
    //   selector: "app-my",
    //   template: ` <div class="container">{{ name }}</div> `,
    // })
    // class MyComponent {
    //   name: string = "home";
    //   constructor() {}

    //   ngOnInit() {}
    // }
    // const DECLARATIONS = [MyComponent]

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

    // Mapeo de los módulos de Angular a las referencias UMD
    const angularUMDMap = {
      "@angular/core": "ng.core",
      "@angular/common": "ng.common",
      "@angular/platform-browser": "ng.platformBrowser",
      "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
      "@angular/compiler": "ng.compiler",
      "@angular/forms": "ng.forms",
    };

    // Función para hacer el reemplazo dinámico
    for (const [angularModule, umdReference] of Object.entries(angularUMDMap)) {
      const regex = new RegExp(
        `import\\s*{([^}]*)}\\s*from\\s*['"]${angularModule}['"];?`,
        "g"
      );
      joinCode = joinCode.replace(regex, (_, imports) => {
        const formattedImports = imports
          .split(",")
          .map((item: any) => item.trim())
          .join(", ");
        return `const { ${formattedImports} } = ${umdReference};`;
      });
    }

    // Transforma el código TypeScript a JavaScript
    const jsCode = ts.transpileModule(joinCode, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    }).outputText;

    return /*html*/ `
        <html>
          <style>${contents.css?.content}</style>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/typescript/4.9.5/typescript.min.js"></script>

            <!-- Angular and Dependencies -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.0/zone.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.5/core.min.js"></script>

            <!-- Angular UMD Modules -->
            <script src="https://unpkg.com/@angular/core@12.2.17/bundles/core.umd.js"></script>
            <script src="https://unpkg.com/@angular/common@12.2.17/bundles/common.umd.js"></script>
            <script src="https://unpkg.com/@angular/compiler@12.2.17/bundles/compiler.umd.js"></script>
            <script src="https://unpkg.com/@angular/platform-browser@12.2.17/bundles/platform-browser.umd.js"></script>
            <script src="https://unpkg.com/@angular/platform-browser-dynamic@12.2.17/bundles/platform-browser-dynamic.umd.js"></script>

          </head>
            <body>
              <app-root></app-root>
              <script>
                ${jsCode}
              </script>
            </body>
        </html>
      `;
  } else if (indexStack === "react") {
    return /*html*/ `
        <html>
          <style>${contents.css?.content}</style>
          <body>${contents.html?.content}</body>
          <script>${contents.javascript?.content}</script>
        </html>
      `;
  } else if (indexStack === "vanillaJs") {
    return /*html*/ `
        <html>
          <body></body>
          <script>${contents.javascript?.content}</script>
        </html>
      `;
  } else if (indexStack === "vanillaTs") {
    return /*html*/ `
        <html>
          <body></body>
          <script>${contents.javascript?.content}</script>
        </html>
      `;
  } else if (indexStack === "static") {
    return /*html*/ `
        <html>
          <style>${contents.css?.content}</style>
          <body>${contents.html?.content}</body>
          <script>${contents.javascript?.content}</script>
        </html>
      `;
  } else {
    const mardownhtml: string = contents.html?.content || "";
    const htmlContent = marked(mardownhtml);
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
    return /*html*/ `
        <html lang="es" onload="resizeIframe()">
          <style>${styleBase} ${styleMarkDown}</style>
          <body>
            ${htmlMarkdown}
            <div id="markdown-content">
              ${htmlContent}
            </div>
          </body>
          <script src="${MONACO_BASE_PATH}/loader.js"></script>
          <script  type="module">
            ${javascriptMarkdown}
            function resizeIframe() {
              const document = window.parent.document;
              const iframe = document.getElementById('widget'); 
              iframe.style.height = (document.documentElement.scrollHeight + 18) + 'px';
              console.log(iframe);
            }
          </script>
        </html>
      `;
  }
}

const createHtml = ([html, css, js]: MenuItemType[]) => {
  console.log(html, css, js, "html, css, js");
  if (!html || !css || !js) return "";

  // default content
  let htmlContent;
  let cssContent = "";
  let jsContent = "";

  // Ejemplo de uso:
  const tsCode = `
  const saludo: string = 'Hola, mundo!';
  console.log(saludo);
`;

  const jsCode = transpileTypeScriptToJavaScript(tsCode);
  console.log(jsCode, "jsCode");

  // markdown
  let javascriptMarkdownRef = "";
  let htmlMarkdownRef = "";
  let cssMarkdownRef = "";

  if (html && html.code == "markdown") {
    htmlContent = marked(html.content);
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
    // console.log(htmlContent, "htmlContent");
    cssMarkdownRef = styleMarkDown;
    javascriptMarkdownRef = javascriptMarkdown;
    htmlMarkdownRef = htmlMarkdown;
  } else {
    htmlContent = html?.content;
  }

  return /*html*/ `<!DOCTYPE html>
  <html lang="en" onload="resizeIframe()">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style id="preview-style">
        ${styleBase}
        ${cssMarkdownRef}
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
      </script>
      <script src="${MONACO_BASE_PATH}/loader.js"></script>
      <script type="module">
        ${javascriptMarkdownRef}
      </script>
    </body>
  </html>`;
};

const hashedCode = (datahashed: any): string => {
  const hashedCode = encode(JSON.stringify(datahashed));
  return hashedCode;
};

const onCopy = async (document: any) => {
  try {
    await navigator.clipboard.writeText(document);
    await navigator.clipboard.writeText(document as string);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

const copyToClipboard = async (data: any) => {
  const hashed = hashedCode(data);
  onCopy(hashed);
};

const copyJson = async (data: any) => {
  const hashed = JSON.stringify(data);
  onCopy(hashed);
};

function isJSONValid(cadena: string): [boolean, any] {
  try {
    const resParse = JSON.parse(cadena);
    return [true, resParse];
  } catch (e) {
    return [false, null];
  }
}

// const hashedDecode2 = (hash: string) => {
//   const html = { title: "HTML", code: "html" };
//   const css = { title: "CSS", code: "css" };
//   const scss = { title: "SCSS", code: "scss" };
//   const javascript = { title: "JS", code: "javascript" };
//   const typescript = { title: "TS", code: "typescript" };
//   const markdown = { title: "Markdown", code: "markdown" };
//   const typescriptReact = { title: "TSX", code: "typescript" };

//   const configDefault = {
//     splitSize: [50, 50],
//     setting: true,
//     sizeWindow: "auto",
//     stack: "notes",

//     stacks: {
//       angular: {
//         icon: "angular",
//         title: "Angular",
//         subtitle: "Typescript",
//         console: true,
//         view: true,
//         language: {
//           html: {
//             codeId: "HTML",
//             content: "",
//             active: "html",
//             codes: [html],
//           },
//           css: {
//             codeId: "CSS",
//             content: "",
//             active: "scss",
//             codes: [scss, css],
//           },
//           javascript: {
//             codeId: "JS",
//             content: "",
//             active: "typescript",
//             codes: [typescript],
//           },
//         },
//       },

//       react: {
//         icon: "react",
//         title: "React",
//         subtitle: "Typescript",
//         console: true,
//         view: true,
//         language: {
//           html: {
//             codeId: "HTML",
//             content: "",
//             active: "html",
//             codes: [html],
//           },
//           css: {
//             codeId: "CSS",
//             content: "",
//             active: "scss",
//             codes: [scss, css],
//           },
//           javascript: {
//             codeId: "JS",
//             content: "",
//             active: "typescript",
//             codes: [typescriptReact],
//           },
//         },
//       },

//       vanillaJs: {
//         icon: "javascript",
//         title: "Vanilla",
//         subtitle: "Javascript",
//         console: true,
//         view: false,
//         language: {
//           javascript: {
//             codeId: "JS",
//             content: "",
//             active: "javascript",
//             codes: [javascript],
//           },
//         },
//       },

//       vanillaTs: {
//         icon: "typescript",
//         title: "Vanilla",
//         subtitle: "Typescript",
//         console: true,
//         view: false,
//         language: {
//           javascript: {
//             codeId: "JS",
//             content: "",
//             active: "typescript",
//             codes: [typescript],
//           },
//         },
//       },

//       static: {
//         icon: "html5",
//         title: "Static",
//         subtitle: "HTML/CSS/JS",
//         console: true,
//         view: true,
//         language: {
//           html: {
//             codeId: "HTML",
//             content: "",
//             active: "html",
//             codes: [html],
//           },
//           css: {
//             codeId: "CSS",
//             content: "",
//             active: "css",
//             codes: [css, scss],
//           },
//           javascript: {
//             codeId: "JS",
//             content: "",
//             active: "javascript",
//             codes: [javascript],
//           },
//         },
//       },

//       notes: {
//         icon: "markdown",
//         title: "Notes",
//         subtitle: "Markdown",
//         console: false,
//         view: false,
//         language: {
//           html: {
//             codeId: "HTML",
//             content: "",
//             active: "markdown",
//             codes: [markdown],
//           },
//         },
//       },
//     },
//   };

//   try {
//     const [isvalidJson, data] = isJSONValid(hash);
//     if (isvalidJson) {
//       if (data.version === "1.0.0") {
//         return data;
//       }
//     }

//     const databefore = JSON.parse(decode(hash));
//     const config = databefore.config;
//     const version = databefore.version;
//     const languages = databefore.languages;
//     const [html, css, javascript] = languages;

//     const languagesjson = {
//       html: {
//         codeId: "HTML",
//         title:
//           Object.values<any>(html).find((language) => {
//             return language.active;
//           })?.title || "HTML",
//         active: Object.values<any>(html).some((language) => language.active),
//         content:
//           Object.values<any>(html).find((language) => {
//             return language.active;
//           })?.content || "",
//         code:
//           Object.values<any>(html).find((language: any) => {
//             return language.active;
//           })?.code || "html",
//         codes: [
//           { title: "HTML", code: "html" },
//           { title: "Markdown", code: "markdown" },
//         ],
//       },
//       css: {
//         codeId: "CSS",
//         title:
//           Object.values<any>(css).find((language: any) => {
//             return language.active;
//           })?.title || "CSS",
//         active: Object.values(css).some((language: any) => language.active),
//         content:
//           Object.values<any>(css).find((language) => {
//             if (language.active) {
//               return language.content;
//             }
//           })?.content || "",
//         code:
//           Object.values<any>(css).find((language: any) => {
//             return language.code;
//           })?.code || "css",
//         codes: [
//           { title: "CSS", code: "css" },
//           { title: "SCSS", code: "scss" },
//         ],
//       },
//       javascript: {
//         codeId: "JS",
//         title:
//           Object.values<any>(javascript).find((language) => {
//             return language.active;
//           })?.title || "JS",
//         active: Object.values(javascript).some(
//           (language: any) => language.active
//         ),
//         content:
//           Object.values<any>(javascript).find((language) => {
//             return language.active;
//           })?.content || "",
//         code:
//           Object.values<any>(javascript).find((language: any) => {
//             return language.active;
//           })?.code || "javascript",
//         codes: [
//           { title: "JS", code: "javascript" },
//           { title: "TypeScript", code: "typescript" },
//         ],
//       },
//     };
//     const response = {
//       config: { ...configDefault, ...config },
//       version: version || "1.0.0",
//       languages: languagesjson,
//     };
//     return response;
//   } catch (error) {
//     return {
//       version: "2.0.0",
//       config: configDefault,
//       languages: {
//         html: {
//           codeId: "HTML",
//           title: "HTML",
//           active: true,
//           content: "",
//           code: "html",
//           codes: [
//             { title: "HTML", code: "html" },
//             { title: "Markdown", code: "markdown" },
//           ],
//         },
//         css: {
//           codeId: "CSS",
//           title: "CSS",
//           active: false,
//           content: "",
//           code: "css",
//           codes: [
//             { title: "CSS", code: "css" },
//             { title: "SCSS", code: "scss" },
//           ],
//         },
//         javascript: {
//           codeId: "JS",
//           title: "JS",
//           active: false,
//           content: "",
//           code: "javascript",
//           codes: [
//             { title: "JS", code: "javascript" },
//             { title: "TypeScript", code: "typescript" },
//           ],
//         },
//       },
//     };
//   }
// };

const hashedDecode3 = (dataRes: string): IStoreSheets => {
  const [valid, dataResObject] = isJSONValid(dataRes);
  console.log("dataResObject v3", dataResObject);

  const html: ICode = { title: "HTML", code: "html" };
  const css: ICode = { title: "CSS", code: "css" };
  const scss: ICode = { title: "SCSS", code: "scss" };
  const javascript: ICode = { title: "JS", code: "javascript" };
  const typescript: ICode = { title: "TS", code: "typescript" };
  const markdown: ICode = { title: "Markdown", code: "markdown" };
  const typescriptReact: ICode = { title: "TSX", code: "typescript" };

  if (valid && dataResObject?.version === "1.0.0") {
    const markdownActive = dataResObject.languages.html.code === "markdown";
    const stack = markdownActive ? "notes" : "static";

    console.log("dataResObject 😤😤😤", dataResObject);

    const newObject: any = {
      version: "2.0.0",
      config: {
        splitSize: dataResObject.config.splitSize,
        setting: dataResObject.config.setting,
        sizeWindow: "auto",
        stack: stack,
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
              codes: [html],
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "scss",
              codes: [scss, css],
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "typescript",
              codes: [typescript],
            },
          },
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
              codes: [html],
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "scss",
              codes: [scss, css],
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "typescript",
              codes: [typescriptReact],
            },
          },
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
              codes: [javascript],
            },
          },
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
              codes: [typescript],
            },
          },
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
              codes: [html],
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "css",
              codes: [css, scss],
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "javascript",
              codes: [javascript],
            },
          },
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
              codes: [markdown],
            },
          },
        },
      },
    };

    // const stackData = newObject.config.stack;
    if (stack === "notes") {
      newObject.stacks[stack].language.html.content =
        dataResObject.languages.html.content;
      newObject.stacks[stack].language.html.active = "markdown";
    } else {
      newObject.stacks[stack].language.html.content =
        dataResObject.languages.html.content;
      newObject.stacks[stack].language.html.active = "html";

      newObject.stacks[stack].language.css.content =
        dataResObject.languages.css.content;
      newObject.stacks[stack].language.css.active = "css";

      newObject.stacks[stack].language.javascript.content =
        dataResObject.languages.javascript.content;
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
        stack: "notes",
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
              codes: [html],
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "scss",
              codes: [scss, css],
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "typescript",
              codes: [typescript],
            },
          },
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
              codes: [html],
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "scss",
              codes: [scss, css],
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "typescript",
              codes: [typescriptReact],
            },
          },
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
              codes: [javascript],
            },
          },
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
              codes: [typescript],
            },
          },
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
              codes: [html],
            },
            css: {
              codeId: "CSS",
              content: "",
              active: "css",
              codes: [css, scss],
            },
            javascript: {
              codeId: "JS",
              content: "",
              active: "javascript",
              codes: [javascript],
            },
          },
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
              codes: [markdown],
            },
          },
        },
      },
    };
  }

  // const dataObject = {
  //   version: "2.0.0",
  //   config: {
  //     splitSize: [50, 50],
  //     setting: true,
  //     sizeWindow: "auto",
  //     stack: "notes",
  //   },
  //   stacks: {
  //     angular: {
  //       icon: "angular",
  //       title: "Angular",
  //       subtitle: "Typescript",
  //       console: true,
  //       view: true,
  //       language: {
  //         html: {
  //           codeId: "HTML",
  //           content: "",
  //           active: "html",
  //           codes: [html],
  //         },
  //         css: {
  //           codeId: "CSS",
  //           content: "",
  //           active: "scss",
  //           codes: [scss, css],
  //         },
  //         javascript: {
  //           codeId: "JS",
  //           content: "",
  //           active: "typescript",
  //           codes: [typescript],
  //         },
  //       },
  //     },

  //     react: {
  //       icon: "react",
  //       title: "React",
  //       subtitle: "Typescript",
  //       console: true,
  //       view: true,
  //       language: {
  //         html: {
  //           codeId: "HTML",
  //           content: "",
  //           active: "html",
  //           codes: [html],
  //         },
  //         css: {
  //           codeId: "CSS",
  //           content: "",
  //           active: "scss",
  //           codes: [scss, css],
  //         },
  //         javascript: {
  //           codeId: "JS",
  //           content: "",
  //           active: "typescript",
  //           codes: [typescriptReact],
  //         },
  //       },
  //     },

  //     vanillaJs: {
  //       icon: "javascript",
  //       title: "Vanilla",
  //       subtitle: "Javascript",
  //       console: true,
  //       view: false,
  //       language: {
  //         javascript: {
  //           codeId: "JS",
  //           content: "",
  //           active: "javascript",
  //           codes: [javascript],
  //         },
  //       },
  //     },

  //     vanillaTs: {
  //       icon: "typescript",
  //       title: "Vanilla",
  //       subtitle: "Typescript",
  //       console: true,
  //       view: false,
  //       language: {
  //         javascript: {
  //           codeId: "JS",
  //           content: "",
  //           active: "typescript",
  //           codes: [typescript],
  //         },
  //       },
  //     },

  //     static: {
  //       icon: "html5",
  //       title: "Static",
  //       subtitle: "HTML/CSS/JS",
  //       console: true,
  //       view: true,
  //       language: {
  //         html: {
  //           codeId: "HTML",
  //           content: "",
  //           active: "html",
  //           codes: [html],
  //         },
  //         css: {
  //           codeId: "CSS",
  //           content: "",
  //           active: "css",
  //           codes: [css, scss],
  //         },
  //         javascript: {
  //           codeId: "JS",
  //           content: "",
  //           active: "javascript",
  //           codes: [javascript],
  //         },
  //       },
  //     },

  //     notes: {
  //       icon: "markdown",
  //       title: "Notes",
  //       subtitle: "Markdown",
  //       console: false,
  //       view: false,
  //       language: {
  //         html: {
  //           codeId: "HTML",
  //           content: "",
  //           active: "markdown",
  //           codes: [markdown],
  //         },
  //       },
  //     },
  //   },
  // };
};

const ContentEditor: FC<ComponentThatSetsHtmlProps> = ({
  indexLang,
  codeId,
  defaultLanguage,
  iniValue,
}) => {
  const { isFullscreen } = useFullscreenStore();
  const { currentStack } = useStackStore();
  const { updateContent } = useContentStore();

  const handleEditorChange = (value: string | undefined) => {
    if (value != undefined) {
      if (currentStack) {
        updateContent(indexLang, value);
        // previewFactory(currentStack);
        // const newStack = currentStack[indexStack].language[indexLang]!.content;

        // updateStack({
        //   ...currentStack,
        // });
      }
      // updateStack(value); // Actualiza el estado html en el componente padre
    }
  };

  return (
    <Editor
      theme="vs-light"
      // height="calc(100vh - 47px)"
      height={isFullscreen ? "calc(100vh - 47px)" : "70vh"}
      defaultLanguage={defaultLanguage}
      value={iniValue}
      onChange={handleEditorChange}
      options={{
        minimap: { enabled: false },
        automaticLayout: true,
        fixedOverflowWidgets: true,
        scrollBeyondLastLine: false,
        roundedSelection: false,
        padding: { top: 12, bottom: 12 },
        // scrollbar: {
        //   handleMouseWheel: false,
        // },
      }}
    />
  );
};

const IframePreview = ({
  initValue,
  setting,
}: {
  initValue: any;
  setting: boolean;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { isFullscreen } = useFullscreenStore();
  const { currentConfig } = useConfigStore();
  const [delayedContent, setDelayedContent] = useState<string | null>(null);

  const { contentStore } = useContentStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!currentConfig) return;
      const newhtml = previewFactory(currentConfig?.stack, contentStore);
      setDelayedContent(newhtml);
    }, 1000);

    return () => clearTimeout(timer);
  }, [contentStore]);

  useEffect(() => {}, [initValue]);

  const handleIframeResize = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow && iframe.contentDocument) {
      const iframeBody = iframe.contentDocument.body;
      const iframeHeight = iframeBody.scrollHeight;
      iframe.style.height = isFullscreen
        ? "calc(100vh - 47px)"
        : setting
        ? "70vh"
        : `${iframeHeight + 50}px`; // Ajusta la altura del iframe
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = handleIframeResize; // Ajusta cuando se carga
    }
    return () => {
      if (iframe) {
        iframe.onload = null; // Limpia el evento al desmontar
      }
    };
  }, [delayedContent]);

  useEffect(() => {
    handleIframeResize(); // Ajusta la altura del iframe cuando cambia el setting
  }, [setting, isFullscreen]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "70vh",
      }}
    >
      <iframe
        ref={iframeRef}
        id="widget"
        className="bg-white-degrade"
        name="widget"
        title="widget"
        width="100%"
        scrolling="auto"
        // sandbox={setting ? "allow-scripts" : "allow-same-origin"}
        srcDoc={delayedContent ?? ""}
        style={{
          height: "100%",
        }}
      />
    </div>
  );
};

const getAllActiveTitles = (groups: Array<MenuItemType>): Array<string> => {
  return groups.reduce((acc: string[], lang) => {
    if (lang.active) {
      acc.push(lang.codeId);
      return acc;
    }
    return acc;
  }, []);
};

// editor main
const CodeEditor = ({
  dataCode,
  titleCode,
}: {
  dataCode: string;
  titleCode: string;
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
    // init language
    if (currentStack && currentConfig) {
      const valueHtml = currentStack[currentConfig.stack].language.html;
      valueHtml && updateLanguage("html", valueHtml);
      const valueCss = currentStack[currentConfig.stack].language.css;
      valueCss && updateLanguage("css", valueCss);
      const valueJs = currentStack[currentConfig.stack].language.javascript;
      valueJs && updateLanguage("javascript", valueJs);
      // init tab active
      const tabActive: IContent[] = Object.values(
        currentStack[currentConfig.stack].language
      );
      if (tabActive.length > 0) {
        const active: string = tabActive[0]!.codeId;
        setActiveTab(active);
      }
    }
  }, [currentStack, currentConfig]);

  // useEffect(() => {
  //   setConfigSetting(config);
  // }, [currentStack]);

  const updateActiveStack = (index: IIndexStack) => {
    if (!currentConfig) return;
    updateConfig({
      ...currentConfig,
      stack: index,
    });
  };

  const { setActiveTab } = useTabStore();

  const { isFullscreen, toggleFullscreen } = useFullscreenStore();

  const toggleSetting = () => {
    if (!currentConfig) return;
    updateConfig({
      ...currentConfig,
      splitSize: currentConfig.setting ? [0, 100] : [50, 50],
      setting: !currentConfig.setting,
    });
  };

  return (
    <div className="editor-container">
      <div>
        <div className="App" style={{ minHeight: "70vh" }}>
          <div
            style={{
              position: isFullscreen ? "fixed" : "relative", // Fijo si está en pantalla completa
              top: isFullscreen ? 0 : "auto",
              left: isFullscreen ? 0 : "auto",
              width: isFullscreen ? "100%" : "auto", // 80% del ancho inicialmente, 100% si es fullscreen
              height: isFullscreen ? "100vh" : "auto", // Altura inicial de 300px, 100% si es fullscreen
              zIndex: isFullscreen ? 1000 : "auto", // Z-index alto solo cuando está en pantalla completa
              backgroundColor: isFullscreen ? "white" : "initial", // Fondo blanco
              transition: "all 0.2s ease-in-out", // Transición suave
            }}
          >
            {
              <>
                <div className="bg-primary-900 rounded-t-lg flex text-primary-50 justify-between items-center text-[14px] pb-1">
                  <div
                    style={{
                      paddingLeft: isFullscreen ? "8px" : "auto",
                    }}
                    className="flex-grow basis-0"
                  >
                    {currentStack && currentConfig && currentConfig.setting && (
                      <div className="flex ">
                        {(
                          Object.values(
                            currentStack[currentConfig.stack].language
                          ) as IContent[]
                        ).map((lang) => {
                          return (
                            <div key={lang.codeId}>
                              <TabHeader value={lang.codeId}>
                                <div className="flex items-center">
                                  {lang.codeId}
                                  <span className="ms-1 text-[12px]">
                                    {lang.codeId !== lang.codeId && (
                                      <span>({lang.codeId})</span>
                                    )}
                                  </span>
                                </div>
                              </TabHeader>
                            </div>
                          );
                        })}

                        {/* <Dropdown>
                          <Dropdown.Toggle className="-rotate-90">
                            <ReactIcon name="arrow-up" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <div>
                              {(
                                Object.values(
                                  stacks[config.stack].language
                                ) as IDataItemLanguage[]
                              ).map((lang) => {
                                return (
                                  <div className="item" key={lang.item.codeId}>
                                    <button onClick={() => lang.toggleActive()}>
                                      <div
                                        className={`p-1 flex items-center text-primary-0`}
                                      >
                                        {lang.item.active ? (
                                          <ReactIcon size="20" name="close" />
                                        ) : (
                                          // <IconReact size="20" name="plus" />
                                          <ReactIcon
                                            size="20"
                                            name={lang.item.code}
                                          />
                                        )}
                                        <div className="ps-3">
                                          {lang.item.codeId}{" "}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          </Dropdown.Menu>
                        </Dropdown> */}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-raleway font-bold text-secondary-950">
                    ({titleCode})
                  </h3>
                  <div
                    style={{
                      paddingRight: isFullscreen ? "8px" : "auto",
                    }}
                    className="flex items-center flex-grow basis-0 justify-end"
                  >
                    <div
                      onClick={() => toggleSetting()}
                      className="p-2 hover:bg-secondary-200 rounded-md"
                    >
                      {currentConfig?.setting ? (
                        <ReactIcon name="code" size="small" />
                      ) : (
                        <ReactIcon name="view" size="small" />
                      )}
                    </div>
                    <div
                      className="p-2 hover:bg-secondary-200 rounded-md"
                      onClick={toggleFullscreen}
                    >
                      <ReactIcon name="fullscreen" size="small" />
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle>
                        <div className="p-2 hover:bg-secondary-100 rounded-md">
                          <ReactIcon name="menu-kebab" size="small" />
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu align="right">
                        <div className="p-2 hover:bg-gray-100/60 rounded-md">
                          <Dropdown.Item
                          // onClick={() => {
                          //   // console.log(config);
                          //   copyJson({
                          //     version: version,
                          //     config: configSetting,
                          //     languages: {
                          //       html: htmlGroup2.item,
                          //       css: cssGroup2.item,
                          //       javascript: jsGroup2.item,
                          //     },
                          //   });
                          // }}
                          >
                            Copiar json
                          </Dropdown.Item>
                        </div>
                        <div className="p-2 hover:bg-gray-100/60 rounded-md">
                          <Dropdown.Item
                            onClick={() => {
                              // copyToClipboard({
                              //   version: version,
                              //   config: configSetting,
                              //   languages: [
                              //     htmlGroup2.item,
                              //     cssGroup2.item,
                              //     jsGroup2.item,
                              //   ],
                              // });
                            }}
                          >
                            Copiar hash
                          </Dropdown.Item>
                        </div>
                        <div className="p-2 hover:bg-gray-100/60 rounded-md">
                          <Dropdown.Item
                            onClick={() => {
                              // console.log(config);
                              updateActiveStack("angular");
                            }}
                          >
                            Angular
                          </Dropdown.Item>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                {currentConfig && currentStack && (
                  <div style={{ height: isFullscreen ? "100%" : "auto" }}>
                    <Split
                      className="wrap"
                      sizes={currentConfig.splitSize}
                      minSize={0}
                      expandToMin={false}
                      gutterSize={currentConfig.setting ? 8 : 0}
                      gutterAlign="center"
                      snapOffset={30}
                      dragInterval={1}
                      direction="horizontal"
                      cursor="col-resize"
                    >
                      <div>
                        {Object.entries(
                          currentStack[currentConfig.stack].language
                        ).map(([index, lang]: [string, IContent]) => {
                          return (
                            <div key={lang.codeId}>
                              <TabContent value={lang.codeId}>
                                <div className="relative overflow-hidden">
                                  {currentConfig.setting &&
                                    lang.codes.length > 1 && (
                                      <div className="absolute right-4 top-0 z-10">
                                        <Dropdown>
                                          <Dropdown.Toggle>
                                            <div className="flex items-center px-2 py-[2px] rounded-md text-[12px] bg-white/95 border border-primary-0 text-primary-0">
                                              {lang.active}{" "}
                                              <ReactIcon
                                                size="small"
                                                name="arrow-up"
                                              />
                                            </div>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu align="right">
                                            {lang.codes.map((code) => {
                                              return (
                                                <div
                                                  key={code.code}
                                                  className={`p-2 hover:bg-gray-100/80 rounded-md my-1 cursor-pointer text-sm ${
                                                    code.code === lang.active
                                                      ? "bg-gray-100/80"
                                                      : ""
                                                  }`}
                                                >
                                                  <Dropdown.Item
                                                    onClick={() => {
                                                      console.log(
                                                        "Cambiar de lenguaje"
                                                      );
                                                    }}
                                                  >
                                                    {code.title}
                                                  </Dropdown.Item>
                                                </div>
                                              );
                                            })}
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    )}
                                  <ContentEditor
                                    indexLang={index as IIndexLanguage}
                                    codeId={lang.codeId}
                                    defaultLanguage={lang.active}
                                    iniValue={lang.content}
                                  />
                                </div>
                              </TabContent>
                            </div>
                          );
                        })}
                      </div>

                      <div>
                        {currentConfig.setting &&
                          (currentStack[currentConfig.stack].view ||
                            currentStack[currentConfig.stack].console) && (
                            <div className="flex justify-between items-center bg-[#FFF8F9] px-2 border-b border-secondary-50">
                              <div className="flex gap-4 font-raleway text-xs ps-2">
                                {currentStack[currentConfig.stack].view && (
                                  <div className="options-active relative px-2 cursor-pointer flex items-center text-secondary-400 font-bold h-[36px]">
                                    VISTA
                                  </div>
                                )}
                                {currentStack[currentConfig.stack].console && (
                                  <div className="relative flex items-center cursor-pointer px-2 text-primary-400 h-[36px]">
                                    CONSOLA
                                  </div>
                                )}
                              </div>
                              <div className="py-2 pe-2 cursor-pointer">
                                <ReactIcon name="update" size="20" />
                              </div>
                            </div>
                          )}

                        <IframePreview
                          initValue={currentStack[currentConfig.stack]}
                          setting={currentConfig.setting}
                        />
                      </div>
                    </Split>
                  </div>
                )}
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
// Envolver MyTabsComponent dentro de TabProvider
export const AppEditor = ({ dataCode, title }: any) => {
  return <CodeEditor dataCode={dataCode} titleCode={title} />;
};
