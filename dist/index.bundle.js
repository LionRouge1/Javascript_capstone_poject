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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --bg-color: #e8e9ea;\r\n  --bar-color: #fafafa;\r\n  --hd-color: #ffcb05;\r\n  --color: #ed1c24;\r\n  --nd-color: #545862;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Fira Sans', sans-serif;\r\n  color: var(--nd-color);\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  font-size: 34px;\r\n  align-items: center;\r\n  background-color: var(--hd-color);\r\n  height: 45px;\r\n  z-index: 100;\r\n}\r\n\r\nheader > span {\r\n  color: var(--bar-color);\r\n}\r\n\r\nheader > .fa-bars {\r\n  display: none;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 10;\r\n  justify-content: space-between;\r\n  height: 70px;\r\n  background-color: #fafafa54;\r\n}\r\n\r\n.logo {\r\n  margin-left: 10%;\r\n}\r\n\r\n.logo img {\r\n  height: 70px;\r\n}\r\n\r\n.menu {\r\n  width: 30%;\r\n}\r\n\r\n.menu > ul {\r\n  display: flex;\r\n  height: 70px;\r\n}\r\n\r\n.food-details > li {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n}\r\n\r\n.menu li {\r\n  width: 100px;\r\n  height: 70px;\r\n  padding: 5px 0;\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n  transition: 0.2s background-color;\r\n}\r\n\r\n.menu li:hover {\r\n  background-color: #ed1c2331;\r\n  border-top: 5px solid var(--color);\r\n  padding-top: 0;\r\n  color: var(--bar-color);\r\n}\r\n\r\n.menu > ul a {\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  line-height: 14px;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n.menu li:hover a {\r\n  color: var(--bar-color);\r\n}\r\n\r\n/* style the main */\r\n\r\n.main_head {\r\n  width: 100%;\r\n  height: 60vh;\r\n  position: relative;\r\n  display: block;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  z-index: 0;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.main_head > h1 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 200px;\r\n  height: 200px;\r\n  background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);\r\n  border-radius: 50%;\r\n  top: 30%;\r\n  position: absolute;\r\n  left: 45%;\r\n  text-align: center;\r\n  font-size: 50px;\r\n  color: var(--color);\r\n  line-height: 58px;\r\n  font-weight: 900;\r\n  animation: flash 3s ease-in;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes flash {\r\n  0% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  20% { background-image: linear-gradient(80deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  40% { background-image: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  50% { background-image: linear-gradient(130deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  60% { background-image: linear-gradient(190deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  70% { background-image: linear-gradient(230deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  80% { background-image: linear-gradient(300deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  90% { background-image: linear-gradient(360deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  100% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n}\r\n\r\n.like_box > span {\r\n  display: inline-block;\r\n  width: 20px;\r\n  margin: 0 5px;\r\n}\r\n\r\n.CA {\r\n  width: 0;\r\n  margin: 25px auto auto 15px;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.CA > span {\r\n  display: inline-block;\r\n  width: 100px;\r\n  margin: 0 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.main_head h1 > span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 157px;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: var(--color);\r\n}\r\n\r\n.main_head > p {\r\n  width: 450px;\r\n  position: absolute;\r\n  bottom: 2%;\r\n  background-color: white;\r\n  font-size: 24px;\r\n  left: 3%;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.meals_container {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meals_container article {\r\n  display: inline-block;\r\n  width: 400px;\r\n  margin: 20px;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--nd-color);\r\n  transition: 0.3s transform;\r\n}\r\n\r\n.meals_container article:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.meal_img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.meal_img > img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.title {\r\n  margin: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.like_box {\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.like_box .fas {\r\n  font-size: 28px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.like_box .pop {\r\n  content: \"toto\";\r\n  visibility: hidden;\r\n  width: 100px;\r\n  background-color: #555;\r\n  color: white;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 100%;\r\n  left: 80%;\r\n  margin-left: -75px;\r\n  opacity: 0;\r\n  transition: opacity 0.3s;\r\n}\r\n\r\n.like_box .pop::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 55%;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n.inst {\r\n  margin: 15px;\r\n  height: 39px;\r\n}\r\n\r\n.btn_comment,\r\n.comment-place-btn {\r\n  margin: 5px auto;\r\n  display: block;\r\n  width: 100px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  height: 30px;\r\n  box-shadow: 3px 3px 0 #dd1a32;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.btn_comment:hover {\r\n  border: 2px solid #dd1a32;\r\n  box-shadow: none;\r\n}\r\n\r\n/* comment section */\r\n\r\n.comment-section {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid grey;\r\n  background-color: rgb(251, 251, 247);\r\n  color: black;\r\n  z-index: 100;\r\n  backdrop-filter: blur(4px);\r\n  top: -0.5rem;\r\n  cursor: pointer;\r\n  padding: 2rem;\r\n  overflow: scroll;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  right: 32px;\r\n  top: 32px;\r\n  width: 32px;\r\n  height: 32px;\r\n  opacity: 0.3;\r\n}\r\n\r\n.close-.close-icon {\r\n  opacity: 1;\r\n}\r\n\r\n.close-icon::before,\r\n.close-icon::after {\r\n  position: absolute;\r\n  left: 15px;\r\n  content: ' ';\r\n  height: 33px;\r\n  width: 2px;\r\n  background-color: rgb(9, 9, 9);\r\n}\r\n\r\n.close-icon::before {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-icon::after {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.meal-name {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 32px;\r\n  background-color: var(--color);\r\n}\r\n\r\n.food-details {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n  border: 2px solid rgb(180, 173, 173);\r\n}\r\n\r\n.bar {\r\n  width: 0;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.display-comments {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: black;\r\n  font-size: 24px;\r\n}\r\n\r\n.comment {\r\n  background-color: #cbcccf;\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n}\r\n\r\n.comment-input,\r\n.comment-area {\r\n  padding: 0.5rem;\r\n  margin: 5px auto;\r\n  display: block;\r\n  font-size: 18px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 28px;\r\n}\r\n\r\n.food-instruction {\r\n  color: gray;\r\n}\r\n\r\n.comment-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin-top: 0.5rem;\r\n  color: #e8e9ea;\r\n  transition: 0.2s box-shadow;\r\n  list-style: none;\r\n  border: 2px solid gray;\r\n  margin-left: 25rem;\r\n  width: 50%;\r\n  padding: 2rem;\r\n}\r\n\r\n.meal-display {\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--hd-color);\r\n  transition: 0.3s transform;\r\n  background-color: #f8f9fc;\r\n}\r\n\r\n.comment-img {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border: 10px solid goldenrod;\r\n  width: 30%;\r\n}\r\n\r\n/* style footer */\r\n\r\nfooter {\r\n  align-items: center;\r\n  align-content: center;\r\n  padding: 1.5rem;\r\n  border: 2px solid grey;\r\n  background-color: #dd1a32;\r\n  color: var(--bar-color);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n:root {\r\n  --bg-color: #e8e9ea;\r\n  --bar-color: #fafafa;\r\n  --hd-color: #ffcb05;\r\n  --color: #ed1c24;\r\n  --nd-color: #545862;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Fira Sans', sans-serif;\r\n  color: var(--nd-color);\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  font-size: 34px;\r\n  align-items: center;\r\n  background-color: var(--hd-color);\r\n  height: 45px;\r\n  z-index: 100;\r\n}\r\n\r\nheader > span {\r\n  color: var(--bar-color);\r\n}\r\n\r\nheader > .fa-bars {\r\n  display: none;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 10;\r\n  justify-content: space-between;\r\n  height: 70px;\r\n  background-color: #fafafa54;\r\n}\r\n\r\n.logo {\r\n  margin-left: 10%;\r\n}\r\n\r\n.logo img {\r\n  height: 70px;\r\n}\r\n\r\n.menu {\r\n  width: 30%;\r\n}\r\n\r\n.menu > ul {\r\n  display: flex;\r\n  height: 70px;\r\n}\r\n\r\n.food-details > li {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n}\r\n\r\n.menu li {\r\n  width: 100px;\r\n  height: 70px;\r\n  padding: 5px 0;\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n  transition: 0.2s background-color;\r\n}\r\n\r\n.menu li:hover {\r\n  background-color: #ed1c2331;\r\n  border-top: 5px solid var(--color);\r\n  padding-top: 0;\r\n  color: var(--bar-color);\r\n}\r\n\r\n.menu > ul a {\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  line-height: 14px;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n.menu li:hover a {\r\n  color: var(--bar-color);\r\n}\r\n\r\n/* style the main */\r\n\r\n.main_head {\r\n  width: 100%;\r\n  height: 60vh;\r\n  position: relative;\r\n  display: block;\r\n  background-image: url('assest/8984.webp');\r\n  background-size: cover;\r\n  z-index: 0;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.main_head > h1 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 200px;\r\n  height: 200px;\r\n  background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);\r\n  border-radius: 50%;\r\n  top: 30%;\r\n  position: absolute;\r\n  left: 45%;\r\n  text-align: center;\r\n  font-size: 50px;\r\n  color: var(--color);\r\n  line-height: 58px;\r\n  font-weight: 900;\r\n  animation: flash 3s ease-in;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes flash {\r\n  0% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  20% { background-image: linear-gradient(80deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  40% { background-image: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  50% { background-image: linear-gradient(130deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  60% { background-image: linear-gradient(190deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  70% { background-image: linear-gradient(230deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  80% { background-image: linear-gradient(300deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  90% { background-image: linear-gradient(360deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  100% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n}\r\n\r\n.like_box > span {\r\n  display: inline-block;\r\n  width: 20px;\r\n  margin: 0 5px;\r\n}\r\n\r\n.CA {\r\n  width: 0;\r\n  margin: 25px auto auto 15px;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.CA > span {\r\n  display: inline-block;\r\n  width: 100px;\r\n  margin: 0 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.main_head h1 > span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 157px;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: var(--color);\r\n}\r\n\r\n.main_head > p {\r\n  width: 450px;\r\n  position: absolute;\r\n  bottom: 2%;\r\n  background-color: white;\r\n  font-size: 24px;\r\n  left: 3%;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.meals_container {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meals_container article {\r\n  display: inline-block;\r\n  width: 400px;\r\n  margin: 20px;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--nd-color);\r\n  transition: 0.3s transform;\r\n}\r\n\r\n.meals_container article:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.meal_img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.meal_img > img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.title {\r\n  margin: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.like_box {\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.like_box .fas {\r\n  font-size: 28px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.like_box .pop {\r\n  content: \"toto\";\r\n  visibility: hidden;\r\n  width: 100px;\r\n  background-color: #555;\r\n  color: white;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 100%;\r\n  left: 80%;\r\n  margin-left: -75px;\r\n  opacity: 0;\r\n  transition: opacity 0.3s;\r\n}\r\n\r\n.like_box .pop::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 55%;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n.inst {\r\n  margin: 15px;\r\n  height: 39px;\r\n}\r\n\r\n.btn_comment,\r\n.comment-place-btn {\r\n  margin: 5px auto;\r\n  display: block;\r\n  width: 100px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  height: 30px;\r\n  box-shadow: 3px 3px 0 #dd1a32;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.btn_comment:hover {\r\n  border: 2px solid #dd1a32;\r\n  box-shadow: none;\r\n}\r\n\r\n/* comment section */\r\n\r\n.comment-section {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid grey;\r\n  background-color: rgb(251, 251, 247);\r\n  color: black;\r\n  z-index: 100;\r\n  backdrop-filter: blur(4px);\r\n  top: -0.5rem;\r\n  cursor: pointer;\r\n  padding: 2rem;\r\n  overflow: scroll;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  right: 32px;\r\n  top: 32px;\r\n  width: 32px;\r\n  height: 32px;\r\n  opacity: 0.3;\r\n}\r\n\r\n.close-.close-icon {\r\n  opacity: 1;\r\n}\r\n\r\n.close-icon::before,\r\n.close-icon::after {\r\n  position: absolute;\r\n  left: 15px;\r\n  content: ' ';\r\n  height: 33px;\r\n  width: 2px;\r\n  background-color: rgb(9, 9, 9);\r\n}\r\n\r\n.close-icon::before {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-icon::after {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.meal-name {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 32px;\r\n  background-color: var(--color);\r\n}\r\n\r\n.food-details {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n  border: 2px solid rgb(180, 173, 173);\r\n}\r\n\r\n.bar {\r\n  width: 0;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.display-comments {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: black;\r\n  font-size: 24px;\r\n}\r\n\r\n.comment {\r\n  background-color: #cbcccf;\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n}\r\n\r\n.comment-input,\r\n.comment-area {\r\n  padding: 0.5rem;\r\n  margin: 5px auto;\r\n  display: block;\r\n  font-size: 18px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 28px;\r\n}\r\n\r\n.food-instruction {\r\n  color: gray;\r\n}\r\n\r\n.comment-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin-top: 0.5rem;\r\n  color: #e8e9ea;\r\n  transition: 0.2s box-shadow;\r\n  list-style: none;\r\n  border: 2px solid gray;\r\n  margin-left: 25rem;\r\n  width: 50%;\r\n  padding: 2rem;\r\n}\r\n\r\n.meal-display {\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--hd-color);\r\n  transition: 0.3s transform;\r\n  background-color: #f8f9fc;\r\n}\r\n\r\n.comment-img {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border: 10px solid goldenrod;\r\n  width: 30%;\r\n}\r\n\r\n/* style footer */\r\n\r\nfooter {\r\n  align-items: center;\r\n  align-content: center;\r\n  padding: 1.5rem;\r\n  border: 2px solid grey;\r\n  background-color: #dd1a32;\r\n  color: var(--bar-color);\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 650px) {\r\n  header {\r\n    font-size: 24px;\r\n    justify-content: space-between;\r\n    padding: 0 20%;\r\n    position: fixed;\r\n  }\r\n\r\n  header > .fa-bars {\r\n    display: block;\r\n  }\r\n\r\n  nav {\r\n    background-color: #ed1c236b;\r\n    display: none;\r\n    height: 100%;\r\n    position: fixed;\r\n    backdrop-filter: blur(7px);\r\n  }\r\n\r\n  nav .logo {\r\n    display: none;\r\n  }\r\n\r\n  .menu {\r\n    width: 100%;\r\n    margin-top: 25%;\r\n  }\r\n\r\n  .menu > ul {\r\n    height: auto;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .menu li {\r\n    width: 100%;\r\n  }\r\n\r\n  /* style the main */\r\n\r\n  .main_head {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .main_head > h1 {\r\n    display: none;\r\n  }\r\n\r\n  .main_head > p {\r\n    left: auto;\r\n    bottom: auto;\r\n    width: 90%;\r\n    background-color: rgba(255, 255, 255, 0.61);\r\n  }\r\n\r\n  .meals_container {\r\n    width: 100%;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .meals_container > article {\r\n    width: 80%;\r\n  }\r\n\r\n  .inst {\r\n    height: auto;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style_mobile.css"],"names":[],"mappings":"AAAA;EACE;IACE,eAAe;IACf,8BAA8B;IAC9B,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,2BAA2B;IAC3B,aAAa;IACb,YAAY;IACZ,eAAe;IACf,0BAA0B;EAC5B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;;EAEA,mBAAmB;;EAEnB;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,UAAU;IACV,2CAA2C;EAC7C;;EAEA;IACE,WAAW;IACX,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":["@media only screen and (max-width: 650px) {\r\n  header {\r\n    font-size: 24px;\r\n    justify-content: space-between;\r\n    padding: 0 20%;\r\n    position: fixed;\r\n  }\r\n\r\n  header > .fa-bars {\r\n    display: block;\r\n  }\r\n\r\n  nav {\r\n    background-color: #ed1c236b;\r\n    display: none;\r\n    height: 100%;\r\n    position: fixed;\r\n    backdrop-filter: blur(7px);\r\n  }\r\n\r\n  nav .logo {\r\n    display: none;\r\n  }\r\n\r\n  .menu {\r\n    width: 100%;\r\n    margin-top: 25%;\r\n  }\r\n\r\n  .menu > ul {\r\n    height: auto;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .menu li {\r\n    width: 100%;\r\n  }\r\n\r\n  /* style the main */\r\n\r\n  .main_head {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .main_head > h1 {\r\n    display: none;\r\n  }\r\n\r\n  .main_head > p {\r\n    left: auto;\r\n    bottom: auto;\r\n    width: 90%;\r\n    background-color: rgba(255, 255, 255, 0.61);\r\n  }\r\n\r\n  .meals_container {\r\n    width: 100%;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .meals_container > article {\r\n    width: 80%;\r\n  }\r\n\r\n  .inst {\r\n    height: auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSwwR0FBMEcsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQkFBcUIsZUFBZSwwQkFBMEIsMkJBQTJCLDBCQUEwQix1QkFBdUIsMEJBQTBCLEtBQUssV0FBVyxpQkFBaUIsZ0JBQWdCLDZCQUE2QiwyQ0FBMkMsNkJBQTZCLEtBQUssY0FBYyw4QkFBOEIsS0FBSyxnQkFBZ0Isb0JBQW9CLGtCQUFrQiw4QkFBOEIsdUJBQXVCLHNCQUFzQiwwQkFBMEIsd0NBQXdDLG1CQUFtQixtQkFBbUIsS0FBSyx1QkFBdUIsOEJBQThCLEtBQUssMkJBQTJCLG9CQUFvQixLQUFLLGFBQWEsb0JBQW9CLHlCQUF5QixrQkFBa0Isa0JBQWtCLHFDQUFxQyxtQkFBbUIsa0NBQWtDLEtBQUssZUFBZSx1QkFBdUIsS0FBSyxtQkFBbUIsbUJBQW1CLEtBQUssZUFBZSxpQkFBaUIsS0FBSyxvQkFBb0Isb0JBQW9CLG1CQUFtQixLQUFLLDRCQUE0QixvQkFBb0IsMEJBQTBCLHVCQUF1QixzQkFBc0Isb0JBQW9CLEtBQUssa0JBQWtCLG1CQUFtQixtQkFBbUIscUJBQXFCLHVCQUF1QixvQkFBb0IsMEJBQTBCLDhCQUE4QixxQkFBcUIsd0NBQXdDLEtBQUssd0JBQXdCLGtDQUFrQyx5Q0FBeUMscUJBQXFCLDhCQUE4QixLQUFLLHNCQUFzQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixzQkFBc0IsbUJBQW1CLEtBQUssMEJBQTBCLDhCQUE4QixLQUFLLGdEQUFnRCxrQkFBa0IsbUJBQW1CLHlCQUF5QixxQkFBcUIsZ0RBQWdELDZCQUE2QixpQkFBaUIsbUNBQW1DLEtBQUsseUJBQXlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLG1CQUFtQixvQkFBb0IseUlBQXlJLHlCQUF5QixlQUFlLHlCQUF5QixnQkFBZ0IseUJBQXlCLHNCQUFzQiwwQkFBMEIsd0JBQXdCLHVCQUF1QixrQ0FBa0MsMENBQTBDLEtBQUssMEJBQTBCLFdBQVcscUlBQXFJLFlBQVkscUlBQXFJLFlBQVksc0lBQXNJLFlBQVksc0lBQXNJLFlBQVksc0lBQXNJLFlBQVksc0lBQXNJLFlBQVksc0lBQXNJLFlBQVksc0lBQXNJLGFBQWEscUlBQXFJLEtBQUssMEJBQTBCLDRCQUE0QixrQkFBa0Isb0JBQW9CLEtBQUssYUFBYSxlQUFlLGtDQUFrQyx5Q0FBeUMsS0FBSyxvQkFBb0IsNEJBQTRCLG1CQUFtQixxQkFBcUIsc0JBQXNCLEtBQUssOEJBQThCLHFCQUFxQix5QkFBeUIsZ0JBQWdCLGtCQUFrQixrQkFBa0IsbUJBQW1CLHlCQUF5QixxQ0FBcUMsS0FBSyx3QkFBd0IsbUJBQW1CLHlCQUF5QixpQkFBaUIsOEJBQThCLHNCQUFzQixlQUFlLG9CQUFvQix5QkFBeUIsS0FBSywwQkFBMEIsaUJBQWlCLHFCQUFxQixLQUFLLGtDQUFrQyw0QkFBNEIsbUJBQW1CLG1CQUFtQiwyQkFBMkIsMkNBQTJDLGlDQUFpQyxLQUFLLHdDQUF3Qyw2QkFBNkIsS0FBSyxtQkFBbUIsa0JBQWtCLG9CQUFvQixLQUFLLHlCQUF5QixrQkFBa0IsbUJBQW1CLEtBQUssZ0JBQWdCLG1CQUFtQixvQkFBb0IscUNBQXFDLEtBQUssbUJBQW1CLDRCQUE0Qix5QkFBeUIsS0FBSyx3QkFBd0Isc0JBQXNCLHlCQUF5QixLQUFLLHdCQUF3Qix3QkFBd0IseUJBQXlCLG1CQUFtQiw2QkFBNkIsbUJBQW1CLHlCQUF5Qix5QkFBeUIsbUJBQW1CLHlCQUF5QixpQkFBaUIsbUJBQW1CLGdCQUFnQix5QkFBeUIsaUJBQWlCLCtCQUErQixLQUFLLCtCQUErQixvQkFBb0IseUJBQXlCLGdCQUFnQixnQkFBZ0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsNkRBQTZELEtBQUssZUFBZSxtQkFBbUIsbUJBQW1CLEtBQUssNkNBQTZDLHVCQUF1QixxQkFBcUIsbUJBQW1CLHNCQUFzQixtQkFBbUIseUJBQXlCLG1CQUFtQixvQ0FBb0Msa0NBQWtDLEtBQUssNEJBQTRCLGdDQUFnQyx1QkFBdUIsS0FBSyx1REFBdUQsc0JBQXNCLGtCQUFrQixtQkFBbUIsNkJBQTZCLDJDQUEyQyxtQkFBbUIsbUJBQW1CLGlDQUFpQyxtQkFBbUIsc0JBQXNCLG9CQUFvQix1QkFBdUIsS0FBSyxxQkFBcUIseUJBQXlCLGtCQUFrQixnQkFBZ0Isa0JBQWtCLG1CQUFtQixtQkFBbUIsS0FBSyw0QkFBNEIsaUJBQWlCLEtBQUssb0RBQW9ELHlCQUF5QixpQkFBaUIsbUJBQW1CLG1CQUFtQixpQkFBaUIscUNBQXFDLEtBQUssNkJBQTZCLCtCQUErQixLQUFLLDRCQUE0QixnQ0FBZ0MsS0FBSyxvQkFBb0Isb0JBQW9CLDhCQUE4QixvQkFBb0Isc0JBQXNCLHFDQUFxQyxLQUFLLHVCQUF1QixvQkFBb0IsMEJBQTBCLHVCQUF1QixzQkFBc0Isb0JBQW9CLDJDQUEyQyxLQUFLLGNBQWMsZUFBZSx5Q0FBeUMsS0FBSywyQkFBMkIsb0JBQW9CLDhCQUE4QixtQkFBbUIsc0JBQXNCLEtBQUssa0JBQWtCLGdDQUFnQyw0QkFBNEIsaUJBQWlCLHdCQUF3QixLQUFLLDBDQUEwQyxzQkFBc0IsdUJBQXVCLHFCQUFxQixzQkFBc0IsbUJBQW1CLHlCQUF5QixrQ0FBa0MsS0FBSyxzQkFBc0Isb0JBQW9CLDhCQUE4QixvQkFBb0Isc0JBQXNCLEtBQUssMkJBQTJCLGtCQUFrQixLQUFLLHVCQUF1QixvQkFBb0IsNkJBQTZCLDhCQUE4Qix5QkFBeUIscUJBQXFCLGtDQUFrQyx1QkFBdUIsNkJBQTZCLHlCQUF5QixpQkFBaUIsb0JBQW9CLEtBQUssdUJBQXVCLDRCQUE0QixpQkFBaUIsd0JBQXdCLDJCQUEyQiwyQ0FBMkMsaUNBQWlDLGdDQUFnQyxLQUFLLHNCQUFzQixxQkFBcUIsd0JBQXdCLHlCQUF5QixtQ0FBbUMsaUJBQWlCLEtBQUssMENBQTBDLDBCQUEwQiw0QkFBNEIsc0JBQXNCLDZCQUE2QixnQ0FBZ0MsOEJBQThCLEtBQUssdUJBQXVCO0FBQzdxc0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EscUZBQXFGLGNBQWMsd0JBQXdCLHVDQUF1Qyx1QkFBdUIsd0JBQXdCLE9BQU8sNkJBQTZCLHVCQUF1QixPQUFPLGVBQWUsb0NBQW9DLHNCQUFzQixxQkFBcUIsd0JBQXdCLG1DQUFtQyxPQUFPLHFCQUFxQixzQkFBc0IsT0FBTyxpQkFBaUIsb0JBQW9CLHdCQUF3QixPQUFPLHNCQUFzQixxQkFBcUIsK0JBQStCLGdDQUFnQyw0QkFBNEIsT0FBTyxvQkFBb0Isb0JBQW9CLE9BQU8sb0RBQW9ELHNCQUFzQiw0QkFBNEIsZ0NBQWdDLE9BQU8sMkJBQTJCLHNCQUFzQixPQUFPLDBCQUEwQixtQkFBbUIscUJBQXFCLG1CQUFtQixvREFBb0QsT0FBTyw0QkFBNEIsb0JBQW9CLGtCQUFrQixzQkFBc0IsK0JBQStCLDRCQUE0QixPQUFPLHNDQUFzQyxtQkFBbUIsT0FBTyxpQkFBaUIscUJBQXFCLE9BQU8sS0FBSyxXQUFXLHVGQUF1RixLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxvRUFBb0UsY0FBYyx3QkFBd0IsdUNBQXVDLHVCQUF1Qix3QkFBd0IsT0FBTyw2QkFBNkIsdUJBQXVCLE9BQU8sZUFBZSxvQ0FBb0Msc0JBQXNCLHFCQUFxQix3QkFBd0IsbUNBQW1DLE9BQU8scUJBQXFCLHNCQUFzQixPQUFPLGlCQUFpQixvQkFBb0Isd0JBQXdCLE9BQU8sc0JBQXNCLHFCQUFxQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixPQUFPLG9CQUFvQixvQkFBb0IsT0FBTyxvREFBb0Qsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsT0FBTywyQkFBMkIsc0JBQXNCLE9BQU8sMEJBQTBCLG1CQUFtQixxQkFBcUIsbUJBQW1CLG9EQUFvRCxPQUFPLDRCQUE0QixvQkFBb0Isa0JBQWtCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLE9BQU8sc0NBQXNDLG1CQUFtQixPQUFPLGlCQUFpQixxQkFBcUIsT0FBTyxLQUFLLHVCQUF1QjtBQUM5dkc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUEwRztBQUMxRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZGQUFPOzs7O0FBSW9EO0FBQzVFLE9BQU8saUVBQWUsNkZBQU8sSUFBSSxvR0FBYyxHQUFHLG9HQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZitCO0FBQy9CO0FBQ0E7QUFDQSxxQkFBcUIsaURBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNiWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QixFQUFFLGlCQUFpQixLQUFLLGdCQUFnQjtBQUNyRjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNPO0FBQ1AsaUJBQWlCLGFBQWEsb0JBQW9CLE9BQU87QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RCxtQ0FBbUMsZ0JBQWdCO0FBQ25ELHdEQUF3RCxRQUFRLHdCQUF3QjtBQUN4RjtBQUNBO0FBQ0EsdUNBQXVDLG9CQUFvQjtBQUMzRCxvREFBb0QsZ0JBQWdCO0FBQ3BFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLCtCQUErQiwyQkFBMkI7QUFDMUQsaUJBQWlCLElBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlDQUF5QztBQUN6QyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLEVBQUUsNEJBQTRCLEVBQUM7O0FBRTlDO0FBQ0E7QUFDTztBQUNQLGlCQUFpQixRQUFRLEVBQUUsR0FBRztBQUM5QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNMdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ3FCO0FBQ087QUFDVTtBQUNNO0FBQ0w7QUFDWTtBQUNlO0FBQ2xFO0FBQ0E7QUFDQSxhQUFhLDhDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnRUFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRCw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQWtEO0FBQ3pFLGdCQUFnQixvREFBb0Q7QUFDcEUsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRCxvREFBb0QsWUFBWSxzQ0FBc0MsUUFBUTtBQUM5RyxnQkFBZ0IsUUFBUSxtQ0FBbUMsT0FBTztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtRUFBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBSztBQUMxQjtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtRUFBYztBQUNwQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQVU7QUFDWixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvc3R5bGVfbW9iaWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvc3R5bGVfbW9iaWxlLmNzcz80MTBlIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvbW9kdWxlcy9DYWxjdWxlTGlrZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL3NyYy9tb2R1bGVzL0xpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL21vZHVsZXMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL3NyYy9tb2R1bGVzL2hvbWVQYWdlLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXN0Lzg5ODQud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStTYW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1iZy1jb2xvcjogI2U4ZTllYTtcXHJcXG4gIC0tYmFyLWNvbG9yOiAjZmFmYWZhO1xcclxcbiAgLS1oZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIC0tY29sb3I6ICNlZDFjMjQ7XFxyXFxuICAtLW5kLWNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHZhcigtLW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZC1jb2xvcik7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IHNwYW4ge1xcclxcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IC5mYS1iYXJzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE1NDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1kZXRhaWxzID4gbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgbGkge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBiYWNrZ3JvdW5kLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSBsaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzIzMzE7XFxyXFxuICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgbGk6aG92ZXIgYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGUgdGhlIG1haW4gKi9cXHJcXG5cXHJcXG4ubWFpbl9oZWFkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9oZWFkID4gaDEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiA0NSU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYW5pbWF0aW9uOiBmbGFzaCAzcyBlYXNlLWluO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmxhc2gge1xcclxcbiAgMCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICAyMCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA0MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgNTAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDYwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA3MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjMwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgODAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDkwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICAxMDAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGlrZV9ib3ggPiBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLkNBIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgbWFyZ2luOiAyNXB4IGF1dG8gYXV0byAxNXB4O1xcclxcbiAgYm9yZGVyOiAycHggIHNvbGlkIHZhcigtLWhkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLkNBID4gc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5faGVhZCBoMSA+IHNwYW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDE1cHg7XFxyXFxuICBsZWZ0OiAxNTdweDtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9oZWFkID4gcCB7XFxyXFxuICB3aWR0aDogNDUwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDIlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsZWZ0OiAzJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsc19jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHNfY29udGFpbmVyIGFydGljbGUge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1uZC1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzX2NvbnRhaW5lciBhcnRpY2xlOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxufVxcclxcblxcclxcbi5tZWFsX2ltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsX2ltZyA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5saWtlX2JveCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5saWtlX2JveCAuZmFzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VfYm94IC5wb3Age1xcclxcbiAgY29udGVudDogXFxcInRvdG9cXFwiO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3R0b206IDEwMCU7XFxyXFxuICBsZWZ0OiA4MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTc1cHg7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZV9ib3ggLnBvcDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxuICBsZWZ0OiA1NSU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzU1NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmluc3Qge1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAzOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX2NvbW1lbnQsXFxyXFxuLmNvbW1lbnQtcGxhY2UtYnRuIHtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMCAjZGQxYTMyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBib3gtc2hhZG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX2NvbW1lbnQ6aG92ZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2RkMWEzMjtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbW1lbnQgc2VjdGlvbiAqL1xcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjUxLCAyNDcpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICB0b3A6IC0wLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDMycHg7XFxyXFxuICB0b3A6IDMycHg7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIG9wYWNpdHk6IDAuMztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLS5jbG9zZS1pY29uIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOjpiZWZvcmUsXFxyXFxuLmNsb3NlLWljb246OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDE1cHg7XFxyXFxuICBjb250ZW50OiAnICc7XFxyXFxuICBoZWlnaHQ6IDMzcHg7XFxyXFxuICB3aWR0aDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDksIDkpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246OmFmdGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE4MCwgMTczLCAxNzMpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgYm9yZGVyOiAycHggIHNvbGlkIHZhcigtLWhkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjY2NmO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbnB1dCxcXHJcXG4uY29tbWVudC1hcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgYm94LXNoYWRvdztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWluc3RydWN0aW9uIHtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICBjb2xvcjogI2U4ZTllYTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgYm94LXNoYWRvdztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI1cmVtO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1oZC1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWltZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGdvbGRlbnJvZDtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcblxcclxcbi8qIHN0eWxlIGZvb3RlciAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDFhMzI7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1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VztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixVQUFVO0FBQ1o7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2FuczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iZy1jb2xvcjogI2U4ZTllYTtcXHJcXG4gIC0tYmFyLWNvbG9yOiAjZmFmYWZhO1xcclxcbiAgLS1oZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIC0tY29sb3I6ICNlZDFjMjQ7XFxyXFxuICAtLW5kLWNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHZhcigtLW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZC1jb2xvcik7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IHNwYW4ge1xcclxcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IC5mYS1iYXJzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE1NDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1kZXRhaWxzID4gbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgbGkge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBiYWNrZ3JvdW5kLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSBsaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzIzMzE7XFxyXFxuICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgbGk6aG92ZXIgYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGUgdGhlIG1haW4gKi9cXHJcXG5cXHJcXG4ubWFpbl9oZWFkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2VzdC84OTg0LndlYnAnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5faGVhZCA+IGgxIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRvcDogMzAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNDUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGFuaW1hdGlvbjogZmxhc2ggM3MgZWFzZS1pbjtcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcXHJcXG4gIDAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgMjAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgNDAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDExMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDUwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA2MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgNzAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIzMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDgwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA5MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgMTAwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VfYm94ID4gc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIG1hcmdpbjogMCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5DQSB7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIG1hcmdpbjogMjVweCBhdXRvIGF1dG8gMTVweDtcXHJcXG4gIGJvcmRlcjogMnB4ICBzb2xpZCB2YXIoLS1oZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5DQSA+IHNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluX2hlYWQgaDEgPiBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxNXB4O1xcclxcbiAgbGVmdDogMTU3cHg7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5faGVhZCA+IHAge1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAyJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbGVmdDogMyU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHNfY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzX2NvbnRhaW5lciBhcnRpY2xlIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tbmQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XFxyXFxufVxcclxcblxcclxcbi5tZWFsc19jb250YWluZXIgYXJ0aWNsZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbF9pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbF9pbWcgPiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZV9ib3gge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZV9ib3ggLmZhcyB7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlX2JveCAucG9wIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJ0b3RvXFxcIjtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYm90dG9tOiAxMDAlO1xcclxcbiAgbGVmdDogODAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VfYm94IC5wb3A6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgbGVmdDogNTUlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxuICBib3JkZXItd2lkdGg6IDVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6ICM1NTUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbnN0IHtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIGhlaWdodDogMzlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9jb21tZW50LFxcclxcbi5jb21tZW50LXBsYWNlLWJ0biB7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDAgI2RkMWEzMjtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgYm94LXNoYWRvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9jb21tZW50OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZDFhMzI7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb21tZW50IHNlY3Rpb24gKi9cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI1MSwgMjQ3KTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgdG9wOiAtMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAzMnB4O1xcclxcbiAgdG9wOiAzMnB4O1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS0uY2xvc2UtaWNvbiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjo6YmVmb3JlLFxcclxcbi5jbG9zZS1pY29uOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbiAgY29udGVudDogJyAnO1xcclxcbiAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgd2lkdGg6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA5LCA5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOjphZnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxODAsIDE3MywgMTczKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhciB7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGJvcmRlcjogMnB4ICBzb2xpZCB2YXIoLS1oZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWNvbW1lbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2NjZjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW5wdXQsXFxyXFxuLmNvbW1lbnQtYXJlYSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGJveC1zaGFkb3c7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1pbnN0cnVjdGlvbiB7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgY29sb3I6ICNlOGU5ZWE7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGJveC1zaGFkb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNXJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogOHJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0taGQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZjO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbWcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBnb2xkZW5yb2Q7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdHlsZSBmb290ZXIgKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQxYTMyO1xcclxcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwJTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyID4gLmZhLWJhcnMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDFjMjM2YjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IC5sb2dvIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51ID4gdWwge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUgbGkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIHN0eWxlIHRoZSBtYWluICovXFxyXFxuXFxyXFxuICAubWFpbl9oZWFkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbl9oZWFkID4gaDEge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW5faGVhZCA+IHAge1xcclxcbiAgICBsZWZ0OiBhdXRvO1xcclxcbiAgICBib3R0b206IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbHNfY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFsc19jb250YWluZXIgPiBhcnRpY2xlIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbnN0IHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9iaWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUEsbUJBQW1COztFQUVuQjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsMkNBQTJDO0VBQzdDOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwJTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyID4gLmZhLWJhcnMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDFjMjM2YjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IC5sb2dvIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51ID4gdWwge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUgbGkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIHN0eWxlIHRoZSBtYWluICovXFxyXFxuXFxyXFxuICAubWFpbl9oZWFkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbl9oZWFkID4gaDEge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW5faGVhZCA+IHAge1xcclxcbiAgICBsZWZ0OiBhdXRvO1xcclxcbiAgICBib3R0b206IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbHNfY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFsc19jb250YWluZXIgPiBhcnRpY2xlIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbnN0IHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfbW9iaWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVfbW9iaWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTGlrZXMgZnJvbSAnLi9MaWtlcy5qcyc7XHJcblxyXG5jb25zdCBDYWxjdWxlTGlrZSA9IGFzeW5jIChuYmVyLCBpdG0pID0+IHtcclxuICBjb25zdCBzZExpbmsgPSBuZXcgTGlrZXMoaXRtKTtcclxuICBjb25zdCBjaGVjayA9IHNkTGluay5wb3N0TGlrZXMoKTtcclxuXHJcbiAgaWYgKGNoZWNrKSB7XHJcbiAgICBuYmVyICs9IDE7XHJcbiAgICByZXR1cm4gbmJlcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBuYmVyO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxlTGlrZTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaWtlcyB7XHJcbiAgY29uc3RydWN0b3IoaXRlbUlkID0gJycsIHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9PN05hZUtEZnE3b1oxWEVJeTJzVi9saWtlcy8nKSB7XHJcbiAgICB0aGlzLml0ZW1JZCA9IGl0ZW1JZDtcclxuICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgdGhpcy5saWtlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpICE9IG51bGxcclxuICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpKVxyXG4gICAgICA6ICcnO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBpdGVtSWQ6IHRoaXMuaXRlbUlkLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNhdmVMaWtlZChUU2F2ZSA9IHRoaXMubGlrZWQpIHtcclxuICAgIGNvbnN0IHN0b3JlTGlrZWQgPSBKU09OLnN0cmluZ2lmeShUU2F2ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlrZWQnLCBzdG9yZUxpa2VkKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldExpa2VzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcbiAgfVxyXG5cclxuICBhc3luYyBwb3N0TGlrZXMoKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMubGlrZWQgPT09ICcnIHx8IHRoaXMubGlrZWQubGVuZ2h0ID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2godGhpcy51cmwsIG9wdGlvbik7XHJcbiAgICAgIHJlc3BvbnNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGlrZWQgPSBbdGhpcy5kYXRhXTtcclxuICAgICAgICB0aGlzLnNhdmVMaWtlZCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaWtlZFNvcnQgPSB0aGlzLmxpa2VkLm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtSWQpO1xyXG4gICAgaWYgKGxpa2VkU29ydC5pbmNsdWRlcyh0aGlzLml0ZW1JZCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaCh0aGlzLnVybCwgb3B0aW9uKTtcclxuICAgIHJlc3BvbnNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmxpa2VkLnB1c2godGhpcy5kYXRhKTtcclxuICAgICAgdGhpcy5zYXZlTGlrZWQoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjb21tZW50U2VjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtc2VjdGlvbicpO1xuY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtaW5wdXQnKTtcbmNvbnN0IGNvbW1lbnRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtYXJlYScpO1xuY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG5jb25zdCBkaXZEaXNwbGF5Q29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWhlYWQnKTtcblxuY29uc3QgJENPTU1FTlRfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3lWT3dxTkdwY2dxdk1kandrQzdDJztcblxuLy8gZGlzcGxheSBjb21tZW50XG5jb25zdCBkaXNwbGF5Y29tbWVudCA9IChkYXRhKSA9PiB7XG4gIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xuICBjb21tZW50QXJlYS52YWx1ZSA9ICcnO1xuICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICBkaXZEaXNwbGF5Q29tbWVudC5pbm5lckhUTUwgPSBkYXRhLmxlbmd0aDtcbiAgfVxuICBkYXRhLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gYCR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnQudXNlcm5hbWV9OiAgJHtjb21tZW50LmNvbW1lbnR9YDtcbiAgICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xufTtcblxuLy8gZmV0Y2ggY29tbWVudFxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnQgPSBhc3luYyAobWVhbElkKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAkeyRDT01NRU5UX1VSTH0vY29tbWVudHM/aXRlbV9pZD0ke21lYWxJZH1gKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRpc3BsYXljb21tZW50KGRhdGEpO1xuICAgIH0pO1xufTtcblxuLyogY29tbWVudCBkaXNwbGF5ICovXG5jb25zdCBwb3N0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LWluZm8nKTtcbmNvbW1lbnRTZWMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbmV4cG9ydCBjb25zdCBkaXNwbGF5Q29tbWVudERhdGEgPSAoaWQsIGRhdGEpID0+IHtcbiAgY29uc3QgbWVhbElkID0gaWQ7XG4gIGdldENvbW1lbnQobWVhbElkKTtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgcG9zdEluZm8uaW5uZXJIVE1MID0gYCA8aW1nIHNyYz1cIiR7ZWxlbWVudC5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCIgY2xhc3M9XCJjb21tZW50LWltZ1wiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cIm1lYWwtbmFtZVwiPiAke2VsZW1lbnQuc3RyTWVhbH08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzID1cImZvb2QtaW5zdHJ1Y3Rpb25cIj48aDE+UmVjaXBlOiZuYnNwOzwvaDE+ICR7ZWxlbWVudC5zdHJJbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgICAgIDx1bCBjbGFzcz1cImZvb2QtZGV0YWlsc1wiPlxuICAgICAgICAgIDxwIGNsYXNzID0gXCJiYXJcIj5cbiAgICAgICAgICAgICAgPGxpPjxoND5DYXRlZ29yeTo8L2g0PiAke2VsZW1lbnQuc3RyQ2F0ZWdvcnl9PC9saT48L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJiYXJcIj48bGk+PGg0PkFyZWE6PC9oND4gJHtlbGVtZW50LnN0ckFyZWF9PC9saT48L3A+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIGA7XG4gIH0pO1xuICBjb21tZW50U2VjLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCc7XG4gIGNvbW1lbnRTZWMuZGF0YXNldC5pZCA9IG1lYWxJZDtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbW1lbnQgPSBhc3luYyAoeyBpdGVtSWQsIHVzZXJuYW1lLCBjb21tZW50IH0sIHVybCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHt1cmx9L2NvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgY29tbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgZ2V0Q29tbWVudChpdGVtSWQpO1xufTtcblxuY29uc3QgaGFuZGxlRm9ybSA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgb2JqID0ge1xuICAgIGl0ZW1JZDogY29tbWVudFNlYy5kYXRhc2V0LmlkLFxuICAgIHVzZXJuYW1lOiBjb21tZW50SW5wdXQudmFsdWUsXG4gICAgY29tbWVudDogY29tbWVudEFyZWEudmFsdWUsXG4gIH07XG5cbiAgY3JlYXRlQ29tbWVudChvYmosICRDT01NRU5UX1VSTCk7XG5cbiAgY29tbWVudElucHV0LnZhbHVlID0gJyc7XG4gIGNvbW1lbnRBcmVhLnZhbHVlID0gJyc7XG59O1xuXG5jb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWljb24nKTtcbmNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbW1lbnRTZWMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuZXhwb3J0IGRlZmF1bHQgeyBoYW5kbGVGb3JtLCBkaXNwbGF5Y29tbWVudCB9O1xuXG4vKiBnZXQgY29tbWVudCBkYXRhICovXG5jb25zdCBtZWFsVXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JztcbmV4cG9ydCBjb25zdCBnZXRDb21tZW50RGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHttZWFsVXJsfSR7aWR9YClcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBkaXNwbGF5Q29tbWVudERhdGEoaWQsIGRhdGEubWVhbHMpKTtcbn07XG4iLCJjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBqc29uLm1lYWxzO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXRlbXBsYXRlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlX21vYmlsZS5jc3MnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL2Fzc2VzdC9sb2dvMS5wbmcnO1xyXG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuL21vZHVsZXMvaG9tZVBhZ2UuanMnO1xyXG5pbXBvcnQgTGlrZXMgZnJvbSAnLi9tb2R1bGVzL0xpa2VzLmpzJztcclxuaW1wb3J0IENhbGN1bGVMaWtlIGZyb20gJy4vbW9kdWxlcy9DYWxjdWxlTGlrZS5qcyc7XHJcbmltcG9ydCBoYW5kbGVGb3JtLCB7IGdldENvbW1lbnREYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQuanMnO1xyXG5cclxuY29uc3QgbXlsb2dvID0gbmV3IEltYWdlKCk7XHJcbm15bG9nby5zcmMgPSBJY29uO1xyXG5jb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcclxubG9nby5hcHBlbmRDaGlsZChteWxvZ28pO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzX2NvbnRhaW5lcicpO1xyXG5cclxuY29uc3QgZGlzcGxheSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBtZWFscyA9IGF3YWl0IGdldERhdGEoJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP2Y9YScpO1xyXG4gIGxldCBsaWtlZCA9IFtdO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlrZWQnKSAhPSBudWxsKSB7XHJcbiAgICBjb25zdCBsaWsgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpKTtcclxuICAgIGxpa2VkID0gbGlrLm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkKTtcclxuICB9XHJcblxyXG4gIG1lYWxzLmZvckVhY2goKHtcclxuICAgIGlkTWVhbCwgc3RyTWVhbCwgc3RyQ2F0ZWdvcnksIHN0ckFyZWEsIHN0ckluc3RydWN0aW9ucywgc3RyTWVhbFRodW1iLFxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IGFydGljbGUgPSBgXHJcbiAgPGFydGljbGU+XHJcbiAgIDxkaXYgY2xhc3M9XCJtZWFsX2ltZ1wiPjxpbWcgc3JjPVwiJHtzdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCI+PC9kaXY+XHJcbiAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPjxoMz4ke3N0ck1lYWx9PC9oMz5cclxuICAgICA8ZGl2IGNsYXNzPVwibGlrZV9ib3hcIj5cclxuICAgICAgIDxzcGFuIGNsYXNzPVwibmJyX2xpa2VcIj48L3NwYW4+XHJcbiAgICAgICA8c3BhbiBcclxuICAgICAgIHN0eWxlPVwiY29sb3I6ICR7bGlrZWQuaW5jbHVkZXMoJ2l0ZW1fJyArIGlkTWVhbCkgPyAnI2VkMWMyNCcgOiAnJ31cIiBcclxuICAgICAgIGxpa2VkPVwiJHtsaWtlZC5pbmNsdWRlcygnaXRlbV8nICsgaWRNZWFsKSA/ICd0cnVlJyA6ICdmYWxzZSd9XCIgXHJcbiAgICAgICBjbGFzcz1cImZhcyBmYS10aHVtYnMtdXBcIiBpZD1cIml0ZW1fJHtpZE1lYWx9XCI+PC9zcGFuPlxyXG4gICAgICAgPHNwYW4gY2xhc3M9XCJwb3BcIj48L3NwYW4+XHJcbiAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICA8cCBjbGFzcz1cImluc3RcIj4ke3N0ckluc3RydWN0aW9ucy5zbGljZSgwLCAxMDApfS4uLi48L3A+XHJcbiAgIDxwIGNsYXNzPVwiQ0FcIj48c3Bhbj48c3Ryb25nPkNhdGVnb3J5Ojwvc3Ryb25nPiAke3N0ckNhdGVnb3J5fTwvc3Bhbj48c3Bhbj48c3Ryb25nPkFyZWE6PC9zdHJvbmc+ICR7c3RyQXJlYX08L3NwYW4+PC9wPlxyXG4gICA8YnV0dG9uIGlkPSR7aWRNZWFsfSBjbGFzcz1cImJ0bl9jb21tZW50IGJ0blwiIGRhdGEtaWQ9XCIke2lkTWVhbH1cIiA+Q29tbWVudHM8L2J1dHRvbj5cclxuICAgXHJcbiAgPC9hcnRpY2xlPmA7XHJcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBhcnRpY2xlKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGZ0bkxpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGxpa2VfaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS10aHVtYnMtdXAnKTtcclxuICBsaWtlX2ljb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ickxpa2UgPSBlLnRhcmdldC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgIGNvbnN0IGxpa2VJY29uID0gZS50YXJnZXQ7XHJcbiAgICAgIGNvbnN0IGNhbExpa2UgPSBhd2FpdCBDYWxjdWxlTGlrZSgrbmJyTGlrZS50ZXh0Q29udGVudCwgbGlrZUljb24uaWQpO1xyXG4gICAgICBjb25zdCBpID0gY2FsTGlrZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgbmJyTGlrZS50ZXh0Q29udGVudCA9IGk7XHJcblxyXG4gICAgICBpZiAobGlrZUljb24uZ2V0QXR0cmlidXRlKCdsaWtlZCcpID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgbGlrZUljb24uc3R5bGUuY29sb3IgPSAnI2VkMWMyNCc7XHJcbiAgICAgICAgbGlrZUljb24uc2V0QXR0cmlidXRlKCdsaWtlZCcsICd0cnVlJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoKGxpa2VJY29uLmdldEF0dHJpYnV0ZSgnbGlrZWQnKSA9PT0gJ3RydWUnKSkge1xyXG4gICAgICAgIGxpa2VJY29uLnN0eWxlLmNvbG9yID0gJyc7XHJcbiAgICAgICAgbGlrZUljb24uc2V0QXR0cmlidXRlKCdsaWtlZCcsICdmYWxzZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRwbExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHNkTGluayA9IG5ldyBMaWtlcygpO1xyXG4gIHNkTGluay5nZXRMaWtlcygpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICB2YWx1ZS5mb3JFYWNoKCh7IGxpa2VzLCBpdGVtX2lkIH0pID0+IHtcclxuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1faWQpO1xyXG4gICAgICBpdGVtLnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudCA9IGxpa2VzO1xyXG4gICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IGxpa2VzICsgKChsaWtlcyA+IDEpID8gJyBsaWtlcycgOiAnIGxpa2UnKTtcclxuXHJcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gYnV0dG9uIGNvbW1lbnRzXHJcblxyXG5jb25zdCBmdG5Db21tZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ0bkNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuJyk7XHJcbiAgYnRuQ29tbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgZ2V0Q29tbWVudERhdGEoZS50YXJnZXQuaWQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5kaXNwbGF5KClcclxuICAudGhlbihkcGxMaWtlcylcclxuICAudGhlbihmdG5MaWtlcylcclxuICAudGhlbihmdG5Db21tZW50KTtcclxuXHJcbi8vIE1lc3NhZ2UgcG9wdXAgb24gbGlrZSBidXR0b25cclxuXHJcbmNvbnN0IGJhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFycycpO1xyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcclxuYmFycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcclxuICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qIGNvbW1lbnQgcGxhY2UgKi9cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGhhbmRsZUZvcm0oZSk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==