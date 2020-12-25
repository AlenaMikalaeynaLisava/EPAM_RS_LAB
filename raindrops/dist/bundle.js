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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ballFallTheSea\n/* harmony export */ });\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainObject/mainObject */ \"./mainObject/mainObject.js\");\n\r\n\r\nfunction ballFallTheSea(circule){\r\n    const seaTop = document.querySelector(\".seapart__sea-level\");\r\n    const a = function(){\r\n    if(seaTop.getBoundingClientRect().top >= circule.getBoundingClientRect().bottom){\r\n       setTimeout(a, 1000);\r\n    } else{\r\n        circule.classList.add(\"circule-disappear\");\r\n        setTimeout(() => { circule.remove()}, 1000); \r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.drop.expectedResultOfExpression.shift();\r\n        if(!seaTop.style.height){\r\n            seaTop.style.height = \"20%\"\r\n            console.log(seaTop.style.height.slice(0, +seaTop.style.height.length-1));\r\n        } else{\r\n            seaTop.style.height = seaTop.style.height.slice(0, +seaTop.style.height.length-1)*2 +\"%\";\r\n        }\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.loseGameCount ++;\r\n        if (_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.loseGameCount === 3){\r\n            _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.shouldConyinueGame = false;\r\n        }\r\n        return true;\r\n        }\r\n\r\n    }\r\n    a();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./Drop-Object/ballFallTheSea.js?");

/***/ }),

/***/ "./Drop-Object/circuleAdd.js":
/*!***********************************!*\
  !*** ./Drop-Object/circuleAdd.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ circuleAdd\n/* harmony export */ });\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainObject/mainObject */ \"./mainObject/mainObject.js\");\n/* harmony import */ var _Drop_Object_ballFallTheSea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drop-Object/ballFallTheSea */ \"./Drop-Object/ballFallTheSea.js\");\n\r\n\r\nfunction circuleAdd(expectedResult, counter){\r\n    const circule = document.createElement(\"div\");\r\n    circule.style.transitionDuration = _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropSpeed;\r\n    const dropHolder = document.querySelector(\".circule-holder\");\r\n    // console.log(document.querySelector(\".circule-holder\").childNodes.length);\r\n\r\n    // circule.style.marginLeft = (Math.floor(Math.random() * (20 - 1)) + 10) + \"%\";\r\n    // console.log(circule.style.transitionDuration);\r\n    const mathOperation = document.createElement(\"div\");\r\n    const sea = document.querySelector(\".seapart\");\r\n    circule.classList.add(\"circule\");\r\n    // if(dropHolder.childNodes.length%2){\r\n        // circule.style.left = (Math.floor(Math.random() * (40 - 2)) + 40) + \"%\";\r\n        circule.style.left = (Math.floor(Math.random() * Math.floor(90)))+ \"%\";\r\n        console.log(circule.style.marginLeft);\r\n    // }else{\r\n    //     circule.style.right = (Math.floor(Math.random() * (20 - 1)) + 20) + \"%\";\r\n    //     console.log(circule.style.marginRight);\r\n    // }\r\n    dropHolder.append(circule);\r\n    mathOperation.innerText= expectedResult;\r\n    \r\n    circule.append(mathOperation);\r\n    const f = function(){\r\n        circule.classList.add(\"bottom\");\r\n        (0,_Drop_Object_ballFallTheSea__WEBPACK_IMPORTED_MODULE_1__.default)(circule, counter);\r\n    }\r\n     timeFrame(f);\r\n\r\n    function timeFrame(fn){\r\n        window.requestAnimationFrame(\r\n            function(){\r\n                fn();\r\n            }\r\n        )\r\n    }\r\n    return mathOperation;\r\n}\n\n//# sourceURL=webpack://raindrops/./Drop-Object/circuleAdd.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ mathExpressionProduse\n/* harmony export */ });\n/* harmony import */ var _getOperation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOperation */ \"./Drop-Object/getOperation.js\");\n\r\n\r\nfunction mathExpressionProduse(){\r\n    const operations =[\"+\", \"-\", \"*\", \"/\"];\r\n    const currentScore = document.querySelector(\".enterpart__score__score-value\");\r\n    if(+currentScore.innerText <= 30){\r\n        return (0,_getOperation__WEBPACK_IMPORTED_MODULE_0__.default)(operations.slice(0, 1));\r\n    } else if(+currentScore.innerText<70){\r\n        return (0,_getOperation__WEBPACK_IMPORTED_MODULE_0__.default)(operations.slice(0, 2));\r\n    } else {\r\n        return (0,_getOperation__WEBPACK_IMPORTED_MODULE_0__.default)(operations.slice(0, 3));\r\n    }\r\n    // if(+currentScore.innerText<100){\r\n    //     return getOperation(operations.slice(0, 3));\r\n    // } else {\r\n    //     return getOperation(operations);\r\n    // }\r\n    }\n\n//# sourceURL=webpack://raindrops/./Drop-Object/mathExpressionProduce.js?");

/***/ }),

/***/ "./Drop-Object/showRendomExpression.js":
/*!*********************************************!*\
  !*** ./Drop-Object/showRendomExpression.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ showRendomExpression\n/* harmony export */ });\n// import mathExpressionProduse from \"./mathExpressionProduce\";\r\n// import getRandomInt from \"./getRandomInt\";\r\nfunction showRendomExpression(mathOperation, operand1, operand2, operator){\r\n// const rendomOperationShow = document.querySelector(\".seapart__math-operation\");\r\n// Проверка на целочисленное деление, т.к. у польз-ля нет дробных чисел\r\n// mathOperation.innerText = getRandomInt(1, 100) + mathExpressionProduse() + getRandomInt(1, 100);\r\nmathOperation.innerText = operand1 + operator + operand2;\r\nconst expectedResult = eval(mathOperation.innerText);\r\nreturn expectedResult;\r\n    }\n\n//# sourceURL=webpack://raindrops/./Drop-Object/showRendomExpression.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ enterButton\n/* harmony export */ });\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainObject/mainObject */ \"./mainObject/mainObject.js\");\n\r\nfunction enterButton(){\r\n    const enterpart = document.querySelector(\".enterpart__play-panel__screen\");\r\n    const scoreScreen = document.querySelector(\".enterpart__score__score-value\");\r\n    const aproved = document.querySelector(\".aproved\");\r\n    const refused = document.querySelector(\".refused\");\r\n    const circule = document.querySelector(\".circule\");\r\n    console.log(_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.drop.expectedResultOfExpression);\r\n    //console.log(mainObject.drop.expectedResultOfExpression.shift());\r\n    if(+ enterpart.innerText === _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.drop.expectedResultOfExpression.shift()){\r\n        scoreScreen.innerText = +scoreScreen.innerText + _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.pointsToAdd;\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.pointsToAdd++;\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score = +scoreScreen.innerText;\r\n        console.log(_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score);\r\n        if(_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score >= 50){\r\n            _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropSpeed = \"6s\";\r\n        }else if (_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score >= 30){\r\n                _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropSpeed = \"10s\";\r\n            } else if(_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score >= 20){\r\n                _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropSpeed = \"15s\";\r\n            } else if (_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score >= 10){\r\n                _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.dropSpeed = \"20s\";\r\n            }\r\n        aproved.play();\r\n        circule.remove();\r\n    }else {\r\n        scoreScreen.innerText = +scoreScreen.innerText - _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.pointsToAdd;\r\n        _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_0__.default.score = +scoreScreen.innerText;\r\n        refused.play();\r\n        circule.remove();\r\n    }\r\n    \r\n    enterpart.innerText = \" \";\r\n    }\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/enterButton.js?");

/***/ }),

/***/ "./Enter-Object-Observer/enterCatcher.js":
/*!***********************************************!*\
  !*** ./Enter-Object-Observer/enterCatcher.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ enterCatcher\n/* harmony export */ });\n/* harmony import */ var _numberPress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberPress */ \"./Enter-Object-Observer/numberPress.js\");\n/* harmony import */ var _clearScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearScreen */ \"./Enter-Object-Observer/clearScreen.js\");\n/* harmony import */ var _deleteLastNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteLastNumber */ \"./Enter-Object-Observer/deleteLastNumber.js\");\n/* harmony import */ var _enterButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enterButton */ \"./Enter-Object-Observer/enterButton.js\");\n// import { NoEmitOnErrorsPlugin } from \"webpack\";\r\n\r\n\r\n\r\n\r\nfunction enterCatcher(timerId)  {\r\n    const buttonsHolder = document.querySelector(\".enterpart__play-panel__buttons-holder\");\r\n    // const currrentNumber = \"\";\r\n    \r\n    const buttonOnClick = (e)=>{\r\n        if(e.target.classList.contains(\"number\")||e.target.classList.contains(\"ziro\")){\r\n            (0,_numberPress__WEBPACK_IMPORTED_MODULE_0__.default)(e.target.textContent);\r\n        } else if (e.target.classList.contains(\"clear\")){\r\n            (0,_clearScreen__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n        }else if (e.target.classList.contains(\"delete\")){\r\n            (0,_deleteLastNumber__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n        }else if (e.target.classList.contains(\"enter\")){\r\n            (0,_enterButton__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n        }\r\n    }\r\n    \r\n    \r\n    buttonsHolder.addEventListener(\"click\", buttonOnClick);\r\n const removeEv = function(){\r\n    buttonsHolder.removeEventListener(\"click\", buttonOnClick);\r\n }\r\n    setTimeout(removeEv, timerId);\r\n    // buttonsHolder.removeEventListener(\"click\", buttonOnClick);\r\n}\r\n\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/enterCatcher.js?");

