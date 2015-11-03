var x = 42;

//console.log(x);

var stuff;


stuff =  addUp(x);
console.log(stuff);

function addUp(_w){
	for(var i = 0; i < 1000; i++){
		_w = _w + i;
	}
	return(_w); 
}