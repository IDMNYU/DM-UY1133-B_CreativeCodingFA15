var bubbles = [];

function setup(){
	createCanvas(400, 400);
	for(var i = 0; i < 5; i++){
		bubbles[i] = new Bubble(random(width), random(height));
	}

}

function draw(){
	background(51);
	
	for( var i = 0; i < bubbles.length; i++){
		bubbles[i].update();
		bubbles[i].display();
		for(var j = 0; j < bubbles.length; j++){
			if(i != j && bubbles[i].intersects(bubbles[j])){
				bubbles[i].changeColor;
				bubbles[j].changeColor;
			}
		}
	}
}
	

