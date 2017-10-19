var express = require('express');
var fs = require('fs');
var rating = require('./rating');

var app = express();
var public_path = express.static(__dirname + '/public');
var port = 4000;


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(public_path);


app.get('/reviews', (req, res) => {
    const contents = fs.readFileSync(__dirname + '/public/reviews.json').toString()
    const reviews = JSON.parse(contents);

    const generalRatingAverage = rating.getGeneralRatingAverage(reviews);
    const traveledWithAverage = rating.getTraveledWithAverage(reviews);

    rating.getEachRatingAspectAverage(reviews);

    res.send({generalRatingAverage: generalRatingAverage, traveledWithAverage: traveledWithAverage, reviews: reviews});
});

const server = app.listen(port, () => {
    const port = server.address().port;
    console.log('App listening at port %s', port);
});

module.exports = server;
