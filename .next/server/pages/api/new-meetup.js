module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst handler = async (req, res) => {\n  if (!req.method === 'POST') return;\n  const data = req.body;\n  const password = process.env.password;\n  const username = process.env.username;\n  const database = process.env.database;\n  const url = `mongodb+srv://${username}:${password}@learning.j1yvg.mongodb.net/${database}?retryWrites=true&w=majority`;\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(url);\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups');\n  const result = await meetupsCollection.insertOne(data);\n  client.close();\n  res.status(201).json({\n    message: 'meetup inserted'\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInBhc3N3b3JkIiwicHJvY2VzcyIsImVudiIsInVzZXJuYW1lIiwiZGF0YWJhc2UiLCJ1cmwiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbkMsTUFBSSxDQUFDRCxHQUFHLENBQUNFLE1BQUwsS0FBZ0IsTUFBcEIsRUFBNEI7QUFDNUIsUUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQWpCO0FBRUEsUUFBTUMsUUFBUSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBN0I7QUFDQSxRQUFNRyxRQUFRLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUE3QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlFLFFBQTdCO0FBRUEsUUFBTUMsR0FBRyxHQUFJLGlCQUFnQkYsUUFBUyxJQUFHSCxRQUFTLCtCQUE4QkksUUFBUyw4QkFBekY7QUFDQSxRQUFNRSxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQkgsR0FBcEIsQ0FBckI7QUFDQSxRQUFNSSxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBRUEsUUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUI7QUFFQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQWxCLENBQTRCZixJQUE1QixDQUFyQjtBQUVBUSxRQUFNLENBQUNRLEtBQVA7QUFFQWxCLEtBQUcsQ0FBQ21CLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQUFyQjtBQUNBLENBbkJEOztBQXFCZXZCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cdGlmICghcmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSByZXR1cm47XG5cdGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuXHRjb25zdCBwYXNzd29yZCA9IHByb2Nlc3MuZW52LnBhc3N3b3JkO1xuXHRjb25zdCB1c2VybmFtZSA9IHByb2Nlc3MuZW52LnVzZXJuYW1lO1xuXHRjb25zdCBkYXRhYmFzZSA9IHByb2Nlc3MuZW52LmRhdGFiYXNlO1xuXG5cdGNvbnN0IHVybCA9IGBtb25nb2RiK3NydjovLyR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9QGxlYXJuaW5nLmoxeXZnLm1vbmdvZGIubmV0LyR7ZGF0YWJhc2V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWA7XG5cdGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJsKTtcblx0Y29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuXHRjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG5cblx0Y2xpZW50LmNsb3NlKCk7XG5cblx0cmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnbWVldHVwIGluc2VydGVkJyB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });