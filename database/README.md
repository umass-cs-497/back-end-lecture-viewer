# Database API
--------

* Methods to access the User database.
* For getter methods, callback should be in the form function(error, returned_data).
* For setter methods, callback should be in the form function(error, affected_document).

## Users API
---

|	Method							|  return              |
|--------------------------------|-----------------------------------|
|addBookmarkById(user_id, newBookmark, callback) | return edited user (if any)|
|addCourseById(user_id, courseId, callback) | return edited user (if any)|
|addNotificationById(user_id, newNotification, callback) | return edited user (if any)|
|createUser(user_id, password, username, role, callback) | return created user (if any)|
|deleteUserById(user_id, callback) | return deleted user (if any)|
|getBookmarksById(user_id, callback) | return users bookmarks|
|getCoursesById(user_id, callback) | return users courses|
|getUnreadNotificationsById(user_id, callback) | return users notification|
|getUserById(user_id, callback) | return whole users info|
|getUserRoleById(user_id, callback) | return users role|
|setNameById(user_id, firstName, lastName, callback) | return edited user (if any)|
|setUsernameById(user_id, newUsername, callback) | return edited user (if any)|




## Courses API
---

|	Method										|  return              |
|------------------------------------------------|-----------------------------------|
addListOfEmailsById(courseId, emailList, callback) | return course document with new email list |
addListOfLecturesById(courseId, lectureIdList, callback) | return course document with new lecture list |
addListOfUsersById(courseId, userIdList, callback) | return course document with new users list |
createCourse(semester, department, courseNumber, callback) | return created course |
deleteAllEmailsById(courseId, callback) | return course document with empty emails list |
deleteAllLecturesById(courseId, callback) | return course document with empty lectures list |
deleteAllUsersById(courseId, callback) | return course document with empty users list |
deleteCourseById(courseID, callback) | return deleted course |
getCourseById(courseId, callback) | return course |
getEligibleEmailsById(id, callback) | return eligible emails to view the course material|
getRegisteredUsersById(id, callback) | return course's registered users |
dropCoursesDatabase(callback)| return 1 if the db has been droped successfully|


 







