# SES - Envío de Emails con AWS SES y Serverless

Este proyecto implementa una API serverless en AWS para el envío de correos electrónicos utilizando AWS Simple Email Service (SES), Node.js y el framework Serverless. Las funciones Lambda permiten enviar emails de manera sencilla y escalable.

## Estructura del Proyecto

- **sendEmail.js**: Contiene la lógica para enviar correos electrónicos usando AWS SES.
- **handlers/**: Carpeta donde puedes agregar más funciones Lambda relacionadas con el envío de emails.
- **serverless.yml**: Configura el servicio, los recursos de AWS necesarios y los endpoints HTTP expuestos por las funciones Lambda.
- **package.json**: Especifica las dependencias del proyecto, principalmente `aws-sdk` para Node.js.

## Endpoints Disponibles

- `POST /sendEmail`: Envía un correo electrónico a través de AWS SES. El cuerpo de la petición debe incluir los campos necesarios como destinatario, asunto y mensaje.

## Despliegue

El proyecto utiliza el framework Serverless para desplegar las funciones Lambda y la configuración necesaria en AWS. Asegúrate de tener configuradas tus credenciales de AWS y ejecuta:

```sh
serverless deploy
```

## Requisitos

- Node.js 12.x o superior
- AWS CLI configurado
- Permisos para desplegar funciones Lambda y utilizar AWS SES

## Notas

- La configuración de AWS SES (dominios y emails verificados) debe estar realizada previamente en la consola de AWS SES.
- Puedes modificar `sendEmail.js` para personalizar el formato del correo o agregar funcionalidades adicionales.
- Revisa `serverless.yml` para ajustar los permisos y