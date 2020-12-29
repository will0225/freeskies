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
  market_categories: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NYXJrZXRwbGFjZS9zdG9yYWdlL01hcmtldHBsYWNlQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJTRVRfTE9BRElORyIsIlNFVF9QT1NUX0xPQURJTkciLCJNQVJLRVRQTEFDRV9TQUxFX0RBVEEiLCJNQVJLRVRQTEFDRV9CVVlfREFUQSIsIk1BUktFVFBMQUNFX0NBVEVHT1JJRVMiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwicG9zdF9sb2FkaW5nIiwibWFya2V0X3NhbGVfZGF0YSIsIm1hcmtldF9idXlfZGF0YSIsIm1hcmtldF9jYXRlZ29yaWVzIiwicmVkdWNlciIsInN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJNYXJrZXRwbGFjZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTWFya2V0cGxhY2VQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sSUFBTUEsV0FBVyxHQUFHLG9CQUFwQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLHlCQUF6QjtBQUNBLElBQU1DLHFCQUFxQixHQUFHLDhCQUE5QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLDZCQUE3QjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLCtCQUEvQjtBQUVQLElBQU1DLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLEtBRFU7QUFFbkJDLGNBQVksRUFBRSxLQUZLO0FBR25CQyxrQkFBZ0IsRUFBRSxFQUhDO0FBSW5CQyxpQkFBZSxFQUFFLEVBSkU7QUFLbkJDLG1CQUFpQixFQUFFO0FBTEEsQ0FBckI7O0FBUUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsUUFBMkM7QUFBQSxNQUFqQkMsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUN6QyxVQUFRRCxJQUFSO0FBQ0UsU0FBS2IsV0FBTDtBQUNFLDZDQUFZWSxLQUFaO0FBQW1CTixlQUFPLEVBQUVRO0FBQTVCOztBQUNGLFNBQUtiLGdCQUFMO0FBQ0UsNkNBQVlXLEtBQVo7QUFBbUJMLG9CQUFZLEVBQUVPO0FBQWpDOztBQUNGLFNBQUtaLHFCQUFMO0FBQ0UsNkNBQVlVLEtBQVo7QUFBbUJKLHdCQUFnQixFQUFFTTtBQUFyQzs7QUFDRixTQUFLWCxvQkFBTDtBQUNFLDZDQUFZUyxLQUFaO0FBQW1CSCx1QkFBZSxFQUFFSztBQUFwQzs7QUFDRixTQUFLVixzQkFBTDtBQUNFLDZDQUFZUSxLQUFaO0FBQW1CRix5QkFBaUIsRUFBRUk7QUFBdEM7O0FBQ0Y7QUFDRSxhQUFPRixLQUFQO0FBWko7QUFjRDs7QUFFTSxJQUFNRyxrQkFBa0IsZ0JBQUdDLDJEQUFhLENBQUMsQ0FBQyxFQUFELEVBQUssWUFBTSxDQUFFLENBQWIsQ0FBRCxDQUF4QztBQUVBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsUUFBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDbkQsTUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDVCxPQUFELEVBQVVOLFlBQVYsQ0FBeEI7QUFDQSxTQUNFLE1BQUMsa0JBQUQsQ0FBb0IsUUFBcEI7QUFBNkIsU0FBSyxFQUFFYyxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFFBREgsQ0FERjtBQUtELENBUE07O0dBQU1ELG1COztLQUFBQSxtQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXJrZXRwbGFjZS40Yjk1NzQ3OGY4YzMxZjQwZmIyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIEFjdGlvbnMgVHlwZVxyXG5leHBvcnQgY29uc3QgU0VUX0xPQURJTkcgPSAnbWFya2V0L1NFVF9MT0FESU5HJztcclxuZXhwb3J0IGNvbnN0IFNFVF9QT1NUX0xPQURJTkcgPSAnbWFya2V0L1NFVF9QT1NUX0xPQURJTkcnO1xyXG5leHBvcnQgY29uc3QgTUFSS0VUUExBQ0VfU0FMRV9EQVRBID0gJ21hcmtldC9NQVJLRVRQTEFDRV9TQUxFX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgTUFSS0VUUExBQ0VfQlVZX0RBVEEgPSAnbWFya2V0L01BUktFVFBMQUNFX0JVWV9EQVRBJztcclxuZXhwb3J0IGNvbnN0IE1BUktFVFBMQUNFX0NBVEVHT1JJRVMgPSAnbWFya2V0L01BUktFVFBMQUNFX0NBVEVHT1JJRVMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIHBvc3RfbG9hZGluZzogZmFsc2UsXHJcbiAgbWFya2V0X3NhbGVfZGF0YTogW10sXHJcbiAgbWFya2V0X2J1eV9kYXRhOiBbXSxcclxuICBtYXJrZXRfY2F0ZWdvcmllczogW11cclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIFNFVF9MT0FESU5HOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogcGF5bG9hZCB9O1xyXG4gICAgY2FzZSBTRVRfUE9TVF9MT0FESU5HOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdF9sb2FkaW5nOiBwYXlsb2FkIH07XHJcbiAgICBjYXNlIE1BUktFVFBMQUNFX1NBTEVfREFUQTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1hcmtldF9zYWxlX2RhdGE6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgTUFSS0VUUExBQ0VfQlVZX0RBVEE6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtYXJrZXRfYnV5X2RhdGE6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgTUFSS0VUUExBQ0VfQ0FURUdPUklFUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1hcmtldF9jYXRlZ29yaWVzOiBwYXlsb2FkIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYXJrZXRwbGFjZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KFt7fSwgKCkgPT4ge31dKTtcclxuXHJcbmV4cG9ydCBjb25zdCBNYXJrZXRwbGFjZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFya2V0cGxhY2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTWFya2V0cGxhY2VDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=