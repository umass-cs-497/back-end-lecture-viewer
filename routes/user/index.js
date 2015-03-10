var express = require('express');
var router = express.Router();

//Add module routes
require('./bookmark').setup(router);
require('./notification').setup(router);

/*-----MOCK DATA-------*/
var uid = '2394798792';
var fname = 'Jane';
var lname = 'Doe';
var course_list = [{'name': 'CS497S Scalable Web Systems', 'id': '2348276591'}];
var profile_picture = 'http://faculty.sites.uci.edu/ltemplate/files/2011/04/generic_profile.jpg';
/*-----MOCK DATA-------*/

//Create an account
router.post('/', function(req,res) {
    //Check if all required parameters are present
    if(req.body.email && req.body.password && req.body.first_name && req.body.last_name) {
        res.send({'status': 'success', 'data': {'user_id': uid}});
    }
    else {
        res.send({'status': 'fail', 'data': {'title': 'Incorrect paramaters'}});
    }
});

//Get logged in user info
router.get('/', function(req,res) {
    res.send({'status': 'success',
        'data': {
            'first_name': fname,
            'last_name': lname,
            'course_list': course_list
        }
    });
});

//Get user
router.get('/:user_id', function(req,res) {
    var user_id = req.params.user_id;
    res.send({'status': 'success',
        'data': {
            'first_name': fname,
            'last_name': lname,
            'profile_picture': profile_picture
        }
    });
});

//Edit user profile
router.put('/:user_id', function(req,res) {
    var user_id = req.params.user_id;

    if(req.body.fname) {
        //Update user first name in db
    }
    if(req.body.lname) {
        //Update user last name in db
    }
    if(req.body.profile_picture) {
        //Update user profile pic in db
    }

    res.send({'status': 'success',
        'data': {
            
        }
    });
});

//Delete user
router.delete('/:user_id', function(req,res) {
    var user_id = req.params.user_id;

    //Delete user in database

    res.send({'status': 'success',
        'data': {
            
        }
    });

});

module.exports = router;
