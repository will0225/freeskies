webpackHotUpdate_N_E("pages/marketplace",{

/***/ "./configs/API.js":
/*!************************!*\
  !*** ./configs/API.js ***!
  \************************/
/*! exports provided: API_URL, ASSETS_URL, useAxios, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSETS_URL", function() { return ASSETS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAxios", function() { return useAxios; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios-hooks */ "./node_modules/axios-hooks/es/index.js");


var API_URL = 'https://www.freeskies.com/api';
var ASSETS_URL = 'https://www.freeskies.com/static/';
var serverConfig = {
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json'
  },
  validateStatus: function validateStatus(status) {
    return status <= 500;
  }
};
var axiosCreate = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(serverConfig);
var useAxios = Object(axios_hooks__WEBPACK_IMPORTED_MODULE_1__["makeUseAxios"])({
  axios: axiosCreate
});
/* harmony default export */ __webpack_exports__["default"] = (axiosCreate);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlncy9BUEkuanMiXSwibmFtZXMiOlsiQVBJX1VSTCIsIkFTU0VUU19VUkwiLCJzZXJ2ZXJDb25maWciLCJiYXNlVVJMIiwicmVzcG9uc2VUeXBlIiwiaGVhZGVycyIsIkFjY2VwdCIsInZhbGlkYXRlU3RhdHVzIiwic3RhdHVzIiwiYXhpb3NDcmVhdGUiLCJheGlvcyIsImNyZWF0ZSIsInVzZUF4aW9zIiwibWFrZVVzZUF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLCtCQUFoQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxtQ0FBbkI7QUFFUCxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRUgsT0FEVTtBQUVuQkksY0FBWSxFQUFFLE1BRks7QUFHbkJDLFNBQU8sRUFBRTtBQUNQLG9CQUFnQixrQkFEVDtBQUVQQyxVQUFNLEVBQUU7QUFGRCxHQUhVO0FBT25CQyxnQkFBYyxFQUFFLHdCQUFVQyxNQUFWLEVBQWtCO0FBQ2hDLFdBQU9BLE1BQU0sSUFBSSxHQUFqQjtBQUNEO0FBVGtCLENBQXJCO0FBWUEsSUFBTUMsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWFULFlBQWIsQ0FBcEI7QUFFTyxJQUFNVSxRQUFRLEdBQUdDLGdFQUFZLENBQUM7QUFDbkNILE9BQUssRUFBRUQ7QUFENEIsQ0FBRCxDQUE3QjtBQUlRQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYXJrZXRwbGFjZS4zYWNiMWUzNjgyMjE5ZTY0MzU3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgbWFrZVVzZUF4aW9zIH0gZnJvbSAnYXhpb3MtaG9va3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9hcGknO1xyXG5leHBvcnQgY29uc3QgQVNTRVRTX1VSTCA9ICdodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL3N0YXRpYy8nO1xyXG5cclxuY29uc3Qgc2VydmVyQ29uZmlnID0ge1xyXG4gIGJhc2VVUkw6IEFQSV9VUkwsXHJcbiAgcmVzcG9uc2VUeXBlOiAnanNvbicsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gIH0sXHJcbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgIHJldHVybiBzdGF0dXMgPD0gNTAwO1xyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBheGlvc0NyZWF0ZSA9IGF4aW9zLmNyZWF0ZShzZXJ2ZXJDb25maWcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF4aW9zID0gbWFrZVVzZUF4aW9zKHtcclxuICBheGlvczogYXhpb3NDcmVhdGUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3NDcmVhdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=