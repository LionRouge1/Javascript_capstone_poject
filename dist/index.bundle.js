/* eslint-disable semi-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable wrap-iife */
/* eslint-disable operator-linebreak */
/* eslint-disable keyword-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable object-shorthand */
/* eslint-disable dot-notation */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-multi-spaces */
/* eslint-disable object-curly-newline */
/* eslint-disable key-spacing */
/* eslint-disable quote-props */
/* eslint-disable comma-spacing */
/* eslint-disable prefer-template */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable no-constant-condition */
/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-useless-escape */
/* eslint-disable brace-style */
/* eslint-disable no-new-func */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable new-cap */
/* eslint-disable no-var */
/* eslint-disable spaced-comment */
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #e8e9ea;\n  --bar-color: #fafafa;\n  --hd-color: #ffcb05;\n  --color: #ed1c24;\n  --nd-color: #545862;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Fira Sans', sans-serif;\n  color: var(--nd-color);\n}\n\nbody {\n  background-color: white;\n}\n\nheader {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  font-weight: 900;\n  font-size: 34px;\n  align-items: center;\n  background-color: var(--hd-color);\n  height: 45px;\n  z-index: 100;\n}\n\nheader > span {\n  color: var(--bar-color);\n}\n\nheader > .fa-bars {\n  display: none;\n}\n\nnav {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n  justify-content: space-between;\n  height: 70px;\n  background-color: #fafafa54;\n}\n\n.logo {\n  margin-left: 10%;\n}\n\n.logo img {\n  height: 70px;\n}\n\n.menu {\n  width: 30%;\n}\n\n.menu > ul {\n  display: flex;\n  height: 70px;\n}\n\n.food-details > li {\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  font-size: 22px;\n  padding: 1rem;\n}\n\n.menu li {\n  width: 100px;\n  height: 70px;\n  padding: 5px 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10px;\n  transition: 0.2s background-color;\n}\n\n.menu li:hover {\n  background-color: #ed1c2331;\n  border-top: 5px solid var(--color);\n  padding-top: 0;\n  color: var(--bar-color);\n}\n\n.menu > ul a {\n  text-decoration: none;\n  font-weight: 500;\n  line-height: 14px;\n  font-size: 20px;\n  color: white;\n}\n\n.menu li:hover a {\n  color: var(--bar-color);\n}\n\n/* style the main */\n\n.main_head {\n  width: 100%;\n  height: 60vh;\n  position: relative;\n  display: block;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  z-index: 0;\n  background-repeat: no-repeat;\n}\n\n.main_head > h1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);\n  border-radius: 50%;\n  top: 30%;\n  position: absolute;\n  left: 45%;\n  text-align: center;\n  font-size: 50px;\n  color: var(--color);\n  line-height: 58px;\n  font-weight: 900;\n  animation: flash 3s ease-in;\n  animation-iteration-count: infinite;\n}\n\n@keyframes flash {\n  0% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  20% { background-image: linear-gradient(80deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  40% { background-image: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  50% { background-image: linear-gradient(130deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  60% { background-image: linear-gradient(190deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  70% { background-image: linear-gradient(230deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  80% { background-image: linear-gradient(300deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  90% { background-image: linear-gradient(360deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  100% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n}\n\n.like_box > span {\n  display: inline-block;\n  width: 20px;\n  margin: 0 5px;\n}\n\n.CA {\n  width: 0;\n  margin: 25px auto auto 15px;\n  border: 2px  solid var(--hd-color);\n}\n\n.CA > span {\n  display: inline-block;\n  width: 100px;\n  margin: 0 10px;\n  font-size: 12px;\n}\n\n.main_head h1 > span {\n  display: block;\n  position: absolute;\n  top: 15px;\n  left: 157px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: var(--color);\n}\n\n.main_head > p {\n  width: 450px;\n  position: absolute;\n  bottom: 2%;\n  background-color: white;\n  font-size: 24px;\n  left: 3%;\n  padding: 20px;\n  text-align: center;\n}\n\n.meals_container {\n  width: 70%;\n  margin: 0 auto;\n}\n\n.meals_container article {\n  display: inline-block;\n  width: 400px;\n  margin: 20px;\n  padding-bottom: 10px;\n  box-shadow: 0 0 10px var(--nd-color);\n  transition: 0.3s transform;\n}\n\n.meals_container article:hover {\n  transform: scale(1.02);\n}\n\n.meal_img {\n  width: 100%;\n  height: 300px;\n}\n\n.meal_img > img {\n  width: 100%;\n  height: 100%;\n}\n\n.title {\n  margin: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.like_box {\n  display: inline-block;\n  position: relative;\n}\n\n.like_box .fas {\n  font-size: 28px;\n  margin-right: 10px;\n}\n\n.like_box .pop {\n  content: \"toto\";\n  visibility: hidden;\n  width: 100px;\n  background-color: #555;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 80%;\n  margin-left: -75px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.like_box .pop::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 55%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n}\n\n.inst {\n  margin: 15px;\n  height: 39px;\n}\n\n.btn_comment,\n.comment-place-btn {\n  margin: 5px auto;\n  display: block;\n  width: 100px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  height: 30px;\n  box-shadow: 3px 3px 0 #dd1a32;\n  transition: 0.2s box-shadow;\n}\n\n.btn_comment:hover {\n  border: 2px solid #dd1a32;\n  box-shadow: none;\n}\n\n/* comment section */\n\n.comment-section {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  border: 2px solid grey;\n  background-color: rgb(251, 251, 247);\n  color: black;\n  z-index: 100;\n  backdrop-filter: blur(4px);\n  top: -0.5rem;\n  cursor: pointer;\n  padding: 2rem;\n  overflow: scroll;\n}\n\n.close-icon {\n  position: absolute;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.3;\n}\n\n.close-.close-icon {\n  opacity: 1;\n}\n\n.close-icon::before,\n.close-icon::after {\n  position: absolute;\n  left: 15px;\n  content: ' ';\n  height: 33px;\n  width: 2px;\n  background-color: rgb(9, 9, 9);\n}\n\n.close-icon::before {\n  transform: rotate(45deg);\n}\n\n.close-icon::after {\n  transform: rotate(-45deg);\n}\n\n.meal-name {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 32px;\n  background-color: var(--color);\n}\n\n.food-details {\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  font-size: 22px;\n  padding: 1rem;\n  border: 2px solid rgb(180, 173, 173);\n}\n\n.bar {\n  width: 0;\n  border: 2px  solid var(--hd-color);\n}\n\n.display-comments {\n  display: flex;\n  justify-content: center;\n  color: black;\n  font-size: 24px;\n}\n\n.comment {\n  background-color: #cbcccf;\n  display: inline-block;\n  width: 80%;\n  margin-left: 8rem;\n}\n\n.comment-input,\n.comment-area {\n  padding: 0.5rem;\n  margin: 5px auto;\n  display: block;\n  font-size: 18px;\n  border: none;\n  border-radius: 5px;\n  transition: 0.2s box-shadow;\n}\n\n.add-comment {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 28px;\n}\n\n.food-instruction {\n  color: gray;\n}\n\n.comment-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0.5rem;\n  color: #e8e9ea;\n  transition: 0.2s box-shadow;\n  list-style: none;\n  border: 2px solid gray;\n  margin-left: 25rem;\n  width: 50%;\n  padding: 2rem;\n}\n\n.meal-display {\n  display: inline-block;\n  width: 80%;\n  margin-left: 8rem;\n  padding-bottom: 10px;\n  box-shadow: 0 0 10px var(--hd-color);\n  transition: 0.3s transform;\n  background-color: #f8f9fc;\n}\n\n.comment-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border: 10px solid goldenrod;\n  width: 30%;\n}\n\n/* style footer */\n\nfooter {\n  align-items: center;\n  align-content: center;\n  padding: 1.5rem;\n  border: 2px solid grey;\n  background-color: #dd1a32;\n  color: var(--bar-color);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n:root {\n  --bg-color: #e8e9ea;\n  --bar-color: #fafafa;\n  --hd-color: #ffcb05;\n  --color: #ed1c24;\n  --nd-color: #545862;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Fira Sans', sans-serif;\n  color: var(--nd-color);\n}\n\nbody {\n  background-color: white;\n}\n\nheader {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  font-weight: 900;\n  font-size: 34px;\n  align-items: center;\n  background-color: var(--hd-color);\n  height: 45px;\n  z-index: 100;\n}\n\nheader > span {\n  color: var(--bar-color);\n}\n\nheader > .fa-bars {\n  display: none;\n}\n\nnav {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n  justify-content: space-between;\n  height: 70px;\n  background-color: #fafafa54;\n}\n\n.logo {\n  margin-left: 10%;\n}\n\n.logo img {\n  height: 70px;\n}\n\n.menu {\n  width: 30%;\n}\n\n.menu > ul {\n  display: flex;\n  height: 70px;\n}\n\n.food-details > li {\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  font-size: 22px;\n  padding: 1rem;\n}\n\n.menu li {\n  width: 100px;\n  height: 70px;\n  padding: 5px 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10px;\n  transition: 0.2s background-color;\n}\n\n.menu li:hover {\n  background-color: #ed1c2331;\n  border-top: 5px solid var(--color);\n  padding-top: 0;\n  color: var(--bar-color);\n}\n\n.menu > ul a {\n  text-decoration: none;\n  font-weight: 500;\n  line-height: 14px;\n  font-size: 20px;\n  color: white;\n}\n\n.menu li:hover a {\n  color: var(--bar-color);\n}\n\n/* style the main */\n\n.main_head {\n  width: 100%;\n  height: 60vh;\n  position: relative;\n  display: block;\n  background-image: url('assest/8984.webp');\n  background-size: cover;\n  z-index: 0;\n  background-repeat: no-repeat;\n}\n\n.main_head > h1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);\n  border-radius: 50%;\n  top: 30%;\n  position: absolute;\n  left: 45%;\n  text-align: center;\n  font-size: 50px;\n  color: var(--color);\n  line-height: 58px;\n  font-weight: 900;\n  animation: flash 3s ease-in;\n  animation-iteration-count: infinite;\n}\n\n@keyframes flash {\n  0% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  20% { background-image: linear-gradient(80deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  40% { background-image: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  50% { background-image: linear-gradient(130deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  60% { background-image: linear-gradient(190deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  70% { background-image: linear-gradient(230deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  80% { background-image: linear-gradient(300deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  90% { background-image: linear-gradient(360deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n  100% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\n}\n\n.like_box > span {\n  display: inline-block;\n  width: 20px;\n  margin: 0 5px;\n}\n\n.CA {\n  width: 0;\n  margin: 25px auto auto 15px;\n  border: 2px  solid var(--hd-color);\n}\n\n.CA > span {\n  display: inline-block;\n  width: 100px;\n  margin: 0 10px;\n  font-size: 12px;\n}\n\n.main_head h1 > span {\n  display: block;\n  position: absolute;\n  top: 15px;\n  left: 157px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: var(--color);\n}\n\n.main_head > p {\n  width: 450px;\n  position: absolute;\n  bottom: 2%;\n  background-color: white;\n  font-size: 24px;\n  left: 3%;\n  padding: 20px;\n  text-align: center;\n}\n\n.meals_container {\n  width: 70%;\n  margin: 0 auto;\n}\n\n.meals_container article {\n  display: inline-block;\n  width: 400px;\n  margin: 20px;\n  padding-bottom: 10px;\n  box-shadow: 0 0 10px var(--nd-color);\n  transition: 0.3s transform;\n}\n\n.meals_container article:hover {\n  transform: scale(1.02);\n}\n\n.meal_img {\n  width: 100%;\n  height: 300px;\n}\n\n.meal_img > img {\n  width: 100%;\n  height: 100%;\n}\n\n.title {\n  margin: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.like_box {\n  display: inline-block;\n  position: relative;\n}\n\n.like_box .fas {\n  font-size: 28px;\n  margin-right: 10px;\n}\n\n.like_box .pop {\n  content: \"toto\";\n  visibility: hidden;\n  width: 100px;\n  background-color: #555;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 80%;\n  margin-left: -75px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.like_box .pop::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 55%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n}\n\n.inst {\n  margin: 15px;\n  height: 39px;\n}\n\n.btn_comment,\n.comment-place-btn {\n  margin: 5px auto;\n  display: block;\n  width: 100px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  height: 30px;\n  box-shadow: 3px 3px 0 #dd1a32;\n  transition: 0.2s box-shadow;\n}\n\n.btn_comment:hover {\n  border: 2px solid #dd1a32;\n  box-shadow: none;\n}\n\n/* comment section */\n\n.comment-section {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  border: 2px solid grey;\n  background-color: rgb(251, 251, 247);\n  color: black;\n  z-index: 100;\n  backdrop-filter: blur(4px);\n  top: -0.5rem;\n  cursor: pointer;\n  padding: 2rem;\n  overflow: scroll;\n}\n\n.close-icon {\n  position: absolute;\n  right: 32px;\n  top: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.3;\n}\n\n.close-.close-icon {\n  opacity: 1;\n}\n\n.close-icon::before,\n.close-icon::after {\n  position: absolute;\n  left: 15px;\n  content: ' ';\n  height: 33px;\n  width: 2px;\n  background-color: rgb(9, 9, 9);\n}\n\n.close-icon::before {\n  transform: rotate(45deg);\n}\n\n.close-icon::after {\n  transform: rotate(-45deg);\n}\n\n.meal-name {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 32px;\n  background-color: var(--color);\n}\n\n.food-details {\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  font-size: 22px;\n  padding: 1rem;\n  border: 2px solid rgb(180, 173, 173);\n}\n\n.bar {\n  width: 0;\n  border: 2px  solid var(--hd-color);\n}\n\n.display-comments {\n  display: flex;\n  justify-content: center;\n  color: black;\n  font-size: 24px;\n}\n\n.comment {\n  background-color: #cbcccf;\n  display: inline-block;\n  width: 80%;\n  margin-left: 8rem;\n}\n\n.comment-input,\n.comment-area {\n  padding: 0.5rem;\n  margin: 5px auto;\n  display: block;\n  font-size: 18px;\n  border: none;\n  border-radius: 5px;\n  transition: 0.2s box-shadow;\n}\n\n.add-comment {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 28px;\n}\n\n.food-instruction {\n  color: gray;\n}\n\n.comment-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0.5rem;\n  color: #e8e9ea;\n  transition: 0.2s box-shadow;\n  list-style: none;\n  border: 2px solid gray;\n  margin-left: 25rem;\n  width: 50%;\n  padding: 2rem;\n}\n\n.meal-display {\n  display: inline-block;\n  width: 80%;\n  margin-left: 8rem;\n  padding-bottom: 10px;\n  box-shadow: 0 0 10px var(--hd-color);\n  transition: 0.3s transform;\n  background-color: #f8f9fc;\n}\n\n.comment-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border: 10px solid goldenrod;\n  width: 30%;\n}\n\n/* style footer */\n\nfooter {\n  align-items: center;\n  align-content: center;\n  padding: 1.5rem;\n  border: 2px solid grey;\n  background-color: #dd1a32;\n  color: var(--bar-color);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 650px) {\n  header {\n    font-size: 24px;\n    justify-content: space-between;\n    padding: 0 20%;\n    position: fixed;\n  }\n\n  header > .fa-bars {\n    display: block;\n  }\n\n  nav {\n    background-color: #ed1c236b;\n    display: none;\n    height: 100%;\n    position: fixed;\n    backdrop-filter: blur(7px);\n  }\n\n  nav .logo {\n    display: none;\n  }\n\n  .menu {\n    width: 100%;\n    margin-top: 25%;\n  }\n\n  .menu > ul {\n    height: auto;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .menu li {\n    width: 100%;\n  }\n\n  /* style the main */\n\n  .main_head {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .main_head > h1 {\n    display: none;\n  }\n\n  .main_head > p {\n    left: auto;\n    bottom: auto;\n    width: 90%;\n    background-color: rgba(255, 255, 255, 0.61);\n  }\n\n  .meals_container {\n    width: 100%;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .meals_container > article {\n    width: 80%;\n  }\n\n  .inst {\n    height: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style_mobile.css"],"names":[],"mappings":"AAAA;EACE;IACE,eAAe;IACf,8BAA8B;IAC9B,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,2BAA2B;IAC3B,aAAa;IACb,YAAY;IACZ,eAAe;IACf,0BAA0B;EAC5B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;;EAEA,mBAAmB;;EAEnB;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,UAAU;IACV,2CAA2C;EAC7C;;EAEA;IACE,WAAW;IACX,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":["@media only screen and (max-width: 650px) {\n  header {\n    font-size: 24px;\n    justify-content: space-between;\n    padding: 0 20%;\n    position: fixed;\n  }\n\n  header > .fa-bars {\n    display: block;\n  }\n\n  nav {\n    background-color: #ed1c236b;\n    display: none;\n    height: 100%;\n    position: fixed;\n    backdrop-filter: blur(7px);\n  }\n\n  nav .logo {\n    display: none;\n  }\n\n  .menu {\n    width: 100%;\n    margin-top: 25%;\n  }\n\n  .menu > ul {\n    height: auto;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .menu li {\n    width: 100%;\n  }\n\n  /* style the main */\n\n  .main_head {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .main_head > h1 {\n    display: none;\n  }\n\n  .main_head > p {\n    left: auto;\n    bottom: auto;\n    width: 90%;\n    background-color: rgba(255, 255, 255, 0.61);\n  }\n\n  .meals_container {\n    width: 100%;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .meals_container > article {\n    width: 80%;\n  }\n\n  .inst {\n    height: auto;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/CalculeLike.js":
/*!************************************!*\
  !*** ./src/modules/CalculeLike.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Likes.js */ "./src/modules/Likes.js");


