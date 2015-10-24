var myCar;

function setup(){

	createCanvas(400, 400);
	myCar = new Car();  // calls the constructor
}

function draw(){
	background(255);

	if(myCar.xpos > 600){
		myCar.brake();
	}

	myCar.drive();

	myCar.display();

	fill(50);
	noStroke();
	text("Speed: " + myCar.speed, 25, 25);
	text("Press any key to reset the xpos of myCar", 25, height - 50);

}

function keyPressed(){
	myCar.xpos = 0;
	myCar.speed = 2;


}

//constructor
function Car(){
	//data
	this.xpos=0;
	this.ypos = random(height);
	this.speed = 2;
	this.c = color(153, 102, 51);
}
//functionality aka VERB

Car.prototype.drive = function(){
	if(this.xpos > width){
		this.xpos = 0;
	}
	this.xpos = this.xpos + this.speed;

}

Car.prototype.brake= function(){
	if(this.speed > 0){
		this.speed = this.speed - 0.3;
	} else {
		this.speed = 0;
	}
}

Car.prototype.display = function(){
	fill(this.c);
	rectMode(CORNER);
	rect(this.xpos, this.ypos, 100, 50);

	fill(0);
	ellipse(this.xpos + 20, this.ypos + 45, 40, 40);
	ellipse(this.xpos + 80, this.ypos + 45, 40, 40);
}



