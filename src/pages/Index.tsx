import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProfileSection } from "@/components/ProfileSection";
import { CVSection } from "@/components/CVSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { CodeBackground } from "@/components/CodeBackground";

const Index = () => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <CodeBackground />
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main className="relative z-10">
        <HeroSection language={language} />
        <AboutSection language={language} />
        <ProfileSection language={language} />
        <TechnologiesSection language={language} />
        {/* CVSection temporarily commented out per request */}
        {/* <CVSection language={language} /> */}
        <ProjectsSection language={language} />
        <ContactSection language={language} />
      </main>
    </div>
  );
};

export default Index;
