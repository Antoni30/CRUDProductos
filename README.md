**Objetivo**: Desarrollar un sistema de inventario de bodega utilizando tecnologías de
desarrollo web front-end y back-end, integrando conceptos y herramientas aprendidas
durante el parcial.

## INDICACIONES

Para inicializar la aplicación:

1. Ingresamos a la carpeta donde se encuentra el programa y desde la terminal ejecutamos el siguiente comando:

```
  npm install o npm i 
```

Con esto, se cargarán las carpetas `node_modules`. 

Finalmente, ejecutamos el siguiente comando en la terminal:

```
  npx run dev 
```

Con esto ya deben estar corriendo el aplicativo web de manera local.

Finalmente, presionamos w para abrir la versión web de la aplicación.

## Aplicativo Web

### Autenticación con Firebase

Para la autenticación con firebase creamos un nuevo proyecto en la consola de firebase y habilitamos la autenticación con firebase. En este caso se utilizó la verificación por correo electrónico.

### Configuración del Proyecto React

Para utilizar la autenticación de firebase en un proyecto React instalamos todas las depencias necesarias que se especifica en la documentación de firebase con el siguiente resultado:

Luego, configuramos el documento “FirebaseApi.js” y establecemos las variables para la autenticación.

### Comprobación de la Autenticación

Una vez que la aplicación se está ejecutando de manera local obtenemos la siguiente interfaz:

En esta interfaz podemos iniciar sesión y también crear una cuenta. Para iniciar, ingresamos un correo y una contraseña y creamos una cuenta. Luego, al autenticador de firebase enviará un correo de verificación y el nuevo usuario aparecera en la consola de firebase:

Con esto, solo el usuario que esté registrado y autentificado con firebase podrá iniciar sesión.

Despues de iniciar sesion nos muestra una pagina donde se puede realizar operaciones de CRUD de productos.

