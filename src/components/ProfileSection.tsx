import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timeline } from "./Timeline";
import { MessageSquare, Star } from "lucide-react";
import { useTestimonials } from "@/hooks/useFirebaseData";

interface ProfileSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "Perfil Profesional",
    experience: "Experiencia Laboral",
    education: "Educación y Formación",
    testimonials: "Testimonios",
    testimonialsSubtitle: "Lo que dicen mis colegas",
  },
  en: {
    title: "Professional Profile",
    experience: "Work Experience",
    education: "Education & Training",
    testimonials: "Testimonials",
    testimonialsSubtitle: "What my colleagues say",
  },
};

export const ProfileSection = ({ language }: ProfileSectionProps) => {
  const t = translations[language];
  const { data: testimonialsData, loading } = useTestimonials();

  // Filtrar y ordenar testimonios
  const sortedTestimonials = testimonialsData
    ? [...testimonialsData].sort((a, b) => a.order - b.order)
    : [];

  return (
    <section id="profile" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                <MessageSquare className="w-4 h-4 text-primary-foreground" />
              </div>
              {t.experience}
            </h3>
            <Timeline language={language} type="work" />
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                <Star className="w-4 h-4 text-primary-foreground" />
              </div>
              {t.education}
            </h3>
            <Timeline language={language} type="education" />
          </div>

          {/* Testimonials */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-8 text-center">
                {t.testimonials}
              </h2>
              <p className="text-muted-foreground hidden">
                {t.testimonialsSubtitle}
              </p>
            </div>

            {loading ? (
              <div className="text-center text-muted-foreground">
                Cargando testimonios...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sortedTestimonials.map((testimonial, index) => {
                  const imageUrl =
                    testimonial.imageUrl ||
                    `/images/testimonials/${testimonial.initials}.jpg`;

                  const card = (
                    <Card
                      className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in border-2 border-primary/20 hover:border-primary/50"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                        <div className="flex flex-col items-center justify-center text-center">
                          <img
                            src={imageUrl}
                            alt={testimonial.name}
                            loading="lazy"
                            decoding="async"
                            className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-primary"
                          />
                          <CardTitle className="text-lg font-bold text-secondary">
                            {testimonial.name}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground italic leading-relaxed text-center">
                          "{testimonial.content[language]}"
                        </p>
                      </CardContent>
                    </Card>
                  );

                  if (testimonial.linkedin) {
                    return (
                      <a
                        key={testimonial.id}
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block no-underline"
                      >
                        {card}
                      </a>
                    );
                  }

                  return <div key={testimonial.id}>{card}</div>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
