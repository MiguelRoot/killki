import React, { useState, useEffect, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import * as Babel from "@babel/standalone";
import MarkdownIt from "markdown-it";
// import Sass from "sass.js/dist/sass.sync";

const markdown = new MarkdownIt();

const angularScripts = `
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.0/zone.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.5/core.min.js"></script>
  <script src="https://unpkg.com/@angular/core@7.2.3/bundles/core.umd.js"></script>
  <script src="https://unpkg.com/@angular/common@7.2.3/bundles/common.umd.js"></script>
  <script src="https://unpkg.com/@angular/compiler@7.2.3/bundles/compiler.umd.js"></script>
  <script src="https://unpkg.com/@angular/platform-browser@7.2.3/bundles/platform-browser.umd.js"></script>
  <script src="https://unpkg.com/@angular/platform-browser-dynamic@7.2.3/bundles/platform-browser-dynamic.umd.js"></script>
  <script src="https://unpkg.com/@angular/forms@7.2.9/bundles/forms.umd.js"></script>
`;

const previewFactory = (
  programmingLanguage: string,
  markupLanguage: string,
  styleLanguage: string,
  code: string,
  styleCode: string,
  onCssUpdate: (css: string) => void
) => {
  let cssStyles = "";

  if (styleLanguage === "css") {
    cssStyles = `<style>${styleCode}</style>`;
    onCssUpdate(cssStyles);
  } else if (styleLanguage === "scss") {
    // Sass.compile(styleCode, (result: any) => {
    //   if (result.status === 0) {
    //     cssStyles = `<style>${result.text}</style>`;
    //     onCssUpdate(cssStyles);
    //   } else {
    //     console.error("Error al compilar SCSS:", result);
    //   }
    // });
  }

  switch (markupLanguage) {
    case "markdown":
      return `
        <html>
          <head>${cssStyles}</head>
          <body>${markdown.render(code)}</body>
        </html>
      `;
    case "html":
      if (
        programmingLanguage === "typescript" ||
        programmingLanguage === "tsx" ||
        programmingLanguage === "javascript"
      ) {
        try {
          const transpiledCode = Babel.transform(code, {
            presets: [
              programmingLanguage === "typescript" ? "typescript" : null,
              programmingLanguage === "tsx" ? "react" : null,
              ["env", { targets: { esmodules: true } }],
            ].filter(Boolean),
            plugins: ["proposal-class-properties"],
          } as any).code;

          return `
            <html>
              <head>${cssStyles}</head>
              <body>
                <div id="root"></div>
                <script type="module">
                  ${transpiledCode}
                  const App = window.exports.App;
                  ReactDOM.render(React.createElement(App), document.getElementById('root'));
                </script>
              </body>
            </html>
          `;
        } catch (error) {
          console.error("Error al transpilar el código:", error);
        }
      } else if (programmingLanguage === "angular") {
        return `
          <html>
            <head>${cssStyles}</head>
            <body>
              <app-root>Loading...</app-root>
              ${angularScripts}
              <script>
                System.import('@angular/core').then(ng => {
                  const { platformBrowserDynamic } = window.ng.platformBrowserDynamic;
                  const { NgModule, Component } = window.ng.core;
  
                  ${code}

                  platformBrowserDynamic().bootstrapModule(AppModule);
                });
              </script>
            </body>
          </html>
        `;
      }
      break;
    default:
      return `<html><body><p>Lenguaje no soportado</p></body></html>`;
  }
};

const CodeEditorWithPreview: React.FC = () => {
  const [programmingLanguage, setProgrammingLanguage] = useState("typescript");
  const [markupLanguage, setMarkupLanguage] = useState("html");
  const [styleLanguage, setStyleLanguage] = useState("css");
  const [code, setCode] = useState(
    `// Escribe tu código aquí\nexport const App = () => <h1>Hello, world!</h1>;`
  );
  const [styleCode, setStyleCode] = useState(
    `/* Escribe tus estilos aquí */\nbody { font-family: Arial, sans-serif; }`
  );
  const [cssStyles, setCssStyles] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const updatePreview = () => {
    const iframeDocument =
      iframeRef.current?.contentDocument ||
      iframeRef.current?.contentWindow?.document;
    if (iframeDocument) {
      const previewContent = previewFactory(
        programmingLanguage,
        markupLanguage,
        styleLanguage,
        code,
        styleCode,
        setCssStyles
      );

      iframeDocument.open();
      iframeDocument.write(previewContent!);
      iframeDocument.close();
    }
  };

  useEffect(() => {
    updatePreview();
  }, [
    code,
    styleCode,
    programmingLanguage,
    markupLanguage,
    styleLanguage,
    cssStyles,
  ]);

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <div>
          <label>Lenguaje de Programación: </label>
          <select
            value={programmingLanguage}
            onChange={(e) => setProgrammingLanguage(e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="tsx">TSX</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <div>
          <label>Lenguaje de Marcado: </label>
          <select
            value={markupLanguage}
            onChange={(e) => setMarkupLanguage(e.target.value)}
          >
            <option value="html">HTML</option>
            <option value="markdown">Markdown</option>
          </select>
        </div>
        <div>
          <label>Lenguaje de Estilos: </label>
          <select
            value={styleLanguage}
            onChange={(e) => setStyleLanguage(e.target.value)}
          >
            <option value="css">CSS</option>
            <option value="scss">SCSS</option>
          </select>
        </div>
      </div>

      <div style={{ display: "flex", height: "85%" }}>
        <div style={{ width: "50%", borderRight: "1px solid #ddd" }}>
          <MonacoEditor
            height="100%"
            theme="vs-dark"
            language={
              programmingLanguage === "angular"
                ? "typescript"
                : programmingLanguage
            }
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{ selectOnLineNumbers: true, minimap: { enabled: false } }}
          />
        </div>

        <div style={{ width: "50%", borderRight: "1px solid #ddd" }}>
          <MonacoEditor
            height="100%"
            theme="vs-dark"
            language={styleLanguage === "scss" ? "scss" : "css"}
            value={styleCode}
            onChange={(value) => setStyleCode(value || "")}
            options={{ selectOnLineNumbers: true, minimap: { enabled: false } }}
          />
        </div>
      </div>

      <div style={{ width: "100%", height: "50%" }}>
        <iframe
          ref={iframeRef}
          title="Preview"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "500px",
            border: "none",
          }}
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
};

export default CodeEditorWithPreview;
