var should  = require('should');
var assert  = require('assert');
var request = require('supertest');

var url = 'localhost:3000';

describe('User', function() {
    describe('/ [POST]', function() {
        it('Should return success and user id', function(done) {
            request(url)
                .post('/user')
                .send({email: 'me@me.me', password: 'pw123', first_name: 'Tim', last_name: 'Richards'})
                .end(function(err, res) {
                    if(err)
                        throw err;
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
