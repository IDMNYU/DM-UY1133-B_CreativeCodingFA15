var bubbles = [];

function setup(){
	createCanvas(400, 400);
	bubbles[0] = new Bubble(250, 200);
	bubbles[1] = new Bubble(350, 200);

}

function draw(){
	background(51);
	
	bubbles[0].update();
	bubbles[1].update();
	bubbles[0].display();
	bubbles[1].display();

	if(bubbles[0].intersects(bubbles[1])){
		bubbles[0].changeColor();
		bubbles[1].changeColor();
	}

}