webpackHotUpdate_N_E("pages/friend",{

/***/ "./containers/Friend/actions/index.js":
/*!********************************************!*\
  !*** ./containers/Friend/actions/index.js ***!
  \********************************************/
/*! exports provided: setLoading, setFriends, setFollowers, setFollowings, setRecommendFriends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _setLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLoading */ "./containers/Friend/actions/setLoading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _setLoading__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _setFriends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFriends */ "./containers/Friend/actions/setFriends.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFriends", function() { return _setFriends__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _setFollowings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setFollowings */ "./containers/Friend/actions/setFollowings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFollowings", function() { return _setFollowings__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _setFollowers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setFollowers */ "./containers/Friend/actions/setFollowers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFollowers", function() { return _setFollowers__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _setRecommendFriends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setRecommendFriends */ "./containers/Friend/actions/setRecommendFriends.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRecommendFriends", function() { return _setRecommendFriends__WEBPACK_IMPORTED_MODULE_4__["default"]; });








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

/***/ "./containers/Friend/actions/setRecommendFriends.js":
/*!**********************************************************!*\
  !*** ./containers/Friend/actions/setRecommendFriends.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storage_FriendContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/FriendContext */ "./containers/Friend/storage/FriendContext.js");


const setRecommendFriends = state => {
  return {
    type: _storage_FriendContext__WEBPACK_IMPORTED_MODULE_0__["SET_RECOMMEND_FRIENDS_DATA"],
    payload: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (setRecommendFriends);

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

/***/ "./containers/Friend/storage/FriendContext.js":
/*!****************************************************!*\
  !*** ./containers/Friend/storage/FriendContext.js ***!
  \****************************************************/
/*! exports provided: SET_LOADING, SET_FRIENDS_DATA, SET_FOLLOWINGS_DATA, SET_FOLLOWERS_DATA, SET_RECOMMEND_FRIENDS_DATA, FriendsContext, FriendsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FRIENDS_DATA", function() { return SET_FRIENDS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FOLLOWINGS_DATA", function() { return SET_FOLLOWINGS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FOLLOWERS_DATA", function() { return SET_FOLLOWERS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RECOMMEND_FRIENDS_DATA", function() { return SET_RECOMMEND_FRIENDS_DATA; });
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
const SET_RECOMMEND_FRIENDS_DATA = 'friends/SET_RECOMMEND_FRIENDS_DATA';
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
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9GcmllbmQvYWN0aW9ucy9zZXRSZWNvbW1lbmRGcmllbmRzLmpzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL0ZyaWVuZC9zdG9yYWdlL0ZyaWVuZENvbnRleHQuanMiXSwibmFtZXMiOlsic2V0UmVjb21tZW5kRnJpZW5kcyIsInN0YXRlIiwidHlwZSIsIlNFVF9SRUNPTU1FTkRfRlJJRU5EU19EQVRBIiwicGF5bG9hZCIsIlNFVF9MT0FESU5HIiwiU0VUX0ZSSUVORFNfREFUQSIsIlNFVF9GT0xMT1dJTkdTX0RBVEEiLCJTRVRfRk9MTE9XRVJTX0RBVEEiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZnJpZW5kc0RhdGEiLCJmb2xsb3dpbmdzRGF0YSIsImZvbGxvd2Vyc0RhdGEiLCJyZWR1Y2VyIiwiRnJpZW5kc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRnJpZW5kc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLG1CQUFtQixHQUFJQyxLQUFELElBQVc7QUFDckMsU0FBTztBQUNMQyxRQUFJLEVBQUVDLGlGQUREO0FBRUxDLFdBQU8sRUFBRUg7QUFGSixHQUFQO0FBSUQsQ0FMRDs7QUFPZUQsa0ZBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDUEE7O0FBQ08sTUFBTUssV0FBVyxHQUFHLHFCQUFwQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLDBCQUF6QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLDZCQUE1QjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLDRCQUEzQjtBQUNBLE1BQU1MLDBCQUEwQixHQUFHLG9DQUFuQztBQUdQLE1BQU1NLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLEtBRFU7QUFFbkJDLGFBQVcsRUFBRSxFQUZNO0FBR25CQyxnQkFBYyxFQUFFLEVBSEc7QUFJbkJDLGVBQWEsRUFBRTtBQUpJLENBQXJCOztBQU9BLFNBQVNDLE9BQVQsQ0FBaUJiLEtBQWpCLEVBQXdCO0FBQUVDLE1BQUY7QUFBUUU7QUFBUixDQUF4QixFQUEyQztBQUN6QyxVQUFRRixJQUFSO0FBQ0UsU0FBS0csV0FBTDtBQUNFLDZDQUFZSixLQUFaO0FBQW1CUyxlQUFPLEVBQUVOO0FBQTVCOztBQUVGLFNBQUtFLGdCQUFMO0FBQ0UsNkNBQVlMLEtBQVo7QUFBbUJVLG1CQUFXLEVBQUVQO0FBQWhDOztBQUVGLFNBQUtHLG1CQUFMO0FBQ0UsNkNBQVlOLEtBQVo7QUFBbUJXLHNCQUFjLEVBQUVSO0FBQW5DOztBQUVBLFNBQUtJLGtCQUFMO0FBQ0UsNkNBQVlQLEtBQVo7QUFBbUJZLHFCQUFhLEVBQUVUO0FBQWxDOztBQUVKO0FBQ0UsYUFBT0gsS0FBUDtBQWRKO0FBZ0JEOztBQUVNLE1BQU1jLGNBQWMsZ0JBQUdDLDJEQUFhLENBQUMsQ0FBQyxFQUFELEVBQUssTUFBTSxDQUFFLENBQWIsQ0FBRCxDQUFwQztBQUVBLE1BQU1DLGVBQWUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUFBOztBQUMvQyxRQUFNQyxLQUFLLEdBQUdDLHdEQUFVLENBQUNOLE9BQUQsRUFBVUwsWUFBVixDQUF4QjtBQUNBLFNBQ0UsTUFBQyxjQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBRVUsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQURILENBREY7QUFLRCxDQVBNOztHQUFNRCxlOztLQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZyaWVuZC44MWRlZjIwZjY1YWRjZjMxZTkwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldExvYWRpbmcgZnJvbSAnLi9zZXRMb2FkaW5nJztcclxuaW1wb3J0IHNldEZyaWVuZHMgZnJvbSAnLi9zZXRGcmllbmRzJztcclxuaW1wb3J0IHNldEZvbGxvd2luZ3MgZnJvbSAnLi9zZXRGb2xsb3dpbmdzJztcclxuaW1wb3J0IHNldEZvbGxvd2VycyBmcm9tICcuL3NldEZvbGxvd2Vycyc7XHJcbmltcG9ydCBzZXRSZWNvbW1lbmRGcmllbmRzIGZyb20gJy4vc2V0UmVjb21tZW5kRnJpZW5kcyc7XHJcblxyXG5leHBvcnQgeyBzZXRMb2FkaW5nLCBzZXRGcmllbmRzLCBzZXRGb2xsb3dlcnMsIHNldEZvbGxvd2luZ3MsIHNldFJlY29tbWVuZEZyaWVuZHMgfTtcclxuIiwiaW1wb3J0IHsgU0VUX1JFQ09NTUVORF9GUklFTkRTX0RBVEEgfSBmcm9tICcuLi9zdG9yYWdlL0ZyaWVuZENvbnRleHQnO1xyXG5cclxuY29uc3Qgc2V0UmVjb21tZW5kRnJpZW5kcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRVRfUkVDT01NRU5EX0ZSSUVORFNfREFUQSxcclxuICAgIHBheWxvYWQ6IHN0YXRlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXRSZWNvbW1lbmRGcmllbmRzO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gQWN0aW9ucyBUeXBlXHJcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9ICdmcmllbmRzL1NFVF9MT0FESU5HJztcclxuZXhwb3J0IGNvbnN0IFNFVF9GUklFTkRTX0RBVEEgPSAnZnJpZW5kcy9TRVRfRlJJRU5EU19EQVRBJztcclxuZXhwb3J0IGNvbnN0IFNFVF9GT0xMT1dJTkdTX0RBVEEgPSAnZnJpZW5kcy9TRVRfRk9MTE9XSU5HU19EQVRBJztcclxuZXhwb3J0IGNvbnN0IFNFVF9GT0xMT1dFUlNfREFUQSA9ICdmcmllbmRzL1NFVF9GT0xMT1dFUlNfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUkVDT01NRU5EX0ZSSUVORFNfREFUQSA9ICdmcmllbmRzL1NFVF9SRUNPTU1FTkRfRlJJRU5EU19EQVRBJztcclxuXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZnJpZW5kc0RhdGE6IFtdLFxyXG4gIGZvbGxvd2luZ3NEYXRhOiBbXSxcclxuICBmb2xsb3dlcnNEYXRhOiBbXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgU0VUX0xPQURJTkc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBwYXlsb2FkIH07XHJcblxyXG4gICAgY2FzZSBTRVRfRlJJRU5EU19EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZnJpZW5kc0RhdGE6IHBheWxvYWQgfTtcclxuICAgIFxyXG4gICAgY2FzZSBTRVRfRk9MTE9XSU5HU19EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9sbG93aW5nc0RhdGE6IHBheWxvYWQgfTtcclxuICAgIFxyXG4gICAgICBjYXNlIFNFVF9GT0xMT1dFUlNfREFUQTpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9sbG93ZXJzRGF0YTogcGF5bG9hZCB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGcmllbmRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoW3t9LCAoKSA9PiB7fV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZyaWVuZHNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyaWVuZHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRnJpZW5kc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==