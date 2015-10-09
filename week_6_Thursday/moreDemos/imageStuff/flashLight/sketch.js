// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-7: Displaying the pixels of an image

var monster;

function preload(){
    monster = loadImage("data/BlackTail_Trail_450_338.jpg");
    
}

function setup(){
    createCanvas(450, 338);  // note the size of the canvas
    
}

function draw(){
    //background(255);
    loadPixels();
    
    monster.loadPixels();
    
    for(var y = 0; y < height; y++){
        for( var x = 0; x < width; x++){
            
            var loc = (x + y * width) * 4;
            
            var r = monster.pixels[loc  ];
            var g = monster.pixels[loc + 1];
            var b = monster.pixels[loc + 2];

// uncomment the code below to have the flash light effect in the image

 /*
            var distance = dist(x, y, mouseX, mouseY);    //calculate brightness based on mouse  ((float)mouseX/width) * 8/0;/
            var adjustBrightness = (50- distance)/50;      // closer the pixel is to the mouse, the lower the
                                                       // value of distance. closer must be brighter, so invert the formula
     

              r *= adjustBrightness;
              g *= adjustBrightness;
              b *= adjustBrightness;
              
              r= constrain(r, 0, 255);
              g= constrain(g, 0, 255);
              b= constrain(b, 0, 255);
*/
            pixels[loc  ] = r;
            pixels[loc + 1] = g;
            pixels[loc + 2] = b;
            pixels[loc + 3] = 255;
        }
    }
    
    updatePixels();

    
}

