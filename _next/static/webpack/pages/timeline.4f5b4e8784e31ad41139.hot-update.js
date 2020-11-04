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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUuanMiXSwibmFtZXMiOlsiUmF0aW5nU2xpZGUiLCJkYXJrIiwic2l6ZSIsImRlZmF1bHRSYXRlIiwib25DaGFuZ2UiLCJ3aXRob3V0VGV4dCIsInNsaWRlclJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicmF0ZSIsInNldFJhdGUiLCJibG9ja1JlcXVlc3QiLCJzZXRCbG9ja1JlcXVlc3QiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VSYXRlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiY3VycmVudCIsImJsdXIiLCJ1c2VFZmZlY3QiLCJjbGFzc25hbWVzIiwic3R5bGVzIiwicmF0aW5nIiwic3Rhcl9jb250YWluZXIiLCJjb2xvciIsImZvbnRTaXplIiwiZSIsInJhdGluZ190ZXh0IiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULE9BTVo7QUFBQTs7QUFBQTs7QUFBQSxNQUxEQyxJQUtDLFFBTERBLElBS0M7QUFBQSxNQUpEQyxJQUlDLFFBSkRBLElBSUM7QUFBQSw4QkFIREMsV0FHQztBQUFBLE1BSERBLFdBR0MsaUNBSGEsQ0FHYjtBQUFBLE1BRkRDLFFBRUMsUUFGREEsUUFFQztBQUFBLE1BRERDLFdBQ0MsUUFEREEsV0FDQztBQUNELE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCOztBQURDLGtCQUd1QkMsc0RBQVEsQ0FBQyxDQUFELENBSC9CO0FBQUEsTUFHTUMsSUFITjtBQUFBLE1BR1lDLE9BSFo7O0FBQUEsbUJBSXVDRixzREFBUSxDQUFDLElBQUQsQ0FKL0M7QUFBQSxNQUlNRyxZQUpOO0FBQUEsTUFJb0JDLGVBSnBCOztBQU1ELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQUFELENBQzlCOztBQUNBSixXQUFPLENBQUNJLEtBQUQsQ0FBUDtBQUNELEdBSEQ7O0FBS0EsTUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDUixJQUFELEVBQVU7QUFBQ00sV0FBTyxDQUFDQyxHQUFSLENBQVlMLFlBQVosRUFBMEJQLFFBQTFCO0FBQ2xDLFFBQUksQ0FBQ08sWUFBRCxJQUFpQlAsUUFBckIsRUFBK0JBLFFBQVEsQ0FBQ0ssSUFBRCxDQUFSO0FBQy9CRyxtQkFBZSxDQUFDLElBQUQsQ0FBZjs7QUFFQSxRQUFJTSxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFdBQXBCLEdBQWtDQyxPQUFsQyxDQUEwQyxTQUExQyxJQUF1RCxDQUEzRCxFQUE4RDtBQUM1RGYsZUFBUyxDQUFDZ0IsT0FBVixDQUFrQkMsSUFBbEIsR0FENEQsQ0FDbEM7QUFDM0I7QUFDRixHQVBEOztBQVNBQyx5REFBUyxDQUFDLFlBQU07QUFDZGQsV0FBTyxDQUFDUCxXQUFXLElBQUksQ0FBaEIsQ0FBUDtBQUNELEdBRlEsRUFFTixDQUFDQSxXQUFELENBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFDRSxhQUFTLEVBQUVzQixpREFBVSxDQUFDQyxpRUFBTSxDQUFDQyxNQUFSLDRIQUNsQkQsaUVBQU0sQ0FBQ3pCLElBRFcsRUFDSkEsSUFESSwwR0FFbEJ5QixpRUFBTSxDQUFDeEIsSUFBRCxDQUZZLEVBRUhBLElBRkcsZ0JBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLGFBQVMsRUFBRXdCLGlFQUFNLENBQUNFLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFELENBQ0U7QUFDQTtBQUZGO0FBR0UsU0FBSyxFQUFFbkIsSUFIVDtBQUlFLFNBQUssRUFBRTtBQUFFb0IsV0FBSyxFQUFFLFNBQVQ7QUFBb0JDLGNBQVEsRUFBRTtBQUE5QixLQUpUO0FBS0UsaUJBQWEsRUFBRSx1QkFBQ0MsQ0FBRCxFQUFPO0FBQ3BCLFVBQUcsT0FBT0EsQ0FBUCxLQUFhLFdBQWhCLEVBQTZCO0FBQzNCbEIsb0JBQVksQ0FBQ2tCLENBQUQsQ0FBWjtBQUNBZCx3QkFBZ0IsQ0FBQ2MsQ0FBRCxDQUFoQjtBQUNEO0FBQ0YsS0FWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FORixFQW1DRyxDQUFDMUIsV0FBRCxJQUNDO0FBQU0sYUFBUyxFQUFFcUIsaUVBQU0sQ0FBQ00sV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ3ZCLElBQUksQ0FBQ3dCLE9BQUwsQ0FBYSxDQUFiLENBQXRDLENBcENKLENBREY7QUF5Q0Q7O0dBdkV1QmpDLFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuNGY1YjRlODc4NGUzMWFkNDExMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhdGUsIFNsaWRlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcmF0aW5nLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYXRpbmdTbGlkZSh7XHJcbiAgZGFyayxcclxuICBzaXplLFxyXG4gIGRlZmF1bHRSYXRlID0gMCxcclxuICBvbkNoYW5nZSxcclxuICB3aXRob3V0VGV4dCxcclxufSkge1xyXG4gIGNvbnN0IHNsaWRlclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Jsb2NrUmVxdWVzdCwgc2V0QmxvY2tSZXF1ZXN0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIC8vIHNldEJsb2NrUmVxdWVzdChmYWxzZSk7XHJcbiAgICBzZXRSYXRlKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VSYXRlID0gKHJhdGUpID0+IHtjb25zb2xlLmxvZyhibG9ja1JlcXVlc3QsIG9uQ2hhbmdlKVxyXG4gICAgaWYgKCFibG9ja1JlcXVlc3QgJiYgb25DaGFuZ2UpIG9uQ2hhbmdlKHJhdGUpO1xyXG4gICAgc2V0QmxvY2tSZXF1ZXN0KHRydWUpO1xyXG5cclxuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gMCkge1xyXG4gICAgICBzbGlkZXJSZWYuY3VycmVudC5ibHVyKCk7IC8vIGZpeCBtb3ppbGxhIHByb2JsZW1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmF0ZShkZWZhdWx0UmF0ZSB8fCAwKTtcclxuICB9LCBbZGVmYXVsdFJhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5yYXRpbmcsIHtcclxuICAgICAgICBbc3R5bGVzLmRhcmtdOiBkYXJrLFxyXG4gICAgICAgIFtzdHlsZXNbc2l6ZV1dOiBzaXplLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPFJhdGVcclxuICAgICAgICAgIC8vIGRpc2FibGVkXHJcbiAgICAgICAgICAvLyBhbGxvd0hhbGZcclxuICAgICAgICAgIHZhbHVlPXtyYXRlfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmFkYjE0JywgZm9udFNpemU6ICcxLjJlbScgfX1cclxuICAgICAgICAgIG9uSG92ZXJDaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlKTtcclxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VSYXRlKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XHJcbiAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgIHJlZj17c2xpZGVyUmVmfVxyXG4gICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgIG1heD17NX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdG9vbHRpcFZpc2libGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICBvbkFmdGVyQ2hhbmdlPXsoKSA9PiB7Y29uc29sZS5sb2coJ2ZkYXNmZGFzJylcclxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VSYXRlKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXtyYXRlfVxyXG4gICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7IXdpdGhvdXRUZXh0ICYmIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdfdGV4dH0+e3JhdGUudG9GaXhlZCgxKX08L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=