var ned;  //agent
var irs, lex; //enemy
var blue, grey, dark, orange, grey2;

function setup(){
	createCanvas(windowWidth, windowHeight);
	//(x, y, speed)
	ned = new Agent(0, 0, 5, 3); // 3

	irs = new Enemy(width/2, height/2, 1.0, 2); //1.0, 2
    lex = new Enemy(windowWidth/4, windowHeight/4, 1, 2);

	grey2 = color(80);
    grey = color(127);
    orange = color(200, 100, 10);
    blue = color(95, 164, 255);

}

function draw(){
	background(0);
	var m = createVector(mouseX, mouseY);
    ned.arrive(m); // goes toward the mouse
    irs.turn(ned);  // in the center and turning towards blue
    lex.turn(irs);
    lex.seek(irs);
    irs.update();
    ned.update();
    lex.update(); //grey
    lex.display(grey);
    ned.borders();
    ned.display(blue);
    irs.display(grey2); // center dark grey
}

