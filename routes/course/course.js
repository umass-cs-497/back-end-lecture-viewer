var express     = require('express');
var router      = express.Router();

var cidRegex    = ''; //Create regex that matches all potential course id's

//Create a course
router.post('/', function(req,res) {

});

//Get course
router.get('/:id' + cidRegex, function(req,res) {
    var cid = req.params.id;

});

//Edit course
router.put('/:id' + cidRegex, function(req,res) {
    var cid = req.params.id
    
});

//Delete course
router.delete('/:id' + cidRegex, function(req,res) {
    var cid = req.params.id
    
});

module.exports = router;
