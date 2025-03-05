

# dev

1. Clonar el archivo env.template a .env
2. Configurar las variables de entorno
3. Ejecutar el comando ```npm install```
4. Levantar las bases de datos con el comando
```
docker compose up -d
```
5. Ejecutar el comando
```
npx prisma migrate dev
```
6.Ejecutar npm run dev


//Errores experimentados

- MongooseError: The uri parameter to openUri() must be a string, got "undefined". Make sure the first parameter to
    Faltaba el setupTests
- No creaba carpeta de mongo
    En el docker:test editar el comando quitandole el fichero de las bases de datos de test
- No detectaba base de datos NOC
    O faltaba levantar el docker o algun comando tipo build o start junto con borrar carpetas de mongo y contenedores en docker
