# 📊 Firebase Analytics (GA4) - Implementación Completa

## 🎯 Objetivo

Sistema de analíticas profesional para el portfolio web, enfocado en KPIs reales de negocio sin backend, usando Firebase Analytics (GA4).

## 🔥 Eventos Implementados

### 1️⃣ `project_click` - Click en "Ver Proyecto"

**Cuándo se dispara:** Solo cuando el usuario hace click explícitamente en el botón "Ver proyecto" / "View Project".

**⚠️ NO se dispara en:**

- Renderizado de la card
- Hover sobre el proyecto
- Scroll hacia el proyecto

**Parámetros:**

```typescript
{
  project_id: string,      // ID único del proyecto
  project_type: string,    // "web" | "mobile" | "desktop"
  language: string         // "es" | "en"
}
```

**Ejemplo:**

```typescript
trackProjectClick("royal-chicken-bbq", "web", "es");
```

**Ubicación:** [src/components/ProjectsSection.tsx](src/components/ProjectsSection.tsx)

---

### 2️⃣ `language_click` - Cambio de Idioma

**Cuándo se dispara:** Cuando el usuario cambia manualmente el idioma del portfolio.

**Parámetros:**

```typescript
{
  language: string; // "es" | "en"
}
```

**Ejemplo:**

```typescript
trackLanguageClick("en");
```

**Ubicación:** [src/components/Header.tsx](src/components/Header.tsx)

---

### 3️⃣ `contact_click` - Click en Contacto

**Cuándo se dispara:** Cuando el usuario hace click en cualquier enlace de contacto (email, LinkedIn, GitHub).

**Parámetros:**

```typescript
{
  contact_type: string,  // "email" | "linkedin" | "github"
  language: string       // "es" | "en"
}
```

**Ejemplo:**

```typescript
trackContactClick("email", "es");
trackContactClick("linkedin", "en");
```

**Ubicación:** [src/components/ContactSection.tsx](src/components/ContactSection.tsx)

---

### 4️⃣ `share_click` - Click en Compartir

**Cuándo se dispara:** Cuando el usuario hace click en un botón de compartir en redes sociales.

**Parámetros:**

```typescript
{
  share_channel: string,  // "whatsapp" | "telegram" | "linkedin" | "x"
  language: string        // "es" | "en"
}
```

**Ejemplo:**

```typescript
trackShareClick("whatsapp", "es");
trackShareClick("linkedin", "en");
```

**Ubicación:** [src/components/Header.tsx](src/components/Header.tsx)

---

## 📁 Arquitectura

```
src/
├── analytics/
│   └── events.ts          # ✅ Módulo centralizado de eventos
├── config/
│   └── firebase.ts        # ✅ Configuración de Firebase + Analytics
└── components/
    ├── ProjectsSection.tsx   # ✅ project_click
    ├── Header.tsx            # ✅ language_click, share_click
    └── ContactSection.tsx    # ✅ contact_click
```

### Archivo Central: `src/analytics/events.ts`

Contiene todas las funciones de tracking:

- `trackProjectClick(projectId, projectType, language)`
- `trackLanguageClick(language)`
- `trackContactClick(contactType, language)`
- `trackShareClick(shareChannel, language)`

**Ventajas:**

- ✅ Fácil de mantener (un solo archivo)
- ✅ Sin duplicación de lógica
- ✅ Tipado TypeScript completo
- ✅ Console logs en desarrollo para debugging

---

## 🚀 Verificación de Eventos en GA4

### Opción 1: Realtime Analytics (Inmediato)

1. Ve a **Firebase Console** → **Analytics** → **DebugView**
2. Activa el modo debug en tu navegador:
   ```javascript
   // En la consola del navegador:
   localStorage.setItem("debug_mode", "true");
   ```
3. Recarga la página y realiza acciones (click en proyecto, cambiar idioma, etc.)
4. Los eventos aparecerán **en tiempo real** en DebugView

### Opción 2: Events Dashboard (24-48 horas)

1. Ve a **Firebase Console** → **Analytics** → **Events**
2. Los eventos tardan 24-48 horas en aparecer
3. Verás métricas agregadas de:
   - `project_click`
   - `language_click`
   - `contact_click`
   - `share_click`

### Opción 3: Google Analytics 4 (24 horas)

1. Ve a **Google Analytics 4** (vinculado desde Firebase)
2. **Realtime** → Verás eventos en vivo
3. **Events** → Métricas históricas de eventos

---

## 📈 KPIs Disponibles

Con estos eventos, puedes calcular:

### 1. Proyectos con Interés Real

- **Métrica:** Número de clicks en "Ver proyecto" por proyecto
- **Evento:** `project_click`
- **Filtro:** Por `project_id`

### 2. Tipo de Proyecto Más Atractivo

- **Métrica:** Clicks agrupados por tipo de proyecto
- **Evento:** `project_click`
- **Filtro:** Por `project_type` (web, mobile, desktop)

### 3. Idioma Predominante

- **Métrica:** Total de eventos por idioma
- **Evento:** Todos (tienen parámetro `language`)
- **Análisis:** Usuarios que usan ES vs EN

