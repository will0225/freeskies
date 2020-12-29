webpackHotUpdate_N_E("pages/marketplace",{

/***/ "./containers/Marketplace/actions/index.js":
/*!*************************************************!*\
  !*** ./containers/Marketplace/actions/index.js ***!
  \*************************************************/
/*! exports provided: setLoading, setPostLoading, setMarketCategories, setMarketSaleData, setMarketBuyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPostLoading", function() { return setPostLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMarketCategories", function() { return setMarketCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMarketSaleData", function() { return setMarketSaleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMarketBuyData", function() { return setMarketBuyData; });
/* harmony import */ var _storage_MarketplaceContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/MarketplaceContext */ "./containers/Marketplace/storage/MarketplaceContext.js");


var setLoading = function setLoading(state) {
  return {
    type: _storage_MarketplaceContext__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"],
    payload: state
  };
};

var setPostLoading = function setPostLoading(state) {
  return {
    type: _storage_MarketplaceContext__WEBPACK_IMPORTED_MODULE_0__["SET_POST_LOADING"],
    payload: state
  };
};

var setMarketCategories = function setMarketCategories(state) {
  return {
    type: _storage_MarketplaceContext__WEBPACK_IMPORTED_MODULE_0__["MARKETPLACE_CATEGORIES"],
    payload: state
  };
};

var setMarketSaleData = function setMarketSaleData(state) {
  return {
    type: _storage_MarketplaceContext__WEBPACK_IMPORTED_MODULE_0__["MARKETPLACE_SALE_DATA"],
    payload: state
  };
};

var setMarketBuyData = function setMarketBuyData(state) {
  return {
    type: _storage_MarketplaceContext__WEBPACK_IMPORTED_MODULE_0__["MARKETPLACE_BUY_DATA"],
    payload: state
  };
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NYXJrZXRwbGFjZS9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbInNldExvYWRpbmciLCJzdGF0ZSIsInR5cGUiLCJTRVRfTE9BRElORyIsInBheWxvYWQiLCJzZXRQb3N0TG9hZGluZyIsIlNFVF9QT1NUX0xPQURJTkciLCJzZXRNYXJrZXRDYXRlZ29yaWVzIiwiTUFSS0VUUExBQ0VfQ0FURUdPUklFUyIsInNldE1hcmtldFNhbGVEYXRhIiwiTUFSS0VUUExBQ0VfU0FMRV9EQVRBIiwic2V0TWFya2V0QnV5RGF0YSIsIk1BUktFVFBMQUNFX0JVWV9EQVRBIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDMUIsU0FBTztBQUNIQyxRQUFJLEVBQUVDLHVFQURIO0FBRUhDLFdBQU8sRUFBRUg7QUFGTixHQUFQO0FBSUgsQ0FMRDs7QUFPQSxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNKLEtBQUQsRUFBVztBQUM5QixTQUFPO0FBQ0hDLFFBQUksRUFBRUksNEVBREg7QUFFSEYsV0FBTyxFQUFFSDtBQUZOLEdBQVA7QUFJSCxDQUxEOztBQU9BLElBQU1NLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ04sS0FBRCxFQUFXO0FBQ25DLFNBQU87QUFDSEMsUUFBSSxFQUFFTSxrRkFESDtBQUVISixXQUFPLEVBQUVIO0FBRk4sR0FBUDtBQUlILENBTEQ7O0FBT0EsSUFBTVEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDUixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNIQyxRQUFJLEVBQUVRLGlGQURIO0FBRUhOLFdBQU8sRUFBRUg7QUFGTixHQUFQO0FBSUgsQ0FMRDs7QUFPQSxJQUFNVSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNWLEtBQUQsRUFBVztBQUNoQyxTQUFPO0FBQ0hDLFFBQUksRUFBRVUsZ0ZBREg7QUFFSFIsV0FBTyxFQUFFSDtBQUZOLEdBQVA7QUFJSCxDQUxEOztBQU9BIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hcmtldHBsYWNlLmNiMjg3MzU3ZDI5NWE4MDM3OWEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfTE9BRElORywgU0VUX1BPU1RfTE9BRElORywgTUFSS0VUUExBQ0VfQ0FURUdPUklFUywgTUFSS0VUUExBQ0VfQlVZX0RBVEEsIE1BUktFVFBMQUNFX1NBTEVfREFUQSB9IGZyb20gJy4uL3N0b3JhZ2UvTWFya2V0cGxhY2VDb250ZXh0JztcclxuXHJcbmNvbnN0IHNldExvYWRpbmcgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogU0VUX0xPQURJTkcsXHJcbiAgICAgICAgcGF5bG9hZDogc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2V0UG9zdExvYWRpbmcgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogU0VUX1BPU1RfTE9BRElORyxcclxuICAgICAgICBwYXlsb2FkOiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzZXRNYXJrZXRDYXRlZ29yaWVzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IE1BUktFVFBMQUNFX0NBVEVHT1JJRVMsXHJcbiAgICAgICAgcGF5bG9hZDogc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2V0TWFya2V0U2FsZURhdGEgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTUFSS0VUUExBQ0VfU0FMRV9EQVRBLFxyXG4gICAgICAgIHBheWxvYWQ6IHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHNldE1hcmtldEJ1eURhdGEgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTUFSS0VUUExBQ0VfQlVZX0RBVEEsXHJcbiAgICAgICAgcGF5bG9hZDogc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgc2V0TG9hZGluZywgc2V0UG9zdExvYWRpbmcsIHNldE1hcmtldENhdGVnb3JpZXMsIHNldE1hcmtldFNhbGVEYXRhLCBzZXRNYXJrZXRCdXlEYXRhIH0iXSwic291cmNlUm9vdCI6IiJ9