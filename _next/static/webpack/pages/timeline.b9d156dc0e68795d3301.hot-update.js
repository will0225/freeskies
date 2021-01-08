webpackHotUpdate_N_E("pages/timeline",{

/***/ "./containers/Photos/storage/PhotoContext.js":
/*!***************************************************!*\
  !*** ./containers/Photos/storage/PhotoContext.js ***!
  \***************************************************/
/*! exports provided: SET_LOADING, SET_POSTING_LOADING, SET_PHOTOS_DATA, SET_PHOTO_DATA, SET_ACTIVEIMAGE_ID, PhotosContext, PhotosProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POSTING_LOADING", function() { return SET_POSTING_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PHOTOS_DATA", function() { return SET_PHOTOS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PHOTO_DATA", function() { return SET_PHOTO_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVEIMAGE_ID", function() { return SET_ACTIVEIMAGE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosContext", function() { return PhotosContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosProvider", function() { return PhotosProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "D:\\Freeskies-development-\\containers\\Photos\\storage\\PhotoContext.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Actions Type

var SET_LOADING = 'photos/SET_LOADING';
var SET_POSTING_LOADING = 'photos/SET_POSTING_LOADING';
var SET_PHOTOS_DATA = 'photos/SET_PHOTOS_DATA';
var SET_PHOTO_DATA = 'photos/SET_PHOTO_DATA';
var SET_ACTIVEIMAGE_ID = 'photos/SET_ACTIVEIMAGE_ID';
var initialState = {
  loading: false,
  postingLoading: false,
  photosData: [],
  photoData: null,
  activeImageId: null
};

function reducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

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

    case SET_PHOTO_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        photoData: payload
      });

    case SET_ACTIVEIMAGE_ID:
      return _objectSpread(_objectSpread({}, state), {}, {
        activeImageId: payload
      });

    default:
      return state;
  }
}

var PhotosContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])([{}, function () {}]);
var PhotosProvider = function PhotosProvider(_ref2) {
  _s();

  var children = _ref2.children;
  var value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState);
  return __jsx(PhotosContext.Provider, {
    value: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QaG90b3Mvc3RvcmFnZS9QaG90b0NvbnRleHQuanMiXSwibmFtZXMiOlsiU0VUX0xPQURJTkciLCJTRVRfUE9TVElOR19MT0FESU5HIiwiU0VUX1BIT1RPU19EQVRBIiwiU0VUX1BIT1RPX0RBVEEiLCJTRVRfQUNUSVZFSU1BR0VfSUQiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwicG9zdGluZ0xvYWRpbmciLCJwaG90b3NEYXRhIiwicGhvdG9EYXRhIiwiYWN0aXZlSW1hZ2VJZCIsInJlZHVjZXIiLCJzdGF0ZSIsInR5cGUiLCJwYXlsb2FkIiwiUGhvdG9zQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQaG90b3NQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ08sSUFBTUEsV0FBVyxHQUFHLG9CQUFwQjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLDRCQUE1QjtBQUNBLElBQU1DLGVBQWUsR0FBRyx3QkFBeEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsdUJBQXZCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUksMkJBQTVCO0FBRVAsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUUsS0FEVTtBQUVuQkMsZ0JBQWMsRUFBRSxLQUZHO0FBR25CQyxZQUFVLEVBQUUsRUFITztBQUluQkMsV0FBUyxFQUFFLElBSlE7QUFLbkJDLGVBQWEsRUFBRTtBQUxJLENBQXJCOztBQVFBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLFFBQTJDO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFDekMsVUFBUUQsSUFBUjtBQUNFLFNBQUtiLFdBQUw7QUFDRSw2Q0FBWVksS0FBWjtBQUFtQk4sZUFBTyxFQUFFUTtBQUE1Qjs7QUFFRixTQUFLYixtQkFBTDtBQUNFLDZDQUFZVyxLQUFaO0FBQW1CTCxzQkFBYyxFQUFFTztBQUFuQzs7QUFFRixTQUFLWixlQUFMO0FBQ0UsNkNBQVlVLEtBQVo7QUFBbUJKLGtCQUFVLEVBQUVNO0FBQS9COztBQUVGLFNBQUtYLGNBQUw7QUFDRSw2Q0FBYVMsS0FBYjtBQUFvQkgsaUJBQVMsRUFBRUs7QUFBL0I7O0FBRUYsU0FBS1Ysa0JBQUw7QUFDRSw2Q0FBYVEsS0FBYjtBQUFvQkYscUJBQWEsRUFBRUk7QUFBbkM7O0FBRUY7QUFDRSxhQUFPRixLQUFQO0FBakJKO0FBbUJEOztBQUVNLElBQU1HLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsQ0FBQyxFQUFELEVBQUssWUFBTSxDQUFFLENBQWIsQ0FBRCxDQUFuQztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsUUFBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDOUMsTUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDVCxPQUFELEVBQVVOLFlBQVYsQ0FBeEI7QUFDQSxTQUNFLE1BQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFYyxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFFBREgsQ0FERjtBQUtELENBUE07O0dBQU1ELGM7O0tBQUFBLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuYjlkMTU2ZGMwZTY4Nzk1ZDMzMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBBY3Rpb25zIFR5cGVcclxuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HID0gJ3Bob3Rvcy9TRVRfTE9BRElORyc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUE9TVElOR19MT0FESU5HID0gJ3Bob3Rvcy9TRVRfUE9TVElOR19MT0FESU5HJztcclxuZXhwb3J0IGNvbnN0IFNFVF9QSE9UT1NfREFUQSA9ICdwaG90b3MvU0VUX1BIT1RPU19EQVRBJztcclxuZXhwb3J0IGNvbnN0IFNFVF9QSE9UT19EQVRBID0gJ3Bob3Rvcy9TRVRfUEhPVE9fREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfQUNUSVZFSU1BR0VfSUQgPSAgJ3Bob3Rvcy9TRVRfQUNUSVZFSU1BR0VfSUQnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIHBvc3RpbmdMb2FkaW5nOiBmYWxzZSxcclxuICBwaG90b3NEYXRhOiBbXSxcclxuICBwaG90b0RhdGE6IG51bGwsXHJcbiAgYWN0aXZlSW1hZ2VJZDogbnVsbFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgU0VUX0xPQURJTkc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBwYXlsb2FkIH07XHJcblxyXG4gICAgY2FzZSBTRVRfUE9TVElOR19MT0FESU5HOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9zdGluZ0xvYWRpbmc6IHBheWxvYWQgfTtcclxuXHJcbiAgICBjYXNlIFNFVF9QSE9UT1NfREFUQTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBob3Rvc0RhdGE6IHBheWxvYWQgfTtcclxuICAgIFxyXG4gICAgY2FzZSBTRVRfUEhPVE9fREFUQTpcclxuICAgICAgcmV0dXJuICB7IC4uLnN0YXRlLCBwaG90b0RhdGE6IHBheWxvYWQgfTtcclxuXHJcbiAgICBjYXNlIFNFVF9BQ1RJVkVJTUFHRV9JRDpcclxuICAgICAgcmV0dXJuICB7IC4uLnN0YXRlLCBhY3RpdmVJbWFnZUlkOiBwYXlsb2FkIH07XHJcbiAgICAgIFxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBob3Rvc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KFt7fSwgKCkgPT4ge31dKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQaG90b3NQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBob3Rvc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9QaG90b3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=