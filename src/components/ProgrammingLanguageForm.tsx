import { useState, FormEvent } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { ProgrammingLanguage } from "@/hooks/useProgrammingLanguagesCRUD";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Save, Loader2, ArrowLeft } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ProgrammingLanguageFormProps {
  language?: ProgrammingLanguage | null;
  onCancel: () => void;
  onSuccess: () => void;
}

export default function ProgrammingLanguageForm({
  language,
  onCancel,
  onSuccess,
}: ProgrammingLanguageFormProps) {
  const [formData, setFormData] = useState({
    name: language?.name || "",
    level: language?.level || 0,
    order: language?.order || 0,
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const languageData = {
        name: formData.name,
        level: formData.level,
        order: formData.order,
        updatedAt: serverTimestamp(),
      };

      if (language?.id) {
        await setDoc(
          doc(db, "programmingLanguages", language.id),
          languageData,
          { merge: true }
        );
      } else {
        const nextId = `lang${Date.now()}`;
        await setDoc(doc(db, "programmingLanguages", nextId), {
          ...languageData,
          createdAt: serverTimestamp(),
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error saving language:", error);
      setError("Error al guardar. Intenta de nuevo.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onCancel}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <CardTitle>
              {language ? "Editar Lenguaje" : "Nuevo Lenguaje"}
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
              <Label htmlFor="name">Nombre *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                placeholder="Ej: JavaScript"
                className="text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="level">Nivel (0-100) *</Label>
              <Input
                id="level"
                type="number"
                min="0"
                max="100"
                value={formData.level}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    level: parseInt(e.target.value) || 0,
                  })
                }
                required
                placeholder="85"
                className="text-base"
              />
              <p className="text-xs text-muted-foreground">
                Porcentaje de dominio del lenguaje (0-100)
              </p>
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
                    {language ? "Actualizar" : "Crear"}
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
