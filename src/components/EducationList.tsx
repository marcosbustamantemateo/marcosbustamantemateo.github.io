import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useEducationCRUD, Education } from "@/hooks/useEducationCRUD";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Pencil, Trash2, Plus, GraduationCap } from "lucide-react";
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
import EducationForm from "@/components/EducationForm";

export default function EducationList() {
  const { education, loading, error } = useEducationCRUD();
  const [editingEducation, setEditingEducation] = useState<Education | null>(
    null
  );
  const [deletingEducation, setDeletingEducation] = useState<Education | null>(
    null
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = async () => {
    if (!deletingEducation) return;

    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, "education", deletingEducation.id));
      setDeletingEducation(null);
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar la educación");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="ml-3 text-lg">Cargando educación...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg mb-2">Error al cargar educación</p>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (showAddForm || editingEducation) {
    return (
      <EducationForm
        education={editingEducation}
        onCancel={() => {
          setShowAddForm(false);
          setEditingEducation(null);
        }}
        onSuccess={() => {
          setShowAddForm(false);
          setEditingEducation(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-primary">
            Educación y Formación
          </h2>
          <p className="text-muted-foreground mt-1">
            {education.length} {education.length === 1 ? "entrada" : "entradas"}
          </p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          Nueva Educación
        </Button>
      </div>

      {education.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <GraduationCap className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              No hay educación registrada
            </h3>
            <p className="text-muted-foreground mb-6">
              Comienza agregando tu formación académica
            </p>
            <Button onClick={() => setShowAddForm(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Agregar Primera Entrada
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {education.map((edu) => (
            <Card
              key={edu.id}
              className="hover:border-primary/50 transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">
                      {edu.institution}
                    </CardTitle>
                    <p className="text-base text-secondary font-semibold">
                      {edu.degree.es}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.period.es}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingEducation(edu)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDeletingEducation(edu)}
                      className="hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {edu.description.es}
                </p>
                {edu.technologies && edu.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t">
                  <span>Orden: {edu.order || 0}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <AlertDialog
        open={!!deletingEducation}
        onOpenChange={() => setDeletingEducation(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar educación?</AlertDialogTitle>
            <AlertDialogDescription>
              Estás a punto de eliminar "{deletingEducation?.institution}". Esta
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
