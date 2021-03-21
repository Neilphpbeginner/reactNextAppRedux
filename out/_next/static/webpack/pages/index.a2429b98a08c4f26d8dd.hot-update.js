webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styles_app_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/app.module.css */ "./styles/app.module.css");
/* harmony import */ var _styles_app_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/actions */ "./state/actions/index.js");


var _jsxFileName = "C:\\Users\\neil.lemmer\\Documents\\Projects\\reactNextAppRedux\\pages\\index.js",
    _this = undefined;






var index = function index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_app_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.home,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_app_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.homeButtons,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "buttonSpacing",
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "buttonSpacing",
        children: "Subtract"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    number: state
  };
};

var mapDispatchToProps = {
  addOneToCounterProps: _state_actions__WEBPACK_IMPORTED_MODULE_5__["addOne"],
  subtractOneFromCounter: _state_actions__WEBPACK_IMPORTED_MODULE_5__["subtractOne"],
  resetCounter: _state_actions__WEBPACK_IMPORTED_MODULE_5__["resetNumber"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(index));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

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

var addOne = function addOne() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0YXRlL2FjdGlvbnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJwcm9wcyIsInN0eWxlcyIsImhvbWUiLCJudW1iZXIiLCJob21lQnV0dG9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYWRkT25lVG9Db3VudGVyUHJvcHMiLCJhZGRPbmUiLCJzdWJ0cmFjdE9uZUZyb21Db3VudGVyIiwic3VidHJhY3RPbmUiLCJyZXNldENvdW50ZXIiLCJyZXNldE51bWJlciIsImNvbm5lY3QiLCJ0eXBlIiwiQUREIiwiU1VCVFJBQ1QiLCJSRVNFVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw2REFBTSxDQUFDQyxJQUF2QjtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtGLEtBQUssQ0FBQ0c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBRUYsNkRBQU0sQ0FBQ0csV0FBdkI7QUFBQSw4QkFDRSxxRUFBQyxzREFBRDtBQUFRLGlCQUFTLEVBQUMsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHNEQUFEO0FBQVEsaUJBQVMsRUFBQyxlQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FWTTs7QUFZUCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDSCxVQUFNLEVBQUVHO0FBRDBCLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRztBQUN6QkMsc0JBQW9CLEVBQUVDLHFEQURHO0FBRXpCQyx3QkFBc0IsRUFBRUMsMERBRkM7QUFHekJDLGNBQVksRUFBRUMsMERBQVdBO0FBSEEsQ0FBM0I7QUFNZUMsMEhBQU8sQ0FBQ1QsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNSLEtBQTdDLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNVSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFNBQU87QUFDM0JNLFFBQUksRUFBRUMsZ0RBQUdBO0FBRGtCLEdBQVA7QUFBQSxDQUFmO0FBSUEsSUFBTUwsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUFPO0FBQ2hDSSxRQUFJLEVBQUVFLHFEQUFRQTtBQURrQixHQUFQO0FBQUEsQ0FBcEI7QUFJQSxJQUFNSixXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQU87QUFDaENFLFFBQUksRUFBRUcsa0RBQUtBO0FBRHFCLEdBQVA7QUFBQSxDQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMjQyOWI5OGEwOGM0ZjI2ZDhkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hcHAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZE9uZSwgc3VidHJhY3RPbmUsIHJlc2V0TnVtYmVyIH0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxyXG4gICAgICA8aDE+e3Byb3BzLm51bWJlcn08L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVCdXR0b25zfT5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblNwYWNpbmdcIj5BZGQ8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblNwYWNpbmdcIj5TdWJ0cmFjdDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbnVtYmVyOiBzdGF0ZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgYWRkT25lVG9Db3VudGVyUHJvcHM6IGFkZE9uZSxcclxuICBzdWJ0cmFjdE9uZUZyb21Db3VudGVyOiBzdWJ0cmFjdE9uZSxcclxuICByZXNldENvdW50ZXI6IHJlc2V0TnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoaW5kZXgpO1xyXG4iLCJpbXBvcnQgeyBBREQsIFNVQlRSQUNULCBSRVNFVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE9uZSA9ICgpID0+ICh7XHJcbiAgdHlwZTogQURELFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJ0cmFjdE9uZSA9ICgpID0+ICh7XHJcbiAgdHlwZTogU1VCVFJBQ1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0TnVtYmVyID0gKCkgPT4gKHtcclxuICB0eXBlOiBSRVNFVCxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=