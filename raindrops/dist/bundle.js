/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Drop-Object/ballFallTheSea.js":
/*!***************************************!*\
  !*** ./Drop-Object/ballFallTheSea.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ballFallTheSea\n/* harmony export */ });\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainObject/mainObject */ \"./mainObject/mainObject.js\");\n\r\n\r\nfunction ballFallTheSea(circule){\r\n    const seaTop = document.querySelector(\".seapart__sea-level\");\r\n    const a = function(){\r\n    if(seaTop.getBoundingClientRect().top >= circule.getBoundingClientRect().bottom){\r\n       setTimeout(a, 1000);\r\n    } else if(circule.classList.contains(\"circule-yellow\")){\r\n        circule.classList.add(\"circule-disappear\");\r\n        setTimeout(() => { circule.remove()}, 1000); \r\n    }else{\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.follenToSea++;\r\n        circule.classList.add(\"circule-disappear\");\r\n        setTimeout(() => { circule.remove()}, 1000); \r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.drop.expectedResultOfExpression.shift();\r\n        if(!seaTop.style.height){\r\n            seaTop.style.height = \"20%\"\r\n        } else{\r\n            seaTop.style.height = seaTop.style.height.slice(0, +seaTop.style.height.length-1)*2 +\"%\";\r\n        }\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.loseGameCount ++;\r\n        if (_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.loseGameCount === 3){\r\n            _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.shouldConyinueGame = false;\r\n        }\r\n        return true;\r\n        }\r\n\r\n    }\r\n    a();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./Drop-Object/ballFallTheSea.js?");

/***/ }),

/***/ "./Drop-Object/circuleAdd.js":
/*!***********************************!*\
  !*** ./Drop-Object/circuleAdd.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ circuleAdd\n/* harmony export */ });\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainObject/mainObject */ \"./mainObject/mainObject.js\");\n/* harmony import */ var _Drop_Object_ballFallTheSea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drop-Object/ballFallTheSea */ \"./Drop-Object/ballFallTheSea.js\");\n\r\n\r\nfunction circuleAdd(expectedResult, counter){\r\n    const circule = document.createElement(\"div\");\r\n    circule.style.transitionDuration = _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropSpeed;\r\n    const dropHolder = document.querySelector(\".circule-holder\");\r\n    const mathOperation = document.createElement(\"div\");\r\n    const sea = document.querySelector(\".seapart\");\r\n    circule.classList.add(\"circule\");\r\n    if(dropHolder.childNodes.length===3){\r\n        circule.classList.add(\"circule-yellow\");\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.isYallowDrop = true;\r\n}\r\n        circule.style.left = (Math.floor(Math.random() * Math.floor(90)))+ \"%\";\r\n    dropHolder.append(circule);\r\n    _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropsAmount++;\r\n    mathOperation.innerText= expectedResult;\r\n    \r\n    circule.append(mathOperation);\r\n    const f = function(){\r\n        circule.classList.add(\"bottom\");\r\n        (0,_Drop_Object_ballFallTheSea__WEBPACK_IMPORTED_MODULE_1__.default)(circule, counter);\r\n    }\r\n     timeFrame(f);\r\n\r\n    function timeFrame(fn){\r\n        window.requestAnimationFrame(\r\n            function(){\r\n                fn();\r\n            }\r\n        )\r\n    }\r\n    return mathOperation;\r\n}\n\n//# sourceURL=webpack://raindrops/./Drop-Object/circuleAdd.js?");

/***/ }),

/***/ "./Drop-Object/getOperation.js":
/*!*************************************!*\
  !*** ./Drop-Object/getOperation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ getOperation\n/* harmony export */ });\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainObject/mainObject */ \"./mainObject/mainObject.js\");\n\r\nfunction getOperation(operationsToUse){\r\n    const randomOperation = Math.floor(Math.random()*operationsToUse.length);\r\n    const operation = operationsToUse[randomOperation];\r\n    _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.drop.operator = operation;\r\n    return _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.drop.operator;\r\n}\n\n//# sourceURL=webpack://raindrops/./Drop-Object/getOperation.js?");

/***/ }),

/***/ "./Drop-Object/getRandomInt.js":
/*!*************************************!*\
  !*** ./Drop-Object/getRandomInt.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ getRandomInt\n/* harmony export */ });\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainObject/mainObject */ \"./mainObject/mainObject.js\");\n\r\nfunction getRandomInt(min, max) {\r\n    return Math.floor(Math.random() * (max - min)) + min;\r\n  }\n\n//# sourceURL=webpack://raindrops/./Drop-Object/getRandomInt.js?");

/***/ }),

