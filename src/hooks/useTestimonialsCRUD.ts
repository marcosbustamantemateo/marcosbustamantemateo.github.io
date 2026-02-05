import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/config/firebase";

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  imageUrl?: string;
  content: {
    es: string;
    en: string;
  };
  linkedin?: string;
  order?: number;
}

export const useTestimonialsCRUD = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const q = query(collection(db, "testimonials"), orderBy("order", "asc"));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Testimonial[];

          setTestimonials(data);
          setLoading(false);
        },
        (err) => {
          console.error("Error fetching testimonials:", err);
          setError(err.message);
          setLoading(false);
        },
      );

      return () => unsubscribe();
    } catch (err: unknown) {
      console.error("Error setting up listener:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
      setLoading(false);
    }
  }, []);

  return { testimonials, loading, error };
};
