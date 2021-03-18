////weather api call
const request = require('request');

var getWeather = (lat, lon, callback) => {
    request({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=Give your APPCode`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            // console.log(body.main.temp)
            callback(undefined, {
                Temp: body.main.temp
            });
        } else {
            //console.log('unable to fetch weather');
            callback('unable to fetch weather');
        }

    });
};

module.exports.getWeather = getWeather;