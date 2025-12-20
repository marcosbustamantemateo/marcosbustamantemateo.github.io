# 📝 Ejemplos de Uso - Firebase Analytics

## 🎯 Eventos Implementados

### 1. project_click

**Ubicación:** [src/components/ProjectsSection.tsx](src/components/ProjectsSection.tsx#L215-L221)

```tsx
import { trackProjectClick } from "@/analytics/events";

// En el botón "Ver proyecto":
<a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    // 🔥 Track project click event
    trackProjectClick(
      project.id,        // "royal-chicken-bbq"
      project.type,      // "web" | "mobile" | "desktop"
      language          // "es" | "en"
    );
  }}
>
  {t.viewProject}
</a>
```

**Parámetros enviados a GA4:**
```json
{
  "project_id": "royal-chicken-bbq",
  "project_type": "web",
  "language": "es"
}
```

---

### 2. language_click

**Ubicación:** [src/components/Header.tsx](src/components/Header.tsx#L165-L175)

```tsx
import { trackLanguageClick } from "@/analytics/events";

// En el selector de idioma:
<DropdownMenuItem
  onClick={() => {
    onLanguageChange("es");
    // 🔥 Track language change event
    trackLanguageClick("es");
  }}
>
  🇪🇸 Español
</DropdownMenuItem>

<DropdownMenuItem
  onClick={() => {
    onLanguageChange("en");
    // 🔥 Track language change event
    trackLanguageClick("en");
  }}
>
  🇬🇧 English
</DropdownMenuItem>
```

**Parámetros enviados a GA4:**
```json
{
  "language": "en"
}
```

---

### 3. contact_click

**Ubicación:** [src/components/ContactSection.tsx](src/components/ContactSection.tsx#L117-L165)

```tsx
import { trackContactClick } from "@/analytics/events";

// Email
<a
  href="mailto:marcosbustamantemateo@gmail.com"
  onClick={() => {
    // 🔥 Track contact click event
    trackContactClick("email", language);
  }}
>
  <Mail className="w-8 h-8" />
</a>

// LinkedIn
<a
  href="https://www.linkedin.com/in/marcos-bustamante/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    // 🔥 Track contact click event
    trackContactClick("linkedin", language);
  }}
>
  <Linkedin className="w-8 h-8" />
</a>

// GitHub
<a
  href="https://github.com/marcosbustamante"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    // 🔥 Track contact click event
    trackContactClick("github", language);
  }}
>
  <Github className="w-8 h-8" />
</a>

// CTA Button
<Button
  onClick={() => {
    // 🔥 Track contact click event for CTA button
    trackContactClick("email", language);
    window.location.href = "mailto:marcosbustamantemateo@gmail.com";
  }}
>
  {t.cta}
</Button>
```

**Parámetros enviados a GA4:**
```json
{
  "contact_type": "linkedin",
  "language": "es"
}
```

---

### 4. share_click

**Ubicación:** [src/components/Header.tsx](src/components/Header.tsx#L60-L73)

```tsx
import { trackShareClick } from "@/analytics/events";

const handleShare = (platform: string) => {
  const url = "https://www.marcosbustamantemateo.com";
  const shareMessage = t.shareMessage;

  const shareUrls = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareMessage)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareMessage)}`,
    linkedin: `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(shareMessage)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(url)}`,
  };

  // 🔥 Track share click event
  trackShareClick(
    platform === "twitter" ? "x" : (platform as "whatsapp" | "telegram" | "linkedin"),
    language
  );

  if (shareUrls[platform as keyof typeof shareUrls]) {
    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank");
  }
};

// En el dropdown:
<DropdownMenuItem onClick={() => handleShare("whatsapp")}>
  <MessageCircle className="w-4 h-4 mr-2" />
  WhatsApp
</DropdownMenuItem>

<DropdownMenuItem onClick={() => handleShare("telegram")}>
  <Send className="w-4 h-4 mr-2" />
  Telegram
</DropdownMenuItem>

<DropdownMenuItem onClick={() => handleShare("linkedin")}>
  <Linkedin className="w-4 h-4 mr-2" />
  LinkedIn
</DropdownMenuItem>

<DropdownMenuItem onClick={() => handleShare("twitter")}>
  <Twitter className="w-4 h-4 mr-2" />
  X (Twitter)
</DropdownMenuItem>
```

**Parámetros enviados a GA4:**
```json
{
  "share_channel": "whatsapp",
  "language": "es"
}
```

---

## 🔧 Módulo Centralizado

**Archivo:** [src/analytics/events.ts](src/analytics/events.ts)

```typescript
import { logEvent } from "firebase/analytics";
import { analytics } from "@/config/firebase";

export type ProjectType = "web" | "mobile" | "desktop";
export type Language = "es" | "en";
export type ContactType = "email" | "linkedin" | "github";
export type ShareChannel = "whatsapp" | "telegram" | "linkedin" | "x";

// 1️⃣ Track Project Click
export const trackProjectClick = (
  projectId: string,
  projectType: ProjectType,
  language: Language
) => {
  if (!analytics) {
    console.warn("Firebase Analytics not initialized. Event not tracked.");
    return;
  }

  try {
    logEvent(analytics, "project_click", {
      project_id: projectId,
      project_type: projectType,
      language: language,
    });

    if (import.meta.env.DEV) {
      console.log("📊 Analytics: project_click", {
        project_id: projectId,
        project_type: projectType,
        language: language,
      });
    }
  } catch (error) {
    console.error("Error tracking project_click:", error);
  }
};

// 2️⃣ Track Language Click
export const trackLanguageClick = (language: Language) => {
  if (!analytics) return;

  try {
    logEvent(analytics, "language_click", {
      language: language,
    });

    if (import.meta.env.DEV) {
      console.log("📊 Analytics: language_click", { language });
    }
  } catch (error) {
    console.error("Error tracking language_click:", error);
  }
};

// 3️⃣ Track Contact Click
export const trackContactClick = (
  contactType: ContactType,
  language: Language
) => {
  if (!analytics) return;

  try {
    logEvent(analytics, "contact_click", {
      contact_type: contactType,
      language: language,
    });

    if (import.meta.env.DEV) {
      console.log("📊 Analytics: contact_click", {
        contact_type: contactType,
        language,
      });
    }
  } catch (error) {
    console.error("Error tracking contact_click:", error);
  }
};

// 4️⃣ Track Share Click
export const trackShareClick = (
  shareChannel: ShareChannel,
  language: Language
) => {
  if (!analytics) return;

  try {
    logEvent(analytics, "share_click", {
      share_channel: shareChannel,
      language: language,
    });

    if (import.meta.env.DEV) {
      console.log("📊 Analytics: share_click", {
        share_channel: shareChannel,
        language,
      });
    }
  } catch (error) {
    console.error("Error tracking share_click:", error);
  }
};
```

---

## 🔥 Configuración Firebase

**Archivo:** [src/config/firebase.ts](src/config/firebase.ts)

```typescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Analytics (only in browser environment)
let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };
```

---

## 🧪 Testing en Consola del Navegador

### Ver eventos en tiempo real:

```javascript
// 1. Activa debug mode
localStorage.setItem('debug_mode', 'true');

// 2. Recarga la página
location.reload();

// 3. Simula un click en proyecto (ejecuta en la consola):
import { trackProjectClick } from "./src/analytics/events";
trackProjectClick("test-project", "web", "es");

// 4. Verás en la consola:
// 📊 Analytics: project_click { project_id: "test-project", project_type: "web", language: "es" }
```

### Desactivar debug mode:

```javascript
localStorage.removeItem('debug_mode');
location.reload();
```

---

## 📊 Queries BigQuery (Avanzado)

Si conectas Firebase Analytics con BigQuery, puedes hacer queries SQL:

### Top 10 proyectos más clickeados:

```sql
SELECT
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'project_id') AS project_id,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'project_type') AS project_type,
  COUNT(*) AS clicks
