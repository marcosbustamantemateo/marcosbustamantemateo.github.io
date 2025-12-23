import { useAuth } from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import Login from "@/components/Login";
import ConfigForm from "@/components/ConfigForm";
import ProjectList from "@/components/ProjectList";
import WorkExperienceList from "@/components/WorkExperienceList";
import EducationList from "@/components/EducationList";
import TechnologyCategoryList from "@/components/TechnologyCategoryList";
import TestimonialList from "@/components/TestimonialList";
import ProgrammingLanguageList from "@/components/ProgrammingLanguageList";
import { MessageList } from "@/components/MessageList";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2, User, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Admin() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { value: "projects", label: "Proyectos" },
    { value: "experience", label: "Experiencia" },
    { value: "education", label: "Educación" },
    { value: "technologies", label: "Lenguajes" },
    { value: "categories", label: "Categorías" },
    { value: "testimonials", label: "Testimonios" },
    { value: "config", label: "Configuración" },
  ];

  // Disable scroll snap effect for admin pages
  useEffect(() => {
    document.documentElement.classList.add("no-scroll-snap");
    return () => {
      document.documentElement.classList.remove("no-scroll-snap");
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const navigateHome = () => {
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Verificando autenticación...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">
                Panel de Administración
              </h1>
              <p className="text-sm text-muted-foreground">
                Gestiona tus proyectos
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" onClick={navigateHome} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver al sitio
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left hidden sm:block">
                      <p className="text-sm font-medium">
                        {user.email?.split("@")[0]}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Administrador
                      </p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled>
                    <User className="w-4 h-4 mr-2" />
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-destructive focus:text-destructive cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Messages Section - Always visible on top */}
        <div className="mb-12">
          <MessageList />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile: Dropdown selector */}
          <div className="lg:hidden mb-8">
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona una sección" />
              </SelectTrigger>
              <SelectContent>
                {tabs.map((tab) => (
                  <SelectItem key={tab.value} value={tab.value}>
                    {tab.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop: Tab navigation */}
          <TabsList className="hidden lg:grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="projects">Proyectos</TabsTrigger>
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="technologies">Lenguajes</TabsTrigger>
            <TabsTrigger value="categories">Categorías</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonios</TabsTrigger>
            <TabsTrigger value="config">Configuración</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <ProjectList />
          </TabsContent>

          <TabsContent value="experience">
            <WorkExperienceList />
          </TabsContent>

          <TabsContent value="education">
            <EducationList />
          </TabsContent>

          <TabsContent value="technologies">
            <ProgrammingLanguageList />
          </TabsContent>

          <TabsContent value="categories">
            <TechnologyCategoryList />
          </TabsContent>

          <TabsContent value="testimonials">
            <TestimonialList />
          </TabsContent>

          <TabsContent value="config">
            <ConfigForm />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
