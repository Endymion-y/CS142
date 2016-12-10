'use strict';
function Cs142TemplateProcessor(tem){
	this.template = tem;
}

Cs142TemplateProcessor.prototype.fillIn = function (dic){
	var key = Object.keys(dic);
	var n = key.length;
	var i;
	var res = this.template;
	// console.log(template);
	for (i = 0; i <= n - 1; i++){
		var patt = new RegExp("{{" + key[i] + "}}");
		res = res.replace(patt, dic[key[i]]);
		console.log(res);
	}
	return res;
};