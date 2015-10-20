class Enemy extends Hero {
  color skin;
  float tx, ty;
  Enemy(float bob, float clair, int box, int wood) {
    super(bob, clair, box, wood, 0);  // needs to pass the same # of parameters as base class
    skin = int(random(255));
    tx = bob;
    ty = clair;
  }

  void update() {
    super.update();  // calls the parent method
    if (xLoc > width) {
      xLoc *= -1;
    }
    if (xLoc < 0) {
      xLoc *= 1;
    }
    if (yLoc > height) {
      yLoc *= -1;
    }
    if (yLoc < 0) {
      yLoc *= 1;
    }
  }

  void display() {
    fill(skin);
    pushMatrix();
    translate(tx + xLoc, ty + yLoc);
    rect(0, 0, 40, 40);
    popMatrix();
  }

  void interact(float val) {
    if (keyPressed) {
      if (key == 'j') {
        xLoc = xLoc -val;
      }
      if (key == 'l') {
        xLoc = xLoc + val;
      }
      if (key == 'i') {
        yLoc -= val;
      }
      if ( key =='k') {
        yLoc += val;
      }
    }
  }

  void autoMove(float m) {
    xLoc = xLoc + m;
    if (xLoc > 300) {
      xLoc = -200;  /* -200 isn't arbitrary. It's around the value
                        when the shape falls off the screen, which
                        is based on it's coordinates & graphics
                        */
    }
  }
}