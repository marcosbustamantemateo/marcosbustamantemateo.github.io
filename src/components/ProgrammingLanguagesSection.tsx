import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code } from "lucide-react";
import { useProgrammingLanguages } from "@/hooks/useFirebaseData";

interface ProgrammingLanguagesSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "Lenguajes de Programación",
    subtitle: "Lenguajes que domino y utilizo regularmente",
  },
  en: {
    title: "Programming Languages",
    subtitle: "Languages I master and use regularly",
  },
};

export const ProgrammingLanguagesSection = ({
  language,
}: ProgrammingLanguagesSectionProps) => {
  const t = translations[language];
  const { data: languages } = useProgrammingLanguages();

  if (!languages || languages.length === 0) {
    return null;
  }

  return (
    <section id="languages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-primary">{t.title}</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {languages.map((lang) => (
            <Card
              key={lang.id}
              className="shadow-professional hover:shadow-hover transition-all duration-300 animate-scale-in border-2 border-primary/20 hover:border-primary/50 overflow-hidden"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-foreground">
                  {lang.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">
                      {language === "es" ? "Nivel" : "Level"}
                    </span>
                    <span className="font-semibold text-primary">
                      {lang.level}%
                    </span>
                  </div>
                  <Progress value={lang.level} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
