import { useState, FormEvent, useEffect } from "react";
import { useConfigCRUD, ProjectSettings } from "@/hooks/useConfigCRUD";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Save, Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ConfigForm() {
  const { config, loading, updateConfig } = useConfigCRUD();
  const [formData, setFormData] = useState({
    yearsOfExperience: 0,
    projectsCompleted: 0,
    technologiesMastered: 0,
    experienceFormat: "8+",
    projectsFormat: "20+",
    technologiesFormat: "auto",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (config?.heroStats) {
      const heroStats = config.heroStats;
      setFormData({
        yearsOfExperience: heroStats.yearsOfExperience || 0,
        projectsCompleted: heroStats.projectsCompleted || 0,
        technologiesMastered: heroStats.technologiesMastered || 0,
        experienceFormat: heroStats.displayFormat?.experience || "8+",
        projectsFormat: heroStats.displayFormat?.projects || "20+",
        technologiesFormat: heroStats.displayFormat?.technologies || "auto",
      });
    }
  }, [config]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: isNaN(Number(value)) ? value : Number(value),
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setSaving(true);

    try {
      const updatedConfig: ProjectSettings = {
        heroStats: {
          yearsOfExperience: formData.yearsOfExperience,
          projectsCompleted: formData.projectsCompleted,
          technologiesMastered: formData.technologiesMastered,
          displayFormat: {
            experience: formData.experienceFormat,
            projects: formData.projectsFormat,
            technologies: formData.technologiesFormat,
          },
        },
      };

      await updateConfig(updatedConfig);
      setSuccess(true);
    } catch (err) {
      console.error("Error updating config:", err);
      setError("Error al guardar la configuración. Intenta de nuevo.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="ml-3 text-lg">Cargando configuración...</span>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary text-2xl">
              ⚙️ Configuración del Proyecto
            </CardTitle>
            <CardDescription>
              Crea la configuración global para tu portfolio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="bg-yellow-50 text-yellow-800 border-yellow-200 mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No existe configuración guardada en Firebase. Los campos están
                vacíos. Completa los valores y haz clic en "Guardar
                Configuración" para crear el documento.
              </AlertDescription>
            </Alert>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Estadísticas
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="yearsOfExperience">
                        Años de Experiencia
                      </Label>
                      <Input
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        type="number"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                        min="0"
                        placeholder="ej: 8"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectsCompleted">
                        Proyectos Completados
                      </Label>
                      <Input
                        id="projectsCompleted"
                        name="projectsCompleted"
                        type="number"
                        value={formData.projectsCompleted}
                        onChange={handleChange}
                        min="0"
                        placeholder="ej: 20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="technologiesMastered">
                        Tecnologías Dominadas
                      </Label>
                      <Input
                        id="technologiesMastered"
                        name="technologiesMastered"
                        type="number"
                        value={formData.technologiesMastered}
                        onChange={handleChange}
                        min="0"
                        placeholder="ej: 15"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Formato de Visualización
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="experienceFormat">
                        Formato Experiencia
                      </Label>
                      <Input
                        id="experienceFormat"
                        name="experienceFormat"
                        value={formData.experienceFormat}
                        onChange={handleChange}
                        placeholder="ej: 8+ o auto"
                      />
                      <p className="text-xs text-muted-foreground">
                        Cómo se muestra en la web (ej: "8+", "8 años", "auto")
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectsFormat">Formato Proyectos</Label>
                      <Input
                        id="projectsFormat"
                        name="projectsFormat"
                        value={formData.projectsFormat}
                        onChange={handleChange}
                        placeholder="ej: 20+ o auto"
                      />
                      <p className="text-xs text-muted-foreground">
                        Cómo se muestra en la web (ej: "20+", "20 proyectos",
                        "auto")
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="technologiesFormat">
                        Formato Tecnologías
                      </Label>
                      <Input
                        id="technologiesFormat"
                        name="technologiesFormat"
                        value={formData.technologiesFormat}
                        onChange={handleChange}
                        placeholder="ej: auto o número"
                      />
                      <p className="text-xs text-muted-foreground">
                        "auto" para calcular automáticamente o un número
                        específico
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={saving}
                  className="flex-1 gap-2"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Creando configuración...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Crear Configuración
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

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary text-2xl">
            ⚙️ Configuración del Proyecto
          </CardTitle>
          <CardDescription>
            Actualiza las estadísticas y configuración global
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="bg-green-50 text-green-800 border-green-200">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Configuración guardada exitosamente
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Estadísticas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="yearsOfExperience">
                      Años de Experiencia
                    </Label>
                    <Input
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      type="number"
                      value={formData.yearsOfExperience}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectsCompleted">
                      Proyectos Completados
                    </Label>
                    <Input
                      id="projectsCompleted"
                      name="projectsCompleted"
                      type="number"
                      value={formData.projectsCompleted}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="technologiesMastered">
                      Tecnologías Dominadas
                    </Label>
                    <Input
                      id="technologiesMastered"
                      name="technologiesMastered"
                      type="number"
                      value={formData.technologiesMastered}
                      onChange={handleChange}
                      min="0"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Formato de Visualización
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experienceFormat">
                      Formato Experiencia
                    </Label>
                    <Input
                      id="experienceFormat"
                      name="experienceFormat"
                      value={formData.experienceFormat}
                      onChange={handleChange}
                      placeholder="ej: 8+ o auto"
                    />
                    <p className="text-xs text-muted-foreground">
                      Cómo se muestra en la web (ej: "8+", "8 años", "auto")
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectsFormat">Formato Proyectos</Label>
                    <Input
                      id="projectsFormat"
                      name="projectsFormat"
                      value={formData.projectsFormat}
                      onChange={handleChange}
                      placeholder="ej: 20+ o auto"
                    />
                    <p className="text-xs text-muted-foreground">
                      Cómo se muestra en la web (ej: "20+", "20 proyectos",
                      "auto")
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="technologiesFormat">
                      Formato Tecnologías
                    </Label>
                    <Input
                      id="technologiesFormat"
                      name="technologiesFormat"
                      value={formData.technologiesFormat}
                      onChange={handleChange}
                      placeholder="ej: auto o número"
                    />
                    <p className="text-xs text-muted-foreground">
                      "auto" para calcular automáticamente o un número
                      específico
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={saving} className="flex-1 gap-2">
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Guardando...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Guardar Configuración
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
