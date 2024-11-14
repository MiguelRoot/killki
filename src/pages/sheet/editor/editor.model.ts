export type ICodeID = "HTML" | "CSS" | "JS";
export type IIndexLanguage = "html" | "css" | "javascript";
export type IIndexActive =
  | "html"
  | "css"
  | "scss"
  | "javascript"
  | "typescript"
  | "markdown";

export type IIndexStack =
  | "angular"
  | "react"
  | "vanillaJs"
  | "vanillaTs"
  | "static"
  | "notes";

export interface IStoreSheets {
  version: string;
  config: IConfig;
  stacks: IStacks;
}

export interface IConfig {
  splitSize: number[];
  setting: boolean;
  sizeWindow: string;
  stack: IIndexStack;
}

export interface IStacks {
  angular: OnlyStack;
  react: OnlyStack;
  vanillaJs: OnlyStack;
  vanillaTs: OnlyStack;
  static: OnlyStack;
  notes: OnlyStack;
}

export interface OnlyStack {
  icon: string;
  title: string;
  subtitle: string;
  console: boolean;
  view: boolean;
  language: ILanguage;
}

export interface ILanguage {
  html?: IContent;
  css?: IContent;
  javascript?: IContent;
}

export interface IContent {
  codeId: ICodeID;
  content: string;
  active: IIndexActive;
  codes: ICode[];
}

export interface ICode {
  title: string;
  code: IIndexActive;
}
