const iconvoice = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.69133 2.24999C9.57263 2.25459 9.45934 2.30078 9.37127 2.38049L5.09627 5.93549C5.02647 6.00481 4.94188 6.05742 4.84884 6.08937C4.7558 6.12133 4.65674 6.13179 4.55908 6.11999H1.80452C1.71511 6.11939 1.62649 6.13656 1.54378 6.17049C1.46106 6.20443 1.38592 6.25446 1.3227 6.31767C1.25949 6.38089 1.20946 6.45604 1.17552 6.53875C1.14158 6.62146 1.12442 6.71009 1.12502 6.79949V11.2016C1.12457 11.2909 1.14184 11.3794 1.17585 11.462C1.20985 11.5446 1.2599 11.6196 1.32311 11.6827C1.38631 11.7458 1.4614 11.7957 1.54404 11.8296C1.62667 11.8635 1.71521 11.8806 1.80452 11.88H4.55627C4.65393 11.8682 4.75299 11.8786 4.84603 11.9106C4.93906 11.9426 5.02366 11.9952 5.09345 12.0645L9.36845 15.6195C9.66152 15.863 9.97651 15.7455 9.97651 15.4569V2.54361C9.97871 2.50519 9.9729 2.46674 9.95946 2.43068C9.94602 2.39463 9.92523 2.36175 9.89842 2.33415C9.87161 2.30655 9.83936 2.28481 9.80371 2.27032C9.76806 2.25584 9.72979 2.24891 9.69133 2.24999ZM15.1875 3.54374L14.1801 4.5523C15.0307 5.8829 15.4827 7.42917 15.4827 9.00842C15.4827 10.5877 15.0307 12.1339 14.1801 13.4645L15.1841 14.4635C16.2849 12.8557 16.8742 10.9527 16.8748 9.00416C16.8754 7.05558 16.2873 5.15229 15.1875 3.54374ZM12.7502 5.97542L11.7591 6.97499C12.1991 7.56234 12.437 8.27648 12.437 9.01039C12.437 9.7443 12.1991 10.4584 11.7591 11.0458L12.7468 12.0335C13.4417 11.1774 13.8215 10.1085 13.8225 9.00576C13.8235 7.90306 13.4458 6.83346 12.7525 5.97599L12.7502 5.97542Z" fill="#7917F5"/></svg>';
const iconStop = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 3.75H12.75C13.1478 3.75 13.5294 3.90804 13.8107 4.18934C14.092 4.47064 14.25 4.85218 14.25 5.25V12.75C14.25 13.1478 14.092 13.5294 13.8107 13.8107C13.5294 14.092 13.1478 14.25 12.75 14.25H5.25C4.85218 14.25 4.47064 14.092 4.18934 13.8107C3.90804 13.5294 3.75 13.1478 3.75 12.75V5.25C3.75 4.85218 3.90804 4.47064 4.18934 4.18934C4.47064 3.90804 4.85218 3.75 5.25 3.75Z" fill="#7917F5"/></svg>';
const htmlMarkdown = (
  /*html*/
  `

<button id="voiceButton">${iconvoice}</button>`
);
const javascriptMarkdown = (
  /*javascript*/
  `

require.config({
    paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' }
  });

  require(['vs/editor/editor.main'], function(monaco) {

    // Función principal que procesa todos los bloques de código
    const codeBlocks = document.querySelectorAll('pre > code');
    codeBlocks.forEach((codeBlock) => {
      const lang = getCodeLanguage(codeBlock);  // Obtener el lenguaje del bloque
      const code = codeBlock.textContent;

      // Crear el contenedor principal para el código y el botón
      const containerDiv = document.createElement('div');
      containerDiv.classList.add('code-block-container'); // Asignar una clase al contenedor

      // Crear el contenedor para Monaco
      const editorDiv = createEditorContainer(codeBlock); 

      // Crear el botón de copiar
      const copyButton = createCopyButton();

      // Agregar el botón y el editor al contenedor
      containerDiv.appendChild(copyButton);  // Añadir el botón primero
      containerDiv.appendChild(editorDiv);   // Añadir el editor después

      // Reemplazar el bloque original con el contenedor
      codeBlock.parentElement.replaceWith(containerDiv);

      // Crear el editor y ajustar su alto dinámicamente
      const editor = setupMonacoEditor(monaco, editorDiv, code, lang);
      adjustEditorHeight(editor, editorDiv);  // Ajustar la altura basado en el contenido
      

      // Asignar evento de copiar al botón
      copyButton.addEventListener('click', () => copyToClipboard(editor));
    });

    // Funciones existentes...

    function setupMonacoEditor(monaco, editorDiv, code, lang) {
      monaco.editor.defineTheme('default', {
        base: 'vs',
        inherit: true,
        rules: [],
        colors: {
          'editor.background': '#f6f8fa',
        }
      });

      monaco.editor.setTheme('default');

      return monaco.editor.create(editorDiv, {
        value: code,
        language: lang,
        readOnly: true,
        automaticLayout: true,
        minimap: { enabled: false },
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden',
          handleMouseWheel: false
        },
        hover: {
          delay: 500
        },
        smoothScrolling: false,
        overviewRulerLanes: 0,
        renderLineHighlight: 'none',
        folding: false,
        renderIndentGuides: false,
        scrollBeyondLastLine: false
      });
    }

    function createEditorContainer(codeBlock) {
      const editorDiv = document.createElement('div');
      editorDiv.classList.add('monaco-container');
      return editorDiv;
    }

    function getCodeLanguage(codeBlock) {
      return codeBlock.className.replace('language-', '') || 'javascript';
    }

    function adjustEditorHeight(editor, editorDiv) {
      const lineHeight = editor.getOption(monaco.editor.EditorOption.lineHeight);
      const lineCount = editor.getModel().getLineCount();
      editorDiv.style.height = lineHeight * lineCount + "px";
    }

    function createCopyButton() {
      const button = document.createElement('button');
      button.innerHTML = '<svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 6.75V4.65C6.75 3.81 6.75 3.39 6.9135 3.069C7.0575 2.78625 7.28625 2.5575 7.569 2.4135C7.89 2.25 8.31 2.25 9.15 2.25H13.35C14.19 2.25 14.61 2.25 14.931 2.4135C15.2132 2.55731 15.4427 2.78677 15.5865 3.069C15.75 3.39 15.75 3.81 15.75 4.65V8.85C15.75 9.69 15.75 10.11 15.5865 10.431C15.4427 10.7132 15.2132 10.9427 14.931 11.0865C14.61 11.25 14.19 11.25 13.3522 11.25H11.25M6.75 6.75H4.65C3.81 6.75 3.39 6.75 3.069 6.9135C2.78677 7.05731 2.55731 7.28677 2.4135 7.569C2.25 7.89 2.25 8.31 2.25 9.15V13.35C2.25 14.19 2.25 14.61 2.4135 14.931C2.55731 15.2132 2.78677 15.4427 3.069 15.5865C3.38925 15.75 3.80925 15.75 4.64775 15.75H8.853C9.69075 15.75 10.11 15.75 10.431 15.5865C10.7132 15.4427 10.9427 15.2132 11.0865 14.931C11.25 14.61 11.25 14.1907 11.25 13.3522V11.25M6.75 6.75H8.85C9.69 6.75 10.11 6.75 10.431 6.9135C10.7132 7.05731 10.9427 7.28677 11.0865 7.569C11.25 7.88925 11.25 8.30925 11.25 9.14775V11.25" stroke="#59636E" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      button.classList.add('copy-button');
      return button;
    }

    function copyToClipboard(editor) {
      const code = editor.getValue();
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  });

    // Función para obtener el texto del
function getTextDocument() {
    let textToRead = '';
    const markdownContent = document.querySelector('#markdown-content');
    if (!markdownContent) return "";

    markdownContent.childNodes.forEach((node, index) => {
        // Verifica si el nodo no es un .code-block-container ni un pre
        if (node.nodeType === Node.ELEMENT_NODE
            && !node.classList.contains('code-block-container')
            && node.tagName.toLowerCase() !== 'pre') {
            // Añadir el texto de nodos elementales que no sean bloques de código
            textToRead += node.textContent.trim() + ' ';
        } else if (node.nodeType === Node.TEXT_NODE) {
            // Añadir texto directo (nodos de texto puros)
            textToRead += node.textContent.trim() + ' ';
        }
    });
    return textToRead.trim();
}



/// reproducir voice ///
// Estado inicial del SAM
const state = {
    isPlaying: false,
    utterance: new SpeechSynthesisUtterance(getTextDocument()),
  };
  
  // Acción: Controlar el click del botón
  function toggleVoiceAction() {
    if (!state.isPlaying) {
      // Reproducir
      state.utterance.lang = 'es-ES';  // Puedes cambiar el idioma aquí

        // Configuración de callback cuando termina de hablar
        state.utterance.onend = function () {
            state.isPlaying = false;
            updateView();
        };

      speechSynthesis.speak(state.utterance);
    } else {
      // Detener la reproducción si está activa
      speechSynthesis.cancel();
    }
  
    // Actualizar el modelo con la acción ejecutada
    updateModel();
  }
  
  // Modelo: Cambiar el estado basado en si se está reproduciendo o no
  function updateModel() {
    state.isPlaying = !state.isPlaying;
    updateView();
  }
  
  // Vista: Actualizar el texto del botón basado en el estado
  function updateView() {
    const button = document.getElementById('voiceButton');
    button.innerHTML = state.isPlaying ? '${iconStop}' : '${iconvoice}';
  }
  
  // Escuchar el click del botón
  document.getElementById('voiceButton').addEventListener('click', toggleVoiceAction);

`
);

export { htmlMarkdown, javascriptMarkdown };
