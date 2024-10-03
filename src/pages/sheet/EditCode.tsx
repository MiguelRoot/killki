import { useState, useEffect, type FC, useRef } from "react";
import { encode, decode } from "js-base64";
import Split from "react-split";
import Editor from "@monaco-editor/react";
import TabContent from "../../shared/react/tab/TabContent";
import TabHeader from "../../shared/react/tab/TabHeader";
import IconReact from "../../shared/react/icon/IconApp";
import Dropdown from "../../shared/react/Dropdown/Dropdown";
import { marked } from "marked";
import { styleBase, styleMarkDown } from "./defaultStyle";
import useMenuItem, { type MenuItemType } from "./useMenuItem";
import { htmlMarkdown, javascriptMarkdown } from "./editor/mardown";
import { useFullscreenStore } from "./editor/useFullscreen";
import { useTabStore } from "../../shared/react/tab/TabContext";
interface ComponentThatSetsHtmlProps {
  updateHtml: (newHtml: string) => void;
  defaultLanguage: string; // Nueva prop para configurar el lenguaje por defecto
  iniValue: string;
}

export const createHtml = ([html, css, js]: MenuItemType[]) => {
  if (!html || !css || !js) return "";

  let htmlContent;
  let cssDefault = "";

  // markdown
  let javascriptMarkdownRef = "";
  let htmlMarkdownRef = "";

  if (html && html.code == "markdown") {
    htmlContent = marked(html.content);
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
    // console.log(htmlContent, "htmlContent");
    cssDefault = styleMarkDown;
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
      </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs/loader.js"></script>
      <script>
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

// const hashedDecode = (hash: string) => {
//   try {
//     return JSON.parse(decode(hash));
//   } catch (error) {
//     return {
//       config: {
//         splitSize: [50, 50],
//         setting: true,
//       },
//       languages: [
//         {
//           html: {
//             title: "HTML",
//             active: true,
//             content: "",
//             code: "html",
//           },
//           markdown: {
//             title: "MD",
//             active: false,
//             content: "",
//             code: "markdown",
//           },
//         },
//         {
//           css: {
//             title: "CSS",
//             active: true,
//             content: "",
//             code: "css",
//           },
//           scss: {
//             title: "SCSS",
//             active: false,
//             content: "",
//             code: "scss",
//           },
//         },
//         {
//           javascript: {
//             title: "JS",
//             active: true,
//             content: "",
//             code: "javascript",
//           },
//           typescript: {
//             title: "TS",
//             active: false,
//             content: "",
//             code: "typescript",
//           },
//         },
//       ],
//     };
//   }
// };

function isJSONValid(cadena: string): [boolean, any] {
  try {
    const resParse = JSON.parse(cadena);
    return [true, resParse];
  } catch (e) {
    return [false, null];
  }
}

const hashedDecode2 = (hash: string) => {
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
        title:
          Object.values<any>(html).find((language) => {
            return language.active;
          })?.title || "HTML",
        active: Object.values<any>(html).some((language) => language.active),
        content:
          Object.values<any>(html).find((language) => {
            return language.active;
          })?.content || "",
        code:
          Object.values<any>(html).find((language: any) => {
            return language.active;
          })?.code || "html",
        codes: [
          { title: "HTML", code: "html" },
          { title: "Markdown", code: "markdown" },
          { title: "PUG", code: "pug" },
        ],
      },
      css: {
        codeId: "CSS",
        title:
          Object.values<any>(css).find((language: any) => {
            return language.active;
          })?.title || "CSS",
        active: Object.values(css).some((language: any) => language.active),
        content:
          Object.values<any>(css).find((language) => {
            if (language.active) {
              return language.content;
            }
          })?.content || "",
        code:
          Object.values<any>(css).find((language: any) => {
            return language.code;
          })?.code || "css",
        codes: [
          { title: "CSS", code: "css" },
          { title: "SCSS", code: "scss" },
        ],
      },
      javascript: {
        codeId: "JS",
        title:
          Object.values<any>(javascript).find((language) => {
            return language.active;
          })?.title || "JS",
        active: Object.values(javascript).some(
          (language: any) => language.active
        ),
        content:
          Object.values<any>(javascript).find((language) => {
            return language.active;
          })?.content || "",
        code:
          Object.values<any>(javascript).find((language: any) => {
            return language.active;
          })?.code || "javascript",
        codes: [
          { title: "JS", code: "javascript" },
          { title: "TypeScript", code: "typescript" },
        ],
      },
    };
    const response = {
      config,
      version: version || "1.0.0",
      languages: languagesjson,
    };
    return response;
  } catch (error) {
    return {
      version: "1.0.0",
      config: {
        splitSize: [50, 50],
        setting: true,
        view: "html",
        sizeWindow: "auto",
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
            { title: "PUG", code: "pug" },
          ],
        },
        css: {
          codeId: "CSS",
          title: "CSS",
          active: false,
          content: "",
          code: "css",
          codes: [
            { title: "CSS", code: "css" },
            { title: "SCSS", code: "scss" },
          ],
        },
        javascript: {
          codeId: "JS",
          title: "JS",
          active: false,
          content: "",
          code: "javascript",
          codes: [
            { title: "JS", code: "javascript" },
            { title: "TypeScript", code: "typescript" },
          ],
        },
      },
    };
  }
};

