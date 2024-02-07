# Evaluación Práctica Desarrollo de un Sistema de Inventario de Bodega

<aside>
  📖 Universidad de las Fuerzas Armadas - ESPE<br>
  Realizado por:<br>
  ✅ Cristian Tello <br>
  ✅ Camila Morales<br>
  ✅ Antoni Toapanta<br>
  6 de febrero de 2024  <br>
  🖥️ Desarrollo Web Avanzado - NRC: 14956 <br>
  🖥️ Docente: **Lcdo. Diego Medardo Saavedra García. Mgtr.** <br>
  🖥️ Proyecto: https://github.com/Antoni30/CRUDProductos.git <br>
</aside>

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
habilitamos la autenticación con firebase. En este caso se utilizó la verificación por correo electrónico.

![Imagen Firebase](./img/firebase.png)


### Configuración del Proyecto React

Para utilizar la autenticación de firebase en un proyecto React instalamos todas las depencias necesarias que se especifica en la documentación de firebase con el siguiente resultado:

![Imagen Firebase](./img/package.png)

Luego, configuramos el documento “FirebaseApi.js” y establecemos las variables para la autenticación.

![Imagen Firebase](./img/firebaseapi.png)

### Comprobación de la Autenticación

Una vez que la aplicación se está ejecutando de manera local obtenemos la siguiente interfaz:

![Imagen Firebase](./img/mainpage.png)

En esta interfaz podemos iniciar sesión y también crear una cuenta. Para iniciar, ingresamos un correo y una contraseña y creamos una cuenta. Luego, al autenticador de firebase enviará un correo de verificación y el nuevo usuario aparecera en la consola de firebase:

![Imagen Firebase](./img/firebase.png)

Con esto, solo el usuario que esté registrado y autentificado con firebase podrá iniciar sesión.

Despues de iniciar sesion nos muestra una pagina donde se puede realizar operaciones de CRUD de productos.

![Imagen Firebase](./img/productos.png)

