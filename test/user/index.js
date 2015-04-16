var should  = require('should');
var assert  = require('assert');
var request = require('supertest');

var database = require("../../database/index.js");

var url = 'http://localhost:3000';
var uidreq = 2359;

describe('User', function() {

    //Mock Data
    var body =  {email: 'me@me.me', 
                 password: 'pw123', 
                 first_name: 'Tim', 
                 last_name: 'Richards'};


    describe('Creating a new user', function()
    {
        var user_id = "";

        before(function(done) 
        {
            database.user.dropUserDatabase(function()
            {
                done();
            });
        });

        it('/user [POST]', function(done) {
            request(url)
                .post('/user')
                .send(body)
                .end(function(err, res) {

                    console.log(res.body.data.user_id);

                    user_id = res.body.data.user_id;

                    res.body.status.should.equal('success');
                    done();
                });
        });

        it('/user/' + user_id + ' [GET]', function(done) {
            request(url)
                .get('/user/' + user_id)
                .end(function(err, res) {
                    if(err) return done(err);
                    res.body.status.should.equal('success');
                    res.body.data.should.have.properties('first_name', 'last_name', 'course_list');
                    done();
                });
        });
    });

    it('/user/ [DELETE]', function(done) {
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
