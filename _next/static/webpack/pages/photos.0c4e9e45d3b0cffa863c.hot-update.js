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
const SET_PHOTOS_DATA = 'photos/SET_PHOTOS_DATA';
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

    case SET_PHOTOS_DATA:
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQuanMiXSwibmFtZXMiOlsiU0VUX0xPQURJTkciLCJTRVRfUE9TVElOR19MT0FESU5HIiwiU0VUX1BIT1RPU19EQVRBIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsInBvc3RpbmdMb2FkaW5nIiwicGhvdG9zRGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsInR5cGUiLCJwYXlsb2FkIiwiUGhvdG9zQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQaG90b3NQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sTUFBTUEsV0FBVyxHQUFHLG9CQUFwQjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLDRCQUE1QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyx3QkFBeEI7QUFFUCxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxLQURVO0FBRW5CQyxnQkFBYyxFQUFFLEtBRkc7QUFHbkJDLFlBQVUsRUFBRTtBQUhPLENBQXJCOztBQU1BLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUF4QixFQUEyQztBQUN6QyxVQUFRRCxJQUFSO0FBQ0UsU0FBS1QsV0FBTDtBQUNFLDZDQUFZUSxLQUFaO0FBQW1CSixlQUFPLEVBQUVNO0FBQTVCOztBQUVGLFNBQUtULG1CQUFMO0FBQ0UsNkNBQVlPLEtBQVo7QUFBbUJILHNCQUFjLEVBQUVLO0FBQW5DOztBQUVGLFNBQUtSLGVBQUw7QUFDRSw2Q0FBWU0sS0FBWjtBQUFtQkYsa0JBQVUsRUFBRUk7QUFBL0I7O0FBRUY7QUFDRSxhQUFPRixLQUFQO0FBWEo7QUFhRDs7QUFFTSxNQUFNRyxhQUFhLGdCQUFHQywyREFBYSxDQUFDLENBQUMsRUFBRCxFQUFLLE1BQU0sQ0FBRSxDQUFiLENBQUQsQ0FBbkM7QUFFQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFBQTs7QUFDOUMsUUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDVCxPQUFELEVBQVVKLFlBQVYsQ0FBeEI7QUFDQSxTQUNFLE1BQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFWSxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFFBREgsQ0FERjtBQUtELENBUE07O0dBQU1ELGM7O0tBQUFBLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGhvdG9zLjBjNGU5ZTQ1ZDNiMGNmZmE4NjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gQWN0aW9ucyBUeXBlXHJcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9ICdwaG90b3MvU0VUX0xPQURJTkcnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BPU1RJTkdfTE9BRElORyA9ICdwaG90b3MvU0VUX1BPU1RJTkdfTE9BRElORyc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUEhPVE9TX0RBVEEgPSAncGhvdG9zL1NFVF9QSE9UT1NfREFUQSc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgcG9zdGluZ0xvYWRpbmc6IGZhbHNlLFxyXG4gIHBob3Rvc0RhdGE6IFtdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgU0VUX0xPQURJTkc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBwYXlsb2FkIH07XHJcblxyXG4gICAgY2FzZSBTRVRfUE9TVElOR19MT0FESU5HOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdGluZ0xvYWRpbmc6IHBheWxvYWQgfTtcclxuXHJcbiAgICBjYXNlIFNFVF9QSE9UT1NfREFUQTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBob3Rvc0RhdGE6IHBheWxvYWQgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGhvdG9zQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoW3t9LCAoKSA9PiB7fV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBob3Rvc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGhvdG9zQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1Bob3Rvc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==