var express     = require('express');
var router      = express.Router();

router.use('/bookmark'    , require('./bookmark'));
router.use('/notification', require('./notification'));

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
