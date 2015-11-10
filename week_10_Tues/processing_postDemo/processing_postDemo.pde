Agent ned;
Enemy irs;
//PVector m = new PVector(mouseX, mouseY); // put this in draw() so it gets updated

void setup() {
  size(400, 400);
  background(0);
  // calling the class constructor
  ned = new Agent(width/2, height/2);
  irs = new Enemy(width/2, height/2, 1.0);
}

void draw() {
  background(0);
  PVector m = new PVector(mouseX, mouseY);

  //ned.seek(m);
  ned.arrive(m);
  ned.update();
  ned.display();

  irs.update(ned);
  irs.display();
}