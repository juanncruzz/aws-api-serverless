'use strict';
const AWS = require('aws-sdk');

const ses = new AWS.SES({
  region: 'us-east-1' // region donde esta configurado el servicio SES
});

module.exports.sendEmailUsingTemplate = (event, context, callback) => {
  const data = JSON.parse(event.body);
  var templatename = data.TemplateName;
  var destination = data.ToEmail;
  var sustitutiondata = JSON.stringify(data.TemplateData)

  var params = {
    Destination: {
      ToAddresses: [
        destination
      ]
    },
    Source: 'saludo@serverless123.com',
    Template: templatename,
    TemplateData: sustitutiondata
  };
  ses.sendTemplatedEmail(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 400,
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          success: false,
          message: 'Email usando template no enviado',
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
        message: 'Email usando template enviado correctamente',
        data_params: params
      }),
    };
    callback(null, response);
  });
};