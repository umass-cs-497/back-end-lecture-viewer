var should  = require('should');
var assert  = require('assert');
var request = require('supertest');

var url = 'http://localhost:3000';

describe('User', function() {
    describe('/ [POST]', function() {
        it('Should return success and user id', function(done) {
            var body =  {email: 'me@me.me', 
                         password: 'pw123', 
                         first_name: 'Tim', 
                         last_name: 'Richards'};
            request(url)
                .post('/user')
                .send(body)
                .expect(200, done);
        });
    });
});
