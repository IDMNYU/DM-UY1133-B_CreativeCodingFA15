class Enemy {
  PVector location, velocity, acceleration;
  
  int bigC, littleC; // ellipse widths
  float max; //max speed
  float angle, radSec, attract;


  Enemy(int x, int y, float attract) {
    location = new PVector(x, y);
    velocity = new PVector(0, 0);
    bigC= 40;
    littleC = 30;
    max = 10;
    
  }

  void update(Agent a) {
    
    float dx = a.location.x - location.x;
    float dy = a.location.y - location.y;
    
    angle = atan2(dy, dx);
    angle += radians(90);
    
  }



  void display() {
    noStroke();
    noFill();
    pushMatrix();
    // translate(width/2, height/2);
    translate(location.x, location.y);
    rotate(angle); // <---
    ellipse(0, 0, bigC, bigC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    fill(95, 164, 255);
    ellipse(0, 0, littleC, littleC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    noFill();
    fill(137, 55, 232, 200);
    noStroke(); 
    // rotate(radians(0));
    triangle( -9, 0, 0, -40, 9, 0);
    stroke(144, 232, 146);
    line(0, -20, 0, -50);
    popMatrix();
  }
}