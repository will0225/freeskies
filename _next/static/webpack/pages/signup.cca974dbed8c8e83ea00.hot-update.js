webpackHotUpdate_N_E("pages/signup",{

/***/ "./containers/Signup/steps/ReCaptcha.js":
/*!**********************************************!*\
  !*** ./containers/Signup/steps/ReCaptcha.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReCaptchaForm; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationButtons */ "./containers/Signup/steps/NavigationButtons.js");
/* harmony import */ var _styles_signup_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/signup.module.scss */ "./containers/Signup/styles/signup.module.scss");
/* harmony import */ var _styles_signup_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_signup_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var configs_reCaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! configs/reCaptcha */ "./configs/reCaptcha.js");


var _jsxFileName = "D:\\Freeskies-development-\\containers\\Signup\\steps\\ReCaptcha.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function ReCaptchaForm(props) {
  _s();

  var handleSubmit = function handleSubmit() {// props.nextStep();
  };

  var changeCaptcha = function changeCaptcha(value) {
    if (value) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      disable = _useState[0],
      setDisable = _useState[1];

  console.log(props);
  return __jsx("form", {
    className: _styles_signup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.registration_form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sitekey: configs_reCaptcha__WEBPACK_IMPORTED_MODULE_5__["secterKey"],
    onChange: changeCaptcha,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })), __jsx(_NavigationButtons__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    loading: props.loading,
    onRegistion: props.onRegistration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  })));
}

_s(ReCaptchaForm, "iieWAWcCMahLs1bBiJR9JEI8qoQ=");

_c = ReCaptchaForm;

var _c;

$RefreshReg$(_c, "ReCaptchaForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9TaWdudXAvc3RlcHMvUmVDYXB0Y2hhLmpzIl0sIm5hbWVzIjpbIlJlQ2FwdGNoYUZvcm0iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsImNoYW5nZUNhcHRjaGEiLCJ2YWx1ZSIsInNldERpc2FibGUiLCJ1c2VTdGF0ZSIsImRpc2FibGUiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwicmVnaXN0cmF0aW9uX2Zvcm0iLCJzZWN0ZXJLZXkiLCJsb2FkaW5nIiwib25SZWdpc3RyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQzNDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU0sQ0FDekI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CLFFBQUdBLEtBQUgsRUFBVTtBQUNSQyxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBRkQsTUFFTztBQUNMQSxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FORDs7QUFMMkMsa0JBYWJDLHNEQUFRLENBQUMsSUFBRCxDQWJLO0FBQUEsTUFhcENDLE9BYm9DO0FBQUEsTUFhM0JGLFVBYjJCOztBQWUzQ0csU0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQVo7QUFDQSxTQUNFO0FBQU0sYUFBUyxFQUFFUyxpRUFBTSxDQUFDQyxpQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFDRSxXQUFPLEVBQUVDLDJEQURYO0FBRUUsWUFBUSxFQUFFVCxhQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUUsTUFBQywwREFBRCx5RkFDTUYsS0FETjtBQUVFLFdBQU8sRUFBRUEsS0FBSyxDQUFDWSxPQUZqQjtBQUdFLGVBQVcsRUFBRVosS0FBSyxDQUFDYSxjQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUkYsQ0FERjtBQWdCRDs7R0FoQ3VCZCxhOztLQUFBQSxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5jY2E5NzRkYmVkOGM4ZTgzZWEwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbnMgZnJvbSAnLi9OYXZpZ2F0aW9uQnV0dG9ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3NpZ251cC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbXBvcnQgUmVDQVBUQ0hBIGZyb20gJ3JlYWN0LWdvb2dsZS1yZWNhcHRjaGEnO1xyXG5pbXBvcnQgeyBzZWN0ZXJLZXkgfSBmcm9tICdjb25maWdzL3JlQ2FwdGNoYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZUNhcHRjaGFGb3JtKHByb3BzKSB7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgLy8gcHJvcHMubmV4dFN0ZXAoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDYXB0Y2hhID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZih2YWx1ZSkge1xyXG4gICAgICBzZXREaXNhYmxlKGZhbHNlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RGlzYWJsZSh0cnVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2Rpc2FibGUsIHNldERpc2FibGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMucmVnaXN0cmF0aW9uX2Zvcm19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgIDxSZUNBUFRDSEEgXHJcbiAgICAgICAgICBzaXRla2V5PXtzZWN0ZXJLZXl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQ2FwdGNoYX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uc1xyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICBsb2FkaW5nPXtwcm9wcy5sb2FkaW5nfVxyXG4gICAgICAgIG9uUmVnaXN0aW9uPXtwcm9wcy5vblJlZ2lzdHJhdGlvbn1cclxuICAgICAgLz5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=