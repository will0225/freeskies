webpackHotUpdate_N_E("pages/profiles/[username]",{

/***/ "./containers/UserProfile/storage/UserProfileContext.js":
/*!**************************************************************!*\
  !*** ./containers/UserProfile/storage/UserProfileContext.js ***!
  \**************************************************************/
/*! exports provided: SET_LOADING, SET_ACTIVITY_DATA, SET_USER_ACCOUNT_DATA, SET_FRIENDS_DATA, SET_PHOTOS_DATA, SET_RATES_DATA, SET_MARKETPLACE_SALE_DATA, SET_MARKETPLACE_BUY_DATA, UserProfileContext, UserProfileProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACTIVITY_DATA", function() { return SET_ACTIVITY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_ACCOUNT_DATA", function() { return SET_USER_ACCOUNT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FRIENDS_DATA", function() { return SET_FRIENDS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PHOTOS_DATA", function() { return SET_PHOTOS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RATES_DATA", function() { return SET_RATES_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MARKETPLACE_SALE_DATA", function() { return SET_MARKETPLACE_SALE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MARKETPLACE_BUY_DATA", function() { return SET_MARKETPLACE_BUY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileContext", function() { return UserProfileContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileProvider", function() { return UserProfileProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "E:\\freeskies_fe_code\\containers\\UserProfile\\storage\\UserProfileContext.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Actions Type

const SET_LOADING = 'userprofile/SET_LOADING';
const SET_ACTIVITY_DATA = 'userprofile/SET_ACTIVITY_DATA';
const SET_USER_ACCOUNT_DATA = 'userprofile/SET_USER_ACCOUNT_DATA';
const SET_FRIENDS_DATA = 'userprofile/SET_FRIENDS_DATA';
const SET_PHOTOS_DATA = 'userprofile/SET_PHOTOS_DATA';
const SET_RATES_DATA = 'userprofile/SET_RATES_DATA';
const SET_MARKETPLACE_SALE_DATA = 'userprofile/SET_MARKETPLACE_SALE_DATA';
const SET_MARKETPLACE_BUY_DATA = 'userprofile/SET_MARKETPLACE_BUY_DATA';
const initialState = {
  loading: false,
  user_accountData: [],
  activityData: [],
  friendsData: [],
  photosData: [],
  ratesData: [],
  marketSaleData: [],
  marketBuyData: []
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

    case SET_ACTIVITY_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        activityData: payload
      });

    case SET_USER_ACCOUNT_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        user_accountData: payload
      });

    case SET_FRIENDS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        friendsData: payload
      });

    case SET_PHOTOS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        photosData: payload
      });

    case SET_RATES_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        ratesData: payload
      });

    case SET_MARKETPLACE_SALE_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        marketSaleData: payload
      });

    case SET_MARKETPLACE_BUY_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        marketBuyData: payload
      });

    default:
      return state;
  }
}

const UserProfileContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])([{}, () => {}]);
const UserProfileProvider = ({
  children
}) => {
  _s();

  const value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState);
  return __jsx(UserProfileContext.Provider, {
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, children);
};

_s(UserProfileProvider, "HDl9A1duRDI+maTNi9v2R1p+EwQ=");

_c = UserProfileProvider;

var _c;

$RefreshReg$(_c, "UserProfileProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Vc2VyUHJvZmlsZS9zdG9yYWdlL1VzZXJQcm9maWxlQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJTRVRfTE9BRElORyIsIlNFVF9BQ1RJVklUWV9EQVRBIiwiU0VUX1VTRVJfQUNDT1VOVF9EQVRBIiwiU0VUX0ZSSUVORFNfREFUQSIsIlNFVF9QSE9UT1NfREFUQSIsIlNFVF9SQVRFU19EQVRBIiwiU0VUX01BUktFVFBMQUNFX1NBTEVfREFUQSIsIlNFVF9NQVJLRVRQTEFDRV9CVVlfREFUQSIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJ1c2VyX2FjY291bnREYXRhIiwiYWN0aXZpdHlEYXRhIiwiZnJpZW5kc0RhdGEiLCJwaG90b3NEYXRhIiwicmF0ZXNEYXRhIiwibWFya2V0U2FsZURhdGEiLCJtYXJrZXRCdXlEYXRhIiwicmVkdWNlciIsInN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJVc2VyUHJvZmlsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVXNlclByb2ZpbGVQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDTyxNQUFNQSxXQUFXLEdBQUcseUJBQXBCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsK0JBQTFCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsbUNBQTlCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsOEJBQXpCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLDZCQUF4QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyw0QkFBdkI7QUFDQSxNQUFNQyx5QkFBeUIsR0FBRyx1Q0FBbEM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRyxzQ0FBakM7QUFFUCxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxLQURVO0FBRW5CQyxrQkFBZ0IsRUFBRSxFQUZDO0FBR25CQyxjQUFZLEVBQUUsRUFISztBQUluQkMsYUFBVyxFQUFFLEVBSk07QUFLbkJDLFlBQVUsRUFBRSxFQUxPO0FBTW5CQyxXQUFTLEVBQUUsRUFOUTtBQU9uQkMsZ0JBQWMsRUFBRSxFQVBHO0FBUW5CQyxlQUFhLEVBQUU7QUFSSSxDQUFyQjs7QUFXQSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBeEIsRUFBMkM7QUFDekMsVUFBUUQsSUFBUjtBQUNFLFNBQUtuQixXQUFMO0FBQ0UsNkNBQVlrQixLQUFaO0FBQW1CVCxlQUFPLEVBQUVXO0FBQTVCOztBQUNGLFNBQUtuQixpQkFBTDtBQUNFLDZDQUFZaUIsS0FBWjtBQUFtQlAsb0JBQVksRUFBRVM7QUFBakM7O0FBQ0YsU0FBS2xCLHFCQUFMO0FBQ0UsNkNBQVlnQixLQUFaO0FBQW1CUix3QkFBZ0IsRUFBRVU7QUFBckM7O0FBQ0YsU0FBS2pCLGdCQUFMO0FBQ0UsNkNBQVllLEtBQVo7QUFBbUJOLG1CQUFXLEVBQUVRO0FBQWhDOztBQUNGLFNBQUtoQixlQUFMO0FBQ0UsNkNBQVljLEtBQVo7QUFBbUJMLGtCQUFVLEVBQUVPO0FBQS9COztBQUNGLFNBQUtmLGNBQUw7QUFDRSw2Q0FBWWEsS0FBWjtBQUFtQkosaUJBQVMsRUFBRU07QUFBOUI7O0FBQ0YsU0FBS2QseUJBQUw7QUFDRSw2Q0FBWVksS0FBWjtBQUFtQkgsc0JBQWMsRUFBRUs7QUFBbkM7O0FBQ0YsU0FBS2Isd0JBQUw7QUFDRSw2Q0FBWVcsS0FBWjtBQUFtQkYscUJBQWEsRUFBRUk7QUFBbEM7O0FBQ0Y7QUFDRSxhQUFPRixLQUFQO0FBbEJKO0FBb0JEOztBQUVNLE1BQU1HLGtCQUFrQixnQkFBR0MsMkRBQWEsQ0FBQyxDQUFDLEVBQUQsRUFBSyxNQUFNLENBQUUsQ0FBYixDQUFELENBQXhDO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFBQTs7QUFDbkQsUUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDVCxPQUFELEVBQVVULFlBQVYsQ0FBeEI7QUFDQSxTQUNFLE1BQUMsa0JBQUQsQ0FBb0IsUUFBcEI7QUFBNkIsU0FBSyxFQUFFaUIsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQURILENBREY7QUFLRCxDQVBNOztHQUFNRCxtQjs7S0FBQUEsbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZXMvW3VzZXJuYW1lXS5mODg2YjIzYjE2MGYwOGVhMzFmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIEFjdGlvbnMgVHlwZVxyXG5leHBvcnQgY29uc3QgU0VUX0xPQURJTkcgPSAndXNlcnByb2ZpbGUvU0VUX0xPQURJTkcnO1xyXG5leHBvcnQgY29uc3QgU0VUX0FDVElWSVRZX0RBVEEgPSAndXNlcnByb2ZpbGUvU0VUX0FDVElWSVRZX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJfQUNDT1VOVF9EQVRBID0gJ3VzZXJwcm9maWxlL1NFVF9VU0VSX0FDQ09VTlRfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfRlJJRU5EU19EQVRBID0gJ3VzZXJwcm9maWxlL1NFVF9GUklFTkRTX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgU0VUX1BIT1RPU19EQVRBID0gJ3VzZXJwcm9maWxlL1NFVF9QSE9UT1NfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUkFURVNfREFUQSA9ICd1c2VycHJvZmlsZS9TRVRfUkFURVNfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfTUFSS0VUUExBQ0VfU0FMRV9EQVRBID0gJ3VzZXJwcm9maWxlL1NFVF9NQVJLRVRQTEFDRV9TQUxFX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgU0VUX01BUktFVFBMQUNFX0JVWV9EQVRBID0gJ3VzZXJwcm9maWxlL1NFVF9NQVJLRVRQTEFDRV9CVVlfREFUQSc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgdXNlcl9hY2NvdW50RGF0YTogW10sXHJcbiAgYWN0aXZpdHlEYXRhOiBbXSxcclxuICBmcmllbmRzRGF0YTogW10sXHJcbiAgcGhvdG9zRGF0YTogW10sXHJcbiAgcmF0ZXNEYXRhOiBbXSxcclxuICBtYXJrZXRTYWxlRGF0YTogW10sXHJcbiAgbWFya2V0QnV5RGF0YTogW10sXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBTRVRfTE9BRElORzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgU0VUX0FDVElWSVRZX0RBVEE6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhY3Rpdml0eURhdGE6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgU0VUX1VTRVJfQUNDT1VOVF9EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcl9hY2NvdW50RGF0YTogcGF5bG9hZCB9O1xyXG4gICAgY2FzZSBTRVRfRlJJRU5EU19EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZnJpZW5kc0RhdGE6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgU0VUX1BIT1RPU19EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGhvdG9zRGF0YTogcGF5bG9hZCB9O1xyXG4gICAgY2FzZSBTRVRfUkFURVNfREFUQTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJhdGVzRGF0YTogcGF5bG9hZCB9O1xyXG4gICAgY2FzZSBTRVRfTUFSS0VUUExBQ0VfU0FMRV9EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWFya2V0U2FsZURhdGE6IHBheWxvYWQgfTtcclxuICAgIGNhc2UgU0VUX01BUktFVFBMQUNFX0JVWV9EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWFya2V0QnV5RGF0YTogcGF5bG9hZCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm9maWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoW3t9LCAoKSA9PiB7fV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm9maWxlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyUHJvZmlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Vc2VyUHJvZmlsZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==