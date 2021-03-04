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
/******/ 		"gallery": 0
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
/******/ 	deferredModules.push(["./src/gallery.js","gallery~global~index~services"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gallery-data/photos-data/drone.js":
/*!***********************************************!*\
  !*** ./src/gallery-data/photos-data/drone.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar drone = {\n  id: 'stills-drone',\n  title: '2.7k Drone Photos',\n  stills: [{\n    id: 'drone-valley',\n    thumbSrc: './assets/gallery-photos/2.7k-drone/drone-valley-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-valley-500w.webp',\n    popSrc: './assets/gallery-photos/2.7k-drone/drone-valley-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-valley-1500w.webp'\n  }, {\n    id: 'drone-pool',\n    thumbSrc: './assets/gallery-photos/2.7k-drone/drone-pool-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-pool-500w.webp',\n    popSrc: './assets/gallery-photos/2.7k-drone/drone-pool-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-pool-1500w.webp'\n  }, {\n    id: 'drone-pool-2',\n    thumbSrc: './assets/gallery-photos/2.7k-drone/drone-pool-2-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-pool-2-500w.webp',\n    popSrc: './assets/gallery-photos/2.7k-drone/drone-pool-2-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-pool-2-1500w.webp'\n  }, {\n    id: 'drone-house',\n    thumbSrc: './assets/gallery-photos/2.7k-drone/drone-house-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-house-500w.webp',\n    popSrc: './assets/gallery-photos/2.7k-drone/drone-house-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-house-1500w.webp'\n  }, {\n    id: 'drone-mall',\n    thumbSrc: './assets/gallery-photos/2.7k-drone/drone-mall-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-mall-500w.webp',\n    popSrc: './assets/gallery-photos/2.7k-drone/drone-mall-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-mall-1500w.webp'\n  }, {\n    id: 'drone-mall-2',\n    thumbSrc: './assets/gallery-photos/2.7k-drone/drone-mall-2-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-mall-2-500w.webp',\n    popSrc: './assets/gallery-photos/2.7k-drone/drone-mall-2-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-mall-2-1500w.webp'\n  }, {\n    id: 'drone-houses',\n    thumbSrc: './assets/gallery-photos/2.7k-drone/drone-houses-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-houses-500w.webp',\n    popSrc: './assets/gallery-photos/2.7k-drone/drone-houses-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-houses-1500w.webp'\n  }, {\n    id: 'drone-houses-2',\n    thumbSrc: './assets/gallery-photos/2.7k-drone/drone-houses-2-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-houses-2-500w.webp',\n    popSrc: './assets/gallery-photos/2.7k-drone/drone-houses-2-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-houses-2-1500w.webp'\n  }, {\n    id: 'drone-office-building',\n    thumbSrc: './assets/gallery-photos/2.7k-drone/drone-office-building-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-office-building-500w.webp',\n    popSrc: './assets/gallery-photos/2.7k-drone/drone-office-building-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-office-building-1500w.webp'\n  }, {\n    id: 'drone-pier',\n    thumbSrc: './assets/gallery-photos/2.7k-drone/drone-pier-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-pier-500w.webp',\n    popSrc: './assets/gallery-photos/2.7k-drone/drone-pier-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/2.7k-drone-webp/drone-pier-1500w.webp'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (drone);\n\n//# sourceURL=webpack:///./src/gallery-data/photos-data/drone.js?");

/***/ }),

