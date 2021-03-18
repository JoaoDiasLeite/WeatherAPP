const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const path = require('path');



module.exports = () => {
    const app = express();

    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));

    // MIDDLEWARES

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(express.static(path.join(__dirname, '/')));


    return app;
};