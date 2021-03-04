/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"services": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/services.js","gallery~global~index~services"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: activateAccordion, makeVirtualTourSection, makeStillsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateAccordion\", function() { return activateAccordion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeVirtualTourSection\", function() { return makeVirtualTourSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeStillsSection\", function() { return makeStillsSection; });\n/* \n==========================================\n        *** HELPER FUNCTIONS  ***\n==========================================\n*/\nfunction activateAccordion() {\n  $(this).toggleClass(\"active\");\n  var $panel = $(this).next();\n\n  if (parseInt($panel.css(\"max-height\"))) {\n    $panel.css(\"max-height\", \"0px\");\n  } else {\n    $panel.css(\"max-height\", $panel.get(0).scrollHeight + \"px\");\n  }\n}\nfunction makeVirtualTourSection(property) {\n  return \"\\n      <section id=\\\"\".concat(property.id, \"\\\" class=\\\"gallery-section\\\">\\n        <div class=\\\"gallery-main__container container\\\">\\n          <h3 class=\\\"gallery-section__heading\\\">\").concat(property.title, \"</h3>\\n      \\n          <div class=\\\"primary-content__container\\\">\\n            <div class=\\\"primary-content two-story-content\\\">\\n              <h4 class=\\\"section-sub-heading\\\">360 Tour Demo</h4>\\n              <div class=\\\"resp-container\\\">\\n                <iframe title=\\\"\").concat(property.title, \" Virtual Tour\\\" class=\\\"resp-iframe\\\"\\n                  src='\").concat(property.matterportLink, \"' frameborder='0' allowfullscreen allow='vr'></iframe>\\n              </div>\\n            </div>\\n          </div>\\n      \\n          <div class=\\\"tour-link\\\">\\n            <h4 class=\\\"section-sub-heading\\\">360 Tour Link:</h4>\\n            <a href=\\\"\").concat(property.matterportLink, \"\\\"\\n              class=\\\"gallery-main__sect--link\\\">\").concat(property.matterportLink, \"</a>\\n          </div>   \\n        </div>\\n      </section>\\n    \");\n}\nfunction makeStillsSection(obj) {\n  return \"\\n      <section id=\\\"\".concat(obj.id, \"\\\" class=\\\"gallery-section\\\">\\n        <div class=\\\"gallery-main__container container\\\">\\n          <h3 class=\\\"gallery-section__heading\\\">\").concat(obj.title, \"</h3>\\n          \").concat(obj.stills.map(function (still) {\n    return createImagePopup(still);\n  }).join(\"\"), \"    \\n          <div id=\\\"stills\\\">\\n          \").concat(obj.stills.map(function (still) {\n    return createImageThumbnail(still);\n  }).join(\"\"), \"\\n          </div>\\n        </div>\\n      </section>\\n    \");\n}\n/* ==================================\n                PRIVATE\n  ==================================  */\n\nfunction createImageThumbnail(image) {\n  return \"\\n      <div class=\\\"image-box\\\" id=\\\"norm-\".concat(image.id, \"\\\">\\n        <a href=\\\"#pop-\").concat(image.id, \"\\\">\\n          <picture>\\n            <source class=\\\"lazy\\\" srcset=\\\"\").concat(image.thumbWebpSrc, \"\\\" alt=\\\"\").concat(image.title, \"\\\" type=\\\"image/webp\\\">\\n            <source class=\\\"lazy\\\" srcset=\\\"\").concat(image.thumbSrc, \"\\\" alt=\\\"\").concat(image.title, \"\\\" type=\\\"image/jpeg\\\">\\n            <img class=\\\"lazy\\\" src=\\\"\").concat(image.thumbSrc, \"\\\" alt=\\\"\").concat(image.title, \"\\\" type=\\\"image/jpg\\\">\\n          </picture>\\n        </a>\\n      </div>\\n    \");\n}\n\nfunction createImagePopup(image) {\n  return \"\\n      <div class=\\\"popup\\\" id=\\\"pop-\".concat(image.id, \"\\\">\\n        <div class=\\\"popup-content\\\">\\n          <picture>\\n            <source class=\\\"pop-img lazy\\\" data-srcset=\\\"\").concat(image.popWebpSrc, \"\\\" alt=\\\"\").concat(image.title, \"\\\"\\n              type=\\\"image/webp\\\">\\n            <img class=\\\"pop-img lazy\\\" data-src=\\\"\").concat(image.popSrc, \"\\\" alt=\\\"\").concat(image.title, \"\\\" type=\\\"image/jpg\\\">\\n          </picture>\\n          <a href=\\\"#stills\\\" class=\\\"close\\\">X</a>\\n        </div>\\n      </div>\\n    \");\n}\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ \"./src/global.js\");\n\n\n\nvar services = function services() {\n  Object(_global__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Initialize accordion functionality\n\n  $(\".accordion\").on(\"click\", _helpers__WEBPACK_IMPORTED_MODULE_0__[\"activateAccordion\"]);\n}; // Initialize\n\n\n$(services);\n\n//# sourceURL=webpack:///./src/services.js?");

/***/ })

/******/ });