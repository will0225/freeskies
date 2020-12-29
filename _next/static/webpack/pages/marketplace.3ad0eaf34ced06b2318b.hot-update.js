webpackHotUpdate_N_E("pages/marketplace",{

/***/ "./containers/Marketplace/storage/MarketplaceContext.js":
/*!**************************************************************!*\
  !*** ./containers/Marketplace/storage/MarketplaceContext.js ***!
  \**************************************************************/
/*! exports provided: SET_LOADING, SET_POST_LOADING, MARKETPLACE_SALE_DATA, MARKETPLACE_BUY_DATA, MARKETPLACE_CATEGORIES, MarketplaceContext, MarketplaceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POST_LOADING", function() { return SET_POST_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARKETPLACE_SALE_DATA", function() { return MARKETPLACE_SALE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARKETPLACE_BUY_DATA", function() { return MARKETPLACE_BUY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARKETPLACE_CATEGORIES", function() { return MARKETPLACE_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceContext", function() { return MarketplaceContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceProvider", function() { return MarketplaceProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "D:\\Freeskies-development-\\containers\\Marketplace\\storage\\MarketplaceContext.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Actions Type

var SET_LOADING = 'market/SET_LOADING';
var SET_POST_LOADING = 'market/SET_POST_LOADING';
var MARKETPLACE_SALE_DATA = 'market/MARKETPLACE_SALE_DATA';
var MARKETPLACE_BUY_DATA = 'market/MARKETPLACE_BUY_DATA';
var MARKETPLACE_CATEGORIES = 'market/MARKETPLACE_CATEGORIES';
var initialState = {
  loading: false,
  post_loading: false,
  market_sale_data: [],
  market_buy_data: [],
  market_categories: ['dfds', 'dfsd']
};

function reducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case SET_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: payload
      });

    case SET_POST_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        post_loading: payload
      });

    case MARKETPLACE_SALE_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        market_sale_data: payload
      });

    case MARKETPLACE_BUY_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        market_buy_data: payload
      });

    case MARKETPLACE_CATEGORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        market_categories: payload
      });

    default:
      return state;
  }
}

var MarketplaceContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])([{}, function () {}]);
var MarketplaceProvider = function MarketplaceProvider(_ref2) {
  _s();

  var children = _ref2.children;
  var value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState);
  return __jsx(MarketplaceContext.Provider, {
    value: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, children);
};

_s(MarketplaceProvider, "HDl9A1duRDI+maTNi9v2R1p+EwQ=");

_c = MarketplaceProvider;

var _c;

$RefreshReg$(_c, "MarketplaceProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NYXJrZXRwbGFjZS9zdG9yYWdlL01hcmtldHBsYWNlQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJTRVRfTE9BRElORyIsIlNFVF9QT1NUX0xPQURJTkciLCJNQVJLRVRQTEFDRV9TQUxFX0RBVEEiLCJNQVJLRVRQTEFDRV9CVVlfREFUQSIsIk1BUktFVFBMQUNFX0NBVEVHT1JJRVMiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwicG9zdF9sb2FkaW5nIiwibWFya2V0X3NhbGVfZGF0YSIsIm1hcmtldF9idXlfZGF0YSIsIm1hcmtldF9jYXRlZ29yaWVzIiwicmVkdWNlciIsInN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJNYXJrZXRwbGFjZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTWFya2V0cGxhY2VQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sSUFBTUEsV0FBVyxHQUFHLG9CQUFwQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLHlCQUF6QjtBQUNBLElBQU1DLHFCQUFxQixHQUFHLDhCQUE5QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLDZCQUE3QjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLCtCQUEvQjtBQUVQLElBQU1DLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLEtBRFU7QUFFbkJDLGNBQVksRUFBRSxLQUZLO0FBR25CQyxrQkFBZ0IsRUFBRSxFQUhDO0FBSW5CQyxpQkFBZSxFQUFFLEVBSkU7QUFLbkJDLG1CQUFpQixFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQ7QUFMQSxDQUFyQjs7QUFRQSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixRQUEyQztBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQ3pDLFVBQVFELElBQVI7QUFDRSxTQUFLYixXQUFMO0FBQ0UsNkNBQVlZLEtBQVo7QUFBbUJOLGVBQU8sRUFBRVE7QUFBNUI7O0FBQ0YsU0FBS2IsZ0JBQUw7QUFDRSw2Q0FBWVcsS0FBWjtBQUFtQkwsb0JBQVksRUFBRU87QUFBakM7O0FBQ0YsU0FBS1oscUJBQUw7QUFDRSw2Q0FBWVUsS0FBWjtBQUFtQkosd0JBQWdCLEVBQUVNO0FBQXJDOztBQUNGLFNBQUtYLG9CQUFMO0FBQ0UsNkNBQVlTLEtBQVo7QUFBbUJILHVCQUFlLEVBQUVLO0FBQXBDOztBQUNGLFNBQUtWLHNCQUFMO0FBQ0UsNkNBQVlRLEtBQVo7QUFBbUJGLHlCQUFpQixFQUFFSTtBQUF0Qzs7QUFDRjtBQUNFLGFBQU9GLEtBQVA7QUFaSjtBQWNEOztBQUVNLElBQU1HLGtCQUFrQixnQkFBR0MsMkRBQWEsQ0FBQyxDQUFDLEVBQUQsRUFBSyxZQUFNLENBQUUsQ0FBYixDQUFELENBQXhDO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixRQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUNuRCxNQUFNQyxLQUFLLEdBQUdDLHdEQUFVLENBQUNULE9BQUQsRUFBVU4sWUFBVixDQUF4QjtBQUNBLFNBQ0UsTUFBQyxrQkFBRCxDQUFvQixRQUFwQjtBQUE2QixTQUFLLEVBQUVjLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsUUFESCxDQURGO0FBS0QsQ0FQTTs7R0FBTUQsbUI7O0tBQUFBLG1CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcmtldHBsYWNlLjNhZDBlYWYzNGNlZDA2YjIzMThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gQWN0aW9ucyBUeXBlXHJcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9ICdtYXJrZXQvU0VUX0xPQURJTkcnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BPU1RfTE9BRElORyA9ICdtYXJrZXQvU0VUX1BPU1RfTE9BRElORyc7XHJcbmV4cG9ydCBjb25zdCBNQVJLRVRQTEFDRV9TQUxFX0RBVEEgPSAnbWFya2V0L01BUktFVFBMQUNFX1NBTEVfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBNQVJLRVRQTEFDRV9CVVlfREFUQSA9ICdtYXJrZXQvTUFSS0VUUExBQ0VfQlVZX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgTUFSS0VUUExBQ0VfQ0FURUdPUklFUyA9ICdtYXJrZXQvTUFSS0VUUExBQ0VfQ0FURUdPUklFUyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgcG9zdF9sb2FkaW5nOiBmYWxzZSxcclxuICBtYXJrZXRfc2FsZV9kYXRhOiBbXSxcclxuICBtYXJrZXRfYnV5X2RhdGE6IFtdLFxyXG4gIG1hcmtldF9jYXRlZ29yaWVzOiBbJ2RmZHMnLCAnZGZzZCddXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBTRVRfTE9BRElORzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgU0VUX1BPU1RfTE9BRElORzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvc3RfbG9hZGluZzogcGF5bG9hZCB9O1xyXG4gICAgY2FzZSBNQVJLRVRQTEFDRV9TQUxFX0RBVEE6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtYXJrZXRfc2FsZV9kYXRhOiBwYXlsb2FkIH07XHJcbiAgICBjYXNlIE1BUktFVFBMQUNFX0JVWV9EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWFya2V0X2J1eV9kYXRhOiBwYXlsb2FkIH07XHJcbiAgICBjYXNlIE1BUktFVFBMQUNFX0NBVEVHT1JJRVM6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtYXJrZXRfY2F0ZWdvcmllczogcGF5bG9hZCB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFya2V0cGxhY2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dChbe30sICgpID0+IHt9XSk7XHJcblxyXG5leHBvcnQgY29uc3QgTWFya2V0cGxhY2VQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1hcmtldHBsYWNlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L01hcmtldHBsYWNlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9