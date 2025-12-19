import { useState, FormEvent, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { Project } from "@/hooks/useProjects";
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
import { Switch } from "@/components/ui/switch";
import {
  X,
  Plus,
  Save,
  Loader2,
  ArrowLeft,
  Image as ImageIcon,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ProjectFormProps {
  project?: Project | null;
  onCancel: () => void;
  onSuccess: () => void;
}

export default function ProjectForm({
  project,
  onCancel,
  onSuccess,
}: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    titleEn: (project as any)?.titleEn || "",
    descriptionEs: project?.description.es || "",
    descriptionEn: project?.description.en || "",
    imageUrl: project?.imageUrl || "",
    link: project?.link || "",
    type: project?.type || ("web" as "web" | "mobile" | "desktop"),
    comingSoon: project?.comingSoon || false,
    order: project?.order || 0,
  });

  const [technologies, setTechnologies] = useState<string[]>(
    project?.technologies || []
  );
  const [techInput, setTechInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

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
    setError("");

    if (!formData.imageUrl) {
      setError("Por favor ingresa la URL de la imagen");
      return;
    }

    if (technologies.length === 0) {
      setError("Agrega al menos una tecnología");
      return;
    }

    setSaving(true);

    try {
      const projectData = {
        title: formData.title,
        titleEn: formData.titleEn,
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
        updatedAt: serverTimestamp(),
      };

      if (project) {
        // Actualizar proyecto existente
        await updateDoc(doc(db, "projects", project.id), projectData);
      } else {
        // Crear nuevo proyecto
        await addDoc(collection(db, "projects"), {
          ...projectData,
          createdAt: serverTimestamp(),
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error:", error);
      setError("Error al guardar el proyecto: " + (error as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={onCancel} className="mb-4 gap-2">
        <ArrowLeft className="w-4 h-4" />
        Volver al listado
      </Button>

      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl">
            {project ? "Editar Proyecto" : "Nuevo Proyecto"}
          </CardTitle>
          <CardDescription>
            {project
              ? "Actualiza la información del proyecto"
              : "Completa el formulario para agregar un nuevo proyecto"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Grid de 2 columnas para títulos y descripciones */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Columna Español */}
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                  🇪🇸 Español
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="title">Título del Proyecto *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                    placeholder="Ej: Sistema de Gestión Empresarial"
                    className="text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descEs">Descripción *</Label>
                  <Textarea
                    id="descEs"
                    value={formData.descriptionEs}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        descriptionEs: e.target.value,
                      })
                    }
                    required
                    placeholder="Descripción detallada en español..."
                    rows={5}
                    className="resize-none"
                  />
                </div>
              </div>

              {/* Columna Inglés */}
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                  🇬🇧 English
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="titleEn">Project Title *</Label>
                  <Input
                    id="titleEn"
                    value={formData.titleEn}
                    onChange={(e) =>
                      setFormData({ ...formData, titleEn: e.target.value })
                    }
                    required
                    placeholder="E.g: Business Management System"
                    className="text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descEn">Description *</Label>
                  <Textarea
                    id="descEn"
                    value={formData.descriptionEn}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        descriptionEn: e.target.value,
                      })
                    }
                    required
                    placeholder="Detailed description in English..."
                    rows={5}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Grid de 2 columnas para tipo y orden */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Proyecto *</Label>
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
                    <SelectItem value="web">🌐 Web</SelectItem>
                    <SelectItem value="mobile">📱 Móvil</SelectItem>
                    <SelectItem value="desktop">💻 Escritorio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="order">Orden de visualización</Label>
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
                <p className="text-xs text-muted-foreground">
                  Menor número = aparece primero
                </p>
              </div>
            </div>

            {/* Tecnologías */}
            <div className="space-y-2">
              <Label htmlFor="tech">Tecnologías *</Label>
              <div className="flex gap-2">
                <Input
                  id="tech"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTechnology();
                    }
                  }}
                  placeholder="Ej: React, TypeScript, Node.js..."
                  className="text-base"
                />
                <Button
                  type="button"
                  onClick={addTechnology}
                  variant="outline"
                  size="icon"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="pl-3 pr-2 py-1.5 text-sm"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => removeTechnology(tech)}
                      className="ml-2 hover:text-destructive transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              {technologies.length === 0 && (
                <p className="text-xs text-muted-foreground">
                  Agrega al menos una tecnología presionando Enter o haciendo
                  clic en +
                </p>
              )}
            </div>

            {/* Link */}
            <div className="space-y-2">
              <Label htmlFor="link">Enlace del Proyecto *</Label>
              <Input
                id="link"
                type="url"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                required
                placeholder="https://miproyecto.com"
                className="text-base"
              />
            </div>

            {/* URL de Imagen */}
            <div className="space-y-2">
              <Label htmlFor="imageUrl">URL de la Imagen *</Label>
              <Input
                id="imageUrl"
                type="url"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                required
                placeholder="https://i.imgur.com/ejemplo.jpg"
                className="text-base"
              />
              <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 text-xs">
                <ImageIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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
                  y pega la URL directa aquí
                </p>
              </div>
              {formData.imageUrl && (
                <div className="mt-4 relative group">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="w-full max-h-80 object-cover rounded-lg border-2 border-border"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/800x400?text=URL+Invalida";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg" />
                </div>
              )}
            </div>

            {/* Coming Soon Toggle */}
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div className="space-y-0.5">
                <Label
                  htmlFor="comingSoon"
                  className="text-base cursor-pointer"
                >
                  Próximamente
                </Label>
                <p className="text-sm text-muted-foreground">
                  Marca si el proyecto está en desarrollo
                </p>
              </div>
              <Switch
                id="comingSoon"
                checked={formData.comingSoon}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, comingSoon: checked })
                }
              />
            </div>

            {/* Botones */}
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
                    {project ? "Actualizar" : "Crear"} Proyecto
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
