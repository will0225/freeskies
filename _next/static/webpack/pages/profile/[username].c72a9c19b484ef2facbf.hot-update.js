webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./components/profile/PhotoSection.js":
/*!********************************************!*\
  !*** ./components/profile/PhotoSection.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PhotoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoList */ "./components/profile/PhotoList.js");
/* harmony import */ var _styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/photo-section.module.scss */ "./components/profile/styles/photo-section.module.scss");
/* harmony import */ var _styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\freeskies_fe_code\\components\\profile\\PhotoSection.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function PhotoSection({
  user,
  onRatePost,
  otherUser
}) {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const images = user;

  const goToPhotos = () => {
    router.push('/photos');
  };

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container_bg, _styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.section),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, !otherUser ? __jsx("div", {
    className: _styles_photo_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.section_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Recent photos"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    onClick: goToPhotos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "All photos")) : null, images && images.length !== 0 && __jsx(_PhotoList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: images,
    onRatePost: onRatePost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }));
}

_s(PhotoSection, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = PhotoSection;

var _c;

$RefreshReg$(_c, "PhotoSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Bob3RvU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJQaG90b1NlY3Rpb24iLCJ1c2VyIiwib25SYXRlUG9zdCIsIm90aGVyVXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImltYWdlcyIsImdvVG9QaG90b3MiLCJwdXNoIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImNvbnRhaW5lcl9iZyIsInNlY3Rpb24iLCJzZWN0aW9uX3RpdGxlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFlBQVQsQ0FBc0I7QUFBRUMsTUFBRjtBQUFRQyxZQUFSO0FBQW9CQztBQUFwQixDQUF0QixFQUFzRDtBQUFBOztBQUNuRSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHTCxJQUFmOztBQUVBLFFBQU1NLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCSCxVQUFNLENBQUNJLElBQVAsQ0FBWSxTQUFaO0FBQ0QsR0FGRDs7QUFHQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxpREFBVSxDQUFDQyx3RUFBTSxDQUFDQyxZQUFSLEVBQXNCRCx3RUFBTSxDQUFDRSxPQUE3QixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQ1QsU0FBRCxHQUFXO0FBQUssYUFBUyxFQUFFTyx3RUFBTSxDQUFDRyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVSxFQUVWLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsTUFBYjtBQUFvQixXQUFPLEVBQUVOLFVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRlUsQ0FBWCxHQUtNLElBTlQsRUFPR0QsTUFBTSxJQUFJQSxNQUFNLENBQUNRLE1BQVAsS0FBa0IsQ0FBNUIsSUFDQyxNQUFDLGtEQUFEO0FBQ0UsVUFBTSxFQUFFUixNQURWO0FBRUUsY0FBVSxFQUFFSixVQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURGO0FBZ0JEOztHQXZCdUJGLFk7VUFDUEsscUQ7OztLQURPTCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUvW3VzZXJuYW1lXS5jNzJhOWMxOWI0ODRlZjJmYWNiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBQaG90b0xpc3QgZnJvbSAnLi9QaG90b0xpc3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcGhvdG8tc2VjdGlvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b1NlY3Rpb24oeyB1c2VyLCBvblJhdGVQb3N0LCBvdGhlclVzZXJ9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaW1hZ2VzID0gdXNlcjtcclxuICBcclxuICBjb25zdCBnb1RvUGhvdG9zID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy9waG90b3MnKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29udGFpbmVyX2JnLCBzdHlsZXMuc2VjdGlvbil9PlxyXG4gICAgICB7IW90aGVyVXNlcj88ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fdGl0bGV9PlxyXG4gICAgICAgIDxwPlJlY2VudCBwaG90b3M8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIG9uQ2xpY2s9e2dvVG9QaG90b3N9PlxyXG4gICAgICAgICAgQWxsIHBob3Rvc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj46bnVsbH1cclxuICAgICAge2ltYWdlcyAmJiBpbWFnZXMubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICA8UGhvdG9MaXN0XHJcbiAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==