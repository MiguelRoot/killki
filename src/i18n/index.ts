import { translations, profession } from "./translations";
const { es, en } = translations;

export const LANG = {
  es: {
    link: "/",
    text: "es",
  },
  en: {
    link: "en",
    text: "en",
  },
};

export const i18n = (lang: string | undefined) => {
  const t = lang === "es" ? es : en;
  return t;
};

export const i18nDetail = (page: "frontend" | "fullstack" | "backend", lang: "es" | "en") : DataPage => {
  const dataPage = {
    profile: profession[page]?.[lang],
    detail: profession['detail'],
    menu: profession["menu"]?.[lang],
    skillsList: profession["skillsList"],
    global: profession["global"][lang],
  }
  return dataPage as DataPage;
}


// https://app.quicktype.io/?l=ts

export interface DataPage {
    profile:    Profile;
    detail:     Detail;
    menu:       Menu[];
    skillsList: SkillsList[];
    global:     Global;
}

export interface Detail {
    senior:   string;
    name:     string;
    city:     string;
    linkedin: string;
    web:      string;
    phone:    string;
    email:    string;
}

export interface Global {
    status:       string;
    welcome:      string;
    education:    Education[];
    presentation: string;
}

export interface Education {
    startDate:   string;
    city:        string;
    institution: string;
}

export interface Menu {
    label: string;
    path:  string;
    color: string;
}

export interface Profile {
    career:     string;
    web:        string;
    profile:    string;
    experience: Experience[];
    projects:   Project[];
}

export interface Experience {
    id:           string;
    startDate:    string;
    city:         string;
    position:     string;
    company:      string;
    detalies:     string[];
    description?: string;
}

export interface Project {
    id?:         string;
    image:       string;
    title:       string;
    link:        string;
    description: string;
    stack:       string[];
}

export interface SkillsList {
    icon:  string;
    title: string;
    level: number;
}