const CalculeLike = async (nber, itm) => {
  const sdLink = new _Likes_js__WEBPACK_IMPORTED_MODULE_0__["default"](itm);
  const check = sdLink.postLikes();

  if (check) {
    nber += 1;
    return nber;
  }

  return nber;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculeLike);

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
  constructor(itemId = '', url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O7NaeKDfq7oZ1XEIy2sV/likes/') {
    this.itemId = itemId;
    this.url = url;
    this.liked = localStorage.getItem('liked') != null
      ? JSON.parse(localStorage.getItem('liked'))
      : '';
    this.data = {
      itemId: this.itemId,
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
    }
    const likedSort = this.liked.map((item) => item.itemId);
    if (likedSort.includes(this.itemId)) {
      return false;
    }
    const response = fetch(this.url, option);
    response.then(() => {
      this.liked.push(this.data);
      this.saveLiked();
    });
    return true;
  }
}


/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentSec": () => (/* binding */ commentSec),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "displayCommentData": () => (/* binding */ displayCommentData),
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "getCommentData": () => (/* binding */ getCommentData)
/* harmony export */ });
const commentSec = document.querySelector('.comment-section');
const commentInput = document.querySelector('.comment-input');
const commentArea = document.querySelector('.comment-area');
const commentList = document.querySelector('.comment-list');
const divDisplayComment = document.querySelector('.comment-head');

