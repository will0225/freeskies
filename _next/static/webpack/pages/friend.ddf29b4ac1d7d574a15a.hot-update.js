webpackHotUpdate_N_E("pages/friend",{

/***/ "./containers/Friend/storage/FriendContext.js":
/*!****************************************************!*\
  !*** ./containers/Friend/storage/FriendContext.js ***!
  \****************************************************/
/*! exports provided: SET_LOADING, SET_FRIENDS_DATA, FriendsContext, FriendsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FRIENDS_DATA", function() { return SET_FRIENDS_DATA; });
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
const initialState = {
  loading: false,
  friendsData: []
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
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvc3RvcmFnZS9GcmllbmRDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlNFVF9MT0FESU5HIiwiU0VUX0ZSSUVORFNfREFUQSIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJmcmllbmRzRGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsInR5cGUiLCJwYXlsb2FkIiwiRnJpZW5kc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRnJpZW5kc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNPLE1BQU1BLFdBQVcsR0FBRyxxQkFBcEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRywwQkFBekI7QUFFUCxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxLQURVO0FBRW5CQyxhQUFXLEVBQUU7QUFGTSxDQUFyQjs7QUFLQSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBeEIsRUFBMkM7QUFDekMsVUFBUUQsSUFBUjtBQUNFLFNBQUtQLFdBQUw7QUFDRSw2Q0FBWU0sS0FBWjtBQUFtQkgsZUFBTyxFQUFFSztBQUE1Qjs7QUFFRixTQUFLUCxnQkFBTDtBQUNFLDZDQUFZSyxLQUFaO0FBQW1CRixtQkFBVyxFQUFFSTtBQUFoQzs7QUFFRjtBQUNFLGFBQU9GLEtBQVA7QUFSSjtBQVVEOztBQUVNLE1BQU1HLGNBQWMsZ0JBQUdDLDJEQUFhLENBQUMsQ0FBQyxFQUFELEVBQUssTUFBTSxDQUFFLENBQWIsQ0FBRCxDQUFwQztBQUVBLE1BQU1DLGVBQWUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUFBOztBQUMvQyxRQUFNQyxLQUFLLEdBQUdDLHdEQUFVLENBQUNULE9BQUQsRUFBVUgsWUFBVixDQUF4QjtBQUNBLFNBQ0UsTUFBQyxjQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBRVcsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQURILENBREY7QUFLRCxDQVBNOztHQUFNRCxlOztLQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZyaWVuZC5kZGYyOWI0YWMxZDdkNTc0YTE1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIEFjdGlvbnMgVHlwZVxyXG5leHBvcnQgY29uc3QgU0VUX0xPQURJTkcgPSAnZnJpZW5kcy9TRVRfTE9BRElORyc7XHJcbmV4cG9ydCBjb25zdCBTRVRfRlJJRU5EU19EQVRBID0gJ2ZyaWVuZHMvU0VUX0ZSSUVORFNfREFUQSc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZnJpZW5kc0RhdGE6IFtdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgU0VUX0xPQURJTkc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBwYXlsb2FkIH07XHJcblxyXG4gICAgY2FzZSBTRVRfRlJJRU5EU19EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZnJpZW5kc0RhdGE6IHBheWxvYWQgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRnJpZW5kc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KFt7fSwgKCkgPT4ge31dKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGcmllbmRzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmllbmRzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0ZyaWVuZHNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=