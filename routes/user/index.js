var express = require('express');
var router = express.Router();

//Add module routes
require('./bookmark').setup(router);
require('./notification').setup(router);

//Create an account
router.post('/', function(req,res) {

});

//Get logged in user info
router.get('/', function(req,res) {

});

//Get user
router.get('/:user_id', function(req,res) {
    var user_id = req.params.user_id;

});

//Edit user profile
router.put('/:user_id', function(req,res) {
    var user_id = req.params.user_id;

});

//Delete user
router.delete('/:user_id', function(req,res) {
    var user_id = req.params.user_id;

});

module.exports = router;
