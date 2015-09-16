void setup() {
  size(600, 600);  // size(width, height)
  bckgnd();
  frameRate(30);
}

void draw() {
  //background(0);
  strokeWeight(1);
  stroke(5, 200, 100);
  fill(0, 0, 200);
  ellipse(mouseX, mouseY, 30, 30);
  if (mousePressed) {
    bckgnd();  // this is function call
  }
}

void bckgnd() {  // this is function definition
  background(0);
  fill(200, 0, 0);
  ellipse(0, 0, width/2, height/2);
  fill(0, 255, 255);
  rect(width/2, height/2, 500, 500);
  stroke(0, 127, 4);
  strokeWeight(40);
  line(0, 0, width, height);
}