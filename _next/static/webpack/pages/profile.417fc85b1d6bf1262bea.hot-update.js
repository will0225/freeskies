webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/forms/rating/RatingSlide.js":
/*!************************************************!*\
  !*** ./components/forms/rating/RatingSlide.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatingSlide; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/rating.module.scss */ "./components/forms/rating/styles/rating.module.scss");
/* harmony import */ var _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "E:\\freeskies_fe_code\\components\\forms\\rating\\RatingSlide.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function RatingSlide(_ref) {
  _s();

  var _classnames;

  var dark = _ref.dark,
      size = _ref.size,
      _ref$defaultRate = _ref.defaultRate,
      defaultRate = _ref$defaultRate === void 0 ? 0 : _ref$defaultRate,
      onChange = _ref.onChange,
      withoutText = _ref.withoutText;
  var sliderRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      rate = _useState[0],
      setRate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      blockRequest = _useState2[0],
      setBlockRequest = _useState2[1];

  var handleChange = function handleChange(value) {
    setBlockRequest(false);
    setRate(value);
  };

  var handleChangeRate = function handleChangeRate() {
    if (!blockRequest && onChange) onChange(rate);
    setBlockRequest(true);

    if (navigator.userAgent.toLowerCase().indexOf('firefox') > 0) {
      sliderRef.current.blur(); // fix mozilla problem
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setRate(defaultRate || 0);
  }, [defaultRate]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.rating, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dark, dark), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[size], size), _classnames)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.star_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
    allowHalf: true,
    value: rate,
    style: {
      color: '#fadb14',
      fontSize: '1.2em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    ref: sliderRef,
    min: 0,
    max: 5,
    onChange: handleChange,
    tooltipVisible: false,
    onAfterChange: function onAfterChange() {
      handleChangeRate();
    },
    autoFocus: true,
    value: rate,
    step: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }))), !withoutText && __jsx("span", {
    className: _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUuanMiXSwibmFtZXMiOlsiUmF0aW5nU2xpZGUiLCJkYXJrIiwic2l6ZSIsImRlZmF1bHRSYXRlIiwib25DaGFuZ2UiLCJ3aXRob3V0VGV4dCIsInNsaWRlclJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicmF0ZSIsInNldFJhdGUiLCJibG9ja1JlcXVlc3QiLCJzZXRCbG9ja1JlcXVlc3QiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVJhdGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJjdXJyZW50IiwiYmx1ciIsInVzZUVmZmVjdCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJyYXRpbmciLCJzdGFyX2NvbnRhaW5lciIsImNvbG9yIiwiZm9udFNpemUiLCJzbGlkZXIiLCJyYXRpbmdfdGV4dCIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQU1aO0FBQUE7O0FBQUE7O0FBQUEsTUFMREMsSUFLQyxRQUxEQSxJQUtDO0FBQUEsTUFKREMsSUFJQyxRQUpEQSxJQUlDO0FBQUEsOEJBSERDLFdBR0M7QUFBQSxNQUhEQSxXQUdDLGlDQUhhLENBR2I7QUFBQSxNQUZEQyxRQUVDLFFBRkRBLFFBRUM7QUFBQSxNQUREQyxXQUNDLFFBRERBLFdBQ0M7QUFDRCxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFEQyxrQkFHdUJDLHNEQUFRLENBQUMsQ0FBRCxDQUgvQjtBQUFBLE1BR01DLElBSE47QUFBQSxNQUdZQyxPQUhaOztBQUFBLG1CQUl1Q0Ysc0RBQVEsQ0FBQyxJQUFELENBSi9DO0FBQUEsTUFJTUcsWUFKTjtBQUFBLE1BSW9CQyxlQUpwQjs7QUFNRCxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUJGLG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0FGLFdBQU8sQ0FBQ0ksS0FBRCxDQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsUUFBSSxDQUFDSixZQUFELElBQWlCUCxRQUFyQixFQUErQkEsUUFBUSxDQUFDSyxJQUFELENBQVI7QUFDL0JHLG1CQUFlLENBQUMsSUFBRCxDQUFmOztBQUVBLFFBQUlJLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsV0FBcEIsR0FBa0NDLE9BQWxDLENBQTBDLFNBQTFDLElBQXVELENBQTNELEVBQThEO0FBQzVEYixlQUFTLENBQUNjLE9BQVYsQ0FBa0JDLElBQWxCLEdBRDRELENBQ2xDO0FBQzNCO0FBQ0YsR0FQRDs7QUFTQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RaLFdBQU8sQ0FBQ1AsV0FBVyxJQUFJLENBQWhCLENBQVA7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsV0FBRCxDQUZNLENBQVQ7QUFJQSxTQUNFO0FBQ0UsYUFBUyxFQUFFb0IsaURBQVUsQ0FBQ0MsaUVBQU0sQ0FBQ0MsTUFBUiw0SEFDbEJELGlFQUFNLENBQUN2QixJQURXLEVBQ0pBLElBREksMEdBRWxCdUIsaUVBQU0sQ0FBQ3RCLElBQUQsQ0FGWSxFQUVIQSxJQUZHLGdCQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBSyxhQUFTLEVBQUVzQixpRUFBTSxDQUFDRSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFNBQUssRUFBRWpCLElBRlQ7QUFHRSxTQUFLLEVBQUU7QUFBRWtCLFdBQUssRUFBRSxTQUFUO0FBQW9CQyxjQUFRLEVBQUU7QUFBOUIsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUFLLGFBQVMsRUFBRUosaUVBQU0sQ0FBQ0ssTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxPQUFHLEVBQUV2QixTQURQO0FBRUUsT0FBRyxFQUFFLENBRlA7QUFHRSxPQUFHLEVBQUUsQ0FIUDtBQUlFLFlBQVEsRUFBRU8sWUFKWjtBQUtFLGtCQUFjLEVBQUUsS0FMbEI7QUFNRSxpQkFBYSxFQUFFLHlCQUFNO0FBQ25CRSxzQkFBZ0I7QUFDakIsS0FSSDtBQVNFLGFBQVMsRUFBRSxJQVRiO0FBVUUsU0FBSyxFQUFFTixJQVZUO0FBV0UsUUFBSSxFQUFFLENBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsQ0FORixFQTZCRyxDQUFDSixXQUFELElBQ0M7QUFBTSxhQUFTLEVBQUVtQixpRUFBTSxDQUFDTSxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDckIsSUFBSSxDQUFDc0IsT0FBTCxDQUFhLENBQWIsQ0FBdEMsQ0E5QkosQ0FERjtBQW1DRDs7R0FqRXVCL0IsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjQxN2ZjODViMWQ2YmYxMjYyYmVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYXRlLCBTbGlkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3JhdGluZy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmF0aW5nU2xpZGUoe1xyXG4gIGRhcmssXHJcbiAgc2l6ZSxcclxuICBkZWZhdWx0UmF0ZSA9IDAsXHJcbiAgb25DaGFuZ2UsXHJcbiAgd2l0aG91dFRleHQsXHJcbn0pIHtcclxuICBjb25zdCBzbGlkZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtibG9ja1JlcXVlc3QsIHNldEJsb2NrUmVxdWVzdF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRCbG9ja1JlcXVlc3QoZmFsc2UpO1xyXG4gICAgc2V0UmF0ZSh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUmF0ZSA9ICgpID0+IHtcclxuICAgIGlmICghYmxvY2tSZXF1ZXN0ICYmIG9uQ2hhbmdlKSBvbkNoYW5nZShyYXRlKTtcclxuICAgIHNldEJsb2NrUmVxdWVzdCh0cnVlKTtcclxuXHJcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IDApIHtcclxuICAgICAgc2xpZGVyUmVmLmN1cnJlbnQuYmx1cigpOyAvLyBmaXggbW96aWxsYSBwcm9ibGVtXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJhdGUoZGVmYXVsdFJhdGUgfHwgMCk7XHJcbiAgfSwgW2RlZmF1bHRSYXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMucmF0aW5nLCB7XHJcbiAgICAgICAgW3N0eWxlcy5kYXJrXTogZGFyayxcclxuICAgICAgICBbc3R5bGVzW3NpemVdXTogc2l6ZSxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Rhcl9jb250YWluZXJ9PlxyXG4gICAgICAgIDxSYXRlXHJcbiAgICAgICAgICBhbGxvd0hhbGZcclxuICAgICAgICAgIHZhbHVlPXtyYXRlfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICcxLjJlbScgfX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XHJcbiAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgIHJlZj17c2xpZGVyUmVmfVxyXG4gICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgIG1heD17NX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdG9vbHRpcFZpc2libGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICBvbkFmdGVyQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlUmF0ZSgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtyYXRlfVxyXG4gICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshd2l0aG91dFRleHQgJiYgKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ190ZXh0fT57cmF0ZS50b0ZpeGVkKDEpfTwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==