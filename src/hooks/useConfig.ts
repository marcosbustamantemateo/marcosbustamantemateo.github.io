/**
 * 🔥 Hook personalizado para cargar configuración desde Firebase
 *
 * Este hook gestiona la carga, caché y actualización de toda la configuración
 * dinámica de la aplicación desde Firestore.
 *
 * Características:
 * - Carga única al inicio
 * - Caché en memoria para evitar lecturas innecesarias
 * - Manejo de errores robusto
 * - Valores por defecto si Firebase no está disponible
 * - Actualización reactiva cuando cambia la configuración
 */

import { useState, useEffect, useCallback } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/config/firebase";
import { AppConfig } from "@/types/config";

// Configuración por defecto (fallback si Firebase no está disponible)
const DEFAULT_CONFIG: AppConfig = {
  projectTypes: [
    {
      id: "web",
      label: { es: "Web", en: "Web" },
      icon: "Globe",
    },
    {
      id: "mobile",
      label: { es: "Móvil", en: "Mobile" },
      icon: "Smartphone",
    },
    {
      id: "desktop",
      label: { es: "Escritorio", en: "Desktop" },
      icon: "Monitor",
    },
  ],
  languages: [
    {
      id: "es",
      code: "es",
      label: { es: "Español", en: "Spanish" },
    },
    {
      id: "en",
      code: "en",
      label: { es: "Inglés", en: "English" },
    },
  ],
  contactTypes: [
    {
      id: "email",
      label: { es: "Email", en: "Email" },
      icon: "Mail",
      url: "mailto:marcosbustamante.mateo@gmail.com",
    },
    {
      id: "linkedin",
      label: { es: "LinkedIn", en: "LinkedIn" },
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/marcosbustamantemateo/",
    },
    {
      id: "github",
      label: { es: "GitHub", en: "GitHub" },
      icon: "Github",
      url: "https://github.com/marcosbustamantemateo",
    },
  ],
  shareChannels: [
    {
      id: "whatsapp",
      label: { es: "WhatsApp", en: "WhatsApp" },
      icon: "MessageCircle",
      baseUrl: "https://wa.me/?text=",
    },
    {
      id: "telegram",
      label: { es: "Telegram", en: "Telegram" },
      icon: "Send",
      baseUrl: "https://t.me/share/url?url=",
    },
    {
      id: "linkedin",
      label: { es: "LinkedIn", en: "LinkedIn" },
      icon: "Linkedin",
      baseUrl: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    {
      id: "x",
      label: { es: "X (Twitter)", en: "X (Twitter)" },
      icon: "Twitter",
      baseUrl: "https://twitter.com/intent/tweet?url=",
    },
  ],
  heroStats: {
    yearsOfExperience: 8,
    projectsCompleted: 20,
    technologiesMastered: 50,
    displayFormat: {
      experience: "8+",
      projects: "20+",
      technologies: "auto",
    },
  },
  testimonials: [],
  technologyCategories: [],
  lastUpdated: new Date(),
  version: "1.0.0",
};

interface UseConfigReturn {
  config: AppConfig;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

// Caché global para evitar múltiples llamadas
let cachedConfig: AppConfig | null = null;
let configPromise: Promise<AppConfig> | null = null;

/**
 * Hook para acceder a la configuración global de la aplicación
 */
export const useConfig = (options?: {
  realtime?: boolean;
}): UseConfigReturn => {
  const [config, setConfig] = useState<AppConfig>(
    cachedConfig || DEFAULT_CONFIG
  );
  const [loading, setLoading] = useState<boolean>(!cachedConfig);
  const [error, setError] = useState<Error | null>(null);

  const fetchConfig = useCallback(async (): Promise<AppConfig> => {
    try {
      // Si ya hay una promesa en curso, esperar a que termine
      if (configPromise) {
        return await configPromise;
      }

      // Si ya hay caché, devolverlo
      if (cachedConfig) {
        return cachedConfig;
      }

      // Crear nueva promesa de carga
      configPromise = (async () => {
        const configRef = doc(db, "config", "projectSettings");
        const configSnap = await getDoc(configRef);

        if (configSnap.exists()) {
          const data = configSnap.data() as AppConfig;

          // Convertir fecha si viene como Timestamp de Firestore
          if (data.lastUpdated && typeof data.lastUpdated === "object") {
            data.lastUpdated = (data.lastUpdated as any).toDate();
          }

          cachedConfig = data;
          return data;
        } else {
          console.warn("⚠️ Config document not found, using defaults");
          cachedConfig = DEFAULT_CONFIG;
          return DEFAULT_CONFIG;
        }
      })();

      const result = await configPromise;
      configPromise = null;
      return result;
    } catch (err) {
      console.error("❌ Error loading config:", err);
      configPromise = null;
      throw err instanceof Error
        ? err
        : new Error("Unknown error loading config");
    }
  }, []);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    // Limpiar caché para forzar recarga
    cachedConfig = null;
    configPromise = null;

    try {
      const newConfig = await fetchConfig();
      setConfig(newConfig);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
      setConfig(DEFAULT_CONFIG);
    } finally {
      setLoading(false);
    }
  }, [fetchConfig]);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const initConfig = async () => {
      setLoading(true);
      setError(null);

      try {
        const loadedConfig = await fetchConfig();
        setConfig(loadedConfig);

        // Si se solicita modo realtime, suscribirse a cambios
        if (options?.realtime) {
          const configRef = doc(db, "config", "projectSettings");
          unsubscribe = onSnapshot(
            configRef,
            (snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.data() as AppConfig;

                // Convertir fecha si viene como Timestamp de Firestore
                if (data.lastUpdated && typeof data.lastUpdated === "object") {
                  data.lastUpdated = (data.lastUpdated as any).toDate();
                }

                cachedConfig = data;
                setConfig(data);
                console.log("🔄 Config updated in realtime");
              }
            },
            (err) => {
              console.error("❌ Error in realtime config:", err);
              setError(
                err instanceof Error ? err : new Error("Realtime error")
              );
            }
          );
        }
      } catch (err) {
        console.error("❌ Error initializing config:", err);
        setError(err instanceof Error ? err : new Error("Unknown error"));
        setConfig(DEFAULT_CONFIG);
      } finally {
        setLoading(false);
      }
    };

    initConfig();

    // Cleanup
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [fetchConfig, options?.realtime]);

  return { config, loading, error, refetch };
};

/**
 * Hook para obtener solo una parte específica de la configuración
 */
export const useConfigSection = <K extends keyof AppConfig>(
  section: K
): {
  data: AppConfig[K];
  loading: boolean;
  error: Error | null;
} => {
  const { config, loading, error } = useConfig();

  return {
    data: config[section],
    loading,
    error,
  };
};
