/**
 * Created by freddy on 3/19/15.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Schema definition for comments
var commentSchema = new Schema({
  semester: String,
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  },
  lecture: {
    type: Schema.Types.ObjectId,
    ref: 'Lecture'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String,
  date: Date
});

var Comment = mongoose.model('Comment', commentSchema);

exports.Comment = Comment;