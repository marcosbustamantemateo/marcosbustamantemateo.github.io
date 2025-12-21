/**
 * 🚀 Script MANUAL de inicialización de Firebase
 *
 * INSTRUCCIONES:
 * 1. Edita las líneas 15-20 con tus credenciales de Firebase
 * 2. Ejecuta: npx tsx scripts/manualUpload.ts
 * 3. ¡Listo!
 */

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";
import { readFileSync } from "fs";
import { join, dirname, resolve } from "path";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno desde .env.local
dotenv.config({ path: resolve(__dirname, "../.env.local") });

// Configuración de Firebase desde variables de entorno
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

if (!firebaseConfig.projectId) {
  console.error("❌ Error: No se encontraron las credenciales de Firebase.");
  console.error(
    "Verifica que .env.local contenga las variables VITE_FIREBASE_*"
  );
  process.exit(1);
}

// Cargar el JSON de configuración
const configPath = join(process.cwd(), "firebase-config-example.json");
const configData = JSON.parse(readFileSync(configPath, "utf-8"));

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadConfig() {
  try {
    console.log("🚀 Iniciando carga de configuración a Firebase...");
    console.log(`📍 Proyecto: ${firebaseConfig.projectId}`);

    // Convertir el lastUpdated a Timestamp
    const configWithTimestamp = {
      ...configData,
      lastUpdated: Timestamp.now(),
    };

    const configRef = doc(db, "config", "projectSettings");
    await setDoc(configRef, configWithTimestamp);

    console.log("\n✅ ¡Configuración cargada exitosamente en Firebase!");
    console.log("📍 Documento: config/projectSettings");
    console.log("\n📊 Estadísticas:");
    console.log(`   - ${configData.projectTypes.length} tipos de proyecto`);
    console.log(`   - ${configData.languages.length} idiomas`);
    console.log(`   - ${configData.contactTypes.length} tipos de contacto`);
    console.log(
      `   - ${configData.shareChannels.length} canales para compartir`
    );
    console.log(`   - ${configData.testimonials.length} testimonios`);
    console.log(
      `   - ${configData.technologyCategories.length} categorías de tecnologías`
    );

    interface TechCategory {
      technologies: string[];
    }

    const totalTechs = configData.technologyCategories.reduce(
      (sum: number, cat: TechCategory) => sum + cat.technologies.length,
      0
    );
    console.log(`   - ${totalTechs} tecnologías en total`);

    console.log(
      "\n🎉 ¡Migración completada! Ahora puedes usar la configuración dinámica."
    );
    console.log("\n📝 Próximos pasos:");
    console.log("1. Ve a Firebase Console y verifica el documento");
    console.log("2. Inicia tu aplicación con: npm run dev");
    console.log(
      "3. Los componentes cargarán los datos desde Firebase automáticamente"
    );

    process.exit(0);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorCode =
      error && typeof error === "object" && "code" in error
        ? (error as { code: string }).code
        : "";

    console.error("\n❌ Error al cargar configuración:", errorMessage);
    console.error("\n🔍 Verifica:");
    console.error("1. Que Firestore esté habilitado en Firebase Console");
    console.error("2. Que las reglas de Firestore permitan escritura");
    console.error("3. Que las credenciales sean correctas");

    if (
      errorCode === "permission-denied" ||
      errorMessage.includes("permission")
    ) {
      console.error(
        "\n🔒 Error de permisos. Configura las reglas de Firestore:"
      );
      console.error("Ir a: Firebase Console → Firestore Database → Reglas");
      console.error("Agregar temporalmente:");
      console.error(`
match /config/{document} {
  allow read, write: if true;
}
      `);
    }

    process.exit(1);
  }
}

// Ejecutar
console.log("🔥 Script de inicialización de Firebase");
console.log("=".repeat(50));
uploadConfig();
