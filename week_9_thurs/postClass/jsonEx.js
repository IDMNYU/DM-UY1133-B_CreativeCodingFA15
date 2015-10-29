
var data = [];
var bubbles = [];

function preload(){
	data = loadJSON('data/data.json', loadData); // asynchronous API call
}

function setup(){

	createCanvas(400, 400);

	for(var i = 0; i< data.length; i++){
		//var pos = data[0].position;
		//console.log(pos);
		var x = data[i].position.x;
		var y = data[i].position.y;
		var d = data[i].diameter;
		var s = data[i].label;

		bubbles.push(new Bubble(x, y, d, s));
	}

}

function draw(){
	background(127);

	for(var i = 0; i < bubbles.length; i++){
		bubbles[i].display();
		bubbles[i].rollover(mouseX, mouseY);
	}
	textAlign(LEFT);
	fill(0);
	text("click to add bubbles.", 10, height-10);
}

function mousePressed(){
	var x = mouseX;
	var y = mouseY;
	var d = random(40, 80);
	var name = "I'm new";

	bubbles.push(new Bubble(x, y, d, name));

	if(bubbles.length > 10){
		bubbles.pop(0);
	}
}

function loadData(data){
	console.log(data.length);
}