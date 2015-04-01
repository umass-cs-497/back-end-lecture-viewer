var formidable = require('formidable')
var fs = require('fs.extra');
var uuid = require('node-uuid');

//Attachment API
module.exports = {
    setup: function(router) {
        //Add an attachment to a lecture
        router.post('/:course_id/lecture/:lecture_id/attachment', function(req,res) 
        {
        	//Creates form that can read in file
            var form = new formidable.IncomingForm();
            //Starts parsing of the file
            form.parse(req, function(err, fields, files) {

                //Gets the temp path the file was uploaded to

                if(files['upload'] != undefined)
                {
                	var file = files['upload'];
	                var tempPath = file['path'];

	                console.log(file);

	                console.log("Received upload. Placed in " + tempPath);

	                //This is where we can check the temp file if need be
	                //Probs not though... We trust profs to not give out viruses...

	                /*
	                //This whole renaming the file is actually pointless...
	                var extention = "";
	                //TODO Only problem i can see as of now is if one uploads a file
	                //w/ no extention and has periods in its name...
	                if(file['name'].indexOf(".") >= 0)
	                {
	                	var splitFileName = file['name'].split(".");
	                	extention = "." + splitFileName[splitFileName.length-1];
	                }
					*/

					//TODO actually define where it goes... YOU ALSO HAVE TO CREATE THE FOLDER FIRST DANGIT...
	                var newPath = "media/attachments/" + file['name'];// + uuid.v1() + extention; //Maybe we need to keep the name...

	                fs.move(tempPath, newPath, function (err) {
						if (err) {
							res.send("Would send 500 error.. Need to make attachments folder in media... Sorry.");
							throw err;
						}

						//Database saving goes here

					  	console.log("File saved in " + newPath);
	                	res.send("Attachment Received");
					});

	            }else{
	            	console.log("File is missing");

                    responseObject = {data:{}};
                    
                    responseObject.status = "fail";
                    responseObject.data.message = "No file was provided when uploading";

                    res.send(responseObject);
	            }
            });    
        });

        //Delete an attachment from a lecture
        router.delete('/:course_id/lecture/:lecture_id/attachment/:attachment_id', function(req,res) 
        {

        });
    }
};