/***/ "./Drop-Object/mathExpressionProduce.js":
/*!**********************************************!*\
  !*** ./Drop-Object/mathExpressionProduce.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ mathExpressionProduse\n/* harmony export */ });\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainObject/mainObject */ \"./mainObject/mainObject.js\");\n/* harmony import */ var _getOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOperation */ \"./Drop-Object/getOperation.js\");\n\r\n\r\nfunction mathExpressionProduse(){\r\n    const operationsAll =[\"+\", \"-\", \"*\", \"/\"];\r\n\r\n        if(_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.operationsSet === \"+\"){\r\n            (0,_getOperation__WEBPACK_IMPORTED_MODULE_1__.default)(operationsAll.slice(0, 1));\r\n        }else if(_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.operationsSet === \"-\"){\r\n            (0,_getOperation__WEBPACK_IMPORTED_MODULE_1__.default)(operationsAll.slice(0, 2));\r\n        } else if(_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.operationsSet === \"*\"){\r\n            (0,_getOperation__WEBPACK_IMPORTED_MODULE_1__.default)(operationsAll.slice(0, 3));\r\n        } else {\r\n            (0,_getOperation__WEBPACK_IMPORTED_MODULE_1__.default)(operationsAll);\r\n        }\r\n    }\r\n\n\n//# sourceURL=webpack://raindrops/./Drop-Object/mathExpressionProduce.js?");

/***/ }),

/***/ "./Enter-Object-Observer/clearScreen.js":
/*!**********************************************!*\
  !*** ./Enter-Object-Observer/clearScreen.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ clearScreen\n/* harmony export */ });\nfunction clearScreen(){\r\n    const enterpart = document.querySelector(\".enterpart__play-panel__screen\");\r\n    enterpart.innerText = \" \";\r\n    }\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/clearScreen.js?");

/***/ }),

/***/ "./Enter-Object-Observer/deleteLastNumber.js":
/*!***************************************************!*\
  !*** ./Enter-Object-Observer/deleteLastNumber.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ deleteLastNumber\n/* harmony export */ });\nfunction deleteLastNumber(){\r\n    const enterpart = document.querySelector(\".enterpart__play-panel__screen\");\r\n    enterpart.innerText =enterpart.innerText.slice(0, (enterpart.innerText.length-1)) ;\r\n    }\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/deleteLastNumber.js?");

/***/ }),

/***/ "./Enter-Object-Observer/enterButton.js":
/*!**********************************************!*\
  !*** ./Enter-Object-Observer/enterButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ enterButton\n/* harmony export */ });\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainObject/mainObject */ \"./mainObject/mainObject.js\");\n\r\nfunction enterButton(){\r\n    const enterpart = document.querySelector(\".enterpart__play-panel__screen\");\r\n    const scoreScreen = document.querySelector(\".enterpart__score__score-value\");\r\n    const aproved = document.querySelector(\".aproved\");\r\n    const refused = document.querySelector(\".refused\");\r\n    const circule = document.querySelector(\".circule\");\r\n    if(+enterpart.innerText === _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.drop.expectedResultOfExpression.shift()){\r\n        scoreScreen.innerText = +scoreScreen.innerText + _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.pointsToAdd;\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.pointsToAdd++;\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.correctlySolved++;\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score = +scoreScreen.innerText;\r\n        if(_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score >= 350){\r\n            _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropSpeed = \"25s\";\r\n        }else if (_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score >= 250){\r\n                _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropSpeed = \"30s\";\r\n            } else if(_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score >= 150){\r\n                _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropSpeed = \"35s\";\r\n            } else if (_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score >= 100){\r\n                _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropSpeed = \"40s\";\r\n            }\r\n        aproved.play();\r\n        if(document.querySelectorAll(\".circule\")[0].classList.contains(\"circule-yellow\")){\r\n            if(document.querySelectorAll(\".circule\")[1].classList.contains(\"circule-yellow\")){\r\n            \r\n                document.querySelectorAll(\".circule\")[2].remove()\r\n            } else{document.querySelectorAll(\".circule\")[1].remove()}\r\n        } else{\r\n            circule.remove();\r\n        }\r\n\r\n    }else if((_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.isYallowDrop === true)&&(+enterpart.innerText === _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.yellowDropExpressionResult)){\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.drop.expectedResultOfExpression = [];\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.correctlySolved++;\r\n        let allCirciles = document.querySelectorAll(\".circule\");\r\n        allCirciles.forEach((eachCircule)=>{\r\n            eachCircule.remove();\r\n        })\r\n    \r\n    }else{\r\n        scoreScreen.innerText = +scoreScreen.innerText - _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.pointsToAdd;\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score = +scoreScreen.innerText;\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.solvedWithMistake++;\r\n        refused.play();\r\n        circule.remove();\r\n    }\r\n    \r\n    enterpart.innerText = \" \";\r\n    }\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/enterButton.js?");

/***/ }),

