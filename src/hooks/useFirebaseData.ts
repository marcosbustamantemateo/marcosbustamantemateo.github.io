/**
 * 🔥 Hooks para cargar datos de colecciones específicas de Firebase
 * 
 * Cada hook maneja una colección diferente con su respectivo fallback JSON.
 */

import { useState, useEffect } from "react";
import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/config/firebase";
import type {
  AboutMe,
  WorkExperience,
  Education,
  ProgrammingLanguage,
  TestimonialConfig,
  TechnologyCategoryConfig,
} from "@/types/config";

// Imports de fallback JSON
import aboutMeJson from "@/data/aboutMe.json";
import workExperienceJson from "@/data/workExperience.json";
import educationJson from "@/data/education.json";
import programmingLanguagesJson from "@/data/languages.json";
import testimonialsJson from "@/data/testimonials.json";
import technologyCategoriesJson from "@/data/technologyCategories.json";

// Cache
interface CacheData {
  aboutMe?: { data: AboutMe; timestamp: number };
  workExperience?: { data: WorkExperience[]; timestamp: number };
  education?: { data: Education[]; timestamp: number };
  programmingLanguages?: { data: ProgrammingLanguage[]; timestamp: number };
  testimonials?: { data: TestimonialConfig[]; timestamp: number };
  technologyCategories?: { data: TechnologyCategoryConfig[]; timestamp: number };
}

const cache: CacheData = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

interface UseDataReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

// ============================================
// ABOUT ME
// ============================================

export const useAboutMe = (): UseDataReturn<AboutMe> => {
  const [data, setData] = useState<AboutMe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verificar cache
        if (cache.aboutMe && Date.now() - cache.aboutMe.timestamp < CACHE_DURATION) {
          setData(cache.aboutMe.data);
          setLoading(false);
          return;
        }

        const docRef = doc(db, "aboutMe", "profile");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const aboutMeData = docSnap.data() as AboutMe;
          cache.aboutMe = { data: aboutMeData, timestamp: Date.now() };
          setData(aboutMeData);
        } else {
          console.warn("⚠️ aboutMe not found in Firebase, using fallback");
          setData(aboutMeJson as AboutMe);
        }
      } catch (err) {
        console.error("❌ Error loading aboutMe:", err);
        setError(err as Error);
        setData(aboutMeJson as AboutMe);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// ============================================
// WORK EXPERIENCE
// ============================================

export const useWorkExperience = (): UseDataReturn<WorkExperience[]> => {
  const [data, setData] = useState<WorkExperience[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verificar cache
        if (cache.workExperience && Date.now() - cache.workExperience.timestamp < CACHE_DURATION) {
          setData(cache.workExperience.data);
          setLoading(false);
          return;
        }

        const collectionRef = collection(db, "workExperience");
        const q = query(collectionRef, orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const experiences = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as WorkExperience[];
          cache.workExperience = { data: experiences, timestamp: Date.now() };
          setData(experiences);
        } else {
          console.warn("⚠️ workExperience not found in Firebase, using fallback");
          setData(workExperienceJson as WorkExperience[]);
        }
      } catch (err) {
        console.error("❌ Error loading workExperience:", err);
        setError(err as Error);
        setData(workExperienceJson as WorkExperience[]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// ============================================
// EDUCATION
// ============================================

export const useEducation = (): UseDataReturn<Education[]> => {
  const [data, setData] = useState<Education[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verificar cache
        if (cache.education && Date.now() - cache.education.timestamp < CACHE_DURATION) {
          setData(cache.education.data);
          setLoading(false);
          return;
        }

        const collectionRef = collection(db, "education");
        const q = query(collectionRef, orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const educationData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Education[];
          cache.education = { data: educationData, timestamp: Date.now() };
          setData(educationData);
        } else {
          console.warn("⚠️ education not found in Firebase, using fallback");
          setData(educationJson as Education[]);
        }
      } catch (err) {
        console.error("❌ Error loading education:", err);
        setError(err as Error);
        setData(educationJson as Education[]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// ============================================
// PROGRAMMING LANGUAGES
// ============================================

export const useProgrammingLanguages = (): UseDataReturn<ProgrammingLanguage[]> => {
  const [data, setData] = useState<ProgrammingLanguage[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verificar cache
        if (cache.programmingLanguages && Date.now() - cache.programmingLanguages.timestamp < CACHE_DURATION) {
          setData(cache.programmingLanguages.data);
          setLoading(false);
          return;
        }

        const collectionRef = collection(db, "programmingLanguages");
        const q = query(collectionRef, orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const languages = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as ProgrammingLanguage[];
          cache.programmingLanguages = { data: languages, timestamp: Date.now() };
          setData(languages);
        } else {
          console.warn("⚠️ programmingLanguages not found in Firebase, using fallback");
          setData(programmingLanguagesJson as ProgrammingLanguage[]);
        }
      } catch (err) {
        console.error("❌ Error loading programmingLanguages:", err);
        setError(err as Error);
        setData(programmingLanguagesJson as ProgrammingLanguage[]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// ============================================
// TESTIMONIALS
// ============================================

export const useTestimonials = (): UseDataReturn<TestimonialConfig[]> => {
  const [data, setData] = useState<TestimonialConfig[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verificar cache
        if (cache.testimonials && Date.now() - cache.testimonials.timestamp < CACHE_DURATION) {
          setData(cache.testimonials.data);
          setLoading(false);
          return;
        }

        const collectionRef = collection(db, "testimonials");
        const q = query(collectionRef, orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const testimonials = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as TestimonialConfig[];
          cache.testimonials = { data: testimonials, timestamp: Date.now() };
          setData(testimonials);
        } else {
          console.warn("⚠️ testimonials not found in Firebase, using fallback");
          setData(testimonialsJson as TestimonialConfig[]);
        }
      } catch (err) {
        console.error("❌ Error loading testimonials:", err);
        setError(err as Error);
        setData(testimonialsJson as TestimonialConfig[]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// ============================================
// TECHNOLOGY CATEGORIES
// ============================================

export const useTechnologyCategories = (): UseDataReturn<TechnologyCategoryConfig[]> => {
  const [data, setData] = useState<TechnologyCategoryConfig[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verificar cache
        if (cache.technologyCategories && Date.now() - cache.technologyCategories.timestamp < CACHE_DURATION) {
          setData(cache.technologyCategories.data);
          setLoading(false);
          return;
        }

        const collectionRef = collection(db, "technologyCategories");
        const q = query(collectionRef, orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const categories = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as TechnologyCategoryConfig[];
          cache.technologyCategories = { data: categories, timestamp: Date.now() };
          setData(categories);
        } else {
          console.warn("⚠️ technologyCategories not found in Firebase, using fallback");
          setData(technologyCategoriesJson as TechnologyCategoryConfig[]);
        }
      } catch (err) {
        console.error("❌ Error loading technologyCategories:", err);
        setError(err as Error);
        setData(technologyCategoriesJson as TechnologyCategoryConfig[]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// ============================================
// EXPORT ALL
// ============================================

export default {
  useAboutMe,
  useWorkExperience,
  useEducation,
  useProgrammingLanguages,
  useTestimonials,
  useTechnologyCategories,
};
