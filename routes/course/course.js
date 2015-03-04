var express     = require('express');
var router      = express.Router();
var cidregex    = require('../../app').cidregex;

//Create a course
router.post('/', function(req,res) {

});

//Get course
router.get('/:id' + cidregex, function(req,res) {
    var cid = req.params.id;

});

//Edit course
router.put('/:id' + cidregex, function(req,res) {
    var cid = req.params.id
    
});

//Delete course
router.delete('/:id' + cidregex, function(req,res) {
    var cid = req.params.id
    
});

module.exports = router;
