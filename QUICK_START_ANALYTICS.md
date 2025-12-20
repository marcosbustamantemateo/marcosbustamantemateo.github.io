# 🔥 Guía Rápida - Firebase Analytics

## ✅ Implementación Completada

Se han integrado **4 eventos personalizados** en tu portfolio:

### 📊 Eventos Disponibles

| Evento           | Descripción                                       | Ubicación           |
| ---------------- | ------------------------------------------------- | ------------------- |
| `project_click`  | Click en "Ver proyecto"                           | ProjectsSection.tsx |
| `language_click` | Cambio de idioma                                  | Header.tsx          |
| `contact_click`  | Click en contacto (email/LinkedIn/GitHub)         | ContactSection.tsx  |
| `share_click`    | Click en compartir (WhatsApp/Telegram/LinkedIn/X) | Header.tsx          |

---

## 🚀 Cómo Usar

### En Componentes

Los eventos ya están integrados. Ejemplo:

```typescript
// ✅ Ya implementado en ProjectsSection.tsx
<a
  href={project.link}
  onClick={() => trackProjectClick(project.id, project.type, language)}
>
  Ver Proyecto
</a>
```

### Agregar Nuevos Eventos

1. Abre `src/analytics/events.ts`
2. Crea una nueva función:

```typescript
export const trackMyEvent = (param: string, language: Language) => {
  if (!analytics) return;

  logEvent(analytics, "my_event", {
    my_param: param,
    language: language,
  });
};
```

3. Importa y usa en tu componente:

```typescript
import { trackMyEvent } from "@/analytics/events";

// En tu componente:
<button onClick={() => trackMyEvent("valor", language)}>Mi Botón</button>;
```

---

## 🔍 Verificar Eventos

### Opción 1: Consola del Navegador (Desarrollo)

Abre DevTools → Console. Verás logs como:

```
📊 Analytics: project_click { project_id: "royal-chicken-bbq", project_type: "web", language: "es" }
```

### Opción 2: Firebase DebugView (Tiempo Real)

1. Abre la consola del navegador y ejecuta:

```javascript
localStorage.setItem("debug_mode", "true");
```

2. Recarga la página

3. Ve a **Firebase Console** → **Analytics** → **DebugView**

4. Realiza acciones (click en proyecto, cambiar idioma, etc.)

5. Los eventos aparecerán **inmediatamente** en DebugView

### Opción 3: Firebase Events (24-48 horas)

1. Ve a **Firebase Console** → **Analytics** → **Events**
2. Espera 24-48 horas para ver métricas agregadas

---

## 📈 KPIs Disponibles

Con estos eventos puedes analizar:

✅ **Proyectos más interesantes** (clicks en "Ver proyecto")
✅ **Idioma predominante** (ES vs EN)
✅ **Canal de contacto más efectivo** (email vs LinkedIn vs GitHub)
✅ **Red social más usada para compartir** (WhatsApp vs LinkedIn, etc.)

---

## 🎯 Marcar Conversiones

Para rastrear conversiones (ej: "contacto exitoso"):

1. Ve a **Firebase Console** → **Analytics** → **Events**
2. Busca el evento (ej: `contact_click`)
3. Click en **"Mark as conversion"**
4. Listo! Ahora aparece en **Conversions**

---

## 🛠️ Archivos Modificados

```
✅ src/analytics/events.ts          (NUEVO - eventos centralizados)
✅ src/config/firebase.ts            (agregado Analytics)
✅ src/components/ProjectsSection.tsx (project_click)
✅ src/components/Header.tsx          (language_click, share_click)
✅ src/components/ContactSection.tsx  (contact_click)
✅ ANALYTICS_GUIDE.md                 (documentación completa)
✅ QUICK_START_ANALYTICS.md           (esta guía)
```

---

## 🚨 Troubleshooting

### No veo eventos en DebugView

```javascript
// Ejecuta en la consola del navegador:
localStorage.setItem("debug_mode", "true");
// Luego recarga la página
```

### Error: "Firebase Analytics not initialized"

- ✅ Verifica que las variables de entorno estén en `.env`
- ✅ Recarga la página
- ✅ Revisa la consola del navegador para más detalles

### Los eventos no aparecen en Events

- ⏳ Espera 24-48 horas (es normal)
- ✅ Usa **DebugView** para verificación inmediata

---

## 📚 Documentación Completa

Para más detalles, consulta: **[ANALYTICS_GUIDE.md](ANALYTICS_GUIDE.md)**

---

## 🎉 ¡Todo Listo!

Tu portfolio ahora rastrea eventos profesionales sin backend.

**Próximos pasos:**

1. Ejecuta `npm run dev`
2. Activa DebugView en Firebase
3. Interactúa con el portfolio
4. Ve los eventos en tiempo real

🔥 **¡Disfruta tus analíticas!**
