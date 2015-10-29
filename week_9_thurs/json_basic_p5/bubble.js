// my class

function Bubble(x_, y_, diameter_, s){
	// my constructor
	this.over;

	this.x = x_;
	this.y = y_;
	this.diameter = diameter_;
	this.name = s;

	this.display = function(){
		stroke(0);
		strokeWeight(2);
		noFill();
		ellipse(this.x, this.y, this.diameter, this.diameter);
		if(this.over == true){
			fill(0);
			textAlign(CENTER);
			text(this.name, this.x, this.y+this.diameter/2+20);
		}
	}

	this.rollover = function(px, py){
		var d = dist(px, py, this.x, this.y);
		if(d < this.diameter/2){
			this.over = true;
		} else {
			this.over = false;
		}
	}
}