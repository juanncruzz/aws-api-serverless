'use strict';
const AWS = require('aws-sdk');

const ses = new AWS.SES({
  region: 'us-east-1' // region donde esta configurado el servicio SES
});

module.exports.deleteEmailTemplate = (event, context, callback) => {
  const data = JSON.parse(event.body);

  var params = {
    TemplateName: data.TemplateName
  };

  ses.deleteTemplate(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 400,
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          success: false,
          message: 'Template NO eliminado',
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
        message: 'Template eliminado correctamente',
        data_params: params
      }),
    };
    callback(null, response);
  });
};