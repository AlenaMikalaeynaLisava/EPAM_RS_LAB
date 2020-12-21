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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ballFallTheSea\n/* harmony export */ });\nfunction ballFallTheSea(circule){\r\n    // const ballBottom = document.querySelector(\".sircule\");\r\n    const seaTop = document.querySelector(\".seapart__sea-level\");\r\n    // alert(ballBottom.getBoundingClientRect().top);\r\n    // alert(seaTop.getBoundingClientRect().bottom);\r\n    const a = function(){\r\n    if(seaTop.getBoundingClientRect().top >= circule.getBoundingClientRect().bottom){\r\n       setTimeout(a, 1000);\r\n       return;\r\n    } else{\r\n        alert(\"Упал в море\");\r\n        //setTimeout(() => { clearInterval(timerId)}, 0);\r\n        // setTimeout(() => { clearInterval(timerId)}, 0);\r\n        return;\r\n    }\r\n\r\n    }\r\n    a();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./Drop-Object/ballFallTheSea.js?");

/***/ }),

/***/ "./Drop-Object/circuleAdd.js":
/*!***********************************!*\
  !*** ./Drop-Object/circuleAdd.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ circuleAdd\n/* harmony export */ });\n/* harmony import */ var _Enter_Object_Observer_enterCatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Enter-Object-Observer/enterCatcher */ \"./Enter-Object-Observer/enterCatcher.js\");\n/* harmony import */ var _showRendomExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showRendomExpression */ \"./Drop-Object/showRendomExpression.js\");\n/* harmony import */ var _circuleDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circuleDrop */ \"./Drop-Object/circuleDrop.js\");\n// import ballFallTheSea from \"./ballFallTheSea\";\r\n\r\n\r\n\r\nfunction circuleAdd(){\r\n    const circule = document.createElement(\"div\");\r\n    const mathOperation = document.createElement(\"div\");\r\n    // const btn = document.querySelector(\".button\");\r\n    const sea = document.querySelector(\".seapart\");\r\n    circule.classList.add(\"sircule\");\r\n    sea.append(circule);\r\n    circule.append(mathOperation);\r\n   const a = (0,_Enter_Object_Observer_enterCatcher__WEBPACK_IMPORTED_MODULE_0__.default)((0,_showRendomExpression__WEBPACK_IMPORTED_MODULE_1__.default)(mathOperation));\r\n   \r\n    const f = function(){\r\n        circule.classList.add(\"top\");\r\n    }\r\n     timeFrame(f);\r\n\r\n    function timeFrame(fn){\r\n        window.requestAnimationFrame(\r\n            function(){\r\n                window.requestAnimationFrame(\r\n                    function(){\r\n                        fn();\r\n                    }\r\n                )\r\n            }\r\n        )\r\n    }\r\n\r\n    circule.addEventListener(\"transitionend\",(0,_circuleDrop__WEBPACK_IMPORTED_MODULE_2__.default)(circule));\r\n//\r\n    // circule.addEventListener('click',()=>{\r\n    //     event.target.classList.add(\"bottom\");\r\n    // })\r\n    // ballFallTheSea();\r\n}\n\n//# sourceURL=webpack://raindrops/./Drop-Object/circuleAdd.js?");

/***/ }),

/***/ "./Drop-Object/circuleDrop.js":
/*!************************************!*\
  !*** ./Drop-Object/circuleDrop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ circuleDrop\n/* harmony export */ });\n/* harmony import */ var _ballFallTheSea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballFallTheSea */ \"./Drop-Object/ballFallTheSea.js\");\n\r\nfunction circuleDrop(circule){\r\n    // const circule = document.querySelector(\".sircule\");\r\n    //     circule.addEventListener('click',()=>{\r\n    //     circule.classList.add(\"bottom\");\r\n    // })\r\n \r\n        circule.classList.add(\"bottom\");\r\n   \r\n    // setTimeout(function(){\r\n    //     alert(\"it's here\");\r\n    //     circule.classList.add(\"bottom\");\r\n    // }, 100)\r\n        // circule.classList.add(\"bottom\");\r\n\r\n    (0,_ballFallTheSea__WEBPACK_IMPORTED_MODULE_0__.default)(circule);\r\n}\n\n//# sourceURL=webpack://raindrops/./Drop-Object/circuleDrop.js?");

/***/ }),

/***/ "./Drop-Object/getOperation.js":
/*!*************************************!*\
  !*** ./Drop-Object/getOperation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ getOperation\n/* harmony export */ });\nfunction getOperation(operationsToUse){\r\n    const randomOperation = Math.floor(Math.random()*operationsToUse.length);\r\n    const operation = operationsToUse[randomOperation];\r\n    return operation;\r\n}\n\n//# sourceURL=webpack://raindrops/./Drop-Object/getOperation.js?");

/***/ }),

