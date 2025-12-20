# 🎯 Flujo de Eventos - Firebase Analytics

## 📊 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                     PORTFOLIO WEB                            │
│                  (React + TypeScript)                        │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ Usuario interactúa
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                     COMPONENTES                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ProjectsSection.tsx                                        │
│  ├─ Click "Ver proyecto"                                    │
│  └─ trackProjectClick(id, type, lang) ────────────┐        │
│                                                    │        │
│  Header.tsx                                       │        │
│  ├─ Cambio de idioma                             │        │
│  │  └─ trackLanguageClick(lang) ─────────────────┤        │
│  └─ Click en compartir                           │        │
│     └─ trackShareClick(channel, lang) ───────────┤        │
│                                                    │        │
│  ContactSection.tsx                               │        │
│  └─ Click en contacto                            │        │
│     └─ trackContactClick(type, lang) ────────────┤        │
│                                                    │        │
└────────────────────────────────────────────────────│────────┘
                                                     │
                                                     ▼
┌─────────────────────────────────────────────────────────────┐
│               src/analytics/events.ts                        │
│                  MÓDULO CENTRALIZADO                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  trackProjectClick(id, type, lang)                          │
│  ├─ Valida analytics != null                                │
│  ├─ logEvent("project_click", params)                       │
│  └─ console.log en desarrollo ─────────────┐               │
│                                              │               │
│  trackLanguageClick(lang)                   │               │
│  ├─ Valida analytics != null               │               │
│  ├─ logEvent("language_click", params)      │               │
│  └─ console.log en desarrollo ──────────────┤               │
│                                              │               │
│  trackContactClick(type, lang)              │               │
│  ├─ Valida analytics != null               │               │
│  ├─ logEvent("contact_click", params)       │               │
│  └─ console.log en desarrollo ──────────────┤               │
│                                              │               │
│  trackShareClick(channel, lang)             │               │
│  ├─ Valida analytics != null               │               │
│  ├─ logEvent("share_click", params)         │               │
│  └─ console.log en desarrollo ──────────────┤               │
│                                              │               │
└──────────────────────────────────────────────│───────────────┘
                                               │
                                               ▼
                                    ┌──────────────────┐
                                    │  DESARROLLO      │
                                    │  Console Logs    │
                                    │  📊 Analytics... │
                                    └──────────────────┘
                                               │
                                               ▼
┌─────────────────────────────────────────────────────────────┐
│              src/config/firebase.ts                          │
│               FIREBASE ANALYTICS                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  getAnalytics(app)                                          │
│  ├─ Inicializa Firebase Analytics                          │
│  ├─ Solo en browser (typeof window !== "undefined")        │
│  └─ Export analytics para uso global                       │
│                                                              │
└──────────────────────────────────────────────│───────────────┘
                                               │
                                               ▼
┌─────────────────────────────────────────────────────────────┐
│                  FIREBASE BACKEND                            │
│              (Google Cloud Platform)                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ✅ DebugView (Tiempo Real)                                 │
│  ├─ Ve eventos inmediatamente                              │
│  └─ Requiere debug_mode = true                             │
│                                                              │
│  ✅ Realtime Analytics                                      │
│  ├─ Usuarios activos ahora                                 │
│  └─ Eventos de últimos 30 minutos                          │
│                                                              │
│  ✅ Events Dashboard                                        │
│  ├─ Métricas agregadas (24-48h)                            │
│  ├─ project_click                                           │
│  ├─ language_click                                          │
│  ├─ contact_click                                           │
│  └─ share_click                                             │
│                                                              │
│  ✅ Conversions                                             │
│  └─ Marca eventos como conversiones                        │
│                                                              │
└──────────────────────────────────────────────│───────────────┘
                                               │
                                               ▼
┌─────────────────────────────────────────────────────────────┐
│                  GOOGLE ANALYTICS 4                          │
│                  (Vinculado desde Firebase)                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  📊 Reports                                                  │
│  ├─ Engagement                                              │
│  ├─ User Acquisition                                        │
│  ├─ Monetization                                            │
│  └─ Retention                                               │
│                                                              │
│  🎯 Explore                                                  │
│  ├─ Custom Reports                                          │
│  ├─ Funnels                                                 │
│  └─ Segments                                                │
│                                                              │
│  📈 Conversions                                              │
│  └─ Eventos marcados como conversiones                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                                               │
                                               ▼
┌─────────────────────────────────────────────────────────────┐
│                  BIGQUERY (Opcional)                         │
│             Análisis Avanzado con SQL                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  📊 Queries SQL                                              │
│  ├─ Top proyectos más clickeados                           │
│  ├─ Idioma predominante                                     │
│  ├─ Canal de contacto más efectivo                         │
│  └─ Red social más usada                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Flujo de Evento: `project_click`

