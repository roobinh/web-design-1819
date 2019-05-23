var createError = require('http-errors');
var express = require('express');
var path = require('path');
var OAuth = require('oauth');
var fs = require('fs')

var app = express();
var port = process.env.PORT || 1500

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.get('/', function(req, res, next) {
    res.redirect('/home/0');
})

app.get('/home', function(req, res, next) {
    res.redirect('/home/0');
})

app.get('/home/:day', function(req, res, next) {

    var rainfallJSON = fs.readFileSync("./public/json/rainfall.json");

    var header = {
        "X-Yahoo-App-Id": "8B56mn42"
    };

    var request = new OAuth.OAuth(
        null,
        null,
        'dj0yJmk9Q2ZxTHh1WXVNbGtCJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTUz',
        '98c6dd79297ccb87213d84bcdcc9ac89d5f27317',
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
    );
  
    request.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=amsterdam,nl&format=json&u=c',
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err);
            } else {
                res.render('pages/home', {
                    weatherData: JSON.parse(data),
                    rainfall: JSON.parse(rainfallJSON),
                    day: req.params.day
                });
            }
        }
  );
})


module.exports = app;

app.listen(port, () => console.log(`App running, listening on port ${port}!`))