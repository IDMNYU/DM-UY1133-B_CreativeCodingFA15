

function preload(){
  
    
}

function setup(){
    createCanvas(400, 400);
    
    loadPixels();
    
    /*
    for(var i = 0; i < pixels.length; i++){
        var rand = random(255);
        pixels[i] = rand;
    }
    */
    
    for( var x = 0; x < width; x++){
        for( var y = 0; y < height; y++){
            
            // locate each pixel, 
            // get the color values
            var loc = (x + y * width) * 4;
            
            if( x % 2 == 0){  // if we are in an even column
                pixels[loc ] = 255; // R values
                pixels[loc + 1] = 255; // G values
                pixels[loc + 2] = 255; // B values
                pixels[loc + 3] = 255; // A values
            }
            else {
                pixels[loc ] = 0;
                pixels[loc + 1] = 0;
                pixels[loc + 2] = 0;
                pixels[loc + 3] = 255;
            }
        }
    }
    
    updatePixels();
    
}


function draw(){
    
}

function mousePressed(){
    
}