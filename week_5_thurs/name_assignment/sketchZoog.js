// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 7-9: Multiple Zoogs with functions

function setup() {
    createCanvas(400, 400);

}
function draw() {
   background(255);
    
    for(var x = 80; x < width; x+= 80){
        drawZoog(x, 100, 60, 60, 16);
    }
}

function drawZoog(x, y, w, h, eyeSize){
    stroke(0);
    fill(175);
    rectMode(CENTER);
    rect(x, y, w/6, h*2);
    
    fill(255);
    ellipse(x, y-h/2, w, h);
    
    fill(0);
    ellipse(x-w/3, y-h/2, eyeSize, eyeSize*2);
    ellipse(x+w/3, y-h/2, eyeSize, eyeSize*2);
    
    stroke(0);
    line(x-w/12, y+h, x-w/4, y+h+10);
    line(x+w/12, y+h, x+w/4, y+h+10);
    
}

/*
void drawZoog(int x, int y, int w, int h){
    
}
*/