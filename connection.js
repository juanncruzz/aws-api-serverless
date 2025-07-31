const mysql = require('mysql');

const configDB = {
    connectionLimit: 10,
    host: 'rds-curso.cpqyvyschedk.us-east-1.rds.amazonaws.com',
    user: 'Curso',
    password: 'serverless',
    port: '3306',
    database: 'RDScurso',
    debug: true
};

var  pool = mysql.createPool(configDB);

module.exports = pool;