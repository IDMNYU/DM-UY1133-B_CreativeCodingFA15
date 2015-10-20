Agent kopia;
Hero ironman, superman, spiderman;
Agent[] cartoons = new Agent[30];

Enemy irs, tmc, usps;

void setup() {
  size(500, 500);

  kopia = new Agent(0, 0, 0, 0);

  ironman = new Hero( width/2, height/2, 20, 50, 0);
  superman = new Hero( 200, 50, 50, 100, 0);
  //ironman.skin = color(255);  // this should be private and not accessible

  irs = new Enemy(100, 150, 30, 30);
  tmc = new Enemy(200, 200, 40, 40);

  /* uncomment me to use polymorphism
   for (int i = 0; i < cartoons.length; i++) {
   int r = int(random(2));
   if (r == 0) {
   cartoons[i] = new Hero(random(100, 400), random(100, 400), int(random(30, 60)), int(random(20, 100)), 0);
   } else {
   cartoons[i] = new Enemy(random(0, 200), random(0, 200), int(random(10, 30)), int(random(30, 50)));
   }
   }
   */
}


void draw() {
  background(127);
  //kopia.speed = 10;


  ironman.interact(1);  
  ironman.update();
  ironman.display();

  superman.interact(3);
  superman.update();
  superman.display();

  irs.interact(1);
  irs.update();
  irs.display();

  tmc.autoMove(1);
  tmc.interact(.5);
  //tmc.update();  // using the autoMove method conflicts with the update method
                    // for tmc
  tmc.display();



  // provided each class uses each of these methods,
  // we can call them using an array.
  // this saves us many lines of code!
  /* uncomment me to use an array
   for( int i = 0; i< cartoons.length; i++){
   cartoons[i].interact(int(random(2)));
   cartoons[i].update();
   cartoons[i].display();
   }
   */
}