/***/ "./Enter-Object-Observer/enterCatcher.js":
/*!***********************************************!*\
  !*** ./Enter-Object-Observer/enterCatcher.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ enterCatcher\n/* harmony export */ });\n/* harmony import */ var _numberPress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberPress */ \"./Enter-Object-Observer/numberPress.js\");\n/* harmony import */ var _clearScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearScreen */ \"./Enter-Object-Observer/clearScreen.js\");\n/* harmony import */ var _deleteLastNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteLastNumber */ \"./Enter-Object-Observer/deleteLastNumber.js\");\n/* harmony import */ var _enterButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enterButton */ \"./Enter-Object-Observer/enterButton.js\");\n// import { NoEmitOnErrorsPlugin } from \"webpack\";\r\n\r\n\r\n\r\n\r\nfunction enterCatcher(timerId)  {\r\n    const buttonsHolder = document.querySelector(\".enterpart__play-panel__buttons-holder\");\r\n    const buttonOnClick = (e)=>{\r\n        if(e.target.classList.contains(\"number\")||e.target.classList.contains(\"ziro\")){\r\n            (0,_numberPress__WEBPACK_IMPORTED_MODULE_0__.default)(e.target.textContent);\r\n        } else if (e.target.classList.contains(\"clear\")){\r\n            (0,_clearScreen__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n        }else if (e.target.classList.contains(\"delete\")){\r\n            (0,_deleteLastNumber__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n        }else if (e.target.classList.contains(\"enter\")){\r\n            (0,_enterButton__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n        }\r\n    }\r\n    \r\n    buttonsHolder.addEventListener(\"click\", buttonOnClick);\r\n const removeEv = function(){\r\n    buttonsHolder.removeEventListener(\"click\", buttonOnClick);\r\n }\r\n\r\n    const keyOnClick = (e)=>{\r\n        if(e.code.slice(0,e.code.length-1)===\"Digit\"){\r\n            (0,_numberPress__WEBPACK_IMPORTED_MODULE_0__.default)(e.code.slice(-1));\r\n        } else if (e.code == \"Delete\"){\r\n            (0,_clearScreen__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n        }else if (e.code == \"Backspace\"){\r\n            (0,_deleteLastNumber__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n        }else if (e.code === \"Enter\"){\r\n            (0,_enterButton__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n        }\r\n    }\r\n    document.addEventListener(\"keypress\", keyOnClick);\r\n    const removeEv1 = function(){\r\n    document.removeEventListener(\"keypress\", keyOnClick);\r\n    }\r\n\r\n    setTimeout(removeEv, timerId);\r\n    setTimeout(removeEv1, timerId);\r\n}\r\n\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/enterCatcher.js?");

/***/ }),

/***/ "./Enter-Object-Observer/numberPress.js":
/*!**********************************************!*\
  !*** ./Enter-Object-Observer/numberPress.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ numberPress\n/* harmony export */ });\nfunction numberPress(value){\r\n    const enterpart = document.querySelector(\".enterpart__play-panel__screen\");\r\n    enterpart.innerText += value;\r\n}\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/numberPress.js?");

/***/ }),

/***/ "./SeaPartObject/makeScreenFull.js":
/*!*****************************************!*\
  !*** ./SeaPartObject/makeScreenFull.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ makeScreenFull\n/* harmony export */ });\nfunction makeScreenFull(){\r\n    const fullScreenElement = document.querySelector(\".full-screen-game\");\r\n    const normalScreenElement = document.querySelector(\".normal-screen-game\");\r\n    const screenElements = document.querySelectorAll(\".screen-symbol\");\r\n    const gameField = document.querySelector(\".wrapper\");\r\n    screenElements.forEach((element)=>{\r\n        element.addEventListener(\"click\",()=>{\r\n            if(element.classList.contains(\"full-screen-game\")){\r\n                launchFullScreen(gameField);\r\n            }else{\r\n                cancelFullscreen(document);\r\n            }\r\n            fullScreenElement.classList.toggle(\"game-nondisplay\");\r\n            normalScreenElement.classList.toggle(\"game-nondisplay\");\r\n        })\r\n    })\r\n\r\n\r\n    //Запустить отображение в полноэкранном режиме\r\nfunction launchFullScreen(element) {\r\n    if(element.requestFullScreen) {\r\n      element.requestFullScreen();\r\n    } else if(element.mozRequestFullScreen) {\r\n      element.mozRequestFullScreen();\r\n    } else if(element.webkitRequestFullScreen) {\r\n      element.webkitRequestFullScreen();\r\n    }\r\n  }\r\n  \r\n  // Выход из полноэкранного режима\r\n  function cancelFullscreen() {\r\n    if(document.cancelFullScreen) {\r\n      document.cancelFullScreen();\r\n    } else if(document.mozCancelFullScreen) {\r\n      document.mozCancelFullScreen();\r\n    } else if(document.webkitCancelFullScreen) {\r\n      document.webkitCancelFullScreen();\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://raindrops/./SeaPartObject/makeScreenFull.js?");

/***/ }),

/***/ "./SeaPartObject/wave.js":
/*!*******************************!*\
  !*** ./SeaPartObject/wave.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ waveMove\n/* harmony export */ });\nfunction waveMove(){\r\n    const wave = document.querySelector(\".wave\");\r\n    const addA = ()=>{\r\n        wave.classList.add(\"wave-left\");\r\n    }\r\n    \r\n    const removeA = function(){\r\n        wave.classList.remove(\"wave-left\");\r\n    }\r\n     timeFrame(addA);\r\n    \r\n    function timeFrame(fn){\r\n        window.requestAnimationFrame(\r\n            function(){\r\n                window.requestAnimationFrame(\r\n                    function(){\r\n                        fn();\r\n                    }\r\n                )\r\n            }\r\n        )\r\n    }  \r\n    wave.addEventListener(\"transitionend\",removeA);\r\n}\r\n\n\n//# sourceURL=webpack://raindrops/./SeaPartObject/wave.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SeaPartObject_makeScreenFull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SeaPartObject/makeScreenFull */ \"./SeaPartObject/makeScreenFull.js\");\n/* harmony import */ var _SeaPartObject_wave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SeaPartObject/wave */ \"./SeaPartObject/wave.js\");\n/* harmony import */ var _mainObject_start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainObject/start */ \"./mainObject/start.js\");\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainObject/mainObject */ \"./mainObject/mainObject.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_mainObject_start__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n  (0,_SeaPartObject_wave__WEBPACK_IMPORTED_MODULE_1__.default)(); \r\n  (0,_SeaPartObject_makeScreenFull__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  let timerId = setInterval(_SeaPartObject_wave__WEBPACK_IMPORTED_MODULE_1__.default, 22000);\r\nif(!_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_3__.default.shouldConyinueGame){\r\n  setTimeout(() => { clearInterval(timerId)}, 0);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./index.js?");

/***/ }),

