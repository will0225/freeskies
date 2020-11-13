webpackHotUpdate_N_E("pages/photos",{

/***/ "./containers/Photos/storage/PhotoContext.js":
/*!***************************************************!*\
  !*** ./containers/Photos/storage/PhotoContext.js ***!
  \***************************************************/
/*! exports provided: SET_LOADING, SET_POSTING_LOADING, SET_PHOTOS_DATA, PhotosContext, PhotosProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POSTING_LOADING", function() { return SET_POSTING_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PHOTOS_DATA", function() { return SET_PHOTOS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosContext", function() { return PhotosContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosProvider", function() { return PhotosProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Photos\\storage\\PhotoContext.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Actions Type

const SET_LOADING = 'photos/SET_LOADING';
const SET_POSTING_LOADING = 'photos/SET_POSTING_LOADING';
const SET_PHOTOS_DATA = 'photos/SET_ACTIVITY_DATA';
const initialState = {
  loading: false,
  postingLoading: false,
  photosData: []
};

function reducer(state, {
  type,
  payload
}) {
  switch (type) {
    case SET_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: payload
      });

    case SET_POSTING_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        postingLoading: payload
      });

    case SET_ACTIVITY_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        photosData: payload
      });

    default:
      return state;
  }
}

const PhotosContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])([{}, () => {}]);
const PhotosProvider = ({
  children
}) => {
  _s();

  const value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState);
  return __jsx(PhotosContext.Provider, {
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, children);
};

_s(PhotosProvider, "HDl9A1duRDI+maTNi9v2R1p+EwQ=");

_c = PhotosProvider;

var _c;

$RefreshReg$(_c, "PhotosProvider");

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

/***/ }),

/***/ "./pages/photos.js":
/*!*************************!*\
  !*** ./pages/photos.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return photos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var containers_Photos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! containers/Photos */ "./containers/Photos/index.js");
/* harmony import */ var containers_Photos_storage_PhotoContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! containers/Photos/storage/PhotoContext */ "./containers/Photos/storage/PhotoContext.js");
var _jsxFileName = "E:\\freeskies_fe_code\\pages\\photos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function photos() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(containers_Photos__WEBPACK_IMPORTED_MODULE_1__["Photos"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bob3Rvcy5qcyJdLCJuYW1lcyI6WyJTRVRfTE9BRElORyIsIlNFVF9QT1NUSU5HX0xPQURJTkciLCJTRVRfUEhPVE9TX0RBVEEiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwicG9zdGluZ0xvYWRpbmciLCJwaG90b3NEYXRhIiwicmVkdWNlciIsInN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJTRVRfQUNUSVZJVFlfREFUQSIsIlBob3Rvc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGhvdG9zUHJvdmlkZXIiLCJjaGlsZHJlbiIsInZhbHVlIiwidXNlUmVkdWNlciIsInBob3RvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNPLE1BQU1BLFdBQVcsR0FBRyxvQkFBcEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyw0QkFBNUI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsMEJBQXhCO0FBRVAsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUUsS0FEVTtBQUVuQkMsZ0JBQWMsRUFBRSxLQUZHO0FBR25CQyxZQUFVLEVBQUU7QUFITyxDQUFyQjs7QUFNQSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBeEIsRUFBMkM7QUFDekMsVUFBUUQsSUFBUjtBQUNFLFNBQUtULFdBQUw7QUFDRSw2Q0FBWVEsS0FBWjtBQUFtQkosZUFBTyxFQUFFTTtBQUE1Qjs7QUFFRixTQUFLVCxtQkFBTDtBQUNFLDZDQUFZTyxLQUFaO0FBQW1CSCxzQkFBYyxFQUFFSztBQUFuQzs7QUFFRixTQUFLQyxpQkFBTDtBQUNFLDZDQUFZSCxLQUFaO0FBQW1CRixrQkFBVSxFQUFFSTtBQUEvQjs7QUFFRjtBQUNFLGFBQU9GLEtBQVA7QUFYSjtBQWFEOztBQUVNLE1BQU1JLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsQ0FBQyxFQUFELEVBQUssTUFBTSxDQUFFLENBQWIsQ0FBRCxDQUFuQztBQUVBLE1BQU1DLGNBQWMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUFBOztBQUM5QyxRQUFNQyxLQUFLLEdBQUdDLHdEQUFVLENBQUNWLE9BQUQsRUFBVUosWUFBVixDQUF4QjtBQUNBLFNBQ0UsTUFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUVhLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsUUFESCxDQURGO0FBS0QsQ0FQTTs7R0FBTUQsYzs7S0FBQUEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CYjtBQUNBO0FBQ2UsU0FBU0ksTUFBVCxHQUFrQjtBQUMvQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGhvdG9zLmMyYTY5NTA0MTczODgxNDY0OThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gQWN0aW9ucyBUeXBlXHJcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9ICdwaG90b3MvU0VUX0xPQURJTkcnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BPU1RJTkdfTE9BRElORyA9ICdwaG90b3MvU0VUX1BPU1RJTkdfTE9BRElORyc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUEhPVE9TX0RBVEEgPSAncGhvdG9zL1NFVF9BQ1RJVklUWV9EQVRBJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBwb3N0aW5nTG9hZGluZzogZmFsc2UsXHJcbiAgcGhvdG9zRGF0YTogW10sXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBTRVRfTE9BRElORzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHBheWxvYWQgfTtcclxuXHJcbiAgICBjYXNlIFNFVF9QT1NUSU5HX0xPQURJTkc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0aW5nTG9hZGluZzogcGF5bG9hZCB9O1xyXG5cclxuICAgIGNhc2UgU0VUX0FDVElWSVRZX0RBVEE6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwaG90b3NEYXRhOiBwYXlsb2FkIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBob3Rvc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KFt7fSwgKCkgPT4ge31dKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQaG90b3NQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBob3Rvc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9QaG90b3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFBob3RvcyB9IGZyb20gJ2NvbnRhaW5lcnMvUGhvdG9zJztcclxuaW1wb3J0IHsgUGhvdG9zUHJvdmlkZXIgfSBmcm9tICdjb250YWluZXJzL1Bob3Rvcy9zdG9yYWdlL1Bob3RvQ29udGV4dCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGhvdG9zKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGhvdG9zIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=