/***/ "./src/gallery-data/photos-data/floor-plans.js":
/*!*****************************************************!*\
  !*** ./src/gallery-data/photos-data/floor-plans.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar floorPlans = {\n  id: 'stills-floor-plans',\n  title: 'Floor Plans',\n  stills: [{\n    id: 'plans-hazleton-irvine',\n    thumbSrc: './assets/gallery-photos/floor-plans/hazleton-irvine-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/floor-plans-webp/hazleton-irvine-500w.webp',\n    popSrc: './assets/gallery-photos/floor-plans/hazleton-irvine-1200w.jpg',\n    popWebpSrc: './assets/gallery-photos/floor-plans-webp/hazleton-irvine-1200w.webp'\n  }, {\n    id: 'plans-hazleton-irvine-2',\n    thumbSrc: './assets/gallery-photos/floor-plans/hazleton-irvine-2-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/floor-plans-webp/hazleton-irvine-2-500w.webp',\n    popSrc: './assets/gallery-photos/floor-plans/hazleton-irvine-2-1200w.jpg',\n    popWebpSrc: './assets/gallery-photos/floor-plans-webp/hazleton-irvine-2-1200w.webp'\n  }, {\n    id: 'plans-roca-way-monterey-park',\n    thumbSrc: './assets/gallery-photos/floor-plans/roca-way-monterey-park-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/floor-plans-webp/roca-way-monterey-park-500w.webp',\n    popSrc: './assets/gallery-photos/floor-plans/roca-way-monterey-park-1200w.jpg',\n    popWebpSrc: './assets/gallery-photos/floor-plans-webp/roca-way-monterey-park-1200w.webp'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (floorPlans);\n\n//# sourceURL=webpack:///./src/gallery-data/photos-data/floor-plans.js?");

/***/ }),

/***/ "./src/gallery-data/photos-data/matterport-pro-2.js":
/*!**********************************************************!*\
  !*** ./src/gallery-data/photos-data/matterport-pro-2.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar matterportPro2 = {\n  id: 'stills-matterportPro2',\n  title: 'Matterport Pro 2 Photos',\n  stills: [{\n    id: 'hazleton-1',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/82-Hazleton-1-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/82-Hazleton-1-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/82-Hazleton-1-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/82-Hazleton-1-1500w.webp'\n  }, {\n    id: 'hazleton-2',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/82-Hazleton-2-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/82-Hazleton-2-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/82-Hazleton-2-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/82-Hazleton-2-1500w.webp'\n  }, {\n    id: '990-presidio-dr',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/990-Presidio-Dr-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/990-Presidio-Dr-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/990-Presidio-Dr-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/990-Presidio-Dr-1500w.webp'\n  }, {\n    id: '1711-Morning-Dove-Ln',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/1711-Morning-Dove-Ln-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/1711-Morning-Dove-Ln-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/1711-Morning-Dove-Ln-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/1711-Morning-Dove-Ln-1500w.webp'\n  }, {\n    id: '4105-Edgehill-Dr',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/4105-Edgehill-Dr-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/4105-Edgehill-Dr-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/4105-Edgehill-Dr-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/4105-Edgehill-Dr-1500w.webp'\n  }, {\n    id: '4520-Gloria-Ave-1',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/4520-Gloria-Ave-1-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/4520-Gloria-Ave-1-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/4520-Gloria-Ave-1-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/4520-Gloria-Ave-1-1500w.webp'\n  }, {\n    id: '4520-Gloria-Ave-2',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/4520-Gloria-Ave-2-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/4520-Gloria-Ave-2-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/4520-Gloria-Ave-2-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/4520-Gloria-Ave-2-1500w.webp'\n  }, {\n    id: '13068-Edgemont-St',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/13068-Edgemont-St-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/13068-Edgemont-St-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/13068-Edgemont-St-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/13068-Edgemont-St-1500w.webp'\n  }, {\n    id: '15151-Friar-St',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/15151-Friar-St-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/15151-Friar-St-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/15151-Friar-St-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/15151-Friar-St-1500w.webp'\n  }, {\n    id: '16940-Chatsworth-St',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/16940-Chatsworth-St-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/16940-Chatsworth-St-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/16940-Chatsworth-St-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/16940-Chatsworth-St-1500w.webp'\n  }, {\n    id: '24708-Bombay-Ave',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/24708-Bombay-Ave-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/24708-Bombay-Ave-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/24708-Bombay-Ave-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/24708-Bombay-Ave-1500w.webp'\n  }, {\n    id: '9956-Shiloh-Ave',\n    thumbSrc: './assets/gallery-photos/matterport-pro-2/9956-Shiloh-Ave-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/9956-Shiloh-Ave-500w.webp',\n    popSrc: './assets/gallery-photos/matterport-pro-2/9956-Shiloh-Ave-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/matterport-pro-2-webp/9956-Shiloh-Ave-1500w.webp'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (matterportPro2);\n\n//# sourceURL=webpack:///./src/gallery-data/photos-data/matterport-pro-2.js?");

/***/ }),

