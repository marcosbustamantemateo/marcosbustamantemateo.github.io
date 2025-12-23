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

### Pantalla de Carga

- **Loading Screen Dinámico**: Se muestra mientras se cargan los datos de Firebase
- **Logo Animado**: Con efecto de brillo y bordes animados
- **Indicadores Visuales**: Puntos pulsantes que indican carga

### Sistema de Contacto Avanzado

- **Formulario de Contacto**: Con validaciones personalizadas en modal
- **Validaciones en Modal**: Interfaz elegante con errores centrados en pantalla
- **Integración Telegram**: Envío automático de mensajes a Telegram Bot
- **Google reCAPTCHA v2**: Protección contra spam y bots con checkbox verificable
- **Confirmación Visual**: Reseteo del formulario después de envío exitoso

### Colecciones Firebase

1. **config/projectSettings** - Configuración global
2. **aboutMe/profile** - Información personal
3. **workExperience** - Experiencias laborales
4. **education** - Educación y formación
5. **programmingLanguages** - Lenguajes de programación
6. **testimonials** - Testimonios de colegas (con imágenes)
7. **technologyCategories** - Categorías de tecnologías
8. **projects** - Proyectos del portfolio

### Panel de Administración CRUD

Sistema completo de gestión con interfaz de administración que permite:

- **6 Tabs de Gestión**: Proyectos, Experiencia, Educación, Lenguajes, Categorías, Testimonios
- **Operaciones CRUD**: Create, Read, Update, Delete para cada colección
- **Formularios Bilingües**: Español/Inglés con validación
- **Preview de Imágenes**: Visualización en tiempo real en proyectos y testimonios
- **Gestión de Tecnologías**: Añadir/eliminar tecnologías dinámicamente
- **Confirmaciones**: AlertDialog para operaciones destructivas
- **Tiempo Real**: Actualización automática con onSnapshot de Firebase

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
- **Framer Motion** - Animaciones avanzadas
- **react-google-recaptcha** - Integración con reCAPTCHA v2

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
│   │   ├── ContactSection.tsx       # Formulario con validaciones y Telegram
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LoadingScreen.tsx        # Pantalla de carga con animaciones
│   │   ├── ProfileSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TechnologiesSection.tsx
│   │   ├── ValidationModal.tsx      # Modal de validaciones del formulario
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

Copia el archivo `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Luego edita `.env.local` y añade tus credenciales:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id

# Telegram Bot Configuration (Opcional)
VITE_TELEGRAM_BOT_TOKEN=tu_bot_token
VITE_TELEGRAM_CHAT_ID=tu_chat_id

# Google reCAPTCHA v2 Configuration (Opcional)
VITE_RECAPTCHA_SITE_KEY=tu_site_key
```

**Obtener credenciales:**

#### Firebase:

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto o crea uno nuevo
3. Ve a **Project Settings** → **General**
4. En **Your apps**, selecciona la app web
5. Copia las credenciales del objeto `firebaseConfig`

#### Telegram Bot (Opcional):

