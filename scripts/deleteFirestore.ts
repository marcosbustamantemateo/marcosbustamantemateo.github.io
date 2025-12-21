/**
 * 🗑️ Script para eliminar todas las colecciones de Firebase
 *
 * Este script elimina todas las colecciones y documentos de Firestore
 * para permitir una recarga limpia de datos.
 *
 * Uso: npx tsx scripts/deleteFirestore.ts
 */

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, "../.env.local") });

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Colecciones a eliminar
const collections = [
  "aboutMe",
  "workExperience",
  "education",
  "programmingLanguages",
  "testimonials",
  "technologyCategories",
  "config",
];

async function deleteCollection(collectionName: string) {
  console.log(`\n🗑️  Eliminando colección: ${collectionName}`);

  try {
    const querySnapshot = await getDocs(collection(db, collectionName));

    if (querySnapshot.empty) {
      console.log(`   ℹ️  Colección vacía o no existe`);
      return;
    }

    let deletedCount = 0;
    for (const document of querySnapshot.docs) {
      await deleteDoc(doc(db, collectionName, document.id));
      deletedCount++;
      console.log(`   ✅ Eliminado: ${document.id}`);
    }

    console.log(`   ✨ Total eliminados: ${deletedCount} documentos`);
  } catch (error) {
    console.error(`   ❌ Error eliminando ${collectionName}:`, error);
  }
}

async function main() {
  console.log("🚀 Iniciando eliminación de datos de Firestore...\n");
  console.log(
    "⚠️  ADVERTENCIA: Esto eliminará TODOS los datos de las colecciones"
  );
  console.log("📋 Colecciones a eliminar:", collections.join(", "));

  for (const collectionName of collections) {
    await deleteCollection(collectionName);
  }

  console.log("\n✅ Proceso de eliminación completado");
  console.log("💡 Ahora puedes ejecutar: npm run init-firebase");
  process.exit(0);
}

main().catch((error) => {
  console.error("❌ Error fatal:", error);
  process.exit(1);
});