/***/ "./src/gallery-data/photos-data/nikon.js":
/*!***********************************************!*\
  !*** ./src/gallery-data/photos-data/nikon.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar nikon = {\n  id: 'stills-nikon',\n  title: 'Nikon DSLR Photos',\n  stills: [{\n    id: 'drone-2nd-&-pch',\n    thumbSrc: './assets/gallery-photos/nikon-dslr/2nd-&-pch-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/nikon-dslr-webp/2nd-&-pch-500w.webp',\n    popSrc: './assets/gallery-photos/nikon-dslr/2nd-&-pch-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/nikon-dslr-webp/2nd-&-pch-1500w.webp'\n  }, {\n    id: 'drone-bedroom',\n    thumbSrc: './assets/gallery-photos/nikon-dslr/bedroom-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/nikon-dslr-webp/bedroom-500w.webp',\n    popSrc: './assets/gallery-photos/nikon-dslr/bedroom-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/nikon-dslr-webp/bedroom-1500w.webp'\n  }, {\n    id: 'drone-bedroom-2',\n    thumbSrc: './assets/gallery-photos/nikon-dslr/bedroom-2-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/nikon-dslr-webp/bedroom-2-500w.webp',\n    popSrc: './assets/gallery-photos/nikon-dslr/bedroom-2-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/nikon-dslr-webp/bedroom-2-1500w.webp'\n  }, {\n    id: 'drone-game-room',\n    thumbSrc: './assets/gallery-photos/nikon-dslr/game-room-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/nikon-dslr-webp/game-room-500w.webp',\n    popSrc: './assets/gallery-photos/nikon-dslr/game-room-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/nikon-dslr-webp/game-room-1500w.webp'\n  }, {\n    id: 'drone-backyard',\n    thumbSrc: './assets/gallery-photos/nikon-dslr/backyard-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/nikon-dslr-webp/backyard-500w.webp',\n    popSrc: './assets/gallery-photos/nikon-dslr/backyard-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/nikon-dslr-webp/backyard-1500w.webp'\n  }, {\n    id: 'drone-backyard-2',\n    thumbSrc: './assets/gallery-photos/nikon-dslr/backyard-2-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/nikon-dslr-webp/backyard-2-500w.webp',\n    popSrc: './assets/gallery-photos/nikon-dslr/backyard-2-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/nikon-dslr-webp/backyard-2-1500w.webp'\n  }, {\n    id: 'drone-frontyard',\n    thumbSrc: './assets/gallery-photos/nikon-dslr/frontyard-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/nikon-dslr-webp/frontyard-500w.webp',\n    popSrc: './assets/gallery-photos/nikon-dslr/frontyard-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/nikon-dslr-webp/frontyard-1500w.webp'\n  }, {\n    id: 'drone-frontyard-2',\n    thumbSrc: './assets/gallery-photos/nikon-dslr/frontyard-2-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/nikon-dslr-webp/frontyard-2-500w.webp',\n    popSrc: './assets/gallery-photos/nikon-dslr/frontyard-2-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/nikon-dslr-webp/frontyard-2-1500w.webp'\n  }, {\n    id: 'drone-dining-room',\n    thumbSrc: './assets/gallery-photos/nikon-dslr/dining-room-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/nikon-dslr-webp/dining-room-500w.webp',\n    popSrc: './assets/gallery-photos/nikon-dslr/dining-room-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/nikon-dslr-webp/dining-room-1500w.webp'\n  }, {\n    id: 'drone-dining-room-2',\n    thumbSrc: './assets/gallery-photos/nikon-dslr/dining-room-2-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/nikon-dslr-webp/dining-room-2-500w.webp',\n    popSrc: './assets/gallery-photos/nikon-dslr/dining-room-2-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/nikon-dslr-webp/dining-room-2-1500w.webp'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (nikon);\n\n//# sourceURL=webpack:///./src/gallery-data/photos-data/nikon.js?");

/***/ }),

