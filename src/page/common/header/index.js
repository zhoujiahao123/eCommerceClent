require('./index.css');
var _mm = require('util/mm.js');
//通用页面头部
var header = {
	init: function() {
		this.bindEvent();
	},
	onLoad: function() {
		var keyword = _mm.getUrlParam('keyword');
		//keyword存在则回填输入框
		if (keyword) {
			$('search-input').val(keyword);
		};
	},
	bindEvent: function() {
		var _this = this;
		$('#search-btn').click(function() {
			_this.searchSubmit();
		});
		//输入回车后也要提交
		$('#search-input').keyup(function(e) {
			//13为回车键的keycode
			if (e.keyCode === 13) {
				_this.searchSubmit();
			}
		})
	},
	searchSubmit: function() {
		var keyword = $.trim($('#search-input').val());
		//如果提交时有keyword，正常跳转
		if (keyword) {
			window.location.href = './list.html?keyword=' + keyword;
		} else {
			_mm.goHome();
		}
	}
};
header.init();
