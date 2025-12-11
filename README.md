# technical-test-DyD
Prueba técnica con Vue + Vite desplegada en Firebase. En la que se muestran características del framework y funcionalidades de carga, descompresión, registro y descarga segura de archivos usando Storage, Firestore y backend de Firebase

Demo del proyecto:
https://technical-test-dyd-f45b1.web.app/home

------------------------------------------------------------
🚀 TECNOLOGÍAS USADAS
------------------------------------------------------------

FRONTEND
- Vue 3 (Composition API)
- Vite
- Firebase Web SDK (Auth, Storage, Firestore)
- CSS

BACKEND
- Node.js + Express
- Firebase Admin SDK
- CORS

CLOUD
- Firebase Hosting
- Firebase Storage

------------------------------------------------------------
▶️ CÓMO CORRER EL PROYECTO
------------------------------------------------------------

1. Clonar el repositorio
   git clone https://github.com/<TU_USUARIO>/technical-test-DyD.git
   cd technical-test-DyD

------------------------------------------------------------
🖥️ FRONTEND (Vue + Vite)
------------------------------------------------------------

Ubicación: technical-test/

Instalar dependencias:
   npm install

Ejecutar en desarrollo:
   npm run dev

Frontend disponible en:
   http://localhost:5173

------------------------------------------------------------
🛠 BACKEND (Node + Express)
------------------------------------------------------------

Ubicación: technical-test/server/

Instalar dependencias:
   cd server
   npm install

Ejecutar backend:
   node index.js

Backend disponible en:
   http://localhost:5000

IMPORTANTE:
Debes incluir el archivo:
   server/service-account.json

------------------------------------------------------------
☁️ DEPLOY EN FIREBASE HOSTING
------------------------------------------------------------

Desde la raíz del proyecto:

   firebase deploy

Esto publica el frontend en Firebase Hosting.

------------------------------------------------------------
🔐 FUNCIONALIDADES PRINCIPALES
------------------------------------------------------------

- Subida de archivos ZIP desde el frontend
- Envío al backend para descompresión
- Almacenamiento en Firebase Storage
- Registro en Firestore
- Descarga segura mediante clave usando /download
- Autenticación anónima en el frontend

