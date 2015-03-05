var express     = require('express');
var router      = express.Router();

//Get course ID from a request
function getCID(req) {
    return req.originalUrl.split('/')[2];
}

//Get the roster of a specific course
router.get('/', function(req,res) {
    var cid = getCID(req);

});

//Add a single user to the course's roster
//NOTE: This will probably have to handle both adding a single user
//      and adding a file full of users
router.post('/:id', function(req,res) {
    var cid = getCID(req);

});

//Delete a user from a course's roster
router.delete('/:uid', function(req,res) {
    var cid = getCID(req);
    var uid = req.params.uid;
    
});

module.exports = router;
