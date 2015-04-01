var formidable = require('formidable')
var fs = require('fs');
var unzip = require('unzip');
var uuid = require('node-uuid');

//Lecture API
module.exports = {
    setup: function(router) {
        //Add a lecture to a course
        router.post('/:course_id/lecture', function(req,res) 
        {
            console.log("POST NEW LECTURE");

            //TODO account for single, manual upload by Prof.


            //Allows Formidable
            var form = new formidable.IncomingForm();

            /*Creates an event listener to print progress of upload to the console.
                Plan on sending progress data back to client eventually.
            */
            form.addListener('progress' , function(bytesRecieved , bytesExpected){
               
              console.log(((bytesRecieved) + "/" + bytesExpected) + " : " + ((bytesRecieved * 100)/bytesExpected) + "%");
            
            });


            form.parse(req, function(err, fields, files) 
            {
                if(files['upload'] != undefined)
                {
                    var file = files['upload'];
                    var tempPath = file['path'];

                    console.log("Received upload. Placed in " + tempPath);

                    //Create a new random, unique, folder to save all unzipped lecture files
                    var unzipPath = "media/" + uuid.v1() + "/";

                    //Extracts files from temp zip file
                    fs.createReadStream(tempPath).pipe(unzip.Extract({ path: unzipPath }))
                    .on('error', function (error) {
                        /*On unzipping error, abort request. Doesn't work for all file types, such as .txt*/
                        console.log("File uploaded was not a .zip file. Aborting upload.");
                        console.log(error);
                        res.send("Invalid File Type");
                        return;
                    })
                    .on('finish', function(end)
                    {   
                        /*Once completing the unzipping, read other params and respond*/

                        console.log("Unzipped files placed in " + unzipPath);      

                        //How to recieve other fields from a multipart POST request
                        var semester = fields['semester'];
                        var course = fields['course'];
                        var date = fields['date'];

                        console.log(semester + " : " + course + " : " + date + " --- " + unzipPath);

                        //Test response to prove it works
                        res.write(semester + " : " + course + " : " + date + " --- " + unzipPath + "</br></br>");

                        res.end();
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

        //Get a specific lecture
        router.get('/:course_id/lecture/:lecture_id', function(req,res) {

        });

        //Edit a specific lecture
        router.put('/:course_id/lecture/:lecture_id', function(req,res) {

        });

        //Delete a user from a course's roster
        router.delete('/:course_id/lecture/:lecture_id', function(req,res) {

        });
    }
};
