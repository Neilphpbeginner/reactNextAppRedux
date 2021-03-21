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
        onClick: _this.props.subtractOneFromCounter,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJwcm9wcyIsInN0eWxlcyIsImhvbWUiLCJudW1iZXIiLCJob21lQnV0dG9ucyIsImFkZE9uZVRvQ291bnRlclByb3BzIiwic3VidHJhY3RPbmVGcm9tQ291bnRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYWRkT25lIiwic3VidHJhY3RPbmUiLCJyZXNldENvdW50ZXIiLCJyZXNldE51bWJlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUM5QixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNkRBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDRTtBQUFBLGdCQUFLRixLQUFLLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVGLDZEQUFNLENBQUNHLFdBQXZCO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFBUSxpQkFBUyxFQUFDLGVBQWxCO0FBQWtDLGVBQU8sRUFBRUosS0FBSyxDQUFDSyxvQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLHNEQUFEO0FBQ0UsaUJBQVMsRUFBQyxlQURaO0FBRUUsZUFBTyxFQUFFLEtBQUksQ0FBQ0wsS0FBTCxDQUFXTSxzQkFGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQWpCTTs7QUFtQlAsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ0wsVUFBTSxFQUFFSztBQUQwQixHQUFaO0FBQUEsQ0FBeEI7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUc7QUFDekJKLHNCQUFvQixFQUFFSyxxREFERztBQUV6Qkosd0JBQXNCLEVBQUVLLDBEQUZDO0FBR3pCQyxjQUFZLEVBQUVDLDBEQUFXQTtBQUhBLENBQTNCO0FBTWVDLDBIQUFPLENBQUNQLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDVixLQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjZTk1ZGI1YjA4ZGU5ZDBhMTA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2FwcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkT25lLCBzdWJ0cmFjdE9uZSwgcmVzZXROdW1iZXIgfSBmcm9tIFwiLi4vc3RhdGUvYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZX0+XHJcbiAgICAgIDxoMT57cHJvcHMubnVtYmVyfTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZUJ1dHRvbnN9PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uU3BhY2luZ1wiIG9uQ2xpY2s9e3Byb3BzLmFkZE9uZVRvQ291bnRlclByb3BzfT5cclxuICAgICAgICAgIEFkZFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblNwYWNpbmdcIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5zdWJ0cmFjdE9uZUZyb21Db3VudGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN1YnRyYWN0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXI6IHN0YXRlLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICBhZGRPbmVUb0NvdW50ZXJQcm9wczogYWRkT25lLFxyXG4gIHN1YnRyYWN0T25lRnJvbUNvdW50ZXI6IHN1YnRyYWN0T25lLFxyXG4gIHJlc2V0Q291bnRlcjogcmVzZXROdW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShpbmRleCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=