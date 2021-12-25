module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("kqZg");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "YEck":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kqZg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__("YEck");
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);

// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js





function MeetupDetail({
  image,
  address,
  description,
  title
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: MeetupDetail_module_default.a.detail,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: image,
      alt: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("address", {
      children: address
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: description
    })]
  });
}

/* harmony default export */ var meetups_MeetupDetail = (MeetupDetail);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/[meetupId]/index.js








const Dummy_Meetups = [{
  id: 'm1',
  title: 'first meetup',
  image: 'https://images.unsplash.com/photo-1640210178824-d029d3cfd676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
  address: 'lviv',
  description: 'describe me '
}, {
  id: 'm2',
  title: 'first meetup',
  image: 'https://images.unsplash.com/photo-1640210178824-d029d3cfd676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
  address: 'lviv',
  description: 'describe me '
}];

function MeetupDetails(props) {
  const {
    meetup
  } = props;
  const router = Object(router_["useRouter"])();
  if (router.isFallback) return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: "Loading..."
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        children: [meetup.title, " "]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "browse these meetups pls"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupDetail, {
      image: meetup.image,
      description: meetup.description,
      address: meetup.address,
      title: meetup.title
    })]
  });
}

async function getStaticPaths() {
  const password = 'aUSjJhO7eUkOOC1t';
  const username = 'learningnext';
  const database = 'nextJsDB';
  const url = `mongodb+srv://${username}:${password}@learning.j1yvg.mongodb.net/${database}?retryWrites=true&w=majority`;
  const client = new external_mongodb_["MongoClient"](url);
  await client.connect();
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const loadedMeetups = await meetupsCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  let meetupsId = loadedMeetups.map(meetup => {
    const meetupId = meetup._id.toString();

    return {
      params: {
        meetupId
      }
    };
  });
  return {
    fallback: true,
    paths: meetupsId
  };
} // export async function getStaticProps({ params: {slug} }) {

async function getStaticProps(context) {
  const password = 'aUSjJhO7eUkOOC1t';
  const username = 'learningnext';
  const database = 'nextJsDB';
  const url = `mongodb+srv://${username}:${password}@learning.j1yvg.mongodb.net/${database}?retryWrites=true&w=majority`;
  const client = new external_mongodb_["MongoClient"](url);
  await client.connect();
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const {
    meetupId
  } = context.params;
  const loadedMeetup = await meetupsCollection.findOne({
    _id: Object(external_mongodb_["ObjectId"])(meetupId)
  });
  console.log('🚀 ~ getStaticProps ~ loadedMeetup', loadedMeetup);
  client.close();
  const meetup = {
    title: loadedMeetup.title,
    address: loadedMeetup.address,
    image: loadedMeetup.image,
    description: loadedMeetup.description,
    id: loadedMeetup._id.toString()
  };
  return {
    props: {
      meetup: meetup
    }
  };
}
/* harmony default export */ var _meetupId_ = __webpack_exports__["default"] = (MeetupDetails);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });