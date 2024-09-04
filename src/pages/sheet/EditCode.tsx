import { useState, useEffect, type FC } from "react";
import Split from "react-split";
import Editor from "@monaco-editor/react";
import { TabProvider } from "../../shared/react/tab/TabContext";
import TabContent from "../../shared/react/tab/TabContent";
import TabHeader from "../../shared/react/tab/TabHeader";
import IconReact from "../../shared/react/icon/IconApp";

interface ComponentThatSetsHtmlProps {
  updateHtml: (newHtml: string) => void;
  defaultLanguage: string; // Nueva prop para configurar el lenguaje por defecto
}

interface Language {
  title: string;
  active: boolean;
  code: string;
  content: string;
}

interface LanguageGroup {
  [key: string]: Language;
}

interface LanguageGroups {
  [key: string]: LanguageGroup;
}

export const createHtml = ({ html, css, js }: LanguageGroups) => {
  if (!html || !css || !js) return "";
  const htmlJoin =
    Object.values(html)
      .map((language: any) => language.content)
      .join("") ?? "";
  const cssJoin = Object.values(css)
    .map((language: any) => language.content)
    .join("");
  const jsJoin = Object.values(js)
    .map((language: any) => language.content)
    .join("");
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style id="preview-style">
        ${cssJoin}
      </style>
    </head>
    <body>
        ${htmlJoin}
      <script type="module">
        ${jsJoin}
      </script>
    </body>
  </html>`;
};

const ComponentA: FC<ComponentThatSetsHtmlProps> = ({
  updateHtml,
  defaultLanguage,
}) => {
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      updateHtml(value); // Actualiza el estado html en el componente padre
    }
  };

  return (
    <Editor
      theme="vs-light"
      height="50vh"
      defaultLanguage={defaultLanguage} // Utiliza la prop para configurar el lenguaje por defecto
      // defaultValue={`<p>Edita el contenido aquí...</p>`}
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

const ComponentC = ({ output }: { output: string }) => {
  return (
    <div>
      <iframe
        className="bg-white"
        srcDoc={output}
        title="Preview"
        sandbox="allow-scripts"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

const CodeEditor = () => {
  const [output, setOutput] = useState("");

  const [languages, setLanguages] = useState<LanguageGroups>({
    html: {
      html: {
        title: "HTML",
        active: true,
        code: "html",
        content: "",
      },
      markdown: {
        title: "Markdown",
        active: false,
        code: "markdown",
        content: "",
      },
    },
    css: {
      css: {
        title: "CSS",
        active: true,
        code: "css",
        content: "",
      },
      scss: {
        title: "SCSS",
        active: false,
        code: "scss",
        content: "",
      },
    },
    js: {
      javascript: {
        title: "JS",
        active: true,
        code: "javascript",
        content: "",
      },
      typescript: {
        title: "TS",
        active: false,
        code: "typescript",
        content: "",
      },
    },
  });

  const updateContent = (
    groupId: string,
    languageId: string,
    newContent: string
  ) => {
    setLanguages((prevLanguages) => {
      if (!prevLanguages[groupId] || !prevLanguages[groupId][languageId]) {
        return prevLanguages;
      }
      return {
        ...prevLanguages,
        [groupId]: {
          ...prevLanguages[groupId],
          [languageId]: {
            ...prevLanguages[groupId][languageId],
            content: newContent,
          },
        },
      };
    });
  };

  const toggleActive = (groupId: string, languageId: string) => {
    setLanguages((prevLanguages) => {
      const group = prevLanguages[groupId];
      if (!group) return prevLanguages;
      const isAnyActive = Object.values(group).some(
        (language: any) => language.active
      );

      return {
        ...prevLanguages,
        [groupId]: {
          ...group,
          [languageId]: {
            ...group[languageId],
            active: !group[languageId]!.active,
          },
          ...Object.keys(group).reduce((acc: any, key) => {
            if (key !== languageId) {
              acc[key] = {
                ...group[key],
                active:
                  isAnyActive && key !== languageId
                    ? false
                    : group[key]!.active,
              };
            }
            return acc;
          }, {} as LanguageGroup),
        },
      };
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutput(createHtml(languages));
    }, 300); // Añadimos un pequeño retraso para evitar demasiadas actualizaciones

    return () => clearTimeout(timeout); // Limpiar el timeout en cada cambio
  }, [languages]);

  return (
    <div className="editor-container">
      <div>
        {Object.entries(languages).map(([groupId, group]) => (
          <div key={groupId}>
            <h3>Group {groupId.toUpperCase()}</h3>
            <ul>
              {Object.entries(group).map(([languageId, language]) => (
                <li key={languageId}>
                  <button
                    onClick={() => toggleActive(groupId, languageId)}
                    disabled={Object.values(group).some(
                      (lang) => lang.active && lang !== language
                    )}
                  >
                    {language.title} {language.active ? "(Active)" : ""}
                  </button>
                  {language.active && (
                    <div className="popup">
                      <p>{language.title} window is open.</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* end contenido */}
      <div>
        <div className="App" style={{ height: "100vh" }}>
          <div>
            <TabProvider defaultTab="html">
              <div className="g-border-b flex justify-between items-center text-[14px] pb-2 ">
                <div className="flex">
                  {Object.values(languages).map((group) => {
                    return Object.values(group).map((language) => {
                      if (language.active) {
                        return (
                          <div key={language.code}>
                            <TabHeader value={language.code}>
                              {language.title}
                            </TabHeader>
                          </div>
                        );
                      } else {
                        return "";
                      }
                    });
                  })}

                  {/* <TabHeader value="tab1">HTML</TabHeader>
                  <TabHeader value="tab2">CSS</TabHeader>
                  <TabHeader value="tab3">JS</TabHeader> */}
                </div>
                <div className="flex">
                  <div className="p-2 hover:bg-secondary-200 rounded-md">
                    <IconReact name="code" size="small" />
                  </div>
                  <div className="p-2 hover:bg-secondary-200 rounded-md">
                    <IconReact name="menu-kebab" size="small" />
                  </div>
                </div>
              </div>
              <Split
                className="wrap"
                sizes={[50, 50]}
                minSize={0}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
              >
                <div>
                  {Object.entries(languages).map(([groupId, group]) => {
                    return Object.entries(group).map(
                      ([languageId, language]) => {
                        if (language.active) {
                          return (
                            <div key={language.code}>
                              <TabContent value={language.code}>
                                <ComponentA
                                  updateHtml={(newContent) =>
                                    updateContent(
                                      groupId,
                                      languageId,
                                      newContent
                                    )
                                  }
                                  defaultLanguage={language.code}
                                />
                              </TabContent>
                            </div>
                          );
                        } else {
                          return "";
                        }
                      }
                    );
                  })}

                  {/* <TabContent value="tab1">
                    <ComponentA
                      updateHtml={updateHtml}
                      defaultLanguage="html"
                    />
                  </TabContent>
                  <TabContent value="tab2">
                    <ComponentA updateHtml={updateCss} defaultLanguage="css" />
                  </TabContent>
                  <TabContent value="tab3">
                    <ComponentA
                      updateHtml={updateJs}
                      defaultLanguage="javascript"
                    />
                  </TabContent> */}
                </div>

                <ComponentC output={output} />
              </Split>
            </TabProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