/***/ "./Drop-Object/getRandomInt.js":
/*!*************************************!*\
  !*** ./Drop-Object/getRandomInt.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ getRandomInt\n/* harmony export */ });\nfunction getRandomInt(min, max) {\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n    return Math.floor(Math.random() * (max - min)) + min;\r\n  }\n\n//# sourceURL=webpack://raindrops/./Drop-Object/getRandomInt.js?");

/***/ }),

/***/ "./Drop-Object/mathExpressionProduce.js":
/*!**********************************************!*\
  !*** ./Drop-Object/mathExpressionProduce.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ mathExpressionProduse\n/* harmony export */ });\n/* harmony import */ var _getOperation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOperation */ \"./Drop-Object/getOperation.js\");\n\r\n\r\nfunction mathExpressionProduse(){\r\n    const operations =[\"+\", \"-\", \"*\", \"/\"];\r\n    const currentScore = document.querySelector(\".enterpart__score__score-value\");\r\n    if(+currentScore.innerText <= 50){\r\n        return (0,_getOperation__WEBPACK_IMPORTED_MODULE_0__.default)(operations.slice(0, 1));\r\n    } else if(+currentScore.innerText<90){\r\n        return (0,_getOperation__WEBPACK_IMPORTED_MODULE_0__.default)(operations.slice(0, 2));\r\n    } else if(+currentScore.innerText<140){\r\n        return (0,_getOperation__WEBPACK_IMPORTED_MODULE_0__.default)(operations.slice(0, 3));\r\n    } else {\r\n        return (0,_getOperation__WEBPACK_IMPORTED_MODULE_0__.default)(operations);\r\n    }\r\n    }\n\n//# sourceURL=webpack://raindrops/./Drop-Object/mathExpressionProduce.js?");

/***/ }),

/***/ "./Drop-Object/showRendomExpression.js":
/*!*********************************************!*\
  !*** ./Drop-Object/showRendomExpression.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ showRendomExpression\n/* harmony export */ });\n/* harmony import */ var _mathExpressionProduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathExpressionProduce */ \"./Drop-Object/mathExpressionProduce.js\");\n/* harmony import */ var _getRandomInt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRandomInt */ \"./Drop-Object/getRandomInt.js\");\n\r\n\r\nfunction showRendomExpression(mathOperation){\r\n// const rendomOperationShow = document.querySelector(\".seapart__math-operation\");\r\n// Проверка на целочисленное деление, т.к. у польз-ля нет дробных чисел\r\nmathOperation.innerText = (0,_getRandomInt__WEBPACK_IMPORTED_MODULE_1__.default)(1, 100) + (0,_mathExpressionProduce__WEBPACK_IMPORTED_MODULE_0__.default)() + (0,_getRandomInt__WEBPACK_IMPORTED_MODULE_1__.default)(1, 100);\r\nconst expectedResult = eval(mathOperation.innerText);\r\nreturn expectedResult;\r\n    }\n\n//# sourceURL=webpack://raindrops/./Drop-Object/showRendomExpression.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ enterButton\n/* harmony export */ });\n// import showRendomExpression from \"../Drop-Object/showRendomExpression\";\r\nfunction enterButton(){\r\n    const expectedResult = 0;\r\n    const enterpart = document.querySelector(\".enterpart__play-panel__screen\");\r\n    const scoreScreen = document.querySelector(\".enterpart__score__score-value\");\r\n    if(+ enterpart.innerText === expectedResult){\r\n        scoreScreen.innerText = +scoreScreen.innerText + 10;\r\n    }else {\r\n        scoreScreen.innerText = +scoreScreen.innerText - 10;\r\n    }\r\n    enterpart.innerText = \"\"\r\n    }\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/enterButton.js?");

/***/ }),

