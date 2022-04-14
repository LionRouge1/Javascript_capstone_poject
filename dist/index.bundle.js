/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assest/8984.webp */ "./src/assest/8984.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #e8e9ea;\n  --bar-color: #fafafa;\n  --hd-color: #ffcb05;\n  --color: #ed1c24;\n  --nd-color: #545862;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Fira Sans', sans-serif;\n  color: var(--nd-color);\n}\n\nbody {\n  background-color: white;\n}\n\nheader {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  font-weight: 900;\n  font-size: 34px;\n  align-items: center;\n  background-color: var(--hd-color);\n  height: 45px;\n}\n\nheader > span {\n  color: var(--bar-color);\n}\n\nheader > .fa-bars {\n  display: none;\n}\n\nnav {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  z-index: 100;\n  justify-content: space-between;\n  height: 70px;\n  background-color: #fafafa54;\n}\n\n.logo {\n  margin-left: 10%;\n}\n\n.logo img {\n  height: 70px;\n}\n\n.menu {\n  width: 30%;\n}\n\n.menu > ul {\n  display: flex;\n  height: 70px;\n}\n\n.menu li {\n  width: 100px;\n  height: 70px;\n  padding: 5px 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10px;\n  transition: 0.2s background-color;\n}\n\n.menu li:hover {\n background-color: #ed1c2331;\n border-top: 5px solid var(--color);\n padding-top: 0;\n color: var(--bar-color);\n}\n\n.menu li:hover a {\n color: var(--bar-color);\n}\n\n.menu > ul a {\n text-decoration: none;\n font-weight: 500;\n line-height: 14px;\n font-size: 20px;\n color: white;\n}\n\n/* style the main */\n\n.main_head {\n  width: 100%;\n  height: 60vh;\n  position: relative;\n  display: block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  z-index: 0;\n  background-repeat: no-repeat;\n}\n\n.main_head > h1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(50deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);\n  border-radius: 50%;\n  top: 30%;\n  position: absolute;\n  left: 45%;\n  text-align: center;\n  font-size: 50px;\n  color: var(--color);\n  line-height: 58px;\n  font-weight: 900;\n  animation: flash 3s ease-in;\n  animation-iteration-count: infinite;\n}\n\n@keyframes flash {\n  0% {background-image: linear-gradient(50deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  20% {background-image: linear-gradient(80deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  40% {background-image: linear-gradient(110deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  50% {background-image: linear-gradient(130deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  60% {background-image: linear-gradient(190deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  70% {background-image: linear-gradient(230deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  80% {background-image: linear-gradient(300deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  90% {background-image: linear-gradient(360deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  100% {background-image: linear-gradient(50deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n}\n\n.main_head h1 > span {\n  display: block;\n  position: absolute;\n  top: 15px;\n  left: 157px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: var(--color);\n}\n\n.main_head > p {\n  width: 450px;\n  position: absolute;\n  bottom: 2%;\n  background-color: white;\n  font-size: 24px;\n  left: 3%;\n  padding: 20px;\n  text-align: center;\n}\n\n.meals_container {\n  width: 70%;\n  margin: 0 auto;\n}\n\n.meals_container article {\n  display: inline-block;\n  width: 400px;\n  margin: 20px;\n  padding-bottom: 10px;\n  box-shadow: 0 0 10px var(--nd-color);\n  transition: 0.3s transform;\n}\n\n.meals_container article:hover {\n  transform: scale(1.02);\n}\n\n.meal_img {\n  width: 100%;\n  height: 300px;\n}\n\n.meal_img > img {\n  width: 100%;\n  height: 100%;\n}\n\n.title {\n  margin: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.like_box > span {\n  display: inline-block;\n  width: 20px;\n}\n\n.like_box .fas {\n  font-size: 28px;\n  margin-right: 10px;\n}\n\n.inst {\n  margin: 15px;\n  height: 39px;\n}\n\n.btn_comment {\n  margin: 5px auto;\n  display: block;\n  width: 100px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  height: 30px;\n  box-shadow: 3px 3px 0 #dd1a32;\n  transition: 0.2s box-shadow;\n}\n\n.btn_comment:hover {\n border: 2px solid #dd1a32;\n box-shadow: none;\n}\n\n.CA {\n  width: 0;\n  margin: 25px auto auto 15px;\n  border: 2px  solid var(--hd-color);\n}\n\n.CA > span {\n  display: inline-block;\n  width: 100px;\n  margin: 0 10px;\n  font-size: 12px;\n}\n\n/* style footer */\n\nfooter {\n  align-items: center;\n  align-content: center;\n  padding: 1.5rem;\n  border: 2px solid grey;\n  background-color: #dd1a32;\n  color: var(--bar-color);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n:root {\n  --bg-color: #e8e9ea;\n  --bar-color: #fafafa;\n  --hd-color: #ffcb05;\n  --color: #ed1c24;\n  --nd-color: #545862;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Fira Sans', sans-serif;\n  color: var(--nd-color);\n}\n\nbody {\n  background-color: white;\n}\n\nheader {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  font-weight: 900;\n  font-size: 34px;\n  align-items: center;\n  background-color: var(--hd-color);\n  height: 45px;\n}\n\nheader > span {\n  color: var(--bar-color);\n}\n\nheader > .fa-bars {\n  display: none;\n}\n\nnav {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  z-index: 100;\n  justify-content: space-between;\n  height: 70px;\n  background-color: #fafafa54;\n}\n\n.logo {\n  margin-left: 10%;\n}\n\n.logo img {\n  height: 70px;\n}\n\n.menu {\n  width: 30%;\n}\n\n.menu > ul {\n  display: flex;\n  height: 70px;\n}\n\n.menu li {\n  width: 100px;\n  height: 70px;\n  padding: 5px 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10px;\n  transition: 0.2s background-color;\n}\n\n.menu li:hover {\n background-color: #ed1c2331;\n border-top: 5px solid var(--color);\n padding-top: 0;\n color: var(--bar-color);\n}\n\n.menu li:hover a {\n color: var(--bar-color);\n}\n\n.menu > ul a {\n text-decoration: none;\n font-weight: 500;\n line-height: 14px;\n font-size: 20px;\n color: white;\n}\n\n/* style the main */\n\n.main_head {\n  width: 100%;\n  height: 60vh;\n  position: relative;\n  display: block;\n  background-image: url('assest/8984.webp');\n  background-size: cover;\n  z-index: 0;\n  background-repeat: no-repeat;\n}\n\n.main_head > h1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(50deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);\n  border-radius: 50%;\n  top: 30%;\n  position: absolute;\n  left: 45%;\n  text-align: center;\n  font-size: 50px;\n  color: var(--color);\n  line-height: 58px;\n  font-weight: 900;\n  animation: flash 3s ease-in;\n  animation-iteration-count: infinite;\n}\n\n@keyframes flash {\n  0% {background-image: linear-gradient(50deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  20% {background-image: linear-gradient(80deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  40% {background-image: linear-gradient(110deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  50% {background-image: linear-gradient(130deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  60% {background-image: linear-gradient(190deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  70% {background-image: linear-gradient(230deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  80% {background-image: linear-gradient(300deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  90% {background-image: linear-gradient(360deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n  100% {background-image: linear-gradient(50deg,rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);}\n}\n\n.main_head h1 > span {\n  display: block;\n  position: absolute;\n  top: 15px;\n  left: 157px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: var(--color);\n}\n\n.main_head > p {\n  width: 450px;\n  position: absolute;\n  bottom: 2%;\n  background-color: white;\n  font-size: 24px;\n  left: 3%;\n  padding: 20px;\n  text-align: center;\n}\n\n.meals_container {\n  width: 70%;\n  margin: 0 auto;\n}\n\n.meals_container article {\n  display: inline-block;\n  width: 400px;\n  margin: 20px;\n  padding-bottom: 10px;\n  box-shadow: 0 0 10px var(--nd-color);\n  transition: 0.3s transform;\n}\n\n.meals_container article:hover {\n  transform: scale(1.02);\n}\n\n.meal_img {\n  width: 100%;\n  height: 300px;\n}\n\n.meal_img > img {\n  width: 100%;\n  height: 100%;\n}\n\n.title {\n  margin: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.like_box > span {\n  display: inline-block;\n  width: 20px;\n}\n\n.like_box .fas {\n  font-size: 28px;\n  margin-right: 10px;\n}\n\n.inst {\n  margin: 15px;\n  height: 39px;\n}\n\n.btn_comment {\n  margin: 5px auto;\n  display: block;\n  width: 100px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  height: 30px;\n  box-shadow: 3px 3px 0 #dd1a32;\n  transition: 0.2s box-shadow;\n}\n\n.btn_comment:hover {\n border: 2px solid #dd1a32;\n box-shadow: none;\n}\n\n.CA {\n  width: 0;\n  margin: 25px auto auto 15px;\n  border: 2px  solid var(--hd-color);\n}\n\n.CA > span {\n  display: inline-block;\n  width: 100px;\n  margin: 0 10px;\n  font-size: 12px;\n}\n\n/* style footer */\n\nfooter {\n  align-items: center;\n  align-content: center;\n  padding: 1.5rem;\n  border: 2px solid grey;\n  background-color: #dd1a32;\n  color: var(--bar-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style_mobile.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style_mobile.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 650px) {\n nav {\n   display: none;\n }\n}", "",{"version":3,"sources":["webpack://./src/style_mobile.css"],"names":[],"mappings":"AAAA;CACC;GACE,aAAa;CACf;AACD","sourcesContent":["@media only screen and (max-width: 650px) {\n nav {\n   display: none;\n }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style_mobile.css":
/*!******************************!*\
  !*** ./src/style_mobile.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_mobile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style_mobile.css */ "./node_modules/css-loader/dist/cjs.js!./src/style_mobile.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Likes.js":
/*!******************************!*\
  !*** ./src/modules/Likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Likes)
/* harmony export */ });
class Likes {
 constructor(item_id = '', url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O7NaeKDfq7oZ1XEIy2sV/likes/') {
  this.item_id = item_id;
  this.url = url;
  this.liked = localStorage.getItem('liked') != null
        ? JSON.parse(localStorage.getItem('liked')) 
        : '';
  this.data = {
   "item_id": this.item_id,
 };
 }

