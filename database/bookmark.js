/*
  Method to add a bookmark to the user account with given email.
 */
exports.addBookmarkById = function(id, newBookmark, callback) {
  User.findByIdAndUpdate(
      id,
      {$push: {bookmarks: newBookmark}},
      callback
  );
};