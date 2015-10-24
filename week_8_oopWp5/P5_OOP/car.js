
// this is my class Car
function Car(tempC, tempXpos, tempYpos, tempXspeed){  // the constructor
	this.c = tempC;
	this.xpos = tempXpos;
	this.ypos = tempYpos;
	this.speed = tempXspeed;

	this.display = function(){
		stroke(0);
		fill(this.c);
		rectMode(CENTER);
		rect(this.xpos, this.ypos, 20, 10);
	}

	this.move = function(){
		this.xpos = this.xpos + this.speed;
		if(this.xpos > width){
			this.xpos = 0;
		} // if
	} // move
} // class car
