webpackHotUpdate_N_E("pages/friend",{

/***/ "./containers/Friend/storage/FriendContext.js":
/*!****************************************************!*\
  !*** ./containers/Friend/storage/FriendContext.js ***!
  \****************************************************/
/*! exports provided: SET_LOADING, SET_FRIENDS_DATA, SET_FOLLOWINGS_DATA, SET_FOLLOWERS_DATA, FriendsContext, FriendsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FRIENDS_DATA", function() { return SET_FRIENDS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FOLLOWINGS_DATA", function() { return SET_FOLLOWINGS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FOLLOWERS_DATA", function() { return SET_FOLLOWERS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsContext", function() { return FriendsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsProvider", function() { return FriendsProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Friend\\storage\\FriendContext.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Actions Type

const SET_LOADING = 'friends/SET_LOADING';
const SET_FRIENDS_DATA = 'friends/SET_FRIENDS_DATA';
const SET_FOLLOWINGS_DATA = 'friends/SET_FOLLOWINGS_DATA';
const SET_FOLLOWERS_DATA = 'friends/SET_FOLLOWERS_DATA';
const initialState = {
  loading: false,
  friendsData: [],
  followingsData: [],
  followersData: []
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

    case SET_FRIENDS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        friendsData: payload
      });

    case SET_FOLLOWINGS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        followingsData: payload
      });

    case SET_FOLLOWERS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        followersData: payload
      });

    default:
      return state;
  }
}

const FriendsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])([{}, () => {}]);
const FriendsProvider = ({
  children
}) => {
  _s();

  const value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState);
  return __jsx(FriendsContext.Provider, {
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, children);
};

_s(FriendsProvider, "HDl9A1duRDI+maTNi9v2R1p+EwQ=");

_c = FriendsProvider;

var _c;

$RefreshReg$(_c, "FriendsProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvc3RvcmFnZS9GcmllbmRDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlNFVF9MT0FESU5HIiwiU0VUX0ZSSUVORFNfREFUQSIsIlNFVF9GT0xMT1dJTkdTX0RBVEEiLCJTRVRfRk9MTE9XRVJTX0RBVEEiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZnJpZW5kc0RhdGEiLCJmb2xsb3dpbmdzRGF0YSIsImZvbGxvd2Vyc0RhdGEiLCJyZWR1Y2VyIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsIkZyaWVuZHNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkZyaWVuZHNQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNPLE1BQU1BLFdBQVcsR0FBRyxxQkFBcEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRywwQkFBekI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyw2QkFBNUI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyw0QkFBM0I7QUFFUCxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxLQURVO0FBRW5CQyxhQUFXLEVBQUUsRUFGTTtBQUduQkMsZ0JBQWMsRUFBRSxFQUhHO0FBSW5CQyxlQUFhLEVBQUU7QUFKSSxDQUFyQjs7QUFPQSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBeEIsRUFBMkM7QUFDekMsVUFBUUQsSUFBUjtBQUNFLFNBQUtYLFdBQUw7QUFDRSw2Q0FBWVUsS0FBWjtBQUFtQkwsZUFBTyxFQUFFTztBQUE1Qjs7QUFFRixTQUFLWCxnQkFBTDtBQUNFLDZDQUFZUyxLQUFaO0FBQW1CSixtQkFBVyxFQUFFTTtBQUFoQzs7QUFFRixTQUFLVixtQkFBTDtBQUNFLDZDQUFZUSxLQUFaO0FBQW1CSCxzQkFBYyxFQUFFSztBQUFuQzs7QUFFQSxTQUFLVCxrQkFBTDtBQUNFLDZDQUFZTyxLQUFaO0FBQW1CRixxQkFBYSxFQUFFSTtBQUFsQzs7QUFFSjtBQUNFLGFBQU9GLEtBQVA7QUFkSjtBQWdCRDs7QUFFTSxNQUFNRyxjQUFjLGdCQUFHQywyREFBYSxDQUFDLENBQUMsRUFBRCxFQUFLLE1BQU0sQ0FBRSxDQUFiLENBQUQsQ0FBcEM7QUFFQSxNQUFNQyxlQUFlLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFBQTs7QUFDL0MsUUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDVCxPQUFELEVBQVVMLFlBQVYsQ0FBeEI7QUFDQSxTQUNFLE1BQUMsY0FBRCxDQUFnQixRQUFoQjtBQUF5QixTQUFLLEVBQUVhLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsUUFESCxDQURGO0FBS0QsQ0FQTTs7R0FBTUQsZTs7S0FBQUEsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mcmllbmQuY2UxZDUxZmMzMmY0YjI5MTU5YmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBBY3Rpb25zIFR5cGVcclxuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HID0gJ2ZyaWVuZHMvU0VUX0xPQURJTkcnO1xyXG5leHBvcnQgY29uc3QgU0VUX0ZSSUVORFNfREFUQSA9ICdmcmllbmRzL1NFVF9GUklFTkRTX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgU0VUX0ZPTExPV0lOR1NfREFUQSA9ICdmcmllbmRzL1NFVF9GT0xMT1dJTkdTX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgU0VUX0ZPTExPV0VSU19EQVRBID0gJ2ZyaWVuZHMvU0VUX0ZPTExPV0VSU19EQVRBJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBmcmllbmRzRGF0YTogW10sXHJcbiAgZm9sbG93aW5nc0RhdGE6IFtdLFxyXG4gIGZvbGxvd2Vyc0RhdGE6IFtdXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBTRVRfTE9BRElORzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHBheWxvYWQgfTtcclxuXHJcbiAgICBjYXNlIFNFVF9GUklFTkRTX0RBVEE6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmcmllbmRzRGF0YTogcGF5bG9hZCB9O1xyXG4gICAgXHJcbiAgICBjYXNlIFNFVF9GT0xMT1dJTkdTX0RBVEE6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb2xsb3dpbmdzRGF0YTogcGF5bG9hZCB9O1xyXG4gICAgXHJcbiAgICAgIGNhc2UgU0VUX0ZPTExPV0VSU19EQVRBOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb2xsb3dlcnNEYXRhOiBwYXlsb2FkIH07XHJcbiAgICAgICAgXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRnJpZW5kc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KFt7fSwgKCkgPT4ge31dKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGcmllbmRzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmllbmRzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0ZyaWVuZHNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=