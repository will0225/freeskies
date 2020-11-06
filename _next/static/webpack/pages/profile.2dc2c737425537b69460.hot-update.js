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

  var handleChangeRate = function handleChangeRate(rate) {
    // if (!blockRequest && onChange) 
    onChange(rate);
    setBlockRequest(false);

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
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.star_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
    onFocus: function onFocus(e) {
      console.log(e);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), !withoutText && __jsx("span", {
    className: _styles_rating_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.rating_text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9yYXRpbmcvUmF0aW5nU2xpZGUuanMiXSwibmFtZXMiOlsiUmF0aW5nU2xpZGUiLCJkYXJrIiwic2l6ZSIsImRlZmF1bHRSYXRlIiwib25DaGFuZ2UiLCJ3aXRob3V0VGV4dCIsInNsaWRlclJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicmF0ZSIsInNldFJhdGUiLCJibG9ja1JlcXVlc3QiLCJzZXRCbG9ja1JlcXVlc3QiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVJhdGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJjdXJyZW50IiwiYmx1ciIsInVzZUVmZmVjdCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJyYXRpbmciLCJzdGFyX2NvbnRhaW5lciIsImNvbG9yIiwiZm9udFNpemUiLCJlIiwiY29uc29sZSIsImxvZyIsInJhdGluZ190ZXh0IiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULE9BTVo7QUFBQTs7QUFBQTs7QUFBQSxNQUxEQyxJQUtDLFFBTERBLElBS0M7QUFBQSxNQUpEQyxJQUlDLFFBSkRBLElBSUM7QUFBQSw4QkFIREMsV0FHQztBQUFBLE1BSERBLFdBR0MsaUNBSGEsQ0FHYjtBQUFBLE1BRkRDLFFBRUMsUUFGREEsUUFFQztBQUFBLE1BRERDLFdBQ0MsUUFEREEsV0FDQztBQUNELE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCOztBQURDLGtCQUd1QkMsc0RBQVEsQ0FBQyxDQUFELENBSC9CO0FBQUEsTUFHTUMsSUFITjtBQUFBLE1BR1lDLE9BSFo7O0FBQUEsbUJBSXVDRixzREFBUSxDQUFDLElBQUQsQ0FKL0M7QUFBQSxNQUlNRyxZQUpOO0FBQUEsTUFJb0JDLGVBSnBCOztBQU1ELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QkYsbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUYsV0FBTyxDQUFDSSxLQUFELENBQVA7QUFDRCxHQUhEOztBQUtBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ04sSUFBRCxFQUFVO0FBQ2pDO0FBQ0FMLFlBQVEsQ0FBQ0ssSUFBRCxDQUFSO0FBQ0FHLG1CQUFlLENBQUMsS0FBRCxDQUFmOztBQUVBLFFBQUlJLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsV0FBcEIsR0FBa0NDLE9BQWxDLENBQTBDLFNBQTFDLElBQXVELENBQTNELEVBQThEO0FBQzVEYixlQUFTLENBQUNjLE9BQVYsQ0FBa0JDLElBQWxCLEdBRDRELENBQ2xDO0FBQzNCO0FBQ0YsR0FSRDs7QUFVQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RaLFdBQU8sQ0FBQ1AsV0FBVyxJQUFJLENBQWhCLENBQVA7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsV0FBRCxDQUZNLENBQVQ7QUFJQSxTQUNFO0FBQ0UsYUFBUyxFQUFFb0IsaURBQVUsQ0FBQ0MsaUVBQU0sQ0FBQ0MsTUFBUiw0SEFDbEJELGlFQUFNLENBQUN2QixJQURXLEVBQ0pBLElBREksMEdBRWxCdUIsaUVBQU0sQ0FBQ3RCLElBQUQsQ0FGWSxFQUVIQSxJQUZHLGdCQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBSyxhQUFTLEVBQUVzQixpRUFBTSxDQUFDRSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUNFO0FBQ0E7QUFGRjtBQUdFLFNBQUssRUFBRWpCLElBSFQ7QUFJRSxTQUFLLEVBQUU7QUFBRWtCLFdBQUssRUFBRSxTQUFUO0FBQW9CQyxjQUFRLEVBQUU7QUFBOUIsS0FKVDtBQUtFLGlCQUFhLEVBQUUsdUJBQUNDLENBQUQsRUFBTztBQUNwQixVQUFHLE9BQU9BLENBQVAsS0FBYSxXQUFoQixFQUE2QjtBQUMzQmhCLG9CQUFZLENBQUNnQixDQUFELENBQVo7QUFDQWQsd0JBQWdCLENBQUNjLENBQUQsQ0FBaEI7QUFDRDtBQUNGLEtBVkg7QUFXRSxXQUFPLEVBQUUsaUJBQUNBLENBQUQsRUFBTztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNELEtBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsRUFzQ0csQ0FBQ3hCLFdBQUQsSUFDQztBQUFNLGFBQVMsRUFBRW1CLGlFQUFNLENBQUNRLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0N2QixJQUFJLENBQUN3QixPQUFMLENBQWEsQ0FBYixDQUF0QyxDQXZDSixDQURGO0FBNENEOztHQTNFdUJqQyxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMmRjMmM3Mzc0MjU1MzdiNjk0NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhdGUsIFNsaWRlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvcmF0aW5nLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYXRpbmdTbGlkZSh7XHJcbiAgZGFyayxcclxuICBzaXplLFxyXG4gIGRlZmF1bHRSYXRlID0gMCxcclxuICBvbkNoYW5nZSxcclxuICB3aXRob3V0VGV4dCxcclxufSkge1xyXG4gIGNvbnN0IHNsaWRlclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Jsb2NrUmVxdWVzdCwgc2V0QmxvY2tSZXF1ZXN0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIHNldEJsb2NrUmVxdWVzdChmYWxzZSk7XHJcbiAgICBzZXRSYXRlKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VSYXRlID0gKHJhdGUpID0+IHtcclxuICAgIC8vIGlmICghYmxvY2tSZXF1ZXN0ICYmIG9uQ2hhbmdlKSBcclxuICAgIG9uQ2hhbmdlKHJhdGUpO1xyXG4gICAgc2V0QmxvY2tSZXF1ZXN0KGZhbHNlKTtcclxuXHJcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IDApIHtcclxuICAgICAgc2xpZGVyUmVmLmN1cnJlbnQuYmx1cigpOyAvLyBmaXggbW96aWxsYSBwcm9ibGVtXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJhdGUoZGVmYXVsdFJhdGUgfHwgMCk7XHJcbiAgfSwgW2RlZmF1bHRSYXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMucmF0aW5nLCB7XHJcbiAgICAgICAgW3N0eWxlcy5kYXJrXTogZGFyayxcclxuICAgICAgICBbc3R5bGVzW3NpemVdXTogc2l6ZSxcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Rhcl9jb250YWluZXJ9PlxyXG4gICAgICAgIDxSYXRlXHJcbiAgICAgICAgICAvLyBkaXNhYmxlZFxyXG4gICAgICAgICAgLy8gYWxsb3dIYWxmXHJcbiAgICAgICAgICB2YWx1ZT17cmF0ZX1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZhZGIxNCcsIGZvbnRTaXplOiAnMS4yZW0nIH19XHJcbiAgICAgICAgICBvbkhvdmVyQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZSk7XHJcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlUmF0ZShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRm9jdXM9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XHJcbiAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgIHJlZj17c2xpZGVyUmVmfVxyXG4gICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgIG1heD17NX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdG9vbHRpcFZpc2libGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICBvbkFmdGVyQ2hhbmdlPXsoKSA9PiB7Y29uc29sZS5sb2coJ2ZkYXNmZGFzJylcclxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VSYXRlKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXtyYXRlfVxyXG4gICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7IXdpdGhvdXRUZXh0ICYmIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdfdGV4dH0+e3JhdGUudG9GaXhlZCgxKX08L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=