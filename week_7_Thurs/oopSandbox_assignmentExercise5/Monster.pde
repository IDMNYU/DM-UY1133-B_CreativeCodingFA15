class Monster {
  
   //declare variables or data types
  private color skin1, skin2, blink, wort;    // no accessible outside the class. Only internally.
  float x, y, wanderX, wanderY, percentScale;  // accessible outside the class, using the dot syntax
  boolean button;
  
  // this is the class constructor. this is called
  // with the "new" line in the main code
  Monster(float tempX, float tempY, color sk1, color sk2, color wort_) {
    println("we made a monster"); 
    // here, we are exchanging the values passed in for their local names
    // this ensures better use and control of variables - ie, what can
    // change a variable and what can't at any given time
    
    skin1 = sk1;
    skin2 = sk2;
    blink = sk1;
    wort = wort_;
    x = tempX;
    y = tempY;
    
  }
  
  // all the methods go below the constructor
  void monsterBody(int wide, int tall) {
    smooth();

    curve(w/2 - 100 + x, w/2-100 + y, w/2 - 50 + x, w/2-200 + y, w/2 + 10 + x, w/2 -100 + y, w/2 -20 + x, w/2 + 20 + y); //left antenna
    curve(w/2 + 120 + x, w/2-80 + y, w/2 + 50 + x, w/2-200 + y, w/2 - 10 + x, w/2 - 100 + y, w/2 -20 + x, w/2 + 40 + y); //right antenna
    fill(59, 275, 64); //darker green
    ellipse(w/2 + x, w/2 + y, wide, tall); //body  120, 160
    fill(wort); // purple
    noStroke(); 
    ellipse(w/2 - 20 + x, w/2 + 30 + y, 20, 10);  //wart
  }
  
  
}