/***/ "./instructions/addDrop.js":
/*!*********************************!*\
  !*** ./instructions/addDrop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ addDrop\n/* harmony export */ });\nfunction addDrop(vari, color){\r\n    const dropHolder = document.querySelector(\".circule-holder\");\r\n    const circule = document.createElement(\"div\");\r\n    circule.style.transitionDuration = \"30s\";\r\n    const mathOperation = document.createElement(\"div\");\r\n    circule.classList.add(\"circule\");\r\n    circule.style.left = (Math.floor(Math.random() * Math.floor(70)))+ \"%\";\r\n    if(color === \"yellow\"){\r\n        circule.classList.add(\"circule-yellow\");\r\n    }\r\n    dropHolder.append(circule);\r\n    mathOperation.textContent = vari;\r\n    circule.append(mathOperation);\r\n    const f = function(){\r\n        circule.classList.add(\"bottom\");\r\n    }\r\n     timeFrame(f);\r\n\r\n    function timeFrame(fn){\r\n        window.requestAnimationFrame(\r\n            function(){\r\n                fn();\r\n            }\r\n        )\r\n    }\r\n        const seaTop = document.querySelector(\".seapart__sea-level\");\r\n        const a = function(){\r\n        if(seaTop.getBoundingClientRect().top >= circule.getBoundingClientRect().bottom){\r\n           setTimeout(a, 1000);\r\n        } else{\r\n            circule.classList.add(\"circule-disappear\");\r\n            setTimeout(() => { circule.remove()}, 1000); \r\n            if(!seaTop.style.height){\r\n                seaTop.style.height = \"20%\"\r\n                console.log(seaTop.style.height.slice(0, +seaTop.style.height.length-1));\r\n            } else{\r\n                seaTop.style.height = seaTop.style.height.slice(0, +seaTop.style.height.length-1)*2 +\"%\";\r\n            }\r\n            return true;\r\n            }\r\n    \r\n        }\r\n        a();\r\n}\n\n//# sourceURL=webpack://raindrops/./instructions/addDrop.js?");

/***/ }),

/***/ "./instructions/firstPage.js":
/*!***********************************!*\
  !*** ./instructions/firstPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ firstPage\n/* harmony export */ });\n/* harmony import */ var _instructins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructins */ \"./instructions/instructins.js\");\n\r\nfunction firstPage(){\r\n    const circule = document.createElement(\"div\");\r\n    circule.style.transitionDuration = \"30s\";\r\n    const dropHolder = document.querySelector(\".circule-holder\");\r\n    const mathOperation = document.createElement(\"div\");\r\n    const instructionsText = document.querySelector(\".instructions__text-holder\");\r\n    instructionsText.innerText = \"Solve The equation in the raindrop before it reaches the water. Select your answer on the number pad i  the game and click Enter or use your computer key board.\"\r\n    circule.classList.add(\"circule\");\r\n    circule.style.left = (Math.floor(Math.random() * Math.floor(60)))+ \"%\";\r\n    dropHolder.append(circule);\r\n    mathOperation.textContent = \"3+6\";\r\n    circule.append(mathOperation);\r\n\r\n    \r\n    const f = function(){\r\n        circule.classList.add(\"bottom\");\r\n    }\r\n     timeFrame(f);\r\n\r\n    function timeFrame(fn){\r\n        window.requestAnimationFrame(\r\n            function(){\r\n                fn();\r\n            }\r\n        )\r\n    }\r\n    const timqrId1 = setTimeout(()=>{\r\n        circule.remove();\r\n    }, 8000);\r\n\r\n    const chosen = document.querySelector(\".chosen\");\r\n     const timqrId2 = setTimeout(addColor, 3000,chosen);\r\n\r\n    function addColor(button){\r\n        function addColorInner(){\r\n            button.classList.remove(\"yellow-key\");\r\n            button.removeEventListener(\"transitionend\",addColorInner)\r\n        }\r\n        button.classList.add(\"yellow-key\");\r\n        if(document.querySelector(\".enterpart__play-panel__screen\").innerText !== \"9\"){\r\n        setTimeout(()=>{document.querySelector(\".enterpart__play-panel__screen\").innerText = 9;\r\n    }, 3000); \r\n    } else{\r\n    setTimeout(()=>{document.querySelector(\".enterpart__play-panel__screen\").innerText = \" \";\r\n    }, 3000); \r\n    }\r\n    button.addEventListener(\"transitionend\",addColorInner)\r\n    } \r\n\r\n    const enter = document.querySelector(\".enter\");\r\n    const timqrId3 = setTimeout(addColor, 5000,enter);\r\n    setTimeout(() => {\r\n        enter.classList.remove(\"yellow-key\");\r\n        document.querySelector(\".enterpart__play-panel__screen\").innerText = \" \";\r\n    }, 10000); \r\nfunction help(e){\r\n    if(e.target.classList.contains(\"instructions__button\")){\r\n                clearTimeout(timqrId1);\r\n                clearTimeout(timqrId2);\r\n                clearTimeout(timqrId3);\r\n                circule.remove();\r\n                (0,_instructins__WEBPACK_IMPORTED_MODULE_0__.default)(e.target.value);\r\n               return;\r\n            }\r\n}\r\ndocument.querySelector(\".instructions\").addEventListener(\"click\", help, \"click\");\r\n\r\n    setTimeout(() => {\r\n        document.querySelector(\".instructions\").removeEventListener(\"click\", help, \"click\");\r\n    }, 5000);\r\n}\n\n//# sourceURL=webpack://raindrops/./instructions/firstPage.js?");

