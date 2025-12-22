import { useState, FormEvent } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Testimonial } from "@/hooks/useTestimonialsCRUD";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Save, Loader2, ArrowLeft, User } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TestimonialFormProps {
  testimonial?: Testimonial | null;
  onCancel: () => void;
  onSuccess: () => void;
}

export default function TestimonialForm({
  testimonial,
  onCancel,
  onSuccess,
}: TestimonialFormProps) {
  const [formData, setFormData] = useState({
    name: testimonial?.name || "",
    initials: testimonial?.initials || "",
    imageUrl: testimonial?.imageUrl || "",
    contentEs: testimonial?.content.es || "",
    contentEn: testimonial?.content.en || "",
    linkedin: testimonial?.linkedin || "",
    rating: testimonial?.rating || 5,
    order: testimonial?.order || 0,
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const testimonialData = {
        name: formData.name,
        initials: formData.initials,
        imageUrl: formData.imageUrl,
        content: { es: formData.contentEs, en: formData.contentEn },
        linkedin: formData.linkedin,
        rating: formData.rating,
        order: formData.order,
        updatedAt: serverTimestamp(),
      };

      if (testimonial?.id) {
        await setDoc(doc(db, "testimonials", testimonial.id), testimonialData, {
          merge: true,
        });
      } else {
        const nextId = `test${Date.now()}`;
        await setDoc(doc(db, "testimonials", nextId), {
          ...testimonialData,
          createdAt: serverTimestamp(),
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error saving testimonial:", error);
      setError("Error al guardar. Intenta de nuevo.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onCancel}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <CardTitle>
              {testimonial ? "Editar Testimonio" : "Nuevo Testimonio"}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Ej: Juan Pérez"
                  className="text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="initials">Iniciales *</Label>
                <Input
                  id="initials"
                  value={formData.initials}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      initials: e.target.value.toUpperCase(),
                    })
                  }
                  required
                  maxLength={3}
                  placeholder="Ej: JP"
                  className="text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">URL de la Foto (opcional)</Label>
              <Input
                id="imageUrl"
                type="url"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                placeholder="https://www.marcosbustamantemateo.com/images/testimonials/photo.jpg"
                className="text-base"
              />
              <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 text-xs">
                <User className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Sube tu imagen a{" "}
                  <a
                    href="https://imgur.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Imgur
                  </a>{" "}
                  o{" "}
                  <a
                    href="https://postimages.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    PostImages
                  </a>{" "}
                  y pega la URL. Si no se proporciona, se mostrarán las
                  iniciales.
                </p>
              </div>
              {formData.imageUrl && (
                <div className="mt-4 flex justify-center">
                  <div className="relative group">
                    <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-lg">
                      <img
                        src={formData.imageUrl}
                        alt="Preview"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const fallback = (e.target as HTMLImageElement)
                            .nextElementSibling;
                          if (fallback)
                            (fallback as HTMLElement).style.display = "flex";
                        }}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold text-3xl">
                        {formData.initials || "?"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-full" />
                  </div>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                  🇪🇸 Español
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="contentEs">Testimonio *</Label>
                  <Textarea
                    id="contentEs"
                    value={formData.contentEs}
                    onChange={(e) =>
                      setFormData({ ...formData, contentEs: e.target.value })
                    }
                    required
                    placeholder="Testimonio en español..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
              </div>

              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                  🇬🇧 English
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="contentEn">Testimonial *</Label>
                  <Textarea
                    id="contentEn"
                    value={formData.contentEn}
                    onChange={(e) =>
                      setFormData({ ...formData, contentEn: e.target.value })
                    }
                    required
                    placeholder="Testimonial in English..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn (opcional)</Label>
              <Input
                id="linkedin"
                type="url"
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({ ...formData, linkedin: e.target.value })
                }
                placeholder="https://www.linkedin.com/in/..."
                className="text-base"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rating">Rating (1-5) *</Label>
                <Input
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rating: parseInt(e.target.value) || 5,
                    })
                  }
                  required
                  placeholder="5"
                  className="text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="order">Orden</Label>
                <Input
                  id="order"
                  type="number"
                  value={formData.order}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order: parseInt(e.target.value) || 0,
                    })
                  }
                  placeholder="0"
                  className="text-base"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={saving}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={saving} className="flex-1 gap-2">
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Guardando...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    {testimonial ? "Actualizar" : "Crear"}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
