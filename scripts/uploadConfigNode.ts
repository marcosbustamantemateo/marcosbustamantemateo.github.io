/**
 * 🚀 Script de inicialización de Firebase para Node.js
 *
 * Este script puebla Firestore con la configuración desde firebase-config-example.json
 *
 * Uso:
 * npx tsx scripts/uploadConfigNode.ts
 */

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";
import { readFileSync } from "fs";
import { join } from "path";

// Cargar el JSON de configuración
const configPath = join(process.cwd(), "firebase-config-example.json");
const configData = JSON.parse(readFileSync(configPath, "utf-8"));

// Cargar credenciales de Firebase desde .env.local o variables de entorno
// O puedes ponerlas directamente aquí temporalmente
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

// Si no hay credenciales en las variables de entorno, pedirlas
if (!firebaseConfig.projectId) {
  console.error("❌ Error: Faltan las credenciales de Firebase.");
  console.error("\n🔧 Opciones:");
  console.error("1. Crea un archivo .env.local con tus credenciales");
  console.error("2. O edita este archivo y pon tus credenciales directamente");
  console.error("\nEjemplo de .env.local:");
  console.error("VITE_FIREBASE_API_KEY=tu-api-key");
  console.error("VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com");
  console.error("VITE_FIREBASE_PROJECT_ID=tu-proyecto-id");
  console.error("VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com");
  console.error("VITE_FIREBASE_MESSAGING_SENDER_ID=123456789");
  console.error("VITE_FIREBASE_APP_ID=1:123456789:web:abcdef");
  process.exit(1);
}

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

    const totalTechs = configData.technologyCategories.reduce(
      (sum: number, cat: any) => sum + cat.technologies.length,
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
  } catch (error: any) {
    console.error("\n❌ Error al cargar configuración:", error.message);
    console.error("\n🔍 Verifica:");
    console.error("1. Que Firestore esté habilitado en Firebase Console");
    console.error("2. Que las reglas de Firestore permitan escritura");
    console.error("3. Que las credenciales sean correctas");

    if (error.code === "permission-denied") {
      console.error(
        "\n🔒 Error de permisos. Configura las reglas de Firestore:"
      );
      console.error(`
match /config/{document} {
  allow read: if true;
  allow write: if true; // Temporalmente para el script
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
