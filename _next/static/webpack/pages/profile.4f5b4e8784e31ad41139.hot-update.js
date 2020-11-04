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
    console.log(value); // setBlockRequest(false);

    setRate(value);
  };

  var handleChangeRate = function handleChangeRate(rate) {
    console.log(blockRequest, onChange);
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
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"] // disabled
  // allowHalf
  , {
    value: rate,
    style: {
      color: '#fadb14',
      fontSize: '1.2em'
    },
    onHoverChange: function onHoverChange(e) {
      if (typeof e !== 'undefined') {
        handleChange(e);
        handleChangeRate(e);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), !withoutText && __jsx("span", {
    className: _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUuanMiXSwibmFtZXMiOlsiUmF0aW5nU2xpZGUiLCJkYXJrIiwic2l6ZSIsImRlZmF1bHRSYXRlIiwib25DaGFuZ2UiLCJ3aXRob3V0VGV4dCIsInNsaWRlclJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicmF0ZSIsInNldFJhdGUiLCJibG9ja1JlcXVlc3QiLCJzZXRCbG9ja1JlcXVlc3QiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VSYXRlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiY3VycmVudCIsImJsdXIiLCJ1c2VFZmZlY3QiLCJjbGFzc25hbWVzIiwic3R5bGVzIiwicmF0aW5nIiwic3Rhcl9jb250YWluZXIiLCJjb2xvciIsImZvbnRTaXplIiwiZSIsInJhdGluZ190ZXh0IiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULE9BTVo7QUFBQTs7QUFBQTs7QUFBQSxNQUxEQyxJQUtDLFFBTERBLElBS0M7QUFBQSxNQUpEQyxJQUlDLFFBSkRBLElBSUM7QUFBQSw4QkFIREMsV0FHQztBQUFBLE1BSERBLFdBR0MsaUNBSGEsQ0FHYjtBQUFBLE1BRkRDLFFBRUMsUUFGREEsUUFFQztBQUFBLE1BRERDLFdBQ0MsUUFEREEsV0FDQztBQUNELE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCOztBQURDLGtCQUd1QkMsc0RBQVEsQ0FBQyxDQUFELENBSC9CO0FBQUEsTUFHTUMsSUFITjtBQUFBLE1BR1lDLE9BSFo7O0FBQUEsbUJBSXVDRixzREFBUSxDQUFDLElBQUQsQ0FKL0M7QUFBQSxNQUlNRyxZQUpOO0FBQUEsTUFJb0JDLGVBSnBCOztBQU1ELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQUFELENBQzlCOztBQUNBSixXQUFPLENBQUNJLEtBQUQsQ0FBUDtBQUNELEdBSEQ7O0FBS0EsTUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDUixJQUFELEVBQVU7QUFBQ00sV0FBTyxDQUFDQyxHQUFSLENBQVlMLFlBQVosRUFBMEJQLFFBQTFCO0FBQ2xDLFFBQUksQ0FBQ08sWUFBRCxJQUFpQlAsUUFBckIsRUFBK0JBLFFBQVEsQ0FBQ0ssSUFBRCxDQUFSO0FBQy9CRyxtQkFBZSxDQUFDLElBQUQsQ0FBZjs7QUFFQSxRQUFJTSxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFdBQXBCLEdBQWtDQyxPQUFsQyxDQUEwQyxTQUExQyxJQUF1RCxDQUEzRCxFQUE4RDtBQUM1RGYsZUFBUyxDQUFDZ0IsT0FBVixDQUFrQkMsSUFBbEIsR0FENEQsQ0FDbEM7QUFDM0I7QUFDRixHQVBEOztBQVNBQyx5REFBUyxDQUFDLFlBQU07QUFDZGQsV0FBTyxDQUFDUCxXQUFXLElBQUksQ0FBaEIsQ0FBUDtBQUNELEdBRlEsRUFFTixDQUFDQSxXQUFELENBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFDRSxhQUFTLEVBQUVzQixpREFBVSxDQUFDQyxpRUFBTSxDQUFDQyxNQUFSLDRIQUNsQkQsaUVBQU0sQ0FBQ3pCLElBRFcsRUFDSkEsSUFESSwwR0FFbEJ5QixpRUFBTSxDQUFDeEIsSUFBRCxDQUZZLEVBRUhBLElBRkcsZ0JBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLGFBQVMsRUFBRXdCLGlFQUFNLENBQUNFLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFELENBQ0U7QUFDQTtBQUZGO0FBR0UsU0FBSyxFQUFFbkIsSUFIVDtBQUlFLFNBQUssRUFBRTtBQUFFb0IsV0FBSyxFQUFFLFNBQVQ7QUFBb0JDLGNBQVEsRUFBRTtBQUE5QixLQUpUO0FBS0UsaUJBQWEsRUFBRSx1QkFBQ0MsQ0FBRCxFQUFPO0FBQ3BCLFVBQUcsT0FBT0EsQ0FBUCxLQUFhLFdBQWhCLEVBQTZCO0FBQzNCbEIsb0JBQVksQ0FBQ2tCLENBQUQsQ0FBWjtBQUNBZCx3QkFBZ0IsQ0FBQ2MsQ0FBRCxDQUFoQjtBQUNEO0FBQ0YsS0FWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FORixFQW1DRyxDQUFDMUIsV0FBRCxJQUNDO0FBQU0sYUFBUyxFQUFFcUIsaUVBQU0sQ0FBQ00sV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ3ZCLElBQUksQ0FBQ3dCLE9BQUwsQ0FBYSxDQUFiLENBQXRDLENBcENKLENBREY7QUF5Q0Q7O0dBdkV1QmpDLFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS40ZjViNGU4Nzg0ZTMxYWQ0MTEzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmF0ZSwgU2xpZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9yYXRpbmcubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhdGluZ1NsaWRlKHtcclxuICBkYXJrLFxyXG4gIHNpemUsXHJcbiAgZGVmYXVsdFJhdGUgPSAwLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIHdpdGhvdXRUZXh0LFxyXG59KSB7XHJcbiAgY29uc3Qgc2xpZGVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYmxvY2tSZXF1ZXN0LCBzZXRCbG9ja1JlcXVlc3RdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge2NvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgLy8gc2V0QmxvY2tSZXF1ZXN0KGZhbHNlKTtcclxuICAgIHNldFJhdGUodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVJhdGUgPSAocmF0ZSkgPT4ge2NvbnNvbGUubG9nKGJsb2NrUmVxdWVzdCwgb25DaGFuZ2UpXHJcbiAgICBpZiAoIWJsb2NrUmVxdWVzdCAmJiBvbkNoYW5nZSkgb25DaGFuZ2UocmF0ZSk7XHJcbiAgICBzZXRCbG9ja1JlcXVlc3QodHJ1ZSk7XHJcblxyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAwKSB7XHJcbiAgICAgIHNsaWRlclJlZi5jdXJyZW50LmJsdXIoKTsgLy8gZml4IG1vemlsbGEgcHJvYmxlbVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRSYXRlKGRlZmF1bHRSYXRlIHx8IDApO1xyXG4gIH0sIFtkZWZhdWx0UmF0ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLnJhdGluZywge1xyXG4gICAgICAgIFtzdHlsZXMuZGFya106IGRhcmssXHJcbiAgICAgICAgW3N0eWxlc1tzaXplXV06IHNpemUsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJfY29udGFpbmVyfT5cclxuICAgICAgICA8UmF0ZVxyXG4gICAgICAgICAgLy8gZGlzYWJsZWRcclxuICAgICAgICAgIC8vIGFsbG93SGFsZlxyXG4gICAgICAgICAgdmFsdWU9e3JhdGV9XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmYWRiMTQnLCBmb250U2l6ZTogJzEuMmVtJyB9fVxyXG4gICAgICAgICAgb25Ib3ZlckNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGUpO1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZVJhdGUoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyfT5cclxuICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgcmVmPXtzbGlkZXJSZWZ9XHJcbiAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgbWF4PXs1fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0b29sdGlwVmlzaWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQWZ0ZXJDaGFuZ2U9eygpID0+IHtjb25zb2xlLmxvZygnZmRhc2ZkYXMnKVxyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZVJhdGUoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3JhdGV9XHJcbiAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshd2l0aG91dFRleHQgJiYgKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ190ZXh0fT57cmF0ZS50b0ZpeGVkKDEpfTwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==