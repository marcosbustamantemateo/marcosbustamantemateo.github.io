import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Terminal } from "lucide-react";
import { useConfigSection } from "@/hooks/useConfig";
import { useAboutMe } from "@/hooks/useFirebaseData";

interface HeroSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    downloadCV: "Descargar CV",
    contact: "Contactar",
    experience: "Años de experiencia",
    projects: "Proyectos completados",
    technologies: "Tecnologías dominadas",
  },
  en: {
    downloadCV: "Download CV",
    contact: "Contact",
    experience: "Years of experience",
    projects: "Completed projects",
    technologies: "Mastered technologies",
  },
};

export const HeroSection = ({ language }: HeroSectionProps) => {
  const t = translations[language];
  const { data: aboutMe, loading: aboutMeLoading } = useAboutMe();
  const { data: heroStats, loading } = useConfigSection("heroStats");
  const { data: technologyCategories } = useConfigSection(
    "technologyCategories"
  );

  const isLoading = aboutMeLoading || loading || !aboutMe;

  // Calcular el total de tecnologías si está en modo "auto"
  const getTechCount = () => {
    if (!heroStats || !technologyCategories) {
      return "50+";
    }

    if (heroStats.displayFormat.technologies !== "auto") {
      return heroStats.displayFormat.technologies;
    }

    const unique = new Set<string>();
    technologyCategories.forEach((category) => {
      category.technologies.forEach((tech) => unique.add(tech));
    });
    const techCount = unique.size;
    return techCount > 50 ? "50+" : `${techCount}+`;
  };

  return (
    <section
      id="profile"
      className="md:min-h-screen flex items-center justify-center relative overflow-visible"
    >
      <div className="container mx-auto px-4 pt-12 pb-24 md:pt-12 md:pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Avatar */}
          <div
            className={`w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 relative mt-10 md:mt-0 transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100 animate-scale-in"
            }`}
          >
            <div className="absolute -inset-8 md:-inset-10 bg-gradient-primary rounded-full blur-2xl opacity-60 animate-glow-pulse" />
            <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center border-8 border-primary/50 overflow-hidden">
              <picture>
                <source srcSet="/images/logo.webp" type="image/webp" />
                <img
                  src="/images/logo.png"
                  alt="MB"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>

          {/* Main Content */}
          {!isLoading && (
            <div className="space-y-4">
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                  {aboutMe.name}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                  {aboutMe.title[language]}
                </h2>
                <p className="text-lg md:text-xl text-secondary font-mono">
                  {"<"} {aboutMe.subtitle[language]} {"/>"}
                </p>
              </div>

              {/* Action Buttons - Commented out for future use */}
              {/* 
            <div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-neon hover:scale-105 transition-all duration-300 font-mono"
              >
                <Download className="w-4 h-4 mr-2" />
                {t.downloadCV}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-hover transition-all duration-300 font-mono"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t.contact}
              </Button>
            </div>
            */}

              {/* Stats */}
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                {heroStats &&
                  [
                    {
                      value: heroStats.displayFormat.experience,
                      label: t.experience,
                    },
                    {
                      value: heroStats.displayFormat.projects,
                      label: t.projects,
                    },
                    { value: getTechCount(), label: t.technologies },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-lg glass border-2 border-primary/50 md:border-primary/20 md:hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent md:group-hover:text-primary md:transition-all md:duration-300 mb-2 font-mono">
                        {stat.value}
                      </div>
                      <div className="text-sm bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
