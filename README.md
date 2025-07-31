# aws-api-serverless

Este proyecto implementa una API REST serverless en AWS utilizando Node.js y el framework Serverless. El objetivo principal es exponer operaciones CRUD (crear, leer, actualizar y eliminar) sobre una base de datos MySQL alojada en Amazon RDS, a través de funciones Lambda desplegadas en una VPC.

## Estructura del Proyecto

- **connection.js**: Configura y exporta un pool de conexiones MySQL para interactuar con la base de datos RDS.
- **handlers/**: Contiene las funciones Lambda que implementan los endpoints de la API:
  - `handlerRDSTestconnection.js`: Prueba la conexión con la base de datos.
  - `handlerRDScreate.js`: Inserta nuevos registros.
  - `handlerRDSupdate.js`: Actualiza registros existentes.
  - `handlerRDSdelete.js`: Elimina registros.
  - `handlerRDSselect.js`: Consulta registros por ID.
- **serverless.yml**: Define la configuración del servicio, los recursos de AWS utilizados (VPC, subredes, security groups) y los endpoints HTTP expuestos por cada función Lambda.
- **package.json**: Especifica las dependencias del proyecto, principalmente el paquete `mysql` para Node.js.

## Endpoints Disponibles

- `GET /RDSconnection/RDSTestconnection`: Prueba la conexión con la base de datos.
- `POST /RDSconnection/RDScreate`: Crea un nuevo registro.
- `PUT /RDSconnection/RDSupdate/{id}`: Actualiza un registro existente por ID.
- `DELETE /RDSconnection/RDSdelete/{id}`: Elimina un registro por ID.
- `GET /RDSconnection/RDSselect/{id}`: Consulta un registro por ID.

## Despliegue

El proyecto utiliza el framework Serverless para desplegar las funciones Lambda y la configuración necesaria en AWS. Asegúrate de tener configuradas tus credenciales de AWS y ejecuta:

```sh
serverless deploy
```

## Requisitos

- Node.js 12.x
- AWS CLI configurado
- Permisos para desplegar recursos Lambda, VPC y RDS en AWS

## Notas

- La conexión a la base de datos está configurada en `connection.js` con los parámetros de acceso a un RDS MySQL.
- Las funciones Lambda se ejecutan dentro de una VPC para acceder de forma segura a la base de datos.