const $COMMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVOwqNGpcgqvMdjwkC7C';

// display comment
const displaycomment = (data) => {
  commentInput.value = '';
  commentArea.value = '';
  if (data.length) {
    divDisplayComment.innerHTML = data.length;
  }
  data.forEach((comment) => {
    const li = document.createElement('li');
    li.innerHTML = `${comment.creation_date} ${comment.username}:  ${comment.comment}`;
    commentList.appendChild(li);
  });
};

// fetch comment
const getComment = async (mealId) => {
  await fetch(`${$COMMENT_URL}/comments?item_id=${mealId}`)
    .then((res) => res.json())
    .then((data) => {
      displaycomment(data);
    });
};

/* comment display */
const postInfo = document.querySelector('.post-info');
commentSec.style.display = 'none';
const displayCommentData = (id, data) => {
  const mealId = id;
  getComment(mealId);
  data.forEach((element) => {
    postInfo.innerHTML = ` <img src="${element.strMealThumb}" alt="" class="comment-img">
          <h1 class="meal-name"> ${element.strMeal}</h1>
          <p class ="food-instruction"><h1>Recipe:&nbsp;</h1> ${element.strInstructions}</p>
          <ul class="food-details">
          <p class = "bar">
              <li><h4>Category:</h4> ${element.strCategory}</li></p>
              <p class = "bar"><li><h4>Area:</h4> ${element.strArea}</li></p>
              </ul>
              `;
  });
  commentSec.style.display = 'inherit';
  commentSec.dataset.id = mealId;
};

