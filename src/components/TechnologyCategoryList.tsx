import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import {
  useTechnologyCategoriesCRUD,
  TechnologyCategory,
} from "@/hooks/useTechnologyCategoriesCRUD";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Pencil, Trash2, Plus, Layers } from "lucide-react";
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
import TechnologyCategoryForm from "@/components/TechnologyCategoryForm";

export default function TechnologyCategoryList() {
  const { categories, loading, error } = useTechnologyCategoriesCRUD();
  const [editingCategory, setEditingCategory] =
    useState<TechnologyCategory | null>(null);
  const [deletingCategory, setDeletingCategory] =
    useState<TechnologyCategory | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = async () => {
    if (!deletingCategory) return;

    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, "technologyCategories", deletingCategory.id));
      setDeletingCategory(null);
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar la categoría");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="ml-3 text-lg">Cargando categorías...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg mb-2">Error al cargar categorías</p>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (showAddForm || editingCategory) {
    return (
      <TechnologyCategoryForm
        category={editingCategory}
        onCancel={() => {
          setShowAddForm(false);
          setEditingCategory(null);
        }}
        onSuccess={() => {
          setShowAddForm(false);
          setEditingCategory(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-primary">
            Categorías de Tecnologías
          </h2>
          <p className="text-muted-foreground mt-1">
            {categories.length}{" "}
            {categories.length === 1 ? "categoría" : "categorías"}
          </p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          Nueva Categoría
        </Button>
      </div>

      {categories.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <Layers className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              No hay categorías registradas
            </h3>
            <p className="text-muted-foreground mb-6">
              Comienza agregando tu primera categoría de tecnologías
            </p>
            <Button onClick={() => setShowAddForm(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Agregar Primera Categoría
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              className="hover:border-primary/50 transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">
                      {cat.label.es}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {cat.description.es}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingCategory(cat)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDeletingCategory(cat)}
                      className="hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {cat.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t">
                  <span>Icono: {cat.icon}</span>
                  <span>•</span>
                  <span>Orden: {cat.order || 0}</span>
                  <span>•</span>
                  <span>{cat.technologies.length} tecnologías</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <AlertDialog
        open={!!deletingCategory}
        onOpenChange={() => setDeletingCategory(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar categoría?</AlertDialogTitle>
            <AlertDialogDescription>
              Estás a punto de eliminar "{deletingCategory?.label.es}". Esta
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
