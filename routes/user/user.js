var express     = require('express');
var router      = express.Router();

var uidRegex    = ''; //Create regex that matches all potential user id's

//Create an account
router.post('/', function(req,res) {

});

//Get user
router.get('/:id' + uidRegex, function(req,res) {
    var uid = req.params.id;

});

//Edit user profile
router.put('/:id' + uidRegex, function(req,res) {
    var uid = req.params.id
    
});

//Delete user
router.delete('/:id' + uidRegex, function(req,res) {
    var uid = req.params.id
    
});

module.exports = router;
