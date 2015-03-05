var express     = require('express');
var router      = express.Router();

//Get notifications of current user
router.get('/', function(req,res) {
    
});

//Mark notification as read
router.put('/:id', function(req,res) {
    var nid = req.params.id;
    
});

module.exports = router;
