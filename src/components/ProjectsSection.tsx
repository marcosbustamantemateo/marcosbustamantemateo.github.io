import { Badge } from "@/components/ui/badge";
import { ExternalLink, Folder, Globe, Smartphone, Monitor } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import projectMes from "@/assets/project-mes.jpg";
import projectLogistics from "@/assets/project-logistics.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectWarehouse from "@/assets/project-warehouse.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectQuality from "@/assets/project-quality.jpg";

interface ProjectsSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "Mis Proyectos",
    subtitle: "Soluciones digitales que he desarrollado",
    web: "Web",
    mobile: "Móvil",
    desktop: "Escritorio",
    viewProject: "Ver Proyecto",
    comingSoon: "Próximamente",
  },
  en: {
    title: "My Projects",
    subtitle: "Digital solutions I've developed",
    web: "Web",
    mobile: "Mobile",
    desktop: "Desktop",
    viewProject: "View Project",
    comingSoon: "Coming Soon",
  },
};

const typeIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
};

export const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: "Royal Chicken BBQ",
      description: {
        es: "Web de información de negocio de comida rápida",
        en: "Fast food business information website",
      },
      image: "/images/projects/royal-chicke-bbq.png",
      type: "web" as const,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://royal-chicken-bbq.netlify.app/",
      comingSoon: false,
    },
    {
      id: 2,
      title: "Oscar Hellboy - Boxeador Profesional",
      description: {
        es: "Web sobre la carrera profesional del boxeador",
        en: "Website about the professional boxer's career",
      },
      image: "/images/projects/oscar-hellboy.png",
      type: "web" as const,
      technologies: ["React", "Vite", "CSS"],
      link: "https://oscar-hellboy.netlify.app/",
      comingSoon: false,
    },
    {
      id: 3,
      title: "Meme Generator",
      description: {
        es: "Crea y comparte memes creados desde plantilla de los más famosos",
        en: "Create and share memes created from the most famous templates",
      },
      image: "/images/projects/meme-generator.png",
      type: "web" as const,
      technologies: ["React", "Canvas API", "JavaScript"],
      link: "https://mbm-meme-generator.netlify.app/",
      comingSoon: false,
    },
    {
      id: 4,
      title: "Reportes COVID-19",
      description: {
        es: "Muestra mapa con datos de COVID actualizados en tiempo real",
        en: "Shows map with COVID data updated in real time",
      },
      image: "/images/projects/covid-19-reports.png",
      type: "web" as const,
      technologies: ["React", "Leaflet", "REST API"],
      link: "https://covid-19-dd7e1.web.app/",
      comingSoon: false,
    },
    /* Commented out existing projects per request
    {
      id: 5,
      title: "Sistema MES Industrial",
      description: {
        es: "Plataforma completa de gestión de manufactura con monitoreo en tiempo real y análisis de KPIs para industria 4.0",
        en: "Complete manufacturing execution system with real-time monitoring and KPI analysis for Industry 4.0",
      },
      image: projectMes,
      type: "web" as const,
      technologies: [".NET Core", "React", "SignalR", "PostgreSQL"],
      link: "#",
      comingSoon: true,
    },
    {
      id: 6,
      title: "App de Gestión Logística",
      description: {
        es: "Aplicación móvil multiplataforma para gestión de rutas y seguimiento de entregas en tiempo real",
        en: "Cross-platform mobile app for route management and real-time delivery tracking",
      },
      image: projectLogistics,
      type: "mobile" as const,
      technologies: ["MAUI", "C#", "REST API", "Azure Maps"],
      link: "#",
      comingSoon: true,
    },
    {
      id: 7,
      title: "Dashboard Analítico Empresarial",
      description: {
        es: "Dashboard interactivo con visualización de datos en tiempo real y reportes personalizados",
        en: "Interactive dashboard with real-time data visualization and custom reports",
      },
      image: projectDashboard,
      type: "web" as const,
      technologies: ["Angular", "ASP.NET Core", "GraphQL", "MongoDB"],
      link: "#",
      comingSoon: true,
    },
    {
      id: 8,
      title: "Software de Gestión de Almacén",
      description: {
        es: "Aplicación de escritorio para control de inventario y optimización de almacenamiento",
        en: "Desktop application for inventory control and storage optimization",
      },
      image: projectWarehouse,
      type: "desktop" as const,
      technologies: ["WPF", "C#", "Entity Framework", "SQL Server"],
      link: "#",
      comingSoon: true,
    },
    {
      id: 9,
      title: "E-Commerce B2B",
      description: {
        es: "Plataforma de comercio electrónico B2B con catálogo personalizado y sistema de pagos integrado",
        en: "B2B e-commerce platform with custom catalog and integrated payment system",
      },
      image: projectEcommerce,
      type: "web" as const,
      technologies: ["Blazor", ".NET 8", "Stripe", "Kubernetes"],
      link: "#",
      comingSoon: true,
    },
    {
      id: 10,
      title: "App de Control de Calidad",
      description: {
        es: "Aplicación móvil para inspecciones de calidad y generación de informes con firma digital",
        en: "Mobile app for quality inspections and report generation with digital signature",
      },
      image: projectQuality,
      type: "mobile" as const,
      technologies: ["Flutter", "Firebase", "REST API", "AWS S3"],
      link: "#",
      comingSoon: true,
    },
    */
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            {t.title}
          </h2>
          <p className="text-lg text-secondary font-semibold animate-glow-pulse hidden">
            {"// "}
            {t.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const TypeIcon = typeIcons[project.type];
            return (
              <AnimatedSection
                key={project.id}
                animation="scale-in"
                delay={index * 100}
              >
                <div className="group relative overflow-hidden rounded-xl glass border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-hover cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30">
                      <TypeIcon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-mono text-foreground">
                        {project.type === "web" && t.web}
                        {project.type === "mobile" && t.mobile}
                        {project.type === "desktop" && t.desktop}
                      </span>
                    </div>

                    {/* Hover overlay line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-neon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-foreground line-clamp-2">
                        {project.description[language]}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs font-mono border-secondary text-secondary hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Coming Soon / View Project */}
                    <div className="pt-2">
                      {project.comingSoon ? (
                        <span className="text-sm text-secondary font-mono animate-glow-pulse">
                          {">"} {t.comingSoon}...
                        </span>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-neon-blue font-mono transition-colors group/link"
                        >
                          {t.viewProject}
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
