/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fusen.js":
/*!**********************!*\
  !*** ./src/fusen.js ***!
  \**********************/
/*! exports provided: Fusen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fusen\", function() { return Fusen; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar FUSEN_WIDTH = 130;\nvar FUSEN_HEIGHT = 100;\nvar DEFAULT_FONT_SIZE = 16;\n\nvar AdjustText =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(AdjustText, _React$Component);\n\n  function AdjustText(props) {\n    var _this;\n\n    _classCallCheck(this, AdjustText);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdjustText).call(this, props));\n    _this.state = {};\n\n    _this.set_text(_this.props.text);\n\n    return _this;\n  }\n  /**\n   * get width and height of given text\n   * @param {string} content .\n   * @return {{x: number, y: number}} .\n   * @suppress {checkTypes}\n   */\n\n\n  _createClass(AdjustText, [{\n    key: \"get_content_extent\",\n    value: function get_content_extent(content) {\n      var t = content.replace(\"\\n\", \"<br/>\");\n      var a = $(\"<span>\" + t + \"</span>\").css(\"font-family\", \"arial\").css(\"font-size\", DEFAULT_FONT_SIZE + \"px\").css(\"display\", \"none\").appendTo(\"body\");\n      var r = {\n        x: a.width(),\n        y: a.height()\n      };\n      a.remove();\n      return r;\n    }\n    /**\n     * choose nice font-size to fit in given box\n     * @param {string} content .\n     * @param {number} w .\n     * @param {number} h .\n     * @return {{scale: number, n_split: number}} .\n     */\n\n  }, {\n    key: \"fit_in\",\n    value: function fit_in(content, w, h) {\n      var size = this.get_content_extent(content);\n      var max_scale = Math.min(w / size.x, h / size.y);\n      var n_split = 2;\n\n      while (true) {\n        var s = this.split_str(content, n_split).join(\"<br/>\");\n        size = this.get_content_extent(s);\n        var scale = Math.min(w / size.x, h / size.y);\n\n        if (scale <= max_scale) {\n          return {\n            scale: max_scale,\n            font_size: DEFAULT_FONT_SIZE * max_scale,\n            n_split: n_split - 1\n          };\n        }\n\n        max_scale = scale;\n        n_split++;\n      }\n    }\n  }, {\n    key: \"split_str\",\n    value: function split_str(s, n) {\n      var len = s.length;\n      var m = Math.ceil(len / n);\n      var result = [];\n      var t = \"\";\n\n      for (var i = 0; i < len; i++) {\n        t += s[i];\n\n        if (t.length == m) {\n          result.push(t);\n          t = \"\";\n        }\n      }\n\n      if (t != \"\") {\n        result.push(t);\n      }\n\n      return result;\n    }\n  }, {\n    key: \"set_text\",\n    value: function set_text(content) {\n      var adjust = this.fit_in(content, FUSEN_WIDTH, FUSEN_HEIGHT);\n      this.state.lines = this.split_str(content, adjust.n_split);\n      this.state.fontsize = adjust.font_size;\n    }\n  }, {\n    key: \"update_text\",\n    value: function update_text(content) {\n      var adjust = this.fit_in(content, FUSEN_WIDTH, FUSEN_HEIGHT);\n      var lines = this.split_str(content, adjust.n_split);\n      var font = adjust.font_size;\n      this.setState(function (prevState) {\n        return {\n          lines: lines,\n          fontsize: adjust.font_size\n        };\n      });\n    }\n  }, {\n    key: \"render_lines\",\n    value: function render_lines(text_x) {\n      var _this2 = this;\n\n      var full_height = this.state.fontsize * this.state.lines.length;\n      var initial_dy = -full_height / 2 + this.state.fontsize * 0.9;\n      return this.state.lines.map(function (line, index) {\n        if (index == 0) {\n          return React.createElement(\"tspan\", {\n            x: text_x,\n            key: index,\n            dy: initial_dy\n          }, line);\n        }\n\n        return React.createElement(\"tspan\", {\n          x: text_x,\n          key: index,\n          dy: _this2.state.fontsize\n        }, line);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var x = this.props.x;\n      var y = this.props.y;\n      var text_x = x + 65;\n      var text_y = y + 50;\n      var lines = this.render_lines(text_x);\n      var font = this.state.fontsize + \"px arial\";\n      return React.createElement(\"text\", {\n        x: text_x,\n        y: text_y,\n        textAnchor: \"middle\",\n        fontSize: this.state.fontsize,\n        stroke: \"none\",\n        fill: \"#000000\"\n      }, lines);\n    }\n  }]);\n\n  return AdjustText;\n}(React.Component);\n\nvar Fusen =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(Fusen, _React$Component2);\n\n  function Fusen(props) {\n    var _this3;\n\n    _classCallCheck(this, Fusen);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Fusen).call(this, props));\n    var x = parseFloat(_this3.props.x) || 100;\n    var y = parseFloat(_this3.props.y) || 100;\n    _this3.state = {\n      x: x,\n      y: y,\n      selected: false\n    };\n    _this3.handleClick = _this3.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this3)));\n    _this3.handleMouseDown = _this3.handleMouseDown.bind(_assertThisInitialized(_assertThisInitialized(_this3)));\n    _this3.handleMouseMove = _this3.handleMouseMove.bind(_assertThisInitialized(_assertThisInitialized(_this3)));\n    _this3.handleMouseUp = _this3.handleMouseUp.bind(_assertThisInitialized(_assertThisInitialized(_this3)));\n    return _this3;\n  }\n\n  _createClass(Fusen, [{\n    key: \"handleMouseDown\",\n    value: function handleMouseDown(e) {\n      this.coords = {\n        x: e.pageX,\n        y: e.pageY\n      };\n      document.addEventListener('mousemove', this.handleMouseMove);\n      document.addEventListener('touchmove', this.handleMouseMove);\n    }\n  }, {\n    key: \"handleMouseMove\",\n    value: function handleMouseMove(e) {\n      if (e.touches) {\n        if (e.touches.length > 1) {\n          return;\n        }\n\n        if (e.touches[0].touchType == \"stylus\") {\n          e.preventDefault();\n        } else {\n          return;\n        }\n      }\n\n      var xDiff = this.coords.x - e.pageX;\n      var yDiff = this.coords.y - e.pageY;\n      var zoom = parseFloat($(\"#canvas\").css(\"zoom\"));\n      this.coords.x = e.pageX;\n      this.coords.y = e.pageY;\n      this.setState({\n        x: this.state.x - xDiff / zoom,\n        y: this.state.y - yDiff / zoom\n      });\n    }\n  }, {\n    key: \"handleMouseUp\",\n    value: function handleMouseUp(e) {\n      document.removeEventListener('mousemove', this.handleMouseMove);\n      this.coords = {};\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(e) {//this.setState(p=>({selected: !p.selected}));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"g\", null, React.createElement(\"rect\", {\n        x: this.state.x,\n        y: this.state.y,\n        onClick: this.handleClick,\n        onMouseDown: this.handleMouseDown,\n        onMouseUp: this.handleMouseUp,\n        onTouchStart: this.handleMouseDown,\n        onTouchEnd: this.handleMouseUp,\n        width: \"130\",\n        height: \"100\",\n        stroke: \"#aaa\",\n        strokeWidth: this.state.selected ? \"2\" : \"0.3\",\n        strokeOpacity: \"0.9\",\n        fill: \"#ffc\",\n        fillOpacity: \"0.8\"\n      }), React.createElement(AdjustText, {\n        x: this.state.x,\n        y: this.state.y,\n        text: this.props.text\n      }));\n    }\n  }]);\n\n  return Fusen;\n}(React.Component);\n\n//# sourceURL=webpack:///./src/fusen.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fusen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fusen.js */ \"./src/fusen.js\");\n/* harmony import */ var _sample_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample_data.js */ \"./src/sample_data.js\");\n\n\n\n\nvar e = React.createElement;\nvar regroup = {};\n\nfunction initialize_firestore() {\n  firebase.initializeApp({\n    apiKey: 'AIzaSyB0wAxxeLeHr4udunpln5jCYpGpFGn7D00',\n    authDomain: 'regroup-d4932.firebase.com',\n    projectId: 'regroup-d4932'\n  }); // Initialize Cloud Firestore through Firebase\n\n  regroup.db = firebase.firestore();\n}\n\nfunction create_data() {\n  regroup.db.collection(\"maps\").doc(\"test\").set({\n    title: \"test\",\n    fusens: [],\n    arrows: [],\n    groups: []\n  }).then(function (docRef) {\n    console.log(\"Document written with ID: \", docRef.id);\n  }).catch(function (error) {\n    console.error(\"Error adding document: \", error);\n  });\n}\n\nfunction Fusens_old() {\n  return React.createElement(React.Fragment, null, React.createElement(_fusen_js__WEBPACK_IMPORTED_MODULE_0__[\"Fusen\"], {\n    x: \"100\",\n    y: \"100\",\n    text: \"\\u300C\\u4ED8\\u7B8B\\u3092\\u5171\\u6709\\u3057\\u3066\\u5171\\u540C\\u7DE8\\u96C6\\u300D\\u306F\\u6280\\u8853\\u7684\\u306B\\u306F\\u3067\\u304D\\u308B\\u3051\\u3069\\u91CD\\u8996\\u3057\\u3066\\u306A\\u3044\"\n  }), React.createElement(_fusen_js__WEBPACK_IMPORTED_MODULE_0__[\"Fusen\"], {\n    x: \"100\",\n    y: \"200\",\n    text: \"\\u4ED8\\u7B8B\\u3092\\u5171\\u6709\\u3057\\u3066\\u5171\\u540C\\u7DE8\\u96C6\"\n  }), React.createElement(_fusen_js__WEBPACK_IMPORTED_MODULE_0__[\"Fusen\"], {\n    x: \"100\",\n    y: \"300\",\n    text: \"\\u4ED8\\u7B8B\\u3092\\u5171\\u6709\"\n  }), React.createElement(_fusen_js__WEBPACK_IMPORTED_MODULE_0__[\"Fusen\"], {\n    x: \"100\",\n    y: \"400\",\n    text: \"\\u4ED8\\u7B8B\"\n  }));\n}\n\n;\n\nfunction Fusens() {\n  return React.createElement(\"g\", {\n    id: \"fusen-container\"\n  }, _sample_data_js__WEBPACK_IMPORTED_MODULE_1__[\"sample_data\"].map(function (obj) {\n    return React.createElement(_fusen_js__WEBPACK_IMPORTED_MODULE_0__[\"Fusen\"], {\n      x: obj.x + 800,\n      y: obj.y + 600,\n      text: obj.text\n    });\n  }), React.createElement(\"g\", {\n    id: \"last-fusen\"\n  }));\n}\n\nReactDOM.render(React.createElement(\"svg\", {\n  width: \"100%\",\n  height: \"100%\"\n}, React.createElement(\"rect\", {\n  width: \"100%\",\n  height: \"100%\",\n  fill: \"#eee\"\n}), React.createElement(Fusens, null)), document.getElementById(\"canvas\"));\nconsole.log(\"OK\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sample_data.js":
/*!****************************!*\
  !*** ./src/sample_data.js ***!
  \****************************/
/*! exports provided: sample_data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sample_data\", function() { return sample_data; });\nvar sample_data = [{\n  \"text\": \"これは何か\",\n  \"when\": \"2013-09-13T01:07:07.908Z\",\n  \"id\": 0,\n  \"x\": 24,\n  \"y\": 8\n}, {\n  \"text\": \"付箋共有\",\n  \"when\": \"2013-09-13T01:07:50.788Z\",\n  \"id\": 1,\n  \"x\": 1413,\n  \"y\": 783\n}, {\n  \"text\": \"できるけど\",\n  \"when\": \"2013-09-13T01:07:53.234Z\",\n  \"id\": 2,\n  \"x\": 1413,\n  \"y\": 794\n}, {\n  \"text\": \"目指さない\",\n  \"when\": \"2013-09-13T01:07:55.684Z\",\n  \"id\": 3,\n  \"x\": 1410,\n  \"y\": 794\n}, {\n  \"text\": \"紙の付箋で出来る\",\n  \"when\": \"2013-09-13T01:08:20.603Z\",\n  \"id\": 4,\n  \"x\": 154,\n  \"y\": 438\n}, {\n  \"text\": \"思考の整理の支援\",\n  \"when\": \"2013-09-13T01:09:07.401Z\",\n  \"id\": 5,\n  \"x\": 40,\n  \"y\": 92\n}, {\n  \"text\": \"思考の断片をまず書き出す\",\n  \"when\": \"2013-09-13T01:09:33.992Z\",\n  \"id\": 6,\n  \"x\": 60,\n  \"y\": 175\n}, {\n  \"text\": \"KJ法\",\n  \"when\": \"2013-09-13T01:09:43.310Z\",\n  \"id\": 7,\n  \"x\": 66,\n  \"y\": 517\n}, {\n  \"text\": \"100枚前後の付箋を一覧\",\n  \"when\": \"2013-09-13T01:10:48.233Z\",\n  \"id\": 8,\n  \"x\": 973,\n  \"y\": 712\n}, {\n  \"text\": \"書いたものを見ながら考える\",\n  \"when\": \"2013-09-13T01:11:04.069Z\",\n  \"id\": 9,\n  \"x\": 84,\n  \"y\": 260\n}, {\n  \"text\": \"紙ではなぜダメ？\",\n  \"when\": \"2013-09-13T01:11:21.013Z\",\n  \"id\": 10,\n  \"x\": 449,\n  \"y\": 264\n}, {\n  \"text\": \"いつ書いたか\",\n  \"when\": \"2013-09-13T01:12:11.254Z\",\n  \"id\": 11,\n  \"x\": 491,\n  \"y\": 183\n}, {\n  \"text\": \"前後に何を考えていたか\",\n  \"when\": \"2013-09-13T01:12:17.880Z\",\n  \"id\": 12,\n  \"x\": 754,\n  \"y\": 367\n}, {\n  \"text\": \"「本Xを読みながら」\",\n  \"when\": \"2013-09-13T01:12:33.616Z\",\n  \"id\": 13,\n  \"x\": 737,\n  \"y\": 456\n}, {\n  \"text\": \"文脈が失われる\",\n  \"when\": \"2013-09-13T01:12:49.860Z\",\n  \"id\": 14,\n  \"x\": 313,\n  \"y\": 415\n}, {\n  \"text\": \"紙に負けている点\",\n  \"when\": \"2013-09-13T01:13:16.665Z\",\n  \"id\": 15,\n  \"x\": 704,\n  \"y\": 692\n}, {\n  \"text\": \"一覧性\",\n  \"when\": \"2013-09-13T01:13:22.169Z\",\n  \"id\": 16,\n  \"x\": 837,\n  \"y\": 720\n}, {\n  \"text\": \"再利用性\",\n  \"when\": \"2013-09-13T01:14:56.310Z\",\n  \"id\": 17,\n  \"x\": 568,\n  \"y\": 500\n}, {\n  \"text\": \"遠隔地共有\",\n  \"when\": \"2013-09-13T01:15:16.350Z\",\n  \"id\": 18,\n  \"x\": 497,\n  \"y\": 602\n}, {\n  \"text\": \"重視しない\",\n  \"when\": \"2013-09-13T01:15:56.475Z\",\n  \"id\": 19,\n  \"x\": 1415,\n  \"y\": 791\n}, {\n  \"text\": \"ギリギリ\",\n  \"when\": \"2013-09-13T01:16:05.651Z\",\n  \"id\": 20,\n  \"x\": 1105,\n  \"y\": 720\n}, {\n  \"text\": \"紙は痛む\",\n  \"when\": \"2013-09-13T01:16:23.530Z\",\n  \"id\": 21,\n  \"x\": 1391,\n  \"y\": 786\n}, {\n  \"text\": \"紙は傷む\",\n  \"when\": \"2013-09-13T01:16:36.322Z\",\n  \"id\": 22,\n  \"x\": 353,\n  \"y\": 601\n}, {\n  \"text\": \"目指すもの\",\n  \"when\": \"2013-09-13T01:16:56.633Z\",\n  \"id\": 23,\n  \"x\": 866,\n  \"y\": 116\n}, {\n  \"text\": \"アイデア書き出しをもっと楽に\",\n  \"when\": \"2013-09-13T01:17:11.274Z\",\n  \"id\": 24,\n  \"x\": 1426,\n  \"y\": 799\n}, {\n  \"text\": \"書いたものが蓄積され再利用される\",\n  \"when\": \"2013-09-13T01:17:41.919Z\",\n  \"id\": 25,\n  \"x\": 1130,\n  \"y\": 193\n}, {\n  \"text\": \"書き出しをもっと楽に\",\n  \"when\": \"2013-09-13T01:17:53.136Z\",\n  \"id\": 26,\n  \"x\": 1002,\n  \"y\": 98\n}, {\n  \"text\": \"再利用をもっと楽に\",\n  \"when\": \"2013-09-13T01:17:59.765Z\",\n  \"id\": 27,\n  \"x\": 1003,\n  \"y\": 177\n}, {\n  \"text\": \"人間の思考の断片を蓄積\",\n  \"when\": \"2013-09-13T01:19:35.619Z\",\n  \"id\": 28,\n  \"x\": 1227,\n  \"y\": 242\n}, {\n  \"text\": \"たまったら有効活用できそう\",\n  \"when\": \"2013-09-13T01:19:55.509Z\",\n  \"id\": 29,\n  \"x\": 1246,\n  \"y\": 306\n}, {\n  \"text\": \"一覧性を高めるためには付箋のサイズは均一であるべき\",\n  \"when\": \"2013-09-13T01:20:29.132Z\",\n  \"id\": 30,\n  \"x\": 1094,\n  \"y\": 651\n}, {\n  \"text\": \"出力されたものを再度脳に取り込むことを楽に(未着手)\",\n  \"when\": \"2013-09-13T01:21:04.170Z\",\n  \"id\": 31,\n  \"x\": 864,\n  \"y\": 202\n}, {\n  \"text\": \"過去に作られた付箋の束から「今必要なもの」を選ぶことを楽に\",\n  \"when\": \"2013-09-13T01:21:33.232Z\",\n  \"id\": 32,\n  \"x\": 1042,\n  \"y\": 261\n}, {\n  \"text\": \"moveするとオリジナルが壊れる\",\n  \"when\": \"2013-09-13T01:21:54.641Z\",\n  \"id\": 33,\n  \"x\": 701,\n  \"y\": 546\n}, {\n  \"text\": \"copy(書き写し)は面倒\",\n  \"when\": \"2013-09-13T01:22:11.344Z\",\n  \"id\": 34,\n  \"x\": 829,\n  \"y\": 552\n}, {\n  \"text\": \"電子的付箋ならcopy簡単\",\n  \"when\": \"2013-09-13T01:22:22.959Z\",\n  \"id\": 35,\n  \"x\": 966,\n  \"y\": 533\n}, {\n  \"text\": \"「付箋を共有して共同編集」は技術的にはできるけど重視してない\",\n  \"when\": \"2013-09-13T01:23:57.810Z\",\n  \"id\": 36,\n  \"x\": 172,\n  \"y\": 18\n}, {\n  \"text\": \"付箋\",\n  \"when\": \"2018-08-22T11:46:43.400Z\",\n  \"id\": 37,\n  \"x\": 652,\n  \"y\": 73\n}];\n\n//# sourceURL=webpack:///./src/sample_data.js?");

/***/ })

/******/ });