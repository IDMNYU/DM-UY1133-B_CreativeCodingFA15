function Agent(tempX, tempY, _maxSpeed){
	this.bigC = 40;
    this.littleC = 30; 
    this.max = 10;
    this.location = createVector(tempX, tempY);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.maxSpeed = _maxSpeed;
}

Agent.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.max);
    this.location.add(this.velocity);
    this.acceleration.mult(0);

}



Agent.prototype.arrive = function(target){
    var desired = p5.Vector.sub(target, this.location);
    var d = desired.mag();
    if( d < 100){
        var m = map(d, 0, 100, 0, this.maxSpeed);
        desired.setMag(m);
    } else {
        desired.setMag(this.maxSpeed);
    }
    //static method. Call from the class
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    this.acceleration.add(steer);

}


Agent.prototype.borders = function(){
    if(this.location.x < -this.r){
        this.location.x = windowWidth+this.r;
    } 
    if(this.location.y < -this.r){
     this.location.y = windowHeight+this.r;
    }
    if (this.location.x > windowWidth+this.r){
     this.location.x = -this.r;
    }
    if (this.location.y > windowHeight+this.r) {
        this.location.y = -this.r;
    }
}

Agent.prototype.display = function(c){
    stroke(95, 164, 255);
    strokeWeight(2);
    noFill();
    push();
   // translate(width/2, height/2);
   	translate(this.location.x, this.location.y);
    ellipse(0, 0, this.bigC, this.bigC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    //fill(95, 164, 255);
    fill(c);
    ellipse(0, 0, this.littleC, this.littleC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    noFill();
    fill(255, 197, 127, 230);
    noStroke(); 
    //with the method heading, we can get the direction of our velocity vector
    rotate(this.velocity.heading() + radians(90));  // put angle in here to they rotate in the direction they are moving
    triangle( -9, 0, 0, -40, 9, 0);
    stroke(144, 232, 146);
    line(0, -20, 0, -50);
    pop();
}