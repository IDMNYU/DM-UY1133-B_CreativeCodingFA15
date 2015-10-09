var fontHolder;


function preload(){
    fontHolder = loadFont("http://gotoloop.github.io/p5.js/");
    
    
}

function setup(){
    createCanvas(800, 800);
    //textSize(52);
    textFont(fontHolder, 52);
    
    
}


function draw(){
   text("Creative Coding", width/2, height/2);
}

function mousePressed(){
    
}