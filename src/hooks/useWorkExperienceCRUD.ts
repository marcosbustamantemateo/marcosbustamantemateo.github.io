import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/config/firebase";

export interface WorkExperience {
  id: string;
  company: string;
  position: {
    es: string;
    en: string;
  };
  period: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  technologies: string[];
  order?: number;
}

export const useWorkExperienceCRUD = () => {
  const [experiences, setExperiences] = useState<WorkExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const q = query(
        collection(db, "workExperience"),
        orderBy("order", "asc")
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as WorkExperience[];

          setExperiences(data);
          setLoading(false);
        },
        (err) => {
          console.error("Error fetching work experience:", err);
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

  return { experiences, loading, error };
};
