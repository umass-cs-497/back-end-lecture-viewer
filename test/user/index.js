var should  = require('should');
var assert  = require('assert');
var request = require('supertest');

var url = 'http://localhost:3000';
var uidreq = 2359;

describe('/user', function() {

    //Mock Data
    var body =  {email: 'me@me.me', 
                 password: 'pw123', 
                 first_name: 'Tim', 
                 last_name: 'Richards'};

    it('/ [POST]', function(done) {
        request(url)
            .post('/user')
            .send(body)
            .end(function(err, res) {
                res.body.status.should.equal('success');
                done();
            });
    });

    it('/ [GET]', function(done) {
        request(url)
            .get('/user')
            .end(function(err, res) {
                if(err) return done(err);
                res.body.status.should.equal('success');
                res.body.data.should.have.properties('first_name', 'last_name', 'course_list');
                done();
            });
    });

    it('/ [DELETE]', function(done) {
        request(url)
            .delete('/user/')
            .end(function(err, res) {
                if(err) return done(err);
                res.body.status.should.equal('success');
                done();
            });
    });

    it('/:user_id [GET]', function(done) {
        request(url)
            .get('/user/'+uidreq)
            .end(function(err, res) {
                if(err) return done(err);
                res.body.status.should.equal('success');
                res.body.data.should.have.properties('first_name', 'last_name');
                done();
            });
    });

    it('/:user_id [PUT]', function(done) {
        request(url)
            .put('/user/'+uidreq)
            .end(function(err, res) {
                if(err) return done(err);
                res.body.status.should.equal('success');
                done();
            });
    });

    it('/:user_id [DELETE]', function(done) {
        request(url)
            .delete('/user/'+uidreq)
            .end(function(err, res) {
                if(err) return done(err);
                res.body.status.should.equal('success');
                done();
            });
    });
});
