'use strict';
const AWS = require('aws-sdk');

const ses = new AWS.SES({
  region: 'us-east-1' // region donde esta configurado el servicio SES
});

module.exports.sendEmailParams = (event, context, callback) => {
  const data = JSON.parse(event.body);
  var params = {
    Destination: { /* REQUERIDO */
      // CC emails: [
      //   ,
      //   /* emails */
      // ],
      ToAddresses: [
        data.ToEmail,
        /* emails */
      ]
    },
    Message: { /* REQUERIDO */
      Body: { /* REQUERIDO */
        Html: {
         Charset: "UTF-8",
         Data: "<h1> Hola </h1> <p> {{data.name}} </p>" 
        },
       },
       Subject: {
        Charset: 'UTF-8',
        Data: 'Email de registo - Serverless123' 
       }
      },
    Source: 'hola@serverless123.com', /* REQUERIDO */

  };


  ses.sendEmail(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 400,
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          success: false,
          message: 'Email no enviado',
          message2: error.message
        }),
      });
      return;
    }
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Email enviado correctamente'
      }),
    };
    callback(null, response);
    

  });

};