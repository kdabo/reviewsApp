var moment = require('moment');

function getGeneralRatingAverage(reviews) {
    const total = reviews.reduce((prev, review) => {
        return prev + review.ratings.general.general * getWeightValue(review.entryDate);
    }, 0);
    return total / reviews.length;
}

function getTraveledWithAverage(reviews) {
    var eachTraveledWith = {};
    var totalTraveledWith = {};
    reviews.forEach(review => {
        var key = review.traveledWith;
        eachTraveledWith[key] = (eachTraveledWith[key] || 0) + review.ratings.general.general * getWeightValue(review.entryDate);
        totalTraveledWith[key] = (totalTraveledWith[key] || 0) + 1;
    });
    const keys = Object.keys(eachTraveledWith);
    keys.forEach(function (key) {
          eachTraveledWith[key] = eachTraveledWith[key] / totalTraveledWith[key] ;
    });
    return eachTraveledWith;
}

function getEachRatingAspectAverage(reviews) {
    reviews.forEach(function (review) {
        const aspectKeys = Object.keys(review.ratings.aspects);
        var aspectAverage = 0;
        aspectKeys.forEach(function (key) {
            const aspect = review.ratings.aspects[key];
            aspectAverage = aspectAverage + aspect * getWeightValue(review.entryDate);
        });
        review.ratings.eachRatingAspectAverage = aspectAverage / aspectKeys.length;
    });
}

function getWeightValue(reviewDate) {
    const currentYear = moment();
    const yearOfReview = moment(reviewDate);
    const difference = currentYear.diff(yearOfReview, 'years');
    if (difference >= 5) {
        return 0.5;
    }
    return 1 - difference * 0.1;
}


module.exports.getGeneralRatingAverage = getGeneralRatingAverage;
module.exports. getTraveledWithAverage = getTraveledWithAverage;
module.exports.getEachRatingAspectAverage = getEachRatingAspectAverage;
module.exports.getWeightValue = getWeightValue;

