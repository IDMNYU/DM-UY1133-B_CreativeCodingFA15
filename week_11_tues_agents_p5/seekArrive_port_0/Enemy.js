function Enemy(x, y, _maxSpeed, _maxForce){
	this.angle;
	this.location = createVector(x, y);
	this.velocity = createVector(0, 0);
	this.steering = createVector(0, 0);
	this.acceleration = createVector(0,0);
	this.bigC = 40;
	this.littleC = 30;

	this.maxForce = _maxForce;
	this.maxSpeed = _maxSpeed;
	this.max = 3;
}

Enemy.prototype.update = function(){
	this.velocity.add(this.acceleration);
	this.velocity.limit(this.max);
	this.location.add(this.velocity);
	this.acceleration.mult(0);
	
}

Enemy.prototype.turn = function(a){
	
	var dx = a.location.x - this.location.x;
	var dy = a.location.y - this.location.y;
	/* atan2()
	Calculates the angle (in radians) from a specified 
	point to the coordinate origin as measured from the 
	positive x-axis. Values are returned as a float in the 
	range from PI to -PI. 
	*/
	this.angle = atan2(dx, dy);
	this.angle += radians(180); 
	this.angle = this.angle * -1;

}

Enemy.prototype.seek = function(a){
	var desired = p5.Vector.sub(a.location, this.location);
	desired.normalize();
	desired.mult(this.maxForce); // make sure you've declared this variable
	var steer = p5.Vector.sub(desired, this.velocity);
	steer.limit(this.max);
	this.acceleration.add(steer);
}

Enemy.prototype.display = function(c){
	noStroke();
    noFill();
    push();
    //translate(windowWidth/2, windowHeight/2);
    translate(this.location.x, this.location.y);
    rotate(this.angle); // <---
    ellipse(0, 0, this.bigC, this.bigC); //variable ellipse(location.x, location.y, this.bigC, this.bigC); //variable 
    //fill(95, 164, 255);
    fill(c);
    ellipse(0, 0, this.littleC, this.littleC); //variable ellipse(this.location.x, this.location.y, this.bigC, this.bigC); //variable 
    noFill();
    fill(137, 55, 232, 200);
    noStroke(); 
    // rotate(radians(0));
    triangle( -9, 0, 0, -40, 9, 0);
    stroke(144, 232, 146);
    line(0, -20, 0, -50);
    pop();
}