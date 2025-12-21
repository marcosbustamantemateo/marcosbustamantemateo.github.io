import { useAboutMe } from "@/hooks/useFirebaseData";

interface AboutSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "Acerca de mi",
  },
  en: {
    title: "About me",
  },
};

export const AboutSection = ({ language }: AboutSectionProps) => {
  const t = translations[language];
  const { data: aboutMe } = useAboutMe();

  if (!aboutMe) {
    return null;
  }

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            {t.title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            {aboutMe.description[language]}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white font-medium">
            {aboutMe.commitment[language]}
          </p>
        </div>
      </div>
    </section>
  );
};
