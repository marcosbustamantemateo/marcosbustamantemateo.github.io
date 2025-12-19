import { Button } from "@/components/ui/button";
import {
  Globe,
  Github,
  Linkedin,
  Twitter,
  Share2,
  Moon,
  Sun,
  Terminal,
  MessageCircle,
  Send,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  language: "es" | "en";
  onLanguageChange: (lang: "es" | "en") => void;
}

const translations = {
  es: {
    profile: "Perfil",
    cv: "CV",
    technologies: "Tecnologías",
    projects: "Proyectos",
    contact: "Contacto",
    share: "Compartir",
    shareOn: "Compartir en",
    shareMessage:
      "👨‍💻 Mira la web del desarrollador MB | www.marcosbustamantemateo.com",
  },
  en: {
    profile: "Profile",
    cv: "CV",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact",
    share: "Share",
    shareOn: "Share on",
    shareMessage:
      "👨‍💻 Check out MB's developer website | www.marcosbustamante.com",
  },
};

export const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const t = translations[language];
  const { theme, setTheme } = useTheme();

  const handleShare = (platform: string) => {
    const url = "https://www.marcosbustamantemateo.com";
    const shareMessage = t.shareMessage;

    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareMessage)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(shareMessage)}`,
      linkedin: `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
        shareMessage
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareMessage
      )}&url=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], "_blank");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-[0_4px_6px_-1px_rgba(0,191,255,0.4)]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <a href="#profile" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-neon transition-shadow duration-300">
              <Terminal className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="block">
              <h1 className="text-lg font-bold text-foreground font-mono group-hover:text-neon-blue transition-colors">
                MB<span className="text-primary">_</span>
              </h1>
              <p className="text-xs text-muted-foreground font-mono">
                Software Dev
              </p>
            </div>
          </a>

          {/* Navigation - Hidden */}
          {/* Navigation removed from header */}

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle - Removed, dark mode only */}

            {/* Share Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border/50 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
                >
                  <Share2 className="w-4 h-4 text-secondary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="glass border-border/50"
              >
                <DropdownMenuItem
                  onClick={() => handleShare("whatsapp")}
                  className="font-mono text-sm hover:text-neon-blue cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleShare("telegram")}
                  className="font-mono text-sm hover:text-neon-blue cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Telegram
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleShare("linkedin")}
                  className="font-mono text-sm hover:text-neon-blue cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleShare("twitter")}
                  className="font-mono text-sm hover:text-neon-blue cursor-pointer"
                >
                  <Twitter className="w-4 h-4 mr-2" />X (Twitter)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border/50 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 font-mono"
                >
                  <Globe className="w-4 h-4 mr-2 text-secondary" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="glass border-border/50"
              >
                <DropdownMenuItem
                  onClick={() => onLanguageChange("es")}
                  className="font-mono text-sm cursor-pointer"
                >
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onLanguageChange("en")}
                  className="font-mono text-sm cursor-pointer"
                >
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
