const express = require('express');
const app = express()
    //var unirest = require("unirest");
var axios = require("axios").default;
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path');

//Config
//Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));





/*
app.get('/:city', (req, res) => {
    const id = req.params.city;
    var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: id,
            units: 'metric'
        },
        headers: {
            'x-rapidapi-key': '733f49e96dmsh69ee05389121cfep136ffbjsn8df7c63fdc22',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    };
    axios.request(options).then(function(response) {
        console.log(response.data);
        return res.json(response.data);

        // console.log(response.body);
    }).catch(function(error) {
        console.error(error);
        return res.send("Cidade não existe!");

    });
});*/
app.post('/', (req, res) => {
    const note = { city: req.body.city };
    var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: req.body.city,
            units: 'metric'
        },
        headers: {
            'x-rapidapi-key': '733f49e96dmsh69ee05389121cfep136ffbjsn8df7c63fdc22',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    };
    axios.request(options).then(function(response) {
        console.log(response.data);
        return res.json(response.data);

        // console.log(response.body);
    }).catch(function(error) {
        console.error(error);
        return res.send("Cidade não existe!");

    });
})








app.listen(8080, function() {
    console.log("Servidor a funcionar!")
});