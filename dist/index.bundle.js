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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\r\n\r\n:root {\r\n  --bg-color: #e8e9ea;\r\n  --bar-color: #fafafa;\r\n  --hd-color: #ffcb05;\r\n  --color: #ed1c24;\r\n  --nd-color: #545862;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Fira Sans', sans-serif;\r\n  color: var(--nd-color);\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 100;\r\n  justify-content: space-between;\r\n  height: 70px;\r\n  background-color: #fafafa54;\r\n}\r\n\r\n.logo {\r\n  margin-left: 10%;\r\n}\r\n\r\n.logo img {\r\n  height: 70px;\r\n}\r\n\r\n.menu {\r\n  width: 30%;\r\n}\r\n\r\n.menu > ul {\r\n  display: flex;\r\n  height: 70px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  font-size: 34px;\r\n  align-items: center;\r\n  background-color: var(--hd-color);\r\n  color: white;\r\n  height: 45px;\r\n}\r\n\r\n.menu li {\r\n  width: 100px;\r\n  height: 70px;\r\n  padding: 5px 0;\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n  transition: 0.2s background-color;\r\n}\r\n\r\n.menu li:hover {\r\n  background-color: #ed1c2331;\r\n  border-top: 5px solid var(--color);\r\n  padding-top: 0;\r\n  color: var(--bar-color);\r\n}\r\n\r\n.menu > ul a {\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  line-height: 14px;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n.menu li:hover a {\r\n  color: var(--bar-color);\r\n}\r\n\r\n/* style the main */\r\n\r\n.main_head {\r\n  width: 100%;\r\n  height: 60vh;\r\n  position: relative;\r\n  display: block;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  z-index: 0;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.main_head > h1 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 200px;\r\n  height: 200px;\r\n  background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);\r\n  border-radius: 50%;\r\n  top: 30%;\r\n  position: absolute;\r\n  left: 45%;\r\n  text-align: center;\r\n  font-size: 50px;\r\n  color: var(--color);\r\n  line-height: 58px;\r\n  font-weight: 900;\r\n  animation: flash 3s ease-in;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes flash {\r\n  0% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  20% { background-image: linear-gradient(80deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  40% { background-image: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  50% { background-image: linear-gradient(130deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  60% { background-image: linear-gradient(190deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  70% { background-image: linear-gradient(230deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  80% { background-image: linear-gradient(300deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  90% { background-image: linear-gradient(360deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  100% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n}\r\n\r\n.main_head h1 > span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 157px;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: var(--color);\r\n}\r\n\r\n.main_head > p {\r\n  width: 450px;\r\n  position: absolute;\r\n  bottom: 2%;\r\n  background-color: white;\r\n  font-size: 24px;\r\n  left: 3%;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.meals_container {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meals_container article {\r\n  display: inline-block;\r\n  width: 400px;\r\n  margin: 20px;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--nd-color);\r\n  transition: 0.3s transform;\r\n}\r\n\r\n.meals_container article:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.meal_img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.meal_img > img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.title {\r\n  margin: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.like_box > span {\r\n  display: inline-block;\r\n  width: 20px;\r\n}\r\n\r\n.like_box .fas {\r\n  font-size: 28px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.inst {\r\n  margin: 15px;\r\n  height: 39px;\r\n}\r\n\r\n.btn_comment,\r\n.comment-place-btn {\r\n  margin: 5px auto;\r\n  display: block;\r\n  width: 100px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  height: 30px;\r\n  box-shadow: 3px 3px 0 #dd1a32;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.btn_comment:hover {\r\n  border: 2px solid #dd1a32;\r\n  box-shadow: none;\r\n}\r\n\r\n.CA {\r\n  width: 0;\r\n  margin: 25px auto auto 15px;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.CA > span {\r\n  display: inline-block;\r\n  width: 100px;\r\n  margin: 0 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n/* comment section */\r\n\r\n.comment-section {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid grey;\r\n  background-color: rgb(251, 251, 247);\r\n  color: black;\r\n  z-index: 100;\r\n  backdrop-filter: blur(4px);\r\n  top: -0.5rem;\r\n  cursor: pointer;\r\n  padding: 2rem;\r\n  overflow: scroll;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  right: 32px;\r\n  top: 32px;\r\n  width: 32px;\r\n  height: 32px;\r\n  opacity: 0.3;\r\n}\r\n\r\n.close-.close-icon {\r\n  opacity: 1;\r\n}\r\n\r\n.close-icon::before,\r\n.close-icon::after {\r\n  position: absolute;\r\n  left: 15px;\r\n  content: ' ';\r\n  height: 33px;\r\n  width: 2px;\r\n  background-color: rgb(9, 9, 9);\r\n}\r\n\r\n.close-icon::before {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-icon::after {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.meal-name {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 32px;\r\n  background-color: var(--color);\r\n}\r\n\r\n.food-details {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n  border: 2px solid rgb(180, 173, 173);\r\n}\r\n\r\n.food-details > li {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n}\r\n\r\n.bar {\r\n  width: 0;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.display-comments {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: black;\r\n  font-size: 24px;\r\n}\r\n\r\n.comment {\r\n  background-color: #cbcccf;\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n}\r\n\r\n.comment-input,\r\n.comment-area {\r\n  padding: 0.5rem;\r\n  margin: 5px auto;\r\n  display: block;\r\n  font-size: 18px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 28px;\r\n}\r\n\r\n.food-instruction {\r\n  color: gray;\r\n}\r\n\r\n.comment-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin-top: 0.5rem;\r\n  color: #e8e9ea;\r\n  transition: 0.2s box-shadow;\r\n  list-style: none;\r\n  border: 2px solid gray;\r\n  margin-left: 25rem;\r\n  width: 50%;\r\n  padding: 2rem;\r\n}\r\n\r\n.meal-display {\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--hd-color);\r\n  transition: 0.3s transform;\r\n  background-color: #f8f9fc;\r\n}\r\n\r\n.comment-img {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border: 10px solid goldenrod;\r\n  width: 30%;\r\n}\r\n\r\n/* style footer */\r\n\r\nfooter {\r\n  align-items: center;\r\n  align-content: center;\r\n  padding: 1.5rem;\r\n  border: 2px solid grey;\r\n  background-color: #dd1a32;\r\n  color: var(--bar-color);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable no-descending-specificity */\r\n@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n:root {\r\n  --bg-color: #e8e9ea;\r\n  --bar-color: #fafafa;\r\n  --hd-color: #ffcb05;\r\n  --color: #ed1c24;\r\n  --nd-color: #545862;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Fira Sans', sans-serif;\r\n  color: var(--nd-color);\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 100;\r\n  justify-content: space-between;\r\n  height: 70px;\r\n  background-color: #fafafa54;\r\n}\r\n\r\n.logo {\r\n  margin-left: 10%;\r\n}\r\n\r\n.logo img {\r\n  height: 70px;\r\n}\r\n\r\n.menu {\r\n  width: 30%;\r\n}\r\n\r\n.menu > ul {\r\n  display: flex;\r\n  height: 70px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  font-size: 34px;\r\n  align-items: center;\r\n  background-color: var(--hd-color);\r\n  color: white;\r\n  height: 45px;\r\n}\r\n\r\n.menu li {\r\n  width: 100px;\r\n  height: 70px;\r\n  padding: 5px 0;\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n  transition: 0.2s background-color;\r\n}\r\n\r\n.menu li:hover {\r\n  background-color: #ed1c2331;\r\n  border-top: 5px solid var(--color);\r\n  padding-top: 0;\r\n  color: var(--bar-color);\r\n}\r\n\r\n.menu > ul a {\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  line-height: 14px;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n.menu li:hover a {\r\n  color: var(--bar-color);\r\n}\r\n\r\n/* style the main */\r\n\r\n.main_head {\r\n  width: 100%;\r\n  height: 60vh;\r\n  position: relative;\r\n  display: block;\r\n  background-image: url('assest/8984.webp');\r\n  background-size: cover;\r\n  z-index: 0;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.main_head > h1 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 200px;\r\n  height: 200px;\r\n  background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);\r\n  border-radius: 50%;\r\n  top: 30%;\r\n  position: absolute;\r\n  left: 45%;\r\n  text-align: center;\r\n  font-size: 50px;\r\n  color: var(--color);\r\n  line-height: 58px;\r\n  font-weight: 900;\r\n  animation: flash 3s ease-in;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes flash {\r\n  0% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  20% { background-image: linear-gradient(80deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  40% { background-image: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  50% { background-image: linear-gradient(130deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  60% { background-image: linear-gradient(190deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  70% { background-image: linear-gradient(230deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  80% { background-image: linear-gradient(300deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  90% { background-image: linear-gradient(360deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  100% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n}\r\n\r\n.main_head h1 > span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 157px;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: var(--color);\r\n}\r\n\r\n.main_head > p {\r\n  width: 450px;\r\n  position: absolute;\r\n  bottom: 2%;\r\n  background-color: white;\r\n  font-size: 24px;\r\n  left: 3%;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.meals_container {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meals_container article {\r\n  display: inline-block;\r\n  width: 400px;\r\n  margin: 20px;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--nd-color);\r\n  transition: 0.3s transform;\r\n}\r\n\r\n.meals_container article:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.meal_img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.meal_img > img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.title {\r\n  margin: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.like_box > span {\r\n  display: inline-block;\r\n  width: 20px;\r\n}\r\n\r\n.like_box .fas {\r\n  font-size: 28px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.inst {\r\n  margin: 15px;\r\n  height: 39px;\r\n}\r\n\r\n.btn_comment,\r\n.comment-place-btn {\r\n  margin: 5px auto;\r\n  display: block;\r\n  width: 100px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  height: 30px;\r\n  box-shadow: 3px 3px 0 #dd1a32;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.btn_comment:hover {\r\n  border: 2px solid #dd1a32;\r\n  box-shadow: none;\r\n}\r\n\r\n.CA {\r\n  width: 0;\r\n  margin: 25px auto auto 15px;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.CA > span {\r\n  display: inline-block;\r\n  width: 100px;\r\n  margin: 0 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n/* comment section */\r\n\r\n.comment-section {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid grey;\r\n  background-color: rgb(251, 251, 247);\r\n  color: black;\r\n  z-index: 100;\r\n  backdrop-filter: blur(4px);\r\n  top: -0.5rem;\r\n  cursor: pointer;\r\n  padding: 2rem;\r\n  overflow: scroll;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  right: 32px;\r\n  top: 32px;\r\n  width: 32px;\r\n  height: 32px;\r\n  opacity: 0.3;\r\n}\r\n\r\n.close-.close-icon {\r\n  opacity: 1;\r\n}\r\n\r\n.close-icon::before,\r\n.close-icon::after {\r\n  position: absolute;\r\n  left: 15px;\r\n  content: ' ';\r\n  height: 33px;\r\n  width: 2px;\r\n  background-color: rgb(9, 9, 9);\r\n}\r\n\r\n.close-icon::before {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-icon::after {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.meal-name {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 32px;\r\n  background-color: var(--color);\r\n}\r\n\r\n.food-details {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n  border: 2px solid rgb(180, 173, 173);\r\n}\r\n\r\n.food-details > li {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n}\r\n\r\n.bar {\r\n  width: 0;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.display-comments {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: black;\r\n  font-size: 24px;\r\n}\r\n\r\n.comment {\r\n  background-color: #cbcccf;\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n}\r\n\r\n.comment-input,\r\n.comment-area {\r\n  padding: 0.5rem;\r\n  margin: 5px auto;\r\n  display: block;\r\n  font-size: 18px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 28px;\r\n}\r\n\r\n.food-instruction {\r\n  color: gray;\r\n}\r\n\r\n.comment-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin-top: 0.5rem;\r\n  color: #e8e9ea;\r\n  transition: 0.2s box-shadow;\r\n  list-style: none;\r\n  border: 2px solid gray;\r\n  margin-left: 25rem;\r\n  width: 50%;\r\n  padding: 2rem;\r\n}\r\n\r\n.meal-display {\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--hd-color);\r\n  transition: 0.3s transform;\r\n  background-color: #f8f9fc;\r\n}\r\n\r\n.comment-img {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border: 10px solid goldenrod;\r\n  width: 30%;\r\n}\r\n\r\n/* style footer */\r\n\r\nfooter {\r\n  align-items: center;\r\n  align-content: center;\r\n  padding: 1.5rem;\r\n  border: 2px solid grey;\r\n  background-color: #dd1a32;\r\n  color: var(--bar-color);\r\n}\r\n"],"sourceRoot":""}]);
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
    const response = await fetch(this.url, option);
    response.then(() => {
      this.liked = [this.data];
      this.saveLiked();
    });
    this.liked = [this.data];
    this.saveLiked();
    return true;
  } else {
    const likedSort = this.liked.map((item) => item.item_id);
    if (likedSort.includes(this.item_id)) {
      return false;
    }else {
      const response = await fetch(this.url, option);
      response.then(() => {
        this.liked.push(this.data);
        this.saveLiked();
      });
      this.liked.push(this.data);
      this.saveLiked();
      return true;
    }
  }
 };
}

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "displayCommentData": () => (/* binding */ displayCommentData),
/* harmony export */   "getComment": () => (/* binding */ getComment)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleForm);

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
/* harmony import */ var _assest_logo1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assest/logo1.png */ "./src/assest/logo1.png");
/* harmony import */ var _modules_homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/homePage.js */ "./src/modules/homePage.js");
/* harmony import */ var _modules_Likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Likes.js */ "./src/modules/Likes.js");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* eslint-disable prefer-template */
/* eslint-disable camelcase */






