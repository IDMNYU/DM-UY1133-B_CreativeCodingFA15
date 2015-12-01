var osc; // this is going to make the sound
var thenotes = [60, 62, 64, 65, 67, 69, 71, 72]; // C major scale


function setup(){
	createCanvas(800, 600);
	osc = new p5.Oscillator(); // set it up
	osc.setType('sine');  // what kind of sound
	osc.start();
}


function draw(){
	background(255);
	/*
	var thefreq = map(mouseX, 0, width, 100, 1000);
	*/
	var whichnote = round(map(mouseX, 0, width, 0, 7));
	var thefreq = midiToFreq(thenotes[whichnote]);
	osc.freq(thefreq);
	var theamp = map(mouseY, 0, height, 1, 0);
	osc.amp(theamp, 0.1);
}