import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import {
  useWorkExperienceCRUD,
  WorkExperience,
} from "@/hooks/useWorkExperienceCRUD";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Pencil, Trash2, Plus, Briefcase } from "lucide-react";
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
import WorkExperienceForm from "@/components/WorkExperienceForm";

export default function WorkExperienceList() {
  const { experiences, loading, error } = useWorkExperienceCRUD();
  const [editingExperience, setEditingExperience] =
    useState<WorkExperience | null>(null);
  const [deletingExperience, setDeletingExperience] =
    useState<WorkExperience | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = async () => {
    if (!deletingExperience) return;

    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, "workExperience", deletingExperience.id));
      setDeletingExperience(null);
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar la experiencia");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="ml-3 text-lg">Cargando experiencias...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg mb-2">
          Error al cargar experiencias
        </p>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (showAddForm || editingExperience) {
    return (
      <WorkExperienceForm
        experience={editingExperience}
        onCancel={() => {
          setShowAddForm(false);
          setEditingExperience(null);
        }}
        onSuccess={() => {
          setShowAddForm(false);
          setEditingExperience(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-primary">
            Experiencia Laboral
          </h2>
          <p className="text-muted-foreground mt-1">
            {experiences.length}{" "}
            {experiences.length === 1 ? "experiencia" : "experiencias"}
          </p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          Nueva Experiencia
        </Button>
      </div>

      {experiences.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <Briefcase className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              No hay experiencias registradas
            </h3>
            <p className="text-muted-foreground mb-6">
              Comienza agregando tu primera experiencia laboral
            </p>
            <Button onClick={() => setShowAddForm(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Agregar Primera Experiencia
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="hover:border-primary/50 transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">
                      {exp.company}
                    </CardTitle>
                    <p className="text-base text-secondary font-semibold">
                      {exp.position.es}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.period.es}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingExperience(exp)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDeletingExperience(exp)}
                      className="hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {exp.description.es}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t">
                  <span>Orden: {exp.order || 0}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <AlertDialog
        open={!!deletingExperience}
        onOpenChange={() => setDeletingExperience(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar experiencia?</AlertDialogTitle>
            <AlertDialogDescription>
              Estás a punto de eliminar "{deletingExperience?.company}". Esta
              acción no se puede deshacer.
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
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
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
