# echo-server-socketio

Ejemplo para montar el servidor de laravel-echo-server para una webapp independiente.

Es necesario configurar esta aplicacion mediante el archivo .env (se agrega ejemplo .env.example)

Se crea el archivo server.js donde se configura el servidor.

## Requisitos

Es necesario contar en el equipo de desarrollo instalado:

- npm
- nodejs 
- redis
- postman

## Instalacion de dependencias

```bash
#!/bin/bash
npm install
```

## Ejecucion

Es necesario tener un archivo .env, copiar o renombrar el .env.example a .env y correr el programa mediante

```bash
#!/bin/bash
npm start
```

## Prueba

Para realizar las pruebas de funcionamiento y validacion del servidor, se anexa el archivo
laravel-echo-server.postman_collection.json donde encontraran las funciones habilitadas para peticiones.
