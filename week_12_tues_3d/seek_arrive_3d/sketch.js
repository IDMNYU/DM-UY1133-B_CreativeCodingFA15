var ned, loopy;  //agent
var irs, lex; //enemy
var blue, grey, dark, orange, grey2;

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	//(x, y, z, speed)
	ned = new Agent(0, 0, -100, 5, 3); 
  loopy = new Agent(300, 50, -100, 2, 3);
	irs = new Enemy(width/2, height/2, -100, 1.0, 2); 
  lex = new Enemy(windowWidth/4, windowHeight/4, -100, 1, 2);

	grey2 = color(80);
  grey = color(127);
  orange = color(200, 100, 10);
  blue = color(95, 164, 255);

}

function draw(){
	background(0);
	//in webgl, our default drawing origin is in the center of our
	//canvas, so to move the origin back to the top left we need
	//to call translate(x,y,z);
	//let's wash our scene with ambient light
	//params: r,g,b
	ambientLight(100,100,100);
	
	//and let's create an orbiting pointLight
	pointLight(
	  255,255,255,255,
	  sin(radians(frameCount%360))*100.0,
	  cos(radians(frameCount%360))*100.0,
	  sin(radians(frameCount%360))*100.0);
	
	translate(-width/2,-height/2,0);
	//notice how m is now a 3d vector
	//with z-dimension 0
	var m = createVector(mouseX, mouseY,0);
  ned.arrive(m); // goes toward the mouse
  //console.log(m);
  irs.turn(ned);  // in the center and turning towards n
  irs.update();
  loopy.wander();
  lex.turn(loopy);
  lex.seek(loopy);
  loopy.update();
  loopy.borders();
  lex.update();
  ned.update();
  ned.borders();
  ned.display(blue);
  irs.display(grey2); // center dark grey
  lex.display(grey);
  loopy.display(orange);
}