 saveLiked(TSave = this.liked) {
  const storeLiked = JSON.stringify(TSave);
  localStorage.setItem('liked', storeLiked);
}

 async getLikes() {
  const response = await fetch(this.url);
  const json = await response.json();
  return json;
 }

 async postLikes() {
  const option = {
   method: 'POST',
   headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(this.data),
  };

  if (this.liked === '' || this.liked.lenght === 0) {
    const response = fetch(this.url, option);
    response.then(() => {
      this.liked = [this.data];
      this.saveLiked();
    });
    return true;
  } else {
    const likedSort = this.liked.map((item) => item.item_id);
    if (likedSort.includes(this.item_id)) {
      return false;
    }else {
      const response = fetch(this.url, option);
      response.then(() => {
        this.liked.push(this.data);
        this.saveLiked();
      });
      return true;
    }
  }
 };
}


/***/ }),

/***/ "./src/modules/homePage.js":
/*!*********************************!*\
  !*** ./src/modules/homePage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json.meals;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/assest/8984.webp":
/*!******************************!*\
  !*** ./src/assest/8984.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9a453a29ddbc74c0f63.webp";

/***/ }),

/***/ "./src/assest/logo1.png":
/*!******************************!*\
  !*** ./src/assest/logo1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca58aacdf91229539b06.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_mobile_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style_mobile.css */ "./src/style_mobile.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assest_logo1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assest/logo1.png */ "./src/assest/logo1.png");
