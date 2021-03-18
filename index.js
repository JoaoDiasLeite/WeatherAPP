const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var weather = require('openweather-apis');
const handlebars = require('express-handlebars')
let apiKey = 'dfa5b376003b9126e38d7b566599a43';
const path = require('path');


app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
    //app.use(bodyParser.json);
app.use(express.static(path.join(__dirname, '/')));

app.get("/", function(req, res) {
    res.render('form')
});


app.post("/", function(req, res) {

    weather.setAPPID(apiKey);
    weather.setUnits('metric');
    weather.setCity(req.body.city);
    weather.getTemperature(function(err, temp) {
        //res.send('<h1>Cidade Não Existe no Sistema</h1>')
        res.send('<h1>' + req.body.city + '</h1><h4>' + temp + '</h4>');

    });
});

app.listen(8000, function() {
    console.log("Servidor a funcionar!")
});