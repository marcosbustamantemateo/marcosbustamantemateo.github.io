import { useState, FormEvent } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { TechnologyCategory } from "@/hooks/useTechnologyCategoriesCRUD";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Plus, Save, Loader2, ArrowLeft } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TechnologyCategoryFormProps {
  category?: TechnologyCategory | null;
  onCancel: () => void;
  onSuccess: () => void;
}

// Iconos de lucide-react disponibles
const iconOptions = [
  "Server",
  "Radio",
  "Monitor",
  "GitBranch",
  "Database",
  "Wrench",
  "TestTube",
  "Smartphone",
  "Cloud",
  "Code",
];

export default function TechnologyCategoryForm({
  category,
  onCancel,
  onSuccess,
}: TechnologyCategoryFormProps) {
  const [formData, setFormData] = useState({
    labelEs: category?.label.es || "",
    labelEn: category?.label.en || "",
    descriptionEs: category?.description.es || "",
    descriptionEn: category?.description.en || "",
    icon: category?.icon || "Code",
    order: category?.order || 0,
  });

  const [technologies, setTechnologies] = useState<string[]>(
    category?.technologies || []
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
    setSaving(true);

    try {
      const categoryData = {
        label: { es: formData.labelEs, en: formData.labelEn },
        description: { es: formData.descriptionEs, en: formData.descriptionEn },
        icon: formData.icon,
        technologies,
        order: formData.order,
        updatedAt: serverTimestamp(),
      };

      if (category?.id) {
        await setDoc(
          doc(db, "technologyCategories", category.id),
          categoryData,
          { merge: true }
        );
      } else {
        const nextId = `cat${Date.now()}`;
        await setDoc(doc(db, "technologyCategories", nextId), {
          ...categoryData,
          createdAt: serverTimestamp(),
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error saving category:", error);
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
              {category ? "Editar Categoría" : "Nueva Categoría"}
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                  🇪🇸 Español
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="labelEs">Nombre *</Label>
                  <Input
                    id="labelEs"
                    value={formData.labelEs}
                    onChange={(e) =>
                      setFormData({ ...formData, labelEs: e.target.value })
                    }
                    required
                    placeholder="Ej: Servidor / Backend"
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
                    placeholder="Descripción..."
                    rows={3}
                    className="resize-none"
                  />
                </div>
              </div>

              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                  🇬🇧 English
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="labelEn">Name *</Label>
                  <Input
                    id="labelEn"
                    value={formData.labelEn}
                    onChange={(e) =>
                      setFormData({ ...formData, labelEn: e.target.value })
                    }
                    required
                    placeholder="E.g: Server / Backend"
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
                    placeholder="Description..."
                    rows={3}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="icon">Icono *</Label>
                <Select
                  value={formData.icon}
                  onValueChange={(value) =>
                    setFormData({ ...formData, icon: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon} value={icon}>
                        {icon}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  placeholder="Ej: React, Vue, Angular..."
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
                    {category ? "Actualizar" : "Crear"}
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
