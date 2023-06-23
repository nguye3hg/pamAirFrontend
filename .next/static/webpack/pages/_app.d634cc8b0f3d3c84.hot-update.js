"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/Management.tsx":
/*!******************************!*\
  !*** ./pages/Management.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Management; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Map */ \"./lib/Map.tsx\");\n/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ModalBox */ \"./components/ModalBox.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.tsx\");\n/* harmony import */ var _components_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DropDownMenu */ \"./components/DropDownMenu.tsx\");\n/* harmony import */ var _components_LocationList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LocationList */ \"./components/LocationList.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Management() {\n    _s();\n    var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), inputState = _useState[0], setInputState = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\",\n        \"\"\n    ]), 2), nameLocationState = _useState1[0], setNameLocationState = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (inputState != \"\") {\n            searchRef.current.modifyInputValue(inputState);\n            mapRef.current.setMapCenter(JSON.parse(\"[\" + searchRef.current.returnInputValue() + \"]\"));\n            console.log(searchRef.current.returnInputValue());\n        }\n    }, [\n        inputState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(nameLocationState);\n        var res = fetch(\"http://202.191.58.206/pamair/info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                district: nameLocationState[0],\n                city: nameLocationState[1]\n            })\n        });\n        console.log(res);\n    }, [\n        nameLocationState\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                ref: searchRef,\n                onClick: function() {\n                    mapRef.current.setMapCenter(JSON.parse(\"[\" + searchRef.current.returnInputValue() + \"]\"));\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"center\",\n                    width: \"100%\",\n                    padding: \"30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LocationList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: function() {\n                            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function(e) {\n                                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            return [\n                                                4,\n                                                setInputState(e.currentTarget.className)\n                                            ];\n                                        case 1:\n                                            _state.sent();\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(e) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_Map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClick: function() {\n                            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function(e) {\n                                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                                    setNameLocationState(e);\n                                    modalRef.current.displayOnClick();\n                                    return [\n                                        2\n                                    ];\n                                });\n                            });\n                            return function(e) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }(),\n                        ref: mapRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModalBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                Location: nameLocationState[0],\n                ref: modalRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Management, \"TR8ph8JeEvv7cO+9Lsr5K5ZUOx0=\");\n_c = Management;\nvar _c;\n$RefreshReg$(_c, \"Management\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYW5hZ2VtZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDM0I7QUFFbUI7QUFDRztBQUNaO0FBQ0E7QUFFdkMsU0FBU1EsYUFBYTs7SUFDbkMsSUFBTUMsV0FBV1IsNkNBQU1BO0lBQ3ZCLElBQU1TLFlBQVlULDZDQUFNQTtJQUN4QixJQUFNVSxTQUFTViw2Q0FBTUE7SUFDckIsSUFBb0NELFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF0Q1ksYUFBNkJaLGNBQWpCYSxnQkFBaUJiO0lBQ3BDLElBQWtEQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUM7UUFBQztRQUFJO0tBQUcsT0FBNURjLG9CQUEyQ2QsZUFBeEJlLHVCQUF3QmY7SUFDbERFLGdEQUFTQSxDQUFDLFdBQU07UUFDZCxJQUFJVSxjQUFjLElBQUk7WUFDcEJGLFVBQVVNLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUNMO1lBQ25DRCxPQUFPSyxPQUFPLENBQUNFLFlBQVksQ0FDekJDLEtBQUtDLEtBQUssQ0FBQyxNQUFNVixVQUFVTSxPQUFPLENBQUNLLGdCQUFnQixLQUFLO1lBRTFEQyxRQUFRQyxHQUFHLENBQUNiLFVBQVVNLE9BQU8sQ0FBQ0ssZ0JBQWdCO1FBQ2hELENBQUM7SUFDSCxHQUFHO1FBQUNUO0tBQVc7SUFDZlYsZ0RBQVNBLENBQUMsV0FBTTtRQUNkb0IsUUFBUUMsR0FBRyxDQUFDVDtRQUNaLElBQU1VLE1BQU1DLE1BQU0scUNBQXFDO1lBQ3JEQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNVCxLQUFLVSxTQUFTLENBQUM7Z0JBQ25CQyxVQUFVaEIsaUJBQWlCLENBQUMsRUFBRTtnQkFDOUJpQixNQUFNakIsaUJBQWlCLENBQUMsRUFBRTtZQUM1QjtRQUNGO1FBQ0FRLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDZCxHQUFHO1FBQUNWO0tBQWtCO0lBRXRCLHFCQUNFLDhEQUFDa0I7OzBCQUNDLDhEQUFDM0IsNkRBQVNBO2dCQUNSNEIsS0FBS3ZCO2dCQUNMd0IsU0FBUyxXQUFNO29CQUNidkIsT0FBT0ssT0FBTyxDQUFDRSxZQUFZLENBQ3pCQyxLQUFLQyxLQUFLLENBQUMsTUFBTVYsVUFBVU0sT0FBTyxDQUFDSyxnQkFBZ0IsS0FBSztnQkFFNUQ7Ozs7OzswQkFFRiw4REFBQ2YsZ0VBQVlBOzs7OzswQkFDYiw4REFBQzBCO2dCQUNDRyxPQUFPO29CQUNMQyxTQUFTO29CQUNUQyxnQkFBZ0I7b0JBQ2hCQyxZQUFZO29CQUNaQyxPQUFPO29CQUNQQyxTQUFTO2dCQUNYOztrQ0FFQSw4REFBQ2pDLGdFQUFZQTt3QkFDWDJCLE9BQU87dUNBQUUsNEVBQU9PLEdBQU07Ozs7NENBQ3BCOztnREFBTTVCLGNBQWM0QixFQUFFQyxhQUFhLENBQUNDLFNBQVM7Ozs0Q0FBN0M7Ozs7Ozs0QkFDRjs0Q0FGZ0JGOzs7Ozs7Ozs7a0NBSWxCLDhEQUFDdEMsZ0RBQUdBO3dCQUNGK0IsT0FBTzt1Q0FBRSw0RUFBT08sR0FBTTs7b0NBQ3BCMUIscUJBQXFCMEI7b0NBRXJCaEMsU0FBU08sT0FBTyxDQUFDNEIsY0FBYzs7Ozs7NEJBQ2pDOzRDQUpnQkg7Ozs7d0JBS2hCUixLQUFLdEI7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ1AsNERBQVFBO2dCQUFDeUMsVUFBVS9CLGlCQUFpQixDQUFDLEVBQUU7Z0JBQUVtQixLQUFLeEI7Ozs7Ozs7Ozs7OztBQUdyRCxDQUFDO0dBakV1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWFuYWdlbWVudC50c3g/MmU5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIG1lbW8sIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYXAsIHsgTWFwSGFuZGxlIH0gZnJvbSBcIi4uL2xpYi9NYXBcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IE1vZGFsQm94LCB7IE1vZGFsSGFuZGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxCb3hcIjtcclxuaW1wb3J0IFNlYXJjaEJhciwgeyBTZWFyY2hIYW5kbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IERyb3BEb3duTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ecm9wRG93bk1lbnVcIjtcclxuaW1wb3J0IExvY2F0aW9uTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2NhdGlvbkxpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZW1lbnQoKSB7XHJcbiAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWY8TW9kYWxIYW5kbGU+KCk7XHJcbiAgY29uc3Qgc2VhcmNoUmVmID0gdXNlUmVmPFNlYXJjaEhhbmRsZT4oKTtcclxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWY8TWFwSGFuZGxlPigpO1xyXG4gIGNvbnN0IFtpbnB1dFN0YXRlLCBzZXRJbnB1dFN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYW1lTG9jYXRpb25TdGF0ZSwgc2V0TmFtZUxvY2F0aW9uU3RhdGVdID0gdXNlU3RhdGUoW1wiXCIsIFwiXCJdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlucHV0U3RhdGUgIT0gXCJcIikge1xyXG4gICAgICBzZWFyY2hSZWYuY3VycmVudC5tb2RpZnlJbnB1dFZhbHVlKGlucHV0U3RhdGUpO1xyXG4gICAgICBtYXBSZWYuY3VycmVudC5zZXRNYXBDZW50ZXIoXHJcbiAgICAgICAgSlNPTi5wYXJzZShcIltcIiArIHNlYXJjaFJlZi5jdXJyZW50LnJldHVybklucHV0VmFsdWUoKSArIFwiXVwiKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2hSZWYuY3VycmVudC5yZXR1cm5JbnB1dFZhbHVlKCkpO1xyXG4gICAgfVxyXG4gIH0sIFtpbnB1dFN0YXRlXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG5hbWVMb2NhdGlvblN0YXRlKTtcclxuICAgIGNvbnN0IHJlcyA9IGZldGNoKFwiaHR0cDovLzIwMi4xOTEuNTguMjA2L3BhbWFpci9pbmZvXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZGlzdHJpY3Q6IG5hbWVMb2NhdGlvblN0YXRlWzBdLFxyXG4gICAgICAgIGNpdHk6IG5hbWVMb2NhdGlvblN0YXRlWzFdLFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICB9LCBbbmFtZUxvY2F0aW9uU3RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTZWFyY2hCYXJcclxuICAgICAgICByZWY9e3NlYXJjaFJlZn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBtYXBSZWYuY3VycmVudC5zZXRNYXBDZW50ZXIoXHJcbiAgICAgICAgICAgIEpTT04ucGFyc2UoXCJbXCIgKyBzZWFyY2hSZWYuY3VycmVudC5yZXR1cm5JbnB1dFZhbHVlKCkgKyBcIl1cIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPERyb3BEb3duTWVudSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMzBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TG9jYXRpb25MaXN0XHJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBzZXRJbnB1dFN0YXRlKGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxNYXBcclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE5hbWVMb2NhdGlvblN0YXRlKGUpO1xyXG5cclxuICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudC5kaXNwbGF5T25DbGljaygpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHJlZj17bWFwUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxCb3ggTG9jYXRpb249e25hbWVMb2NhdGlvblN0YXRlWzBdfSByZWY9e21vZGFsUmVmfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJNYXAiLCJNb2RhbEJveCIsIlNlYXJjaEJhciIsIkRyb3BEb3duTWVudSIsIkxvY2F0aW9uTGlzdCIsIk1hbmFnZW1lbnQiLCJtb2RhbFJlZiIsInNlYXJjaFJlZiIsIm1hcFJlZiIsImlucHV0U3RhdGUiLCJzZXRJbnB1dFN0YXRlIiwibmFtZUxvY2F0aW9uU3RhdGUiLCJzZXROYW1lTG9jYXRpb25TdGF0ZSIsImN1cnJlbnQiLCJtb2RpZnlJbnB1dFZhbHVlIiwic2V0TWFwQ2VudGVyIiwiSlNPTiIsInBhcnNlIiwicmV0dXJuSW5wdXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwiZGlzdHJpY3QiLCJjaXR5IiwiZGl2IiwicmVmIiwib25DbGljayIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIndpZHRoIiwicGFkZGluZyIsImUiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NOYW1lIiwiZGlzcGxheU9uQ2xpY2siLCJMb2NhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Management.tsx\n"));

/***/ })

});