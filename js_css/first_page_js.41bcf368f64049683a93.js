webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $(window).resize(function(){
// 	  document.documentElement.style.fontSize = document.documentElement.clientWidth / 640*100 + 'px';
// })
(0, _jquery2.default)(function () {
	var hideLoading = setTimeout(function () {
		(0, _jquery2.default)(".Loading-body").hide();
		(0, _jquery2.default)(".show-body").show();
	}, 5000);
});
(0, _jquery2.default)("#left").on('click', function () {
	(0, _jquery2.default)("body").addClass('showNav');
	(0, _jquery2.default)("#right").attr("disabled", "disabled");
});
(0, _jquery2.default)(".show-body-left").on('click', function () {
	(0, _jquery2.default)("body").removeClass('showNav');
	(0, _jquery2.default)("#right").removeAttr("disabled");
});
(0, _jquery2.default)("#right").on('click', function () {
	(0, _jquery2.default)("body").addClass('showMl');
	(0, _jquery2.default)("#left").attr("disabled", "disabled");
});
(0, _jquery2.default)(".show-body-right").on('click', function () {
	(0, _jquery2.default)("body").removeClass('showMl');
	(0, _jquery2.default)("#left").removeAttr("disabled");
});

// import '../css/Loading-css.css';
// import png1 from '../Images/whale.png';
// import png2 from '../Images/uFpLbYt.png';
// import png3 from '../Images/test.jpg';
// import png4 from '../Images/test2.jpg';
// import png5 from '../Images/test3.jpg';
// import png6 from '../Images/test4.jpg';
// import png7 from '../Images/test5.jpg';


// var LoadingSour = [png1,png2,png3,png4,png5,png6,png7];

// var totaljidu=0;
// var time=null;

// function aa(loadingnum2,num,listlength) {
// 	if(totaljidu>=listlength){
// 		clearInterval(time);
// 		return;
// 	}
// 	if (loadingnum2 < num) {
// 		clearInterval(time);
// 		time= setInterval(function () {
// 			loadingnum2++;
// 			totaljidu=loadingnum2;
// 			if (loadingnum2>=listlength){
// 				console.log("bbbbbb");
// 				console.log(parseInt((loadingnum2/listlength)*100)*2)
// 				$("#Loading").css('background-size','200px '+parseInt((loadingnum2/listlength)*100)*2+'px');
// 			}
// 			else{
// 				console.log(parseInt((loadingnum2/listlength)*100)*2);
// 				document.getElementById("Loading").style.cssText = 'background-size:200px '+parseInt((loadingnum2/listlength)*100)*2+'px';
// 				$("#Loading").css('background-size','200px '+parseInt((loadingnum2/listlength)*100)*2+'px')
// 			}
// 			if(loadingnum2>=num){
// 				clearInterval(time);
// 				return;
// 			} 
// 		}, 10)
// 	}
// }

// //图片预加载
// function loadImages(sources, callback) {
// 	var count = 0,
// 	images = {},
// 	imgNum = 0;
// 	for (var src in sources) {
// 		imgNum++;
// 	}

// //数组长度
// var listlength=sources.length;

// //完成数量
// var loadingnum=0;
// var nextloadingnum=0;
// //完成一个加载数量
// var unum= 1;

// var timer = null;
// for (var src in sources) {
// 	images[src] = new Image();
// 	images[src].onload = function () {

// 		nextloadingnum += unum;
// 		if (nextloadingnum <= listlength) {
// 			aa(loadingnum, nextloadingnum,listlength);
//               //console.log("cc"+nextloadingnum);
//           } else {
//               //console.log("dd"+loadingnum);
//               aa(loadingnum, listlength,listlength);
//               callback(images);
//               return ;
//           }
//           if (++count >= imgNum) {
//           	callback(images);
//           }
//           loadingnum=nextloadingnum;
//       }
//       images[src].src = sources[src];
//   }
// }

// loadImages(LoadingSour,function(){
// 	console.log("aaaa")
// });

/***/ })
],[1]);