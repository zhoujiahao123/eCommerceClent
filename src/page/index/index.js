

var _mm = require('util/mm.js');

var html = '<div>{{data}}<div>';
var data = {
	data:'test'
}
console.log(_mm.renderHtml(html,data));