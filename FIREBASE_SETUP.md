# 🔥 Guía de Configuración de Firebase

## 📋 Paso 1: Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en **"Agregar proyecto"**
3. Ingresa un nombre para tu proyecto
4. Sigue los pasos del asistente (puedes desactivar Google Analytics si no lo necesitas)

## 📊 Paso 2: Configurar Firestore Database

1. En el menú lateral, ve a **"Compilación" > "Firestore Database"**
2. Haz clic en **"Crear base de datos"**
3. Selecciona **"Comenzar en modo de producción"**
4. Elige una ubicación (preferiblemente cercana a tus usuarios)
5. Haz clic en **"Habilitar"**

### Configurar Reglas de Seguridad

1. Ve a la pestaña **"Reglas"**
2. Reemplaza las reglas con:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{projectId} {
      // Permitir lectura a todos
      allow read: if true;
      // Permitir escritura solo a usuarios autenticados
      allow write: if request.auth != null;
    }
  }
}
```

3. Haz clic en **"Publicar"**

## 🗄️ Paso 3: ~~Configurar Storage~~ NO NECESARIO ✅

**¡Buenas noticias!** No necesitas configurar Firebase Storage (que requiere pago).

En su lugar, usaremos **URLs de imágenes** desde servicios gratuitos como:

- **Imgur**: https://imgur.com (gratis, sin registro necesario)
- **PostImages**: https://postimages.org (gratis)
- **ImgBB**: https://imgbb.com (gratis)
- **Cloudinary** (plan gratuito generoso)

O puedes usar imágenes desde tu propio repositorio en la carpeta `/public/images/projects/`

## � Paso 4: Configurar Authentication (IMPORTANTE)

### Activar Authentication

1. En el menú lateral, ve a **"Compilación" > "Authentication"**
2. Haz clic en **"Comenzar"**
3. En la pestaña **"Sign-in method"**, habilita **"Correo electrónico/contraseña"**
4. Haz clic en **"Guardar"**

### Crear Usuario Administrador

1. Ve a la pestaña **"Users"**
2. Haz clic en **"Add user"**
3. Ingresa tu correo electrónico y una contraseña segura
4. Haz clic en **"Add user"**

⚠️ **Importante**: Guarda estas credenciales de forma segura, las necesitarás para acceder al panel de administración en `/admin`.

## 🔑 Paso 5: Obtener Credenciales

1. En el menú lateral, haz clic en el ícono de **engranaje** ⚙️ > **"Configuración del proyecto"**
2. En la pestaña **"General"**, baja hasta **"Tus aplicaciones"**
3. Haz clic en el ícono de **Web** `</>`
4. Ingresa un nombre para la app (ej: "Portfolio")
5. Haz clic en **"Registrar app"**
6. Copia la configuración de Firebase que aparece

## 📝 Paso 6: Configurar Variables de Entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza los valores con tus credenciales:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto
VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

3. Guarda el archivo

## 🚀 Paso 7: Probar la Conexión

1. Reinicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Abre tu navegador en `http://localhost:5173`

3. Ve a `http://localhost:5173/admin` para acceder al panel de administración

4. Inicia sesión con el correo y contraseña que creaste en Firebase Authentication

## 📤 Paso 8: Gestionar Proyectos

Una vez autenticado en `/admin`, podrás:

### ➕ Agregar Nuevo Proyecto

1. **Preparar la imagen**:

   - Ve a **[Imgur](https://imgur.com)** (no requiere registro)
   - Arrastra tu imagen o haz clic en "New post"
   - Haz clic derecho en la imagen > "Copiar dirección de imagen"
   - Obtendrás una URL como: `https://i.imgur.com/ABC123.jpg`

2. **Completar el formulario**:

   - **Título**: Nombre del proyecto
   - **Descripción (ES/EN)**: Descripción en ambos idiomas
   - **Tipo**: Web, Móvil o Escritorio
   - **Tecnologías**: Agrega las tecnologías usadas (presiona Enter o el botón +)
   - **Enlace**: URL del proyecto
   - **URL de la Imagen**: Pega la URL de Imgur
   - **Orden**: Número para ordenar (0 = primero)
   - **Próximamente**: Activa si el proyecto está en desarrollo

3. Haz clic en **"Crear Proyecto"**

### ✏️ Editar Proyecto

1. En el listado, haz clic en **"Editar"** en el proyecto que desees
2. Modifica los campos necesarios
3. Haz clic en **"Actualizar Proyecto"**

### 🗑️ Eliminar Proyecto

1. En el listado, haz clic en **"Eliminar"**
2. Confirma la acción en el diálogo
3. El proyecto se eliminará permanentemente

## 📊 Estructura de Datos en Firestore

Cada proyecto tendrá esta estructura:

```json
{
  "title": "Nombre del Proyecto",
  "description": {
    "es": "Descripción en español",
    "en": "Description in English"
  },
  "imageUrl": "https://firebasestorage.googleapis.com/...",
  "type": "web",
  "technologies": ["React", "TypeScript", "Tailwind"],
  "link": "https://miproyecto.com",
  "comingSoon": false,
  "order": 1,
  "createdAt": "2025-12-19T..."
}
```

## 🔐 (Opcional) Paso 9: Seguridad Adicional

- ✅ Firebase configurado
- ✅ Firestore activo y reglas configuradas
- ✅ **Storage NO necesario** (usamos URLs de imágenes)
- ✅ Variables de entorno configuradas
- ✅ Proyecto se muestra en la página principal
- ✅ Los cambios en Firestore se reflejan automáticamente

## 🆘 Solución de Problemas

### Error: "Firebase: Error (auth/operation-not-allowed)"

- Verifica que las reglas de Firestore permitan lectura pública

### Error: "Failed to get document"

- Verifica que las variables de entorno estén correctamente configuradas
- Reinicia el servidor de desarrollo

### Las imágenes no se muestran

- Verifica que la URL sea pública y accesible
- Prueba abriendo la URL en una nueva pestaña del navegador
- Asegúrate de usar la URL directa de la imagen (termina en .jpg, .png, etc.)

### Firebase Storage requiere actualizar plan

- **No te preocupes**, este proyecto NO usa Storage
- Usa Imgur u otro servicio gratuito para las imágenes

### Los proyectos no aparecen

- Abre la consola del navegador (F12) para ver errores
- Verifica que Firebase esté correctamente inicializado
- Revisa que la colección se llame exactamente "projects"
