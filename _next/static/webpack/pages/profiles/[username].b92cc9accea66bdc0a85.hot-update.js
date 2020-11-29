webpackHotUpdate_N_E("pages/profiles/[username]",{

/***/ "./containers/UserProfile/actions/index.js":
/*!*************************************************!*\
  !*** ./containers/UserProfile/actions/index.js ***!
  \*************************************************/
/*! exports provided: setLoading, setUserProfileData, setActivityData, setFriendsData, setPhotosData, setRatesData, setMarketSaleData, setMarketBuyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _setUserProfileData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUserProfileData */ "./containers/UserProfile/actions/setUserProfileData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUserProfileData", function() { return _setUserProfileData__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _setLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLoading */ "./containers/UserProfile/actions/setLoading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _setLoading__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _setActivityData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setActivityData */ "./containers/UserProfile/actions/setActivityData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setActivityData", function() { return _setActivityData__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _setFriendsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setFriendsData */ "./containers/UserProfile/actions/setFriendsData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFriendsData", function() { return _setFriendsData__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _setPhotosData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setPhotosData */ "./containers/UserProfile/actions/setPhotosData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPhotosData", function() { return _setPhotosData__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _setRatesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setRatesData */ "./containers/UserProfile/actions/setRatesData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRatesData", function() { return _setRatesData__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _setMarketSaleData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setMarketSaleData */ "./containers/UserProfile/actions/setMarketSaleData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMarketSaleData", function() { return _setMarketSaleData__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _setMarketBuyData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setMarketBuyData */ "./containers/UserProfile/actions/setMarketBuyData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMarketBuyData", function() { return _setMarketBuyData__WEBPACK_IMPORTED_MODULE_7__["default"]; });











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

/***/ "./containers/UserProfile/actions/setMarketBuyData.js":
/*!************************************************************!*\
  !*** ./containers/UserProfile/actions/setMarketBuyData.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storage_UserProfileContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/UserProfileContext */ "./containers/UserProfile/storage/UserProfileContext.js");


const setMarketBuyData = state => {
  return {
    type: _storage_UserProfileContext__WEBPACK_IMPORTED_MODULE_0__["SET_MARKETPLACE_BUY_DATA"],
    payload: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (setMarketBuyData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Vc2VyUHJvZmlsZS9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL1VzZXJQcm9maWxlL2FjdGlvbnMvc2V0TWFya2V0QnV5RGF0YS5qcyJdLCJuYW1lcyI6WyJzZXRNYXJrZXRCdXlEYXRhIiwic3RhdGUiLCJ0eXBlIiwiU0VUX01BUktFVFBMQUNFX0JVWV9EQVRBIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxTQUFPO0FBQ0xDLFFBQUksRUFBRUMsb0ZBREQ7QUFFTEMsV0FBTyxFQUFFSDtBQUZKLEdBQVA7QUFJRCxDQUxEOztBQU9lRCwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlcy9bdXNlcm5hbWVdLmI5MmNjOWFjY2VhNjZiZGMwYTg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0VXNlclByb2ZpbGVEYXRhIGZyb20gJy4vc2V0VXNlclByb2ZpbGVEYXRhJztcclxuaW1wb3J0IHNldExvYWRpbmcgZnJvbSAnLi9zZXRMb2FkaW5nJztcclxuaW1wb3J0IHNldEFjdGl2aXR5RGF0YSBmcm9tICcuL3NldEFjdGl2aXR5RGF0YSc7XHJcbmltcG9ydCBzZXRGcmllbmRzRGF0YSBmcm9tICcuL3NldEZyaWVuZHNEYXRhJztcclxuaW1wb3J0IHNldFBob3Rvc0RhdGEgZnJvbSAnLi9zZXRQaG90b3NEYXRhJztcclxuaW1wb3J0IHNldFJhdGVzRGF0YSBmcm9tICcuL3NldFJhdGVzRGF0YSc7XHJcbmltcG9ydCBzZXRNYXJrZXRTYWxlRGF0YSBmcm9tICcuL3NldE1hcmtldFNhbGVEYXRhJztcclxuaW1wb3J0IHNldE1hcmtldEJ1eURhdGEgZnJvbSAnLi9zZXRNYXJrZXRCdXlEYXRhJztcclxuXHJcbmV4cG9ydCB7IHNldExvYWRpbmcsIHNldFVzZXJQcm9maWxlRGF0YSwgIHNldEFjdGl2aXR5RGF0YSwgc2V0RnJpZW5kc0RhdGEsIHNldFBob3Rvc0RhdGEsIHNldFJhdGVzRGF0YSwgc2V0TWFya2V0U2FsZURhdGEsIHNldE1hcmtldEJ1eURhdGEgIH0iLCJpbXBvcnQgeyBTRVRfTUFSS0VUUExBQ0VfQlVZX0RBVEEgIH0gZnJvbSAnLi4vc3RvcmFnZS9Vc2VyUHJvZmlsZUNvbnRleHQnO1xyXG5cclxuY29uc3Qgc2V0TWFya2V0QnV5RGF0YSA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRVRfTUFSS0VUUExBQ0VfQlVZX0RBVEEsXHJcbiAgICBwYXlsb2FkOiBzdGF0ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0TWFya2V0QnV5RGF0YTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==