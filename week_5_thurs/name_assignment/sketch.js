// Modified from:
// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-3: Swapping images

var names = [];
var images = [];
var imageIndex = 0;


function preload(){
    names = ["data/bird.png", "data/earth.jpg", "data/legoVader.png", "data/Monster_300_204.png", "data/star.jpg"];
    
    for(var i = 0; i < names.length; i++){
        images[i] = loadImage(names[i]);
    }
    
}

function setup(){
    createCanvas(800, 800);
    
}


function draw(){
    background(255);
    image(images[imageIndex], 0, 0);
}

function mousePressed(){
    imageIndex = int(random(images.length));
}