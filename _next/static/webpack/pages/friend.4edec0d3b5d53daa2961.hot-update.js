webpackHotUpdate_N_E("pages/friend",{

/***/ "./containers/Friend/Friend.js":
/*!*************************************!*\
  !*** ./containers/Friend/Friend.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/header/Header */ "./components/header/Header.js");
/* harmony import */ var helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/hoc/requireAuth */ "./helpers/hoc/requireAuth.js");
/* harmony import */ var _configs_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/API */ "./configs/API.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "E:\\freeskies_fe_code\\containers\\Friend\\Friend.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Friends({
  auth,
  authServices
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
}

_c = Friends;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(helpers_hoc_requireAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(Friends));

var _c, _c2;

$RefreshReg$(_c, "Friends");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
        friendData: payload
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

/***/ }),

/***/ "./pages/friend.js":
/*!*************************!*\
  !*** ./pages/friend.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var containers_Friend_Friend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! containers/Friend/Friend */ "./containers/Friend/Friend.js");
/* harmony import */ var _containers_Friend_storage_FriendContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Friend/storage/FriendContext */ "./containers/Friend/storage/FriendContext.js");
var _jsxFileName = "E:\\freeskies_fe_code\\pages\\friend.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function profile() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_containers_Friend_storage_FriendContext__WEBPACK_IMPORTED_MODULE_2__["FriendsProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(containers_Friend_Friend__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvRnJpZW5kLmpzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL0ZyaWVuZC9zdG9yYWdlL0ZyaWVuZENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZyaWVuZC5qcyJdLCJuYW1lcyI6WyJGcmllbmRzIiwiYXV0aCIsImF1dGhTZXJ2aWNlcyIsInJlcXVpcmVBdXRoIiwiU0VUX0xPQURJTkciLCJTRVRfRlJJRU5EU19EQVRBIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImZyaWVuZHNEYXRhIiwicmVkdWNlciIsInN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJmcmllbmREYXRhIiwiRnJpZW5kc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRnJpZW5kc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInVzZVJlZHVjZXIiLCJwcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsQ0FBa0I7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQWxCLEVBQTBDO0FBQ3RDLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREo7QUFLSDs7S0FOUUYsTztBQVFNLHFFQUFBRyx1RUFBVyxDQUFDSCxPQUFELENBQTFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDZEE7O0FBQ08sTUFBTUksV0FBVyxHQUFHLHFCQUFwQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLDBCQUF6QjtBQUVQLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLEtBRFU7QUFFbkJDLGFBQVcsRUFBRTtBQUZNLENBQXJCOztBQUtBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUF4QixFQUEyQztBQUN6QyxVQUFRRCxJQUFSO0FBQ0UsU0FBS1AsV0FBTDtBQUNFLDZDQUFZTSxLQUFaO0FBQW1CSCxlQUFPLEVBQUVLO0FBQTVCOztBQUVGLFNBQUtQLGdCQUFMO0FBQ0UsNkNBQVlLLEtBQVo7QUFBbUJHLGtCQUFVLEVBQUVEO0FBQS9COztBQUVGO0FBQ0UsYUFBT0YsS0FBUDtBQVJKO0FBVUQ7O0FBRU0sTUFBTUksY0FBYyxnQkFBR0MsMkRBQWEsQ0FBQyxDQUFDLEVBQUQsRUFBSyxNQUFNLENBQUUsQ0FBYixDQUFELENBQXBDO0FBRUEsTUFBTUMsZUFBZSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBQy9DLFFBQU1DLEtBQUssR0FBR0Msd0RBQVUsQ0FBQ1YsT0FBRCxFQUFVSCxZQUFWLENBQXhCO0FBQ0EsU0FDRSxNQUFDLGNBQUQsQ0FBZ0IsUUFBaEI7QUFBeUIsU0FBSyxFQUFFWSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFFBREgsQ0FERjtBQUtELENBUE07O0dBQU1ELGU7O0tBQUFBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmI7QUFDQTtBQUVlLFNBQVNJLE9BQVQsR0FBbUI7QUFDaEMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGO0FBT0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZnJpZW5kLjRlZGVjMGQzYjVkNTNkYWEyOTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnaGVscGVycy9ob2MvcmVxdWlyZUF1dGgnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uL2NvbmZpZ3MvQVBJJztcclxuaW1wb3J0IHsgQnV0dG9uLCBVcGxvYWQsIG1lc3NhZ2UsIElucHV0LCBUYWJzLCBSYXRlIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5mdW5jdGlvbiBGcmllbmRzICh7IGF1dGgsIGF1dGhTZXJ2aWNlcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZUF1dGgoRnJpZW5kcyk7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIEFjdGlvbnMgVHlwZVxyXG5leHBvcnQgY29uc3QgU0VUX0xPQURJTkcgPSAnZnJpZW5kcy9TRVRfTE9BRElORyc7XHJcbmV4cG9ydCBjb25zdCBTRVRfRlJJRU5EU19EQVRBID0gJ2ZyaWVuZHMvU0VUX0ZSSUVORFNfREFUQSc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZnJpZW5kc0RhdGE6IFtdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgU0VUX0xPQURJTkc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBwYXlsb2FkIH07XHJcblxyXG4gICAgY2FzZSBTRVRfRlJJRU5EU19EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZnJpZW5kRGF0YTogcGF5bG9hZCB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGcmllbmRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoW3t9LCAoKSA9PiB7fV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZyaWVuZHNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyaWVuZHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRnJpZW5kc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IEZyaWVuZHMgZnJvbSAnY29udGFpbmVycy9GcmllbmQvRnJpZW5kJztcclxuaW1wb3J0IHsgRnJpZW5kc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGFpbmVycy9GcmllbmQvc3RvcmFnZS9GcmllbmRDb250ZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2ZpbGUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGcmllbmRzUHJvdmlkZXI+XHJcbiAgICAgICAgPEZyaWVuZHMgLz5cclxuICAgICAgPC9GcmllbmRzUHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=