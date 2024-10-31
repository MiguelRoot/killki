import React, { useState, useEffect } from "react";

type ConsoleMessage = {
  type: string;
  payload: any;
};

interface ConsoleData {
  console?: {
    payload?: any;
    type?: string;
  };
}

declare const $iframe: HTMLIFrameElement;

const ConsoleViewer: React.FC = () => {
  const [messages, setMessages] = useState<ConsoleMessage[]>([]);

  useEffect(() => {
    const handleMessage = (ev: MessageEvent<ConsoleData>) => {
      const consoleData = ev.data.console;

      if (!consoleData) return;

      const { payload, type } = consoleData;

      // Verificar si el mensaje viene de un iframe específico o es de tipo 'loop'
      //   if (ev.source === $iframe.contentWindow || type === "loop") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: type || "default", payload },
      ]);
      //   }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      {/* <h2>Consola de Mensajes</h2>
      <div
        style={{
          backgroundColor: "#1e1e1e",
          color: "#dcdcdc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {messages.length === 0 ? (
          <p>No hay mensajes</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: "8px" }}>
              <strong>{msg.type}:</strong> {JSON.stringify(msg.payload)}
            </div>
          ))
        )}
      </div> */}
    </div>
  );
};

export default ConsoleViewer;
