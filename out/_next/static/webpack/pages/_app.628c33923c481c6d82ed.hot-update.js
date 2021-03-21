webpackHotUpdate_N_E("pages/_app",{

/***/ "./state/reducer/index.js":
/*!********************************!*\
  !*** ./state/reducer/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./state/actionTypes/index.js");

var initialState = {
  counter: 0
};

var reducer = function reducer(initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD"]:
      return initialState++;

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SUBTRACT"]:
      return initialState--;

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["RESET"]:
      return initialState = 0;

    default:
      break;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvcmVkdWNlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjb3VudGVyIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJBREQiLCJTVUJUUkFDVCIsIlJFU0VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUU7QUFEVSxDQUFyQjs7QUFJQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDRixZQUFELEVBQWVHLE1BQWYsRUFBMEI7QUFDeEMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsZ0RBQUw7QUFDRSxhQUFPTCxZQUFZLEVBQW5COztBQUNGLFNBQUtNLHFEQUFMO0FBQ0UsYUFBT04sWUFBWSxFQUFuQjs7QUFDRixTQUFLTyxrREFBTDtBQUNFLGFBQVFQLFlBQVksR0FBRyxDQUF2Qjs7QUFDRjtBQUNFO0FBUko7QUFVRCxDQVhEOztBQVllRSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjYyOGMzMzkyM2M0ODFjNmQ4MmVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBREQsIFNVQlRSQUNULCBSRVNFVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGNvdW50ZXI6IDAsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBREQ6XHJcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGUrKztcclxuICAgIGNhc2UgU1VCVFJBQ1Q6XHJcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGUtLTtcclxuICAgIGNhc2UgUkVTRVQ6XHJcbiAgICAgIHJldHVybiAoaW5pdGlhbFN0YXRlID0gMCk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=