const mylogo = new Image();
mylogo.src = _assest_logo1_png__WEBPACK_IMPORTED_MODULE_1__;

const container = document.querySelector('.meals_container');
const mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const logo = document.querySelector('.logo');
logo.appendChild(mylogo);
const display = async () => {
  const meals = await (0,_modules_homePage_js__WEBPACK_IMPORTED_MODULE_2__["default"])('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
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
   <div class="like_box"><span class="nbr_like"></span><span style=" color: ${liked.includes('item_' + idMeal) ? '#ed1c24' : ''}" liked="${liked.includes('item_' + idMeal) ? 'true' : 'false'}" class="fas fa-thumbs-up" id="item_${idMeal}"></span></div>
   </div>
   <p class="inst">${strInstructions.slice(0, 100)}....</p>
   <p class="CA"><span><strong>Category:</strong> ${strCategory}</span><span><strong>Area:</strong> ${strArea}</span></p>
   <button id=${idMeal} class="btn_comment btn" data-id="${idMeal}" >Comments</button>
   
  </article>`;
    container.insertAdjacentHTML('beforeend', article);
  });
};

/* get comment data */
const getCommentData = async (id) => {
  await fetch(`${mealUrl}${id}`)
    .then((res) => res.json())
    .then((data) => (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_4__.displayCommentData)(id, data.meals));
};

/* comment place */
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_4__["default"])(e);
});

const ftnLikes = async () => {
  const likeIcon = document.querySelectorAll('.fa-thumbs-up');

  const btn = document.querySelectorAll('.btn');
  btn.forEach((it) => {
    it.addEventListener('click', (e) => {
      getCommentData(e.target.id);
    });
  });

  likeIcon.forEach((element) => {
    element.addEventListener('click', async (e) => {
      const nbrLike = e.target.previousSibling;
      const likeIcon = e.target;
      let i = +nbrLike.textContent;
      const sdLink = new _modules_Likes_js__WEBPACK_IMPORTED_MODULE_3__["default"](likeIcon.id);
      const check = await sdLink.postLikes();
      if (check) {
        i += 1;
        nbrLike.innerHTML = i;
      }

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
display().then(ftnLikes);

const dplLikes = async () => {
  const sdLink = new _modules_Likes_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  sdLink.getLikes().then((value) => {
    value.forEach(({ likes, item_id }) => {
      document.getElementById(item_id).previousSibling.textContent = likes;
    });
  });
};
dplLikes();

const getb = async () => {

};
getb();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFN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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRCw0QkFBNEIsUUFBUTtBQUNwQyw4RUFBOEUsa0RBQWtELFdBQVcsb0RBQW9ELHNDQUFzQyxPQUFPO0FBQzVPO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRCxvREFBb0QsWUFBWSxzQ0FBc0MsUUFBUTtBQUM5RyxnQkFBZ0IsUUFBUSxtQ0FBbUMsT0FBTztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRLEVBQUUsR0FBRztBQUM5QjtBQUNBLG9CQUFvQix1RUFBa0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBVTtBQUNaLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseURBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHlEQUFLO0FBQzFCO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvbW9kdWxlcy9MaWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvbW9kdWxlcy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2VzdC84OTg0LndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2FuczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJnLWNvbG9yOiAjZThlOWVhO1xcclxcbiAgLS1iYXItY29sb3I6ICNmYWZhZmE7XFxyXFxuICAtLWhkLWNvbG9yOiAjZmZjYjA1O1xcclxcbiAgLS1jb2xvcjogI2VkMWMyNDtcXHJcXG4gIC0tbmQtY29sb3I6ICM1NDU4NjI7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogdmFyKC0tbmQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTU0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWcge1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LXNpemU6IDM0cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGQtY29sb3IpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSBsaSB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGJhY2tncm91bmQtY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5tZW51IGxpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDFjMjMzMTtcXHJcXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IHVsIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSBsaTpob3ZlciBhIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdHlsZSB0aGUgbWFpbiAqL1xcclxcblxcclxcbi5tYWluX2hlYWQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5tYWluX2hlYWQgPiBoMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB0b3A6IDMwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDQ1JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxuICBsaW5lLWhlaWdodDogNThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBhbmltYXRpb246IGZsYXNoIDNzIGVhc2UtaW47XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmbGFzaCB7XFxyXFxuICAwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDIwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDQwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA1MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgNjAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDcwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMzBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA4MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgOTAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxufVxcclxcblxcclxcbi5tYWluX2hlYWQgaDEgPiBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxNXB4O1xcclxcbiAgbGVmdDogMTU3cHg7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5faGVhZCA+IHAge1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAyJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbGVmdDogMyU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHNfY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzX2NvbnRhaW5lciBhcnRpY2xlIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tbmQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XFxyXFxufVxcclxcblxcclxcbi5tZWFsc19jb250YWluZXIgYXJ0aWNsZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbF9pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbF9pbWcgPiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZV9ib3ggPiBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZV9ib3ggLmZhcyB7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnN0IHtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIGhlaWdodDogMzlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9jb21tZW50LFxcclxcbi5jb21tZW50LXBsYWNlLWJ0biB7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDAgI2RkMWEzMjtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgYm94LXNoYWRvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9jb21tZW50OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZDFhMzI7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uQ0Ege1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBtYXJnaW46IDI1cHggYXV0byBhdXRvIDE1cHg7XFxyXFxuICBib3JkZXI6IDJweCAgc29saWQgdmFyKC0taGQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uQ0EgPiBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb21tZW50IHNlY3Rpb24gKi9cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI1MSwgMjQ3KTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgdG9wOiAtMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAzMnB4O1xcclxcbiAgdG9wOiAzMnB4O1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS0uY2xvc2UtaWNvbiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjo6YmVmb3JlLFxcclxcbi5jbG9zZS1pY29uOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbiAgY29udGVudDogJyAnO1xcclxcbiAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgd2lkdGg6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA5LCA5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOjphZnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxODAsIDE3MywgMTczKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtZGV0YWlscyA+IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5iYXIge1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBib3JkZXI6IDJweCAgc29saWQgdmFyKC0taGQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNjY2Y7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWlucHV0LFxcclxcbi5jb21tZW50LWFyZWEge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbWFyZ2luOiA1cHggYXV0bztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBib3gtc2hhZG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtaW5zdHJ1Y3Rpb24ge1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiAjZThlOWVhO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBib3gtc2hhZG93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxuICBtYXJnaW4tbGVmdDogMjVyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWhkLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW1nIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXI6IDEwcHggc29saWQgZ29sZGVucm9kO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGUgZm9vdGVyICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkMWEzMjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYXItY29sb3IpO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdEQUFnRDs7QUFHaEQ7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFC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Q2Ysc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZGVzY2VuZGluZy1zcGVjaWZpY2l0eSAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2FuczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iZy1jb2xvcjogI2U4ZTllYTtcXHJcXG4gIC0tYmFyLWNvbG9yOiAjZmFmYWZhO1xcclxcbiAgLS1oZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIC0tY29sb3I6ICNlZDFjMjQ7XFxyXFxuICAtLW5kLWNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHZhcigtLW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE1NDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhkLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgbGkge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBiYWNrZ3JvdW5kLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSBsaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzIzMzE7XFxyXFxuICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgbGk6aG92ZXIgYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGUgdGhlIG1haW4gKi9cXHJcXG5cXHJcXG4ubWFpbl9oZWFkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2VzdC84OTg0LndlYnAnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5faGVhZCA+IGgxIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRvcDogMzAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNDUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGFuaW1hdGlvbjogZmxhc2ggM3MgZWFzZS1pbjtcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcXHJcXG4gIDAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgMjAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgNDAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDExMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDUwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA2MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgNzAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIzMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDgwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA5MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgMTAwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW5faGVhZCBoMSA+IHNwYW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDE1cHg7XFxyXFxuICBsZWZ0OiAxNTdweDtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9oZWFkID4gcCB7XFxyXFxuICB3aWR0aDogNDUwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDIlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsZWZ0OiAzJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsc19jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHNfY29udGFpbmVyIGFydGljbGUge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1uZC1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzX2NvbnRhaW5lciBhcnRpY2xlOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxufVxcclxcblxcclxcbi5tZWFsX2ltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsX2ltZyA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5saWtlX2JveCA+IHNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlX2JveCAuZmFzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluc3Qge1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAzOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX2NvbW1lbnQsXFxyXFxuLmNvbW1lbnQtcGxhY2UtYnRuIHtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMCAjZGQxYTMyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBib3gtc2hhZG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuX2NvbW1lbnQ6aG92ZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2RkMWEzMjtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5DQSB7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIG1hcmdpbjogMjVweCBhdXRvIGF1dG8gMTVweDtcXHJcXG4gIGJvcmRlcjogMnB4ICBzb2xpZCB2YXIoLS1oZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5DQSA+IHNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbW1lbnQgc2VjdGlvbiAqL1xcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjUxLCAyNDcpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICB0b3A6IC0wLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDMycHg7XFxyXFxuICB0b3A6IDMycHg7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIG9wYWNpdHk6IDAuMztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLS5jbG9zZS1pY29uIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOjpiZWZvcmUsXFxyXFxuLmNsb3NlLWljb246OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDE1cHg7XFxyXFxuICBjb250ZW50OiAnICc7XFxyXFxuICBoZWlnaHQ6IDMzcHg7XFxyXFxuICB3aWR0aDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDksIDkpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246OmFmdGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE4MCwgMTczLCAxNzMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1kZXRhaWxzID4gbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhciB7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGJvcmRlcjogMnB4ICBzb2xpZCB2YXIoLS1oZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWNvbW1lbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2NjZjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW5wdXQsXFxyXFxuLmNvbW1lbnQtYXJlYSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGJveC1zaGFkb3c7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1pbnN0cnVjdGlvbiB7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgY29sb3I6ICNlOGU5ZWE7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGJveC1zaGFkb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNXJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogOHJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0taGQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZjO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbWcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBnb2xkZW5yb2Q7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdHlsZSBmb290ZXIgKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQxYTMyO1xcclxcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaWtlcyB7XHJcbiBjb25zdHJ1Y3RvcihpdGVtX2lkID0gJycsIHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9PN05hZUtEZnE3b1oxWEVJeTJzVi9saWtlcy8nKSB7XHJcbiAgdGhpcy5pdGVtX2lkID0gaXRlbV9pZDtcclxuICB0aGlzLnVybCA9IHVybDtcclxuICB0aGlzLmxpa2VkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpa2VkJykgIT0gbnVsbFxyXG4gICAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlrZWQnKSkgXHJcbiAgICAgICAgOiAnJztcclxuICB0aGlzLmRhdGEgPSB7XHJcbiAgIFwiaXRlbV9pZFwiOiB0aGlzLml0ZW1faWQsXHJcbiB9O1xyXG4gfVxyXG5cclxuIHNhdmVMaWtlZChUU2F2ZSA9IHRoaXMubGlrZWQpIHtcclxuICBjb25zdCBzdG9yZUxpa2VkID0gSlNPTi5zdHJpbmdpZnkoVFNhdmUpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaWtlZCcsIHN0b3JlTGlrZWQpO1xyXG59XHJcblxyXG4gYXN5bmMgZ2V0TGlrZXMoKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCk7XHJcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4ganNvbjtcclxuIH1cclxuXHJcbiBhc3luYyBwb3N0TGlrZXMoKSB7XHJcbiAgY29uc3Qgb3B0aW9uID0ge1xyXG4gICBtZXRob2Q6ICdQT1NUJyxcclxuICAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICB9LFxyXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSksXHJcbiAgfTtcclxuXHJcbiAgaWYgKHRoaXMubGlrZWQgPT09ICcnIHx8IHRoaXMubGlrZWQubGVuZ2h0ID09PSAwKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsLCBvcHRpb24pO1xyXG4gICAgcmVzcG9uc2UudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMubGlrZWQgPSBbdGhpcy5kYXRhXTtcclxuICAgICAgdGhpcy5zYXZlTGlrZWQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saWtlZCA9IFt0aGlzLmRhdGFdO1xyXG4gICAgdGhpcy5zYXZlTGlrZWQoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBsaWtlZFNvcnQgPSB0aGlzLmxpa2VkLm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkKTtcclxuICAgIGlmIChsaWtlZFNvcnQuaW5jbHVkZXModGhpcy5pdGVtX2lkKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIG9wdGlvbik7XHJcbiAgICAgIHJlc3BvbnNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGlrZWQucHVzaCh0aGlzLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2F2ZUxpa2VkKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpa2VkLnB1c2godGhpcy5kYXRhKTtcclxuICAgICAgdGhpcy5zYXZlTGlrZWQoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gfTtcclxufSIsImNvbnN0IGNvbW1lbnRTZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1zZWN0aW9uJyk7XG5jb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1pbnB1dCcpO1xuY29uc3QgY29tbWVudEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1hcmVhJyk7XG5jb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcbmNvbnN0IGRpdkRpc3BsYXlDb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtaGVhZCcpO1xuXG5jb25zdCAkQ09NTUVOVF9VUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMveVZPd3FOR3BjZ3F2TWRqd2tDN0MnO1xuXG4vLyBkaXNwbGF5IGNvbW1lbnRcbmNvbnN0IGRpc3BsYXljb21tZW50ID0gKGRhdGEpID0+IHtcbiAgY29tbWVudElucHV0LnZhbHVlID0gJyc7XG4gIGNvbW1lbnRBcmVhLnZhbHVlID0gJyc7XG4gIGlmIChkYXRhLmxlbmd0aCkge1xuICAgIGRpdkRpc3BsYXlDb21tZW50LmlubmVySFRNTCA9IGRhdGEubGVuZ3RoO1xuICB9XG4gIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pbm5lckhUTUwgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICAke2NvbW1lbnQuY29tbWVudH1gO1xuICAgIGNvbW1lbnRMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG59O1xuXG4vLyBmZXRjaCBjb21tZW50XG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChtZWFsSWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7JENPTU1FTlRfVVJMfS9jb21tZW50cz9pdGVtX2lkPSR7bWVhbElkfWApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZGlzcGxheWNvbW1lbnQoZGF0YSk7XG4gICAgfSk7XG59O1xuXG4vKiBjb21tZW50IGRpc3BsYXkgKi9cbmNvbnN0IHBvc3RJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtaW5mbycpO1xuY29tbWVudFNlYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuZXhwb3J0IGNvbnN0IGRpc3BsYXlDb21tZW50RGF0YSA9IChpZCwgZGF0YSkgPT4ge1xuICBjb25zdCBtZWFsSWQgPSBpZDtcbiAgZ2V0Q29tbWVudChtZWFsSWQpO1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBwb3N0SW5mby5pbm5lckhUTUwgPSBgIDxpbWcgc3JjPVwiJHtlbGVtZW50LnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCJcIiBjbGFzcz1cImNvbW1lbnQtaW1nXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwibWVhbC1uYW1lXCI+ICR7ZWxlbWVudC5zdHJNZWFsfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3MgPVwiZm9vZC1pbnN0cnVjdGlvblwiPjxoMT5SZWNpcGU6Jm5ic3A7PC9oMT4gJHtlbGVtZW50LnN0ckluc3RydWN0aW9uc308L3A+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZm9vZC1kZXRhaWxzXCI+XG4gICAgICAgICAgPHAgY2xhc3MgPSBcImJhclwiPlxuICAgICAgICAgICAgICA8bGk+PGg0PkNhdGVnb3J5OjwvaDQ+ICR7ZWxlbWVudC5zdHJDYXRlZ29yeX08L2xpPjwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImJhclwiPjxsaT48aDQ+QXJlYTo8L2g0PiAke2VsZW1lbnQuc3RyQXJlYX08L2xpPjwvcD5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgYDtcbiAgfSk7XG4gIGNvbW1lbnRTZWMuc3R5bGUuZGlzcGxheSA9ICdpbmhlcml0JztcbiAgY29tbWVudFNlYy5kYXRhc2V0LmlkID0gbWVhbElkO1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudCA9IGFzeW5jICh7IGl0ZW1JZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSwgdXJsKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke3VybH0vY29tbWVudHNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb21tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVGb3JtID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBvYmogPSB7XG4gICAgaXRlbUlkOiBjb21tZW50U2VjLmRhdGFzZXQuaWQsXG4gICAgdXNlcm5hbWU6IGNvbW1lbnRJbnB1dC52YWx1ZSxcbiAgICBjb21tZW50OiBjb21tZW50QXJlYS52YWx1ZSxcbiAgfTtcblxuICBjcmVhdGVDb21tZW50KG9iaiwgJENPTU1FTlRfVVJMKTtcblxuICBjb21tZW50SW5wdXQudmFsdWUgPSAnJztcbiAgY29tbWVudEFyZWEudmFsdWUgPSAnJztcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtaWNvbicpO1xuY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29tbWVudFNlYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVGb3JtOyIsImNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb24ubWVhbHM7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItdGVtcGxhdGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2Fzc2VzdC9sb2dvMS5wbmcnO1xuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGVzL2hvbWVQYWdlLmpzJztcbmltcG9ydCBMaWtlcyBmcm9tICcuL21vZHVsZXMvTGlrZXMuanMnO1xuaW1wb3J0IGhhbmRsZUZvcm0sIHsgZGlzcGxheUNvbW1lbnREYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQuanMnO1xuXG5jb25zdCBteWxvZ28gPSBuZXcgSW1hZ2UoKTtcbm15bG9nby5zcmMgPSBJY29uO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHNfY29udGFpbmVyJyk7XG5jb25zdCBtZWFsVXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JztcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG5sb2dvLmFwcGVuZENoaWxkKG15bG9nbyk7XG5jb25zdCBkaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtZWFscyA9IGF3YWl0IGdldERhdGEoJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP2Y9YScpO1xuICBsZXQgbGlrZWQgPSBbXTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpICE9IG51bGwpIHtcbiAgICBjb25zdCBsaWsgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpKTtcbiAgICBsaWtlZCA9IGxpay5tYXAoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCk7XG4gIH1cblxuICBtZWFscy5mb3JFYWNoKCh7XG4gICAgaWRNZWFsLCBzdHJNZWFsLCBzdHJDYXRlZ29yeSwgc3RyQXJlYSwgc3RySW5zdHJ1Y3Rpb25zLCBzdHJNZWFsVGh1bWIsXG4gIH0pID0+IHtcbiAgICBjb25zdCBhcnRpY2xlID0gYFxuICA8YXJ0aWNsZT5cbiAgIDxkaXYgY2xhc3M9XCJtZWFsX2ltZ1wiPjxpbWcgc3JjPVwiJHtzdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCI+PC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwidGl0bGVcIj48aDM+JHtzdHJNZWFsfTwvaDM+XG4gICA8ZGl2IGNsYXNzPVwibGlrZV9ib3hcIj48c3BhbiBjbGFzcz1cIm5icl9saWtlXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiIGNvbG9yOiAke2xpa2VkLmluY2x1ZGVzKCdpdGVtXycgKyBpZE1lYWwpID8gJyNlZDFjMjQnIDogJyd9XCIgbGlrZWQ9XCIke2xpa2VkLmluY2x1ZGVzKCdpdGVtXycgKyBpZE1lYWwpID8gJ3RydWUnIDogJ2ZhbHNlJ31cIiBjbGFzcz1cImZhcyBmYS10aHVtYnMtdXBcIiBpZD1cIml0ZW1fJHtpZE1lYWx9XCI+PC9zcGFuPjwvZGl2PlxuICAgPC9kaXY+XG4gICA8cCBjbGFzcz1cImluc3RcIj4ke3N0ckluc3RydWN0aW9ucy5zbGljZSgwLCAxMDApfS4uLi48L3A+XG4gICA8cCBjbGFzcz1cIkNBXCI+PHNwYW4+PHN0cm9uZz5DYXRlZ29yeTo8L3N0cm9uZz4gJHtzdHJDYXRlZ29yeX08L3NwYW4+PHNwYW4+PHN0cm9uZz5BcmVhOjwvc3Ryb25nPiAke3N0ckFyZWF9PC9zcGFuPjwvcD5cbiAgIDxidXR0b24gaWQ9JHtpZE1lYWx9IGNsYXNzPVwiYnRuX2NvbW1lbnQgYnRuXCIgZGF0YS1pZD1cIiR7aWRNZWFsfVwiID5Db21tZW50czwvYnV0dG9uPlxuICAgXG4gIDwvYXJ0aWNsZT5gO1xuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGFydGljbGUpO1xuICB9KTtcbn07XG5cbi8qIGdldCBjb21tZW50IGRhdGEgKi9cbmNvbnN0IGdldENvbW1lbnREYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke21lYWxVcmx9JHtpZH1gKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRpc3BsYXlDb21tZW50RGF0YShpZCwgZGF0YS5tZWFscykpO1xufTtcblxuLyogY29tbWVudCBwbGFjZSAqL1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgaGFuZGxlRm9ybShlKTtcbn0pO1xuXG5jb25zdCBmdG5MaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdGh1bWJzLXVwJyk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bicpO1xuICBidG4uZm9yRWFjaCgoaXQpID0+IHtcbiAgICBpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBnZXRDb21tZW50RGF0YShlLnRhcmdldC5pZCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGxpa2VJY29uLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IG5ickxpa2UgPSBlLnRhcmdldC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICBjb25zdCBsaWtlSWNvbiA9IGUudGFyZ2V0O1xuICAgICAgbGV0IGkgPSArbmJyTGlrZS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHNkTGluayA9IG5ldyBMaWtlcyhsaWtlSWNvbi5pZCk7XG4gICAgICBjb25zdCBjaGVjayA9IGF3YWl0IHNkTGluay5wb3N0TGlrZXMoKTtcbiAgICAgIGlmIChjaGVjaykge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIG5ickxpa2UuaW5uZXJIVE1MID0gaTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpa2VJY29uLmdldEF0dHJpYnV0ZSgnbGlrZWQnKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBsaWtlSWNvbi5zdHlsZS5jb2xvciA9ICcjZWQxYzI0JztcbiAgICAgICAgbGlrZUljb24uc2V0QXR0cmlidXRlKCdsaWtlZCcsICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKChsaWtlSWNvbi5nZXRBdHRyaWJ1dGUoJ2xpa2VkJykgPT09ICd0cnVlJykpIHtcbiAgICAgICAgbGlrZUljb24uc3R5bGUuY29sb3IgPSAnJztcbiAgICAgICAgbGlrZUljb24uc2V0QXR0cmlidXRlKCdsaWtlZCcsICdmYWxzZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5kaXNwbGF5KCkudGhlbihmdG5MaWtlcyk7XG5cbmNvbnN0IGRwbExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzZExpbmsgPSBuZXcgTGlrZXMoKTtcbiAgc2RMaW5rLmdldExpa2VzKCkudGhlbigodmFsdWUpID0+IHtcbiAgICB2YWx1ZS5mb3JFYWNoKCh7IGxpa2VzLCBpdGVtX2lkIH0pID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1faWQpLnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudCA9IGxpa2VzO1xuICAgIH0pO1xuICB9KTtcbn07XG5kcGxMaWtlcygpO1xuXG5jb25zdCBnZXRiID0gYXN5bmMgKCkgPT4ge1xuXG59O1xuZ2V0YigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==