/***/ "./src/gallery-data/photos-data/photos-data.js":
/*!*****************************************************!*\
  !*** ./src/gallery-data/photos-data/photos-data.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _matterport_pro_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matterport-pro-2 */ \"./src/gallery-data/photos-data/matterport-pro-2.js\");\n/* harmony import */ var _drone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drone */ \"./src/gallery-data/photos-data/drone.js\");\n/* harmony import */ var _nikon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nikon */ \"./src/gallery-data/photos-data/nikon.js\");\n/* harmony import */ var _virtual_staging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtual-staging */ \"./src/gallery-data/photos-data/virtual-staging.js\");\n/* harmony import */ var _floor_plans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./floor-plans */ \"./src/gallery-data/photos-data/floor-plans.js\");\n\n\n\n\n\nvar photosData = [_matterport_pro_2__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _drone__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _nikon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _virtual_staging__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _floor_plans__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (photosData);\n\n//# sourceURL=webpack:///./src/gallery-data/photos-data/photos-data.js?");

/***/ }),

/***/ "./src/gallery-data/photos-data/virtual-staging.js":
/*!*********************************************************!*\
  !*** ./src/gallery-data/photos-data/virtual-staging.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar virtualStaging = {\n  id: 'stills-virtual-staging',\n  title: 'Virtual Staging',\n  stills: [{\n    id: 'virtual-elm-dr-before',\n    thumbSrc: './assets/gallery-photos/virtual-staging/elm-dr-before-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/elm-dr-before-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/elm-dr-before-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/elm-dr-before-1500w.webp'\n  }, {\n    id: 'virtual-elm-dr-virtual',\n    thumbSrc: './assets/gallery-photos/virtual-staging/elm-dr-virtual-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/elm-dr-virtual-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/elm-dr-virtual-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/elm-dr-virtual-1500w.webp'\n  }, {\n    id: 'virtual-elm-dr-2-before',\n    thumbSrc: './assets/gallery-photos/virtual-staging/elm-dr-2-before-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/elm-dr-2-before-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/elm-dr-2-before-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/elm-dr-2-before-1500w.webp'\n  }, {\n    id: 'virtual-elm-dr-2-virtual',\n    thumbSrc: './assets/gallery-photos/virtual-staging/elm-dr-2-virtual-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/elm-dr-2-virtual-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/elm-dr-2-virtual-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/elm-dr-2-virtual-1500w.webp'\n  }, {\n    id: 'virtual-monterey-ave-before',\n    thumbSrc: './assets/gallery-photos/virtual-staging/monterey-ave-before-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-before-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/monterey-ave-before-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-before-1500w.webp'\n  }, {\n    id: 'virtual-monterey-ave-virtual',\n    thumbSrc: './assets/gallery-photos/virtual-staging/monterey-ave-virtual-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-virtual-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/monterey-ave-virtual-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-virtual-1500w.webp'\n  }, {\n    id: 'virtual-monterey-ave-2-before',\n    thumbSrc: './assets/gallery-photos/virtual-staging/monterey-ave-2-before-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-2-before-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/monterey-ave-2-before-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-2-before-1500w.webp'\n  }, {\n    id: 'virtual-monterey-ave-2-virtual',\n    thumbSrc: './assets/gallery-photos/virtual-staging/monterey-ave-2-virtual-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-2-virtual-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/monterey-ave-2-virtual-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-2-virtual-1500w.webp'\n  }, {\n    id: 'virtual-monterey-ave-3-before',\n    thumbSrc: './assets/gallery-photos/virtual-staging/monterey-ave-3-before-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-3-before-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/monterey-ave-3-before-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-3-before-1500w.webp'\n  }, {\n    id: 'virtual-monterey-ave-3-virtual',\n    thumbSrc: './assets/gallery-photos/virtual-staging/monterey-ave-3-virtual-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-3-virtual-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/monterey-ave-3-virtual-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/monterey-ave-3-virtual-1500w.webp'\n  }, {\n    id: 'virtual-lincoln-st-before',\n    thumbSrc: './assets/gallery-photos/virtual-staging/lincoln-st-before-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/lincoln-st-before-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/lincoln-st-before-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/lincoln-st-before-1500w.webp'\n  }, {\n    id: 'virtual-lincoln-st-virtual',\n    thumbSrc: './assets/gallery-photos/virtual-staging/lincoln-st-virtual-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/lincoln-st-virtual-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/lincoln-st-virtual-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/lincoln-st-virtual-1500w.webp'\n  }, {\n    id: 'virtual-lincoln-st-2-before',\n    thumbSrc: './assets/gallery-photos/virtual-staging/lincoln-st-2-before-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/lincoln-st-2-before-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/lincoln-st-2-before-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/lincoln-st-2-before-1500w.webp'\n  }, {\n    id: 'virtual-lincoln-st-2-virtual',\n    thumbSrc: './assets/gallery-photos/virtual-staging/lincoln-st-2-virtual-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/lincoln-st-2-virtual-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/lincoln-st-2-virtual-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/lincoln-st-2-virtual-1500w.webp'\n  }, {\n    id: 'virtual-bedroom-before',\n    thumbSrc: './assets/gallery-photos/virtual-staging/bedroom-before-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/bedroom-before-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/bedroom-before-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/bedroom-before-1500w.webp'\n  }, {\n    id: 'virtual-bedroom-virtual',\n    thumbSrc: './assets/gallery-photos/virtual-staging/bedroom-virtual-500w.jpg',\n    thumbWebpSrc: './assets/gallery-photos/virtual-staging-webp/bedroom-virtual-500w.webp',\n    popSrc: './assets/gallery-photos/virtual-staging/bedroom-virtual-1500w.jpg',\n    popWebpSrc: './assets/gallery-photos/virtual-staging-webp/bedroom-virtual-1500w.webp'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (virtualStaging);\n\n//# sourceURL=webpack:///./src/gallery-data/photos-data/virtual-staging.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/2-story-house.js":
/*!*********************************************************!*\
  !*** ./src/gallery-data/virtual-tours/2-story-house.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar twoStoryHouse = {\n  id: 'twoStoryHouse',\n  title: '2 Story House',\n  matterportLink: 'https://my.matterport.com/show/?m=TrcK1ZYb8m6'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (twoStoryHouse);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/2-story-house.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/4-plex.js":
/*!**************************************************!*\
  !*** ./src/gallery-data/virtual-tours/4-plex.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar fourPlex = {\n  id: 'fourPlex',\n  title: '4-Plex',\n  matterportLink: 'https://my.matterport.com/show/?m=afxgJA4ALGq'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (fourPlex);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/4-plex.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/budget_warehouse.js":
/*!************************************************************!*\
  !*** ./src/gallery-data/virtual-tours/budget_warehouse.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar budgetWarehouse = {\n  id: 'budgetWarehouse',\n  title: 'Budget Warehouse',\n  matterportLink: 'https://my.matterport.com/show/?m=undQxgYvmA7'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (budgetWarehouse);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/budget_warehouse.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/happy-paws.js":
/*!******************************************************!*\
  !*** ./src/gallery-data/virtual-tours/happy-paws.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar happyPaws = {\n  id: 'happyPaws',\n  title: 'Happy Paws Grooming',\n  matterportLink: 'https://my.matterport.com/show/?m=wtKwoxzn2H8'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (happyPaws);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/happy-paws.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/hollywood-estate.js":
/*!************************************************************!*\
  !*** ./src/gallery-data/virtual-tours/hollywood-estate.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar hollywoodEstate = {\n  id: 'hollywoodEstate',\n  title: 'Hollywood Hills Estate',\n  matterportLink: 'https://my.matterport.com/show/?m=2Dxkj6c6Wf1'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (hollywoodEstate);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/hollywood-estate.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/hollywood-home-guest.js":
/*!****************************************************************!*\
  !*** ./src/gallery-data/virtual-tours/hollywood-home-guest.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar hollywoodHomeGuest = {\n  id: 'hollywoodHomeGuest',\n  title: 'Hollywood Hills Home with Guest House',\n  matterportLink: 'https://my.matterport.com/show/?m=3GYdw4MnKf7'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (hollywoodHomeGuest);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/hollywood-home-guest.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/keller-williams.js":
/*!***********************************************************!*\
  !*** ./src/gallery-data/virtual-tours/keller-williams.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar kellerWilliams = {\n  id: 'kellerWilliams',\n  title: 'Keller Williams Signature Realty',\n  matterportLink: 'https://my.matterport.com/show/?m=v5BKc8t9guG'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (kellerWilliams);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/keller-williams.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/palisades.js":
/*!*****************************************************!*\
  !*** ./src/gallery-data/virtual-tours/palisades.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar palisades = {\n  id: 'palisades',\n  title: 'Pacific Palisades Mansion',\n  matterportLink: 'https://my.matterport.com/show/?m=woH8sLvK4gp'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (palisades);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/palisades.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/san-gabriel-mini-mansion.js":
/*!********************************************************************!*\
  !*** ./src/gallery-data/virtual-tours/san-gabriel-mini-mansion.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar sanGabMiniMans = {\n  id: 'sanGabMiniMans',\n  title: 'San Gabriel Valley Mini Mansion',\n  matterportLink: 'https://my.matterport.com/show/?m=jpo1xxZWoGi'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (sanGabMiniMans);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/san-gabriel-mini-mansion.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/senior-assisted-living.js":
/*!******************************************************************!*\
  !*** ./src/gallery-data/virtual-tours/senior-assisted-living.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar seniorLiving = {\n  id: 'seniorLiving',\n  title: 'Senior Assisted Living Home',\n  matterportLink: 'https://my.matterport.com/show/?m=6AGcit2xL4h'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (seniorLiving);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/senior-assisted-living.js?");

/***/ }),

