import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timeline } from "./Timeline";
import { MessageSquare, Star } from "lucide-react";

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

const testimonials = {
  es: [
    {
      id: "1",
      name: "Manuel Rubio Bravo",
      initials: "MRB",
      content:
        "Nuestra etapa en Ansotec nos ha hecho pasar momentos profesionales en los que un compañero como Marcos es imprescindible para poder superarlos. En lo laboral, es una persona resolutiva y con capacidad de superación, y en lo personal es un compañero ejemplar.",
      linkedin: "https://www.linkedin.com/in/manuelrubiodeveloper/",
      rating: 5,
    },
    {
      id: "2",
      name: "Francisco Javier Ruano",
      initials: "FJR",
      content:
        "Marcos es una persona que siempre está investigando y buscando nuevas posibilidades para un proyecto, una garantía de estar siempre a la última tecnología. Muy trabajador cuando algo le apasiona. Gran compañero.",
      linkedin: "https://www.linkedin.com/in/fcojavierruano/",
      rating: 5,
    },
    {
      id: "3",
      name: "Manuel Camero Orellana",
      initials: "MCO",
      content:
        "Apasionado del aprendizaje y el trabajo bien hecho, un gran compañero.",
      linkedin:
        "https://www.linkedin.com/in/manuel-m%C2%AA-camero-orellana-47a502121/",
      rating: 5,
    },
    {
      id: "4",
      name: "Alvaro Sanchez Cabrera",
      initials: "ASC",
      content:
        "Gran profesional, buen compañero y apasionado de las tecnologías.",
      linkedin: "https://www.linkedin.com/in/alvarosanchezcabrera/",
      rating: 5,
    },
    {
      id: "5",
      name: "Ignacio Gallardo Sánchez",
      initials: "IGS",
      content:
        "Marcos es de esas personas que disfrutan programar de verdad. Le apasiona aprender cosas nuevas, mejorar su código y encontrar la mejor forma de hacer las cosas. Siempre tiene una buena actitud y un enfoque muy práctico para resolver cualquier reto técnico.",
      linkedin: "https://www.linkedin.com/in/ignaciogallardosanchez/",
      rating: 5,
    },
  ],
  en: [
    {
      id: "1",
      name: "Manuel Rubio Bravo",
      initials: "MRB",
      content:
        "Our stage at Ansotec has taken us through professional moments where a colleague like Marcos is essential to overcome them. At work, he is a resourceful person with the ability to overcome challenges, and personally he is an exemplary colleague.",
      linkedin: "https://www.linkedin.com/in/manuelrubiodeveloper/",
      rating: 5,
    },
    {
      id: "2",
      name: "Francisco Javier Ruano",
      initials: "FJR",
      content:
        "Marcos is someone who is always researching and looking for new possibilities for a project, a guarantee of always being up to the latest technology. Very hardworking when something he is passionate about. A great colleague.",
      linkedin: "https://www.linkedin.com/in/fcojavierruano/",
      rating: 5,
    },
    {
      id: "3",
      name: "Manuel Camero Orellana",
      initials: "MCO",
      content:
        "Passionate about learning and work well done, a great colleague.",
      linkedin:
        "https://www.linkedin.com/in/manuel-m%C2%AA-camero-orellana-47a502121/",
      rating: 5,
    },
    {
      id: "4",
      name: "Alvaro Sanchez Cabrera",
      initials: "ASC",
      content:
        "Great professional, good colleague and passionate about technologies.",
      linkedin: "https://www.linkedin.com/in/alvarosanchezcabrera/",
      rating: 5,
    },
    {
      id: "5",
      name: "Ignacio Gallardo Sánchez",
      initials: "IGS",
      content:
        "Marcos is one of those people who truly enjoy programming. He is passionate about learning new things, improving his code and finding the best way to do things. He always has a great attitude and a very practical approach to solving any technical challenge.",
      linkedin: "https://www.linkedin.com/in/ignaciogallardosanchez/",
      rating: 5,
    },
  ],
};

export const ProfileSection = ({ language }: ProfileSectionProps) => {
  const t = translations[language];
  const currentTestimonials = testimonials[language];

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentTestimonials.map((testimonial, index) => {
                const card = (
                  <Card
                    className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in border-2 border-primary/20 hover:border-primary/50"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardHeader>
                      <div className="flex flex-col items-center justify-center text-center">
                        <img
                          src={`/images/testimonials/${testimonial.initials}.jpg`}
                          alt={testimonial.name}
                          className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-primary"
                        />
                        <CardTitle className="text-lg font-bold text-secondary">
                          {testimonial.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground italic leading-relaxed text-center">
                        "{testimonial.content}"
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
          </div>
        </div>
      </div>
    </section>
  );
};
