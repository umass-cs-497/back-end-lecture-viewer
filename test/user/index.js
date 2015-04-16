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


    describe('Creating cases', function()
    {
        var test_user = {email: 'good@email.com', 
                 password: 'pw123', 
                 first_name: 'Tim', 
                 last_name: 'Richards'};

        var bad_email_user = JSON.parse(JSON.stringify(test_user));
        bad_email_user.email = "bad@email@email.com";

        var missing_email_user = JSON.parse(JSON.stringify(test_user));
        missing_email_user.email = undefined;

        var missing_password_user = JSON.parse(JSON.stringify(test_user));
        missing_password_user.password = undefined;

        it('Create bad email user', function(done) {
            request(url)
                .post('/user')
                .send(bad_email_user)
                .end(function(err, res) {
                    res.body.status.should.equal('fail');
                    res.body.data.message.should.equal('Not a valid email address');
                    done();
                });
        });

        it('Create missing email user', function(done) {

            request(url)
                .post('/user')
                .send(missing_email_user)
                .end(function(err, res) {
                    res.body.status.should.equal('fail');
                    res.body.data.message.should.equal('Incorrect parameters');
                    done();
                });
        });

        it('Create missing password user', function(done) {

            request(url)
                .post('/user')
                .send(missing_password_user)
                .end(function(err, res) {
                    res.body.status.should.equal('fail');
                    res.body.data.message.should.equal('Incorrect parameters');
                    done();
                });
        });
    });

    describe('Creating and deleting(by admin) a new user', function()
    {
        var testUser = {
            email: 'test@email.com', 
            password: 'password', 
            first_name: 'Test', 
            last_name: 'User'
        }

        var user_id = "";

        before(function(done) 
        {
            database.user.dropUserDatabase(function()
            {
                done();
            });
        });

        it('Creating user', function(done) {
            request(url)
                .post('/user')
                .send(testUser)
                .end(function(err, res) {

                    user_id = res.body.data.user_id;

                    res.body.status.should.equal('success');
                    done();
                });
        });

        it('Retrieving user', function(done) {
            request(url)
                .get('/user/' + user_id)
                .end(function(err, res) {
                    if(err) return done(err);
                    res.body.status.should.equal('success');

                    var user = res.body.data;

                    user.should.have.properties('first_name', 'last_name', 'user_id');
                    user.first_name.should.equal(testUser.first_name);
                    user.last_name.should.equal(testUser.last_name);
                    user.user_id.should.equal(user_id);


                    done();
                });
        });

        it('Deleting user', function(done) {
        request(url)
            .delete('/user/' + user_id)
            .end(function(err, res) {
                if(err) return done(err);
                res.body.status.should.equal('success');
                done();
            });
        });
    });

    
    it('Delete a user invalid id', function(done) {
        request(url)
            .delete('/user/wgfiui3uf7gu3iguu')
            .end(function(err, res) {
                if(err) return done(err);
                res.body.status.should.equal('fail');
                res.body.data.message.should.equal('user_id provided is not a valid user_id');
                done();
            });
    });

    /*
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

    */
});
