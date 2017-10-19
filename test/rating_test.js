const fs = require('fs');
const assert = require('assert');
var rating = require('../rating.js');

const moment = require('moment');
describe('rating', function () {
    it('should calculate general rating average of the accommodation', function testSlash(done) {
        //read json
        var contents = fs.readFileSync(__dirname + '/../public/reviews.json').toString();
        const reviews = JSON.parse(contents);
        const generalRatingAverage = rating.getGeneralRatingAverage(reviews);
        assert.equal(generalRatingAverage > 0, true);
        done();
    });

    it('should calculate average of each of the rating aspects of the accommodation', function testSlash(done) {
        var contents = fs.readFileSync(__dirname + '/../public/reviews.json').toString();
        const reviews = JSON.parse(contents);
        rating.getEachRatingAspectAverage(reviews);
        reviews.forEach(function (review) {
            assert.equal(review.ratings.eachRatingAspectAverage > 0, true);
        });
        done();
    });

    it('should calculate average of each travelWith of the accommodation', function testSlash(done) {
        var contents = fs.readFileSync(__dirname + '/../public/reviews.json').toString();
        const reviews = JSON.parse(contents);
        var travelWithAverage = rating.getTraveledWithAverage(reviews);
        var keys = Object.keys(travelWithAverage);
        keys.forEach(function (key) {
            assert.equal(travelWithAverage[key] > 0, true);
        });
        done();
    });

    it('should get the review weight 0.5 value for the review older than 5 years', function testSlash(done) {
        const yearOfReview = moment().subtract(5, 'years');
        const weightValue = rating.getWeightValue(yearOfReview);
        assert.equal(weightValue === 0.5, true);
        done();
    });

    it('should get the review weight 0.8 for the review younger than 2 years', function testSlash(done) {
        const yearOfReview = moment().subtract(2, 'years');
        const weightValue = rating.getWeightValue(yearOfReview);
        assert.equal(weightValue === 0.8, true);
        done();
    });

    it('should get the review weight 0.6 for the review younger than 5 years', function testSlash(done) {
        const yearOfReview = moment().add(1, 'day').subtract(5, 'years');
        const weightValue = rating.getWeightValue(yearOfReview.valueOf());
        assert.equal(weightValue === 0.6, true);
        done();
    });
});
