/**
 * 🔧 Tipos para Configuración Dinámica desde Firebase
 *
 * Define todos los tipos que se cargarán desde Firebase Firestore
 * en lugar de estar hardcodeados en el código.
 */

// ============================================
// ABOUT ME
// ============================================

export interface AboutMe {
  name: string;
  title: {
    es: string;
    en: string;
  };
  subtitle: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  commitment: {
    es: string;
    en: string;
  };
  location: {
    es: string;
    en: string;
  };
  avatarUrl: string;
}

// ============================================
// WORK EXPERIENCE
// ============================================

export interface WorkExperience {
  id: string;
  company: string;
  position: {
    es: string;
    en: string;
  };
  period: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  achievements?: {
    es: string[];
    en: string[];
  };
  technologies: string[];
  order: number;
}

// ============================================
// EDUCATION
// ============================================

export interface Education {
  id: string;
  institution: string;
  degree: {
    es: string;
    en: string;
  };
  period: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  technologies: string[];
  order: number;
}

// ============================================
// PROGRAMMING LANGUAGES
// ============================================

export interface ProgrammingLanguage {
  id: string;
  name: string;
  category: string;
  order: number;
}

// ============================================
// TIPOS PARA ANALYTICS Y FORMULARIOS
// ============================================

export interface ProjectTypeConfig {
  id: string;
  label: {
    es: string;
    en: string;
  };
  icon: string;
}

export interface LanguageConfig {
  id: string;
  code: string;
  label: {
    es: string;
    en: string;
  };
  flag?: string;
}

export interface ContactTypeConfig {
  id: string;
  label: {
    es: string;
    en: string;
  };
  icon: string;
  url: string;
}

export interface ShareChannelConfig {
  id: string;
  label: {
    es: string;
    en: string;
  };
  icon: string;
  baseUrl: string;
}

// ============================================
// TIPOS PARA HERO SECTION
// ============================================

export interface HeroStatsConfig {
  yearsOfExperience: number;
  projectsCompleted: number;
  technologiesMastered: number;
  displayFormat: {
    experience: string;
    projects: string;
    technologies: string;
  };
}

// ============================================
// TIPOS PARA TESTIMONIOS
// ============================================

export interface TestimonialConfig {
  id: string;
  name: string;
  initials: string;
  content: {
    es: string;
    en: string;
  };
  linkedin?: string;
  rating: number;
  imageUrl?: string;
  order: number;
}

// ============================================
// TIPOS PARA TECNOLOGÍAS
// ============================================

export interface TechnologyCategoryConfig {
  id: string;
  label: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  icon: string;
  technologies: string[];
  order: number;
}

// ============================================
// CONFIGURACIÓN GLOBAL (Solo projectSettings)
// ============================================

export interface AppConfig {
  projectTypes: ProjectTypeConfig[];
  languages: LanguageConfig[];
  contactTypes: ContactTypeConfig[];
  shareChannels: ShareChannelConfig[];
  heroStats: HeroStatsConfig;
  lastUpdated: string | Date;
  version: string;
}

// ============================================
// TIPOS AUXILIARES
// ============================================

export type Language = "es" | "en";
export type ProjectType = string;
export type ContactType = string;
export type ShareChannel = string;
