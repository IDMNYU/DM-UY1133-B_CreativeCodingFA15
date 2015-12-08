

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

	character = createSprite(0, 740, 50, 50);
	//character.velocity.x = 1;
	
	
}

function draw(){
	background(0, 0, 127);
	fill(127);


  //console.log("character.velocity.x is  " + character.velocity.x);
  console.log("character.position.x is  " + character.position.x);
  // console.log("camera.position.x is  " + camera.position.x);
  //console.log("camera.mouseX is  " + camera.mouseX);
	
	// hacking to get it to follow the mouse	
   character.position.x = mouseX;
   //console.log("camera.position.x is  " + camera.position.x);
	camera.mouseX = mouseX;
	
 
 	//camera.position.x = character.position.x;
 	//character.position.x = camera.position.x;
  	//camera.position.y = character.position.y;
//
	drawSprite(character);
	camera.off();

	

for(var i = 0; i < lawn.length; i++){
		image(grassT, lawn[i], 740);
		// moving the grass automatically:
		//subtract 1 from each X location value
		// to move it across the screen
		/*
		lawn[i] -= 1;
		if(lawn[i] <= -80){

		}
		*/
	
		// this moves the lawn
		if(character.position.x > 550){
			lawn[i] -=2;
			//lawn[i] = width;
			console.log(mouseX);
			console.log("camera.mouseX is  " + camera.mouseX);

		}
	}

	

		
	
	
}
	
	
