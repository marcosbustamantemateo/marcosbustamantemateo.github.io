# 🚀 Portfolio Personal - Marcos Bustamante

Portfolio profesional desarrollado con React, TypeScript, Vite y Firebase. Sistema dinámico con configuración centralizada en Firebase Firestore y fallback automático a archivos JSON locales.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Firebase](#-firebase)
- [Desarrollo](#-desarrollo)
- [Despliegue](#-despliegue)
- [Mantenimiento](#-mantenimiento)

---

## ✨ Características

### Sistema de Configuración Dinámica

- **Firebase-First**: Todos los datos se cargan primero desde Firebase Firestore
- **Fallback Automático**: Si Firebase falla, se cargan datos desde JSON locales
- **Caché Inteligente**: Sistema de caché de 5 minutos para reducir lecturas de Firestore
- **Sin Datos Hardcodeados**: Toda la información es dinámica y configurable

### Colecciones Firebase

1. **config/projectSettings** - Configuración global
2. **aboutMe/profile** - Información personal
3. **workExperience** - Experiencias laborales
4. **education** - Educación y formación
5. **programmingLanguages** - Lenguajes de programación
6. **testimonials** - Testimonios de colegas
7. **technologyCategories** - Categorías de tecnologías

### Analytics

- Integración con Firebase Analytics
- Seguimiento de interacciones: clics en proyectos, tecnologías, contactos y compartir

### Diseño

- **Responsive**: Totalmente adaptable a móviles, tablets y desktop
- **Dark/Light Mode**: Tema personalizable
- **Animaciones**: Transiciones suaves y profesionales
- **shadcn/ui**: Componentes UI modernos y accesibles

---

## 🛠️ Tecnologías

### Frontend

- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI
- **Lucide React** - Iconos

### Backend & Storage

- **Firebase Firestore** - Base de datos NoSQL
- **Firebase Storage** - Almacenamiento de imágenes
- **Firebase Analytics** - Analítica de usuarios

### Build & Deploy

- **Bun** - Package manager y runtime
- **TypeScript** - Compilador
- **PostCSS** - Procesador CSS

---

## 📁 Estructura del Proyecto

```
marcosbustamantemateo.github.io/
├── public/                          # Archivos estáticos
│   ├── images/                      # Imágenes del proyecto
│   ├── manifest.json                # Manifest PWA
│   └── robots.txt                   # SEO
├── scripts/                         # Scripts de utilidad
│   └── initFirebase.ts              # Script para inicializar Firebase
├── src/
│   ├── analytics/                   # Firebase Analytics
│   │   └── events.ts                # Eventos de tracking
│   ├── components/                  # Componentes React
│   │   ├── ui/                      # Componentes shadcn/ui
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TechnologiesSection.tsx
│   │   ├── Timeline.tsx
│   │   └── ...
│   ├── config/                      # Configuración
│   │   └── firebase.ts              # Configuración Firebase
│   ├── data/                        # Datos de fallback (JSON)
│   │   ├── aboutMe.json
│   │   ├── contactTypes.json
│   │   ├── education.json
│   │   ├── heroStats.json
│   │   ├── languages.json           # Lenguajes UI (es/en)
│   │   ├── languages.json           # Lenguajes programación
│   │   ├── projectTypes.json
│   │   ├── shareChannels.json
│   │   ├── testimonials.json
│   │   ├── technologyCategories.json
│   │   └── workExperience.json
│   ├── hooks/                       # Custom hooks
│   │   ├── useConfig.ts             # Hook para config/projectSettings
│   │   ├── useFirebaseData.ts       # Hooks para colecciones
│   │   ├── useAuth.ts
│   │   └── useProjects.ts
│   ├── lib/                         # Utilidades
│   │   └── utils.ts
│   ├── pages/                       # Páginas
│   │   ├── Admin.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── types/                       # TypeScript types
│   │   └── config.ts                # Tipos de configuración
│   ├── App.tsx                      # Componente principal
│   ├── main.tsx                     # Punto de entrada
│   └── index.css                    # Estilos globales
├── .env.local                       # Variables de entorno (no subir a Git)
├── .env.example                     # Ejemplo de variables de entorno
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** 18+ o **Bun** 1.0+
- **Git**
- Cuenta de **Firebase**

### 1. Clonar el Repositorio

```bash
git clone https://github.com/marcosbustamantemateo/marcosbustamantemateo.github.io.git
cd marcosbustamantemateo.github.io
```

### 2. Instalar Dependencias

Con npm:

```bash
npm install
```

Con bun (recomendado):

```bash
bun install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id
```

**Obtener credenciales:**

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto o crea uno nuevo
3. Ve a **Project Settings** → **General**
4. En **Your apps**, selecciona la app web
5. Copia las credenciales del objeto `firebaseConfig`

---

## 🔥 Firebase

### Estructura de Firestore

```
firestore/
├── config/
│   └── projectSettings             # Documento único
│       ├── projectTypes[]          # Tipos de proyectos
│       ├── languages[]             # Idiomas UI (es/en)
│       ├── contactTypes[]          # Tipos de contacto
│       ├── shareChannels[]         # Canales para compartir
│       ├── heroStats               # Estadísticas del hero
│       ├── version                 # Versión
│       └── lastUpdated             # Última actualización
├── aboutMe/
│   └── profile                     # Información personal
│       ├── name
│       ├── title{es,en}
│       ├── subtitle{es,en}
│       ├── description{es,en}
│       ├── commitment{es,en}
│       ├── location{es,en}
│       └── avatarUrl
├── workExperience/                 # Colección
│   ├── exp1                        # Documento
│   │   ├── company
│   │   ├── position{es,en}
│   │   ├── period{es,en}
│   │   ├── description{es,en}
│   │   ├── technologies[]          # Array de tecnologías
│   │   ├── achievements{es,en}[]  (opcional)
│   │   └── order
│   └── exp2...
├── education/                      # Colección
│   ├── edu1                        # Documento
│   │   ├── institution
│   │   ├── degree{es,en}
│   │   ├── period{es,en}
│   │   ├── description{es,en}
│   │   ├── technologies[]          # Array de tecnologías
│   │   └── order
│   └── edu2...
├── programmingLanguages/           # Colección
│   ├── java                        # Documento
│   │   ├── name
│   │   ├── category
│   │   └── order
│   └── csharp...
├── testimonials/                   # Colección
│   ├── test1                       # Documento
│   │   ├── name
│   │   ├── initials
│   │   ├── content{es,en}
│   │   ├── linkedin (opcional)
│   │   ├── rating
│   │   └── order
│   └── test2...
└── technologyCategories/           # Colección
    ├── languages                   # Documento
    │   ├── label{es,en}
    │   ├── description{es,en}
    │   ├── icon
    │   ├── technologies[]
    │   └── order
    └── frontend...
```

### Reglas de Seguridad

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Lectura pública para todos
    match /{document=**} {
      allow read: if true;
    }

    // Escritura solo para usuarios autenticados
    match /config/{document=**} {
      allow write: if request.auth != null;
    }

    match /aboutMe/{document=**} {
      allow write: if request.auth != null;
    }

    match /workExperience/{document=**} {
      allow write: if request.auth != null;
    }

    match /education/{document=**} {
      allow write: if request.auth != null;
    }

    match /programmingLanguages/{document=**} {
      allow write: if request.auth != null;
    }

    match /testimonials/{document=**} {
      allow write: if request.auth != null;
    }

    match /technologyCategories/{document=**} {
      allow write: if request.auth != null;
    }

    match /projects/{document=**} {
      allow write: if request.auth != null;
    }
  }
}
```

### Inicializar/Restaurar Datos en Firebase

El proyecto incluye un script que sube todos los datos a Firebase automáticamente.

**Ejecutar el script:**

```bash
npx tsx scripts/initFirebase.ts
```

**¿Qué hace el script?**

1. Lee las credenciales de `.env.local`
2. Lee los datos desde los archivos JSON en `src/data/`
3. Inicializa Firebase
4. Sube todos los datos a Firestore organizados en colecciones
5. Muestra un resumen de lo subido

**Resultado esperado:**

```
🚀 Iniciando carga de datos a Firebase...

📝 Subiendo config/projectSettings...
✅ config/projectSettings cargado

👤 Subiendo aboutMe/profile...
✅ aboutMe/profile cargado

💼 Subiendo workExperience...
  ✅ exp1 - Innovation Strategies SLU
  ✅ exp2 - Ansotec
  ...
✅ workExperience completo

🎉 ¡Todos los datos se han subido exitosamente a Firebase!

📊 Resumen:
  - config/projectSettings: 1 documento
  - aboutMe: 1 documento
  - workExperience: 8 documentos
  - education: 3 documentos
  - programmingLanguages: 7 documentos
  - testimonials: 5 documentos
  - technologyCategories: 6 documentos
```

### Sistema de Fallback a JSON

Si Firebase no está disponible o falla, la aplicación automáticamente carga los datos desde archivos JSON en `src/data/`.

**Archivos JSON de fallback:**

- `aboutMe.json`
- `contactTypes.json`
- `education.json`
- `heroStats.json`
- `languages.json` (idiomas UI)
- `projectTypes.json`
- `shareChannels.json`
- `testimonials.json`
- `technologyCategories.json`
- `workExperience.json`

**¿Cómo funciona?**

1. Los hooks intentan cargar desde Firebase primero
2. Si hay error de conexión o Firebase no responde
3. Se cargan automáticamente los datos desde JSON
4. El usuario no nota la diferencia

**Editar datos de fallback:**
Simplemente edita los archivos JSON en `src/data/`. Mantén la misma estructura que Firebase.

---

## 💻 Desarrollo

### Iniciar Servidor de Desarrollo

```bash
npm run dev
# o
bun dev
```

Abre [http://localhost:5173](http://localhost:5173)

### Compilar para Producción

```bash
npm run build
# o
bun run build
```

### Vista Previa de Producción

```bash
npm run preview
# o
bun run preview
```

### Linting

```bash
npm run lint
# o
bun run lint
```

---

## 🌐 Despliegue

### GitHub Pages (Automático)

El proyecto está configurado para desplegarse automáticamente en GitHub Pages cuando haces push a `main`.

**Pasos:**

1. Haz commit de tus cambios
2. Push a `main`:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. GitHub Actions construye y despliega automáticamente
4. Tu sitio estará disponible en: `https://[tu-usuario].github.io`

### Otros Servicios

#### Vercel

```bash
npm i -g vercel
vercel
```

#### Netlify

```bash
npm run build
# Sube la carpeta dist/ a Netlify
```

---

## 🔧 Mantenimiento

### Actualizar Contenido

#### Opción 1: Desde Firebase Console (Recomendado)

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. Ve a **Firestore Database**
4. Edita los documentos directamente
5. Los cambios se reflejan inmediatamente en la web

#### Opción 2: Desde Archivos JSON

1. Edita los archivos JSON en `src/data/` (por ejemplo, `workExperience.json`, `education.json`, etc.)
2. Ejecuta el script de inicialización: `npm run init-firebase`
3. Los datos se actualizan en Firebase automáticamente

#### Opción 3: Desde Firebase Console (Para cambios individuales rápidos)

1. Ve a Firebase Console → Firestore
2. Navega a la colección que quieres modificar
3. Edita el documento directamente
4. Los cambios se reflejan inmediatamente en la web

### Agregar Nueva Experiencia Laboral

**En Firebase Console:**

```
Firestore → workExperience → Add document
Document ID: exp9
Fields:
  company: "Nueva Empresa"
  position: {es: "Puesto ES", en: "Position EN"}
  period: {es: "01/2024 - Presente", en: "01/2024 - Present"}
  description: {es: "Descripción ES", en: "Description EN"}
  achievements: {es: ["Logro 1", "Logro 2"], en: ["Achievement 1", "Achievement 2"]}
  order: 1
```

**En el script:**

```typescript
const workExperience = [
  {
    id: "exp9",
    company: "Nueva Empresa",
    position: {
      es: "Puesto ES",
      en: "Position EN",
    },
    period: {
      es: "01/2024 - Presente",
      en: "01/2024 - Present",
    },
    description: {
      es: "Descripción ES",
      en: "Description EN",
    },
    achievements: {
      es: ["Logro 1", "Logro 2"],
      en: ["Achievement 1", "Achievement 2"],
    },
    order: 1,
  },
  // ... otras experiencias
];
```

### Agregar Nuevo Testimonio

```typescript
const testimonials = [
  {
    id: "test6",
    name: "Nombre Apellido",
    initials: "NA",
    content: {
      es: "Testimonio en español",
      en: "Testimony in English",
    },
    linkedin: "https://www.linkedin.com/in/usuario",
    rating: 5,
    order: 6,
  },
  // ... otros testimonios
];
```

### Agregar Categoría de Tecnología

```typescript
const technologyCategories = [
  {
    id: "nueva-categoria",
    label: {
      es: "Nombre ES",
      en: "Name EN",
    },
    description: {
      es: "Descripción ES",
      en: "Description EN",
    },
    icon: "Cog", // Nombre del icono de Lucide
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    order: 7,
  },
  // ... otras categorías
];
```

### Actualizar Estadísticas del Hero

**En Firebase Console:**

```
Firestore → config → projectSettings → heroStats
```

**En el script:**

```typescript
heroStats: {
  yearsOfExperience: 8,
  projectsCompleted: 20,
  technologiesMastered: 50,
  displayFormat: {
    experience: "8+",
    projects: "20+",
    technologies: "auto" // o un número como "50+"
  }
}
```

### Cambiar Información Personal

**En Firebase Console:**

```
Firestore → aboutMe → profile
```

**Campos editables:**

- `name`: Tu nombre
- `title.es` / `title.en`: Título profesional
- `subtitle.es` / `subtitle.en`: Subtítulo
- `description.es` / `description.en`: Descripción
- `commitment.es` / `commitment.en`: Compromiso
- `location.es` / `location.en`: Ubicación
- `avatarUrl`: URL de tu avatar

---

## 🐛 Solución de Problemas

### Error: "Firebase not found"

- Verifica que `.env.local` existe y tiene las credenciales correctas
- Asegúrate de que las variables empiezan con `VITE_`

### Error: "Permission denied" al ejecutar script

- Ve a Firebase Console → Firestore → Rules
- Actualiza las reglas de seguridad
- Para desarrollo puedes usar:
  ```javascript
  allow read, write: if true;
  ```

### Los datos no se actualizan

- Limpia el caché del navegador
- Los datos se cachean 5 minutos en el cliente
- Espera o reinicia el servidor de desarrollo

### Build falla en GitHub Actions

- Verifica que las variables de entorno estén en GitHub
- Ve a Settings → Secrets and variables → Actions
- Agrega todas las variables `VITE_FIREBASE_*`

---

## 📝 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo como base para tu propio portfolio.

---

## 👨‍💻 Autor

**Marcos Bustamante Mateo**

- LinkedIn: [marcosbustamantemateo](https://www.linkedin.com/in/marcosbustamantemateo/)
- GitHub: [@marcosbustamantemateo](https://github.com/marcosbustamantemateo)
- Email: marcosbustamante.mateo@gmail.com

---

## 🙏 Agradecimientos

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
