var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema definition for courses
var courseSchema = new Schema({
  courseNumber: String,
  courseSection: String,
	courseTitle: String,
  department: String,
  description: String,
  permission: Number,
  instructors: [{
    type: String,
    unique: true
  }],
  // list of references to lectures, elements should be ObjectIds in Lecture collection.
  lectures: [{
    type: Schema.Types.ObjectId,
    ref: 'Lecture'
  }],
  // list of references to registered students/instructors, elements should be ObjectIds in User collection.
  registeredUsers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  // list of all eligible emails to view the course's material (different from registeredUsers above.)
  emails: [String],
  semester: String,
	year: Number
});

module.exports = mongoose.model('Course', courseSchema);