const createComment = async ({ itemId, username, comment }, url) => {
  await fetch(`${url}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  commentList.innerHTML = '';
  getComment(itemId);
};

const handleForm = (e) => {
  e.preventDefault();
  const obj = {
    itemId: commentSec.dataset.id,
    username: commentInput.value,
    comment: commentArea.value,
  };

  createComment(obj, $COMMENT_URL);

  commentInput.value = '';
  commentArea.value = '';
};

const closeModal = document.querySelector('.close-icon');
closeModal.addEventListener('click', () => {
  commentSec.style.display = 'none';
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ handleForm, displaycomment });

/* get comment data */
const mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const getCommentData = async (id) => {
  await fetch(`${mealUrl}${id}`)
    .then((res) => res.json())
    .then((data) => displayCommentData(id, data.meals));
};


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
};
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_mobile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style_mobile.css */ "./src/style_mobile.css");
/* harmony import */ var _assest_logo1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assest/logo1.png */ "./src/assest/logo1.png");
/* harmony import */ var _modules_homePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/homePage.js */ "./src/modules/homePage.js");
/* harmony import */ var _modules_Likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Likes.js */ "./src/modules/Likes.js");
/* harmony import */ var _modules_CalculeLike_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/CalculeLike.js */ "./src/modules/CalculeLike.js");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* eslint-disable prefer-template */
/* eslint-disable camelcase */








const mylogo = new Image();
mylogo.src = _assest_logo1_png__WEBPACK_IMPORTED_MODULE_2__;
const logo = document.querySelector('.logo');
logo.appendChild(mylogo);

const container = document.querySelector('.meals_container');

const display = async () => {
  const meals = await (0,_modules_homePage_js__WEBPACK_IMPORTED_MODULE_3__["default"])('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  let liked = [];
  if (localStorage.getItem('liked') != null) {
    const lik = JSON.parse(localStorage.getItem('liked'));
    liked = lik.map((item) => item.item_id);
  }

  meals.forEach(({
    idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,
  }) => {
    const article = `
  <article>
   <div class="meal_img"><img src="${strMealThumb}" alt=""></div>
   <div class="title"><h3>${strMeal}</h3>
     <div class="like_box">
       <span class="nbr_like"></span>
       <span 
       style="color: ${liked.includes('item_' + idMeal) ? '#ed1c24' : ''}" 
       liked="${liked.includes('item_' + idMeal) ? 'true' : 'false'}" 
       class="fas fa-thumbs-up" id="item_${idMeal}"></span>
       <span class="pop"></span>
     </div>
   </div>
   <p class="inst">${strInstructions.slice(0, 100)}....</p>
   <p class="CA"><span><strong>Category:</strong> ${strCategory}</span><span><strong>Area:</strong> ${strArea}</span></p>
   <button id=${idMeal} class="btn_comment btn" data-id="${idMeal}" >Comments</button>
   
  </article>`;
    container.insertAdjacentHTML('beforeend', article);
  });
};

const ftnLikes = async () => {
  const like_icon = document.querySelectorAll('.fa-thumbs-up');
  like_icon.forEach((element) => {
    element.addEventListener('click', async (e) => {
      const nbrLike = e.target.previousSibling;
      const likeIcon = e.target;
      const calLike = await (0,_modules_CalculeLike_js__WEBPACK_IMPORTED_MODULE_5__["default"])(+nbrLike.textContent, likeIcon.id);
      const i = calLike.toString();

      nbrLike.textContent = i;

      if (likeIcon.getAttribute('liked') === 'false') {
        likeIcon.style.color = '#ed1c24';
        likeIcon.setAttribute('liked', 'true');
      } else if ((likeIcon.getAttribute('liked') === 'true')) {
        likeIcon.style.color = '';
        likeIcon.setAttribute('liked', 'false');
      }
    });
  });
};

const dplLikes = async () => {
  const sdLink = new _modules_Likes_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  sdLink.getLikes().then((value) => {
    value.forEach(({ likes, item_id }) => {
      const item = document.getElementById(item_id);
      item.previousSibling.textContent = likes;
      item.nextElementSibling.textContent = likes + ((likes > 1) ? ' likes' : ' like');

      item.parentElement.addEventListener('mouseover', () => {
        item.nextElementSibling.style.visibility = 'visible';
        item.nextElementSibling.style.opacity = 1;
      });

      item.parentElement.addEventListener('mouseout', () => {
        item.nextElementSibling.style.visibility = 'hidden';
        item.nextElementSibling.style.opacity = 0;
      });
    });
  });
};

// button comments

const ftnComment = () => {
  const btnComment = document.querySelectorAll('.btn');
  btnComment.forEach((element) => {
    element.addEventListener('click', async (e) => {
      (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_6__.getCommentData)(e.target.id);
    });
  });
};

display()
  .then(dplLikes)
  .then(ftnLikes)
  .then(ftnComment);

// Message popup on like button

const bars = document.getElementById('bars');
const nav = document.querySelector('nav');
bars.addEventListener('click', () => {
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

/* comment place */
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_6__["default"])(e);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFh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LHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1FQUFjO0FBQ3BCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFVO0FBQ1osQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL3N0eWxlX21vYmlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL3N0eWxlX21vYmlsZS5jc3M/NDEwZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL21vZHVsZXMvQ2FsY3VsZUxpa2UuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvbW9kdWxlcy9MaWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvbW9kdWxlcy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2VzdC84OTg0LndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2FuczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmctY29sb3I6ICNlOGU5ZWE7XFxuICAtLWJhci1jb2xvcjogI2ZhZmFmYTtcXG4gIC0taGQtY29sb3I6ICNmZmNiMDU7XFxuICAtLWNvbG9yOiAjZWQxYzI0O1xcbiAgLS1uZC1jb2xvcjogIzU0NTg2MjtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1uZC1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGQtY29sb3IpO1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG5oZWFkZXIgPiBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1iYXItY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgPiAuZmEtYmFycyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhNTQ7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5tZW51IHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5tZW51ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmZvb2QtZGV0YWlscyA+IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tZW51IGxpIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIHRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZC1jb2xvcjtcXG59XFxuXFxuLm1lbnUgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyMzMxO1xcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxufVxcblxcbi5tZW51ID4gdWwgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51IGxpOmhvdmVyIGEge1xcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxufVxcblxcbi8qIHN0eWxlIHRoZSBtYWluICovXFxuXFxuLm1haW5faGVhZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB6LWluZGV4OiAwO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLm1haW5faGVhZCA+IGgxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRvcDogMzAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGFuaW1hdGlvbjogZmxhc2ggM3MgZWFzZS1pbjtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcXG4gIDAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcbiAgMjAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcbiAgNDAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDExMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXG4gIDUwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxuICA2MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcbiAgNzAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIzMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXG4gIDgwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxuICA5MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcbiAgMTAwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXG59XFxuXFxuLmxpa2VfYm94ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi5DQSB7XFxuICB3aWR0aDogMDtcXG4gIG1hcmdpbjogMjVweCBhdXRvIGF1dG8gMTVweDtcXG4gIGJvcmRlcjogMnB4ICBzb2xpZCB2YXIoLS1oZC1jb2xvcik7XFxufVxcblxcbi5DQSA+IHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5tYWluX2hlYWQgaDEgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNXB4O1xcbiAgbGVmdDogMTU3cHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcXG59XFxuXFxuLm1haW5faGVhZCA+IHAge1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAyJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGVmdDogMyU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbHNfY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1lYWxzX2NvbnRhaW5lciBhcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tbmQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XFxufVxcblxcbi5tZWFsc19jb250YWluZXIgYXJ0aWNsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG5cXG4ubWVhbF9pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4ubWVhbF9pbWcgPiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlrZV9ib3gge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGlrZV9ib3ggLmZhcyB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5saWtlX2JveCAucG9wIHtcXG4gIGNvbnRlbnQ6IFxcXCJ0b3RvXFxcIjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgbGVmdDogODAlO1xcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXG59XFxuXFxuLmxpa2VfYm94IC5wb3A6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTUlO1xcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICM1NTUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pbnN0IHtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGhlaWdodDogMzlweDtcXG59XFxuXFxuLmJ0bl9jb21tZW50LFxcbi5jb21tZW50LXBsYWNlLWJ0biB7XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDAgI2RkMWEzMjtcXG4gIHRyYW5zaXRpb246IDAuMnMgYm94LXNoYWRvdztcXG59XFxuXFxuLmJ0bl9jb21tZW50OmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZDFhMzI7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBjb21tZW50IHNlY3Rpb24gKi9cXG5cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI1MSwgMjQ3KTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgdG9wOiAtMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzMnB4O1xcbiAgdG9wOiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5jbG9zZS0uY2xvc2UtaWNvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2xvc2UtaWNvbjo6YmVmb3JlLFxcbi5jbG9zZS1pY29uOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNXB4O1xcbiAgY29udGVudDogJyAnO1xcbiAgaGVpZ2h0OiAzM3B4O1xcbiAgd2lkdGg6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA5LCA5KTtcXG59XFxuXFxuLmNsb3NlLWljb246OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5jbG9zZS1pY29uOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4ubWVhbC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcblxcbi5mb29kLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxODAsIDE3MywgMTczKTtcXG59XFxuXFxuLmJhciB7XFxuICB3aWR0aDogMDtcXG4gIGJvcmRlcjogMnB4ICBzb2xpZCB2YXIoLS1oZC1jb2xvcik7XFxufVxcblxcbi5kaXNwbGF5LWNvbW1lbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmNvbW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2NjZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tbGVmdDogOHJlbTtcXG59XFxuXFxuLmNvbW1lbnQtaW5wdXQsXFxuLmNvbW1lbnQtYXJlYSB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGJveC1zaGFkb3c7XFxufVxcblxcbi5hZGQtY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uZm9vZC1pbnN0cnVjdGlvbiB7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgY29sb3I6ICNlOGU5ZWE7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGJveC1zaGFkb3c7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gIG1hcmdpbi1sZWZ0OiAyNXJlbTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ubWVhbC1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tbGVmdDogOHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0taGQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZjO1xcbn1cXG5cXG4uY29tbWVudC1pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBnb2xkZW5yb2Q7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4vKiBzdHlsZSBmb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQxYTMyO1xcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLDhC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QUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsVUFBVTtBQUNaOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3I6ICNlOGU5ZWE7XFxuICAtLWJhci1jb2xvcjogI2ZhZmFmYTtcXG4gIC0taGQtY29sb3I6ICNmZmNiMDU7XFxuICAtLWNvbG9yOiAjZWQxYzI0O1xcbiAgLS1uZC1jb2xvcjogIzU0NTg2MjtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1uZC1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGQtY29sb3IpO1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG5oZWFkZXIgPiBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1iYXItY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgPiAuZmEtYmFycyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhNTQ7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5tZW51IHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5tZW51ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmZvb2QtZGV0YWlscyA+IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tZW51IGxpIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIHRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZC1jb2xvcjtcXG59XFxuXFxuLm1lbnUgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyMzMxO1xcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxufVxcblxcbi5tZW51ID4gdWwgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51IGxpOmhvdmVyIGEge1xcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxufVxcblxcbi8qIHN0eWxlIHRoZSBtYWluICovXFxuXFxuLm1haW5faGVhZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3Nlc3QvODk4NC53ZWJwJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgei1pbmRleDogMDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5tYWluX2hlYWQgPiBoMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0b3A6IDMwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDQ1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICBsaW5lLWhlaWdodDogNThweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBhbmltYXRpb246IGZsYXNoIDNzIGVhc2UtaW47XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmbGFzaCB7XFxuICAwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXG4gIDIwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXG4gIDQwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxuICA1MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcbiAgNjAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXG4gIDcwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMzBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxuICA4MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcbiAgOTAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxufVxcblxcbi5saWtlX2JveCA+IHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4uQ0Ege1xcbiAgd2lkdGg6IDA7XFxuICBtYXJnaW46IDI1cHggYXV0byBhdXRvIDE1cHg7XFxuICBib3JkZXI6IDJweCAgc29saWQgdmFyKC0taGQtY29sb3IpO1xcbn1cXG5cXG4uQ0EgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ubWFpbl9oZWFkIGgxID4gc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTVweDtcXG4gIGxlZnQ6IDE1N3B4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XFxufVxcblxcbi5tYWluX2hlYWQgPiBwIHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxlZnQ6IDMlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lYWxzX2NvbnRhaW5lciB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5tZWFsc19jb250YWluZXIgYXJ0aWNsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLW5kLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xcbn1cXG5cXG4ubWVhbHNfY29udGFpbmVyIGFydGljbGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuXFxuLm1lYWxfaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLm1lYWxfaW1nID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxpa2VfYm94IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpa2VfYm94IC5mYXMge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubGlrZV9ib3ggLnBvcCB7XFxuICBjb250ZW50OiBcXFwidG90b1xcXCI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB3aWR0aDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJvdHRvbTogMTAwJTtcXG4gIGxlZnQ6IDgwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XFxufVxcblxcbi5saWtlX2JveCAucG9wOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDU1JTtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjNTU1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaW5zdCB7XFxuICBtYXJnaW46IDE1cHg7XFxuICBoZWlnaHQ6IDM5cHg7XFxufVxcblxcbi5idG5fY29tbWVudCxcXG4uY29tbWVudC1wbGFjZS1idG4ge1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAwICNkZDFhMzI7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGJveC1zaGFkb3c7XFxufVxcblxcbi5idG5fY29tbWVudDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGQxYTMyO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyogY29tbWVudCBzZWN0aW9uICovXFxuXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNTEsIDI0Nyk7XFxuICBjb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gIHRvcDogLTAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uY2xvc2UtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzJweDtcXG4gIHRvcDogMzJweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uY2xvc2UtLmNsb3NlLWljb24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNsb3NlLWljb246OmJlZm9yZSxcXG4uY2xvc2UtaWNvbjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTVweDtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIGhlaWdodDogMzNweDtcXG4gIHdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgOSwgOSk7XFxufVxcblxcbi5jbG9zZS1pY29uOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uY2xvc2UtaWNvbjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLm1lYWwtbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4uZm9vZC1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTgwLCAxNzMsIDE3Myk7XFxufVxcblxcbi5iYXIge1xcbiAgd2lkdGg6IDA7XFxuICBib3JkZXI6IDJweCAgc29saWQgdmFyKC0taGQtY29sb3IpO1xcbn1cXG5cXG4uZGlzcGxheS1jb21tZW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5jb21tZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNjY2Y7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWxlZnQ6IDhyZW07XFxufVxcblxcbi5jb21tZW50LWlucHV0LFxcbi5jb21tZW50LWFyZWEge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycyBib3gtc2hhZG93O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLmZvb2QtaW5zdHJ1Y3Rpb24ge1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5jb21tZW50LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGNvbG9yOiAjZThlOWVhO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBib3gtc2hhZG93O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICBtYXJnaW4tbGVmdDogMjVyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLm1lYWwtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWxlZnQ6IDhyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWhkLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYztcXG59XFxuXFxuLmNvbW1lbnQtaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBib3JkZXI6IDEwcHggc29saWQgZ29sZGVucm9kO1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLyogc3R5bGUgZm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkMWEzMjtcXG4gIGNvbG9yOiB2YXIoLS1iYXItY29sb3IpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCAyMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gIH1cXG5cXG4gIGhlYWRlciA+IC5mYS1iYXJzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzIzNmI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG4gIH1cXG5cXG4gIG5hdiAubG9nbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubWVudSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7XFxuICB9XFxuXFxuICAubWVudSA+IHVsIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tZW51IGxpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAvKiBzdHlsZSB0aGUgbWFpbiAqL1xcblxcbiAgLm1haW5faGVhZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1haW5faGVhZCA+IGgxIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tYWluX2hlYWQgPiBwIHtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm90dG9tOiBhdXRvO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xcbiAgfVxcblxcbiAgLm1lYWxzX2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVhbHNfY29udGFpbmVyID4gYXJ0aWNsZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuaW5zdCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlX21vYmlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBLG1CQUFtQjs7RUFFbkI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCAyMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gIH1cXG5cXG4gIGhlYWRlciA+IC5mYS1iYXJzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzIzNmI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG4gIH1cXG5cXG4gIG5hdiAubG9nbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubWVudSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7XFxuICB9XFxuXFxuICAubWVudSA+IHVsIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tZW51IGxpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAvKiBzdHlsZSB0aGUgbWFpbiAqL1xcblxcbiAgLm1haW5faGVhZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1haW5faGVhZCA+IGgxIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tYWluX2hlYWQgPiBwIHtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm90dG9tOiBhdXRvO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xcbiAgfVxcblxcbiAgLm1lYWxzX2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVhbHNfY29udGFpbmVyID4gYXJ0aWNsZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuaW5zdCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX21vYmlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX21vYmlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExpa2VzIGZyb20gJy4vTGlrZXMuanMnO1xuXG5jb25zdCBDYWxjdWxlTGlrZSA9IGFzeW5jIChuYmVyLCBpdG0pID0+IHtcbiAgY29uc3Qgc2RMaW5rID0gbmV3IExpa2VzKGl0bSk7XG4gIGNvbnN0IGNoZWNrID0gc2RMaW5rLnBvc3RMaWtlcygpO1xuXG4gIGlmIChjaGVjaykge1xuICAgIG5iZXIgKz0gMTtcbiAgICByZXR1cm4gbmJlcjtcbiAgfVxuXG4gIHJldHVybiBuYmVyO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGVMaWtlOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2VzIHtcbiAgY29uc3RydWN0b3IoaXRlbUlkID0gJycsIHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9PN05hZUtEZnE3b1oxWEVJeTJzVi9saWtlcy8nKSB7XG4gICAgdGhpcy5pdGVtSWQgPSBpdGVtSWQ7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5saWtlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpICE9IG51bGxcbiAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlrZWQnKSlcbiAgICAgIDogJyc7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgaXRlbUlkOiB0aGlzLml0ZW1JZCxcbiAgICB9O1xuICB9XG5cbiAgc2F2ZUxpa2VkKFRTYXZlID0gdGhpcy5saWtlZCkge1xuICAgIGNvbnN0IHN0b3JlTGlrZWQgPSBKU09OLnN0cmluZ2lmeShUU2F2ZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpa2VkJywgc3RvcmVMaWtlZCk7XG4gIH1cblxuICBhc3luYyBnZXRMaWtlcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgYXN5bmMgcG9zdExpa2VzKCkge1xuICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSksXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmxpa2VkID09PSAnJyB8fCB0aGlzLmxpa2VkLmxlbmdodCA9PT0gMCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaCh0aGlzLnVybCwgb3B0aW9uKTtcbiAgICAgIHJlc3BvbnNlLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxpa2VkID0gW3RoaXMuZGF0YV07XG4gICAgICAgIHRoaXMuc2F2ZUxpa2VkKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBsaWtlZFNvcnQgPSB0aGlzLmxpa2VkLm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtSWQpO1xuICAgIGlmIChsaWtlZFNvcnQuaW5jbHVkZXModGhpcy5pdGVtSWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2godGhpcy51cmwsIG9wdGlvbik7XG4gICAgcmVzcG9uc2UudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmxpa2VkLnB1c2godGhpcy5kYXRhKTtcbiAgICAgIHRoaXMuc2F2ZUxpa2VkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjb21tZW50U2VjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtc2VjdGlvbicpO1xuY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtaW5wdXQnKTtcbmNvbnN0IGNvbW1lbnRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtYXJlYScpO1xuY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG5jb25zdCBkaXZEaXNwbGF5Q29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWhlYWQnKTtcblxuY29uc3QgJENPTU1FTlRfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3lWT3dxTkdwY2dxdk1kandrQzdDJztcblxuLy8gZGlzcGxheSBjb21tZW50XG5jb25zdCBkaXNwbGF5Y29tbWVudCA9IChkYXRhKSA9PiB7XG4gIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xuICBjb21tZW50QXJlYS52YWx1ZSA9ICcnO1xuICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICBkaXZEaXNwbGF5Q29tbWVudC5pbm5lckhUTUwgPSBkYXRhLmxlbmd0aDtcbiAgfVxuICBkYXRhLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gYCR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnQudXNlcm5hbWV9OiAgJHtjb21tZW50LmNvbW1lbnR9YDtcbiAgICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xufTtcblxuLy8gZmV0Y2ggY29tbWVudFxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnQgPSBhc3luYyAobWVhbElkKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAkeyRDT01NRU5UX1VSTH0vY29tbWVudHM/aXRlbV9pZD0ke21lYWxJZH1gKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRpc3BsYXljb21tZW50KGRhdGEpO1xuICAgIH0pO1xufTtcblxuLyogY29tbWVudCBkaXNwbGF5ICovXG5jb25zdCBwb3N0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LWluZm8nKTtcbmNvbW1lbnRTZWMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbmV4cG9ydCBjb25zdCBkaXNwbGF5Q29tbWVudERhdGEgPSAoaWQsIGRhdGEpID0+IHtcbiAgY29uc3QgbWVhbElkID0gaWQ7XG4gIGdldENvbW1lbnQobWVhbElkKTtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgcG9zdEluZm8uaW5uZXJIVE1MID0gYCA8aW1nIHNyYz1cIiR7ZWxlbWVudC5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCIgY2xhc3M9XCJjb21tZW50LWltZ1wiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cIm1lYWwtbmFtZVwiPiAke2VsZW1lbnQuc3RyTWVhbH08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzID1cImZvb2QtaW5zdHJ1Y3Rpb25cIj48aDE+UmVjaXBlOiZuYnNwOzwvaDE+ICR7ZWxlbWVudC5zdHJJbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgICAgIDx1bCBjbGFzcz1cImZvb2QtZGV0YWlsc1wiPlxuICAgICAgICAgIDxwIGNsYXNzID0gXCJiYXJcIj5cbiAgICAgICAgICAgICAgPGxpPjxoND5DYXRlZ29yeTo8L2g0PiAke2VsZW1lbnQuc3RyQ2F0ZWdvcnl9PC9saT48L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJiYXJcIj48bGk+PGg0PkFyZWE6PC9oND4gJHtlbGVtZW50LnN0ckFyZWF9PC9saT48L3A+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIGA7XG4gIH0pO1xuICBjb21tZW50U2VjLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCc7XG4gIGNvbW1lbnRTZWMuZGF0YXNldC5pZCA9IG1lYWxJZDtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbW1lbnQgPSBhc3luYyAoeyBpdGVtSWQsIHVzZXJuYW1lLCBjb21tZW50IH0sIHVybCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHt1cmx9L2NvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgY29tbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgZ2V0Q29tbWVudChpdGVtSWQpO1xufTtcblxuY29uc3QgaGFuZGxlRm9ybSA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgb2JqID0ge1xuICAgIGl0ZW1JZDogY29tbWVudFNlYy5kYXRhc2V0LmlkLFxuICAgIHVzZXJuYW1lOiBjb21tZW50SW5wdXQudmFsdWUsXG4gICAgY29tbWVudDogY29tbWVudEFyZWEudmFsdWUsXG4gIH07XG5cbiAgY3JlYXRlQ29tbWVudChvYmosICRDT01NRU5UX1VSTCk7XG5cbiAgY29tbWVudElucHV0LnZhbHVlID0gJyc7XG4gIGNvbW1lbnRBcmVhLnZhbHVlID0gJyc7XG59O1xuXG5jb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWljb24nKTtcbmNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbW1lbnRTZWMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuZXhwb3J0IGRlZmF1bHQgeyBoYW5kbGVGb3JtLCBkaXNwbGF5Y29tbWVudCB9O1xuXG4vKiBnZXQgY29tbWVudCBkYXRhICovXG5jb25zdCBtZWFsVXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JztcbmV4cG9ydCBjb25zdCBnZXRDb21tZW50RGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHttZWFsVXJsfSR7aWR9YClcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBkaXNwbGF5Q29tbWVudERhdGEoaWQsIGRhdGEubWVhbHMpKTtcbn07XG4iLCJjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBqc29uLm1lYWxzO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXRlbXBsYXRlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlX21vYmlsZS5jc3MnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9hc3Nlc3QvbG9nbzEucG5nJztcbmltcG9ydCBnZXREYXRhIGZyb20gJy4vbW9kdWxlcy9ob21lUGFnZS5qcyc7XG5pbXBvcnQgTGlrZXMgZnJvbSAnLi9tb2R1bGVzL0xpa2VzLmpzJztcbmltcG9ydCBDYWxjdWxlTGlrZSBmcm9tICcuL21vZHVsZXMvQ2FsY3VsZUxpa2UuanMnO1xuaW1wb3J0IGhhbmRsZUZvcm0sIHsgZ2V0Q29tbWVudERhdGEgfSBmcm9tICcuL21vZHVsZXMvY29tbWVudC5qcyc7XG5cbmNvbnN0IG15bG9nbyA9IG5ldyBJbWFnZSgpO1xubXlsb2dvLnNyYyA9IEljb247XG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbmxvZ28uYXBwZW5kQ2hpbGQobXlsb2dvKTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzX2NvbnRhaW5lcicpO1xuXG5jb25zdCBkaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtZWFscyA9IGF3YWl0IGdldERhdGEoJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP2Y9YScpO1xuICBsZXQgbGlrZWQgPSBbXTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpICE9IG51bGwpIHtcbiAgICBjb25zdCBsaWsgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpKTtcbiAgICBsaWtlZCA9IGxpay5tYXAoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCk7XG4gIH1cblxuICBtZWFscy5mb3JFYWNoKCh7XG4gICAgaWRNZWFsLCBzdHJNZWFsLCBzdHJDYXRlZ29yeSwgc3RyQXJlYSwgc3RySW5zdHJ1Y3Rpb25zLCBzdHJNZWFsVGh1bWIsXG4gIH0pID0+IHtcbiAgICBjb25zdCBhcnRpY2xlID0gYFxuICA8YXJ0aWNsZT5cbiAgIDxkaXYgY2xhc3M9XCJtZWFsX2ltZ1wiPjxpbWcgc3JjPVwiJHtzdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCI+PC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwidGl0bGVcIj48aDM+JHtzdHJNZWFsfTwvaDM+XG4gICAgIDxkaXYgY2xhc3M9XCJsaWtlX2JveFwiPlxuICAgICAgIDxzcGFuIGNsYXNzPVwibmJyX2xpa2VcIj48L3NwYW4+XG4gICAgICAgPHNwYW4gXG4gICAgICAgc3R5bGU9XCJjb2xvcjogJHtsaWtlZC5pbmNsdWRlcygnaXRlbV8nICsgaWRNZWFsKSA/ICcjZWQxYzI0JyA6ICcnfVwiIFxuICAgICAgIGxpa2VkPVwiJHtsaWtlZC5pbmNsdWRlcygnaXRlbV8nICsgaWRNZWFsKSA/ICd0cnVlJyA6ICdmYWxzZSd9XCIgXG4gICAgICAgY2xhc3M9XCJmYXMgZmEtdGh1bWJzLXVwXCIgaWQ9XCJpdGVtXyR7aWRNZWFsfVwiPjwvc3Bhbj5cbiAgICAgICA8c3BhbiBjbGFzcz1cInBvcFwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgIDxwIGNsYXNzPVwiaW5zdFwiPiR7c3RySW5zdHJ1Y3Rpb25zLnNsaWNlKDAsIDEwMCl9Li4uLjwvcD5cbiAgIDxwIGNsYXNzPVwiQ0FcIj48c3Bhbj48c3Ryb25nPkNhdGVnb3J5Ojwvc3Ryb25nPiAke3N0ckNhdGVnb3J5fTwvc3Bhbj48c3Bhbj48c3Ryb25nPkFyZWE6PC9zdHJvbmc+ICR7c3RyQXJlYX08L3NwYW4+PC9wPlxuICAgPGJ1dHRvbiBpZD0ke2lkTWVhbH0gY2xhc3M9XCJidG5fY29tbWVudCBidG5cIiBkYXRhLWlkPVwiJHtpZE1lYWx9XCIgPkNvbW1lbnRzPC9idXR0b24+XG4gICBcbiAgPC9hcnRpY2xlPmA7XG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYXJ0aWNsZSk7XG4gIH0pO1xufTtcblxuY29uc3QgZnRuTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VfaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS10aHVtYnMtdXAnKTtcbiAgbGlrZV9pY29uLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IG5ickxpa2UgPSBlLnRhcmdldC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICBjb25zdCBsaWtlSWNvbiA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgY2FsTGlrZSA9IGF3YWl0IENhbGN1bGVMaWtlKCtuYnJMaWtlLnRleHRDb250ZW50LCBsaWtlSWNvbi5pZCk7XG4gICAgICBjb25zdCBpID0gY2FsTGlrZS50b1N0cmluZygpO1xuXG4gICAgICBuYnJMaWtlLnRleHRDb250ZW50ID0gaTtcblxuICAgICAgaWYgKGxpa2VJY29uLmdldEF0dHJpYnV0ZSgnbGlrZWQnKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBsaWtlSWNvbi5zdHlsZS5jb2xvciA9ICcjZWQxYzI0JztcbiAgICAgICAgbGlrZUljb24uc2V0QXR0cmlidXRlKCdsaWtlZCcsICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKChsaWtlSWNvbi5nZXRBdHRyaWJ1dGUoJ2xpa2VkJykgPT09ICd0cnVlJykpIHtcbiAgICAgICAgbGlrZUljb24uc3R5bGUuY29sb3IgPSAnJztcbiAgICAgICAgbGlrZUljb24uc2V0QXR0cmlidXRlKCdsaWtlZCcsICdmYWxzZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRwbExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzZExpbmsgPSBuZXcgTGlrZXMoKTtcbiAgc2RMaW5rLmdldExpa2VzKCkudGhlbigodmFsdWUpID0+IHtcbiAgICB2YWx1ZS5mb3JFYWNoKCh7IGxpa2VzLCBpdGVtX2lkIH0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtX2lkKTtcbiAgICAgIGl0ZW0ucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50ID0gbGlrZXM7XG4gICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IGxpa2VzICsgKChsaWtlcyA+IDEpID8gJyBsaWtlcycgOiAnIGxpa2UnKTtcblxuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB9KTtcblxuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gYnV0dG9uIGNvbW1lbnRzXG5cbmNvbnN0IGZ0bkNvbW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGJ0bkNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuJyk7XG4gIGJ0bkNvbW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgZ2V0Q29tbWVudERhdGEoZS50YXJnZXQuaWQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmRpc3BsYXkoKVxuICAudGhlbihkcGxMaWtlcylcbiAgLnRoZW4oZnRuTGlrZXMpXG4gIC50aGVuKGZ0bkNvbW1lbnQpO1xuXG4vLyBNZXNzYWdlIHBvcHVwIG9uIGxpa2UgYnV0dG9uXG5cbmNvbnN0IGJhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFycycpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG5iYXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSBlbHNlIHtcbiAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn0pO1xuXG4vKiBjb21tZW50IHBsYWNlICovXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBoYW5kbGVGb3JtKGUpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9