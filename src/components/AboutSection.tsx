interface AboutSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    description:
      "Soy un experimentado desarrollador de software especializado en desarrollo web, así como aplicaciones de escritorio o móviles. Me distingo por la creación de código eficiente y fácil de mantener. Mi enfoque principal ha sido el ecosistema .NET con C#, trabajando en proyectos BFF, microservicios, GraphQL y liderando iniciativas MES/MOM para la transformación digital en la industria 4.0.",
    commitment:
      "Mi compromiso con la excelencia técnica me permite superar retos empresariales y generar impacto positivo en cada proyecto.",
  },
  en: {
    description:
      "I am an experienced software developer specialized in web development, as well as desktop and mobile applications. I excel at creating efficient and maintainable code. My main focus has been the .NET ecosystem with C#, working on BFF projects, microservices, GraphQL and leading MES/MOM initiatives for digital transformation in Industry 4.0.",
    commitment:
      "My commitment to technical excellence allows me to overcome business challenges and generate positive impact in every project.",
  },
};

export const AboutSection = ({ language }: AboutSectionProps) => {
  const t = translations[language];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            Acerca de mi
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            {t.description}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white font-medium">
            {t.commitment}
          </p>
        </div>
      </div>
    </section>
  );
};
