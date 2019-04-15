var express = require('express');
var OAuth = require('oauth');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var weather = 'help';
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
              // console.log(data)

              res.render('pages/home', {
                weatherData: JSON.parse(data)
              });
          }
      }
  );

  JSON.stringify(weather)

  
});

module.exports = router;
