'use strict';
function cs142MakeMultiFilter(a){
	var result = function(filter, callback){
		if (filter === undefined){
			return a;
		}
		if (callback === undefined){
			callback = function(arr){

			};
		}
		var b = [];
		var n = a.length;
		var i;
		for (i = 0; i <= n - 1; i++){
			if (filter(a[i])){
				b.push(a[i]);
			}	
		}
		
		a.callback = callback;
		a.callback(b);
		a = b;
		return result;
	};
	return result;
}