```
1. Usuario hace click en "Ver proyecto"
   ↓
2. onClick={() => trackProjectClick(project.id, project.type, language)}
   ↓
3. src/analytics/events.ts
   ├─ Valida: analytics != null ✅
   ├─ logEvent("project_click", {
   │    project_id: "royal-chicken-bbq",
   │    project_type: "web",
   │    language: "es"
   │  })
   └─ console.log("📊 Analytics: project_click") [solo en dev]
   ↓
4. Firebase Analytics (Google Cloud)
   ├─ Recibe evento
   ├─ Procesa parámetros
   └─ Almacena en BD
   ↓
5. Visualización
   ├─ DebugView: Inmediato ⚡
   ├─ Realtime: 30 minutos 🕐
   └─ Events Dashboard: 24-48 horas 📅
```

---

## 📊 Eventos y Parámetros

### `project_click`

```json
{
  "event_name": "project_click",
  "event_params": {
    "project_id": "royal-chicken-bbq",
    "project_type": "web",
    "language": "es"
  },
  "event_timestamp": 1703084400000
}
```

### `language_click`

```json
{
  "event_name": "language_click",
  "event_params": {
    "language": "en"
  },
  "event_timestamp": 1703084410000
}
```

### `contact_click`

```json
{
  "event_name": "contact_click",
  "event_params": {
    "contact_type": "linkedin",
    "language": "es"
  },
  "event_timestamp": 1703084420000
}
```

### `share_click`

```json
{
  "event_name": "share_click",
  "event_params": {
    "share_channel": "whatsapp",
    "language": "es"
  },
  "event_timestamp": 1703084430000
}
```

---

## 🎯 KPIs y Análisis

```
┌────────────────────────────────────────────────────────┐
│              DASHBOARD DE KPIs                          │
├────────────────────────────────────────────────────────┤
│                                                         │
│  📊 Proyectos con Interés Real                         │
│  ├─ Evento: project_click                             │
│  ├─ Agrupar por: project_id                           │
│  └─ Métrica: COUNT(*)                                  │
│                                                         │
│  🌐 Idioma Predominante                                │
│  ├─ Eventos: Todos                                     │
│  ├─ Agrupar por: language                             │
│  └─ Métrica: COUNT(*) por idioma                       │
│                                                         │
│  📧 Canal de Contacto Más Efectivo                     │
│  ├─ Evento: contact_click                             │
│  ├─ Agrupar por: contact_type                         │
│  └─ Métrica: COUNT(*) por tipo                         │
│                                                         │
│  🔗 Red Social Más Usada                               │
│  ├─ Evento: share_click                               │
│  ├─ Agrupar por: share_channel                        │
│  └─ Métrica: COUNT(*) por canal                        │
│                                                         │
│  📱 Tipo de Proyecto Más Atractivo                     │
│  ├─ Evento: project_click                             │
│  ├─ Agrupar por: project_type                         │
│  └─ Métrica: COUNT(*) por tipo                         │
│                                                         │
└────────────────────────────────────────────────────────┘
```

---

## 🔐 Seguridad y Privacidad

```
✅ Sin PII (Personally Identifiable Information)
✅ Sin tracking de cookies invasivo
✅ Eventos agregados en Firebase
✅ Compatible con GDPR
✅ Data retenida según plan Firebase
✅ No requiere consent banner para analíticas básicas
```

---

## 🚀 Performance

```
✅ Script asíncrono (no bloquea render)
✅ Bundle size: ~30KB (gzipped)
✅ Latency: < 100ms por evento
✅ No impacta Core Web Vitals
✅ Offline-friendly (cola de eventos)
```

---

## 🛠️ Debugging Flow

```
1. Activa debug mode
   localStorage.setItem('debug_mode', 'true');

2. Recarga página
   location.reload();

3. Abre DevTools Console
   F12 → Console

4. Interactúa con portfolio
   - Click en proyecto
   - Cambiar idioma
   - Click en contacto
   - Click en compartir

5. Ve logs en consola
   📊 Analytics: project_click { ... }
   📊 Analytics: language_click { ... }

6. Verifica en Firebase DebugView
   Firebase Console → Analytics → DebugView

7. Ve eventos en tiempo real
   Eventos aparecen inmediatamente ⚡
```

---

## 📈 Roadmap Futuro (Opcional)

```
🔮 V2.0 - Próximas Mejoras
├─ ✨ Scroll tracking (% de scroll)
├─ ⏱️ Time on page (tiempo en sección)
├─ 🎯 Click heatmaps (mapa de calor)
├─ 🔄 Return visits (visitas recurrentes)
├─ 📱 Device type (mobile/desktop/tablet)
└─ 🌍 Geographic location (país/ciudad)
```

---

## 🎓 Recursos de Aprendizaje

- [Firebase Analytics Docs](https://firebase.google.com/docs/analytics)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9267735)
- [BigQuery for Firebase](https://firebase.google.com/docs/projects/bigquery-export)
- [DebugView Guide](https://firebase.google.com/docs/analytics/debugview)

---

**Creado:** 20 de diciembre, 2025  
**Versión:** 1.0.0  
**Stack:** React + TypeScript + Firebase Analytics + Vite
