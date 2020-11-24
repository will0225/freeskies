webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/RatedSection.js":
/*!********************************************!*\
  !*** ./components/profile/RatedSection.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatedSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RatingsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RatingsList */ "./components/profile/RatingsList.js");
/* harmony import */ var _styles_rated_section_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/rated-section.module.scss */ "./components/profile/styles/rated-section.module.scss");
/* harmony import */ var _styles_rated_section_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_rated_section_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\freeskies_fe_code\\components\\profile\\RatedSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function RatedSection({
  user,
  onRatePost,
  otherUser
}) {
  const ratings = user === null || user === void 0 ? void 0 : user.recentRated;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_rated_section_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container_bg, _styles_rated_section_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.section),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, !otherUser ? __jsx("div", {
    className: _styles_rated_section_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.section_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Rated"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "My rates")) : null, ratings && ratings.length !== 0 && __jsx(_RatingsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ratings: ratings,
    onRatePost: onRatePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }));
}
_c = RatedSection;

var _c;

$RefreshReg$(_c, "RatedSection");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1JhdGVkU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJSYXRlZFNlY3Rpb24iLCJ1c2VyIiwib25SYXRlUG9zdCIsIm90aGVyVXNlciIsInJhdGluZ3MiLCJyZWNlbnRSYXRlZCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb250YWluZXJfYmciLCJzZWN0aW9uIiwic2VjdGlvbl90aXRsZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULENBQXNCO0FBQUVDLE1BQUY7QUFBUUMsWUFBUjtBQUFxQkM7QUFBckIsQ0FBdEIsRUFBdUQ7QUFDcEUsUUFBTUMsT0FBTyxHQUFHSCxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUksV0FBdEI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxpREFBVSxDQUFDQyx3RUFBTSxDQUFDQyxZQUFSLEVBQXNCRCx3RUFBTSxDQUFDRSxPQUE3QixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQ04sU0FBRCxHQUFXO0FBQUssYUFBUyxFQUFFSSx3RUFBTSxDQUFDRyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURVLEVBRVYsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRlUsQ0FBWCxHQUdNLElBSlQsRUFLR04sT0FBTyxJQUFJQSxPQUFPLENBQUNPLE1BQVIsS0FBbUIsQ0FBOUIsSUFDQyxNQUFDLG9EQUFEO0FBQ0UsV0FBTyxFQUFFUCxPQURYO0FBRUUsY0FBVSxFQUFFRixVQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURGO0FBY0Q7S0FoQnVCRixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMjM5OTk3YTMyZWRhZDFlNmYzOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IFJhdGluZ3NMaXN0IGZyb20gJy4vUmF0aW5nc0xpc3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3JhdGVkLXNlY3Rpb24ubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmF0ZWRTZWN0aW9uKHsgdXNlciwgb25SYXRlUG9zdCAsIG90aGVyVXNlcn0pIHtcclxuICBjb25zdCByYXRpbmdzID0gdXNlcj8ucmVjZW50UmF0ZWRcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbnRhaW5lcl9iZywgc3R5bGVzLnNlY3Rpb24pfT5cclxuICAgICAgeyFvdGhlclVzZXI/PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uX3RpdGxlfT5cclxuICAgICAgICA8cD5SYXRlZDwvcD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCI+TXkgcmF0ZXM8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgIHtyYXRpbmdzICYmIHJhdGluZ3MubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICA8UmF0aW5nc0xpc3RcclxuICAgICAgICAgIHJhdGluZ3M9e3JhdGluZ3N9XHJcbiAgICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=