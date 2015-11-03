// include the http node library and make objects using it
var http = require('http');

// return server
// can access what they are requesting and return a response
// passing an annoymous function as a parameter - define function here
var server = http.createServer(function(request, response){
	console.log('we have a request');

	// the header has a code and MIME type; send to send to the client
	response.writeHead(200, {'Content-Type': 'text/html'});
	//this is the content being sent to the web client
	response.end('<html><body><b>Hello</b> <i>World</i></body></html>');

});

/* anytime anything comes in on this port, aka a request, 
this above code is going to fire.

open a server running on this port, and we are listening for activity on this port.
super.basic.web server
*/
server.listen(8099);