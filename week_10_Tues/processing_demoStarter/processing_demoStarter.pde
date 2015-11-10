int bigC, littleC;
float max, radSec;

void setup() {
  size(400, 400);
  background(0);
  bigC = 40;
  littleC = 30;
  max = 10;
  //smooth(4);
}

void draw() {
  stroke(95, 164, 255);
  strokeWeight(2);
  noFill();
  pushMatrix();
  translate(width/2, height/2);
  ellipse(0, 0, bigC, bigC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
  fill(95, 164, 255);
  ellipse(0, 0, littleC, littleC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
  noFill();
  fill(255, 197, 127, 230);
  noStroke(); 


  triangle( -9, 0, 0, -40, 9, 0);
  stroke(144, 232, 146);
  line(0, -20, 0, -50);
  popMatrix();
}