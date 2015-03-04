var express     = require('express');
var router      = express.Router();

//Get the roster of a specific course
router.get('/:id', function(req,res) {
    var cid = req.params.id;

});

//Add a single user to the course's roster
//NOTE: This will probably have to handle both adding a single user
//      and adding a file full of users
router.post('/:id', function(req,res) {
    var cid = req.params.id;

});

//Delete a user from a course's roster
router.delete('/:cid/:uid', function(req,res) {
    var cid = req.params.cid;
    var uid = req.params.uid;
    
});

module.exports = router;
