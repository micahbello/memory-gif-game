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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/*! exports provided: apiKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiKey\", function() { return apiKey; });\nvar apiKey = \"RO9th90ycIJIKwggbLnRVARPCjqw45up&limit=32\";\n\n//# sourceURL=webpack:///./js/constants.js?");

/***/ }),

/***/ "./js/entry.js":
/*!*********************!*\
  !*** ./js/entry.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-display.js */ \"./js/game-display.js\");\n\n$('#play-form').submit(function () {\n  event.preventDefault();\n  $('#landing-main').hide();\n  $('#card-display-main').show();\n  var setsOfCards = parseInt($('#set-num-select').val());\n  var secondsToDisplay = parseInt($('#seconds-num-select').val());\n  var $cardsDisplay = '#card-display-main';\n  new _game_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](setsOfCards, secondsToDisplay, '#card-display-main');\n});\n\n//# sourceURL=webpack:///./js/entry.js?");

/***/ }),

/***/ "./js/game-display.js":
/*!****************************!*\
  !*** ./js/game-display.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./js/constants.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar GameDisplay = /*#__PURE__*/function () {\n  function GameDisplay(setsOfCards, secondsToDisplay, $cardsDisplay) {\n    _classCallCheck(this, GameDisplay);\n\n    this.setsOfCards = setsOfCards;\n    this.secondsToDisplay = secondsToDisplay;\n    this.$cardsDisplay = $cardsDisplay;\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.setUpGame();\n  }\n\n  _createClass(GameDisplay, [{\n    key: \"retrieveGifUrl\",\n    value: function retrieveGifUrl() {\n      return $.ajax({\n        url: 'https://api.giphy.com/v1/gifs/random?api_key=' + _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"apiKey\"],\n        type: 'GET'\n      });\n    }\n  }, {\n    key: \"fillArray\",\n    value: function fillArray() {\n      var _this = this;\n\n      this.showLoadingScreen();\n\n      if (this.game.arrayOfGifUrls.length < this.setsOfCards) {\n        this.retrieveGifUrl().then(function (results) {\n          _this.game.arrayOfGifUrls.push(results.data.images.downsized.url);\n\n          _this.fillArray();\n        });\n      } else {\n        this.game.createCardsInfoObject();\n        this.fillDOM();\n      }\n    }\n  }, {\n    key: \"fillDOM\",\n    value: function fillDOM() {\n      for (var i = 0; i < Object.keys(this.game.cardsInfoObject).length; i++) {\n        this.createCardElementSet(i);\n      }\n\n      this.setStylingOnCards();\n      this.runPostLoadingDisplay();\n    }\n  }, {\n    key: \"setStylingOnCards\",\n    value: function setStylingOnCards() {\n      /*I want the cards to always display in 2 rows.*/\n\n      /*Therefore, width for each card will be 100/(this.setsOfCards)*/\n      $('.card-display').width(\"\".concat(100 / this.setsOfCards, \"%\"));\n      $('.card-display').height(100); // $('figure').addClass('card-figure');\n      // /*I want the cards to always display in 2 rows.*/\n      // /*Therefore, width for each card will be 100/(this.setsOfCards)*/\n      // $('.card-figure').width(`${100/(this.setsOfCards)}%`);\n      // $('.card-figure').height(100);\n    }\n  }, {\n    key: \"setUpGame\",\n    value: function setUpGame() {\n      this.fillArray();\n    }\n  }, {\n    key: \"showLoadingScreen\",\n    value: function showLoadingScreen() {\n      $('#loading-screen').show();\n    }\n  }, {\n    key: \"runPostLoadingDisplay\",\n    value: function runPostLoadingDisplay() {\n      var boundShowAllCardsBeforeStart = this.showAllCardsBeforeStart.bind(this);\n      setTimeout(function () {\n        $('#loading-screen').hide();\n        boundShowAllCardsBeforeStart();\n      }, 3000); //allow the dom 3 seconds to render the images\n    }\n  }, {\n    key: \"showAllCardsBeforeStart\",\n    value: function showAllCardsBeforeStart() {\n      $('.image-cover').each(function () {\n        $(this).hide();\n      });\n      setTimeout(function () {\n        $('.image-cover').each(function () {\n          $(this).show();\n        });\n      }, this.secondsToDisplay * 1000);\n    }\n  }, {\n    key: \"setEventListenersForCardDisplay\",\n    value: function setEventListenersForCardDisplay($imageCover, $image) {\n      //set event listeners MOVE TO GAME CLASS\n      $($imageCover).click(function () {\n        $(this).hide();\n      });\n      $($image).click(function () {\n        $($imageCover).show();\n      });\n    }\n  }, {\n    key: \"createCardElementSet\",\n    value: function createCardElementSet(idx) {\n      var $newCardDisplay = $(\"<article class='card-display' id='article-\" + idx + \"'></article>\");\n      $('#cards-section').append($newCardDisplay);\n      var $newImage = $(\"<figure class='image-figure'></figure>\");\n      $newImage.css({\n        'background-image': \"url('\".concat(this.game.cardsInfoObject[idx].url, \"')\")\n      });\n      $(\"#article-\" + idx).append($newImage);\n      var $newImageCover = $(\"<div class='image-cover'></div>\");\n      $newImage.css({\n        'background-image': \"url('\".concat(this.game.cardsInfoObject[idx].url, \"')\")\n      });\n      $(\"#article-\" + idx).append($newImageCover);\n      this.setEventListenersForCardDisplay($newImageCover, $newImage);\n    }\n  }]);\n\n  return GameDisplay;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameDisplay);\n\n//# sourceURL=webpack:///./js/game-display.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.arrayOfGifUrls = [];\n    this.cardsInfoObject = {};\n    this.inplay = false;\n    this.completed = false;\n  }\n\n  _createClass(Game, [{\n    key: \"shuffleArray\",\n    value: function shuffleArray(array) {\n      for (var i = array.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        var _ref = [array[j], array[i]];\n        array[i] = _ref[0];\n        array[j] = _ref[1];\n      }\n    }\n  }, {\n    key: \"createCardsInfoObject\",\n    value: function createCardsInfoObject() {\n      var _this = this;\n\n      //creat copy the array that contains the contents doubled\n      var doubledArray = this.arrayOfGifUrls.concat(this.arrayOfGifUrls); //randomize the array\n\n      this.shuffleArray(doubledArray); //flll the onject\n\n      doubledArray.forEach(function (url, i) {\n        _this.cardsInfoObject[i] = {\n          url: url,\n          turned: false,\n          resolved: false\n        };\n      });\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });