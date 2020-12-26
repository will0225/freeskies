webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/appReducer.js":
/*!**************************************!*\
  !*** ./redux/reducers/appReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var initialState = {
  appName: 'freeskies',
  notification: false,
  NOTIFICATION_DATA: null
};

var appReducer = function appReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case '@@UPDATE_APP':
      return {
        appName: action.payload
      };

    case 'APP_NOTIFICATION':
      return {
        notification: action.payload
      };

    case 'NOTIFICATION_DATA':
      return {
        notificationData: action.payload
      };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvYXBwUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJhcHBOYW1lIiwibm90aWZpY2F0aW9uIiwiTk9USUZJQ0FUSU9OX0RBVEEiLCJhcHBSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIm5vdGlmaWNhdGlvbkRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGtEQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxXQURVO0FBRW5CQyxjQUFZLEVBQUUsS0FGSztBQUduQkMsbUJBQWlCLEVBQUU7QUFIQSxDQUFyQjs7QUFNQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJMLFlBQXlCO0FBQUEsTUFBWE0sTUFBVzs7QUFDbkQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxjQUFMO0FBQ0UsYUFBTztBQUFFTixlQUFPLEVBQUVLLE1BQU0sQ0FBQ0U7QUFBbEIsT0FBUDs7QUFDRixTQUFLLGtCQUFMO0FBQ0UsYUFBTztBQUFFTixvQkFBWSxFQUFFSSxNQUFNLENBQUNFO0FBQXZCLE9BQVA7O0FBQ0YsU0FBSyxtQkFBTDtBQUNFLGFBQVE7QUFBRUMsd0JBQWdCLEVBQUVILE1BQU0sQ0FBQ0U7QUFBM0IsT0FBUjs7QUFDRjtBQUNFLGFBQU9ILEtBQVA7QUFSSjtBQVVELENBWEQ7O0FBYWVELHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOGNlY2JlZDExZDIyZThjZGM2NTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhcHBOYW1lOiAnZnJlZXNraWVzJyxcclxuICBub3RpZmljYXRpb246IGZhbHNlLFxyXG4gIE5PVElGSUNBVElPTl9EQVRBOiBudWxsXHJcbn07XHJcblxyXG5jb25zdCBhcHBSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdAQFVQREFURV9BUFAnOlxyXG4gICAgICByZXR1cm4geyBhcHBOYW1lOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSAnQVBQX05PVElGSUNBVElPTic6XHJcbiAgICAgIHJldHVybiB7IG5vdGlmaWNhdGlvbjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgJ05PVElGSUNBVElPTl9EQVRBJzpcclxuICAgICAgcmV0dXJuICB7IG5vdGlmaWNhdGlvbkRhdGE6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwUmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==