### 4. Canal de Contacto Más Efectivo

- **Métrica:** Clicks por tipo de contacto
- **Evento:** `contact_click`
- **Filtro:** Por `contact_type` (email, linkedin, github)

### 5. Botones de Compartir Más Usados

- **Métrica:** Clicks por red social
- **Evento:** `share_click`
- **Filtro:** Por `share_channel` (whatsapp, telegram, linkedin, x)

---

## 🎯 Configuración de Conversiones

Para marcar eventos como conversiones (ej: "contacto exitoso"):

1. Ve a **Firebase Console** → **Analytics** → **Events**
2. Encuentra el evento (ej: `contact_click`)
3. Click en "Mark as conversion"
4. Ahora aparecerá en **Conversions** y podrás crear embudos

**Eventos recomendados como conversiones:**

- ✅ `contact_click` → Intención de contacto
- ✅ `project_click` → Interés en proyectos
- ⚠️ `language_click` → Opcional (cambio de idioma)
- ⚠️ `share_click` → Opcional (viralidad)

---

## 🛠️ Testing Local

### 1. Modo Desarrollo (Console Logs)

Los eventos se loggean en la consola del navegador cuando `import.meta.env.DEV` es `true`:

```
📊 Analytics: project_click { project_id: "royal-chicken-bbq", project_type: "web", language: "es" }
📊 Analytics: language_click { language: "en" }
📊 Analytics: contact_click { contact_type: "email", language: "es" }
```

### 2. Verificar en Firebase DebugView

```javascript
// En la consola del navegador:
localStorage.setItem("debug_mode", "true");
// Recarga la página
```

Ahora ve a **Firebase Console** → **Analytics** → **DebugView** y verás los eventos en tiempo real.

---

## ⚙️ Variables de Entorno Necesarias

Asegúrate de tener estas variables en tu `.env`:

```env
VITE_FIREBASE_API_KEY=tu-api-key
VITE_FIREBASE_AUTH_DOMAIN=tu-auth-domain.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-project-id
VITE_FIREBASE_STORAGE_BUCKET=tu-storage-bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

**Nota:** Firebase Analytics se inicializa automáticamente cuando estas variables están configuradas.

---

## 🚨 Troubleshooting

### Los eventos no aparecen en DebugView

1. ✅ Verifica que `debug_mode` esté activo:

   ```javascript
   localStorage.getItem("debug_mode"); // Debe retornar "true"
   ```

2. ✅ Verifica que Firebase esté inicializado:

   ```javascript
   // En la consola del navegador:
   console.log(window.firebase);
   ```

3. ✅ Revisa la consola del navegador para errores de Firebase

4. ✅ Verifica que las variables de entorno estén configuradas correctamente

### Los eventos no aparecen en Events Dashboard

- ⏳ **Espera 24-48 horas** - Los eventos tardan en procesarse
- ✅ Usa **Realtime** o **DebugView** para verificación inmediata

### Error: "Firebase Analytics not initialized"

- ✅ Verifica que las variables de entorno estén configuradas
- ✅ Recarga la página
- ✅ Revisa [src/config/firebase.ts](src/config/firebase.ts)

---

## 🎓 Best Practices Implementadas

1. ✅ **Nombres en snake_case** (GA4 friendly)
2. ✅ **Parámetros relevantes** para análisis de negocio
3. ✅ **Eventos precisos** (no inflados)
4. ✅ **Centralización** (un solo archivo)
5. ✅ **TypeScript** para seguridad de tipos
6. ✅ **Console logs en desarrollo** para debugging
7. ✅ **Manejo de errores** para evitar crashes
8. ✅ **Compatible con Firebase plan gratuito**

---

## 📊 Ejemplo de Query en BigQuery (Opcional)

Si conectas Firebase Analytics con BigQuery, puedes hacer queries como:

```sql
-- Proyectos más clickeados
SELECT
  event_params.value.string_value AS project_id,
  COUNT(*) AS clicks
FROM `tu-proyecto.analytics_123456789.events_*`
WHERE event_name = 'project_click'
  AND _TABLE_SUFFIX BETWEEN '20250101' AND '20250131'
GROUP BY project_id
ORDER BY clicks DESC
LIMIT 10;
```

---

## 📚 Recursos

- [Firebase Analytics Documentation](https://firebase.google.com/docs/analytics)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9267735)
- [Firebase Console](https://console.firebase.google.com/)
- [Google Analytics 4](https://analytics.google.com/)

---

## 🎉 ¡Listo!

Tu portfolio ahora tiene un sistema de analíticas profesional que te permite:

1. ✅ Ver qué proyectos interesan realmente
2. ✅ Analizar qué idioma usan los usuarios
3. ✅ Identificar qué canales de contacto convierten mejor
4. ✅ Medir qué botones de compartir se usan más

**Todo sin backend y 100% gratis con Firebase Analytics.**

---

## 📝 Changelog

### v1.0.0 - 2025-01-20

- ✅ Implementación inicial de Firebase Analytics
- ✅ 4 eventos personalizados
- ✅ Integración en componentes clave
- ✅ Documentación completa
