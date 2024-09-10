import { useState, useEffect, type FC, useRef } from "react";
import { encode, decode } from "js-base64";
import Split from "react-split";
import Editor from "@monaco-editor/react";
import { TabProvider, useTabContext } from "../../shared/react/tab/TabContext";
import TabContent from "../../shared/react/tab/TabContent";
import TabHeader from "../../shared/react/tab/TabHeader";
import IconReact from "../../shared/react/icon/IconApp";
import { useGroupState, type LanguageGroup } from "./groupStateHook";
import Dropdown from "../../shared/react/Dropdown/Dropdown";
import { marked } from "marked";
import { styleBase, styleMarkDown } from "./defaultStyle";
interface ComponentThatSetsHtmlProps {
  updateHtml: (newHtml: string) => void;
  defaultLanguage: string; // Nueva prop para configurar el lenguaje por defecto
  iniValue: string;
}

const joinLanguagesActive = (languages: LanguageGroup) => {
  return Object.values(languages).find((language) => language.active);
};

export const createHtml = ([html, css, js]: LanguageGroup[]) => {
  if (!html || !css || !js) return "";
  const htmlJoin = joinLanguagesActive(html);
  const cssJoin = joinLanguagesActive(css);
  const jsJoin = joinLanguagesActive(js);

  let htmlContent;
  let cssDefault = "";

  if (htmlJoin && htmlJoin.code == "markdown") {
    htmlContent = marked(htmlJoin.content);
    cssDefault = styleMarkDown;
  } else {
    htmlContent = htmlJoin?.content;
  }

  return `<!DOCTYPE html>
  <html lang="en" onload="resizeIframe()">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style id="preview-style">
        ${styleBase}
        ${cssDefault}
        ${cssJoin?.content}
      </style>
    </head>
    <body >
        ${htmlContent}
      <script type="module">
        ${jsJoin?.content}
        function resizeIframe() {
          var document = window.parent.document;
          var iframe = document.getElementById('widget'); 
          iframe.style.height = (document.documentElement.scrollHeight + 18) + 'px';
          console.log(iframe);
        }
      </script>
    </body>
  </html>`;
};

const hashedCode = (datahashed: any): string => {
  const hashedCode = encode(JSON.stringify(datahashed));
  return hashedCode;
};

const copyToClipboard = async (data: any) => {
  const hashed = hashedCode(data);
  try {
    await navigator.clipboard.writeText(hashed);
    await navigator.clipboard.writeText(hashed as string);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

const hashedDecode = (hash: string) => {
  try {
    return JSON.parse(decode(hash));
  } catch (error) {
    return {
      config: {
        splitSize: [50, 50],
        setting: true,
      },
      languages: [
        {
          html: {
            title: "HTML",
            active: true,
            content: "",
            code: "html",
          },
          markdown: {
            title: "MD",
            active: false,
            content: "",
            code: "markdown",
          },
        },
        {
          css: {
            title: "CSS",
            active: true,
            content: "",
            code: "css",
          },
          scss: {
            title: "SCSS",
            active: false,
            content: "",
            code: "scss",
          },
        },
        {
          javascript: {
            title: "JS",
            active: true,
            content: "",
            code: "javascript",
          },
          typescript: {
            title: "TS",
            active: false,
            content: "",
            code: "typescript",
          },
        },
      ],
    };
  }
};

const ContentEditor: FC<ComponentThatSetsHtmlProps> = ({
  updateHtml,
  defaultLanguage,
  iniValue,
}) => {
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      updateHtml(value); // Actualiza el estado html en el componente padre
    }
  };

  return (
    <Editor
      theme="vs-light"
      height="70vh"
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

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleIframeResize = () => {
      if (iframe && iframe.contentWindow && iframe.contentDocument) {
        const iframeBody = iframe.contentDocument.body;
        const iframeHeight = iframeBody.scrollHeight;
        iframe.style.height = `${iframeHeight + 50}px`; // Ajusta la altura del iframe
      }
    };

    if (iframe) {
      iframe.onload = handleIframeResize; // Ajusta cuando se carga
    }

    return () => {
      if (iframe) {
        iframe.onload = null; // Limpia el evento al desmontar
      }
    };
  }, [output]);

  return (
    <div>
      <iframe
        ref={iframeRef}
        id="widget"
        className="bg-white"
        name="widget"
        title="widget"
        frameBorder="0"
        width="100%"
        scrolling="auto"
        sandbox={setting ? "allow-scripts" : "allow-same-origin"}
        srcDoc={output}
        style={{
          width: "100%",
          minHeight: "70vh",
          height: setting ? "auto" : "70vh",
        }}
      />
    </div>
  );
};

