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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\r\n\r\n:root {\r\n  --bg-color: #e8e9ea;\r\n  --bar-color: #fafafa;\r\n  --hd-color: #ffcb05;\r\n  --color: #ed1c24;\r\n  --nd-color: #545862;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Fira Sans', sans-serif;\r\n  color: var(--nd-color);\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n}\r\n\r\n<<<<<<< HEAD\r\n=======\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  font-size: 34px;\r\n  align-items: center;\r\n  background-color: var(--hd-color);\r\n  height: 45px;\r\n  z-index: 100;\r\n}\r\n\r\nheader > span {\r\n  color: var(--bar-color);\r\n}\r\n\r\nheader > .fa-bars {\r\n  display: none;\r\n}\r\n\r\n>>>>>>> df9575d46fea23a75cbd7c5e67f5c8576f5f8381\r\nnav {\r\n  display: flex;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 10;\r\n  justify-content: space-between;\r\n  height: 70px;\r\n  background-color: #fafafa54;\r\n}\r\n\r\n.logo {\r\n  margin-left: 10%;\r\n}\r\n\r\n.logo img {\r\n  height: 70px;\r\n}\r\n\r\n.menu {\r\n  width: 30%;\r\n}\r\n\r\n.menu > ul {\r\n  display: flex;\r\n  height: 70px;\r\n}\r\n\r\n.menu li {\r\n  width: 100px;\r\n  height: 70px;\r\n  padding: 5px 0;\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n  transition: 0.2s background-color;\r\n}\r\n\r\n.menu li:hover {\r\n  background-color: #ed1c2331;\r\n  border-top: 5px solid var(--color);\r\n  padding-top: 0;\r\n  color: var(--bar-color);\r\n}\r\n\r\n.menu > ul a {\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  line-height: 14px;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n.menu li:hover a {\r\n  color: var(--bar-color);\r\n}\r\n\r\n/* style the main */\r\n\r\n.main_head {\r\n  width: 100%;\r\n  height: 60vh;\r\n  position: relative;\r\n  display: block;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  z-index: 0;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.main_head > h1 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 200px;\r\n  height: 200px;\r\n  background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);\r\n  border-radius: 50%;\r\n  top: 30%;\r\n  position: absolute;\r\n  left: 45%;\r\n  text-align: center;\r\n  font-size: 50px;\r\n  color: var(--color);\r\n  line-height: 58px;\r\n  font-weight: 900;\r\n  animation: flash 3s ease-in;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes flash {\r\n  0% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  20% { background-image: linear-gradient(80deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  40% { background-image: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  50% { background-image: linear-gradient(130deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  60% { background-image: linear-gradient(190deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  70% { background-image: linear-gradient(230deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  80% { background-image: linear-gradient(300deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  90% { background-image: linear-gradient(360deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  100% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n}\r\n\r\n.main_head h1 > span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 157px;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: var(--color);\r\n}\r\n\r\n.main_head > p {\r\n  width: 450px;\r\n  position: absolute;\r\n  bottom: 2%;\r\n  background-color: white;\r\n  font-size: 24px;\r\n  left: 3%;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.meals_container {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meals_container article {\r\n  display: inline-block;\r\n  width: 400px;\r\n  margin: 20px;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--nd-color);\r\n  transition: 0.3s transform;\r\n}\r\n\r\n.meals_container article:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.meal_img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.meal_img > img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.title {\r\n  margin: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.like_box > span {\r\n  display: inline-block;\r\n  width: 20px;\r\n}\r\n\r\n.like_box .fas {\r\n  font-size: 28px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.inst {\r\n  margin: 15px;\r\n  height: 39px;\r\n}\r\n\r\n.btn_comment,\r\n.comment-place-btn {\r\n  margin: 5px auto;\r\n  display: block;\r\n  width: 100px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  height: 30px;\r\n  box-shadow: 3px 3px 0 #dd1a32;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.btn_comment:hover {\r\n  border: 2px solid #dd1a32;\r\n  box-shadow: none;\r\n}\r\n\r\n.CA {\r\n  width: 0;\r\n  margin: 25px auto auto 15px;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.CA > span {\r\n  display: inline-block;\r\n  width: 100px;\r\n  margin: 0 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n/* comment section */\r\n\r\n.comment-section {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid grey;\r\n  background-color: rgb(251, 251, 247);\r\n  color: black;\r\n  z-index: 100;\r\n  backdrop-filter: blur(4px);\r\n  top: -0.5rem;\r\n  cursor: pointer;\r\n  padding: 2rem;\r\n  overflow: scroll;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  right: 32px;\r\n  top: 32px;\r\n  width: 32px;\r\n  height: 32px;\r\n  opacity: 0.3;\r\n}\r\n\r\n.close-.close-icon {\r\n  opacity: 1;\r\n}\r\n\r\n.close-icon::before,\r\n.close-icon::after {\r\n  position: absolute;\r\n  left: 15px;\r\n  content: ' ';\r\n  height: 33px;\r\n  width: 2px;\r\n  background-color: rgb(9, 9, 9);\r\n}\r\n\r\n.close-icon::before {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-icon::after {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.meal-name {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 32px;\r\n  background-color: var(--color);\r\n}\r\n\r\n.food-details {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n  border: 2px solid rgb(180, 173, 173);\r\n}\r\n\r\n.food-details > li {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n}\r\n\r\n.bar {\r\n  width: 0;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.display-comments {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: black;\r\n  font-size: 24px;\r\n}\r\n\r\n.comment {\r\n  background-color: #cbcccf;\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n}\r\n\r\n.comment-input,\r\n.comment-area {\r\n  padding: 0.5rem;\r\n  margin: 5px auto;\r\n  display: block;\r\n  font-size: 18px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 28px;\r\n}\r\n\r\n.food-instruction {\r\n  color: gray;\r\n}\r\n\r\n.comment-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin-top: 0.5rem;\r\n  color: #e8e9ea;\r\n  transition: 0.2s box-shadow;\r\n  list-style: none;\r\n  border: 2px solid gray;\r\n  margin-left: 25rem;\r\n  width: 50%;\r\n  padding: 2rem;\r\n}\r\n\r\n.meal-display {\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--hd-color);\r\n  transition: 0.3s transform;\r\n  background-color: #f8f9fc;\r\n}\r\n\r\n.comment-img {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border: 10px solid goldenrod;\r\n  width: 30%;\r\n}\r\n\r\n/* style footer */\r\n\r\nfooter {\r\n  align-items: center;\r\n  align-content: center;\r\n  padding: 1.5rem;\r\n  border: 2px solid grey;\r\n  background-color: #dd1a32;\r\n  color: var(--bar-color);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable no-descending-specificity */\r\n@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n:root {\r\n  --bg-color: #e8e9ea;\r\n  --bar-color: #fafafa;\r\n  --hd-color: #ffcb05;\r\n  --color: #ed1c24;\r\n  --nd-color: #545862;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Fira Sans', sans-serif;\r\n  color: var(--nd-color);\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n}\r\n\r\n<<<<<<< HEAD\r\n=======\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  font-size: 34px;\r\n  align-items: center;\r\n  background-color: var(--hd-color);\r\n  height: 45px;\r\n  z-index: 100;\r\n}\r\n\r\nheader > span {\r\n  color: var(--bar-color);\r\n}\r\n\r\nheader > .fa-bars {\r\n  display: none;\r\n}\r\n\r\n>>>>>>> df9575d46fea23a75cbd7c5e67f5c8576f5f8381\r\nnav {\r\n  display: flex;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 10;\r\n  justify-content: space-between;\r\n  height: 70px;\r\n  background-color: #fafafa54;\r\n}\r\n\r\n.logo {\r\n  margin-left: 10%;\r\n}\r\n\r\n.logo img {\r\n  height: 70px;\r\n}\r\n\r\n.menu {\r\n  width: 30%;\r\n}\r\n\r\n.menu > ul {\r\n  display: flex;\r\n  height: 70px;\r\n}\r\n\r\n.menu li {\r\n  width: 100px;\r\n  height: 70px;\r\n  padding: 5px 0;\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n  transition: 0.2s background-color;\r\n}\r\n\r\n.menu li:hover {\r\n  background-color: #ed1c2331;\r\n  border-top: 5px solid var(--color);\r\n  padding-top: 0;\r\n  color: var(--bar-color);\r\n}\r\n\r\n.menu > ul a {\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  line-height: 14px;\r\n  font-size: 20px;\r\n  color: white;\r\n}\r\n\r\n.menu li:hover a {\r\n  color: var(--bar-color);\r\n}\r\n\r\n/* style the main */\r\n\r\n.main_head {\r\n  width: 100%;\r\n  height: 60vh;\r\n  position: relative;\r\n  display: block;\r\n  background-image: url('assest/8984.webp');\r\n  background-size: cover;\r\n  z-index: 0;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.main_head > h1 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 200px;\r\n  height: 200px;\r\n  background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%);\r\n  border-radius: 50%;\r\n  top: 30%;\r\n  position: absolute;\r\n  left: 45%;\r\n  text-align: center;\r\n  font-size: 50px;\r\n  color: var(--color);\r\n  line-height: 58px;\r\n  font-weight: 900;\r\n  animation: flash 3s ease-in;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes flash {\r\n  0% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  20% { background-image: linear-gradient(80deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  40% { background-image: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  50% { background-image: linear-gradient(130deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  60% { background-image: linear-gradient(190deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  70% { background-image: linear-gradient(230deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  80% { background-image: linear-gradient(300deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  90% { background-image: linear-gradient(360deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n  100% { background-image: linear-gradient(50deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 60%); }\r\n}\r\n\r\n.main_head h1 > span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 157px;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: var(--color);\r\n}\r\n\r\n.main_head > p {\r\n  width: 450px;\r\n  position: absolute;\r\n  bottom: 2%;\r\n  background-color: white;\r\n  font-size: 24px;\r\n  left: 3%;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.meals_container {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meals_container article {\r\n  display: inline-block;\r\n  width: 400px;\r\n  margin: 20px;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--nd-color);\r\n  transition: 0.3s transform;\r\n}\r\n\r\n.meals_container article:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.meal_img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.meal_img > img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.title {\r\n  margin: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.like_box > span {\r\n  display: inline-block;\r\n  width: 20px;\r\n}\r\n\r\n.like_box .fas {\r\n  font-size: 28px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.inst {\r\n  margin: 15px;\r\n  height: 39px;\r\n}\r\n\r\n.btn_comment,\r\n.comment-place-btn {\r\n  margin: 5px auto;\r\n  display: block;\r\n  width: 100px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  height: 30px;\r\n  box-shadow: 3px 3px 0 #dd1a32;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.btn_comment:hover {\r\n  border: 2px solid #dd1a32;\r\n  box-shadow: none;\r\n}\r\n\r\n.CA {\r\n  width: 0;\r\n  margin: 25px auto auto 15px;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.CA > span {\r\n  display: inline-block;\r\n  width: 100px;\r\n  margin: 0 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n/* comment section */\r\n\r\n.comment-section {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid grey;\r\n  background-color: rgb(251, 251, 247);\r\n  color: black;\r\n  z-index: 100;\r\n  backdrop-filter: blur(4px);\r\n  top: -0.5rem;\r\n  cursor: pointer;\r\n  padding: 2rem;\r\n  overflow: scroll;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  right: 32px;\r\n  top: 32px;\r\n  width: 32px;\r\n  height: 32px;\r\n  opacity: 0.3;\r\n}\r\n\r\n.close-.close-icon {\r\n  opacity: 1;\r\n}\r\n\r\n.close-icon::before,\r\n.close-icon::after {\r\n  position: absolute;\r\n  left: 15px;\r\n  content: ' ';\r\n  height: 33px;\r\n  width: 2px;\r\n  background-color: rgb(9, 9, 9);\r\n}\r\n\r\n.close-icon::before {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-icon::after {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.meal-name {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 32px;\r\n  background-color: var(--color);\r\n}\r\n\r\n.food-details {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n  border: 2px solid rgb(180, 173, 173);\r\n}\r\n\r\n.food-details > li {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  font-size: 22px;\r\n  padding: 1rem;\r\n}\r\n\r\n.bar {\r\n  width: 0;\r\n  border: 2px  solid var(--hd-color);\r\n}\r\n\r\n.display-comments {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: black;\r\n  font-size: 24px;\r\n}\r\n\r\n.comment {\r\n  background-color: #cbcccf;\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n}\r\n\r\n.comment-input,\r\n.comment-area {\r\n  padding: 0.5rem;\r\n  margin: 5px auto;\r\n  display: block;\r\n  font-size: 18px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  transition: 0.2s box-shadow;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 28px;\r\n}\r\n\r\n.food-instruction {\r\n  color: gray;\r\n}\r\n\r\n.comment-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin-top: 0.5rem;\r\n  color: #e8e9ea;\r\n  transition: 0.2s box-shadow;\r\n  list-style: none;\r\n  border: 2px solid gray;\r\n  margin-left: 25rem;\r\n  width: 50%;\r\n  padding: 2rem;\r\n}\r\n\r\n.meal-display {\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-left: 8rem;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 0 10px var(--hd-color);\r\n  transition: 0.3s transform;\r\n  background-color: #f8f9fc;\r\n}\r\n\r\n.comment-img {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border: 10px solid goldenrod;\r\n  width: 30%;\r\n}\r\n\r\n/* style footer */\r\n\r\nfooter {\r\n  align-items: center;\r\n  align-content: center;\r\n  padding: 1.5rem;\r\n  border: 2px solid grey;\r\n  background-color: #dd1a32;\r\n  color: var(--bar-color);\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 650px) {\r\n header {\r\n  font-size: 24px;\r\n  justify-content: space-between;\r\n  padding: 0 20%;\r\n  position: fixed;\r\n }\r\n\r\n header > .fa-bars {\r\n  display: block;\r\n }\r\n\r\n nav {\r\n   background-color: #ed1c236b;\r\n   display: none;\r\n   height: 100%;\r\n   position: fixed;\r\n   backdrop-filter: blur(7px);\r\n }\r\n\r\n nav .logo {\r\n   display: none;\r\n }\r\n\r\n .menu {\r\n   width: 100%;\r\n   margin-top: 25%;\r\n }\r\n \r\n .menu > ul {\r\n   height: auto;\r\n   flex-direction: column;\r\n   justify-content: center;\r\n   align-items: center;\r\n }\r\n\r\n .menu li {\r\n   width: 100%;\r\n }\r\n\r\n /* style the main */\r\n\r\n .main_head {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n }\r\n\r\n .main_head > h1 {\r\n   display: none;\r\n }\r\n\r\n .main_head > p {\r\n   left: auto;\r\n   bottom: auto;\r\n   width: 90%;\r\n   background-color: rgba(255, 255, 255, 0.61);\r\n }\r\n\r\n .meals_container {\r\n   width: 100%;\r\n   margin: 0;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n }\r\n\r\n .meals_container > article {\r\n   width: 80%;\r\n }\r\n\r\n .inst {\r\n   height: auto;\r\n }\r\n}", "",{"version":3,"sources":["webpack://./src/style_mobile.css"],"names":[],"mappings":"AAAA;CACC;EACC,eAAe;EACf,8BAA8B;EAC9B,cAAc;EACd,eAAe;CAChB;;CAEA;EACC,cAAc;CACf;;CAEA;GACE,2BAA2B;GAC3B,aAAa;GACb,YAAY;GACZ,eAAe;GACf,0BAA0B;CAC5B;;CAEA;GACE,aAAa;CACf;;CAEA;GACE,WAAW;GACX,eAAe;CACjB;;CAEA;GACE,YAAY;GACZ,sBAAsB;GACtB,uBAAuB;GACvB,mBAAmB;CACrB;;CAEA;GACE,WAAW;CACb;;CAEA,mBAAmB;;CAEnB;GACE,aAAa;GACb,mBAAmB;GACnB,uBAAuB;CACzB;;CAEA;GACE,aAAa;CACf;;CAEA;GACE,UAAU;GACV,YAAY;GACZ,UAAU;GACV,2CAA2C;CAC7C;;CAEA;GACE,WAAW;GACX,SAAS;GACT,aAAa;GACb,sBAAsB;GACtB,mBAAmB;CACrB;;CAEA;GACE,UAAU;CACZ;;CAEA;GACE,YAAY;CACd;AACD","sourcesContent":["@media only screen and (max-width: 650px) {\r\n header {\r\n  font-size: 24px;\r\n  justify-content: space-between;\r\n  padding: 0 20%;\r\n  position: fixed;\r\n }\r\n\r\n header > .fa-bars {\r\n  display: block;\r\n }\r\n\r\n nav {\r\n   background-color: #ed1c236b;\r\n   display: none;\r\n   height: 100%;\r\n   position: fixed;\r\n   backdrop-filter: blur(7px);\r\n }\r\n\r\n nav .logo {\r\n   display: none;\r\n }\r\n\r\n .menu {\r\n   width: 100%;\r\n   margin-top: 25%;\r\n }\r\n \r\n .menu > ul {\r\n   height: auto;\r\n   flex-direction: column;\r\n   justify-content: center;\r\n   align-items: center;\r\n }\r\n\r\n .menu li {\r\n   width: 100%;\r\n }\r\n\r\n /* style the main */\r\n\r\n .main_head {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n }\r\n\r\n .main_head > h1 {\r\n   display: none;\r\n }\r\n\r\n .main_head > p {\r\n   left: auto;\r\n   bottom: auto;\r\n   width: 90%;\r\n   background-color: rgba(255, 255, 255, 0.61);\r\n }\r\n\r\n .meals_container {\r\n   width: 100%;\r\n   margin: 0;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n }\r\n\r\n .meals_container > article {\r\n   width: 80%;\r\n }\r\n\r\n .inst {\r\n   height: auto;\r\n }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _style_mobile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style_mobile.css */ "./src/style_mobile.css");
/* harmony import */ var _assest_logo1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assest/logo1.png */ "./src/assest/logo1.png");
/* harmony import */ var _modules_homePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/homePage.js */ "./src/modules/homePage.js");
/* harmony import */ var _modules_Likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Likes.js */ "./src/modules/Likes.js");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* eslint-disable prefer-template */
/* eslint-disable camelcase */







