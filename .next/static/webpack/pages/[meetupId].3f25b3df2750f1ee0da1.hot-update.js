webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\n\n\nvar _jsxFileName = \"/Users/SashaVerdiyev/Desktop/WebDev/react_course/nextJs/pages/[meetupId]/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar Dummy_Meetups = [{\n  id: 'm1',\n  title: 'first meetup',\n  image: 'https://images.unsplash.com/photo-1640210178824-d029d3cfd676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',\n  address: 'lviv',\n  description: 'describe me '\n}, {\n  id: 'm2',\n  title: 'first meetup',\n  image: 'https://images.unsplash.com/photo-1640210178824-d029d3cfd676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',\n  address: 'lviv',\n  description: 'describe me '\n}];\n\nfunction MeetupDetails(props) {\n  _s();\n\n  var meetup = props.meetup;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  if (router.isFallback) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 33\n  }, this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Head, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [meetup.title, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"browse these meetups pls\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: meetup.image,\n      description: meetup.description,\n      address: meetup.address,\n      title: meetup.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(MeetupDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = MeetupDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"MeetupDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz85MmE2Il0sIm5hbWVzIjpbIkR1bW15X01lZXR1cHMiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJtZWV0dXAiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGNBRlQ7QUFHRUMsT0FBSyxFQUNILGdLQUpKO0FBS0VDLFNBQU8sRUFBRSxNQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBRG9CLEVBU3BCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxjQUZUO0FBR0VDLE9BQUssRUFDSCxnS0FKSjtBQUtFQyxTQUFPLEVBQUUsTUFMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQVRvQixDQUF0Qjs7QUFtQkEsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFBQSxNQUNwQkMsTUFEb0IsR0FDVEQsS0FEUyxDQUNwQkMsTUFEb0I7QUFHNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQUlELE1BQU0sQ0FBQ0UsVUFBWCxFQUF1QixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRXZCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsSUFBRDtBQUFBLDhCQUNFO0FBQUEsbUJBQVFILE1BQU0sQ0FBQ04sS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLHFFQUFDLHdFQUFEO0FBQ0UsV0FBSyxFQUFFTSxNQUFNLENBQUNMLEtBRGhCO0FBRUUsaUJBQVcsRUFBRUssTUFBTSxDQUFDSCxXQUZ0QjtBQUdFLGFBQU8sRUFBRUcsTUFBTSxDQUFDSixPQUhsQjtBQUlFLFdBQUssRUFBRUksTUFBTSxDQUFDTjtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQSxrQkFERjtBQWVEOztHQXRCUUksYTtVQUdRSSxxRDs7O0tBSFJKLGE7O0FBaUZNQSw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwnO1xuXG5jb25zdCBEdW1teV9NZWV0dXBzID0gW1xuICB7XG4gICAgaWQ6ICdtMScsXG4gICAgdGl0bGU6ICdmaXJzdCBtZWV0dXAnLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjQwMjEwMTc4ODI0LWQwMjlkM2NmZDY3Nj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MSZxPTgwJyxcbiAgICBhZGRyZXNzOiAnbHZpdicsXG4gICAgZGVzY3JpcHRpb246ICdkZXNjcmliZSBtZSAnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdtMicsXG4gICAgdGl0bGU6ICdmaXJzdCBtZWV0dXAnLFxuICAgIGltYWdlOlxuICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjQwMjEwMTc4ODI0LWQwMjlkM2NmZDY3Nj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MSZxPTgwJyxcbiAgICBhZGRyZXNzOiAnbHZpdicsXG4gICAgZGVzY3JpcHRpb246ICdkZXNjcmliZSBtZSAnLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gTWVldHVwRGV0YWlscyhwcm9wcykge1xuICBjb25zdCB7IG1lZXR1cCB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e21lZXR1cC50aXRsZX0gPC90aXRsZT5cblxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nYnJvd3NlIHRoZXNlIG1lZXR1cHMgcGxzJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1lZXR1cERldGFpbFxuICAgICAgICBpbWFnZT17bWVldHVwLmltYWdlfVxuICAgICAgICBkZXNjcmlwdGlvbj17bWVldHVwLmRlc2NyaXB0aW9ufVxuICAgICAgICBhZGRyZXNzPXttZWV0dXAuYWRkcmVzc31cbiAgICAgICAgdGl0bGU9e21lZXR1cC50aXRsZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGFzc3dvcmQgPSAnYVVTakpoTzdlVWtPT0MxdCc7XG4gIGNvbnN0IHVzZXJuYW1lID0gJ2xlYXJuaW5nbmV4dCc7XG4gIGNvbnN0IGRhdGFiYXNlID0gJ25leHRKc0RCJztcblxuICBjb25zdCB1cmwgPSBgbW9uZ29kYitzcnY6Ly8ke3VzZXJuYW1lfToke3Bhc3N3b3JkfUBsZWFybmluZy5qMXl2Zy5tb25nb2RiLm5ldC8ke2RhdGFiYXNlfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xuXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmwpO1xuICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcbiAgY29uc3QgbG9hZGVkTWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcblxuICBjbGllbnQuY2xvc2UoKTtcblxuICBsZXQgbWVldHVwc0lkID0gbG9hZGVkTWVldHVwcy5tYXAoKG1lZXR1cCkgPT4ge1xuICAgIGNvbnN0IG1lZXR1cElkID0gbWVldHVwLl9pZC50b1N0cmluZygpO1xuICAgIHJldHVybiB7IHBhcmFtczogeyBtZWV0dXBJZCB9IH07XG4gIH0pO1xuXG4gIHJldHVybiB7IGZhbGxiYWNrOiB0cnVlLCBwYXRoczogbWVldHVwc0lkIH07XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczoge3NsdWd9IH0pIHtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcGFzc3dvcmQgPSAnYVVTakpoTzdlVWtPT0MxdCc7XG4gIGNvbnN0IHVzZXJuYW1lID0gJ2xlYXJuaW5nbmV4dCc7XG4gIGNvbnN0IGRhdGFiYXNlID0gJ25leHRKc0RCJztcblxuICBjb25zdCB1cmwgPSBgbW9uZ29kYitzcnY6Ly8ke3VzZXJuYW1lfToke3Bhc3N3b3JkfUBsZWFybmluZy5qMXl2Zy5tb25nb2RiLm5ldC8ke2RhdGFiYXNlfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xuXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmwpO1xuICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcbiAgY29uc3QgeyBtZWV0dXBJZCB9ID0gY29udGV4dC5wYXJhbXM7XG4gIGNvbnN0IGxvYWRlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe1xuICAgIF9pZDogT2JqZWN0SWQobWVldHVwSWQpLFxuICB9KTtcbiAgY29uc29sZS5sb2coJ/CfmoAgfiBnZXRTdGF0aWNQcm9wcyB+IGxvYWRlZE1lZXR1cCcsIGxvYWRlZE1lZXR1cCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgY29uc3QgbWVldHVwID0ge1xuICAgIHRpdGxlOiBsb2FkZWRNZWV0dXAudGl0bGUsXG4gICAgYWRkcmVzczogbG9hZGVkTWVldHVwLmFkZHJlc3MsXG4gICAgaW1hZ2U6IGxvYWRlZE1lZXR1cC5pbWFnZSxcbiAgICBkZXNjcmlwdGlvbjogbG9hZGVkTWVldHVwLmRlc2NyaXB0aW9uLFxuICAgIGlkOiBsb2FkZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBtZWV0dXA6IG1lZXR1cCB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ })

})