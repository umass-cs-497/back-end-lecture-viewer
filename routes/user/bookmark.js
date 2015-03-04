var express     = require('express');
var router      = express.Router();

//Create bookmark for current user
router.post('/', function(req,res) {

});

//Get user's bookmarks for specific course
router.get('/course/:id', function(req,res) {
    var cid = req.params.id;

});

//Get user's bookmarks for specific lecture of a course
router.get('/:cid/lecture/:lid', function(req,res) {
    var cid = req.params.cid;
    var lid = reg.params.lid;

});

//Delete specific bookmark
router.delete('/:id', function(req,res) {
    var bid = req.params.id;

});

//Edit specific bookmark
router.put('/:id', function(req,res) {
    var bid = req.params.id;
    
});

module.exports = router;