const getAllActiveTitles = (groups: Array<LanguageGroup>): Array<string> => {
  const activeTitles: Array<string> = [];

  for (const group of groups) {
    for (const key in group) {
      if (group[key] && group[key].active) {
        activeTitles.push(group[key].code);
      }
    }
  }

  return activeTitles;
};

const CodeEditor = ({ dataCode }: { dataCode: string }) => {
  const { config, languages } = hashedDecode(dataCode);
  const [html, css, javascript] = languages;

  const [output, setOutput] = useState("");
  const { activeTab, setActiveTab } = useTabContext();
  const [configSetting, setConfigSetting] = useState(config); // Estado para controlar el ajuste automático

  const htmlGroup = useGroupState(html);
  const cssGroup = useGroupState(css);
  const jsGroup = useGroupState(javascript);

  useEffect(() => {
    htmlGroup.updateState(html);
    cssGroup.updateState(css);
    jsGroup.updateState(javascript);
    setConfigSetting(config);
  }, [dataCode]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutput(
        createHtml([htmlGroup.languages, cssGroup.languages, jsGroup.languages])
      );
    }, 300); // Añadimos un pequeño retraso para evitar demasiadas actualizaciones

    const firstActiveTitle = getAllActiveTitles([
      htmlGroup.languages,
      cssGroup.languages,
      jsGroup.languages,
    ]);

    const tabActive = firstActiveTitle.some((title) => title === activeTab);
    if (!tabActive) {
      setActiveTab(firstActiveTitle[0] || "");
    }

    return () => clearTimeout(timeout); // Limpiar el timeout en cada cambio
  }, [htmlGroup.languages, cssGroup.languages, jsGroup.languages]);

  const toggleSetting = () => {
    console.log("click");
    setConfigSetting((prevConfig: any) => ({
      splitSize: prevConfig.setting ? [0, 100] : [50, 50],
      setting: !prevConfig.setting,
    }));
  };

  return (
    <div className="editor-container">
      {/* {firstActiveTitle} */}

      <div>
        <div className="App" style={{ minHeight: "100vh" }}>
          <div>
            {
              <>
                <div className="g-border-b flex justify-between items-center text-[14px] pb-1">
                  <div>
                    {configSetting.setting && (
                      <div className="flex ">
                        {[
                          ...Object.entries(htmlGroup.languages),
                          ...Object.entries(cssGroup.languages),
                          ...Object.entries(jsGroup.languages),
                        ].map(([languageId, language]) => {
                          if (language.active) {
                            return (
                              <div key={languageId}>
                                <TabHeader value={languageId}>
                                  {/* <IconReact size="20" name={language.code} /> */}
                                  <div className="">{language.title}</div>
                                </TabHeader>
                              </div>
                            );
                          } else {
                            return "";
                          }
                        })}

                        <Dropdown>
                          <Dropdown.Toggle>
                            <IconReact name="arrow-up" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <div>
                              {Object.entries(htmlGroup.languages).map(
                                ([languageId, language]) => {
                                  const disable = Object.values(
                                    htmlGroup.languages
                                  ).some(
                                    (lang) => lang.active && lang !== language
                                  );
                                  return (
                                    <div className="item" key={languageId}>
                                      <button
                                        onClick={() =>
                                          htmlGroup.toggleActive(languageId)
                                        }
                                        disabled={disable}
                                      >
                                        <div
                                          className={`flex items-center ${
                                            disable
                                              ? "text-gray-500"
                                              : "text-primary-0"
                                          }`}
                                        >
                                          {language.active ? (
                                            <IconReact size="20" name="close" />
                                          ) : (
                                            // <IconReact size="20" name="plus" />
                                            <IconReact
                                              size="20"
                                              name={language.code}
                                            />
                                          )}
                                          <div className="ps-3">
                                            {language.title}{" "}
                                          </div>
                                        </div>
                                      </button>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                            <hr className="border-hr-menu" />
                            <div>
                              {Object.entries(cssGroup.languages).map(
                                ([languageId, language]) => {
                                  const disable = Object.values(
                                    cssGroup.languages
                                  ).some(
                                    (lang) => lang.active && lang !== language
                                  );
                                  return (
                                    <div className="item" key={languageId}>
                                      <button
                                        onClick={() =>
                                          cssGroup.toggleActive(languageId)
                                        }
                                        disabled={disable}
                                      >
                                        <div
                                          className={`flex items-center ${
                                            disable
                                              ? "text-gray-500"
                                              : "text-primary-0"
                                          }`}
                                        >
                                          {language.active ? (
                                            <IconReact size="20" name="close" />
                                          ) : (
                                            // <IconReact size="20" name="plus" />
                                            <IconReact
                                              size="20"
                                              name={language.code}
                                            />
                                          )}
                                          <div className="ps-3">
                                            {language.title}{" "}
                                          </div>
                                        </div>
                                      </button>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                            <hr className="border-hr-menu" />
                            <div>
                              {Object.entries(jsGroup.languages).map(
                                ([languageId, language]) => {
                                  const disable = Object.values(
                                    jsGroup.languages
                                  ).some(
                                    (lang) => lang.active && lang !== language
                                  );
                                  return (
                                    <div className="item" key={languageId}>
                                      <button
                                        onClick={() =>
                                          jsGroup.toggleActive(languageId)
                                        }
                                        disabled={disable}
                                      >
                                        <div
                                          className={`flex items-center ${
                                            disable
                                              ? "text-gray-500"
                                              : "text-primary-0"
                                          }`}
                                        >
                                          {language.active ? (
                                            <IconReact size="20" name="close" />
                                          ) : (
                                            // <IconReact size="20" name="plus" />
                                            <IconReact
                                              size="20"
                                              name={language.code}
                                            />
                                          )}
                                          <div className="ps-3">
                                            {language.title}{" "}
                                          </div>
                                        </div>
                                      </button>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
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
                    <div className="p-2 hover:bg-secondary-200 rounded-md">
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
                          Copiar hash
                        </div>
                        <div className="p-2 hover:bg-gray-100/60 rounded-md">
                          <Dropdown.Item
                            onClick={() => {
                              // console.log(config);
                              copyToClipboard({
                                config: configSetting,
                                languages: [
                                  htmlGroup.languages,
                                  cssGroup.languages,
                                  jsGroup.languages,
                                ],
                              });
                            }}
                          >
                            Guardar
                          </Dropdown.Item>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
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
                    {Object.entries(htmlGroup.languages).map(
                      ([languageId, language]) => {
                        return (
                          <div key={languageId}>
                            <TabContent value={languageId}>
                              <ContentEditor
                                updateHtml={(newContent) =>
                                  htmlGroup.updateContent(
                                    languageId,
                                    newContent
                                  )
                                }
                                defaultLanguage={language.code}
                                iniValue={language.content}
                              />
                            </TabContent>
                          </div>
                        );
                      }
                    )}

                    {Object.entries(cssGroup.languages).map(
                      ([languageId, language]) => {
                        return (
                          <div key={languageId}>
                            <TabContent value={languageId}>
                              <ContentEditor
                                updateHtml={(newContent) =>
                                  cssGroup.updateContent(languageId, newContent)
                                }
                                defaultLanguage={language.code}
                                iniValue={language.content}
                              />
                            </TabContent>
                          </div>
                        );
                      }
                    )}

                    {Object.entries(jsGroup.languages).map(
                      ([languageId, language]) => {
                        return (
                          <div key={languageId}>
                            <TabContent value={languageId}>
                              <ContentEditor
                                updateHtml={(newContent) =>
                                  jsGroup.updateContent(languageId, newContent)
                                }
                                defaultLanguage={language.code}
                                iniValue={language.content}
                              />
                            </TabContent>
                          </div>
                        );
                      }
                    )}
                  </div>

                  <IframePreview
                    output={output}
                    setting={configSetting.setting}
                  />
                </Split>
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
export const AppEditor = ({ dataCode }: any) => {
  return (
    <TabProvider defaultTab="">
      <CodeEditor dataCode={dataCode} />
    </TabProvider>
  );
};
