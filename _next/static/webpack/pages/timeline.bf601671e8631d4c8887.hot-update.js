webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/forms/rating/RatingSlide.js":
/*!************************************************!*\
  !*** ./components/forms/rating/RatingSlide.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatingSlide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/rating.module.scss */ "./components/forms/rating/styles/rating.module.scss");
/* harmony import */ var _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\freeskies_fe_code\\components\\forms\\rating\\RatingSlide.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function RatingSlide({
  dark,
  size,
  defaultRate = 0,
  onChange,
  withoutText
}) {
  _s();

  const sliderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: rate,
    1: setRate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: blockRequest,
    1: setBlockRequest
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const handleChange = value => {
    setBlockRequest(false);
    setRate(value);
  };

  const handleChangeRate = rate => {
    // if (!blockRequest && onChange) 
    onChange(rate);
    setBlockRequest(false);

    if (navigator.userAgent.toLowerCase().indexOf('firefox') > 0) {
      sliderRef.current.blur(); // fix mozilla problem
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setRate(defaultRate || 0);
  }, [defaultRate]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rating, {
      [_styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dark]: dark,
      [_styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[size]]: size
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.star_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"] // disabled
  // allowHalf
  , {
    value: rate,
    style: {
      color: '#fadb14',
      fontSize: '1.2em'
    },
    onHoverChange: e => {
      if (typeof e !== 'undefined') {
        handleChange(e);
        handleChangeRate(e);
      }
    },
    onFocus: e => {
      handleChange(e);
      handleChangeRate(e);
    },
    onTouchStart: e => {
      handleChange(e);
      handleChangeRate(e);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), !withoutText && __jsx("span", {
    className: _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, rate.toFixed(1)));
}

_s(RatingSlide, "qtXWKCy6Btkn0h5bTy7mn/NiRL0=");

_c = RatingSlide;

var _c;

$RefreshReg$(_c, "RatingSlide");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUuanMiXSwibmFtZXMiOlsiUmF0aW5nU2xpZGUiLCJkYXJrIiwic2l6ZSIsImRlZmF1bHRSYXRlIiwib25DaGFuZ2UiLCJ3aXRob3V0VGV4dCIsInNsaWRlclJlZiIsInVzZVJlZiIsInJhdGUiLCJzZXRSYXRlIiwidXNlU3RhdGUiLCJibG9ja1JlcXVlc3QiLCJzZXRCbG9ja1JlcXVlc3QiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVJhdGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJjdXJyZW50IiwiYmx1ciIsInVzZUVmZmVjdCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJyYXRpbmciLCJzdGFyX2NvbnRhaW5lciIsImNvbG9yIiwiZm9udFNpemUiLCJlIiwicmF0aW5nX3RleHQiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUI7QUFDbENDLE1BRGtDO0FBRWxDQyxNQUZrQztBQUdsQ0MsYUFBVyxHQUFHLENBSG9CO0FBSWxDQyxVQUprQztBQUtsQ0M7QUFMa0MsQ0FBckIsRUFNWjtBQUFBOztBQUNELFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLENBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NGLHNEQUFRLENBQUMsSUFBRCxDQUFoRDs7QUFFQSxRQUFNRyxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUM5QkYsbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUgsV0FBTyxDQUFDSyxLQUFELENBQVA7QUFDRCxHQUhEOztBQUtBLFFBQU1DLGdCQUFnQixHQUFJUCxJQUFELElBQVU7QUFDakM7QUFDQUosWUFBUSxDQUFDSSxJQUFELENBQVI7QUFDQUksbUJBQWUsQ0FBQyxLQUFELENBQWY7O0FBRUEsUUFBSUksU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxXQUFwQixHQUFrQ0MsT0FBbEMsQ0FBMEMsU0FBMUMsSUFBdUQsQ0FBM0QsRUFBOEQ7QUFDNURiLGVBQVMsQ0FBQ2MsT0FBVixDQUFrQkMsSUFBbEIsR0FENEQsQ0FDbEM7QUFDM0I7QUFDRixHQVJEOztBQVVBQyx5REFBUyxDQUFDLE1BQU07QUFDZGIsV0FBTyxDQUFDTixXQUFXLElBQUksQ0FBaEIsQ0FBUDtBQUNELEdBRlEsRUFFTixDQUFDQSxXQUFELENBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFDRSxhQUFTLEVBQUVvQixpREFBVSxDQUFDQyxpRUFBTSxDQUFDQyxNQUFSLEVBQWdCO0FBQ25DLE9BQUNELGlFQUFNLENBQUN2QixJQUFSLEdBQWVBLElBRG9CO0FBRW5DLE9BQUN1QixpRUFBTSxDQUFDdEIsSUFBRCxDQUFQLEdBQWdCQTtBQUZtQixLQUFoQixDQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBSyxhQUFTLEVBQUVzQixpRUFBTSxDQUFDRSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUNFO0FBQ0E7QUFGRjtBQUdFLFNBQUssRUFBRWxCLElBSFQ7QUFJRSxTQUFLLEVBQUU7QUFBRW1CLFdBQUssRUFBRSxTQUFUO0FBQW9CQyxjQUFRLEVBQUU7QUFBOUIsS0FKVDtBQUtFLGlCQUFhLEVBQUdDLENBQUQsSUFBTztBQUNwQixVQUFHLE9BQU9BLENBQVAsS0FBYSxXQUFoQixFQUE2QjtBQUMzQmhCLG9CQUFZLENBQUNnQixDQUFELENBQVo7QUFDQWQsd0JBQWdCLENBQUNjLENBQUQsQ0FBaEI7QUFDRDtBQUNGLEtBVkg7QUFXRSxXQUFPLEVBQUdBLENBQUQsSUFBTztBQUNkaEIsa0JBQVksQ0FBQ2dCLENBQUQsQ0FBWjtBQUNBZCxzQkFBZ0IsQ0FBQ2MsQ0FBRCxDQUFoQjtBQUNELEtBZEg7QUFlRSxnQkFBWSxFQUFHQSxDQUFELElBQU07QUFDbEJoQixrQkFBWSxDQUFDZ0IsQ0FBRCxDQUFaO0FBQ0FkLHNCQUFnQixDQUFDYyxDQUFELENBQWhCO0FBQ0QsS0FsQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsRUEyQ0csQ0FBQ3hCLFdBQUQsSUFDQztBQUFNLGFBQVMsRUFBRW1CLGlFQUFNLENBQUNNLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0N0QixJQUFJLENBQUN1QixPQUFMLENBQWEsQ0FBYixDQUF0QyxDQTVDSixDQURGO0FBaUREOztHQWhGdUIvQixXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLmJmNjAxNjcxZTg2MzFkNGM4ODg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYXRlLCBTbGlkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3JhdGluZy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmF0aW5nU2xpZGUoe1xyXG4gIGRhcmssXHJcbiAgc2l6ZSxcclxuICBkZWZhdWx0UmF0ZSA9IDAsXHJcbiAgb25DaGFuZ2UsXHJcbiAgd2l0aG91dFRleHQsXHJcbn0pIHtcclxuICBjb25zdCBzbGlkZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtibG9ja1JlcXVlc3QsIHNldEJsb2NrUmVxdWVzdF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRCbG9ja1JlcXVlc3QoZmFsc2UpO1xyXG4gICAgc2V0UmF0ZSh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUmF0ZSA9IChyYXRlKSA9PiB7XHJcbiAgICAvLyBpZiAoIWJsb2NrUmVxdWVzdCAmJiBvbkNoYW5nZSkgXHJcbiAgICBvbkNoYW5nZShyYXRlKTtcclxuICAgIHNldEJsb2NrUmVxdWVzdChmYWxzZSk7XHJcblxyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAwKSB7XHJcbiAgICAgIHNsaWRlclJlZi5jdXJyZW50LmJsdXIoKTsgLy8gZml4IG1vemlsbGEgcHJvYmxlbVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRSYXRlKGRlZmF1bHRSYXRlIHx8IDApO1xyXG4gIH0sIFtkZWZhdWx0UmF0ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLnJhdGluZywge1xyXG4gICAgICAgIFtzdHlsZXMuZGFya106IGRhcmssXHJcbiAgICAgICAgW3N0eWxlc1tzaXplXV06IHNpemUsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJfY29udGFpbmVyfT5cclxuICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgLy8gZGlzYWJsZWRcclxuICAgICAgICAgIC8vIGFsbG93SGFsZlxyXG4gICAgICAgICAgdmFsdWU9e3JhdGV9XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzEuMmVtJyB9fVxyXG4gICAgICAgICAgb25Ib3ZlckNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGUpO1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZVJhdGUoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZSk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZVJhdGUoZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXsoZSk9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlUmF0ZShlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyfT5cclxuICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgcmVmPXtzbGlkZXJSZWZ9XHJcbiAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgbWF4PXs1fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0b29sdGlwVmlzaWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQWZ0ZXJDaGFuZ2U9eygpID0+IHtjb25zb2xlLmxvZygnZmRhc2ZkYXMnKVxyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZVJhdGUoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3JhdGV9XHJcbiAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshd2l0aG91dFRleHQgJiYgKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ190ZXh0fT57cmF0ZS50b0ZpeGVkKDEpfTwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==