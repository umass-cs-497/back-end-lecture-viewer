var express     = require('express');
var router      = express.Router();
var uidregex    = require('../../app').uidregex;

//Create an account
router.post('/', function(req,res) {

});

//Get user
router.get('/:id' + uidregex, function(req,res) {
    var uid = req.params.id;

});

//Edit user profile
router.put('/:id' + uidregex, function(req,res) {
    var uid = req.params.id
    
});

//Delete user
router.delete('/:id' + uidregex, function(req,res) {
    var uid = req.params.id
    
});

module.exports = router;