const ContentEditor: FC<ComponentThatSetsHtmlProps> = ({
  updateHtml,
  defaultLanguage,
  iniValue,
}) => {
  const { isFullscreen, toggleFullscreen } = useFullscreenStore();

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      updateHtml(value); // Actualiza el estado html en el componente padre
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
  output,
  setting,
}: {
  output: string;
  setting: boolean;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { isFullscreen, toggleFullscreen } = useFullscreenStore();

  const handleIframeResize = () => {
    console.log(setting, "setting");
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow && iframe.contentDocument) {
      const iframeBody = iframe.contentDocument.body;
      const iframeHeight = iframeBody.scrollHeight;
      console.log(iframeHeight, "iframeHeight");
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
  }, [output]);

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
        frameBorder="0"
        width="100%"
        scrolling="auto"
        // sandbox={setting ? "allow-scripts" : "allow-same-origin"}
        srcDoc={output}
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

const CodeEditor = ({
  dataCode,
  titleCode,
}: {
  dataCode: string;
  titleCode: string;
}) => {
  // const { config, languages } = hashedDecode(dataCode);
  const { config, languages, version } = hashedDecode2(dataCode);
  // console.log(languages, "dataCode");
  const { html, css, javascript } = languages;

  const [output, setOutput] = useState("");
  // const { activeTab, setActiveTab } = useTabContext();
  const { activeTab, setActiveTab } = useTabStore();
  const [configSetting, setConfigSetting] = useState(config); // Estado para controlar el ajuste automático
  // const { isFullscreen, toggleFullscreen } = useFullscreen();
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
    }, 300); // Añadimos un pequeño retraso para evitar demasiadas actualizaciones

    const firstActiveTitle = getAllActiveTitles([
      htmlGroup2.item,
      cssGroup2.item,
      jsGroup2.item,
    ]);

    const tabActive = firstActiveTitle.some((title) => title === activeTab);
    if (!tabActive) {
      setActiveTab(firstActiveTitle[0] || "");
    }

    return () => clearTimeout(timeout); // Limpiar el timeout en cada cambio
  }, [htmlGroup2.item, cssGroup2.item, jsGroup2.item]);

  const toggleSetting = () => {
    console.log("click");
    setConfigSetting((prevConfig: any) => ({
      splitSize: prevConfig.setting ? [0, 100] : [50, 50],
      setting: !prevConfig.setting,
    }));
  };

  // // Función para alternar entre pantalla completa y tamaño normal
  // const onToggleFullscreen = () => {
  //   toggleFullscreen(!isFullscreen);
  // };

  return (
    <div className="editor-container">
      {/* {firstActiveTitle} */}

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
                <div className="g-border-b flex justify-between items-center text-[14px] pb-1">
                  <div
                    style={{
                      paddingLeft: isFullscreen ? "8px" : "auto",
                    }}
                    className="flex-grow basis-0"
                  >
                    {configSetting.setting && (
                      <div className="flex ">
                        {[htmlGroup2.item, cssGroup2.item, jsGroup2.item].map(
                          (lang) => {
                            if (lang.active) {
                              return (
                                <div key={lang.codeId}>
                                  <TabHeader value={lang.codeId}>
                                    {/* <IconReact size="20" name={language.code} /> */}
                                    <div className="flex items-center">
                                      {lang.codeId}
                                      <span className="ms-1 text-[12px]">
                                        {lang.codeId !== lang.title && (
                                          <span>({lang.title})</span>
                                        )}
                                      </span>
                                    </div>
                                  </TabHeader>
                                </div>
                              );
                            } else {
                              return "";
                            }
                          }
                        )}

                        <Dropdown>
                          <Dropdown.Toggle className="-rotate-90">
                            <IconReact name="arrow-up" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <div>
                              {[htmlGroup2, cssGroup2, jsGroup2].map((lang) => {
                                return (
                                  <div className="item" key={lang.item.codeId}>
                                    <button onClick={() => lang.toggleActive()}>
                                      <div
                                        className={`p-1 flex items-center text-primary-0`}
                                      >
                                        {lang.item.active ? (
                                          <IconReact size="20" name="close" />
                                        ) : (
                                          // <IconReact size="20" name="plus" />
                                          <IconReact
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
                        </Dropdown>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-secondary-950">
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
                      {configSetting.setting ? (
                        <IconReact name="code" size="small" />
                      ) : (
                        <IconReact name="view" size="small" />
                      )}
                    </div>
                    <div
                      className="p-2 hover:bg-secondary-200 rounded-md"
                      onClick={toggleFullscreen}
                    >
                      <IconReact name="fullscreen" size="small" />
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle>
                        <div className="p-2 hover:bg-secondary-100 rounded-md">
                          <IconReact name="menu-kebab" size="small" />
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu align="right">
                        <div className="p-2 hover:bg-gray-100/60 rounded-md">
                          <Dropdown.Item
                            onClick={() => {
                              // console.log(config);
                              copyJson({
                                version: version,
                                config: configSetting,
                                languages: {
                                  html: htmlGroup2.item,
                                  css: cssGroup2.item,
                                  javascript: jsGroup2.item,
                                },
                              });
                            }}
                          >
                            Copiar json
                          </Dropdown.Item>
                        </div>
                        <div className="p-2 hover:bg-gray-100/60 rounded-md">
                          <Dropdown.Item
                            onClick={() => {
                              // console.log(config);
                              copyToClipboard({
                                version: version,
                                config: configSetting,
                                languages: [
                                  htmlGroup2.item,
                                  cssGroup2.item,
                                  jsGroup2.item,
                                ],
                              });
                            }}
                          >
                            Copiar hash
                          </Dropdown.Item>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div style={{ height: isFullscreen ? "100%" : "auto" }}>
                  <Split
                    className="wrap"
                    sizes={configSetting.splitSize}
                    minSize={0}
                    expandToMin={false}
                    gutterSize={configSetting.setting ? 8 : 0}
                    gutterAlign="center"
                    snapOffset={30}
                    dragInterval={1}
                    direction="horizontal"
                    cursor="col-resize"
                  >
                    <div>
                      {[htmlGroup2, cssGroup2, jsGroup2].map((lang) => {
                        return (
                          <div key={lang.item.codeId}>
                            <TabContent value={lang.item.codeId}>
                              <div className="relative overflow-hidden">
                                {configSetting.setting && (
                                  <div className="absolute right-4 top-0 z-10">
                                    <Dropdown>
                                      <Dropdown.Toggle>
                                        <div className="flex items-center px-2 py-[2px] rounded-md text-[12px] bg-white/95 border border-primary-0 text-primary-0">
                                          {lang.item.title}{" "}
                                          <IconReact
                                            size="small"
                                            name="arrow-up"
                                          />
                                        </div>
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu align="right">
                                        {lang.item.codes.map((code) => {
                                          return (
                                            <div
                                              key={code.code}
                                              className={`p-2 hover:bg-gray-100/80 rounded-md my-1 cursor-pointer text-sm ${
                                                code.code === lang.item.code
                                                  ? "bg-gray-100/80"
                                                  : ""
                                              }`}
                                            >
                                              <Dropdown.Item
                                                onClick={() =>
                                                  lang.updateTitleAndCode(code)
                                                }
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
                                  updateHtml={(newContent) =>
                                    lang.updateContent(newContent)
                                  }
                                  defaultLanguage={lang.item.code}
                                  iniValue={lang.item.content}
                                />
                              </div>
                            </TabContent>
                          </div>
                        );
                      })}
                    </div>

                    <IframePreview
                      output={output}
                      setting={configSetting.setting}
                    />
                  </Split>
                </div>
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
