var express = require('express');
var router = express.Router();

var database = require("../../database/index.js");

//Add module routes
require('./bookmark').setup(router);
require('./notification').setup(router);

/*-----MOCK DATA-------*/
var mock_uid = '2394798792';
var mock_fname = 'Jane';
var mock_lname = 'Doe';
var mock_course_list = [{'name': 'CS497S Scalable Web Systems', 'id': '2348276591'}];
var mock_profile_picture = 'http://faculty.sites.uci.edu/ltemplate/files/2011/04/generic_profile.jpg';
/*-----MOCK DATA-------*/

//Create an account
router.post('/', function(req,res) {
    //Check if all required parameters are present
    if(req.body.email && req.body.password && req.body.first_name && req.body.last_name) {
        /*res.send({'status': 'success',
            'data': {
                'user_id': mock_uid
            }});*/

            database.user.createUser(req.body.email,req.body.password,req.body.first_name + req.body.last_name,"student", function(err)
                {
                    if(err == undefined)
                        res.send("User was created");
                    else
                        res.send(err);
                });

        /*---------------------------------------

        Send verification email to req.body.email

        ---------------------------------------*/
    }
    else {
        res.send({'status': 'fail',
            'data': {
                'title': 'Incorrect parameters'
            }
        });
    }
});

//Get logged in user info
router.get('/', function(req,res) {

    //55281ac4b87a13db50f8da7a

    var user_id = req.session.user_id;

    database.user.getUserById(user_id, function(err, user)
    {
        if(err)
            res.send(err);
        else
            res.send(user);
    });



    /*res.send({'status': 'success',
        'data': {
            'first_name': mock_fname,
            'last_name': mock_lname,
            'course_list': mock_course_list
        }
    });*/
});

//Delete current user
router.delete('/', function(req,res) {

    //Delete user in database

    res.send({'status': 'success'});
});

//Get user
router.get('/:user_id', function(req,res) {

    //Get user info from database

    console.log(JSON.stringify(req.params) + " : " + JSON.stringify(req.body));

    if(req.params.user_id == undefined)
    {
        res.send({'status': 'fail',
        'data': {
            'message' : 'No valid user_id parameter'
        }});
    }

    database.user.getUserById(req.params.user_id, function(err, user)
    {
        if(err)
            res.send(err);
        else
            res.send(user);
    });

    /*res.send({'status': 'success',
        'data': {
            'first_name': mock_fname,
            'last_name': mock_lname,
            'profile_picture': mock_profile_picture
        }
    });*/
});

//Edit user profile
router.put('/:user_id', function(req,res) {

    //Edit user in database

    res.send({'status': 'success'});
});

//Delete a user
router.delete('/:user_id', function(req,res) {

    //Delete user in database

    res.send({'status': 'success'});
});

module.exports = router;
