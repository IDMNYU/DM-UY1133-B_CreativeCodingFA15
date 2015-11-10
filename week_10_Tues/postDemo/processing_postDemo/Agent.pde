
class Agent {

  int bigC, littleC;
  float max, radSec;
  
  PVector location;
  // rate of change of location
  PVector velocity; 
  //rate of change of velocity
  PVector acceleration;  //let's start it with 0,0 encase it's not going to move
  //PVector acceleration;
  float maxSpeed = 5.0;
  float maxForce = 3.0;
  PVector steering = new PVector(0,0);

  Agent(int x, int y) {

    bigC = 40;
    littleC = 30;
    max = 10;
    
    location = new PVector(0, 0);   //
    velocity = new PVector(0, 0);
    acceleration = new PVector(0, 0);
  }
  
    void update() {
    //PVector mouse = new PVector(mouseX, mouseY);
    // a new PVector
   /*PVector dir = PVector.sub(mouse, location);
    // turn dir into a unit vector
    dir.normalize();
    dir.mult(4);  // scale vector
    acceleration = dir;
    */
  
    
    velocity.add(acceleration);
    velocity.limit(max);
    location.add(velocity);
    acceleration.mult(0);  // do this, so acceleration doesn't ramp up crazy. resets it ea frame
    
  }
  
  /* Arrive takes care of seek() as well
  You'd only want to have one or the other on at a given time
  */
  void arrive(PVector target){
    PVector desired = PVector.sub(target, location);
    float d = desired.mag();
    if (d < 100){
      float m = map(d, 0, 100, 0, maxSpeed);
      desired.setMag(m);
    } else {
      desired.setMag(maxSpeed);
    }
    
    steering = PVector.sub(desired, velocity); // make steering a global PVector
    steering.limit(maxForce);
    acceleration.add(steering);
  }
  void seek(PVector target){
    
    PVector desired = PVector.sub(target, location);
    desired.normalize();  //unit vector
    desired.mult(maxSpeed); // scaling
    PVector steering = PVector.sub(desired, velocity);
    steering.limit(maxForce);
    acceleration.add(steering);
  }


 

  void display() {
    
    stroke(95, 164, 255);
    strokeWeight(2);
    noFill();
    pushMatrix();
   // translate(width/2, height/2);
   translate(location.x, location.y);
    ellipse(0, 0, bigC, bigC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    fill(95, 164, 255);
    ellipse(0, 0, littleC, littleC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    noFill();
    fill(255, 197, 127, 230);
    noStroke(); 
    //with the method heading, we can get the direction of our velocity vector
    rotate(velocity.heading() + radians(90));  // put angle in here to they rotate in the direction they are moving
    triangle( -9, 0, 0, -40, 9, 0);
    stroke(144, 232, 146);
    line(0, -20, 0, -50);
    popMatrix();
  }
}