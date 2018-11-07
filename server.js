var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

var mimeTypes = {
     "html": "text/html",
     "jpeg": "image/jpeg",
     "jpg": "image/jpeg",
     "gif": "image/gif",
     "png": "image/png",
     "js": "text/javascript",
     "woff": "text/plain",
     "ttf": "text/plain",
     "css": "text/css"};

http.createServer((request, response)=>{
    var pathname = url.parse(request.url).pathname;
    var filename;
    if(pathname === "/"){
        filename = "index.html";
    }
    else
        filename = path.join(process.cwd(), pathname);

    try{
        fs.accessSync(filename, fs.F_OK);
        var fileStream = fs.createReadStream(filename);
        var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
        response.writeHead(200, {'Content-Type':mimeType});
        fileStream.pipe(response);
    }
    catch(e) {
            console.log('File not exists: ' + filename);
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write('404 Not Found\n');
            response.end();
            return;
    }
    return;
}).listen(1010, function() {
    console.log('ready to go!');
	openChrome();
});

function openChrome(){
	exec('start chrome http://localhost:1010' , function(err) {
		if(err){ //process error
		console.log(err)
		}
		else{
			console.log("success open")
		}
	});
}