/***/ }),

/***/ "./instructions/functionS.js":
/*!***********************************!*\
  !*** ./instructions/functionS.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ s\n/* harmony export */ });\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainObject/mainObject */ \"./mainObject/mainObject.js\");\n\r\nfunction s(){\r\n    const aud = document.querySelector('.audio');\r\n    aud.play();\r\n    document.querySelector(\".enterpart__score-holder\").classList.remove(\"game-nondisplay\");\r\n    document.querySelector(\".wave\").classList.remove(\"game-nondisplay\");\r\n    document.querySelector(\".wave1\").classList.remove(\"game-nondisplay\");\r\n    document.querySelector(\".seapart__sea-plants\").classList.remove(\"game-nondisplay\");\r\n    document.querySelector(\".instructions\").classList.add(\"game-nondisplay\");\r\n    document.querySelector(\".enterpart__play-panel-wrapper\").classList.remove(\"enterpart__play-panel-wrapper-information\");\r\n    _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.drop.isContinue();\r\n}\n\n//# sourceURL=webpack://raindrops/./instructions/functionS.js?");

/***/ }),

/***/ "./instructions/functionT.js":
/*!***********************************!*\
  !*** ./instructions/functionT.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ t\n/* harmony export */ });\n/* harmony import */ var _firstPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstPage */ \"./instructions/firstPage.js\");\n\r\nfunction t(){\r\n    document.querySelector(\".enterpart__score-holder\").classList.add(\"game-nondisplay\");\r\n    document.querySelector(\".wave\").classList.add(\"game-nondisplay\");\r\n    document.querySelector(\".wave1\").classList.add(\"game-nondisplay\");\r\n    document.querySelector(\".seapart__sea-plants\").classList.add(\"game-nondisplay\");\r\n    document.querySelector(\".instructions\").classList.remove(\"game-nondisplay\");\r\n    document.querySelector(\".enterpart__play-panel-wrapper\").classList.add(\"enterpart__play-panel-wrapper-information\");\r\n    (0,_firstPage__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n}\n\n//# sourceURL=webpack://raindrops/./instructions/functionT.js?");

/***/ }),

/***/ "./instructions/instructins.js":
/*!*************************************!*\
  !*** ./instructions/instructins.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ instructions\n/* harmony export */ });\n/* harmony import */ var _instructions_instructionsObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instructions/instructionsObject */ \"./instructions/instructionsObject.js\");\n/* harmony import */ var _functionS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionS */ \"./instructions/functionS.js\");\n/* harmony import */ var _functionT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionT */ \"./instructions/functionT.js\");\n/* harmony import */ var _firstPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firstPage */ \"./instructions/firstPage.js\");\n/* harmony import */ var _secondPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secondPage */ \"./instructions/secondPage.js\");\n/* harmony import */ var _thirdPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thirdPage */ \"./instructions/thirdPage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction instructions(value){\r\n\r\n     function directInstructionFunction(){\r\n           if(_instructions_instructionsObject__WEBPACK_IMPORTED_MODULE_0__.default.numberOfInstructionPage === 1){\r\n            (0,_firstPage__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n            document.querySelector(\".instructions__back\").classList.add(\"disabled-gray\");\r\n            document.querySelector(\".instructions__back\").setAttribute(\"disabled\",\"disabled\");\r\n            \r\n           } else if(_instructions_instructionsObject__WEBPACK_IMPORTED_MODULE_0__.default.numberOfInstructionPage === 2){\r\n            (0,_secondPage__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n            document.querySelector(\".instructions__back\").classList.remove(\"disabled-gray\");\r\n            document.querySelector(\".instructions__next\").classList.remove(\"disabled-gray\");\r\n            if(document.querySelector(\".instructions__back\").hasAttribute(\"disabled\")){\r\n                document.querySelector(\".instructions__back\").removeAttribute(\"disabled\");\r\n            };\r\n            if(document.querySelector(\".instructions__next\").hasAttribute(\"disabled\")){\r\n                document.querySelector(\".instructions__next\").removeAttribute(\"disabled\"); \r\n            }\r\n           }\r\n           else if(_instructions_instructionsObject__WEBPACK_IMPORTED_MODULE_0__.default.numberOfInstructionPage === 3){\r\n            (0,_thirdPage__WEBPACK_IMPORTED_MODULE_5__.default)();\r\n            document.querySelector(\".instructions__next\").classList.add(\"disabled-gray\");\r\n            document.querySelector(\".instructions__next\").setAttribute(\"disabled\",\"disabled\");\r\n           }\r\n       }\r\n            if(value === \"start-game\"){\r\n                _instructions_instructionsObject__WEBPACK_IMPORTED_MODULE_0__.default.numberOfInstructionPage = 1;\r\n                setTimeout(_functionS__WEBPACK_IMPORTED_MODULE_1__.default, 500); \r\n            } else if (value === \"next\"){\r\n                _instructions_instructionsObject__WEBPACK_IMPORTED_MODULE_0__.default.numberOfInstructionPage++;\r\n                setTimeout(directInstructionFunction, 500); \r\n            }else if (value === \"back\"){\r\n                _instructions_instructionsObject__WEBPACK_IMPORTED_MODULE_0__.default.numberOfInstructionPage--;\r\n                setTimeout(directInstructionFunction, 500); \r\n            }\r\n\r\nreturn;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./instructions/instructins.js?");

