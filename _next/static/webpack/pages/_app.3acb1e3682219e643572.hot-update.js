webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlncy9BUEkuanMiXSwibmFtZXMiOlsiQVBJX1VSTCIsIkFTU0VUU19VUkwiLCJzZXJ2ZXJDb25maWciLCJiYXNlVVJMIiwicmVzcG9uc2VUeXBlIiwiaGVhZGVycyIsIkFjY2VwdCIsInZhbGlkYXRlU3RhdHVzIiwic3RhdHVzIiwiYXhpb3NDcmVhdGUiLCJheGlvcyIsImNyZWF0ZSIsInVzZUF4aW9zIiwibWFrZVVzZUF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLCtCQUFoQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxtQ0FBbkI7QUFFUCxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRUgsT0FEVTtBQUVuQkksY0FBWSxFQUFFLE1BRks7QUFHbkJDLFNBQU8sRUFBRTtBQUNQLG9CQUFnQixrQkFEVDtBQUVQQyxVQUFNLEVBQUU7QUFGRCxHQUhVO0FBT25CQyxnQkFBYyxFQUFFLHdCQUFVQyxNQUFWLEVBQWtCO0FBQ2hDLFdBQU9BLE1BQU0sSUFBSSxHQUFqQjtBQUNEO0FBVGtCLENBQXJCO0FBWUEsSUFBTUMsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWFULFlBQWIsQ0FBcEI7QUFFTyxJQUFNVSxRQUFRLEdBQUdDLGdFQUFZLENBQUM7QUFDbkNILE9BQUssRUFBRUQ7QUFENEIsQ0FBRCxDQUE3QjtBQUlRQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNhY2IxZTM2ODIyMTllNjQzNTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBtYWtlVXNlQXhpb3MgfSBmcm9tICdheGlvcy1ob29rcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL2FwaSc7XHJcbmV4cG9ydCBjb25zdCBBU1NFVFNfVVJMID0gJ2h0dHBzOi8vd3d3LmZyZWVza2llcy5jb20vc3RhdGljLyc7XHJcblxyXG5jb25zdCBzZXJ2ZXJDb25maWcgPSB7XHJcbiAgYmFzZVVSTDogQVBJX1VSTCxcclxuICByZXNwb25zZVR5cGU6ICdqc29uJyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgfSxcclxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgcmV0dXJuIHN0YXR1cyA8PSA1MDA7XHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGF4aW9zQ3JlYXRlID0gYXhpb3MuY3JlYXRlKHNlcnZlckNvbmZpZyk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXhpb3MgPSBtYWtlVXNlQXhpb3Moe1xyXG4gIGF4aW9zOiBheGlvc0NyZWF0ZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvc0NyZWF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==