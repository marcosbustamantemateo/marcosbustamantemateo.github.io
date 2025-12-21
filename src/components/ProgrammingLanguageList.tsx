import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import {
  useProgrammingLanguagesCRUD,
  ProgrammingLanguage,
} from "@/hooks/useProgrammingLanguagesCRUD";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, Pencil, Trash2, Plus, Code } from "lucide-react";
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
import ProgrammingLanguageForm from "@/components/ProgrammingLanguageForm";

export default function ProgrammingLanguageList() {
  const { languages, loading, error } = useProgrammingLanguagesCRUD();
  const [editingLanguage, setEditingLanguage] =
    useState<ProgrammingLanguage | null>(null);
  const [deletingLanguage, setDeletingLanguage] =
    useState<ProgrammingLanguage | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = async () => {
    if (!deletingLanguage) return;

    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, "programmingLanguages", deletingLanguage.id));
      setDeletingLanguage(null);
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar el lenguaje");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="ml-3 text-lg">Cargando lenguajes...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg mb-2">Error al cargar lenguajes</p>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (showAddForm || editingLanguage) {
    return (
      <ProgrammingLanguageForm
        language={editingLanguage}
        onCancel={() => {
          setShowAddForm(false);
          setEditingLanguage(null);
        }}
        onSuccess={() => {
          setShowAddForm(false);
          setEditingLanguage(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-primary">
            Lenguajes de Programación
          </h2>
          <p className="text-muted-foreground mt-1">
            {languages.length}{" "}
            {languages.length === 1 ? "lenguaje" : "lenguajes"}
          </p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          Nuevo Lenguaje
        </Button>
      </div>

      {languages.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <Code className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              No hay lenguajes registrados
            </h3>
            <p className="text-muted-foreground mb-6">
              Comienza agregando tu primer lenguaje de programación
            </p>
            <Button onClick={() => setShowAddForm(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Agregar Primer Lenguaje
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {languages.map((lang) => (
            <Card
              key={lang.id}
              className="hover:border-primary/50 transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg">{lang.name}</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingLanguage(lang)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDeletingLanguage(lang)}
                      className="hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Nivel</span>
                    <span className="font-semibold text-primary">
                      {lang.level}%
                    </span>
                  </div>
                  <Progress value={lang.level} className="h-2" />
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t">
                  <span>Orden: {lang.order || 0}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <AlertDialog
        open={!!deletingLanguage}
        onOpenChange={() => setDeletingLanguage(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar lenguaje?</AlertDialogTitle>
            <AlertDialogDescription>
              Estás a punto de eliminar "{deletingLanguage?.name}". Esta acción
              no se puede deshacer.
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
