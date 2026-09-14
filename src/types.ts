export type Language = 'en' | 'ro' | 'it';

export interface ContactInfo {
  name: string;
  title: string;
  secondaryTitle: string;
  phone: string;
  email: string;
  secondaryEmail: string;
  linkedInUrl: string;
  linkedInHandle: string;
  location: string;
  remoteStatus: string;
  availability: string;
  summary: string;
  yearsOfExperience: string;
  itExperience: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  duration: string;
  isCurrent?: boolean;
  domain: 'automotive' | 'it' | 'engineering' | 'telecom';
  highlightBadge: string;
  summary: string;
  keyResponsibilities: string[];
  technologies: string[];
  impactMetric?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    category: string;
    isKeySkill?: boolean;
    description?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  details?: string;
  badge?: string;
}

export interface LanguageSkill {
  name: string;
  level: string;
  code: string;
  stars: number;
}

export interface CANMessage {
  id: string;
  canId: string;
  name: string;
  ecuSource: string;
  dlc: number;
  payloadHex: string;
  cycleTimeMs: number;
  safetyLevel: 'ASIL-B' | 'ASIL-D' | 'QM';
  status: 'VALIDATED' | 'TRANSMITTING' | 'SIMULATED';
  description: string;
}

export interface RecommendationItem {
  id: string;
  author: string;
  role: string;
  relationship: string;
  company: string;
  text: string;
  avatarColor: string;
}

export interface FaqItem {
  question: string;
  category: string;
  answer: string;
}
