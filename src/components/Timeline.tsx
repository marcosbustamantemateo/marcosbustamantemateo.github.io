import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar, Award } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: "work" | "education";
  logo?: string;
}

interface TimelineProps {
  language: "es" | "en";
  type: "work" | "education";
}

const calculateDuration = (
  periodStr: string,
  language: "es" | "en"
): string => {
  if (!periodStr) return "";

  const parts = periodStr.split(" – ");

  // Handle single date (month/year only) - show it was that month
  if (parts.length === 1) {
    const dateStr = periodStr.trim();
    const [month, year] = dateStr.split("/").map(Number);

    if (!month || !year) return "";

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;

    let months = (currentYear - year) * 12 + (currentMonth - month);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (language === "es") {
      if (years > 0 && remainingMonths > 0) {
        return `Hace ${years} ${
          years === 1 ? "año" : "años"
        } y ${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`;
      } else if (years > 0) {
        return `Hace ${years} ${years === 1 ? "año" : "años"}`;
      } else if (remainingMonths > 0) {
        return `Hace ${remainingMonths} ${
          remainingMonths === 1 ? "mes" : "meses"
        }`;
      }
    } else {
      if (years > 0 && remainingMonths > 0) {
        return `${years} ${
          years === 1 ? "year" : "years"
        } and ${remainingMonths} ${
          remainingMonths === 1 ? "month" : "months"
        } ago`;
      } else if (years > 0) {
        return `${years} ${years === 1 ? "year" : "years"} ago`;
      } else if (remainingMonths > 0) {
        return `${remainingMonths} ${
          remainingMonths === 1 ? "month" : "months"
        } ago`;
      }
    }

    return "";
  }

  // Handle date range
  if (parts.length !== 2) return "";

  const startDate = parts[0].trim();
  const endDateStr = parts[1].trim();

  const [startMonth, startYear] = startDate.split("/").map(Number);

  if (!startMonth || !startYear) return "";

  let endMonth: number;
  let endYear: number;

  // Check if it's current (Presente, Present, PRESENTE, PRESENT)
  const isPresent =
    endDateStr.toLowerCase() === "presente" ||
    endDateStr.toUpperCase() === "PRESENT" ||
    endDateStr.toLowerCase() === "present";

  if (isPresent) {
    const today = new Date();
    endMonth = today.getMonth() + 1; // getMonth() returns 0-11
    endYear = today.getFullYear();
  } else {
    const endParts = endDateStr.split("/").map(Number);
    if (!endParts[0] || !endParts[1]) return "";
    endMonth = endParts[0];
    endYear = endParts[1];
  }

  let months = (endYear - startYear) * 12 + (endMonth - startMonth);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  // For same month and year, show "1 semana" or "2 semanas" based on description context
  if (months === 0 && startMonth === endMonth && startYear === endYear) {
    if (language === "es") {
      return "2 semanas";
    } else {
      return "2 weeks";
    }
  }

  if (language === "es") {
    if (years > 0 && remainingMonths > 0) {
      return `${years} ${years === 1 ? "año" : "años"} y ${remainingMonths} ${
        remainingMonths === 1 ? "mes" : "meses"
      }`;
    } else if (years > 0) {
      return `${years} ${years === 1 ? "año" : "años"}`;
    } else if (remainingMonths > 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`;
    }
  } else {
    if (years > 0 && remainingMonths > 0) {
      return `${years} ${
        years === 1 ? "year" : "years"
      } and ${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`;
    } else if (years > 0) {
      return `${years} ${years === 1 ? "year" : "years"}`;
    } else if (remainingMonths > 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`;
    }
  }

  return "";
};

const timelineData = {
  work: {
    es: [
      {
        id: "1",
        title: "Desarrollador Senior de Software",
        company: "Innovation Strateggies SLU - A Siemens Company",
        period: "10/2023 – Presente",
        description:
          "Desarrollo, mantenimiento y soporte en .NET, Python y Javascript. Despliegues con Docker en ecosistema Azure (Key vault, App service, BBDD, Logic Apps, y Azure Functions entre otros) con exposición puntual a Kubernetes. Participación en toma de requisitos con clientes, estimaciones de horas y planificaciones de desarrollo.",
        technologies: [
          "ASP.NET",
          "React.js",
          "Azure Databricks",
          "C#",
          "Microsoft Azure",
          "Azure Data Factory",
          "Python",
          "Microsoft SQL Server",
          "Entity Framework",
          "Git",
          "HTML",
          "JSON",
          "Microsoft Power BI",
          "Postman",
          "Redux",
          "TypeScript",
          "Docker",
          "Kubernetes",
          "Django",
        ],
        type: "work" as const,
      },
      {
        id: "2",
        title: "Responsable técnico Departamento MES",
        company: "Ansotec",
        period: "01/2023 – 10/2023",
        description:
          "Supervisión de nuevos desarrollos, diseño de arquitecturas enfocadas a microservicios y organización de equipo a nivel técnico.",
        technologies: [
          "JSON",
          "ASP.NET",
          "SQL",
          "Svelte",
          "Microsoft SQL Server",
          "C#",
          "Microsoft Power BI",
          "Servicios web de RESTful",
          "Team Foundation Server (TFS)",
          "Entity Framework",
          "jQuery",
          "JavaScript",
          "HTML",
        ],
        type: "work" as const,
      },
      {
        id: "3",
        title: "Desarrollador Senior de Software Departamento MES",
        company: "Ansotec",
        period: "01/2022 – 02/2023",
        description:
          "Planificación y desarrollo de proyectos ad-hoc: desde recolección de requisitos, diseño y ejecución hasta despliegue y puesta en producción, así como integración continua y despliegue continuo.",
        technologies: [
          "JSON",
          "ASP.NET",
          "SQL",
          "Svelte",
          "Microsoft SQL Server",
          "C#",
          "Microsoft Power BI",
          "Servicios web de RESTful",
          "Team Foundation Server (TFS)",
          "Entity Framework",
          "jQuery",
          "JavaScript",
          "HTML",
        ],
        type: "work" as const,
      },
      {
        id: "4",
        title: "Desarrollador de Software Departamento MES",
        company: "Ansotec",
        period: "09/2020 – 01/2022",
        description:
          "Desarrollo de software enfocado a la transformación digital en el ámbito de la industria 4.0. Gestión de órdenes de Fabricación, integración con sistemas ERP, Gestión de Materiales, Trazabilidad y Genealogía, Autocontrol de Lotes, Gestión de consumos de Energía, Gestión de OEE/DTM, Indicadores de Métricas de productividad (KPI's), Gestión de Personal, Gestión de Calidad, Gestión Mantenimiento, Gestión de Recetas y Fórmulas Maestras BATCH.",
        technologies: [
          "JSON",
          "ASP.NET",
          "SQL",
          "Svelte",
          "Microsoft SQL Server",
          "C#",
          "Microsoft Power BI",
          "Servicios web de RESTful",
          "Team Foundation Server (TFS)",
          "Entity Framework",
          "jQuery",
          "JavaScript",
          "HTML",
        ],
        type: "work" as const,
      },
      {
        id: "5",
        title: "Desarrollador Software Freelance",
        company: "Upwork",
        period: "11/2019 – 09/2020",
        description:
          "Desarrollo y mantenimiento de cualquier solicitud de software (web, escritorio o móvil) por parte del cliente.",
        technologies: [
          "MySQL",
          "angular",
          "JSON",
          "ASP.NET",
          "SQL",
          "MongoDB",
          "Node.js",
          "Java EE",
          "React.js",
          "C#",
          "Hibernate",
          "Xamarin",
          "Spring Boot",
          "Servicios web de RESTful",
          "Git",
          "Maven",
          "Spring Framework",
          "Spring MVC",
          "jQuery",
          "Java",
          "Java Servlet",
          "TypeScript",
          "JavaScript",
          "HTML",
        ],
        type: "work" as const,
      },
      {
        id: "6",
        title: "Desarrollador de Software",
        company: "Fujitsu",
        period: "01/2019 – 06/2019",
        description:
          "Programación web con tecnologías como Spring Boot, Spring Data, Spring Rest, JPA, Hibernate, QueryDSL y JUnit para backend y React, Redux, CSS3 y HTML5 para frontend.",
        technologies: [
          "JSON",
          "SQL",
          "Node.js",
          "Java EE",
          "React.js",
          "Hibernate",
          "Spring Boot",
          "Servicios web de RESTful",
          "Redux",
          "Git",
          "Maven",
          "Spring Framework",
          "Java",
          "Java Servlet",
          "TypeScript",
          "JavaScript",
          "HTML",
          "JUnit",
          "Scrum",
        ],
        type: "work" as const,
      },
      {
        id: "7",
        title: "Desarrollador Software Freelance",
        company: "Workana",
        period: "09/2018 – 12/2018",
        description:
          "Desarrollo y mantenimiento de cualquier solicitud de software (web, escritorio o móvil) por parte del cliente.",
        technologies: [
          "MySQL",
          "angular",
          "JSON",
          "ASP.NET",
          "SQL",
          "MongoDB",
          "Node.js",
          "Java EE",
          "React.js",
          "C#",
          "Hibernate",
          "Xamarin",
          "Spring Boot",
          "Servicios web de RESTful",
          "Git",
          "Maven",
          "Spring Framework",
          "Spring MVC",
          "jQuery",
          "Java",
          "Java Servlet",
          "TypeScript",
          "JavaScript",
          "HTML",
        ],
        type: "work" as const,
      },
      {
        id: "8",
        title: "Desarrollador Java de Software",
        company: "Grupo Oesia",
        period: "04/2018 – 06/2018",
        description:
          "Trabajando en framework basado en Java con tecnologías como Java EE, Java SWT, Spring Boot, JUnit, Mockito, Docker e ImDB (db2).",
        technologies: [
          "SQL",
          "Mockito",
          "Docker",
          "Java EE",
          "DB2",
          "Spring Boot",
          "TDD",
          "Maven",
          "Spring Framework",
          "Spring MVC",
          "Java",
          "HTML",
          "Scrum",
        ],
        type: "work" as const,
      },
    ],
    en: [
      {
        id: "1",
        title: "Senior Software Developer",
        company: "Innovation Strateggies SLU - A Siemens Company",
        period: "10/2023 – Present",
        description:
          "Development, maintenance and support in .NET, Python and JavaScript. Deployments with Docker in the Azure ecosystem (Key Vault, App Service, Databases, Logic Apps, Azure Functions, among others, with occasional exposure to Kubernetes). Participation in requirements gathering with clients, time estimations and development planning.",
        technologies: [
          "ASP.NET",
          "React.js",
          "Azure Databricks",
          "C#",
          "Microsoft Azure",
          "Azure Data Factory",
          "Python",
          "Microsoft SQL Server",
          "Entity Framework",
          "Git",
          "HTML",
          "JSON",
          "Microsoft Power BI",
          "Postman",
          "Redux",
          "TypeScript",
          "Docker",
          "Kubernetes",
          "Django",
        ],
        type: "work" as const,
      },
      {
        id: "2",
        title: "Technical Manager MES Department",
        company: "Ansotec",
        period: "01/2023 – 10/2023",
        description:
          "Supervision of new developments, design of microservices-focused architectures and technical team organization.",
        technologies: ["Microservicios", "Arquitectura", "Liderazgo"],
        type: "work" as const,
      },
      {
        id: "3",
        title: "Senior Software Developer MES Department",
        company: "Ansotec",
        period: "01/2022 – 02/2023",
        description:
          "Planning and development of ad-hoc projects: from requirements gathering, design and execution to deployment and commissioning as well as continuous integration and deployment.",
        technologies: ["ASP.NET Core", "SQL Server", "Azure DevOps", "CI/CD"],
        type: "work" as const,
      },
      {
        id: "4",
        title: "Software Developer MES Department",
        company: "Ansotec",
        period: "09/2020 – 01/2022",
        description:
          "Software development focused on digital transformation in the field of Industry 4.0. Manufacturing order management, ERP system integration, Material Management, Traceability and Genealogy, Batch Self-control, Energy consumption management, OEE/DTM management, Productivity metrics indicators (KPI's), Personnel management, Quality management, Maintenance management, Batch Recipes and Master Formulas management.",
        technologies: [
          "ASP.NET Core",
          "WPF",
          "SignalR",
          "Entity Framework Core",
          "SQL Server",
          "Azure DevOps",
          "jQuery",
          "Svelte",
        ],
        type: "work" as const,
      },
      {
        id: "5",
        title: "Freelance Software Developer",
        company: "Upwork",
        period: "11/2019 – 09/2020",
        description:
          "Development and maintenance of any software request (web, desktop or mobile) from the client.",
        technologies: ["Software", "Web", "Escritorio", "Móvil"],
        type: "work" as const,
      },
      {
        id: "6",
        title: "Software Developer",
        company: "Fujitsu",
        period: "01/2019 – 06/2019",
        description:
          "Web programming with technologies such as Spring Boot, Spring Data, Spring Rest, JPA, Hibernate, QueryDSL and JUnit for backend and React, Redux, CSS3 and HTML5 for frontend.",
        technologies: ["Spring Boot", "React", "Java", "SQL", "REST API"],
        type: "work" as const,
      },
      {
        id: "7",
        title: "Freelance Software Developer",
        company: "Workana",
        period: "09/2018 – 12/2018",
        description:
          "Development and maintenance of any software request (web, desktop or mobile) from the client.",
        technologies: ["Software", "Web", "Escritorio", "Móvil"],
        type: "work" as const,
      },
      {
        id: "8",
        title: "Java Software Developer",
        company: "Grupo Oesia",
        period: "04/2018 – 06/2018",
        description:
          "Working in Java-based framework with technologies such as Java EE, Java SWT, Spring Boot, JUnit, Mockito, Docker and ImDB (db2).",
        technologies: [
          "Java EE",
          "Java SWT",
          "Spring Boot",
          "Docker",
          "JUnit",
          "Mockito",
        ],
        type: "work" as const,
      },
    ],
  },
  education: {
    es: [
      {
        id: "1",
        title: "Boot Camp Angular 6",
        company: "Everis Center Sevilla",
        period: "10/2018 – 10/2018",
        description:
          "Aprendizaje y prácticas sobre Angular durante una semana.",
        technologies: ["ASP.NET", "angular", "JavaScript", "TypeScript"],
        type: "education" as const,
      },
      {
        id: "2",
        title: "Boot Camp .NET",
        company: "Everis Center Sevilla",
        period: "07/2018 – 07/2018",
        description:
          "Aprendizaje y prácticas sobre el entorno .NET con C # durante dos semanas. Trabajando con tecnologías como SQL Server, ADO.NET, Entity Framework, Linq y ASP.NET.",
        technologies: [
          "ASP.NET",
          "Team Foundation Server (TFS)",
          "Entity Framework",
          "C#",
        ],
        type: "education" as const,
      },
      {
        id: "3",
        title: "Formación Profesional Superior",
        company: "Centro Educativo Altair",
        period: "09/2016 – 04/2018",
        description:
          "• Programación en Java, Node.js, Angular y .NET\n• Administración de bases de datos para SQL (Oracle, MySQL, SQLServer) y NoSQL (MongoDB)\n• Desarrollo de aplicaciones móviles en Android Studio\n• Sistemas Linux y administración de redes locales",
        technologies: [
          "jQuery",
          "Java",
          "SQL",
          "JSON",
          "ASP.NET",
          "Spring MVC",
          "MongoDB",
          "MySQL",
          "angular",
          "Java Servlet",
          "JavaScript",
          "windows form",
          "HTML",
          "Node.js",
          "Spring Framework",
          "NoSQL",
          "Maven",
          "Hibernate",
          "Servicios web de RESTful",
          "C#",
        ],
        type: "education" as const,
      },
    ],
    en: [
      {
        id: "1",
        title: "Angular 6 Boot Camp",
        company: "Everis Center Sevilla",
        period: "10/2018 – 10/2018",
        description: "Learning and practice on Angular for one week.",
        technologies: ["ASP.NET", "angular", "JavaScript", "TypeScript"],
        type: "education" as const,
      },
      {
        id: "2",
        title: ".NET Boot Camp",
        company: "Everis Center Sevilla",
        period: "07/2018 – 07/2018",
        description:
          "Learning and practice on .NET environment with C# for two weeks. Working with technologies like SQL Server, ADO.NET, Entity Framework, Linq and ASP.NET.",
        technologies: [
          "ASP.NET",
          "Team Foundation Server (TFS)",
          "Entity Framework",
          "C#",
        ],
        type: "education" as const,
      },
      {
        id: "3",
        title: "Higher Vocational Training",
        company: "Altair Educational Center",
        period: "09/2016 – 04/2018",
        description:
          "• Programming in Java, Node.js, Angular and .NET\n• Database administration for SQL (Oracle, MySQL, SQLServer) and NoSQL (MongoDB)\n• Development of mobile applications in Android Studio\n• Linux systems and local network administration",
        technologies: [
          "jQuery",
          "Java",
          "SQL",
          "JSON",
          "ASP.NET",
          "Spring MVC",
          "MongoDB",
          "MySQL",
          "angular",
          "Java Servlet",
          "JavaScript",
          "windows form",
          "HTML",
          "Node.js",
          "Spring Framework",
          "NoSQL",
          "Maven",
          "Hibernate",
          "Servicios web de RESTful",
          "C#",
        ],
        type: "education" as const,
      },
    ],
  },
};

export const Timeline = ({ language, type }: TimelineProps) => {
  const items = timelineData[type][language];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative flex items-start space-x-4 md:space-x-6 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Timeline Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-professional overflow-hidden">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.company}
                    className={`object-contain ${
                      item.logo.includes("everis")
                        ? "w-11 h-11 md:w-[58px] md:h-[58px]"
                        : item.logo.includes("ansotec")
                        ? "w-12 h-12 md:w-[68px] md:h-[68px]"
                        : item.logo.includes("innovation")
                        ? "w-12 h-12 md:w-[66px] md:h-[66px]"
                        : "w-9 h-9 md:w-[44px] md:h-[44px]"
                    }`}
                  />
                ) : (
                  <>
                    {type === "work" ? (
                      <Building className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                    ) : (
                      <Award className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Content Card */}
            <Card className="flex-1 shadow-card hover:shadow-hover transition-all duration-300 border-2 border-primary/20 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-base text-secondary font-semibold mb-2">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex items-center text-muted-foreground gap-3">
                    <Calendar className="w-8 h-8 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {item.period}
                      </span>
                      {calculateDuration(item.period, language) && (
                        <span className="text-xs bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {calculateDuration(item.period, language)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-foreground mb-4 leading-relaxed text-base">
                  {item.description && item.description.includes("•") ? (
                    <ul className="list-disc list-inside space-y-1">
                      {item.description.split("\n").map((line, idx) => (
                        <li key={idx} className="text-foreground">
                          {line.replace("• ", "")}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description || ""}</p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