/***/ }),

/***/ "./Enter-Object-Observer/numberPress.js":
/*!**********************************************!*\
  !*** ./Enter-Object-Observer/numberPress.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ numberPress\n/* harmony export */ });\nfunction numberPress(value){\r\n    const enterpart = document.querySelector(\".enterpart__play-panel__screen\");\r\n    enterpart.innerText += value;\r\n}\n\n//# sourceURL=webpack://raindrops/./Enter-Object-Observer/numberPress.js?");

/***/ }),

/***/ "./SeaPartObject/wave.js":
/*!*******************************!*\
  !*** ./SeaPartObject/wave.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ waveMove\n/* harmony export */ });\nfunction waveMove(){\r\n    // alert(\"Ia!\");\r\n    const wave = document.querySelector(\".wave\");\r\n    const addA = ()=>{\r\n        wave.classList.add(\"wave-left\");\r\n    }\r\n    \r\n    const removeA = function(){\r\n        wave.classList.remove(\"wave-left\");\r\n    }\r\n     timeFrame(addA);\r\n    \r\n    function timeFrame(fn){\r\n        window.requestAnimationFrame(\r\n            function(){\r\n                window.requestAnimationFrame(\r\n                    function(){\r\n                        fn();\r\n                    }\r\n                )\r\n            }\r\n        )\r\n    }  \r\n    wave.addEventListener(\"transitionend\",removeA);\r\n}\r\n\n\n//# sourceURL=webpack://raindrops/./SeaPartObject/wave.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Enter_Object_Observer_enterCatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enter-Object-Observer/enterCatcher */ \"./Enter-Object-Observer/enterCatcher.js\");\n/* harmony import */ var _Drop_Object_showRendomExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drop-Object/showRendomExpression */ \"./Drop-Object/showRendomExpression.js\");\n/* harmony import */ var _SeaPartObject_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SeaPartObject/wave */ \"./SeaPartObject/wave.js\");\n/* harmony import */ var _mainObject_start__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainObject/start */ \"./mainObject/start.js\");\n/* harmony import */ var _mainObject_mainObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainObject/mainObject */ \"./mainObject/mainObject.js\");\n\r\n\r\n// import circuleDrop from \"./Drop-Object/circuleDrop\";\r\n\r\n\r\n\r\n// showRendomExpression();\r\n// lis(showRendomExpression(mathOperation));\r\n// circuleDrop();\r\n\r\n// circuleAdd();\r\n//Добавить повторяемость пока игра не закончена\r\n// waveMove();\r\n\r\n// mainObject.drop.addDrop;\r\n// console.log(mainObject.drop.expectedResultOfExpression);\r\n// mainObject.drop.catchUsersValue;\r\n(0,_mainObject_start__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n// mainObject.drop.isContinue();\r\n// console.log(mainObject.loseGameCount);\r\n// console.log(mainObect.drop.expectedResult);\r\n// console.log(mainObect.drop.expectedResult);\r\n\r\n\r\n  (0,_SeaPartObject_wave__WEBPACK_IMPORTED_MODULE_2__.default)(); \r\n  // while (mainObject.shouldConyinueGame) {\r\n  //   setTimeout(waveMove, 2000);\r\n  // }\r\n\r\n  let timerId = setInterval(_SeaPartObject_wave__WEBPACK_IMPORTED_MODULE_2__.default, 22000);\r\nif(!_mainObject_mainObject__WEBPACK_IMPORTED_MODULE_4__.default.shouldConyinueGame){\r\n  setTimeout(() => { clearInterval(timerId)}, 0);\r\n}\r\n// остановить вывод через 5 секунд\r\n\r\n\n\n//# sourceURL=webpack://raindrops/./index.js?");

/***/ }),

