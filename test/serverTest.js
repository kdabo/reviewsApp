var request = require('supertest');

describe('server', function () {
    var server;
    beforeEach(function () {
        server = require('../server');
    });
    afterEach(function () {
        server.close();

    });

    it('should have valid API response on /reviews', function testSlash(done) {
        request(server)
            .get('/reviews')
            .expect(200)
            .expect(function (res) {
                res.body.generalRatingAverage.should.exist();
                res.body.traveledWithAverage.should.exist();
                res.body.reviews.should.exist();
            }, done());
    });

});