1. Abre [BotFather](https://t.me/botfather) en Telegram
2. Escribe `/newbot` y sigue las instrucciones
3. Copia el **token** proporcionado
4. Obtén tu `chat_id` abriendo una conversación con el bot y visitando `https://api.telegram.org/bot{TOKEN}/getUpdates`

#### Google reCAPTCHA v2 (Opcional):

1. Ve a [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Crea un nuevo sitio
3. Elige **reCAPTCHA v2** → **"Estoy de acuerdo que no soy un robot"**
4. Añade tus dominios (localhost, 127.0.0.1, tu dominio en producción)
5. Copia la **Site Key**

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
│   │   ├── level (0-100)
│   │   └── order
│   └── csharp...
├── testimonials/                   # Colección
│   ├── test1                       # Documento
│   │   ├── name
│   │   ├── initials
│   │   ├── imageUrl (opcional)     # URL de foto del testimonio
│   │   ├── content{es,en}
│   │   ├── linkedin (opcional)
│   │   ├── rating
│   │   └── order
│   └── test2...
├── technologyCategories/           # Colección
│   ├── languages                   # Documento
│   │   ├── label{es,en}
│   │   ├── description{es,en}
│   │   ├── icon
│   │   ├── technologies[]
│   │   └── order
│   └── frontend...
└── projects/                       # Colección
    ├── project1                    # Documento
    │   ├── title
    │   ├── titleEn
    │   ├── description{es,en}
    │   ├── imageUrl                # URL de imagen del proyecto
    │   ├── type                    # web/mobile/desktop
    │   ├── technologies[]          # Array de tecnologías
    │   ├── link (opcional)         # URL del proyecto
    │   ├── comingSoon
    │   └── order
    └── project2...
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
- `projects.json`
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

#### Opción 1: Panel de Administración (Recomendado)

El proyecto incluye un panel de administración completo con operaciones CRUD para todas las colecciones:

**Acceso:**

1. Navega a la ruta `/admin` en tu aplicación
2. Inicia sesión con Firebase Authentication
3. Gestiona todas las colecciones desde la interfaz web

**Características del Panel Admin:**

- **6 Tabs**: Proyectos, Experiencia, Educación, Lenguajes, Categorías, Testimonios
- **Crear**: Formularios bilingües con validación
- **Editar**: Modificar cualquier registro existente
- **Eliminar**: Con confirmación de seguridad
- **Preview**: Visualización de imágenes en proyectos y testimonios
- **Tiempo Real**: Actualización automática al guardar

#### Opción 2: Scripts de Firebase (Para carga masiva)

Ideal para inicializar o resetear completamente Firebase con datos desde JSON:

**Workflow completo:**

```bash
# 1. Editar archivos JSON en src/data/
nano src/data/workExperience.json
nano src/data/projects.json
# ... etc

# 2. Eliminar todos los datos de Firebase
npm run delete-firebase

# 3. Cargar datos desde JSON a Firebase
npm run init-firebase
```

**El script carga automáticamente:**

- config/projectSettings
- aboutMe/profile
- workExperience (8 documentos)
- education (3 documentos)
- programmingLanguages (5 documentos)
- testimonials (5 documentos)
- technologyCategories (9 documentos)
- projects (4 documentos)

#### Opción 3: Firebase Console (Cambios puntuales)

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. Ve a **Firestore Database**
4. Edita los documentos directamente
5. Los cambios se reflejan inmediatamente en la web

### Ejemplos de Datos

#### Agregar Nuevo Proyecto (via Admin Panel o JSON)

#### Agregar Nuevo Proyecto (via Admin Panel o JSON)

**Estructura JSON (`src/data/projects.json`):**

```json
{
  "id": "5",
  "title": "Mi Nuevo Proyecto",
  "titleEn": "My New Project",
  "description": {
    "es": "Descripción completa del proyecto en español",
    "en": "Full project description in English"
  },
  "imageUrl": "https://www.marcosbustamantemateo.com/images/projects/mi-proyecto.png",
  "type": "web",
  "technologies": ["React", "TypeScript", "Firebase"],
  "link": "https://mi-proyecto.com",
  "comingSoon": false,
  "order": 5
}
```

#### Agregar Nueva Experiencia Laboral

**Estructura JSON (`src/data/workExperience.json`):**

```json
{
  "id": "exp9",
  "company": "Nueva Empresa",
  "position": {
    "es": "Desarrollador Full Stack",
    "en": "Full Stack Developer"
  },
  "period": {
    "es": "Enero 2024 - Presente",
    "en": "January 2024 - Present"
  },
  "description": {
    "es": "Desarrollo de aplicaciones web modernas",
    "en": "Development of modern web applications"
  },
  "technologies": ["React", "Node.js", "MongoDB"],
  "order": 1
}
```

#### Agregar Nuevo Testimonio con Imagen

**Estructura JSON (`src/data/testimonials.json`):**

```json
{
  "id": "test6",
  "name": "Nombre Apellido",
  "initials": "NA",
  "imageUrl": "https://www.marcosbustamantemateo.com/images/testimonials/NA.jpg",
  "content": {
    "es": "Excelente profesional con gran capacidad técnica",
    "en": "Excellent professional with great technical skills"
  },
  "linkedin": "https://www.linkedin.com/in/usuario",
  "rating": 5,
  "order": 6
}
```

**Nota sobre imágenes:**

- Los testimonios pueden incluir una foto (campo `imageUrl`)
- Si no hay foto, se muestra un avatar con las iniciales
- En el panel admin, la imagen se previsualiza automáticamente

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
