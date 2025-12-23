import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProfileSection } from "@/components/ProfileSection";
import { CVSection } from "@/components/CVSection";
import { ProgrammingLanguagesSection } from "@/components/ProgrammingLanguagesSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { CodeBackground } from "@/components/CodeBackground";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import {
  useAboutMe,
  useWorkExperience,
  useEducation,
  useProgrammingLanguages,
  useTestimonials,
  useTechnologyCategories,
} from "@/hooks/useFirebaseData";
import { useConfig } from "@/hooks/useConfig";
import { useProjects } from "@/hooks/useProjects";

const Index = () => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  // Cargar todos los datos de Firebase
  const { loading: loadingAboutMe } = useAboutMe();
  const { loading: loadingWorkExperience } = useWorkExperience();
  const { loading: loadingEducation } = useEducation();
  const { loading: loadingLanguages } = useProgrammingLanguages();
  const { loading: loadingTestimonials } = useTestimonials();
  const { loading: loadingTechnologies } = useTechnologyCategories();
  const { loading: loadingConfig } = useConfig();
  const { loading: loadingProjects } = useProjects();

  // Determinar si todavía está cargando
  const isLoading =
    loadingAboutMe ||
    loadingWorkExperience ||
    loadingEducation ||
    loadingLanguages ||
    loadingTestimonials ||
    loadingTechnologies ||
    loadingConfig ||
    loadingProjects;

  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-background relative">
          <CodeBackground />
          <Header language={language} onLanguageChange={handleLanguageChange} />
          <main className="relative z-10">
            <HeroSection language={language} />
            <AboutSection language={language} />
            <ProfileSection language={language} />
            <ProgrammingLanguagesSection language={language} />
            <TechnologiesSection language={language} />
            {/* CVSection temporarily commented out per request */}
            {/* <CVSection language={language} /> */}
            <ProjectsSection language={language} />
            <ContactSection language={language} />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
