
color b1, b2;
int y =0;
int h = 200;

void setup() {
  size(400, 400);
  background(0);

  b1 = color(75, 200, 127);
  b2 = color(200, 75, 127);
}


void draw() {

  noFill();
  // beginning at y, as long as it's < y+h, ++
  for (int i = y; i < y+h; i++) {
    //take i, as it exists btwn y & (y+h)
    // translate that relationship to be
    // from 0 and 1 and then
    // convert understanding ranges
    //*Re-maps a number from one range to another.*
    float remap = map(i, y, y+h, 0, 1);
    // move that ratio of distance btwn these
    // two points
    color c = lerpColor(b1, b2, remap); // start, stop, amount
    stroke(c);
    line(i, y, i, y+h);
  }
}