var express = require('express');
var router = express.Router();

//Add module routes
require('./roster').setup(router);

//Create a course
router.post('/', function(req,res) {

});

//Get course
router.get('/:id', function(req,res) {
    var cid = req.params.id;

    console.log(cid);
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
