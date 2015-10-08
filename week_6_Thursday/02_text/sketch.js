var allTheText;

var currentLine = '';

var textPositions = new Array();
var charSizes = new Array();

var theFont;
var x = 0;

function preload(){
	allTheText = loadStrings('data/aliceinwonderland.txt');
	theFont = loadFont('data/font1.otg');
}

function setup(){
	createCanvas(800, 600);
	textFont(theFont);
	letsGo();
}

function draw(){
	background(255);
	var xposition = 0;

	for(var i = 0; i < currentLine.length; i++){
		textSize(charSizes[i]);
		text(currentLine.charAt(i), xposition, textPositions[i]);
		xposition += textWidth(currentLine.charAt(i));
		textPositions[i] += random(1, 5);
	}
}

function keyReleased(){
	letsGo();
}



function letsGo(){
	var whichline = floor(random(0, allTheText.length));
	currentLine = allTheText[whichline];
	textPositions = new Array(currentLine.length);
	charSizes = new Array(currentLine.length);
	for(var i = 0; i < currentLine.length; i++){
		textPositions[i] = 0;
		charSizes[i] = random(12, 45);
	}
}