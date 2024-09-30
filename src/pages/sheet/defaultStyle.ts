export const styleBase = /*css*/ `
body {
  font-family: "Atkinson", sans-serif;
  font-size: 1em;
  line-height: 1.5;
  // margin: 30px;
  padding: 30px;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;  
}
`;

export const styleMarkDown = /*css*/ `
h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  padding-left: 2px;
  padding-right: 2px;
  font-weight: 600;
}
blockquote {
  background: #E6F2E6;
  border-left: 3px solid #408040;
  font-style: italic;
  padding-left: 5px;
  margin-left: 2px;
}
pre {
    background: #f6f8fa;
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
  // border-left: 5px solid #55AAFF;
  // padding: 5px;
  // margin-left: 2px;
  // border: 1px solid #55AAFF;
}
code {
  background: #E0F0FF;
  font-family: consolas, monospace;
  font-size: 14px !important;
  padding: 2px;
  border-radius: 4px;
}

pre code {
  background: initial;
  font-size: initial;
}


table {
  border-spacing: 0px;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
}
th, td {
  border-left: 1px solid gray;
  border-top: 1px solid gray;
}
th {
  background: #D4D4D4;
  font-weight: 600;
}
ul {
  margin-left-ltr: 20px;
  margin-right-rtl: 20px;
}
ol {
  margin-left-ltr: 25px;
  margin-right-rtl: 25px;
}

.monaco-container {
    margin: 15px 0;
    border-radius: 4px;
    // border: 1px solid #d3d3d3;
    padding: 10px 10px 0 0;
    background: #f6f8fa;
}

.code-block-container {
  position: relative;
}

.copy-button {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    z-index: 100;
    padding: 0;
    padding: 6px;
    border-radius: 6px;
    display: flex;
    align-items: center;
}

.copy-button:hover {
    background: white;
}

.copy-button:active {
  transform: scale(0.9);
}

#voiceButton {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 100;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 1px solid #6a15d6;
  border-radius: 50%;
}


  
`;