/* harmony import */ var _modules_homePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/homePage.js */ "./src/modules/homePage.js");
/* harmony import */ var _modules_Likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Likes.js */ "./src/modules/Likes.js");





 
const mylogo = new Image();
mylogo.src = _assest_logo1_png__WEBPACK_IMPORTED_MODULE_2__;

const container = document.querySelector('.meals_container');

const logo = document.querySelector('.logo');
logo.appendChild(mylogo);

const display = async () => {
 const meals = await (0,_modules_homePage_js__WEBPACK_IMPORTED_MODULE_3__["default"])('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
 let liked = [];
 if (localStorage.getItem('liked') != null) {
  const lik = JSON.parse(localStorage.getItem('liked'));
  liked = lik.map((item) => item.item_id);
 }

 meals.forEach(({idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb}) => {
  const article = `
  <article>
   <div class="meal_img"><img src="${strMealThumb}" alt=""></div>
   <div class="title"><h3>${strMeal}</h3>
   <div class="like_box"><span class="nbr_like"></span><span style=" color: ${liked.includes('item_' + idMeal) ? '#ed1c24' : ''}" liked="${liked.includes('item_' + idMeal) ? 'true' : 'false'}" class="fas fa-thumbs-up" id="item_${idMeal}"></span></div>
   </div>
   <p class="inst">${strInstructions.slice(0,100)}....</p>
   <p class="CA"><span><strong>Category:</strong> ${strCategory}</span><span><strong>Area:</strong> ${strArea}</span></p>
   <button id=${idMeal} class="btn_comment btn" >Comments</button>
   
  </article>`;
  container.insertAdjacentHTML('beforeend', article);
 });
};

const ftnLikes = async () => {
 const like_icon = document.querySelectorAll('.fa-thumbs-up');
 like_icon.forEach(element => {
  element.addEventListener('click', async (e) => {
   const nbrLike = e.target.previousSibling;
   const likeIcon = e.target;
   let i = +nbrLike.textContent;
   const sdLink = new _modules_Likes_js__WEBPACK_IMPORTED_MODULE_4__["default"](likeIcon.id);
   const check = await sdLink.postLikes();

   if (check) {
    i++;
    nbrLike.innerHTML = i;
   }

   if (likeIcon.getAttribute('liked') === 'false') {
    likeIcon.style.color = '#ed1c24';
    likeIcon.setAttribute('liked', 'true');
   } else if((likeIcon.getAttribute('liked') === 'true')) {
    likeIcon.style.color = '';
    likeIcon.setAttribute('liked', 'false');
   }
  });
 });
}; 


const dplLikes = async () => {
 const sdLink = new _modules_Likes_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
 sdLink.getLikes().then((value) => {
  value.forEach(({likes, item_id}) => {
   document.getElementById(item_id).previousSibling.textContent = likes;
  });
 });
};

display()
.then(dplLikes)
.then(ftnLikes);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlB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LGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckI0QjtBQUNQO0FBQ2lCO0FBQ007QUFDTDtBQUN2QztBQUNBO0FBQ0EsYUFBYSw4Q0FBSTs7QUFFakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnRUFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxRUFBcUU7QUFDdEY7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xELDRCQUE0QixRQUFRO0FBQ3BDLDhFQUE4RSxrREFBa0QsV0FBVyxvREFBb0Qsc0NBQXNDLE9BQU87QUFDNU87QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xELG9EQUFvRCxZQUFZLHNDQUFzQyxRQUFRO0FBQzlHLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5REFBSztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7O0FBR0E7QUFDQSxvQkFBb0IseURBQUs7QUFDekI7QUFDQSxrQkFBa0IsZUFBZTtBQUNqQztBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL3N0eWxlX21vYmlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL3N0eWxlX21vYmlsZS5jc3M/NDEwZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL21vZHVsZXMvTGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvbW9kdWxlcy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2VzdC84OTg0LndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2FuczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmctY29sb3I6ICNlOGU5ZWE7XFxuICAtLWJhci1jb2xvcjogI2ZhZmFmYTtcXG4gIC0taGQtY29sb3I6ICNmZmNiMDU7XFxuICAtLWNvbG9yOiAjZWQxYzI0O1xcbiAgLS1uZC1jb2xvcjogIzU0NTg2MjtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1uZC1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGQtY29sb3IpO1xcbiAgaGVpZ2h0OiA0NXB4O1xcbn1cXG5cXG5oZWFkZXIgPiBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1iYXItY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgPiAuZmEtYmFycyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTU0O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4ubG9nbyBpbWcge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4ubWVudSA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5tZW51IGxpIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIHRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZC1jb2xvcjtcXG59XFxuXFxuLm1lbnUgbGk6aG92ZXIge1xcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzIzMzE7XFxuIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxuIHBhZGRpbmctdG9wOiAwO1xcbiBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXG59XFxuXFxuLm1lbnUgbGk6aG92ZXIgYSB7XFxuIGNvbG9yOiB2YXIoLS1iYXItY29sb3IpO1xcbn1cXG5cXG4ubWVudSA+IHVsIGEge1xcbiB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuIGZvbnQtd2VpZ2h0OiA1MDA7XFxuIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiBmb250LXNpemU6IDIwcHg7XFxuIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogc3R5bGUgdGhlIG1haW4gKi9cXG5cXG4ubWFpbl9oZWFkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHotaW5kZXg6IDA7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubWFpbl9oZWFkID4gaDEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0b3A6IDMwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDQ1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICBsaW5lLWhlaWdodDogNThweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBhbmltYXRpb246IGZsYXNoIDNzIGVhc2UtaW47XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmbGFzaCB7XFxuICAwJSB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDUwZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpO31cXG4gIDIwJSB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDgwZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpO31cXG4gIDQwJSB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDExMGRlZyxyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTt9XFxuICA1MCUge2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7fVxcbiAgNjAlIHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTkwZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpO31cXG4gIDcwJSB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIzMGRlZyxyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTt9XFxuICA4MCUge2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDBkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7fVxcbiAgOTAlIHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpO31cXG4gIDEwMCUge2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZyxyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTt9XFxufVxcblxcbi5tYWluX2hlYWQgaDEgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNXB4O1xcbiAgbGVmdDogMTU3cHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcXG59XFxuXFxuLm1haW5faGVhZCA+IHAge1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAyJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGVmdDogMyU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbHNfY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1lYWxzX2NvbnRhaW5lciBhcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tbmQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XFxufVxcblxcbi5tZWFsc19jb250YWluZXIgYXJ0aWNsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG5cXG4ubWVhbF9pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4ubWVhbF9pbWcgPiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlrZV9ib3ggPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ubGlrZV9ib3ggLmZhcyB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5pbnN0IHtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGhlaWdodDogMzlweDtcXG59XFxuXFxuLmJ0bl9jb21tZW50IHtcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMCAjZGQxYTMyO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBib3gtc2hhZG93O1xcbn1cXG5cXG4uYnRuX2NvbW1lbnQ6aG92ZXIge1xcbiBib3JkZXI6IDJweCBzb2xpZCAjZGQxYTMyO1xcbiBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uQ0Ege1xcbiAgd2lkdGg6IDA7XFxuICBtYXJnaW46IDI1cHggYXV0byBhdXRvIDE1cHg7XFxuICBib3JkZXI6IDJweCAgc29saWQgdmFyKC0taGQtY29sb3IpO1xcbn1cXG5cXG4uQ0EgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4vKiBzdHlsZSBmb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQxYTMyO1xcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQ0FBaUM7QUFDbkM7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0Isa0NBQWtDO0NBQ2xDLGNBQWM7Q0FDZCx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsWUFBWTtBQUNiOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseURBQXlDO0VBQ3pDLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixpSUFBaUk7RUFDakksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLElBQUksaUlBQWlJLENBQUM7RUFDdEksS0FBSyxpSUFBaUksQ0FBQztFQUN2SSxLQUFLLGtJQUFrSSxDQUFDO0VBQ3hJLEtBQUssa0lBQWtJLENBQUM7RUFDeEksS0FBSyxrSUFBa0ksQ0FBQztFQUN4SSxLQUFLLGtJQUFrSSxDQUFDO0VBQ3hJLEtBQUssa0lBQWtJLENBQUM7RUFDeEksS0FBSyxrSUFBa0ksQ0FBQztFQUN4SSxNQUFNLGlJQUFpSSxDQUFDO0FBQzFJOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsUUFBUTtFQUNSLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsMkJBQTJCO0FBQzdCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGdCQUFnQjtBQUNqQjs7QUFFQTtFQUNFLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStTYW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjZThlOWVhO1xcbiAgLS1iYXItY29sb3I6ICNmYWZhZmE7XFxuICAtLWhkLWNvbG9yOiAjZmZjYjA1O1xcbiAgLS1jb2xvcjogI2VkMWMyNDtcXG4gIC0tbmQtY29sb3I6ICM1NDU4NjI7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tbmQtY29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhkLWNvbG9yKTtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuXFxuaGVhZGVyID4gc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyID4gLmZhLWJhcnMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE1NDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLm1lbnUgPiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4ubWVudSBsaSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGJhY2tncm91bmQtY29sb3I7XFxufVxcblxcbi5tZW51IGxpOmhvdmVyIHtcXG4gYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyMzMxO1xcbiBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tY29sb3IpO1xcbiBwYWRkaW5nLXRvcDogMDtcXG4gY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxufVxcblxcbi5tZW51IGxpOmhvdmVyIGEge1xcbiBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXG59XFxuXFxuLm1lbnUgPiB1bCBhIHtcXG4gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiBmb250LXdlaWdodDogNTAwO1xcbiBsaW5lLWhlaWdodDogMTRweDtcXG4gZm9udC1zaXplOiAyMHB4O1xcbiBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIHN0eWxlIHRoZSBtYWluICovXFxuXFxuLm1haW5faGVhZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3Nlc3QvODk4NC53ZWJwJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgei1pbmRleDogMDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5tYWluX2hlYWQgPiBoMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZyxyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRvcDogMzAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGFuaW1hdGlvbjogZmxhc2ggM3MgZWFzZS1pbjtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcXG4gIDAlIHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7fVxcbiAgMjAlIHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoODBkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7fVxcbiAgNDAlIHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpO31cXG4gIDUwJSB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzMGRlZyxyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTt9XFxuICA2MCUge2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxOTBkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7fVxcbiAgNzAlIHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjMwZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpO31cXG4gIDgwJSB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwMGRlZyxyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTt9XFxuICA5MCUge2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7fVxcbiAgMTAwJSB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDUwZGVnLHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpO31cXG59XFxuXFxuLm1haW5faGVhZCBoMSA+IHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1cHg7XFxuICBsZWZ0OiAxNTdweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4ubWFpbl9oZWFkID4gcCB7XFxuICB3aWR0aDogNDUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDIlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsZWZ0OiAzJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZWFsc19jb250YWluZXIge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWVhbHNfY29udGFpbmVyIGFydGljbGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1uZC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcXG59XFxuXFxuLm1lYWxzX2NvbnRhaW5lciBhcnRpY2xlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcblxcbi5tZWFsX2ltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5tZWFsX2ltZyA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5saWtlX2JveCA+IHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5saWtlX2JveCAuZmFzIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmluc3Qge1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgaGVpZ2h0OiAzOXB4O1xcbn1cXG5cXG4uYnRuX2NvbW1lbnQge1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAwICNkZDFhMzI7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGJveC1zaGFkb3c7XFxufVxcblxcbi5idG5fY29tbWVudDpob3ZlciB7XFxuIGJvcmRlcjogMnB4IHNvbGlkICNkZDFhMzI7XFxuIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5DQSB7XFxuICB3aWR0aDogMDtcXG4gIG1hcmdpbjogMjVweCBhdXRvIGF1dG8gMTVweDtcXG4gIGJvcmRlcjogMnB4ICBzb2xpZCB2YXIoLS1oZC1jb2xvcik7XFxufVxcblxcbi5DQSA+IHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi8qIHN0eWxlIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDFhMzI7XFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xcbiBuYXYge1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlX21vYmlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQztHQUNFLGFBQWE7Q0FDZjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gbmF2IHtcXG4gICBkaXNwbGF5OiBub25lO1xcbiB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9tb2JpbGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9tb2JpbGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2VzIHtcbiBjb25zdHJ1Y3RvcihpdGVtX2lkID0gJycsIHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9PN05hZUtEZnE3b1oxWEVJeTJzVi9saWtlcy8nKSB7XG4gIHRoaXMuaXRlbV9pZCA9IGl0ZW1faWQ7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmxpa2VkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpa2VkJykgIT0gbnVsbFxuICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpa2VkJykpIFxuICAgICAgICA6ICcnO1xuICB0aGlzLmRhdGEgPSB7XG4gICBcIml0ZW1faWRcIjogdGhpcy5pdGVtX2lkLFxuIH07XG4gfVxuXG4gc2F2ZUxpa2VkKFRTYXZlID0gdGhpcy5saWtlZCkge1xuICBjb25zdCBzdG9yZUxpa2VkID0gSlNPTi5zdHJpbmdpZnkoVFNhdmUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlrZWQnLCBzdG9yZUxpa2VkKTtcbn1cblxuIGFzeW5jIGdldExpa2VzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb247XG4gfVxuXG4gYXN5bmMgcG9zdExpa2VzKCkge1xuICBjb25zdCBvcHRpb24gPSB7XG4gICBtZXRob2Q6ICdQT1NUJyxcbiAgIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICB9LFxuICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpLFxuICB9O1xuXG4gIGlmICh0aGlzLmxpa2VkID09PSAnJyB8fCB0aGlzLmxpa2VkLmxlbmdodCA9PT0gMCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2godGhpcy51cmwsIG9wdGlvbik7XG4gICAgcmVzcG9uc2UudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmxpa2VkID0gW3RoaXMuZGF0YV07XG4gICAgICB0aGlzLnNhdmVMaWtlZCgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxpa2VkU29ydCA9IHRoaXMubGlrZWQubWFwKChpdGVtKSA9PiBpdGVtLml0ZW1faWQpO1xuICAgIGlmIChsaWtlZFNvcnQuaW5jbHVkZXModGhpcy5pdGVtX2lkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1lbHNlIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2godGhpcy51cmwsIG9wdGlvbik7XG4gICAgICByZXNwb25zZS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5saWtlZC5wdXNoKHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuc2F2ZUxpa2VkKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuIH07XG59XG4iLCJjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBqc29uLm1lYWxzO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGVfbW9iaWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBJY29uIGZyb20gJy4vYXNzZXN0L2xvZ28xLnBuZyc7XG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuL21vZHVsZXMvaG9tZVBhZ2UuanMnO1xuaW1wb3J0IExpa2VzIGZyb20gJy4vbW9kdWxlcy9MaWtlcy5qcyc7XG4gXG5jb25zdCBteWxvZ28gPSBuZXcgSW1hZ2UoKTtcbm15bG9nby5zcmMgPSBJY29uO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHNfY29udGFpbmVyJyk7XG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xubG9nby5hcHBlbmRDaGlsZChteWxvZ28pO1xuXG5jb25zdCBkaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xuIGNvbnN0IG1lYWxzID0gYXdhaXQgZ2V0RGF0YSgnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/Zj1hJyk7XG4gbGV0IGxpa2VkID0gW107XG4gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpICE9IG51bGwpIHtcbiAgY29uc3QgbGlrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlrZWQnKSk7XG4gIGxpa2VkID0gbGlrLm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkKTtcbiB9XG5cbiBtZWFscy5mb3JFYWNoKCh7aWRNZWFsLCBzdHJNZWFsLCBzdHJDYXRlZ29yeSwgc3RyQXJlYSwgc3RySW5zdHJ1Y3Rpb25zLCBzdHJNZWFsVGh1bWJ9KSA9PiB7XG4gIGNvbnN0IGFydGljbGUgPSBgXG4gIDxhcnRpY2xlPlxuICAgPGRpdiBjbGFzcz1cIm1lYWxfaW1nXCI+PGltZyBzcmM9XCIke3N0ck1lYWxUaHVtYn1cIiBhbHQ9XCJcIj48L2Rpdj5cbiAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPjxoMz4ke3N0ck1lYWx9PC9oMz5cbiAgIDxkaXYgY2xhc3M9XCJsaWtlX2JveFwiPjxzcGFuIGNsYXNzPVwibmJyX2xpa2VcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCIgY29sb3I6ICR7bGlrZWQuaW5jbHVkZXMoJ2l0ZW1fJyArIGlkTWVhbCkgPyAnI2VkMWMyNCcgOiAnJ31cIiBsaWtlZD1cIiR7bGlrZWQuaW5jbHVkZXMoJ2l0ZW1fJyArIGlkTWVhbCkgPyAndHJ1ZScgOiAnZmFsc2UnfVwiIGNsYXNzPVwiZmFzIGZhLXRodW1icy11cFwiIGlkPVwiaXRlbV8ke2lkTWVhbH1cIj48L3NwYW4+PC9kaXY+XG4gICA8L2Rpdj5cbiAgIDxwIGNsYXNzPVwiaW5zdFwiPiR7c3RySW5zdHJ1Y3Rpb25zLnNsaWNlKDAsMTAwKX0uLi4uPC9wPlxuICAgPHAgY2xhc3M9XCJDQVwiPjxzcGFuPjxzdHJvbmc+Q2F0ZWdvcnk6PC9zdHJvbmc+ICR7c3RyQ2F0ZWdvcnl9PC9zcGFuPjxzcGFuPjxzdHJvbmc+QXJlYTo8L3N0cm9uZz4gJHtzdHJBcmVhfTwvc3Bhbj48L3A+XG4gICA8YnV0dG9uIGlkPSR7aWRNZWFsfSBjbGFzcz1cImJ0bl9jb21tZW50IGJ0blwiID5Db21tZW50czwvYnV0dG9uPlxuICAgXG4gIDwvYXJ0aWNsZT5gO1xuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBhcnRpY2xlKTtcbiB9KTtcbn07XG5cbmNvbnN0IGZ0bkxpa2VzID0gYXN5bmMgKCkgPT4ge1xuIGNvbnN0IGxpa2VfaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS10aHVtYnMtdXAnKTtcbiBsaWtlX2ljb24uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICBjb25zdCBuYnJMaWtlID0gZS50YXJnZXQucHJldmlvdXNTaWJsaW5nO1xuICAgY29uc3QgbGlrZUljb24gPSBlLnRhcmdldDtcbiAgIGxldCBpID0gK25ickxpa2UudGV4dENvbnRlbnQ7XG4gICBjb25zdCBzZExpbmsgPSBuZXcgTGlrZXMobGlrZUljb24uaWQpO1xuICAgY29uc3QgY2hlY2sgPSBhd2FpdCBzZExpbmsucG9zdExpa2VzKCk7XG5cbiAgIGlmIChjaGVjaykge1xuICAgIGkrKztcbiAgICBuYnJMaWtlLmlubmVySFRNTCA9IGk7XG4gICB9XG5cbiAgIGlmIChsaWtlSWNvbi5nZXRBdHRyaWJ1dGUoJ2xpa2VkJykgPT09ICdmYWxzZScpIHtcbiAgICBsaWtlSWNvbi5zdHlsZS5jb2xvciA9ICcjZWQxYzI0JztcbiAgICBsaWtlSWNvbi5zZXRBdHRyaWJ1dGUoJ2xpa2VkJywgJ3RydWUnKTtcbiAgIH0gZWxzZSBpZigobGlrZUljb24uZ2V0QXR0cmlidXRlKCdsaWtlZCcpID09PSAndHJ1ZScpKSB7XG4gICAgbGlrZUljb24uc3R5bGUuY29sb3IgPSAnJztcbiAgICBsaWtlSWNvbi5zZXRBdHRyaWJ1dGUoJ2xpa2VkJywgJ2ZhbHNlJyk7XG4gICB9XG4gIH0pO1xuIH0pO1xufTsgXG5cblxuY29uc3QgZHBsTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gY29uc3Qgc2RMaW5rID0gbmV3IExpa2VzKCk7XG4gc2RMaW5rLmdldExpa2VzKCkudGhlbigodmFsdWUpID0+IHtcbiAgdmFsdWUuZm9yRWFjaCgoe2xpa2VzLCBpdGVtX2lkfSkgPT4ge1xuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbV9pZCkucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50ID0gbGlrZXM7XG4gIH0pO1xuIH0pO1xufTtcblxuZGlzcGxheSgpXG4udGhlbihkcGxMaWtlcylcbi50aGVuKGZ0bkxpa2VzKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=