/***/ }),

/***/ "./instructions/instructionsObject.js":
/*!********************************************!*\
  !*** ./instructions/instructionsObject.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst instructionsObject = {\r\nbuttonPressedValue:\"\",\r\nnumberOfInstructionPage:1,\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instructionsObject);\n\n//# sourceURL=webpack://raindrops/./instructions/instructionsObject.js?");

/***/ }),

/***/ "./instructions/secondPage.js":
/*!************************************!*\
  !*** ./instructions/secondPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ secondPage\n/* harmony export */ });\n/* harmony import */ var _addDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDrop */ \"./instructions/addDrop.js\");\n/* harmony import */ var _instructins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructins */ \"./instructions/instructins.js\");\n\r\n\r\nfunction secondPage(){\r\n    const instructionsText = document.querySelector(\".instructions__text-holder\");\r\n    instructionsText.innerText = \"The game is over when three raindrops reach the water level\";\r\n    (0,_addDrop__WEBPACK_IMPORTED_MODULE_0__.default)(\"3+6\");\r\n    const timqrId1 = setTimeout(_addDrop__WEBPACK_IMPORTED_MODULE_0__.default, 200, \"10-8\");\r\n    const timqrId2 = setTimeout(_addDrop__WEBPACK_IMPORTED_MODULE_0__.default, 500, \"22/11\");\r\n\r\n    function help(e){\r\n        if(e.target.classList.contains(\"instructions__button\")){\r\n            const seaTop = document.querySelector(\".seapart__sea-level\");\r\n            seaTop.style.height = \"10%\";\r\n            clearTimeout(timqrId1);\r\n            clearTimeout(timqrId2);\r\n            let allCirciles = document.querySelectorAll(\".circule\");\r\n            allCirciles.forEach((eachCircule)=>{\r\n                eachCircule.remove();\r\n            })\r\n            ;(0,_instructins__WEBPACK_IMPORTED_MODULE_1__.default)(e.target.value);\r\n            return;\r\n        }\r\n    }\r\n\r\n        document.querySelector(\".instructions\").addEventListener(\"click\", help, \"click\");\r\n \r\n   \r\n\r\n    setTimeout(() => {\r\n        document.querySelector(\".instructions\").removeEventListener(\"click\", help, \"click\");\r\n    }, 5000);\r\n   \r\n}\n\n//# sourceURL=webpack://raindrops/./instructions/secondPage.js?");

/***/ }),

