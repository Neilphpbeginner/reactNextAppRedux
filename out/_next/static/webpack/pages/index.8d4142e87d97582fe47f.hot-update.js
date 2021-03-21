webpackHotUpdate_N_E("pages/index",{

/***/ "./state/actions/index.js":
/*!********************************!*\
  !*** ./state/actions/index.js ***!
  \********************************/
/*! exports provided: addOne, subtractOne, resetNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOne", function() { return addOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractOne", function() { return subtractOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetNumber", function() { return resetNumber; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./state/actionTypes/index.js");

var addOne = function addOne(dispacth) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD"]
  };
};
var subtractOne = function subtractOne() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SUBTRACT"]
  };
};
var resetNumber = function resetNumber() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["RESET"]
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvYWN0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRPbmUiLCJkaXNwYWN0aCIsInR5cGUiLCJBREQiLCJzdWJ0cmFjdE9uZSIsIlNVQlRSQUNUIiwicmVzZXROdW1iZXIiLCJSRVNFVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLFFBQUQsRUFBYztBQUNsQyxTQUFPO0FBQ0xDLFFBQUksRUFBRUMsZ0RBQUdBO0FBREosR0FBUDtBQUdELENBSk07QUFNQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQU87QUFDaENGLFFBQUksRUFBRUcscURBQVFBO0FBRGtCLEdBQVA7QUFBQSxDQUFwQjtBQUlBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FBTztBQUNoQ0osUUFBSSxFQUFFSyxrREFBS0E7QUFEcUIsR0FBUDtBQUFBLENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhkNDE0MmU4N2Q5NzU4MmZlNDdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBREQsIFNVQlRSQUNULCBSRVNFVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE9uZSA9IChkaXNwYWN0aCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBREQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJ0cmFjdE9uZSA9ICgpID0+ICh7XHJcbiAgdHlwZTogU1VCVFJBQ1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0TnVtYmVyID0gKCkgPT4gKHtcclxuICB0eXBlOiBSRVNFVCxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=