FROM `tu-proyecto.analytics_123456789.events_*`
WHERE event_name = 'project_click'
  AND _TABLE_SUFFIX BETWEEN '20250101' AND '20250131'
GROUP BY project_id, project_type
ORDER BY clicks DESC
LIMIT 10;
```

### Idioma más usado:

```sql
SELECT
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'language') AS language,
  COUNT(*) AS total_events
FROM `tu-proyecto.analytics_123456789.events_*`
WHERE _TABLE_SUFFIX BETWEEN '20250101' AND '20250131'
GROUP BY language
ORDER BY total_events DESC;
```

### Canal de contacto más efectivo:

```sql
SELECT
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'contact_type') AS contact_type,
  COUNT(*) AS clicks
FROM `tu-proyecto.analytics_123456789.events_*`
WHERE event_name = 'contact_click'
  AND _TABLE_SUFFIX BETWEEN '20250101' AND '20250131'
GROUP BY contact_type
ORDER BY clicks DESC;
```

---

## 🎯 Próximos Pasos

1. ✅ Eventos implementados y funcionando
2. ⏳ Espera 24-48 horas para ver métricas en Firebase Console
3. 🔥 Activa DebugView para testing inmediato
4. 📊 Marca eventos como conversiones en Firebase
5. 🚀 Conecta con BigQuery para análisis avanzado (opcional)

---

## 📚 Documentación Relacionada

- [ANALYTICS_GUIDE.md](ANALYTICS_GUIDE.md) - Guía completa
- [QUICK_START_ANALYTICS.md](QUICK_START_ANALYTICS.md) - Guía rápida
- [Firebase Analytics Docs](https://firebase.google.com/docs/analytics)

🔥 **¡Listo para analizar!**
