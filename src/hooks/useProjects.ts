import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/config/firebase";

export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  description: {
    es: string;
    en: string;
  };
  imageUrl: string;
  type: "web" | "mobile" | "desktop";
  technologies: string[];
  link: string;
  comingSoon: boolean;
  order?: number;
  createdAt?: any;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const q = query(collection(db, "projects"), orderBy("order", "asc"));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const projectsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Project[];

          setProjects(projectsData);
          setLoading(false);
        },
        (err) => {
          console.error("Error fetching projects:", err);
          setError(err.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err: any) {
      console.error("Error setting up listener:", err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  return { projects, loading, error };
};
