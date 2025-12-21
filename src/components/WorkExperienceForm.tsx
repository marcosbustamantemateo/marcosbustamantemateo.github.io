import { useState, FormEvent } from "react";
import {
  collection,
  addDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { WorkExperience } from "@/hooks/useWorkExperienceCRUD";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Save, Loader2, ArrowLeft } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface WorkExperienceFormProps {
  experience?: WorkExperience | null;
  onCancel: () => void;
  onSuccess: () => void;
}

export default function WorkExperienceForm({
  experience,
  onCancel,
  onSuccess,
}: WorkExperienceFormProps) {
  const [formData, setFormData] = useState({
    company: experience?.company || "",
    positionEs: experience?.position.es || "",
    positionEn: experience?.position.en || "",
    periodEs: experience?.period.es || "",
    periodEn: experience?.period.en || "",
    descriptionEs: experience?.description.es || "",
    descriptionEn: experience?.description.en || "",
    order: experience?.order || 0,
  });

  const [technologies, setTechnologies] = useState<string[]>(
    experience?.technologies || []
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

    if (technologies.length === 0) {
      setError("Agrega al menos una tecnología");
      return;
    }

    setSaving(true);

    try {
      const experienceData = {
        company: formData.company,
        position: {
          es: formData.positionEs,
          en: formData.positionEn,
        },
        period: {
          es: formData.periodEs,
          en: formData.periodEn,
        },
        description: {
          es: formData.descriptionEs,
          en: formData.descriptionEn,
        },
        technologies,
        order: formData.order,
        updatedAt: serverTimestamp(),
      };

      if (experience?.id) {
        // Update existing - usar el mismo patrón que en initFirebase.ts
        const docId = `exp${experience.id}`;
        await setDoc(doc(db, "workExperience", docId), experienceData, {
          merge: true,
        });
      } else {
        // Create - usar el mismo ID que en el JSON
        const nextId = `exp${Date.now()}`;
        await setDoc(doc(db, "workExperience", nextId), {
          ...experienceData,
          createdAt: serverTimestamp(),
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error saving work experience:", error);
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
              {experience
                ? "Editar Experiencia Laboral"
                : "Nueva Experiencia Laboral"}
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
            {/* Empresa */}
            <div className="space-y-2">
              <Label htmlFor="company">Empresa *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                required
                placeholder="Ej: Google Inc."
                className="text-base"
              />
            </div>

            {/* Posición - Bilingüe */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                  🇪🇸 Español
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="positionEs">Posición *</Label>
                  <Input
                    id="positionEs"
                    value={formData.positionEs}
                    onChange={(e) =>
                      setFormData({ ...formData, positionEs: e.target.value })
                    }
                    required
                    placeholder="Ej: Desarrollador Senior"
                    className="text-base"
                  />
                </div>
              </div>

              <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                  🇬🇧 English
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="positionEn">Position *</Label>
                  <Input
                    id="positionEn"
                    value={formData.positionEn}
                    onChange={(e) =>
                      setFormData({ ...formData, positionEn: e.target.value })
                    }
                    required
                    placeholder="E.g: Senior Developer"
                    className="text-base"
                  />
                </div>
              </div>
            </div>

            {/* Período - Bilingüe */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="periodEs">Período (ES) *</Label>
                <Input
                  id="periodEs"
                  value={formData.periodEs}
                  onChange={(e) =>
                    setFormData({ ...formData, periodEs: e.target.value })
                  }
                  required
                  placeholder="Ej: 01/2020 – 12/20212 años"
                  className="text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="periodEn">Period (EN) *</Label>
                <Input
                  id="periodEn"
                  value={formData.periodEn}
                  onChange={(e) =>
                    setFormData({ ...formData, periodEn: e.target.value })
                  }
                  required
                  placeholder="E.g: 01/2020 – 12/20212 years"
                  className="text-base"
                />
              </div>
            </div>

            {/* Descripción - Bilingüe */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="descEs">Descripción (ES) *</Label>
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
              <div className="space-y-2">
                <Label htmlFor="descEn">Description (EN) *</Label>
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
            </div>

            {/* Orden */}
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
                    {experience ? "Actualizar" : "Crear"}
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
