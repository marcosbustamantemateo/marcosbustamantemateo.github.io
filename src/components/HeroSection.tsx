import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Terminal } from "lucide-react";
import { technologies as allTechnologies } from "@/components/TechnologiesSection";

interface HeroSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "Desarrollador de Software",
    subtitle: "Especializado en .NET, C# y Soluciones Empresariales",
    description:
      "Soy un experimentado desarrollador de software especializado en desarrollo web, así como aplicaciones de escritorio o móviles. Me distingo por la creación de código eficiente y fácil de mantener. Mi enfoque principal ha sido el ecosistema .NET con C#, trabajando en proyectos BFF, microservicios, GraphQL y liderando iniciativas MES/MOM para la transformación digital en la industria 4.0.",
    commitment:
      "Mi compromiso con la excelencia técnica me permite superar retos empresariales y generar impacto positivo en cada proyecto.",
    downloadCV: "Descargar CV",
    contact: "Contactar",
    location: "España",
    experience: "Años de experiencia",
    projects: "Proyectos completados",
    technologies: "Tecnologías dominadas",
  },
  en: {
    title: "Software Developer",
    subtitle: "Specialized in .NET, C# and Enterprise Solutions",
    description:
      "I am an experienced software developer specialized in web development, as well as desktop and mobile applications. I excel at creating efficient and maintainable code. My main focus has been the .NET ecosystem with C#, working on BFF projects, microservices, GraphQL and leading MES/MOM initiatives for digital transformation in Industry 4.0.",
    commitment:
      "My commitment to technical excellence allows me to overcome business challenges and generate positive impact in every project.",
    downloadCV: "Download CV",
    contact: "Contact",
    location: "Spain",
    experience: "Years of experience",
    projects: "Completed projects",
    technologies: "Mastered technologies",
  },
};

export const HeroSection = ({ language }: HeroSectionProps) => {
  const t = translations[language];

  return (
    <section
      id="profile"
      className="md:min-h-screen flex items-center justify-center relative overflow-visible"
    >
      <div className="container mx-auto px-4 pt-12 pb-24 md:pt-12 md:pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Avatar */}
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 relative animate-scale-in mt-10 md:mt-0">
            <div className="absolute -inset-8 md:-inset-10 bg-gradient-primary rounded-full blur-2xl opacity-60 animate-glow-pulse" />
            <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center border-8 border-primary/50 overflow-hidden">
              <img
                src="/images/logo.png"
                alt="MB"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                Marcos Bustamante
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                {t.title}
              </h2>
              <p className="text-lg md:text-xl text-secondary font-mono">
                {"<"} {t.subtitle} {"/>"}
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
              {(() => {
                const unique = new Set<string>();
                Object.values(allTechnologies).forEach((arr: any) =>
                  arr.forEach((s: string) => unique.add(s))
                );
                const techCount = unique.size;
                const techDisplay = techCount > 50 ? "50+" : `${techCount}+`;

                return [
                  { value: "8+", label: t.experience },
                  { value: "20+", label: t.projects },
                  { value: techDisplay, label: t.technologies },
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
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
