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
				res.writeHead(404);
				return res.end('Error loading ' + pathname);
			}
			//otherwise, send data, the contents of the file
			//dynamically setting content type
			res.writeHead(200, {'Content-Type': contentType });
			res.end(data);
			}
		);
}
// WebSockets Portion
// Websockets work with the HTTP Server
var io = require('socket.io').listen(server); // must be socket not sockets.


// register a callback fucntion to run when we have an individual connection
// this is run for each individual user that connections

io.sockets.on('connection',
/* recieve a socket argument. This socket argumet is a ref for current client that is conencted.
the client can aslo be passed callback functions

*/
function(socket){
	console.log("We have a new client: " + socket.id);

	/* we can also create custom callbacks for certainkinds of events
	Let's make an event, called 'mouse'
	Our p5 sketch will send mouseX and mouseY for each "mouse" event.
	Ther server can handle that event by sending back that data to any other connected clients
	*/
	socket.on('mouse', 
		function(data){
			// data comes in as whatever was sent, including objects
			console.log("Received: 'mouse' " + data.x + " " + data.y);

			// send it to all the other clients
			socket.broadcast.emit('mouse', data);
		}
		);
	/* here is a callback for when a client disconnects. */

	socket.on('disconnect', 
		function(){
			console.log("Client has disconnected");
		});
	}
);







