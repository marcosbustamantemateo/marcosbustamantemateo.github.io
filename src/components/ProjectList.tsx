import { useState } from "react";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useProjects, Project } from "@/hooks/useProjects";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  Pencil,
  Trash2,
  ExternalLink,
  Plus,
  Globe,
  Smartphone,
  Monitor,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ProjectForm from "@/components/ProjectForm";

const typeIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
};

export default function ProjectList() {
  const { projects, loading, error } = useProjects();
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [deletingProject, setDeletingProject] = useState<Project | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = async () => {
    if (!deletingProject) return;

    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, "projects", deletingProject.id));
      setDeletingProject(null);
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar el proyecto");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="ml-3 text-lg">Cargando proyectos...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg mb-2">Error al cargar proyectos</p>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (showAddForm || editingProject) {
    return (
      <ProjectForm
        project={editingProject}
        onCancel={() => {
          setShowAddForm(false);
          setEditingProject(null);
        }}
        onSuccess={() => {
          setShowAddForm(false);
          setEditingProject(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-primary">
            Gestión de Proyectos
          </h2>
          <p className="text-muted-foreground mt-1">
            {projects.length} proyecto{projects.length !== 1 ? "s" : ""} en
            total
          </p>
        </div>
        <Button
          onClick={() => setShowAddForm(true)}
          size="lg"
          className="gap-2"
        >
          <Plus className="w-5 h-5" />
          Agregar Proyecto
        </Button>
      </div>

      {projects.length === 0 ? (
        <Card className="border-dashed border-2 border-primary/30">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="p-4 rounded-full bg-primary/10 mb-4 border-2 border-primary/20">
              <Plus className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg font-medium mb-2">No hay proyectos</p>
            <p className="text-muted-foreground mb-6">
              Agrega tu primer proyecto para comenzar
            </p>
            <Button onClick={() => setShowAddForm(true)}>
              Agregar Primer Proyecto
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const TypeIcon = typeIcons[project.type];
            return (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/800x400?text=Imagen+no+disponible";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                    <TypeIcon className="w-3.5 h-3.5 text-white" />
                    <span className="text-xs font-medium text-white capitalize">
                      {project.type}
                    </span>
                  </div>

                  {project.comingSoon && (
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-secondary/90 backdrop-blur-sm border border-secondary">
                      <span className="text-xs font-semibold text-secondary-foreground">
                        Próximamente
                      </span>
                    </div>
                  )}
                </div>

                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl line-clamp-1">
                    🇪🇸 {project.title}
                    {project.titleEn && (
                      <span className="block text-sm font-normal text-muted-foreground mt-1">
                        🇬🇧 {project.titleEn}
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 min-h-[3rem] space-y-1">
                    <span className="block text-xs text-muted-foreground/70">
                      ES:
                    </span>
                    <span className="block">{project.description.es}</span>
                    {project.description.en && (
                      <>
                        <span className="block text-xs text-muted-foreground/70 mt-1">
                          EN:
                        </span>
                        <span className="block">{project.description.en}</span>
                      </>
                    )}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver proyecto
                    </a>
                  )}

                  <div className="flex gap-2 pt-2 border-t">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                      onClick={() => setEditingProject(project)}
                    >
                      <Pencil className="w-4 h-4" />
                      Editar
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex-1 gap-2"
                      onClick={() => setDeletingProject(project)}
                    >
                      <Trash2 className="w-4 h-4" />
                      Eliminar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Alert Dialog para confirmar eliminación */}
      <AlertDialog
        open={!!deletingProject}
        onOpenChange={() => setDeletingProject(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Se eliminará permanentemente el
              proyecto{" "}
              <span className="font-semibold text-foreground">
                "{deletingProject?.title}"
              </span>
              .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Eliminando...
                </>
              ) : (
                "Eliminar"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
