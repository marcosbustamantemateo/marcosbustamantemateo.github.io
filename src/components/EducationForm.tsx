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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { parsePeriod, buildPeriodString } from "@/lib/dateUtils";

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
  // Parse existing period if editing
  const parsedPeriodEs = education?.period.es
    ? parsePeriod(education.period.es)
    : {
        startMonth: "01",
        startYear: new Date().getFullYear().toString(),
        endMonth: "",
        endYear: "",
        isPresent: true,
      };

  const parsedPeriodEn = education?.period.en
    ? parsePeriod(education.period.en)
    : {
        startMonth: "01",
        startYear: new Date().getFullYear().toString(),
        endMonth: "",
        endYear: "",
        isPresent: true,
      };

  const [formData, setFormData] = useState({
    institution: education?.institution || "",
    degreeEs: education?.degree.es || "",
    degreeEn: education?.degree.en || "",
    descriptionEs: education?.description.es || "",
    descriptionEn: education?.description.en || "",
    order: education?.order || 0,
  });

  const [dateData, setDateData] = useState({
    startMonth: parsedPeriodEs.startMonth,
    startYear: parsedPeriodEs.startYear,
    endMonth: parsedPeriodEs.endMonth,
    endYear: parsedPeriodEs.endYear,
    isPresent: parsedPeriodEs.isPresent,
  });

  const [technologies, setTechnologies] = useState<string[]>(
    education?.technologies || [],
  );
  const [techInput, setTechInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Calculate periods dynamically
  const periodEs = buildPeriodString(
    dateData.startMonth,
    dateData.startYear,
    dateData.endMonth,
    dateData.endYear,
    dateData.isPresent,
    "es",
  );

  const periodEn = buildPeriodString(
    dateData.startMonth,
    dateData.startYear,
    dateData.endMonth,
    dateData.endYear,
    dateData.isPresent,
    "en",
  );

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

    // Validación de fechas
    if (!dateData.startMonth || !dateData.startYear) {
      setError("Debes especificar al menos la fecha de inicio");
      return;
    }

    if (!dateData.isPresent && (!dateData.endMonth || !dateData.endYear)) {
      setError("Debes especificar la fecha de fin o marcar como Presente");
      return;
    }

    setSaving(true);

    try {
      const educationData = {
        institution: formData.institution,
        degree: { es: formData.degreeEs, en: formData.degreeEn },
        period: { es: periodEs, en: periodEn },
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

            {/* Período */}
            <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-primary/10">
              <Label className="text-lg font-semibold">Período *</Label>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Fecha de Inicio */}
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">
                    Fecha de Inicio
                  </Label>
                  <div className="flex gap-2">
                    <Select
                      value={dateData.startMonth}
                      onValueChange={(value) =>
                        setDateData({ ...dateData, startMonth: value })
                      }
                    >
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Mes" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => {
                          const month = (i + 1).toString().padStart(2, "0");
                          return (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      value={dateData.startYear}
                      onChange={(e) =>
                        setDateData({ ...dateData, startYear: e.target.value })
                      }
                      placeholder="Año"
                      min="1900"
                      max={new Date().getFullYear()}
                      className="w-24"
                      required
                    />
                  </div>
                </div>

                {/* Fecha de Fin */}
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">
                    Fecha de Fin
                  </Label>
                  <div className="flex gap-2">
                    <Select
                      value={dateData.isPresent ? "present" : dateData.endMonth}
                      onValueChange={(value) => {
                        if (value === "present") {
                          setDateData({
                            ...dateData,
                            isPresent: true,
                            endMonth: "",
                            endYear: "",
                          });
                        } else {
                          setDateData({
                            ...dateData,
                            isPresent: false,
                            endMonth: value,
                          });
                        }
                      }}
                    >
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Mes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="present">Presente</SelectItem>
                        {Array.from({ length: 12 }, (_, i) => {
                          const month = (i + 1).toString().padStart(2, "0");
                          return (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      value={dateData.endYear}
                      onChange={(e) =>
                        setDateData({ ...dateData, endYear: e.target.value })
                      }
                      placeholder="Año"
                      min="1900"
                      max={new Date().getFullYear() + 10}
                      className="w-24"
                      disabled={dateData.isPresent}
                      required={!dateData.isPresent}
                    />
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="pt-3 border-t">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">
                      🇪🇸 Vista previa:{" "}
                    </span>
                    <span className="font-semibold text-primary">
                      {periodEs}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">🇬🇧 Preview: </span>
                    <span className="font-semibold text-primary">
                      {periodEn}
                    </span>
                  </div>
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
