const express = require('express');
const app = express()
var unirest = require("unirest");
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path');

//Config
//Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
    //app.use(bodyParser.json);
app.use(express.static(path.join(__dirname, '/')));

//Rota
app.get("/", function(req, res) {
    res.render('form')
});

app.post("/temp", function(req, res) {

    var requ = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");

    requ.query({
        "q": req.body.city,
        "lat": "0",
        "lon": "0",
        "callback": null,
        "id": "2172797",
        "lang": "null",
        "units": "metric",
        "mode": "html"
    });

    requ.headers({
        "x-rapidapi-key": "733f49e96dmsh69ee05389121cfep136ffbjsn8df7c63fdc22",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "useQueryString": true
    });



    requ.end(function(resi) {
        if (resi.error) throw new Error(resi.error);


        console.log(resi.body);
        res.send(resi.body);
    });








});


app.listen(8081, function() {
    console.log("Servidor a funcionar!")
});