var data = [];

function preload(){

	weatherData = loadJSON('data/weather.json');

}

function setup(){
	//console.log(info);
	var temp = getTemp(weatherData);
	//console.log(temp);
	print(temp);

}


function getTemp(data){
	
	var info = data.main;
	var t = info.temp;

	// The chaining method saves multiple
	// variable creation:
	//t = Number(data.main.temp);

	// here we return the value from our function 
	return t;

}