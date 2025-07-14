export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  fork: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
