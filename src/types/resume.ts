// Erwin Lejeune - 2026-02-15

/** Contact details for the resume header. */
export interface ContactInfo {
  email: string;
  phone?: string;
  portfolio?: string;
  location?: string;
  github?: string;
  linkedin?: string;
}

/** A single bullet point in a work experience entry. */
export interface ExperienceBullet {
  text: string;
}

/** A single work experience entry. */
export interface Experience {
  company: string;
  companyUrl?: string;
  location?: string;
  role: string;
  period: string;
  bullets: ExperienceBullet[];
  promotions?: string;
}

/** An academic degree or certificate. */
export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
}

/** A published paper, article, or conference contribution. */
export interface Publication {
  title: string;
  venue: string;
  date: string;
  url?: string;
}

/** A group of related skills (e.g. "Frontend", "Backend"). */
export interface SkillGroup {
  category: string;
  items: string[];
}

/** A personal or professional project entry. */
export interface Project {
  name: string;
  url?: string;
  description: string;
  tech: string[];
}

/** A spoken / written language with proficiency level. */
export interface Language {
  name: string;
  proficiency: string;
}

/** Root data structure for the entire resume. */
export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  /** Optional sections -- omit or leave as empty arrays to hide them. */
  publications?: Publication[];
  projects?: Project[];
  languages?: Language[];
  /**
   * Path or URL to a PDF version of the resume.
   * When set, a floating download button appears and the URL is
   * directly shareable (e.g. "https://yoursite.com/resume.pdf").
   * Place the file in `public/` so Vite serves it at the root.
   */
  pdfUrl?: string;
}