/***/ "./mainObject/mainObject.js":
/*!**********************************!*\
  !*** ./mainObject/mainObject.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Enter_Object_Observer_enterButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Enter-Object-Observer/enterButton */ \"./Enter-Object-Observer/enterButton.js\");\n/* harmony import */ var _Drop_Object_showRendomExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Drop-Object/showRendomExpression */ \"./Drop-Object/showRendomExpression.js\");\n/* harmony import */ var _Enter_Object_Observer_enterCatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Enter-Object-Observer/enterCatcher */ \"./Enter-Object-Observer/enterCatcher.js\");\n/* harmony import */ var _Drop_Object_mathExpressionProduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Drop-Object/mathExpressionProduce */ \"./Drop-Object/mathExpressionProduce.js\");\n/* harmony import */ var _Drop_Object_getRandomInt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Drop-Object/getRandomInt */ \"./Drop-Object/getRandomInt.js\");\n/* harmony import */ var _Drop_Object_circuleAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Drop-Object/circuleAdd */ \"./Drop-Object/circuleAdd.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst mainObject = {\r\n  shouldConyinueGame : true,\r\n  dropSpeed:\"60s\",//Функция, которая изменяет скорость в зависимости от количества очков\r\n  seaLevel: 42,//Функция, которая изменяет скорость в зависимости от количества очков\r\n  score: 0,\r\n  pointsToAdd:1,\r\n  drop:{\r\n      operand1: 0,\r\n      operand2: 0,\r\n      operator:\"+\",\r\n      expectedResultOfExpression:[],\r\n    },\r\n    loseGameCount: 0,\r\n    expectedResult:[],\r\n};\r\nlet end = false;\r\nlet timerId = 5000;\r\nmainObject.drop.isContinue = function isContinueGame(){\r\n  if(mainObject.shouldConyinueGame){\r\n    mainObject.drop.operand1 =(0,_Drop_Object_getRandomInt__WEBPACK_IMPORTED_MODULE_4__.default)(1,20);\r\n    mainObject.drop.operator = (0,_Drop_Object_mathExpressionProduce__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n    mainObject.drop.operand2 = (0,_Drop_Object_getRandomInt__WEBPACK_IMPORTED_MODULE_4__.default)(1,mainObject.drop.operand1);\r\nmainObject.drop.expectedResult = mainObject.drop.operand1 + mainObject.drop.operator + mainObject.drop.operand2;\r\nmainObject.drop.addDrop = (0,_Drop_Object_circuleAdd__WEBPACK_IMPORTED_MODULE_5__.default)(mainObject.drop.expectedResult, mainObject.loseGameCount);//Добавляем каплю на экран\r\nconst v1 = function(){//Рандомное выражение доб. в каплю\r\n  mainObject.drop.addDrop.innerText = mainObject.drop.expectedResult;\r\n  const expectedResult1 = eval(mainObject.drop.addDrop.innerText);\r\n  return expectedResult1;\r\n        }\r\n        mainObject.drop.showExpectedResult =  v1();   \r\n        console.log(mainObject.drop.showExpectedResult);\r\nmainObject.drop.expectedResultOfExpression.push(mainObject.drop.showExpectedResult);//Записываем ожидаемый результат     \r\nmainObject.drop.catchUsersValue = (0,_Enter_Object_Observer_enterCatcher__WEBPACK_IMPORTED_MODULE_2__.default)(timerId);//Записываем и сравниваем ожидаемый результат со введенным Потом можно засунуть в отдельный объект\r\nif(end === false){\r\n  setTimeout( isContinueGame, timerId);\r\n}\r\n  }else {\r\n    document.querySelector(\".game-over\").innerText = mainObject.score + \" points\";\r\n    document.querySelector(\".game-over\").classList.remove(\"game-nondisplay\");\r\n    alert(\"Game over!\");\r\n    return;\r\n  }\r\n      }\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainObject);\n\n//# sourceURL=webpack://raindrops/./mainObject/mainObject.js?");

/***/ }),

/***/ "./mainObject/start.js":
/*!*****************************!*\
  !*** ./mainObject/start.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ startGame\n/* harmony export */ });\n/* harmony import */ var _mainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainObject */ \"./mainObject/mainObject.js\");\n\r\n\r\nfunction startGame(){\r\n    const startGame = document.querySelector(\".game-start\");\r\n    startGame.addEventListener(\"click\",(e)=>{\r\n        const aud = document.querySelector('.audio');\r\n        aud.play();\r\n        if(e.target.value === \"start-game\"){\r\n            _mainObject__WEBPACK_IMPORTED_MODULE_0__.default.drop.isContinue();\r\n            startGame.classList.add(\"game-nondisplay\");\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://raindrops/./mainObject/start.js?");

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