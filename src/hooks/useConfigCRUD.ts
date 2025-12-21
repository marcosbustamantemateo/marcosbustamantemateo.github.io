import { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/config/firebase";

export interface HeroStats {
  yearsOfExperience: number;
  projectsCompleted: number;
  technologiesMastered: number;
  displayFormat: {
    experience: string;
    projects: string;
    technologies: string;
  };
}

export interface ProjectSettings {
  heroStats: HeroStats;
}

export const useConfigCRUD = () => {
  const [config, setConfig] = useState<ProjectSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const docRef = doc(db, "config", "projectSettings");

      const unsubscribe = onSnapshot(
        docRef,
        (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data() as ProjectSettings;
            setConfig(data);
          } else {
            // If document doesn't exist, show null to indicate it needs to be created
            console.info("Config document not found in Firebase");
            setConfig(null);
          }
          setLoading(false);
        },
        (err) => {
          console.error("Error fetching config:", err);
          setError(err.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err: unknown) {
      console.error("Error setting up listener:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
      setLoading(false);
    }
  }, []);

  const updateConfig = async (updatedConfig: ProjectSettings) => {
    try {
      await setDoc(doc(db, "config", "projectSettings"), updatedConfig, {
        merge: true,
      });
      return true;
    } catch (err: unknown) {
      console.error("Error updating config:", err);
      throw err;
    }
  };

  return { config, loading, error, updateConfig };
};
