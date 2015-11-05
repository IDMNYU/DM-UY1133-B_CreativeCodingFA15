// keep track of our socket connection
var socket;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);

	/*
	now, we need to broadcast and receive the mouse values from our p5 sketch.
	this is the part that is executed by the client browser itself. it's not part of
	the server program. Here, we use the same socket.io module 
   in setup().
	*/
	//starting a socket connection to the server
	// ideally, when i dump this on a regular server, the url of the page goes here
	socket = io.connect('http://localhost:8080');

	// we make a names event called 'mosue' and write an anonymous callback function

	socket.on('mouse',
		// when we receive data
		function(data){
			console.log("Got: " + data.x + " " + data.y);
			// draw a blue circle
			fill(0, 0, 255);
			noStroke();
			ellipse(data.x, data.y, 80, 80);
		}
		);
	}

function draw(){
	//empty
}

function mouseDragged(){
	// draw some white circles
	fill(255);
	noStroke();
	ellipse(mouseX, mouseY, 80, 80);
	//send the mouse coordinates
	sendmouse(mouseX, mouseY);
}

function sendmouse(xpos, ypos){
	// we are sending!!! wooo -woo
	console.log("sendmouse: " + xpos + " " + ypos);

	// make a little object with x and y
	var data = {
		x: xpos,
		y: ypos
	};
	// send that object to the socket
	socket.emit('mouse', data);
}







