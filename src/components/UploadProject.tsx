import { useState, FormEvent } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Upload, Loader2 } from "lucide-react";

export default function UploadProject() {
  const [formData, setFormData] = useState({
    title: "",
    descriptionEs: "",
    descriptionEn: "",
    imageUrl: "",
    link: "",
    type: "web" as "web" | "mobile" | "desktop",
    comingSoon: false,
    order: 0,
  });

  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");
  const [uploading, setUploading] = useState(false);

  const addTechnology = () => {
    if (techInput.trim() && !technologies.includes(techInput.trim())) {
      setTechnologies([...technologies, techInput.trim()]);
      setTechInput("");
    }
  };

  const removeTechnology = (tech: string) => {
    setTechnologies(technologies.filter((t) => t !== tech));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.imageUrl) {
      alert("Por favor ingresa la URL de la imagen");
      return;
    }

    if (technologies.length === 0) {
      alert("Agrega al menos una tecnología");
      return;
    }

    setUploading(true);

    try {
      await addDoc(collection(db, "projects"), {
        title: formData.title,
        description: {
          es: formData.descriptionEs,
          en: formData.descriptionEn,
        },
        imageUrl: formData.imageUrl,
        type: formData.type,
        technologies: technologies,
        link: formData.link,
        comingSoon: formData.comingSoon,
        order: formData.order,
        createdAt: serverTimestamp(),
      });

      alert("✅ Proyecto subido exitosamente");

      // Reset form
      setFormData({
        title: "",
        descriptionEs: "",
        descriptionEn: "",
        imageUrl: "",
        link: "",
        type: "web",
        comingSoon: false,
        order: 0,
      });
      setTechnologies([]);
      setTechInput("");
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error al subir el proyecto: " + (error as Error).message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Subir Nuevo Proyecto</CardTitle>
          <CardDescription>
            Completa el formulario para agregar un proyecto a tu portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Título */}
            <div>
              <Label htmlFor="title">Título del Proyecto</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
                placeholder="Ej: Sistema de Gestión Empresarial"
              />
            </div>

            {/* Descripción Español */}
            <div>
              <Label htmlFor="descEs">Descripción (Español)</Label>
              <Textarea
                id="descEs"
                value={formData.descriptionEs}
                onChange={(e) =>
                  setFormData({ ...formData, descriptionEs: e.target.value })
                }
                required
                placeholder="Descripción detallada en español..."
                rows={3}
              />
            </div>

            {/* Descripción Inglés */}
            <div>
              <Label htmlFor="descEn">Descripción (Inglés)</Label>
              <Textarea
                id="descEn"
                value={formData.descriptionEn}
                onChange={(e) =>
                  setFormData({ ...formData, descriptionEn: e.target.value })
                }
                required
                placeholder="Detailed description in English..."
                rows={3}
              />
            </div>

            {/* Tipo de Proyecto */}
            <div>
              <Label htmlFor="type">Tipo de Proyecto</Label>
              <Select
                value={formData.type}
                onValueChange={(value: "web" | "mobile" | "desktop") =>
                  setFormData({ ...formData, type: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web</SelectItem>
                  <SelectItem value="mobile">Móvil</SelectItem>
                  <SelectItem value="desktop">Escritorio</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tecnologías */}
            <div>
              <Label htmlFor="tech">Tecnologías</Label>
              <div className="flex gap-2">
                <Input
                  id="tech"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTechnology())
                  }
                  placeholder="Ej: React, TypeScript..."
                />
                <Button type="button" onClick={addTechnology} variant="outline">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="pl-3 pr-1">
                    {tech}
                    <button
                      type="button"
                      onClick={() => removeTechnology(tech)}
                      className="ml-2 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Link */}
            <div>
              <Label htmlFor="link">Enlace del Proyecto</Label>
              <Input
                id="link"
                type="url"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                required
                placeholder="https://miproyecto.com"
              />
            </div>

            {/* Order */}
            <div>
              <Label htmlFor="order">Orden (para ordenar proyectos)</Label>
              <Input
                id="order"
                type="number"
                value={formData.order}
                onChange={(e) =>
                  setFormData({ ...formData, order: parseInt(e.target.value) })
                }
                placeholder="0"
              />
            </div>

            {/* Coming Soon */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="comingSoon"
                checked={formData.comingSoon}
                onChange={(e) =>
                  setFormData({ ...formData, comingSoon: e.target.checked })
                }
                className="w-4 h-4"
              />
              <Label htmlFor="comingSoon">Próximamente (Coming Soon)</Label>
            </div>

            {/* URL de Imagen */}
            <div>
              <Label htmlFor="imageUrl">URL de la Imagen</Label>
              <Input
                id="imageUrl"
                type="url"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                required
                placeholder="https://ejemplo.com/imagen.jpg"
              />
              <p className="text-xs text-muted-foreground mt-1">
                💡 Sube tu imagen a{" "}
                <a
                  href="https://imgur.com"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Imgur
                </a>{" "}
                o{" "}
                <a
                  href="https://postimages.org"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  PostImages
                </a>{" "}
                y pega la URL aquí
              </p>
              {formData.imageUrl && (
                <div className="mt-4">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="w-full max-h-64 object-cover rounded-lg border"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/800x400?text=URL+Invalida";
                    }}
                  />
                </div>
              )}
            </div>

            {/* Submit */}
            <Button type="submit" disabled={uploading} className="w-full">
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Subiendo...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Subir Proyecto
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
