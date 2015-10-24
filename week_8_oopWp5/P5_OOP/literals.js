var car ;  // variable to hold my car


function setup(){
	createCanvas(480, 270);

//literal
	car = {
		// data
		// name/key : value  // these are paired together
		c: color(175),  // commas after everything versus ;
		xpos: width/2,
		ypos: height/2,		// <---- note the commas
		xspeed: 3,

		display: function(){
			rectMode(CENTER);
			stroke(0);
			fill(this.c);
			rect(this.xpos, this.ypos, 20, 10);
		},

		move:function(){
			this.xpos = this.xpos + this.xspeed;
			if(this.xpos > width){
				this.xpos = 0;
			} // if
		} // move
	}; // car    <--- semicolon at the end of your class

} //setup

function draw(){
	background(100);
	car.move();
	car.display();  // methods. VERBS
	
}