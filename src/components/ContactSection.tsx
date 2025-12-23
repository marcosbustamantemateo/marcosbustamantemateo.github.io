import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Linkedin,
  Github,
  Code2,
  Rocket,
  CheckCircle2,
  Terminal,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { trackContactClick } from "@/analytics/events";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ValidationModal } from "@/components/ValidationModal";
import { db } from "@/config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface ContactSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "¿Listo para tu Próximo Proyecto?",
    subtitle:
      "Transformemos tus ideas en soluciones digitales de alto rendimiento",
    description:
      "Como desarrollador de software con más de 8 años de experiencia, estoy disponible para llevar tu proyecto al siguiente nivel. Desde aplicaciones web empresariales hasta soluciones móviles, puedo ayudarte a materializar tu visión con tecnología de vanguardia.",
    why: "¿Por qué trabajar conmigo?",
    benefit1: "Código limpio, escalable y mantenible",
    benefit2: "Experiencia en proyectos empresariales complejos",
    benefit3: "Comunicación clara y entregas puntuales",
    benefit4: "Pasión por la excelencia técnica",
    cta: "Hablemos de tu proyecto",
    contact: "Información de Contacto",
    contactForm: "Formulario de contacto",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    available: "Disponible para proyectos freelance y colaboraciones",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@email.com",
    subject: "Asunto",
    subjectPlaceholder: "Asunto del mensaje",
    message: "Mensaje",
    messagePlaceholder: "Cuéntame sobre tu proyecto...",
    send: "Enviar mensaje",
    // Validations
    validationTitle: "Completa estas validaciones",
    errorNameRequired: "El nombre es obligatorio",
    errorNameMinLength: "El nombre debe tener al menos 2 caracteres",
    errorEmailRequired: "El email es obligatorio",
    errorEmailInvalid: "El email no es válido",
    errorSubjectRequired: "El asunto es obligatorio",
    errorSubjectMinLength: "El asunto debe tener al menos 3 caracteres",
    errorMessageRequired: "El mensaje es obligatorio",
    errorMessageMinLength: "El mensaje debe tener al menos 10 caracteres",
    errorCaptchaRequired: "El reCAPTCHA es obligatorio",
  },
  en: {
    title: "Ready for Your Next Project?",
    subtitle:
      "Let's transform your ideas into high-performance digital solutions",
    description:
      "As a software developer with over 8 years of experience, I'm available to take your project to the next level. From enterprise web applications to mobile solutions, I can help you materialize your vision with cutting-edge technology.",
    why: "Why work with me?",
    benefit1: "Clean, scalable, and maintainable code",
    benefit2: "Experience in complex enterprise projects",
    benefit3: "Clear communication and timely deliveries",
    benefit4: "Passion for technical excellence",
    cta: "Let's talk about your project",
    contact: "Contact Information",
    contactForm: "Contact Form",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    available: "Available for freelance projects and collaborations",
    name: "Name",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    subject: "Subject",
    subjectPlaceholder: "Message subject",
    message: "Message",
    messagePlaceholder: "Tell me about your project...",
    send: "Send message",
    // Validations
    validationTitle: "Complete these validations",
    errorNameRequired: "Name is required",
    errorNameMinLength: "Name must be at least 2 characters",
    errorEmailRequired: "Email is required",
    errorEmailInvalid: "Email is not valid",
    errorSubjectRequired: "Subject is required",
    errorSubjectMinLength: "Subject must be at least 3 characters",
    errorMessageRequired: "Message is required",
    errorMessageMinLength: "Message must be at least 10 characters",
    errorCaptchaRequired: "Please complete the reCAPTCHA",
  },
};

