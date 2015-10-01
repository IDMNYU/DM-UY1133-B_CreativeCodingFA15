// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 7-3: Bouncing ball with functions

var x  = 0;
var speed = 1;

function setup() {
    createCanvas(400, 400);

}
function draw() {
    background(255);
    move();
    bounce();
    display();

}
function move(){
    x = x + speed;
}

function bounce(){
    if ((x > width) || (x < 0)){
        speed = speed * -1;
    }
}

function display(){
   stroke(0);
    fill(175);
    ellipse(x, height/2, 32, 32);
    
}