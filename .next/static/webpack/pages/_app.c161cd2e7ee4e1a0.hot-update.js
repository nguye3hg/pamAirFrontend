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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Management; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Map */ \"./lib/Map.tsx\");\n/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ModalBox */ \"./components/ModalBox.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.tsx\");\n/* harmony import */ var _components_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DropDownMenu */ \"./components/DropDownMenu.tsx\");\n/* harmony import */ var _components_LocationList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LocationList */ \"./components/LocationList.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Management() {\n    _s();\n    var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), inputState = _useState[0], setInputState = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\",\n        \"\"\n    ]), 2), nameLocationState = _useState1[0], setNameLocationState = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (inputState != \"\") {\n            searchRef.current.modifyInputValue(inputState);\n            mapRef.current.setMapCenter(JSON.parse(\"[\" + searchRef.current.returnInputValue() + \"]\"));\n            console.log(searchRef.current.returnInputValue());\n        }\n    }, [\n        inputState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(nameLocationState);\n    }, [\n        nameLocationState\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                ref: searchRef,\n                onClick: function() {\n                    mapRef.current.setMapCenter(JSON.parse(\"[\" + searchRef.current.returnInputValue() + \"]\"));\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"center\",\n                    width: \"100%\",\n                    padding: \"30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LocationList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onClick: function() {\n                            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function(e) {\n                                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            return [\n                                                4,\n                                                setInputState(e.currentTarget.className)\n                                            ];\n                                        case 1:\n                                            _state.sent();\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(e) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_Map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClick: function() {\n                            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function(e) {\n                                var res, data;\n                                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            setNameLocationState(e);\n                                            return [\n                                                4,\n                                                fetch(\"http://202.191.58.206/pamair/info\", {\n                                                    method: \"POST\",\n                                                    headers: {\n                                                        \"Content-Type\": \"application/json\"\n                                                    },\n                                                    body: JSON.stringify({\n                                                        district: nameLocationState[0],\n                                                        city: nameLocationState[1]\n                                                    })\n                                                })\n                                            ];\n                                        case 1:\n                                            res = _state.sent();\n                                            return [\n                                                4,\n                                                res.json()\n                                            ];\n                                        case 2:\n                                            data = _state.sent();\n                                            console.log(data);\n                                            modalRef.current.displayOnClick();\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(e) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }(),\n                        ref: mapRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModalBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                Location: nameLocationState[0],\n                ref: modalRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hoang\\\\OneDrive\\\\Desktop\\\\mapsapp\\\\pages\\\\Management.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Management, \"TR8ph8JeEvv7cO+9Lsr5K5ZUOx0=\");\n_c = Management;\nvar _c;\n$RefreshReg$(_c, \"Management\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYW5hZ2VtZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDM0I7QUFFbUI7QUFDRztBQUNaO0FBQ0E7QUFFdkMsU0FBU1EsYUFBYTs7SUFDbkMsSUFBTUMsV0FBV1IsNkNBQU1BO0lBQ3ZCLElBQU1TLFlBQVlULDZDQUFNQTtJQUN4QixJQUFNVSxTQUFTViw2Q0FBTUE7SUFDckIsSUFBb0NELFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF0Q1ksYUFBNkJaLGNBQWpCYSxnQkFBaUJiO0lBQ3BDLElBQWtEQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUM7UUFBQztRQUFJO0tBQUcsT0FBNURjLG9CQUEyQ2QsZUFBeEJlLHVCQUF3QmY7SUFDbERFLGdEQUFTQSxDQUFDLFdBQU07UUFDZCxJQUFJVSxjQUFjLElBQUk7WUFDcEJGLFVBQVVNLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUNMO1lBQ25DRCxPQUFPSyxPQUFPLENBQUNFLFlBQVksQ0FDekJDLEtBQUtDLEtBQUssQ0FBQyxNQUFNVixVQUFVTSxPQUFPLENBQUNLLGdCQUFnQixLQUFLO1lBRTFEQyxRQUFRQyxHQUFHLENBQUNiLFVBQVVNLE9BQU8sQ0FBQ0ssZ0JBQWdCO1FBQ2hELENBQUM7SUFDSCxHQUFHO1FBQUNUO0tBQVc7SUFDZlYsZ0RBQVNBLENBQUMsV0FBTTtRQUNkb0IsUUFBUUMsR0FBRyxDQUFDVDtJQUNkLEdBQUc7UUFBQ0E7S0FBa0I7SUFFdEIscUJBQ0UsOERBQUNVOzswQkFDQyw4REFBQ25CLDZEQUFTQTtnQkFDUm9CLEtBQUtmO2dCQUNMZ0IsU0FBUyxXQUFNO29CQUNiZixPQUFPSyxPQUFPLENBQUNFLFlBQVksQ0FDekJDLEtBQUtDLEtBQUssQ0FBQyxNQUFNVixVQUFVTSxPQUFPLENBQUNLLGdCQUFnQixLQUFLO2dCQUU1RDs7Ozs7OzBCQUVGLDhEQUFDZixnRUFBWUE7Ozs7OzBCQUNiLDhEQUFDa0I7Z0JBQ0NHLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLGdCQUFnQjtvQkFDaEJDLFlBQVk7b0JBQ1pDLE9BQU87b0JBQ1BDLFNBQVM7Z0JBQ1g7O2tDQUVBLDhEQUFDekIsZ0VBQVlBO3dCQUNYbUIsT0FBTzt1Q0FBRSw0RUFBT08sR0FBTTs7Ozs0Q0FDcEI7O2dEQUFNcEIsY0FBY29CLEVBQUVDLGFBQWEsQ0FBQ0MsU0FBUzs7OzRDQUE3Qzs7Ozs7OzRCQUNGOzRDQUZnQkY7Ozs7Ozs7OztrQ0FJbEIsOERBQUM5QixnREFBR0E7d0JBQ0Z1QixPQUFPO3VDQUFFLDRFQUFPTyxHQUFNO29DQUVkRyxLQVFBQzs7Ozs0Q0FUTnRCLHFCQUFxQmtCOzRDQUNUOztnREFBTUssTUFBTSxxQ0FBcUM7b0RBQzNEQyxRQUFRO29EQUNSQyxTQUFTO3dEQUFFLGdCQUFnQjtvREFBbUI7b0RBQzlDQyxNQUFNdEIsS0FBS3VCLFNBQVMsQ0FBQzt3REFDbkJDLFVBQVU3QixpQkFBaUIsQ0FBQyxFQUFFO3dEQUM5QjhCLE1BQU05QixpQkFBaUIsQ0FBQyxFQUFFO29EQUM1QjtnREFDRjs7OzRDQVBNc0IsTUFBTTs0Q0FRQzs7Z0RBQU1BLElBQUlTLElBQUk7Ozs0Q0FBckJSLE9BQU87NENBQ2JmLFFBQVFDLEdBQUcsQ0FBQ2M7NENBRVo1QixTQUFTTyxPQUFPLENBQUM4QixjQUFjOzs7Ozs7NEJBQ2pDOzRDQWRnQmI7Ozs7d0JBZWhCUixLQUFLZDs7Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDUCw0REFBUUE7Z0JBQUMyQyxVQUFVakMsaUJBQWlCLENBQUMsRUFBRTtnQkFBRVcsS0FBS2hCOzs7Ozs7Ozs7Ozs7QUFHckQsQ0FBQztHQWxFdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL01hbmFnZW1lbnQudHN4PzJlOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBtZW1vLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWFwLCB7IE1hcEhhbmRsZSB9IGZyb20gXCIuLi9saWIvTWFwXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBNb2RhbEJveCwgeyBNb2RhbEhhbmRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsQm94XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIsIHsgU2VhcmNoSGFuZGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBEcm9wRG93bk1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRHJvcERvd25NZW51XCI7XHJcbmltcG9ydCBMb2NhdGlvbkxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9jYXRpb25MaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VtZW50KCkge1xyXG4gIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmPE1vZGFsSGFuZGxlPigpO1xyXG4gIGNvbnN0IHNlYXJjaFJlZiA9IHVzZVJlZjxTZWFyY2hIYW5kbGU+KCk7XHJcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmPE1hcEhhbmRsZT4oKTtcclxuICBjb25zdCBbaW5wdXRTdGF0ZSwgc2V0SW5wdXRTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmFtZUxvY2F0aW9uU3RhdGUsIHNldE5hbWVMb2NhdGlvblN0YXRlXSA9IHVzZVN0YXRlKFtcIlwiLCBcIlwiXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbnB1dFN0YXRlICE9IFwiXCIpIHtcclxuICAgICAgc2VhcmNoUmVmLmN1cnJlbnQubW9kaWZ5SW5wdXRWYWx1ZShpbnB1dFN0YXRlKTtcclxuICAgICAgbWFwUmVmLmN1cnJlbnQuc2V0TWFwQ2VudGVyKFxyXG4gICAgICAgIEpTT04ucGFyc2UoXCJbXCIgKyBzZWFyY2hSZWYuY3VycmVudC5yZXR1cm5JbnB1dFZhbHVlKCkgKyBcIl1cIilcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coc2VhcmNoUmVmLmN1cnJlbnQucmV0dXJuSW5wdXRWYWx1ZSgpKTtcclxuICAgIH1cclxuICB9LCBbaW5wdXRTdGF0ZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lTG9jYXRpb25TdGF0ZSk7XHJcbiAgfSwgW25hbWVMb2NhdGlvblN0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgcmVmPXtzZWFyY2hSZWZ9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgbWFwUmVmLmN1cnJlbnQuc2V0TWFwQ2VudGVyKFxyXG4gICAgICAgICAgICBKU09OLnBhcnNlKFwiW1wiICsgc2VhcmNoUmVmLmN1cnJlbnQucmV0dXJuSW5wdXRWYWx1ZSgpICsgXCJdXCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxEcm9wRG93bk1lbnUgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExvY2F0aW9uTGlzdFxyXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgc2V0SW5wdXRTdGF0ZShlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TWFwXHJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXROYW1lTG9jYXRpb25TdGF0ZShlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMjAyLjE5MS41OC4yMDYvcGFtYWlyL2luZm9cIiwge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGRpc3RyaWN0OiBuYW1lTG9jYXRpb25TdGF0ZVswXSxcclxuICAgICAgICAgICAgICAgIGNpdHk6IG5hbWVMb2NhdGlvblN0YXRlWzFdLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudC5kaXNwbGF5T25DbGljaygpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHJlZj17bWFwUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxCb3ggTG9jYXRpb249e25hbWVMb2NhdGlvblN0YXRlWzBdfSByZWY9e21vZGFsUmVmfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJNYXAiLCJNb2RhbEJveCIsIlNlYXJjaEJhciIsIkRyb3BEb3duTWVudSIsIkxvY2F0aW9uTGlzdCIsIk1hbmFnZW1lbnQiLCJtb2RhbFJlZiIsInNlYXJjaFJlZiIsIm1hcFJlZiIsImlucHV0U3RhdGUiLCJzZXRJbnB1dFN0YXRlIiwibmFtZUxvY2F0aW9uU3RhdGUiLCJzZXROYW1lTG9jYXRpb25TdGF0ZSIsImN1cnJlbnQiLCJtb2RpZnlJbnB1dFZhbHVlIiwic2V0TWFwQ2VudGVyIiwiSlNPTiIsInBhcnNlIiwicmV0dXJuSW5wdXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJyZWYiLCJvbkNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJwYWRkaW5nIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc05hbWUiLCJyZXMiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0cmluZ2lmeSIsImRpc3RyaWN0IiwiY2l0eSIsImpzb24iLCJkaXNwbGF5T25DbGljayIsIkxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Management.tsx\n"));

/***/ })

});