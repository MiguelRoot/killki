export interface II18n {
  status: string;
  welcome: string;
  name: string;
  senior: string;
  career: string;
  city: string;
  linkedin: string;
  phone: string;
  email: string;
  presentation: string;
  detalies: string[];
  profile: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  menu: Menu[];
}

export interface Education {
  startDate: string;
  city: string;
  career: string;
  institution: string;
}

export interface Experience {
  startDate: string;
  city: string;
  position: string;
  company: string;
  description: string;
  detalies: string[];
}

export interface Menu {
  label: string;
  path: string;
  color: string;
}

export interface Project {
  image: string;
  title: string;
  link: string;
  description: string;
  stack: string[];
}

export interface Skill {
  icon: string;
  title: string;
  level: number;
}
