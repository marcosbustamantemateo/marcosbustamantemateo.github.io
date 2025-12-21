import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar, Award } from "lucide-react";
import { useWorkExperience, useEducation } from "@/hooks/useFirebaseData";

interface TimelineProps {
  language: "es" | "en";
  type: "work" | "education";
}

export const Timeline = ({ language, type }: TimelineProps) => {
  const { data: workData, loading: workLoading } = useWorkExperience();
  const { data: educationData, loading: eduLoading } = useEducation();

  const loading = type === "work" ? workLoading : eduLoading;
  const items = type === "work" ? workData : educationData;

  if (loading) {
    return (
      <div className="text-center text-muted-foreground py-8">
        {language === "es" ? "Cargando..." : "Loading..."}
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        {language === "es" ? "No hay datos disponibles" : "No data available"}
      </div>
    );
  }

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
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-professional">
                {type === "work" ? (
                  <Building className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                ) : (
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                )}
              </div>
            </div>

            {/* Content Card */}
            <Card className="flex-1 shadow-card hover:shadow-hover transition-all duration-300 border-2 border-primary/20 hover:border-primary/50">
              <CardContent className="p-6">
                {/* Header with title and date */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {type === "work"
                        ? item.position[language]
                        : item.degree[language]}
                    </h3>
                    <p className="text-base text-secondary font-semibold mb-2">
                      {type === "work" ? item.company : item.institution}
                    </p>
                  </div>

                  {/* Date with icon */}
                  <div className="flex items-center text-muted-foreground gap-3">
                    <Calendar className="w-8 h-8 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {(() => {
                          const fullPeriod = item.period[language];
                          // Extraer la parte de la fecha (antes de cualquier número de duración)
                          const dateMatch = fullPeriod.match(
                            /^(.+?)(\d+\s+(año|años|mes|meses|semana|semanas|month|months|year|years|week|weeks).*)?$/
                          );
                          return dateMatch ? dateMatch[1].trim() : fullPeriod;
                        })()}
                      </span>
                      <span className="text-xs bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {(() => {
                          const fullPeriod = item.period[language];
                          // Extraer solo la duración (números + texto de tiempo)
                          const durationMatch = fullPeriod.match(
                            /(\d+\s+(año|años|mes|meses|semana|semanas|month|months|year|years|week|weeks).*)/
                          );
                          return durationMatch ? durationMatch[0] : "";
                        })()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-foreground mb-4 leading-relaxed text-base">
                  <p>{item.description[language]}</p>
                </div>

                {/* Technologies */}
                {item.technologies && item.technologies.length > 0 && (
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
                )}

                {/* Achievements (only for work experience) */}
                {type === "work" &&
                  item.achievements &&
                  item.achievements[language] && (
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground mt-4">
                      {item.achievements[language].map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
