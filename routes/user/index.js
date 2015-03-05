var express = require('express');
var router = express.Router();

var bookmark = require('./bookmark');
var notification = require('./notification');

bookmark.setup(router);
notification.setup(router);

//Create an account
router.post('/', function(req,res) {
    
});

//Get logged in user info
router.get('/', function(req,res) {
    
});

//Get user
router.get('/:id', function(req,res) {
    var uid = req.params.id;
    
});

//Edit user profile
router.put('/:id', function(req,res) {
    var uid = req.params.id;
    
});

//Delete user
router.delete('/:id', function(req,res) {
    var uid = req.params.id;
    
});

module.exports = router;
