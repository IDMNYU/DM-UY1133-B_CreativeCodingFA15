function Agent(tempX, tempY, tempZ, _maxSpeed, _maxForce){
	this.bigC = 40;
  this.littleC = 30; 
  this.max = 10;
  this.location = createVector(tempX, tempY, tempZ);
  this.velocity = createVector(0, 0, 0);
  this.acceleration = createVector(0, 0, 0);

  this.maxSpeed = _maxSpeed;
  this.wandertheta = 0;

  this.maxForce = _maxForce;
  this.r = 6;

}

Agent.prototype.update = function(){
    this.velocity.add(this.acceleration);  // we actively manipulating velcity
    this.velocity.limit(this.max);
    this.location.add(this.velocity);
    this.acceleration.mult(0);

}

Agent.prototype.wander= function(){
  var wanderD = 100; // this distance from the wander circle
  var wanderR = 5; // radius for the wander circle
  var change = 0.3; // pick a new point along a circle
  this.wandertheta += random(-change, change);
  var circleLoc = this.velocity.copy();
  circleLoc.normalize();  // normailizeing to get the heading, or the direction
  circleLoc.mult(wanderD);  // multiple by the distance
  circleLoc.add(this.location); // making it relevant to the agent
  var h = this.velocity.heading();  // direction i'm currently point
  //circleOffset is now a 3d vector
  var circleOffSet = createVector(
    wanderR*cos(this.wandertheta + h),
    wanderR*sin(this.wandertheta + h),
    wanderR*sin(this.wandertheta + h));
  var target = p5.Vector.add(circleLoc, circleOffSet);

  this.seek(target);

}

Agent.prototype.seek = function(loc){
    var desired = p5.Vector.sub(loc, this.location);
    desired.normalize();
    desired.mult(this.maxForce);
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    this.acceleration.add(steer);

}



Agent.prototype.arrive = function(target){
    //calling static method of p5 vector class subtraction, addition
    // new a new P Vector
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
        this.velocity.x = windowWidth+this.r;
    } 
    if(this.location.y < -this.r){
     this.velocity.y = windowHeight+this.r;
    }
    if (this.location.x > windowWidth+this.r){
     this.velocity.x = -this.r;
    }
    if (this.location.y > windowHeight+this.r) {
        this.velocity.y = -this.r;
    }
    if(this.location.z < this.r-1000){
      this.velocity.z = -this.r;
    }
}

Agent.prototype.display = function(c){
    //stroke(95, 164, 255);
    //strokeWeight(2);
    //noFill();
    push();
   // translate(width/2, height/2);
   	translate(this.location.x, this.location.y,this.location.z);
    sphere(this.bigC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    //fill(95, 164, 255);
    specularMaterial(c);
    sphere(this.littleC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    specularMaterial(255, 197, 127, 230);
    //with the method heading, we can get the direction of our velocity vector
    rotate(-this.velocity.heading() + radians(90), [1,1,1]);  // put angle in here to they rotate in the direction they are moving
    cone( 40,50);
    stroke(144, 232, 146);
    line(0, -20, 0, -50);
    pop();
}