export const ContactSection = ({ language }: ContactSectionProps) => {
  const t = translations[language];
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [showValidationModal, setShowValidationModal] = useState(false);

  const benefits = [t.benefit1, t.benefit2, t.benefit3, t.benefit4];

  const validateForm = (): boolean => {
    const errors: string[] = [];

    // Validate name
    if (!formData.name.trim()) {
      errors.push(t.errorNameRequired);
    } else if (formData.name.trim().length < 2) {
      errors.push(t.errorNameMinLength);
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.push(t.errorEmailRequired);
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.push(t.errorEmailInvalid);
      }
    }

    // Validate subject
    if (!formData.subject.trim()) {
      errors.push(t.errorSubjectRequired);
    } else if (formData.subject.trim().length < 3) {
      errors.push(t.errorSubjectMinLength);
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.push(t.errorMessageRequired);
    } else if (formData.message.trim().length < 10) {
      errors.push(t.errorMessageMinLength);
    }

    // Validate reCAPTCHA
    const token = recaptchaRef.current?.getValue();
    if (!token) {
      errors.push(t.errorCaptchaRequired);
    }

    if (errors.length > 0) {
      setValidationErrors(errors);
      setShowValidationModal(true);
      return false;
    }

    return true;
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Guardar en Firestore
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
        read: false,
      });
      console.log("✅ Mensaje guardado en Firestore");

      // Enviar a Telegram
      const telegramToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
      const telegramMessage = `📧 Nuevo mensaje de contacto\n\n👤 Nombre: ${formData.name}\n📧 Email: ${formData.email}\n📌 Asunto: ${formData.subject}\n\n💬 Mensaje:\n${formData.message}`;

      const response = await fetch(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: Number(chatId),
            text: telegramMessage,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Mensaje enviado a Telegram exitosamente");
      } else {
        console.error("❌ Error al enviar a Telegram:", data);
      }

      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("❌ Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.title}
            </h2>
            <p className="text-xl text-secondary font-semibold mb-6 font-mono">
              {">"} {t.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.description}
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="slide-in-left"
            delay={100}
            className="mb-10"
          >
            <div className="glass rounded-xl p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-12 flex items-center justify-center">
                <Code2 className="w-6 h-6 mr-3 text-secondary" />
                {t.why}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="slide-in-right"
            delay={200}
            className="mb-10"
          >
            <div className="glass rounded-xl p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-8 text-center flex items-center justify-center">
                <Terminal className="w-6 h-6 mr-3 text-secondary" />
                {t.contact}
              </h3>

              <div className="flex items-center justify-center gap-0">
                <a
                  href="mailto:marcosbustamantemateo@gmail.com"
                  title={t.email}
                  onClick={(e) => {
                    e.preventDefault();
                    trackContactClick("email");
                    setTimeout(() => {
                      window.location.href =
                        "mailto:marcosbustamantemateo@gmail.com";
                    }, 100);
                  }}
                  className="flex flex-col items-center text-center p-2 rounded-lg"
                >
                  <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-secondary" />
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/marcos-bustamante/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t.linkedin}
                  onClick={(e) => {
                    e.preventDefault();
                    trackContactClick("linkedin");
                    setTimeout(() => {
                      window.open(
                        "https://www.linkedin.com/in/marcos-bustamante/",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }, 100);
                  }}
                  className="flex flex-col items-center text-center p-2 rounded-lg"
                >
                  <div className="w-16 h-16 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center">
                    <Linkedin className="w-8 h-8 text-[#0A66C2]" />
                  </div>
                </a>

                <a
                  href="https://github.com/marcosbustamantemateo"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t.github}
                  onClick={(e) => {
                    e.preventDefault();
                    trackContactClick("github");
                    setTimeout(() => {
                      window.open(
                        "https://github.com/marcosbustamantemateo",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }, 100);
                  }}
                  className="flex flex-col items-center text-center p-2 rounded-lg"
                >
                  <div className="w-16 h-16 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Github className="w-8 h-8 text-purple-500" />
                  </div>
                </a>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-neon-green font-mono mb-4 animate-glow-pulse">
                  {"// "}
                  {t.available}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-in-left" delay={300}>
            <div className="glass rounded-xl p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-8 text-center flex items-center justify-center">
                <Rocket className="w-6 h-6 mr-3 text-secondary" />
                {t.contactForm}
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.name}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={handleFormChange}
                    className="bg-muted/50 border-secondary/30 focus:border-secondary/60"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.email}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleFormChange}
                    className="bg-muted/50 border-secondary/30 focus:border-secondary/60"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.subject}
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder={t.subjectPlaceholder}
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="bg-muted/50 border-secondary/30 focus:border-secondary/60"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.message}
                  </label>
                  <Textarea
                    name="message"
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={5}
                    className="bg-muted/50 border-secondary/30 focus:border-secondary/60 resize-none"
                  />
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ""}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-neon hover:scale-105 transition-all duration-300 font-mono"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t.cta}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Validation Modal */}
      <ValidationModal
        isOpen={showValidationModal}
        errors={validationErrors}
        onClose={() => setShowValidationModal(false)}
        title={t.validationTitle}
      />
    </section>
  );
};
