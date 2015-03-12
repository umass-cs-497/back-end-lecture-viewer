var should  = require('should');
var assert  = require('assert');
var request = require('supertest');

var url = 'http://localhost:3000';

describe('/user', function() {

    //POST /user
    describe('/ [POST]', function() {

        //Mock Data
        var body =  {email: 'me@me.me', 
                     password: 'pw123', 
                     first_name: 'Tim', 
                     last_name: 'Richards'};

        it('Should successfully create a new user in the database', function(done) {
            request(url)
                .post('/user')
                .send(body)
                .end(function(err, res) {
                    res.body.status.should.equal('success');
                    done();
                });
        });
    });

    //GET /user
    describe('/ [GET]', function() {
        it('Should return an object with user info', function(done) {
            request(url)
                .get('/user')
                .end(function(err, res) {
                    if(err) return done(err);
                    res.body.status.should.equal('success');
                    res.body.data.should.have.properties('first_name', 'last_name', 'course_list');
                    done();
                });
        });
    });
});
