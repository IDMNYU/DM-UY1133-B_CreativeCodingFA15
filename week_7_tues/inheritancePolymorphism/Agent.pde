class Agent{
  float xLoc, yLoc;
  private float speed;
  int w, h;
  
  Agent(float _x, float _y, int wid, int hei){
    xLoc = _x;
    yLoc = _y;
    w = wid;
    h = hei;
  } 
  void update(){
    xLoc = xLoc + speed;
  } 
  void display(){
    noFill();
    ellipse(xLoc, yLoc, w, h);
  }
  void interact(float num){
  }
  
}