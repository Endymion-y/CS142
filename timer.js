var i = 0;
myFunc = function(){
	i++;
	// console.log(i);
	var frac = i % 10;
	var sec = Math.ceil(i / 10) % 60;
	var min = Math.ceil(i / 600);
	document.getElementById('XXX').innerHTML = min + ":" 
	+ sec + "." + frac;
};
var token = setInterval(myFunc, 100);
var cancel = function(){
	clearInterval(token);
};
// (function(){
// 	document.getElementById('XXX').innerHTML = "world";
// })();