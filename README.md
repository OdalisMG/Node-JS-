# Node-JS
Correo Electronico: Godalis64@gmail.com
Nombre: Odalis Magdalena Garcia Pincay

Rubrica de proyecto
Para el desarrollo del proyecto final, será necesario la aplicación de los
conceptos visto en clases y videos sobre:

• Instalación de módulos NPM
• Endpoints (Modelos, controladores, router)
• Uso de colecciones de mongo

Requerimientos:

1. Crear CRUD de usuario el cual debe tener (nombre, edad,
email, pass)
2. Desarrollar la lógica de login la cual debe de contar de 2
endpoints uno de /login permitirá realizar login recibiendo email y
contraseña las cuales deben estar almacenadas en base de datos
para su consultas
3. /logout permitirá cerrar la sesión de un usuario
Usar para la lógica de login JWT que les permite crear tokens de
usuario y enviarlo en sus header de peticiones.
4. Crear un middleware capaz de validar si un usuario está logueado
o no y si el token es válido en base de datos.
5. Proteger los endpoints hechos en clase con un middleware
de validación (Creado en el punto 4)
6. Encriptar sus password en base de datos con uso de algún
módulo como bcrypt y comparar en login
7. Opcional crear un endpoint con respuesta con cache en redes
8. Opcional crear un proceso en un enpoint que haga uso de las
colas con Bull js

Rúbrica de Evaluación - Proyecto Final Node.js

Arranque inicial (10%)
MongoDB (20%)
Controladores (20%)
Token (20%)
CRUD (30%)
Extra (Encriptado) (10%)