/***/ "./instructions/thirdPage.js":
/*!***********************************!*\
  !*** ./instructions/thirdPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ thirdPage\n/* harmony export */ });\n/* harmony import */ var _instructins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructins */ \"./instructions/instructins.js\");\n/* harmony import */ var _addDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDrop */ \"./instructions/addDrop.js\");\n\r\n\r\nfunction thirdPage(){\r\n    const instructionsText = document.querySelector(\".instructions__text-holder\");\r\n    instructionsText.innerText = \"Suns are bonuses! Solve the equation inside the sun and all the raindrops dry up. If sun reaches the water, it doesn't count against you.\";\r\n    (0,_addDrop__WEBPACK_IMPORTED_MODULE_1__.default)(\"3+6\");\r\n    const timqrId1 = setTimeout(_addDrop__WEBPACK_IMPORTED_MODULE_1__.default, 200, \"10-8\");\r\n    const timqrId2 = setTimeout(_addDrop__WEBPACK_IMPORTED_MODULE_1__.default, 500, \"22/11\", \"yellow\");\r\n\r\n    const chosen2 = document.querySelector(\".chosen2\");\r\n    const timqrId3 = setTimeout(addColor, 3000,chosen2);\r\n\r\n    function addColor(button){\r\n        function addColorInner(){\r\n            button.classList.remove(\"yellow-key\");\r\n            button.removeEventListener(\"transitionend\",addColorInner)\r\n        }\r\n        button.classList.add(\"yellow-key\");\r\n        if(document.querySelector(\".enterpart__play-panel__screen\").innerText !== \"2\"){\r\n        setTimeout(()=>{document.querySelector(\".enterpart__play-panel__screen\").innerText = 2;\r\n    }, 3000); \r\n} else{\r\n    setTimeout(()=>{document.querySelector(\".enterpart__play-panel__screen\").innerText = \" \";\r\n    }, 3000); \r\n}\r\n    button.addEventListener(\"transitionend\",addColorInner)\r\n    } \r\n\r\n    const enter = document.querySelector(\".enter\");\r\n    const timqrId4 = setTimeout(addColor, 5000,enter);\r\n    setTimeout(() => {\r\n        enter.classList.remove(\"yellow-key\");\r\n        document.querySelector(\".enterpart__play-panel__screen\").innerText = \" \";\r\n    }, 10000); \r\n\r\n\r\n    function helper(event){\r\n        if(event.target.classList.contains(\"instructions__button\")){\r\n            clearTimeout(timqrId1);\r\n            clearTimeout(timqrId2);\r\n            clearTimeout(timqrId3);\r\n            clearTimeout(timqrId4);\r\n            let allCirciles = document.querySelectorAll(\".circule\");\r\n            allCirciles.forEach((eachCircule)=>{\r\n                eachCircule.remove();\r\n            })\r\n            ;(0,_instructins__WEBPACK_IMPORTED_MODULE_0__.default)(event.target.value);\r\n            return;\r\n        }\r\n    }\r\n\r\n        document.querySelector(\".instructions\").addEventListener(\"click\", helper, \"click\");\r\n  \r\n   \r\n    setTimeout(() => {\r\n        document.querySelector(\".instructions\").removeEventListener(\"click\", helper, \"click\");\r\n    }, 5000);\r\n   \r\n}\n\n//# sourceURL=webpack://raindrops/./instructions/thirdPage.js?");

/***/ }),

/***/ "./mainObject/mainObject.js":
/*!**********************************!*\
  !*** ./mainObject/mainObject.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Enter_Object_Observer_enterCatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Enter-Object-Observer/enterCatcher */ \"./Enter-Object-Observer/enterCatcher.js\");\n/* harmony import */ var _Drop_Object_mathExpressionProduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drop-Object/mathExpressionProduce */ \"./Drop-Object/mathExpressionProduce.js\");\n/* harmony import */ var _Drop_Object_getRandomInt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Drop-Object/getRandomInt */ \"./Drop-Object/getRandomInt.js\");\n/* harmony import */ var _Drop_Object_circuleAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Drop-Object/circuleAdd */ \"./Drop-Object/circuleAdd.js\");\n\r\n\r\n\r\n\r\n\r\nconst mainObject = {\r\n  shouldConyinueGame : true,\r\n  dropSpeed:\"60s\",//Функция, которая изменяет скорость в зависимости от количества очков\r\n  seaLevel: \"\",\r\n  score: 0,\r\n  pointsToAdd:10,\r\n  operationsSet:\"+\",\r\n  rangeofNumbers:10,\r\n  timerId: 5000,\r\n  drop:{\r\n      operand1: 0,\r\n      operand2: 0,\r\n      operator:\"+\",\r\n      expectedResultOfExpression:[],\r\n    },\r\n    dropsAmount:0,\r\n    correctlySolved:0,\r\n    solvedWithMistake:0,\r\n    follenToSea:0,\r\n    isYallowDrop:false,\r\n    yellowDropExpressionResult:0,\r\n    loseGameCount: 0,\r\n    expectedResult:[],\r\n};\r\n\r\nlet end = false;\r\nmainObject.drop.isContinue = function isContinueGame(){\r\n  (0,_Drop_Object_mathExpressionProduce__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n  \r\n  if(mainObject.shouldConyinueGame){\r\n\r\n    if(+mainObject.score > 250){\r\n      mainObject.timerId = 2000;\r\n    } else if(+mainObject.score > 150){\r\n      mainObject.timerId = 2000;\r\n    } else if(+mainObject.score > 100){\r\n      mainObject.timerId = 3500;\r\n    } \r\n\r\n    mainObject.drop.operand1 =(0,_Drop_Object_getRandomInt__WEBPACK_IMPORTED_MODULE_2__.default)(1,+mainObject.rangeofNumbers);\r\n    function isGoodNumber(){\r\n      if(mainObject.drop.operator === \"/\"){\r\n        if(! (+mainObject.drop.operand1 % 2)){\r\n        } else{\r\n          mainObject.drop.operand1 = +mainObject.drop.operand1 -1;\r\n        }\r\n        mainObject.drop.expectedResult = mainObject.drop.operand1 + mainObject.drop.operator +\"2\";\r\n      } else {\r\n        mainObject.drop.operand2 = (0,_Drop_Object_getRandomInt__WEBPACK_IMPORTED_MODULE_2__.default)(1,+mainObject.drop.operand1);\r\n        mainObject.drop.expectedResult = mainObject.drop.operand1 + mainObject.drop.operator + mainObject.drop.operand2;\r\n      }\r\n    }\r\n    isGoodNumber();\r\n    \r\nmainObject.drop.addDrop = (0,_Drop_Object_circuleAdd__WEBPACK_IMPORTED_MODULE_3__.default)(mainObject.drop.expectedResult, mainObject.loseGameCount);//Добавляем каплю на экран\r\nconst v1 = function(){//Рандомное выражение доб. в каплю\r\n  mainObject.drop.addDrop.innerText = mainObject.drop.expectedResult;\r\n  const expectedResult1 = eval(mainObject.drop.addDrop.innerText);\r\n  return expectedResult1;\r\n        }\r\n        if(document.querySelectorAll(\".circule\")[document.querySelectorAll(\".circule\").length -1].classList.contains(\"circule-yellow\")){\r\n          mainObject.yellowDropExpressionResult = v1();\r\n        } else{\r\n          mainObject.drop.showExpectedResult =  v1();   \r\n          mainObject.drop.expectedResultOfExpression.push(mainObject.drop.showExpectedResult);//Записываем ожидаемый результат  \r\n        }\r\n        \r\nmainObject.drop.catchUsersValue = (0,_Enter_Object_Observer_enterCatcher__WEBPACK_IMPORTED_MODULE_0__.default)(mainObject.timerId);//Записываем и сравниваем ожидаемый результат со введенным Потом можно засунуть в отдельный объект\r\nif(end === false){\r\n  setTimeout( isContinueGame, mainObject.timerId);\r\n}\r\n  }else {\r\n    document.querySelector(\".game-over\").innerText = `${mainObject.score} points \\n Amount of drops: ${mainObject.dropsAmount}\\n Solved correctly: ${mainObject.correctlySolved} \\n Solved with mistake: ${mainObject.solvedWithMistake}\\n Foll to the Sea: ${mainObject.follenToSea}`;\r\n    document.querySelector(\".game-over\").classList.remove(\"game-nondisplay\");\r\n    return;\r\n  }\r\n      }\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainObject);\n\n//# sourceURL=webpack://raindrops/./mainObject/mainObject.js?");

