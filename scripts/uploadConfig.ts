/**
 * 🚀 Script de inicialización de Firebase - Versión Simple
 * 
 * Este script puebla Firestore con la configuración desde firebase-config-example.json
 * 
 * Uso:
 * npx tsx scripts/uploadConfig.ts
 */

import { db } from "../src/config/firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import configData from "../firebase-config-example.json";

async function uploadConfig() {
  try {
    console.log("🚀 Iniciando carga de configuración a Firebase...");
    
    // Convertir el lastUpdated a Timestamp
    const configWithTimestamp = {
      ...configData,
      lastUpdated: Timestamp.now(),
    };

    const configRef = doc(db, "config", "projectSettings");
    await setDoc(configRef, configWithTimestamp);

    console.log("✅ ¡Configuración cargada exitosamente en Firebase!");
    console.log("📍 Documento: config/projectSettings");
    console.log("📊 Estadísticas:");
    console.log(`   - ${configData.projectTypes.length} tipos de proyecto`);
    console.log(`   - ${configData.languages.length} idiomas`);
    console.log(`   - ${configData.contactTypes.length} tipos de contacto`);
    console.log(`   - ${configData.shareChannels.length} canales para compartir`);
    console.log(`   - ${configData.testimonials.length} testimonios`);
    console.log(`   - ${configData.technologyCategories.length} categorías de tecnologías`);
    
    const totalTechs = configData.technologyCategories.reduce(
      (sum, cat) => sum + cat.technologies.length,
      0
    );
    console.log(`   - ${totalTechs} tecnologías en total`);
    
    console.log("\n🎉 ¡Migración completada! Ahora puedes usar la configuración dinámica.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al cargar configuración:", error);
    console.error("\nVerifica:");
    console.error("1. Que Firebase esté configurado correctamente en src/config/firebase.ts");
    console.error("2. Que Firestore esté habilitado en Firebase Console");
    console.error("3. Que las reglas de Firestore permitan escritura");
    process.exit(1);
  }
}

// Ejecutar
uploadConfig();
