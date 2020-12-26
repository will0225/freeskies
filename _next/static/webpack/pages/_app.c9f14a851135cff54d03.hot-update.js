webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/appReducer.js":
/*!**************************************!*\
  !*** ./redux/reducers/appReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  appName: 'freeskies',
  notification: false,
  notificationData: null
};

var appReducer = function appReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case '@@UPDATE_APP':
      return _objectSpread(_objectSpread({}, state), {}, {
        appName: action.payload
      });

    case 'APP_NOTIFICATION':
      return _objectSpread(_objectSpread({}, state), {}, {
        notification: action.payload
      });

    case 'NOTIFICATION_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        notificationData: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (appReducer);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvYXBwUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJhcHBOYW1lIiwibm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uRGF0YSIsImFwcFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxXQURVO0FBRW5CQyxjQUFZLEVBQUUsS0FGSztBQUduQkMsa0JBQWdCLEVBQUU7QUFIQyxDQUFyQjs7QUFNQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJMLFlBQXlCO0FBQUEsTUFBWE0sTUFBVzs7QUFDbkQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxjQUFMO0FBQ0UsNkNBQVlGLEtBQVo7QUFBbUJKLGVBQU8sRUFBRUssTUFBTSxDQUFDRTtBQUFuQzs7QUFDRixTQUFLLGtCQUFMO0FBQ0UsNkNBQVlILEtBQVo7QUFBbUJILG9CQUFZLEVBQUVJLE1BQU0sQ0FBQ0U7QUFBeEM7O0FBQ0YsU0FBSyxtQkFBTDtBQUNFLDZDQUFhSCxLQUFiO0FBQW9CRix3QkFBZ0IsRUFBRUcsTUFBTSxDQUFDRTtBQUE3Qzs7QUFDRjtBQUNFLGFBQU9ILEtBQVA7QUFSSjtBQVVELENBWEQ7O0FBYWVELHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzlmMTRhODUxMTM1Y2ZmNTRkMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhcHBOYW1lOiAnZnJlZXNraWVzJyxcclxuICBub3RpZmljYXRpb246IGZhbHNlLFxyXG4gIG5vdGlmaWNhdGlvbkRhdGE6IG51bGxcclxufTtcclxuXHJcbmNvbnN0IGFwcFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0BAVVBEQVRFX0FQUCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhcHBOYW1lOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSAnQVBQX05PVElGSUNBVElPTic6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBub3RpZmljYXRpb246IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlICdOT1RJRklDQVRJT05fREFUQSc6XHJcbiAgICAgIHJldHVybiAgeyAuLi5zdGF0ZSwgbm90aWZpY2F0aW9uRGF0YTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9