export const styleBase = `
body {
  font-family: "Atkinson", sans-serif;
  font-size: 1em;
  line-height: 1.5;
  // margin: 30px;
  padding: 30px;
}
`;

export const styleMarkDown = `
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
  background: #E0F0FF;
  border-left: 5px solid #55AAFF;
  padding: 5px;
  margin-left: 2px;
}
code {
  background: #E0F0FF;
  font-family: JetBrains Mono NL, Courier New, Monospaced;
  font-size: 0.9em;
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
}`;
