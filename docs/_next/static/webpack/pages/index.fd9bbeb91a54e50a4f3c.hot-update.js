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
        onClick: props.addOneToCounterProps,
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "buttonSpacing",
        onClick: props.subtractOneFromCounter,
        children: "Subtract"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
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

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addOneToCounterProps: _state_actions__WEBPACK_IMPORTED_MODULE_5__["addOne"],
    subtractOneFromCounter: _state_actions__WEBPACK_IMPORTED_MODULE_5__["subtractOne"],
    resetCounter: _state_actions__WEBPACK_IMPORTED_MODULE_5__["resetNumber"]
  };
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJwcm9wcyIsInN0eWxlcyIsImhvbWUiLCJudW1iZXIiLCJob21lQnV0dG9ucyIsImFkZE9uZVRvQ291bnRlclByb3BzIiwic3VidHJhY3RPbmVGcm9tQ291bnRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhZGRPbmUiLCJzdWJ0cmFjdE9uZSIsInJlc2V0Q291bnRlciIsInJlc2V0TnVtYmVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw2REFBTSxDQUFDQyxJQUF2QjtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtGLEtBQUssQ0FBQ0c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBRUYsNkRBQU0sQ0FBQ0csV0FBdkI7QUFBQSw4QkFDRSxxRUFBQyxzREFBRDtBQUFRLGlCQUFTLEVBQUMsZUFBbEI7QUFBa0MsZUFBTyxFQUFFSixLQUFLLENBQUNLLG9CQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsc0RBQUQ7QUFDRSxpQkFBUyxFQUFDLGVBRFo7QUFFRSxlQUFPLEVBQUVMLEtBQUssQ0FBQ00sc0JBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FqQk07O0FBbUJQLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENMLFVBQU0sRUFBRUs7QUFEMEIsR0FBWjtBQUFBLENBQXhCOztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTEwsd0JBQW9CLEVBQUVNLHFEQURqQjtBQUVMTCwwQkFBc0IsRUFBRU0sMERBRm5CO0FBR0xDLGdCQUFZLEVBQUVDLDBEQUFXQTtBQUhwQixHQUFQO0FBS0QsQ0FORDs7QUFRZUMsMEhBQU8sQ0FBQ1IsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNWLEtBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmQ5YmJlYjkxYTU0ZTUwYTRmM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYXBwLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRPbmUsIHN1YnRyYWN0T25lLCByZXNldE51bWJlciB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5kZXggPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lfT5cclxuICAgICAgPGgxPntwcm9wcy5udW1iZXJ9PC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQnV0dG9uc30+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25TcGFjaW5nXCIgb25DbGljaz17cHJvcHMuYWRkT25lVG9Db3VudGVyUHJvcHN9PlxyXG4gICAgICAgICAgQWRkXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uU3BhY2luZ1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zdWJ0cmFjdE9uZUZyb21Db3VudGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN1YnRyYWN0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXI6IHN0YXRlLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBhZGRPbmVUb0NvdW50ZXJQcm9wczogYWRkT25lLFxyXG4gICAgc3VidHJhY3RPbmVGcm9tQ291bnRlcjogc3VidHJhY3RPbmUsXHJcbiAgICByZXNldENvdW50ZXI6IHJlc2V0TnVtYmVyLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShpbmRleCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=