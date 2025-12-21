import { useState, FormEvent } from "react";
import {
  addDoc,
  doc,
  serverTimestamp,
  setDoc,
  collection,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { Education } from "@/hooks/useEducationCRUD";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Save, Loader2, ArrowLeft } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface EducationFormProps {
  education?: Education | null;
  onCancel: () => void;
  onSuccess: () => void;
}

export default function EducationForm({
  education,
  onCancel,
  onSuccess,
}: EducationFormProps) {
  const [formData, setFormData] = useState({
    institution: education?.institution || "",
    degreeEs: education?.degree.es || "",
    degreeEn: education?.degree.en || "",
    periodEs: education?.period.es || "",
    periodEn: education?.period.en || "",
    descriptionEs: education?.description.es || "",
    descriptionEn: education?.description.en || "",
    order: education?.order || 0,
  });

  const [technologies, setTechnologies] = useState<string[]>(
    education?.technologies || []
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
      const educationData = {
        institution: formData.institution,
        degree: { es: formData.degreeEs, en: formData.degreeEn },
        period: { es: formData.periodEs, en: formData.periodEn },
        description: { es: formData.descriptionEs, en: formData.descriptionEn },
        technologies,
        order: formData.order,
        updatedAt: serverTimestamp(),
      };

      if (education?.id) {
        const docId = `edu${education.id}`;
        await setDoc(doc(db, "education", docId), educationData, {
          merge: true,
        });
      } else {
        const nextId = `edu${Date.now()}`;
        await setDoc(doc(db, "education", nextId), {
          ...educationData,
          createdAt: serverTimestamp(),
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error saving education:", error);
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
              {education ? "Editar Educación" : "Nueva Educación"}
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
            <div className="space-y-2">
              <Label htmlFor="institution">Institución *</Label>
              <Input
                id="institution"
                value={formData.institution}
                onChange={(e) =>
                  setFormData({ ...formData, institution: e.target.value })
                }
                required
                placeholder="Ej: Universidad de Sevilla"
                className="text-base"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                  🇪🇸 Español
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="degreeEs">Título *</Label>
                  <Input
                    id="degreeEs"
                    value={formData.degreeEs}
                    onChange={(e) =>
                      setFormData({ ...formData, degreeEs: e.target.value })
                    }
                    required
                    placeholder="Ej: Ingeniería Informática"
                    className="text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="periodEs">Período *</Label>
                  <Input
                    id="periodEs"
                    value={formData.periodEs}
                    onChange={(e) =>
                      setFormData({ ...formData, periodEs: e.target.value })
                    }
                    required
                    placeholder="Ej: 09/2015 – 06/20194 años"
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
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </div>

              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                  🇬🇧 English
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="degreeEn">Degree *</Label>
                  <Input
                    id="degreeEn"
                    value={formData.degreeEn}
                    onChange={(e) =>
                      setFormData({ ...formData, degreeEn: e.target.value })
                    }
                    required
                    placeholder="E.g: Computer Engineering"
                    className="text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="periodEn">Period *</Label>
                  <Input
                    id="periodEn"
                    value={formData.periodEn}
                    onChange={(e) =>
                      setFormData({ ...formData, periodEn: e.target.value })
                    }
                    required
                    placeholder="E.g: 09/2015 – 06/20194 years"
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
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tech">Tecnologías</Label>
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
                  placeholder="Ej: Java, Python, C++..."
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
                    {education ? "Actualizar" : "Crear"}
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
