/**
 * 🚀 Script de inicialización de Firebase - USA JSON FILES
 */

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, "../.env.local") });

// Importar datos desde JSON
const workExperienceJSON = JSON.parse(
  readFileSync(resolve(__dirname, "../src/data/workExperience.json"), "utf-8")
);
const educationJSON = JSON.parse(
  readFileSync(resolve(__dirname, "../src/data/education.json"), "utf-8")
);
const testimonialsJSON = JSON.parse(
  readFileSync(resolve(__dirname, "../src/data/testimonials.json"), "utf-8")
);
const testimonials = Array.isArray(testimonialsJSON)
  ? testimonialsJSON
  : testimonialsJSON.value || [];
const technologyCategoriesJSON = JSON.parse(
  readFileSync(
    resolve(__dirname, "../src/data/technologyCategories.json"),
    "utf-8"
  )
);
const aboutMeJSON = JSON.parse(
  readFileSync(resolve(__dirname, "../src/data/aboutMe.json"), "utf-8")
);
const languagesJSON = JSON.parse(
  readFileSync(resolve(__dirname, "../src/data/languages.json"), "utf-8")
);
const languages = Array.isArray(languagesJSON)
  ? languagesJSON
  : languagesJSON.value || [];

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function initializeFirebase() {
  try {
    console.log("🚀 Iniciando carga de datos a Firebase...\n");

    const config = {
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
    };

    console.log("⚙️  Subiendo config/projectSettings...");
    await setDoc(doc(db, "config", "projectSettings"), config);
    console.log("✅ config/projectSettings cargado\n");

    console.log("👤 Subiendo aboutMe/profile...");
    await setDoc(doc(db, "aboutMe", "profile"), aboutMeJSON);
    console.log("✅ aboutMe/profile cargado\n");

    console.log("💼 Subiendo workExperience...");
    for (const exp of workExperienceJSON) {
      const docId = `exp${exp.id}`;
      await setDoc(doc(db, "workExperience", docId), exp);
      console.log(`  ✅ ${docId} - ${exp.company}`);
    }
    console.log("✅ workExperience completo\n");

    console.log("🎓 Subiendo education...");
    for (const edu of educationJSON) {
      const docId = `edu${edu.id}`;
      await setDoc(doc(db, "education", docId), edu);
      console.log(`  ✅ ${docId} - ${edu.institution}`);
    }
    console.log("✅ education completo\n");

    console.log("💻 Subiendo programmingLanguages...");
    for (const lang of languages) {
      await setDoc(doc(db, "programmingLanguages", lang.id), lang);
      console.log(`  ✅ ${lang.id} - ${lang.name}`);
    }
    console.log("✅ programmingLanguages completo\n");

    console.log("💬 Subiendo testimonials...");
    for (const test of testimonials) {
      await setDoc(doc(db, "testimonials", test.id), test);
      console.log(`  ✅ ${test.id} - ${test.author}`);
    }
    console.log("✅ testimonials completo\n");

    console.log("🔧 Subiendo technologyCategories...");
    for (const category of technologyCategoriesJSON) {
      await setDoc(doc(db, "technologyCategories", category.id), category);
      console.log(`  ✅ ${category.id} - ${category.label.es}`);
    }
    console.log("✅ technologyCategories completo\n");

    console.log("🎉 ¡Todos los datos se han subido exitosamente a Firebase!\n");
    console.log("📊 Resumen:");
    console.log(`  - config/projectSettings: 1 documento`);
    console.log(`  - aboutMe: 1 documento`);
    console.log(`  - workExperience: ${workExperienceJSON.length} documentos`);
    console.log(`  - education: ${educationJSON.length} documentos`);
    console.log(`  - programmingLanguages: ${languages.length} documentos`);
    console.log(`  - testimonials: ${testimonials.length} documentos`);
    console.log(
      `  - technologyCategories: ${technologyCategoriesJSON.length} documentos`
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Error al cargar datos:", error);
    process.exit(1);
  }
}

initializeFirebase();
