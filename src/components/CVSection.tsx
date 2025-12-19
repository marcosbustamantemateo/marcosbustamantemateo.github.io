import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText } from "lucide-react";

interface CVSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "Currículum Vitae",
    subtitle: "Descarga mi CV completo en formato PDF",
    downloadCV: "Descargar CV",
    viewCV: "Ver CV",
    lastUpdated: "Última actualización: Diciembre 2024",
    description:
      "CV completo con experiencia detallada, proyectos destacados y certificaciones profesionales.",
  },
  en: {
    title: "Curriculum Vitae",
    subtitle: "Download my complete CV in PDF format",
    downloadCV: "Download CV",
    viewCV: "View CV",
    lastUpdated: "Last updated: December 2024",
    description:
      "Complete CV with detailed experience, featured projects and professional certifications.",
  },
};

export const CVSection = ({ language }: CVSectionProps) => {
  const t = translations[language];

  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    console.log("Downloading CV...");
  };

  const handleViewCV = () => {
    // Placeholder for CV view functionality
    console.log("Opening CV viewer...");
  };

  return (
    <section id="cv" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto hidden">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-professional hover:shadow-hover transition-all duration-300 animate-scale-in border-2 border-primary/20 hover:border-primary/50">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                {/* CV Preview */}
                <div className="flex-1">
                  <div className="bg-gradient-subtle border-2 border-dashed border-border rounded-lg p-12 text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                      <FileText className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Marcos Bustamante CV
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.lastUpdated}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex-shrink-0">
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      onClick={handleDownloadCV}
                      className="bg-gradient-primary hover:shadow-hover transition-all duration-300 w-full"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t.downloadCV}
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleViewCV}
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full"
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      {t.viewCV}
                    </Button>
                  </div>
                </div>
              </div>

              {/* CV Highlights */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      8+ años
                    </div>
                    <div className="text-muted-foreground">
                      Experiencia profesional
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      50+ proyectos
                    </div>
                    <div className="text-muted-foreground">
                      Completados exitosamente
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      3 certificaciones
                    </div>
                    <div className="text-muted-foreground">
                      Tecnológicas activas
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
