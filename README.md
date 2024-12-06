# **Guía para Configurar Factum con Next.js**

---

## **1. Instalación del Proyecto**

### Pasos:

1. **Instalar dependencias**  
   Ejecuta en tu terminal:
   ```bash
   npm install
   # o
   yarn install
   ```

2. **Crear archivo de configuración**  
   Crea un archivo `.env.local` en la raíz del proyecto y agrega las variables de entorno necesarias (ver sección de configuración).

3. **Ejecutar el proyecto**  
   Inicia el entorno de desarrollo con:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

---

## **2. Generar una Contraseña de Aplicación en Gmail**

Para permitir que tu proyecto envíe correos electrónicos mediante **Nodemailer** y Gmail, debes generar una contraseña específica para la aplicación:

### Instrucciones:

1. **Accede a tu cuenta de Google:**  
   Ve a [https://myaccount.google.com/](https://myaccount.google.com/).

2. **Busca la opción "Contraseñas de Aplicación":**  
   En la barra de búsqueda, escribe *App Passwords* o *Contraseñas de Aplicación*.

3. **Configura la contraseña:**  
   - Selecciona el nombre de la aplicación (por ejemplo, "Factum").
   - Se generará una contraseña específica del tipo `qvxr jzhx axpk nxif`.

4. **Agrega la contraseña a tu proyecto:**  
   Copia la contraseña generada y pégala como valor en la variable `EMAIL_PASS` de tu archivo `.env.local`.

5. **Guarda y finaliza:**  
   Haz clic en "Done" o "Finalizar" en la ventana de Google.

---

## **3. Configuración del Archivo `.env.local`**

Crea o actualiza el archivo `.env.local` en la raíz del proyecto con las siguientes variables de entorno:

```plaintext
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=contraseña-específica-de-aplicación
TO_EMAIL=email-que-recibirá-los-correos
EMAIL_RATE_LIMIT=2 # Número de envíos permitidos por IP
```

---

## **4. Cambiar Textos de la Aplicación**

### Archivos de texto:

- Español: `src/i18n/locales/es.ts`
- Inglés: `src/i18n/locales/en.ts`
- Portugués: `src/i18n/locales/pt.ts`

Actualiza las cadenas de texto correspondientes en el archivo del idioma deseado.

---

## **5. Configuración general del sitio**

### Configuración de la página de inicio

En el archivo `src/config/site.ts`, encontraras las siguientes variables de configuración:

- metadata
- estadísticas en home
- clientes

## **6. Icon**

El icono de la aplicación se puede personalizar editando el archivo `src/app/favicon.ico`.
