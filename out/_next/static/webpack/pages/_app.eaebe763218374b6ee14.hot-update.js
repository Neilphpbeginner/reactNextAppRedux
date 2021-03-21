webpackHotUpdate_N_E("pages/_app",{

/***/ "./state/reducer/index.js":
/*!********************************!*\
  !*** ./state/reducer/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "./state/actionTypes/index.js");


var initialState = 0;

var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return initialState;
  }
}; // const rootReducer = combineReducers({
//   counter: counterReducer,
// });


/* harmony default export */ __webpack_exports__["default"] = (counterReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvcmVkdWNlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjb3VudGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FBckI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJGLFlBQXlCO0FBQUEsTUFBWEcsTUFBVzs7QUFDdkQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0U7QUFDRSxhQUFPSixZQUFQO0FBRko7QUFJRCxDQUxELEMsQ0FPQTtBQUNBO0FBQ0E7OztBQUVlQyw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVhZWJlNzYzMjE4Mzc0YjZlZTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgQURELCBTVUJUUkFDVCwgUkVTRVQgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IDA7XHJcblxyXG5jb25zdCBjb3VudGVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbi8vICAgY291bnRlcjogY291bnRlclJlZHVjZXIsXHJcbi8vIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY291bnRlclJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=