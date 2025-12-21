import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  MessageSquare,
  Monitor,
  GitBranch,
  Smartphone,
  Cloud,
} from "lucide-react";
import { useTechnologyCategories } from "@/hooks/useFirebaseData";
import * as Icons from "lucide-react";

interface TechnologiesSectionProps {
  language: "es" | "en";
}

// Helper para obtener el componente de icono dinámicamente
const getIconComponent = (iconName: string) => {
  return (Icons as any)[iconName] || Monitor;
};

const translations = {
  es: {
    title: "Tecnologías",
    subtitle: "Herramientas y frameworks que domino",
    categories: {
      backend: {
        title: "Servidor / Backend",
        description: "Desarrollo robusto del lado del servidor",
      },
      communication: {
        title: "Comunicación",
        description: "APIs y protocolos de comunicación",
      },
      frontend: {
        title: "Cliente / Frontend",
        description: "Interfaces de usuario modernas",
      },
      versionControl: {
        title: "Control de versiones",
        description: "Gestión de código y colaboración",
      },
      databases: {
        title: "Bases de datos",
        description: "Sistemas relacionales y NoSQL",
      },
      tooling: {
        title: "Herramientas",
        description: "Herramientas de desarrollo y CI/CD",
      },
      testing: {
        title: "Testing y procesos",
        description: "Pruebas y metodología ágil",
      },
      mobile: {
        title: "Móvil multiplataforma",
        description: "Aplicaciones móviles nativas y híbridas",
      },
      cloud: {
        title: "Nube / Cloud",
        description: "Infraestructura y despliegue en la nube",
      },
      languages: {
        title: "Lenguajes",
        description: "Lenguajes de programación principales",
      },
    },
  },
  en: {
    title: "Technologies",
    subtitle: "Tools and frameworks I master",
    categories: {
      backend: {
        title: "Server / Backend",
        description: "Robust server-side development",
      },
      communication: {
        title: "Communication",
        description: "APIs and communication protocols",
      },
      frontend: {
        title: "Client / Frontend",
        description: "Modern user interfaces",
      },
      versionControl: {
        title: "Version Control",
        description: "Code management and collaboration",
      },
      databases: {
        title: "Databases",
        description: "Relational and NoSQL systems",
      },
      tooling: {
        title: "Tooling",
        description: "Development and CI/CD tools",
      },
      testing: {
        title: "Testing & Processes",
        description: "Testing and agile practices",
      },
      mobile: {
        title: "Cross-platform Mobile",
        description: "Native and hybrid mobile applications",
      },
      cloud: {
        title: "Cloud / Cloud",
        description: "Cloud infrastructure and deployment",
      },
      languages: {
        title: "Languages",
        description: "Primary programming languages",
      },
    },
  },
};

export const technologies = {
  languages: ["Java", "C#", "JavaScript", "TypeScript", "Python"],
  versionControl: [
    "Git",
    "GitHub",
    "GitLab",
    "Azure DevOps",
    "Team Foundation Server (TFS)",
  ],
  backend: [
    "ASP.NET",
    "ASP.NET Core",
    "Node.js",
    "Django",
    "Spring Boot",
    "Java EE",
    "Hibernate",
    "Spring Framework",
    "Spring MVC",
    "Entity Framework",
    "Microservices",
  ],
  frontend: ["HTML", "CSS", "React.js", "Redux", "Angular", "Svelte", "jQuery"],
  databases: [
    "Microsoft SQL Server",
    "MySQL",
    "MongoDB",
    "DB2",
    "Oracle",
    "NoSQL",
  ],
  cloud: [
    "Microsoft Azure",
    "App Service",
    "Azure Functions",
    "Key Vault",
    "Docker",
    "Kubernetes",
    "CI/CD pipelines",
  ],
  tooling: ["Postman", "Maven"],
  communication: ["APIs REST", "WebSockets", "gRPC", "SignalR", "GraphQL"],
  testing: ["JUnit", "Mockito", "TDD", "Scrum"],
  mobile: ["Xamarin", "Android", "windows form", "MAUI"],
};

const icons = {
  backend: Server,
  communication: MessageSquare,
  frontend: Monitor,
  versionControl: GitBranch,
  mobile: Smartphone,
  cloud: Cloud,
  databases: Server,
  tooling: GitBranch,
  testing: Monitor,
  languages: Monitor,
};

export const TechnologiesSection = ({ language }: TechnologiesSectionProps) => {
  const { data: technologyCategoriesData, loading } = useTechnologyCategories();

  // Separar la categoría de lenguajes
  const languagesCategory = technologyCategoriesData?.find(
    (cat) => cat.id === "languages"
  );
  const otherCategories = (technologyCategoriesData || [])
    .filter((cat) => cat.id !== "languages")
    .sort((a, b) => a.order - b.order);

  if (loading) {
    return (
      <section id="technologies" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Cargando tecnologías...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="technologies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Languages section (distinct, centered, above the technologies grid) */}
        {languagesCategory && (
          <div className="max-w-6xl mx-auto mb-24">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-primary mb-8 text-center">
                {languagesCategory.label[language]}
              </h2>
              <p className="text-sm text-muted-foreground mx-auto max-w-2xl">
                {languagesCategory.description[language]}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3">
              {languagesCategory.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200 px-3 py-1.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Technologies title */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            {language === "es" ? "Tecnologías" : "Technologies"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "es"
              ? "Herramientas y frameworks que domino"
              : "Tools and frameworks I master"}
          </p>
        </div>

        {/* Technologies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {otherCategories.map((category, index) => {
            const IconComponent = getIconComponent(category.icon);

            return (
              <Card
                key={category.id}
                className="group hover:shadow-hover transition-all duration-300 animate-scale-in border-2 border-secondary/20 hover:border-secondary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-primary">
                        {category.label[language]}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-sm text-foreground">
                    {category.description[language]}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
