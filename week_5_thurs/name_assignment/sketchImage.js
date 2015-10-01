var img;    // PImage img
var img2;
var vadar;
var x, y, rotation;

function preload(){
    //img = loadImage("monster.png ");  // directory level + file name
    //must include directory path to the image OR
    // the image must be at the same level
    img2 = loadImage("data/Monster_300_204.png");  // directory level + file name
    vadar = loadImage("data/legoVader.png");
    //vadar.resize(100, 100);
    
}


function setup(){
    createCanvas(1200, 1200);
    x = 0.0;
    y = width/2.0;
    rotation = 0.0;
}



function draw(){
    background(255);
    image(img2, 0, 0);  //image(variableImage, x, y);
    
    push();  //pushMatrix()
    translate(x, y);
    rotate(rotation);
    image(vadar, 100, 100);
    pop();
    
    x+= 1.0;
    rotation += 0.01;
    
    if( x> width){
        x =0;
    }
    
    image(vadar, mouseX, mouseY);
    
    
}