class Hero extends Agent {
  private color skin;
  
  Hero(float _x, float _y, int wid, int hei, int marsha) {
    super(_x, _y, wid, hei);  // calling the parent constructor
    skin = color(random(255), random(255), random(255));
  }
  void update() {
    //super.update();  // calling to the super method update

    if (xLoc > width) {    // adding to, or overwriting the super method update
      xLoc = width;
    }
    if (xLoc < 0) {
      xLoc = 0;
    }
    if (yLoc > height) {
      yLoc = height;
    }

    if (yLoc < 0) {
      yLoc = 0;
    }
  }

  void display() {
    noStroke();
    fill(skin);
    ellipse(xLoc, yLoc, w-10, h-10);
    ellipse(xLoc, yLoc + 20, w + 20, h+10);
  }

  void interact(float val) {
    if (keyPressed) {
      if (key == 'a') {
        xLoc = xLoc -val;
      }
      if (key == 'd') {
        xLoc = xLoc + val;
      }
      if (key == 'w') {
        yLoc -= val;
      }
      if ( key =='s') {
        yLoc += val;
      }
    }
  }
}