/***/ }),

/***/ "./mainObject/start.js":
/*!*****************************!*\
  !*** ./mainObject/start.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ startGame\n/* harmony export */ });\n/* harmony import */ var _mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainObject */ \"./mainObject/mainObject.js\");\n/* harmony import */ var _Drop_Object_getRandomInt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drop-Object/getRandomInt */ \"./Drop-Object/getRandomInt.js\");\n/* harmony import */ var _Drop_Object_mathExpressionProduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Drop-Object/mathExpressionProduce */ \"./Drop-Object/mathExpressionProduce.js\");\n/* harmony import */ var _instructions_functionS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../instructions/functionS */ \"./instructions/functionS.js\");\n/* harmony import */ var _instructions_functionT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../instructions/functionT */ \"./instructions/functionT.js\");\n\r\n\r\n\r\n\r\n\r\nfunction startGame(){\r\n  const checkedOperationHolder = document.querySelector(\".mathOperations\");\r\n  const checkedOperatios = checkedOperationHolder.querySelectorAll(\"input\");\r\n  checkedOperationHolder.addEventListener(\"click\",oper,event);\r\n  function oper(e){\r\n          checkedOperatios.forEach((operation)=>{\r\n                      if(operation.checked){\r\n                          operation.removeAttribute(\"checked\",\"checked\");\r\n                      }\r\n                 })\r\n          e.target.setAttribute(\"checked\",\"checked\");\r\n          _mainObject__WEBPACK_IMPORTED_MODULE_0__.default.operationsSet = e.target.value;\r\n          (0,_Drop_Object_mathExpressionProduce__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n          return _mainObject__WEBPACK_IMPORTED_MODULE_0__.default.operationsSet;\r\n      }\r\n  \r\n      const numbersRange = document.querySelector(\".numbersRange\");\r\n      const numbersRangeS = numbersRange.querySelectorAll(\"input\");\r\n      numbersRange.addEventListener(\"click\",numbers,event);\r\n        function numbers(e){\r\n          numbersRangeS.forEach((num)=>{\r\n                            if(num.checked){\r\n                                num.removeAttribute(\"checked\",\"checked\");\r\n                            }\r\n                       })\r\n                e.target.setAttribute(\"checked\",\"checked\");\r\n                _mainObject__WEBPACK_IMPORTED_MODULE_0__.default.rangeofNumbers = e.target.value;\r\n                (0,_Drop_Object_getRandomInt__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n                return  _mainObject__WEBPACK_IMPORTED_MODULE_0__.default.rangeofNumbers;\r\n            }\r\n            numbersRange.removeEventListener(\"click\",numbers,event);\r\n\r\n    const startGame = document.querySelector(\".game-start\");\r\n    startGame.addEventListener(\"click\",(e)=>{\r\n        if(e.target.value === \"start-game\"){\r\n           (0,_instructions_functionS__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n           startGame.classList.add(\"game-nondisplay\");\r\n        } else if(e.target.value === \"start-demo\"){\r\n          (0,_instructions_functionT__WEBPACK_IMPORTED_MODULE_4__.default)(); \r\n          startGame.classList.add(\"game-nondisplay\");\r\n        }\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./mainObject/start.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;