/***/ "./Enter-Object-Observer/enterCatcher.js":
/*!***********************************************!*\
  !*** ./Enter-Object-Observer/enterCatcher.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ lis\n/* harmony export */ });\n/* harmony import */ var _numberPress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberPress */ \"./Enter-Object-Observer/numberPress.js\");\n/* harmony import */ var _deleteLastNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteLastNumber */ \"./Enter-Object-Observer/deleteLastNumber.js\");\n/* harmony import */ var _enterButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enterButton */ \"./Enter-Object-Observer/enterButton.js\");\n// import { NoEmitOnErrorsPlugin } from \"webpack\";\r\n\r\n\r\n\r\n\r\nfunction lis(){\r\n    const buttonsHolder = document.querySelector(\".enterpart__play-panel__buttons-holder\");\r\n    const currrentNumber = \"\";\r\n    \r\n    \r\n    const buttonOnClick = (e)=>{\r\n        if(e.target.classList.contains(\"number\")||e.target.classList.contains(\"ziro\")){\r\n            (0,_numberPress__WEBPACK_IMPORTED_MODULE_0__.default)(e.target.textContent);\r\n        } else if (e.target.classList.contains(\"clear\")){\r\n            (0,_deleteLastNumber__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n        }else if (e.target.classList.contains(\"delete\")){\r\n            (0,_deleteLastNumber__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n        }else if (e.target.classList.contains(\"enter\")){\r\n            (0,_enterButton__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n        }\r\n    }\r\n    \r\n    // const numberPress = (number) => {\r\n    //     alert(number);\r\n    // }\r\n    // const clearScreen = (clear) => {\r\n    //     alert(clear);\r\n    // }\r\n    // const deleteLastNumber = (number) => {\r\n    //     alert(number);\r\n    // }\r\n    // const enterButton = () => {\r\n    //     alert(\"enter\");\r\n    // }\r\n    \r\n    \r\n    // //Numper press\r\n    // const numberPress = (number) => {\r\n\r\n        \r\n    //     if (active === \"number1\"){\r\n    //         number1 += number;\r\n    //         currentResult = number1;\r\n    //         if (regexp.test(number1)){\r\n    //             disableButton(document.querySelector(\".decimal-sign\"));\r\n    //         }\r\n    //     } else {\r\n    //         number2 += number;\r\n    //         if (regexp.test(number2)){\r\n    //             disableButton(document.querySelector(\".decimal-sign\"))\r\n    //         }\r\n    //     }   \r\n    //     previousOpperation = \"number\";\r\n    //     calculatorShowAll.textContent += number;\r\n    //     calculatorShow.textContent += number;\r\n    // }\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    // //Clear the screen\r\n    // const cleanOperationPressed = (clean) => {\r\n    //     if(clean === \"ce\"){\r\n    //    calculatorShowAll.textContent = \"0\";\r\n    //     calculatorShow.textContent = \"0\";\r\n    //     number1 = \" \";\r\n    //     active = \"number1\";\r\n    //     sign = currentSign = \"\";\r\n    //     number2 = \"\";\r\n    //     currentResult = 0;\r\n    //     previousOpperation = \"cleanOperation\"; \r\n    //     } else {\r\n    //         if(previousOpperation === \"number\"){\r\n    //             if (active === \"number1\"){\r\n    //                 number1 = number1.slice(0, number1.length-1);\r\n    //                calculatorShowAll.textContent  = calculatorShowAll.  textContent.slice(0, calculatorShowAll.textContent.length-1);\r\n    //                 calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);\r\n    //             } else{\r\n    //                 number2 = number2.slice(0, number2.length-1);\r\n    //                calculatorShowAll.textContent  = calculatorShowAll.textContent.slice(0, calculatorShowAll.textContent.length-1);\r\n    //                 calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);\r\n    //             }\r\n    //         }else if (previousOpperation === \"simpleOperation\"){\r\n    //             sign = \"\";\r\n    //            calculatorShowAll.textContent  = calculatorShowAll.textContent.slice(0, calculatorShowAll.textContent.length-1);\r\n    //             calculatorShow.textContent  = calculatorShow.textContent.slice(0, calculatorShow.textContent.length-1);\r\n    //         }\r\n    //      previousOpperation = \"cleanLastOperation\"; \r\n    //     }\r\n    // }\r\n    \r\n    \r\n    // //Result\r\n    // const resultOperationPressed = (currentSign) => {\r\n    //     simpleOperationPressed(currentSign);\r\n    //    calculatorShowAll.textContent = currentResult;\r\n    //     calculatorShow.textContent = currentResult;\r\n    //     number1 = \" \";\r\n    //     active = \"number1\";\r\n    //     sign = currentSign = \"\";\r\n    //     number2 = \"\";\r\n    //     previousOpperation = \"resultOperation\"; \r\n    //     disableButton(document.querySelector(\".disabled-clean\"));\r\n    // } \r\n    \r\n    buttonsHolder.addEventListener(\"click\", buttonOnClick);\r\n}\r\n\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/enterCatcher.js?");

/***/ }),

/***/ "./Enter-Object-Observer/numberPress.js":
/*!**********************************************!*\
  !*** ./Enter-Object-Observer/numberPress.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ numberPress\n/* harmony export */ });\nfunction numberPress(value){\r\n    alert(value);\r\n    const enterpart = document.querySelector(\".enterpart__play-panel__screen\");\r\n    enterpart.innerText += value;\r\n}\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/numberPress.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Enter_Object_Observer_enterCatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enter-Object-Observer/enterCatcher */ \"./Enter-Object-Observer/enterCatcher.js\");\n/* harmony import */ var _Drop_Object_showRendomExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drop-Object/showRendomExpression */ \"./Drop-Object/showRendomExpression.js\");\n/* harmony import */ var _Drop_Object_circuleAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drop-Object/circuleAdd */ \"./Drop-Object/circuleAdd.js\");\n\r\n\r\n// import circuleDrop from \"./Drop-Object/circuleDrop\";\r\n\r\n// showRendomExpression();\r\n// lis(showRendomExpression(mathOperation));\r\n// circuleDrop();\r\n(0,_Drop_Object_circuleAdd__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./index.js?");

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