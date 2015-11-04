// requiring the http module. core module w/node
var http = require('http');
// require file system module
var fs = require('fs');
// path module
var path = require('path');

// passing in a function call. not annomyous
var server = http.createServer(handleRequest);
server.listen(8080);
console.log('Server running at http://localhost:8080');

function handleRequest(req, res){
	// what did we request?
	var pathname = req.url;
	//if blank let's ask for the index.html
	if (pathname == '/'){
		pathname = '/index.html';
	}

	// ok, what's our file extension?
	var ext = path.extname(pathname);

	//map extension to file type
	var typeExt = {
		'.html': 'text/html',
		'.js': 'text/javascript',
		'.css': 'text/css'
	}

	// what is it? default to plain text
	var contentType = typeExt[ext] || 'text/plain';
	// now read and write back the file w/the appropriate content type
	// file system module
	fs.readFile(__dirname + pathname,
		// callback function for reading
		function(err, data){
			//if there is an error
			if(err){
				res.writeHead(403);
				return res.end('Error loading ' + pathname);
			}
			//otherwise, send data, the contents of the file
			//dynamically setting content type
			res.writeHead(200, {'Content-Type': contentType });
			res.end(data);
			}
		);
}
/* this handleRequest() method will server a p5 sketch including an index.html, slketch.js,
and style.css, if we have it
*/
/*
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	// we are going to end each request with the body.
	// this body is going to be an html doc
	// that simply is going to display the URL the browser requested
	response.end('<html><body> Home, URL was: ' + request.url + '</body></html>');
}).listen(8080, 'localhost');
*/

// this server isn't available to the outside world
// just on our local computer
