var fontHolder;
var x = 0;

function preload(){
    //fontHolder = loadFont("data/CourierFinalDraft-18.vlw ");
    
    
}

function setup(){
    createCanvas(800, 800);
    textFont("Georgia");
    fill(50, 200, 5);
    noStroke();
    textSize(52);
    //text("Creative Coding", width/2, height/2);
    
}


function draw(){
    background(255);
   text("Creative Coding",x, height/2);
    x = x  - 5;
}

function mousePressed(){
    
}