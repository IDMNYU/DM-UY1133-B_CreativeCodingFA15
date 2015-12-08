/*

Khan Academy has a nice tutorial. Check it out for other
aspects:

https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/side-scroller/a/forest-environment
*/

var grass;	//original size/version
var grassT;  // smaller version
var lawn = [];
var wid = -40; // starts the grass off screen
var character;


function preload(){
	grass = loadImage('images/grass.png');
	grassT = loadImage('images/grassTiny.png');
	for(var i = 0; i < 30; i++){  //limit is number of tiles to span one screen
		// initialize initial x positions for grass tiles
		// taking into account that the tile is 40 pixels wide
		lawn.push(i*40);

	}


}

function setup(){


	createCanvas(800, 800);
	background(0, 0, 127);

	
}

function draw(){
	background(0, 0, 127);
	fill(127);
	// first worked with an ellipse and had the grass
	// move automatically
	ellipse(20, 740, 50, 50);


	for(var i = 0; i < lawn.length; i++){
		image(grassT, lawn[i], 740);
		// moving the grass automatically:
		//subtract 1 from each X location value
		// to move it across the screen
		
		lawn[i] -= 1;
		if(lawn[i] <= -80){
			lawn[i] = width;
		}
	}		
}
	
	
