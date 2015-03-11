var express = require('express');
var router = express.Router();

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
        res.status(200).send({'status': 'success',
            'data': {
                'user_id': mock_uid
            }
        });
    }
    else {
        res.status(400).send({'status': 'fail',
            'data': {
                'title': 'Incorrect paramaters'
            }
        });
    }
});

//Get logged in user info
router.get('/', function(req,res) {
    res.status(200).send({'status': 'success',
        'data': {
            'first_name': mock_fname,
            'last_name': mock_lname,
            'course_list': mock_course_list
        }
    });
});

//Get user
router.get('/:user_id', function(req,res) {
    res.status(200).send({'status': 'success',
        'data': {
            'first_name': mock_fname,
            'last_name': mock_lname,
            'profile_picture': mock_profile_picture
        }
    });
});

//Edit user profile
router.put('/:user_id', function(req,res) {

    if(req.body.first_name) {
        //Update user first name in db
    }
    if(req.body.last_name) {
        //Update user last name in db
    }
    if(req.body.profile_picture) {
        //Update user profile pic in db
    }

    res.status(200).send({'status': 'success',
        'data': {

        }
    });
});

//Delete current user
router.delete('/', function(req,res) {

    //Delete user in database

    res.status(200).send({'status': 'success',
        'data': {

        }
    });

});

//Delete a user
router.delete('/:user_id', function(req,res) {

    //Delete user in database

    res.status(200).send({'status': 'success',
        'data': {

        }
    });

});

module.exports = router;
