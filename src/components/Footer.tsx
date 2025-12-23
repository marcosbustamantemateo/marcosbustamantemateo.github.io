import { Mail, Linkedin, Github, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="glass text-foreground snap-start shadow-[0_-4px_6px_-1px_rgba(0,191,255,0.4)]"
      role="contentinfo"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-transparent">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Marcos Bustamante</h4>
                <p className="text-sm text-muted-foreground">
                  Software Developer
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground max-w-sm">
              Construyo experiencias digitales con código limpio, rendimiento y
              diseño funcional. Si tienes un proyecto, hablemos.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="mailto:marcosbustamantemateo@gmail.com"
                className="flex items-center gap-2 text-sm text-white/90 hover:text-neon-blue transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>marcosbustamantemateo@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between md:justify-center">
            <div>
              <h5 className="font-semibold mb-3">Servicios</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Desarrollo Web</li>
                <li>Aplicaciones Móviles</li>
                <li>Integraciones Backend</li>
                <li>Auditoría de Código</li>
              </ul>
            </div>

            <div className="ml-8 hidden md:block">
              <h5 className="font-semibold mb-3">Enlaces</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#projects" className="hover:text-neon-blue">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-neon-blue">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social & small print */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/marcos-bustamante/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-neon-blue"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/marcosbustamantemateo"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-purple-500"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Marcos Bustamante. Todos los derechos
              reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Diseño inspirado en marca — elementos corporativos y paleta
              coherente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