/***/ "./src/gallery-data/virtual-tours/virtual-tours.js":
/*!*********************************************************!*\
  !*** ./src/gallery-data/virtual-tours/virtual-tours.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _palisades__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palisades */ \"./src/gallery-data/virtual-tours/palisades.js\");\n/* harmony import */ var _budget_warehouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget_warehouse */ \"./src/gallery-data/virtual-tours/budget_warehouse.js\");\n/* harmony import */ var _2_story_house__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2-story-house */ \"./src/gallery-data/virtual-tours/2-story-house.js\");\n/* harmony import */ var _hollywood_estate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hollywood-estate */ \"./src/gallery-data/virtual-tours/hollywood-estate.js\");\n/* harmony import */ var _keller_williams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keller-williams */ \"./src/gallery-data/virtual-tours/keller-williams.js\");\n/* harmony import */ var _senior_assisted_living__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./senior-assisted-living */ \"./src/gallery-data/virtual-tours/senior-assisted-living.js\");\n/* harmony import */ var _happy_paws__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./happy-paws */ \"./src/gallery-data/virtual-tours/happy-paws.js\");\n/* harmony import */ var _san_gabriel_mini_mansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./san-gabriel-mini-mansion */ \"./src/gallery-data/virtual-tours/san-gabriel-mini-mansion.js\");\n/* harmony import */ var _hollywood_home_guest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hollywood-home-guest */ \"./src/gallery-data/virtual-tours/hollywood-home-guest.js\");\n/* harmony import */ var _4_plex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./4-plex */ \"./src/gallery-data/virtual-tours/4-plex.js\");\n\n\n\n\n\n\n\n\n\n\nvar virtualTours = [_palisades__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _budget_warehouse__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _2_story_house__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _hollywood_estate__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _keller_williams__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _senior_assisted_living__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _happy_paws__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _san_gabriel_mini_mansion__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _hollywood_home_guest__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _4_plex__WEBPACK_IMPORTED_MODULE_9__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (virtualTours);\n\n//# sourceURL=webpack:///./src/gallery-data/virtual-tours/virtual-tours.js?");

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gallery_data_virtual_tours_virtual_tours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-data/virtual-tours/virtual-tours */ \"./src/gallery-data/virtual-tours/virtual-tours.js\");\n/* harmony import */ var _gallery_data_photos_data_photos_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-data/photos-data/photos-data */ \"./src/gallery-data/photos-data/photos-data.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ \"./src/global.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\n\n\nvar gallery = function gallery() {\n  Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Remove loading animation\n\n  $(\".loader-container\").addClass(\"remove\"); // Initialize accordion functionality\n\n  $(\".accordion\").on(\"click\", _helpers__WEBPACK_IMPORTED_MODULE_3__[\"activateAccordion\"]); // Smooth scroll for safari and ios browsers\n\n  $(\".gallery-main__nav-link\").smoothScroll(); // Insert first property into DOM\n\n  var $galleryMain = $(\".gallery-main\");\n  $galleryMain.html(Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"makeVirtualTourSection\"])(_gallery_data_virtual_tours_virtual_tours__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]));\n  var ImagesSlickConfig = {\n    dots: true,\n    infinite: true,\n    speed: 300,\n    slidesToShow: 4,\n    slidesToScroll: 4,\n    responsive: [{\n      breakpoint: 800,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 2\n      }\n    }, {\n      breakpoint: 670,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }]\n  };\n\n  function imagesInit() {\n    // Lazy load images using remote cdn\n    var lazyLoad = new LazyLoad({\n      elements_selector: \".lazy\"\n    }); // Slick\n\n    $(\"#stills\").slick(ImagesSlickConfig);\n  }\n\n  imagesInit(); // Add link event listener\n\n  $(\".gallery-main__nav\").on(\"click\", function (evt) {\n    if (evt.target.tagName !== \"A\") return;\n\n    if (evt.target.href.includes(\"#stills\")) {\n      var stillsObj = _gallery_data_photos_data_photos_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(function (obj) {\n        return evt.target.href.includes(obj.id);\n      });\n      $galleryMain.html(Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"makeStillsSection\"])(stillsObj));\n      imagesInit();\n      return;\n    }\n\n    var property = _gallery_data_virtual_tours_virtual_tours__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(function (prop) {\n      return evt.target.href.includes(prop.id);\n    });\n    $galleryMain.html(Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"makeVirtualTourSection\"])(property));\n    imagesInit();\n  });\n}; // Initialize\n\n\n$(gallery);\n\n//# sourceURL=webpack:///./src/gallery.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: activateAccordion, makeVirtualTourSection, makeStillsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateAccordion\", function() { return activateAccordion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeVirtualTourSection\", function() { return makeVirtualTourSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeStillsSection\", function() { return makeStillsSection; });\n/* \n==========================================\n        *** HELPER FUNCTIONS  ***\n==========================================\n*/\nfunction activateAccordion() {\n  $(this).toggleClass(\"active\");\n  var $panel = $(this).next();\n\n  if (parseInt($panel.css(\"max-height\"))) {\n    $panel.css(\"max-height\", \"0px\");\n  } else {\n    $panel.css(\"max-height\", $panel.get(0).scrollHeight + \"px\");\n  }\n}\nfunction makeVirtualTourSection(property) {\n  return \"\\n      <section id=\\\"\".concat(property.id, \"\\\" class=\\\"gallery-section\\\">\\n        <div class=\\\"gallery-main__container container\\\">\\n          <h3 class=\\\"gallery-section__heading\\\">\").concat(property.title, \"</h3>\\n      \\n          <div class=\\\"primary-content__container\\\">\\n            <div class=\\\"primary-content two-story-content\\\">\\n              <h4 class=\\\"section-sub-heading\\\">360 Tour Demo</h4>\\n              <div class=\\\"resp-container\\\">\\n                <iframe title=\\\"\").concat(property.title, \" Virtual Tour\\\" class=\\\"resp-iframe\\\"\\n                  src='\").concat(property.matterportLink, \"' frameborder='0' allowfullscreen allow='vr'></iframe>\\n              </div>\\n            </div>\\n          </div>\\n      \\n          <div class=\\\"tour-link\\\">\\n            <h4 class=\\\"section-sub-heading\\\">360 Tour Link:</h4>\\n            <a href=\\\"\").concat(property.matterportLink, \"\\\"\\n              class=\\\"gallery-main__sect--link\\\">\").concat(property.matterportLink, \"</a>\\n          </div>   \\n        </div>\\n      </section>\\n    \");\n}\nfunction makeStillsSection(obj) {\n  return \"\\n      <section id=\\\"\".concat(obj.id, \"\\\" class=\\\"gallery-section\\\">\\n        <div class=\\\"gallery-main__container container\\\">\\n          <h3 class=\\\"gallery-section__heading\\\">\").concat(obj.title, \"</h3>\\n          \").concat(obj.stills.map(function (still) {\n    return createImagePopup(still);\n  }).join(\"\"), \"    \\n          <div id=\\\"stills\\\">\\n          \").concat(obj.stills.map(function (still) {\n    return createImageThumbnail(still);\n  }).join(\"\"), \"\\n          </div>\\n        </div>\\n      </section>\\n    \");\n}\n/* ==================================\n                PRIVATE\n  ==================================  */\n\nfunction createImageThumbnail(image) {\n  return \"\\n      <div class=\\\"image-box\\\" id=\\\"norm-\".concat(image.id, \"\\\">\\n        <a href=\\\"#pop-\").concat(image.id, \"\\\">\\n          <picture>\\n            <source class=\\\"lazy\\\" srcset=\\\"\").concat(image.thumbWebpSrc, \"\\\" alt=\\\"\").concat(image.title, \"\\\" type=\\\"image/webp\\\">\\n            <source class=\\\"lazy\\\" srcset=\\\"\").concat(image.thumbSrc, \"\\\" alt=\\\"\").concat(image.title, \"\\\" type=\\\"image/jpeg\\\">\\n            <img class=\\\"lazy\\\" src=\\\"\").concat(image.thumbSrc, \"\\\" alt=\\\"\").concat(image.title, \"\\\" type=\\\"image/jpg\\\">\\n          </picture>\\n        </a>\\n      </div>\\n    \");\n}\n\nfunction createImagePopup(image) {\n  return \"\\n      <div class=\\\"popup\\\" id=\\\"pop-\".concat(image.id, \"\\\">\\n        <div class=\\\"popup-content\\\">\\n          <picture>\\n            <source class=\\\"pop-img lazy\\\" data-srcset=\\\"\").concat(image.popWebpSrc, \"\\\" alt=\\\"\").concat(image.title, \"\\\"\\n              type=\\\"image/webp\\\">\\n            <img class=\\\"pop-img lazy\\\" data-src=\\\"\").concat(image.popSrc, \"\\\" alt=\\\"\").concat(image.title, \"\\\" type=\\\"image/jpg\\\">\\n          </picture>\\n          <a href=\\\"#stills\\\" class=\\\"close\\\">X</a>\\n        </div>\\n      </div>\\n    \");\n}\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ })

/******/ });