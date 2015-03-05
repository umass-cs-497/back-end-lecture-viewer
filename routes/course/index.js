var express     = require('express');
var router      = express.Router();

router.use('/:id/roster', require('./roster'));

//Create a course
router.post('/', function(req,res) {

});

//Get course
router.get('/:id', function(req,res) {
    var cid = req.params.id;

});

//Edit course
router.put('/:id', function(req,res) {
    var cid = req.params.id;
    
});

//Delete course
router.delete('/:id', function(req,res) {
    var cid = req.params.id;
    
});

module.exports = router;
