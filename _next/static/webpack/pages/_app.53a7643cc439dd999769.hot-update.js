webpackHotUpdate_N_E("pages/_app",{

/***/ "./helpers/services/session.js":
/*!*************************************!*\
  !*** ./helpers/services/session.js ***!
  \*************************************/
/*! exports provided: saveSession, extractSession, clearSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSession", function() { return saveSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractSession", function() { return extractSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSession", function() { return clearSession; });
function saveSession(data) {
  try {
    localStorage.setItem('storage', JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}
function extractSession() {
  console.log('afdsafdsafdafda fdsafdsafdas fdsafdsafdsafd safd');

  try {
    const value = localStorage.getItem('storage');
    const parseValue = JSON.parse(value);
    return parseValue || {};
  } catch (err) {
    return null;
  }
}
function clearSession() {
  try {
    localStorage.removeItem('storage');
  } catch (err) {
    console.error(err);
  }
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9zZXJ2aWNlcy9zZXNzaW9uLmpzIl0sIm5hbWVzIjpbInNhdmVTZXNzaW9uIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZXh0cmFjdFNlc3Npb24iLCJsb2ciLCJ2YWx1ZSIsImdldEl0ZW0iLCJwYXJzZVZhbHVlIiwicGFyc2UiLCJjbGVhclNlc3Npb24iLCJyZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxTQUFTQSxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUNoQyxNQUFJO0FBQ0ZDLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixJQUFmLENBQWhDO0FBQ0QsR0FGRCxDQUVFLE9BQU9LLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNEO0FBQ0Y7QUFFTSxTQUFTRyxjQUFULEdBQTBCO0FBQUNGLFNBQU8sQ0FBQ0csR0FBUixDQUFZLGtEQUFaOztBQUNoQyxNQUFJO0FBQ0YsVUFBTUMsS0FBSyxHQUFHVCxZQUFZLENBQUNVLE9BQWIsQ0FBcUIsU0FBckIsQ0FBZDtBQUNBLFVBQU1DLFVBQVUsR0FBR1QsSUFBSSxDQUFDVSxLQUFMLENBQVdILEtBQVgsQ0FBbkI7QUFDQSxXQUFPRSxVQUFVLElBQUksRUFBckI7QUFDRCxHQUpELENBSUUsT0FBT1AsR0FBUCxFQUFZO0FBQ1osV0FBTyxJQUFQO0FBQ0Q7QUFDRjtBQUVNLFNBQVNTLFlBQVQsR0FBd0I7QUFDN0IsTUFBSTtBQUNGYixnQkFBWSxDQUFDYyxVQUFiLENBQXdCLFNBQXhCO0FBQ0QsR0FGRCxDQUVFLE9BQU9WLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNEO0FBQ0YiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41M2E3NjQzY2M0MzlkZDk5OTc2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNhdmVTZXNzaW9uKGRhdGEpIHtcclxuICB0cnkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFNlc3Npb24oKSB7Y29uc29sZS5sb2coJ2FmZHNhZmRzYWZkYWZkYSBmZHNhZmRzYWZkYXMgZmRzYWZkc2FmZHNhZmQgc2FmZCcpXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2UnKTtcclxuICAgIGNvbnN0IHBhcnNlVmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgIHJldHVybiBwYXJzZVZhbHVlIHx8IHt9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZXNzaW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3RvcmFnZScpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9