const mylogo = new Image();
mylogo.src = _assest_logo1_png__WEBPACK_IMPORTED_MODULE_2__;

const container = document.querySelector('.meals_container');
const mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const logo = document.querySelector('.logo');
logo.appendChild(mylogo);
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
    .then((data) => (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_5__.displayCommentData)(id, data.meals));
};

/* comment place */
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_5__["default"])(e);
});

const ftnLikes = async () => {
  const like_icon = document.querySelectorAll('.fa-thumbs-up');
  like_icon.forEach((element) => {
    element.addEventListener('click', async (e) => {
      const nbrLike = e.target.previousSibling;
      const likeIcon = e.target;
      let i = +nbrLike.textContent;
      const sdLink = new _modules_Likes_js__WEBPACK_IMPORTED_MODULE_4__["default"](likeIcon.id);
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

const dplLikes = async () => {
  const sdLink = new _modules_Likes_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  sdLink.getLikes().then((value) => {
    value.forEach(({ likes, item_id }) => {
      document.getElementById(item_id).previousSibling.textContent = likes;
    });
  });
};

display()
  .then(dplLikes)
  .then(ftnLikes);

const bars = document.getElementById('bars');
const nav = document.querySelector('nav');
bars.addEventListener('click', () => {
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0dBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQzdPLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSwwR0FBMEcsMEJBQTBCLDJCQUEyQiwwQkFBMEIsdUJBQXVCLDBCQUEwQixLQUFLLFdBQVcsaUJBQWlCLGdCQUFnQiw2QkFBNkIsMkNBQTJDLDZCQUE2QixLQUFLLGNBQWMsOEJBQThCLEtBQUssMkNBQTJDLG9CQUFvQixrQkFBa0IsOEJBQThCLHVCQUF1QixzQkFBc0IsMEJBQTBCLHdDQUF3QyxtQkFBbUIsbUJBQW1CLEtBQUssdUJBQXVCLDhCQUE4QixLQUFLLDJCQUEyQixvQkFBb0IsS0FBSyxpRUFBaUUsb0JBQW9CLHlCQUF5QixrQkFBa0Isa0JBQWtCLHFDQUFxQyxtQkFBbUIsa0NBQWtDLEtBQUssZUFBZSx1QkFBdUIsS0FBSyxtQkFBbUIsbUJBQW1CLEtBQUssZUFBZSxpQkFBaUIsS0FBSyxvQkFBb0Isb0JBQW9CLG1CQUFtQixLQUFLLGtCQUFrQixtQkFBbUIsbUJBQW1CLHFCQUFxQix1QkFBdUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIscUJBQXFCLHdDQUF3QyxLQUFLLHdCQUF3QixrQ0FBa0MseUNBQXlDLHFCQUFxQiw4QkFBOEIsS0FBSyxzQkFBc0IsNEJBQTRCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLG1CQUFtQixLQUFLLDBCQUEwQiw4QkFBOEIsS0FBSyxnREFBZ0Qsa0JBQWtCLG1CQUFtQix5QkFBeUIscUJBQXFCLHdFQUF3RSw2QkFBNkIsaUJBQWlCLG1DQUFtQyxLQUFLLHlCQUF5QixvQkFBb0IsMEJBQTBCLDhCQUE4QixtQkFBbUIsb0JBQW9CLHlJQUF5SSx5QkFBeUIsZUFBZSx5QkFBeUIsZ0JBQWdCLHlCQUF5QixzQkFBc0IsMEJBQTBCLHdCQUF3Qix1QkFBdUIsa0NBQWtDLDBDQUEwQyxLQUFLLDBCQUEwQixXQUFXLHFJQUFxSSxZQUFZLHFJQUFxSSxZQUFZLHNJQUFzSSxZQUFZLHNJQUFzSSxZQUFZLHNJQUFzSSxZQUFZLHNJQUFzSSxZQUFZLHNJQUFzSSxZQUFZLHNJQUFzSSxhQUFhLHFJQUFxSSxLQUFLLDhCQUE4QixxQkFBcUIseUJBQXlCLGdCQUFnQixrQkFBa0Isa0JBQWtCLG1CQUFtQix5QkFBeUIscUNBQXFDLEtBQUssd0JBQXdCLG1CQUFtQix5QkFBeUIsaUJBQWlCLDhCQUE4QixzQkFBc0IsZUFBZSxvQkFBb0IseUJBQXlCLEtBQUssMEJBQTBCLGlCQUFpQixxQkFBcUIsS0FBSyxrQ0FBa0MsNEJBQTRCLG1CQUFtQixtQkFBbUIsMkJBQTJCLDJDQUEyQyxpQ0FBaUMsS0FBSyx3Q0FBd0MsNkJBQTZCLEtBQUssbUJBQW1CLGtCQUFrQixvQkFBb0IsS0FBSyx5QkFBeUIsa0JBQWtCLG1CQUFtQixLQUFLLGdCQUFnQixtQkFBbUIsb0JBQW9CLHFDQUFxQyxLQUFLLDBCQUEwQiw0QkFBNEIsa0JBQWtCLEtBQUssd0JBQXdCLHNCQUFzQix5QkFBeUIsS0FBSyxlQUFlLG1CQUFtQixtQkFBbUIsS0FBSyw2Q0FBNkMsdUJBQXVCLHFCQUFxQixtQkFBbUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsbUJBQW1CLG9DQUFvQyxrQ0FBa0MsS0FBSyw0QkFBNEIsZ0NBQWdDLHVCQUF1QixLQUFLLGFBQWEsZUFBZSxrQ0FBa0MseUNBQXlDLEtBQUssb0JBQW9CLDRCQUE0QixtQkFBbUIscUJBQXFCLHNCQUFzQixLQUFLLHVEQUF1RCxzQkFBc0Isa0JBQWtCLG1CQUFtQiw2QkFBNkIsMkNBQTJDLG1CQUFtQixtQkFBbUIsaUNBQWlDLG1CQUFtQixzQkFBc0Isb0JBQW9CLHVCQUF1QixLQUFLLHFCQUFxQix5QkFBeUIsa0JBQWtCLGdCQUFnQixrQkFBa0IsbUJBQW1CLG1CQUFtQixLQUFLLDRCQUE0QixpQkFBaUIsS0FBSyxvREFBb0QseUJBQXlCLGlCQUFpQixtQkFBbUIsbUJBQW1CLGlCQUFpQixxQ0FBcUMsS0FBSyw2QkFBNkIsK0JBQStCLEtBQUssNEJBQTRCLGdDQUFnQyxLQUFLLG9CQUFvQixvQkFBb0IsOEJBQThCLG9CQUFvQixzQkFBc0IscUNBQXFDLEtBQUssdUJBQXVCLG9CQUFvQiwwQkFBMEIsdUJBQXVCLHNCQUFzQixvQkFBb0IsMkNBQTJDLEtBQUssNEJBQTRCLG9CQUFvQiwwQkFBMEIsdUJBQXVCLHNCQUFzQixvQkFBb0IsS0FBSyxjQUFjLGVBQWUseUNBQXlDLEtBQUssMkJBQTJCLG9CQUFvQiw4QkFBOEIsbUJBQW1CLHNCQUFzQixLQUFLLGtCQUFrQixnQ0FBZ0MsNEJBQTRCLGlCQUFpQix3QkFBd0IsS0FBSywwQ0FBMEMsc0JBQXNCLHVCQUF1QixxQkFBcUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsa0NBQWtDLEtBQUssc0JBQXNCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLHNCQUFzQixLQUFLLDJCQUEyQixrQkFBa0IsS0FBSyx1QkFBdUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIseUJBQXlCLHFCQUFxQixrQ0FBa0MsdUJBQXVCLDZCQUE2Qix5QkFBeUIsaUJBQWlCLG9CQUFvQixLQUFLLHVCQUF1Qiw0QkFBNEIsaUJBQWlCLHdCQUF3QiwyQkFBMkIsMkNBQTJDLGlDQUFpQyxnQ0FBZ0MsS0FBSyxzQkFBc0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsbUNBQW1DLGlCQUFpQixLQUFLLDBDQUEwQywwQkFBMEIsNEJBQTRCLHNCQUFzQiw2QkFBNkIsZ0NBQWdDLDhCQUE4QixLQUFLLFdBQVcsd0ZBQXdGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFh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LG9EQUFvRCxZQUFZLHNDQUFzQyxRQUFRO0FBQzlHLGdCQUFnQixRQUFRLG1DQUFtQyxPQUFPO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVEsRUFBRSxHQUFHO0FBQzlCO0FBQ0Esb0JBQW9CLHVFQUFrQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFVO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5REFBSztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFCQUFxQix5REFBSztBQUMxQjtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL3N0eWxlX21vYmlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL3N0eWxlX21vYmlsZS5jc3M/NDEwZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL21vZHVsZXMvTGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3QvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL21vZHVsZXMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZV9wb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lX3BvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmVfcG9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3Nlc3QvODk4NC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kZXNjZW5kaW5nLXNwZWNpZmljaXR5ICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iZy1jb2xvcjogI2U4ZTllYTtcXHJcXG4gIC0tYmFyLWNvbG9yOiAjZmFmYWZhO1xcclxcbiAgLS1oZC1jb2xvcjogI2ZmY2IwNTtcXHJcXG4gIC0tY29sb3I6ICNlZDFjMjQ7XFxyXFxuICAtLW5kLWNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHZhcigtLW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuPDw8PDw8PCBIRUFEXFxyXFxuPT09PT09PVxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LXNpemU6IDM0cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGQtY29sb3IpO1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgPiBzcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgPiAuZmEtYmFycyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4+Pj4+Pj4+IGRmOTU3NWQ0NmZlYTIzYTc1Y2JkN2M1ZTY3ZjVjODU3NmY1ZjgzODFcXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhNTQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgbGkge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBiYWNrZ3JvdW5kLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSBsaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzIzMzE7XFxyXFxuICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgbGk6aG92ZXIgYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGUgdGhlIG1haW4gKi9cXHJcXG5cXHJcXG4ubWFpbl9oZWFkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9oZWFkID4gaDEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiA0NSU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbiAgbGluZS1oZWlnaHQ6IDU4cHg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYW5pbWF0aW9uOiBmbGFzaCAzcyBlYXNlLWluO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmxhc2gge1xcclxcbiAgMCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICAyMCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA0MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgNTAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDYwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA3MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjMwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgODAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDkwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICAxMDAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9oZWFkIGgxID4gc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTVweDtcXHJcXG4gIGxlZnQ6IDE1N3B4O1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tYWluX2hlYWQgPiBwIHtcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMiU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGxlZnQ6IDMlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzX2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZWFsc19jb250YWluZXIgYXJ0aWNsZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLW5kLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHNfY29udGFpbmVyIGFydGljbGU6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxfaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxfaW1nID4gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VfYm94ID4gc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VfYm94IC5mYXMge1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zdCB7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDM5cHg7XFxyXFxufVxcclxcblxcclxcbi5idG5fY29tbWVudCxcXHJcXG4uY29tbWVudC1wbGFjZS1idG4ge1xcclxcbiAgbWFyZ2luOiA1cHggYXV0bztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAwICNkZDFhMzI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGJveC1zaGFkb3c7XFxyXFxufVxcclxcblxcclxcbi5idG5fY29tbWVudDpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGQxYTMyO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLkNBIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgbWFyZ2luOiAyNXB4IGF1dG8gYXV0byAxNXB4O1xcclxcbiAgYm9yZGVyOiAycHggIHNvbGlkIHZhcigtLWhkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLkNBID4gc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29tbWVudCBzZWN0aW9uICovXFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNTEsIDI0Nyk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gIHRvcDogLTAuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMzJweDtcXHJcXG4gIHRvcDogMzJweDtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgb3BhY2l0eTogMC4zO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtLmNsb3NlLWljb24ge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246OmJlZm9yZSxcXHJcXG4uY2xvc2UtaWNvbjo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMTVweDtcXHJcXG4gIGNvbnRlbnQ6ICcgJztcXHJcXG4gIGhlaWdodDogMzNweDtcXHJcXG4gIHdpZHRoOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgOSwgOSk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjo6YWZ0ZXIge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtbmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTgwLCAxNzMsIDE3Myk7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWRldGFpbHMgPiBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgYm9yZGVyOiAycHggIHNvbGlkIHZhcigtLWhkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjY2NmO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbnB1dCxcXHJcXG4uY29tbWVudC1hcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgYm94LXNoYWRvdztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWluc3RydWN0aW9uIHtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICBjb2xvcjogI2U4ZTllYTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgYm94LXNoYWRvdztcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI1cmVtO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1oZC1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIHRyYW5zZm9ybTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWltZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGdvbGRlbnJvZDtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcblxcclxcbi8qIHN0eWxlIGZvb3RlciAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDFhMzI7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnREFBZ0Q7O0FBR2hEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVB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Zjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixVQUFVO0FBQ1o7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWRlc2NlbmRpbmctc3BlY2lmaWNpdHkgKi9cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYmctY29sb3I6ICNlOGU5ZWE7XFxyXFxuICAtLWJhci1jb2xvcjogI2ZhZmFmYTtcXHJcXG4gIC0taGQtY29sb3I6ICNmZmNiMDU7XFxyXFxuICAtLWNvbG9yOiAjZWQxYzI0O1xcclxcbiAgLS1uZC1jb2xvcjogIzU0NTg2MjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbjw8PDw8PDwgSEVBRFxcclxcbj09PT09PT1cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhkLWNvbG9yKTtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gLmZhLWJhcnMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuPj4+Pj4+PiBkZjk1NzVkNDZmZWEyM2E3NWNiZDdjNWU2N2Y1Yzg1NzZmNWY4MzgxXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTU0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWcge1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51IGxpIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZC1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgbGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyMzMxO1xcclxcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmctdG9wOiAwO1xcclxcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gdWwgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tZW51IGxpOmhvdmVyIGEge1xcclxcbiAgY29sb3I6IHZhcigtLWJhci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qIHN0eWxlIHRoZSBtYWluICovXFxyXFxuXFxyXFxuLm1haW5faGVhZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3Nlc3QvODk4NC53ZWJwJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5tYWluX2hlYWQgPiBoMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB0b3A6IDMwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDQ1JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxuICBsaW5lLWhlaWdodDogNThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBhbmltYXRpb246IGZsYXNoIDNzIGVhc2UtaW47XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmbGFzaCB7XFxyXFxuICAwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDIwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDQwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA1MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgNjAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDcwJSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMzBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxuICA4MCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgNjAlKTsgfVxcclxcbiAgOTAlIHsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDYwJSk7IH1cXHJcXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSA2MCUpOyB9XFxyXFxufVxcclxcblxcclxcbi5tYWluX2hlYWQgaDEgPiBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxNXB4O1xcclxcbiAgbGVmdDogMTU3cHg7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5faGVhZCA+IHAge1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAyJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbGVmdDogMyU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHNfY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzX2NvbnRhaW5lciBhcnRpY2xlIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tbmQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyB0cmFuc2Zvcm07XFxyXFxufVxcclxcblxcclxcbi5tZWFsc19jb250YWluZXIgYXJ0aWNsZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbF9pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbF9pbWcgPiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZV9ib3ggPiBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZV9ib3ggLmZhcyB7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnN0IHtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIGhlaWdodDogMzlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9jb21tZW50LFxcclxcbi5jb21tZW50LXBsYWNlLWJ0biB7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDAgI2RkMWEzMjtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgYm94LXNoYWRvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bl9jb21tZW50OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZDFhMzI7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uQ0Ege1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBtYXJnaW46IDI1cHggYXV0byBhdXRvIDE1cHg7XFxyXFxuICBib3JkZXI6IDJweCAgc29saWQgdmFyKC0taGQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uQ0EgPiBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb21tZW50IHNlY3Rpb24gKi9cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI1MSwgMjQ3KTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgdG9wOiAtMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAzMnB4O1xcclxcbiAgdG9wOiAzMnB4O1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS0uY2xvc2UtaWNvbiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjo6YmVmb3JlLFxcclxcbi5jbG9zZS1pY29uOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbiAgY29udGVudDogJyAnO1xcclxcbiAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgd2lkdGg6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA5LCA5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOjphZnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxODAsIDE3MywgMTczKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtZGV0YWlscyA+IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5iYXIge1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBib3JkZXI6IDJweCAgc29saWQgdmFyKC0taGQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNjY2Y7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWlucHV0LFxcclxcbi5jb21tZW50LWFyZWEge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbWFyZ2luOiA1cHggYXV0bztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBib3gtc2hhZG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtaW5zdHJ1Y3Rpb24ge1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiAjZThlOWVhO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBib3gtc2hhZG93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxuICBtYXJnaW4tbGVmdDogMjVyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWhkLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW1nIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXI6IDEwcHggc29saWQgZ29sZGVucm9kO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGUgZm9vdGVyICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkMWEzMjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYXItY29sb3IpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuIGhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwIDIwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gfVxcclxcblxcclxcbiBoZWFkZXIgPiAuZmEtYmFycyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gfVxcclxcblxcclxcbiBuYXYge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlZDFjMjM2YjtcXHJcXG4gICBkaXNwbGF5OiBub25lO1xcclxcbiAgIGhlaWdodDogMTAwJTtcXHJcXG4gICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XFxyXFxuIH1cXHJcXG5cXHJcXG4gbmF2IC5sb2dvIHtcXHJcXG4gICBkaXNwbGF5OiBub25lO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5tZW51IHtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICBtYXJnaW4tdG9wOiAyNSU7XFxyXFxuIH1cXHJcXG4gXFxyXFxuIC5tZW51ID4gdWwge1xcclxcbiAgIGhlaWdodDogYXV0bztcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLm1lbnUgbGkge1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbiB9XFxyXFxuXFxyXFxuIC8qIHN0eWxlIHRoZSBtYWluICovXFxyXFxuXFxyXFxuIC5tYWluX2hlYWQge1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gfVxcclxcblxcclxcbiAubWFpbl9oZWFkID4gaDEge1xcclxcbiAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLm1haW5faGVhZCA+IHAge1xcclxcbiAgIGxlZnQ6IGF1dG87XFxyXFxuICAgYm90dG9tOiBhdXRvO1xcclxcbiAgIHdpZHRoOiA5MCU7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKTtcXHJcXG4gfVxcclxcblxcclxcbiAubWVhbHNfY29udGFpbmVyIHtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICBtYXJnaW46IDA7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLm1lYWxzX2NvbnRhaW5lciA+IGFydGljbGUge1xcclxcbiAgIHdpZHRoOiA4MCU7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLmluc3Qge1xcclxcbiAgIGhlaWdodDogYXV0bztcXHJcXG4gfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9iaWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDO0VBQ0MsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtHQUNFLDJCQUEyQjtHQUMzQixhQUFhO0dBQ2IsWUFBWTtHQUNaLGVBQWU7R0FDZiwwQkFBMEI7Q0FDNUI7O0NBRUE7R0FDRSxhQUFhO0NBQ2Y7O0NBRUE7R0FDRSxXQUFXO0dBQ1gsZUFBZTtDQUNqQjs7Q0FFQTtHQUNFLFlBQVk7R0FDWixzQkFBc0I7R0FDdEIsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtDQUNyQjs7Q0FFQTtHQUNFLFdBQVc7Q0FDYjs7Q0FFQSxtQkFBbUI7O0NBRW5CO0dBQ0UsYUFBYTtHQUNiLG1CQUFtQjtHQUNuQix1QkFBdUI7Q0FDekI7O0NBRUE7R0FDRSxhQUFhO0NBQ2Y7O0NBRUE7R0FDRSxVQUFVO0dBQ1YsWUFBWTtHQUNaLFVBQVU7R0FDViwyQ0FBMkM7Q0FDN0M7O0NBRUE7R0FDRSxXQUFXO0dBQ1gsU0FBUztHQUNULGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsbUJBQW1CO0NBQ3JCOztDQUVBO0dBQ0UsVUFBVTtDQUNaOztDQUVBO0dBQ0UsWUFBWTtDQUNkO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xcclxcbiBoZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCAyMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuIH1cXHJcXG5cXHJcXG4gaGVhZGVyID4gLmZhLWJhcnMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuIH1cXHJcXG5cXHJcXG4gbmF2IHtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzIzNmI7XFxyXFxuICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcclxcbiB9XFxyXFxuXFxyXFxuIG5hdiAubG9nbyB7XFxyXFxuICAgZGlzcGxheTogbm9uZTtcXHJcXG4gfVxcclxcblxcclxcbiAubWVudSB7XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgbWFyZ2luLXRvcDogMjUlO1xcclxcbiB9XFxyXFxuIFxcclxcbiAubWVudSA+IHVsIHtcXHJcXG4gICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5tZW51IGxpIHtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gfVxcclxcblxcclxcbiAvKiBzdHlsZSB0aGUgbWFpbiAqL1xcclxcblxcclxcbiAubWFpbl9oZWFkIHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLm1haW5faGVhZCA+IGgxIHtcXHJcXG4gICBkaXNwbGF5OiBub25lO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5tYWluX2hlYWQgPiBwIHtcXHJcXG4gICBsZWZ0OiBhdXRvO1xcclxcbiAgIGJvdHRvbTogYXV0bztcXHJcXG4gICB3aWR0aDogOTAlO1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLm1lYWxzX2NvbnRhaW5lciB7XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgbWFyZ2luOiAwO1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5tZWFsc19jb250YWluZXIgPiBhcnRpY2xlIHtcXHJcXG4gICB3aWR0aDogODAlO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5pbnN0IHtcXHJcXG4gICBoZWlnaHQ6IGF1dG87XFxyXFxuIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX21vYmlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlX21vYmlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlrZXMge1xyXG4gY29uc3RydWN0b3IoaXRlbV9pZCA9ICcnLCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTzdOYWVLRGZxN29aMVhFSXkyc1YvbGlrZXMvJykge1xyXG4gIHRoaXMuaXRlbV9pZCA9IGl0ZW1faWQ7XHJcbiAgdGhpcy51cmwgPSB1cmw7XHJcbiAgdGhpcy5saWtlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpICE9IG51bGxcclxuICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpa2VkJykpIFxyXG4gICAgICAgIDogJyc7XHJcbiAgdGhpcy5kYXRhID0ge1xyXG4gICBcIml0ZW1faWRcIjogdGhpcy5pdGVtX2lkLFxyXG4gfTtcclxuIH1cclxuXHJcbiBzYXZlTGlrZWQoVFNhdmUgPSB0aGlzLmxpa2VkKSB7XHJcbiAgY29uc3Qgc3RvcmVMaWtlZCA9IEpTT04uc3RyaW5naWZ5KFRTYXZlKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlrZWQnLCBzdG9yZUxpa2VkKTtcclxufVxyXG5cclxuIGFzeW5jIGdldExpa2VzKCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwpO1xyXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGpzb247XHJcbiB9XHJcblxyXG4gYXN5bmMgcG9zdExpa2VzKCkge1xyXG4gIGNvbnN0IG9wdGlvbiA9IHtcclxuICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgfSxcclxuICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpLFxyXG4gIH07XHJcblxyXG4gIGlmICh0aGlzLmxpa2VkID09PSAnJyB8fCB0aGlzLmxpa2VkLmxlbmdodCA9PT0gMCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaCh0aGlzLnVybCwgb3B0aW9uKTtcclxuICAgIHJlc3BvbnNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmxpa2VkID0gW3RoaXMuZGF0YV07XHJcbiAgICAgIHRoaXMuc2F2ZUxpa2VkKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBsaWtlZFNvcnQgPSB0aGlzLmxpa2VkLm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkKTtcclxuICAgIGlmIChsaWtlZFNvcnQuaW5jbHVkZXModGhpcy5pdGVtX2lkKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2godGhpcy51cmwsIG9wdGlvbik7XHJcbiAgICAgIHJlc3BvbnNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGlrZWQucHVzaCh0aGlzLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2F2ZUxpa2VkKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiB9O1xyXG59XHJcbiIsImNvbnN0IGNvbW1lbnRTZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1zZWN0aW9uJyk7XG5jb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1pbnB1dCcpO1xuY29uc3QgY29tbWVudEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1hcmVhJyk7XG5jb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcbmNvbnN0IGRpdkRpc3BsYXlDb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtaGVhZCcpO1xuXG5jb25zdCAkQ09NTUVOVF9VUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMveVZPd3FOR3BjZ3F2TWRqd2tDN0MnO1xuXG4vLyBkaXNwbGF5IGNvbW1lbnRcbmNvbnN0IGRpc3BsYXljb21tZW50ID0gKGRhdGEpID0+IHtcbiAgY29tbWVudElucHV0LnZhbHVlID0gJyc7XG4gIGNvbW1lbnRBcmVhLnZhbHVlID0gJyc7XG4gIGlmIChkYXRhLmxlbmd0aCkge1xuICAgIGRpdkRpc3BsYXlDb21tZW50LmlubmVySFRNTCA9IGRhdGEubGVuZ3RoO1xuICB9XG4gIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5pbm5lckhUTUwgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICAke2NvbW1lbnQuY29tbWVudH1gO1xuICAgIGNvbW1lbnRMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG59O1xuXG4vLyBmZXRjaCBjb21tZW50XG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChtZWFsSWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7JENPTU1FTlRfVVJMfS9jb21tZW50cz9pdGVtX2lkPSR7bWVhbElkfWApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZGlzcGxheWNvbW1lbnQoZGF0YSk7XG4gICAgfSk7XG59O1xuXG4vKiBjb21tZW50IGRpc3BsYXkgKi9cbmNvbnN0IHBvc3RJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtaW5mbycpO1xuY29tbWVudFNlYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuZXhwb3J0IGNvbnN0IGRpc3BsYXlDb21tZW50RGF0YSA9IChpZCwgZGF0YSkgPT4ge1xuICBjb25zdCBtZWFsSWQgPSBpZDtcbiAgZ2V0Q29tbWVudChtZWFsSWQpO1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBwb3N0SW5mby5pbm5lckhUTUwgPSBgIDxpbWcgc3JjPVwiJHtlbGVtZW50LnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCJcIiBjbGFzcz1cImNvbW1lbnQtaW1nXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwibWVhbC1uYW1lXCI+ICR7ZWxlbWVudC5zdHJNZWFsfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3MgPVwiZm9vZC1pbnN0cnVjdGlvblwiPjxoMT5SZWNpcGU6Jm5ic3A7PC9oMT4gJHtlbGVtZW50LnN0ckluc3RydWN0aW9uc308L3A+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZm9vZC1kZXRhaWxzXCI+XG4gICAgICAgICAgPHAgY2xhc3MgPSBcImJhclwiPlxuICAgICAgICAgICAgICA8bGk+PGg0PkNhdGVnb3J5OjwvaDQ+ICR7ZWxlbWVudC5zdHJDYXRlZ29yeX08L2xpPjwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImJhclwiPjxsaT48aDQ+QXJlYTo8L2g0PiAke2VsZW1lbnQuc3RyQXJlYX08L2xpPjwvcD5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgYDtcbiAgfSk7XG4gIGNvbW1lbnRTZWMuc3R5bGUuZGlzcGxheSA9ICdpbmhlcml0JztcbiAgY29tbWVudFNlYy5kYXRhc2V0LmlkID0gbWVhbElkO1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudCA9IGFzeW5jICh7IGl0ZW1JZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSwgdXJsKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke3VybH0vY29tbWVudHNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb21tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVGb3JtID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBvYmogPSB7XG4gICAgaXRlbUlkOiBjb21tZW50U2VjLmRhdGFzZXQuaWQsXG4gICAgdXNlcm5hbWU6IGNvbW1lbnRJbnB1dC52YWx1ZSxcbiAgICBjb21tZW50OiBjb21tZW50QXJlYS52YWx1ZSxcbiAgfTtcblxuICBjcmVhdGVDb21tZW50KG9iaiwgJENPTU1FTlRfVVJMKTtcblxuICBjb21tZW50SW5wdXQudmFsdWUgPSAnJztcbiAgY29tbWVudEFyZWEudmFsdWUgPSAnJztcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtaWNvbicpO1xuY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29tbWVudFNlYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVGb3JtOyIsImNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb24ubWVhbHM7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItdGVtcGxhdGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVfbW9iaWxlLmNzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2Fzc2VzdC9sb2dvMS5wbmcnO1xuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGVzL2hvbWVQYWdlLmpzJztcbmltcG9ydCBMaWtlcyBmcm9tICcuL21vZHVsZXMvTGlrZXMuanMnO1xuaW1wb3J0IGhhbmRsZUZvcm0sIHsgZGlzcGxheUNvbW1lbnREYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQuanMnO1xuXG5jb25zdCBteWxvZ28gPSBuZXcgSW1hZ2UoKTtcbm15bG9nby5zcmMgPSBJY29uO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHNfY29udGFpbmVyJyk7XG5jb25zdCBtZWFsVXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JztcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG5sb2dvLmFwcGVuZENoaWxkKG15bG9nbyk7XG5jb25zdCBkaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtZWFscyA9IGF3YWl0IGdldERhdGEoJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP2Y9YScpO1xuICBsZXQgbGlrZWQgPSBbXTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpICE9IG51bGwpIHtcbiAgICBjb25zdCBsaWsgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWtlZCcpKTtcbiAgICBsaWtlZCA9IGxpay5tYXAoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCk7XG4gIH1cblxuICBtZWFscy5mb3JFYWNoKCh7XG4gICAgaWRNZWFsLCBzdHJNZWFsLCBzdHJDYXRlZ29yeSwgc3RyQXJlYSwgc3RySW5zdHJ1Y3Rpb25zLCBzdHJNZWFsVGh1bWIsXG4gIH0pID0+IHtcbiAgICBjb25zdCBhcnRpY2xlID0gYFxuICA8YXJ0aWNsZT5cbiAgIDxkaXYgY2xhc3M9XCJtZWFsX2ltZ1wiPjxpbWcgc3JjPVwiJHtzdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCI+PC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwidGl0bGVcIj48aDM+JHtzdHJNZWFsfTwvaDM+XG4gICA8ZGl2IGNsYXNzPVwibGlrZV9ib3hcIj48c3BhbiBjbGFzcz1cIm5icl9saWtlXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiIGNvbG9yOiAke2xpa2VkLmluY2x1ZGVzKCdpdGVtXycgKyBpZE1lYWwpID8gJyNlZDFjMjQnIDogJyd9XCIgbGlrZWQ9XCIke2xpa2VkLmluY2x1ZGVzKCdpdGVtXycgKyBpZE1lYWwpID8gJ3RydWUnIDogJ2ZhbHNlJ31cIiBjbGFzcz1cImZhcyBmYS10aHVtYnMtdXBcIiBpZD1cIml0ZW1fJHtpZE1lYWx9XCI+PC9zcGFuPjwvZGl2PlxuICAgPC9kaXY+XG4gICA8cCBjbGFzcz1cImluc3RcIj4ke3N0ckluc3RydWN0aW9ucy5zbGljZSgwLCAxMDApfS4uLi48L3A+XG4gICA8cCBjbGFzcz1cIkNBXCI+PHNwYW4+PHN0cm9uZz5DYXRlZ29yeTo8L3N0cm9uZz4gJHtzdHJDYXRlZ29yeX08L3NwYW4+PHNwYW4+PHN0cm9uZz5BcmVhOjwvc3Ryb25nPiAke3N0ckFyZWF9PC9zcGFuPjwvcD5cbiAgIDxidXR0b24gaWQ9JHtpZE1lYWx9IGNsYXNzPVwiYnRuX2NvbW1lbnQgYnRuXCIgZGF0YS1pZD1cIiR7aWRNZWFsfVwiID5Db21tZW50czwvYnV0dG9uPlxuICAgXG4gIDwvYXJ0aWNsZT5gO1xuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGFydGljbGUpO1xuICB9KTtcbn07XG5cbi8qIGdldCBjb21tZW50IGRhdGEgKi9cbmNvbnN0IGdldENvbW1lbnREYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke21lYWxVcmx9JHtpZH1gKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRpc3BsYXlDb21tZW50RGF0YShpZCwgZGF0YS5tZWFscykpO1xufTtcblxuLyogY29tbWVudCBwbGFjZSAqL1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgaGFuZGxlRm9ybShlKTtcbn0pO1xuXG5jb25zdCBmdG5MaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZV9pY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXRodW1icy11cCcpO1xuICBsaWtlX2ljb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgY29uc3QgbmJyTGlrZSA9IGUudGFyZ2V0LnByZXZpb3VzU2libGluZztcbiAgICAgIGNvbnN0IGxpa2VJY29uID0gZS50YXJnZXQ7XG4gICAgICBsZXQgaSA9ICtuYnJMaWtlLnRleHRDb250ZW50O1xuICAgICAgY29uc3Qgc2RMaW5rID0gbmV3IExpa2VzKGxpa2VJY29uLmlkKTtcbiAgICAgIGNvbnN0IGNoZWNrID0gYXdhaXQgc2RMaW5rLnBvc3RMaWtlcygpO1xuXG4gICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgaSArPSAxO1xuICAgICAgICBuYnJMaWtlLmlubmVySFRNTCA9IGk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaWtlSWNvbi5nZXRBdHRyaWJ1dGUoJ2xpa2VkJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgbGlrZUljb24uc3R5bGUuY29sb3IgPSAnI2VkMWMyNCc7XG4gICAgICAgIGxpa2VJY29uLnNldEF0dHJpYnV0ZSgnbGlrZWQnLCAndHJ1ZScpO1xuICAgICAgfSBlbHNlIGlmICgobGlrZUljb24uZ2V0QXR0cmlidXRlKCdsaWtlZCcpID09PSAndHJ1ZScpKSB7XG4gICAgICAgIGxpa2VJY29uLnN0eWxlLmNvbG9yID0gJyc7XG4gICAgICAgIGxpa2VJY29uLnNldEF0dHJpYnV0ZSgnbGlrZWQnLCAnZmFsc2UnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBkcGxMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc2RMaW5rID0gbmV3IExpa2VzKCk7XG4gIHNkTGluay5nZXRMaWtlcygpLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUuZm9yRWFjaCgoeyBsaWtlcywgaXRlbV9pZCB9KSA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtX2lkKS5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQgPSBsaWtlcztcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5kaXNwbGF5KClcbiAgLnRoZW4oZHBsTGlrZXMpXG4gIC50aGVuKGZ0bkxpa2VzKTtcblxuY29uc3QgYmFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXJzJyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbmJhcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChuYXYuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9IGVsc2Uge1xuICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=