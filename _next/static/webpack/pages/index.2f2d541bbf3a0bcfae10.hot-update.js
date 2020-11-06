webpackHotUpdate_N_E("pages/index",{

/***/ "./helpers/hooks/useLocalStorage.js":
/*!******************************************!*\
  !*** ./helpers/hooks/useLocalStorage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



function useLocalStorage(key, initialValue) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    try {
      if (true) {
        var _item = window.localStorage.getItem(key);
      }

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  }),
      storedValue = _useState[0],
      setStoredValue = _useState[1];

  var setValue = function setValue(value) {
    try {
      var valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

_s(useLocalStorage, "tS8qdXswVp6TLrhVUxukgXltxpg=");

/* harmony default export */ __webpack_exports__["default"] = (useLocalStorage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9ob29rcy91c2VMb2NhbFN0b3JhZ2UuanMiXSwibmFtZXMiOlsidXNlTG9jYWxTdG9yYWdlIiwia2V5IiwiaW5pdGlhbFZhbHVlIiwidXNlU3RhdGUiLCJpdGVtIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJzZXRWYWx1ZSIsInZhbHVlIiwidmFsdWVUb1N0b3JlIiwiRnVuY3Rpb24iLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxHQUF6QixFQUE4QkMsWUFBOUIsRUFBNEM7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxZQUFNO0FBQ25ELFFBQUk7QUFDRixnQkFBa0M7QUFDaEMsWUFBTUMsS0FBSSxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCTixHQUE1QixDQUFiO0FBQ0Q7O0FBQ0QsYUFBT0csSUFBSSxHQUFHSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsSUFBWCxDQUFILEdBQXNCRixZQUFqQztBQUNELEtBTEQsQ0FLRSxPQUFPUSxLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxhQUFPUixZQUFQO0FBQ0Q7QUFDRixHQVY2QyxDQURKO0FBQUEsTUFDbkNXLFdBRG1DO0FBQUEsTUFDdEJDLGNBRHNCOztBQWExQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsUUFBSTtBQUNGLFVBQU1DLFlBQVksR0FDaEJELEtBQUssWUFBWUUsUUFBakIsR0FBNEJGLEtBQUssQ0FBQ0gsV0FBRCxDQUFqQyxHQUFpREcsS0FEbkQ7QUFHQUYsb0JBQWMsQ0FBQ0csWUFBRCxDQUFkO0FBQ0FaLFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQmEsT0FBcEIsQ0FBNEJsQixHQUE1QixFQUFpQ08sSUFBSSxDQUFDWSxTQUFMLENBQWVILFlBQWYsQ0FBakM7QUFDRCxLQU5ELENBTUUsT0FBT1AsS0FBUCxFQUFjO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixHQVZEOztBQVlBLFNBQU8sQ0FBQ0csV0FBRCxFQUFjRSxRQUFkLENBQVA7QUFDRDs7R0ExQlFmLGU7O0FBNEJNQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZjJkNTQxYmJmM2EwYmNmYWUxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiB1c2VMb2NhbFN0b3JhZ2Uoa2V5LCBpbml0aWFsVmFsdWUpIHtcclxuICBjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpdGVtID8gSlNPTi5wYXJzZShpdGVtKSA6IGluaXRpYWxWYWx1ZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9XHJcbiAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlKHN0b3JlZFZhbHVlKSA6IHZhbHVlO1xyXG5cclxuICAgICAgc2V0U3RvcmVkVmFsdWUodmFsdWVUb1N0b3JlKTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWVUb1N0b3JlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFtzdG9yZWRWYWx1ZSwgc2V0VmFsdWVdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VMb2NhbFN0b3JhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=