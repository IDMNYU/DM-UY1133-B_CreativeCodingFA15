
var car1;
var car2;   /// objects.

function setup(){

	createCanvas(480, 270);
	car1 = new Car(color(127), 0, 200, 2);
	car2 = new Car(color(255), 0, 100, 3);


}

function draw(){
	background(51);
	car1.move();
	car1.display();
	car2.move();
	car2.display();

}



