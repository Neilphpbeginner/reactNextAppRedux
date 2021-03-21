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
    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD"]:
      return state = state + 1;

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SUBTRACT"]:
      return state = state - 1;

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["RESET"]:
      return state = 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvcmVkdWNlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjb3VudGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERCIsIlNVQlRSQUNUIiwiUkVTRVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHLENBQXJCOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCRixZQUF5QjtBQUFBLE1BQVhHLE1BQVc7O0FBQ3ZELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLGdEQUFMO0FBQ0UsYUFBUUgsS0FBSyxHQUFHQSxLQUFLLEdBQUcsQ0FBeEI7O0FBQ0YsU0FBS0kscURBQUw7QUFDRSxhQUFRSixLQUFLLEdBQUdBLEtBQUssR0FBRyxDQUF4Qjs7QUFDRixTQUFLSyxrREFBTDtBQUNFLGFBQVFMLEtBQUssR0FBRyxDQUFoQjs7QUFDRjtBQUNFLGFBQU9GLFlBQVA7QUFSSjtBQVVELENBWEQsQyxDQWFBO0FBQ0E7QUFDQTs7O0FBRWVDLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjRlMTIzNmJiMzBiZGZjZGY5NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBBREQsIFNVQlRSQUNULCBSRVNFVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gMDtcclxuXHJcbmNvbnN0IGNvdW50ZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERDpcclxuICAgICAgcmV0dXJuIChzdGF0ZSA9IHN0YXRlICsgMSk7XHJcbiAgICBjYXNlIFNVQlRSQUNUOlxyXG4gICAgICByZXR1cm4gKHN0YXRlID0gc3RhdGUgLSAxKTtcclxuICAgIGNhc2UgUkVTRVQ6XHJcbiAgICAgIHJldHVybiAoc3RhdGUgPSAwKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4vLyAgIGNvdW50ZXI6IGNvdW50ZXJSZWR1Y2VyLFxyXG4vLyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9