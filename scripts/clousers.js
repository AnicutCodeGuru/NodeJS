function sample(){
	var name="Xyz";
	return {
		getName:function(){
			return name;
		}
	}
	//default returns undefined  / Primitive types like number string boolean etc 
	//but  if you return a Object or Function  the variables will not be garbage collected.
	
}
var result = sample();
console.log(result.getName());
// Clouser is an approach in javascript to retain the state of a function even after its execution.


function counterCreator(incrementBy){
	var count = 0 ;
	
	return function(){
		 count+=incrementBy;
		 return count;
	}
}

var incrementBy1 = counterCreator(1);
console.log(incrementBy1());
console.log(incrementBy1());
console.log(incrementBy1());

var incrementBy2 = counterCreator(2);
console.log(incrementBy2());
console.log(incrementBy2());
console.log(incrementBy2());



function abc(){
	//var n=undefined;
	if(true){
		var i=10;
	}
	
	xyz();
	function xyz(){
		var k=20;
	}
	xyz();
	console.log(i);
	
	//console.log(n);
	//var n=10;
	//console.log(k);
}
abc();








