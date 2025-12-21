import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useTestimonialsCRUD, Testimonial } from "@/hooks/useTestimonialsCRUD";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Loader2,
  Pencil,
  Trash2,
  Plus,
  MessageSquare,
  Star,
  ExternalLink,
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
import TestimonialForm from "@/components/TestimonialForm";

export default function TestimonialList() {
  const { testimonials, loading, error } = useTestimonialsCRUD();
  const [editingTestimonial, setEditingTestimonial] =
    useState<Testimonial | null>(null);
  const [deletingTestimonial, setDeletingTestimonial] =
    useState<Testimonial | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = async () => {
    if (!deletingTestimonial) return;

    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, "testimonials", deletingTestimonial.id));
      setDeletingTestimonial(null);
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar el testimonio");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="ml-3 text-lg">Cargando testimonios...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg mb-2">Error al cargar testimonios</p>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (showAddForm || editingTestimonial) {
    return (
      <TestimonialForm
        testimonial={editingTestimonial}
        onCancel={() => {
          setShowAddForm(false);
          setEditingTestimonial(null);
        }}
        onSuccess={() => {
          setShowAddForm(false);
          setEditingTestimonial(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-primary">Testimonios</h2>
          <p className="text-muted-foreground mt-1">
            {testimonials.length}{" "}
            {testimonials.length === 1 ? "testimonio" : "testimonios"}
          </p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          Nuevo Testimonio
        </Button>
      </div>

      {testimonials.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <MessageSquare className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              No hay testimonios registrados
            </h3>
            <p className="text-muted-foreground mb-6">
              Comienza agregando tu primer testimonio
            </p>
            <Button onClick={() => setShowAddForm(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Agregar Primer Testimonio
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((test) => (
            <Card
              key={test.id}
              className="hover:border-primary/50 transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-secondary">
                      {test.imageUrl && (
                        <img
                          src={test.imageUrl}
                          alt={test.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <AvatarFallback className="text-white font-bold">
                        {test.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1 flex items-center gap-2">
                        {test.name}
                        {test.linkedin && (
                          <a
                            href={test.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </CardTitle>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: test.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingTestimonial(test)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDeletingTestimonial(test)}
                      className="hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-4">
                  {test.content.es}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t">
                  <span>Orden: {test.order || 0}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <AlertDialog
        open={!!deletingTestimonial}
        onOpenChange={() => setDeletingTestimonial(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar testimonio?</AlertDialogTitle>
            <AlertDialogDescription>
              Estás a punto de eliminar el testimonio de "
              {deletingTestimonial?.name}". Esta acción no se puede deshacer.
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
