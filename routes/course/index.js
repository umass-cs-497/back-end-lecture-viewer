var express = require('express');
var router = express.Router();

//Add module routes
require('./roster').setup(router);
require('./lecture').setup(router);
require('./comment').setup(router);
require('./attachment').setup(router);

var database = require("../../database/index.js");

//Create a course
router.post('/', function(req,res) {

});

//Get course
router.get('/:course_id', function(req,res) {
	
});

//Edit course
router.put('/:course_id', function(req,res) {

});

//Delete course
router.delete('/:course_id', function(req,res) {

});

module.exports = router;
