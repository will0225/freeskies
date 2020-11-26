webpackHotUpdate_N_E("pages/timeline",{

/***/ "./helpers/hoc/requireAuth.js":
/*!************************************!*\
  !*** ./helpers/hoc/requireAuth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return requireAuth; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "E:\\freeskies_fe_code\\helpers\\hoc\\requireAuth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function getRedirectTo() {
  if ( true && window.location) {
    return window.location;
  }

  return {};
}

function requireAuth(Component) {
  class PremimumComponent extends next_app__WEBPACK_IMPORTED_MODULE_4___default.a {
    constructor(...args) {
      super(...args);

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "UNSAFE_componentWillMount", () => {
        this.checkAuth(this.props);
        this.getUserData();
        console.log('Test');
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "UNSAFE_componentWillReceiveProps", nextProps => {
        this.checkAuth(nextProps);
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "checkAuth", props => {
        const {
          authenticated,
          authenticating
        } = props;
        console.log(props, 'This is authentication testing');

        if (!authenticating && !authenticated) {
          console.log('Hey, guy, This is not authenticated yet'); // console.log('redirect');

          next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace("/?r=".concat(redir.pathname + encodeURIComponent(redir.search)), '/', {
            shallow: true
          });
          this.refreshToken();
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getUserData", () => {
        const {
          dispatch
        } = this.props;
        dispatch({
          type: '@@auth/GET_USER'
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "refreshToken", () => {
        const {
          dispatch
        } = this.props;
        dispatch({
          type: '@@auth/REFRESH_TOKEN'
        });
      });
    }

    render() {
      const _this$props = this.props,
            {
        authenticating,
        authenticated,
        auth
      } = _this$props,
            otherProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["authenticating", "authenticated", "auth"]);

      return authenticating ? __jsx("div", {
        className: "loading-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "animate-pulse flex space-x-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "rounded-full bg-gray-400 h-12 w-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "flex-1 space-y-4 py-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "h-4 bg-gray-400 rounded w-3/4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 19
        }
      }), __jsx("div", {
        className: "space-y-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "h-4 bg-gray-400 rounded",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "h-4 bg-gray-400 rounded w-5/6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      })))))) : __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
        auth: auth,
        authServices: {
          refreshToken: this.refreshToken // getUserData,

        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }));
    }

  }

  const mapStateToProps = store => ({
    authenticating: store.auth.authenticating,
    auth: store.auth,
    authenticated: store.auth.authenticated
  });

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(PremimumComponent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9ob2MvcmVxdWlyZUF1dGguanMiXSwibmFtZXMiOlsiZ2V0UmVkaXJlY3RUbyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVxdWlyZUF1dGgiLCJDb21wb25lbnQiLCJQcmVtaW11bUNvbXBvbmVudCIsIkFwcCIsImNoZWNrQXV0aCIsInByb3BzIiwiZ2V0VXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwibmV4dFByb3BzIiwiYXV0aGVudGljYXRlZCIsImF1dGhlbnRpY2F0aW5nIiwiUm91dGVyIiwicmVwbGFjZSIsInJlZGlyIiwicGF0aG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZWFyY2giLCJzaGFsbG93IiwicmVmcmVzaFRva2VuIiwiZGlzcGF0Y2giLCJ0eXBlIiwicmVuZGVyIiwiYXV0aCIsIm90aGVyUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixNQUFJLFNBQWlDQyxNQUFNLENBQUNDLFFBQTVDLEVBQXNEO0FBQ3BELFdBQU9ELE1BQU0sQ0FBQ0MsUUFBZDtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNEOztBQUVjLFNBQVNDLFdBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDO0FBQzdDLFFBQU1DLGlCQUFOLFNBQWdDQywrQ0FBaEMsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLG1JQUNOLE1BQU07QUFDaEMsYUFBS0MsU0FBTCxDQUFlLEtBQUtDLEtBQXBCO0FBQ0EsYUFBS0MsV0FBTDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsT0FMaUM7O0FBQUEsMElBT0VDLFNBQUQsSUFBZTtBQUNoRCxhQUFLTCxTQUFMLENBQWVLLFNBQWY7QUFDRCxPQVRpQzs7QUFBQSxtSEFXckJKLEtBQUQsSUFBVztBQUNyQixjQUFNO0FBQUVLLHVCQUFGO0FBQWlCQztBQUFqQixZQUFvQ04sS0FBMUM7QUFBZ0RFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaLEVBQW1CLGdDQUFuQjs7QUFDaEQsWUFBSSxDQUFDTSxjQUFELElBQW1CLENBQUNELGFBQXhCLEVBQXVDO0FBQUVILGlCQUFPLENBQUNDLEdBQVIsQ0FBWSx5Q0FBWixFQUFGLENBQ3RDOztBQUNBSSw0REFBTSxDQUFDQyxPQUFQLGVBQ1NDLEtBQUssQ0FBQ0MsUUFBTixHQUFpQkMsa0JBQWtCLENBQUNGLEtBQUssQ0FBQ0csTUFBUCxDQUQ1QyxHQUVFLEdBRkYsRUFHRTtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FIRjtBQUtDLGVBQUtDLFlBQUw7QUFDRDtBQUNGLE9BdEJpQzs7QUFBQSxxSEF3QnBCLE1BQU07QUFDbEIsY0FBTTtBQUFFQztBQUFGLFlBQWUsS0FBS2YsS0FBMUI7QUFDQWUsZ0JBQVEsQ0FBQztBQUFFQyxjQUFJLEVBQUU7QUFBUixTQUFELENBQVI7QUFDRCxPQTNCaUM7O0FBQUEsc0hBNkJuQixNQUFNO0FBQ25CLGNBQU07QUFBRUQ7QUFBRixZQUFlLEtBQUtmLEtBQTFCO0FBQ0FlLGdCQUFRLENBQUM7QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBRCxDQUFSO0FBQ0QsT0FoQ2lDO0FBQUE7O0FBa0NsQ0MsVUFBTSxHQUFHO0FBQ1AsMEJBQStELEtBQUtqQixLQUFwRTtBQUFBLFlBQU07QUFBRU0sc0JBQUY7QUFBa0JELHFCQUFsQjtBQUFpQ2E7QUFBakMsT0FBTjtBQUFBLFlBQWdEQyxVQUFoRDs7QUFDQSxhQUFPYixjQUFjLEdBQ25CO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFSTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FGRixDQUZKLENBREYsQ0FERixDQURtQixHQWdCbkIsTUFBQyxTQUFELHlGQUNNYSxVQUROO0FBRUUsWUFBSSxFQUFFRCxJQUZSO0FBR0Usb0JBQVksRUFBRTtBQUNaSixzQkFBWSxFQUFFLEtBQUtBLFlBRFAsQ0FFWjs7QUFGWSxTQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBaEJGO0FBeUJEOztBQTdEaUM7O0FBZ0VwQyxRQUFNTSxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ2Ysa0JBQWMsRUFBRWUsS0FBSyxDQUFDSCxJQUFOLENBQVdaLGNBRE87QUFFbENZLFFBQUksRUFBRUcsS0FBSyxDQUFDSCxJQUZzQjtBQUdsQ2IsaUJBQWEsRUFBRWdCLEtBQUssQ0FBQ0gsSUFBTixDQUFXYjtBQUhRLEdBQVosQ0FBeEI7O0FBTUEsU0FBT2lCLDJEQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QnZCLGlCQUF6QixDQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuZDQ3NDU0YjRhNTEyYzQ1YzFkMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIGdldFJlZGlyZWN0VG8oKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbikge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbjtcclxuICB9XHJcbiAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlQXV0aChDb21wb25lbnQpIHtcclxuICBjbGFzcyBQcmVtaW11bUNvbXBvbmVudCBleHRlbmRzIEFwcCB7XHJcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrQXV0aCh0aGlzLnByb3BzKTtcclxuICAgICAgdGhpcy5nZXRVc2VyRGF0YSgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnVGVzdCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHMpID0+IHtcclxuICAgICAgdGhpcy5jaGVja0F1dGgobmV4dFByb3BzKTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tBdXRoID0gKHByb3BzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgYXV0aGVudGljYXRlZCwgYXV0aGVudGljYXRpbmcgfSA9IHByb3BzO2NvbnNvbGUubG9nKHByb3BzLCAnVGhpcyBpcyBhdXRoZW50aWNhdGlvbiB0ZXN0aW5nJyk7XHJcbiAgICAgIGlmICghYXV0aGVudGljYXRpbmcgJiYgIWF1dGhlbnRpY2F0ZWQpIHsgY29uc29sZS5sb2coJ0hleSwgZ3V5LCBUaGlzIGlzIG5vdCBhdXRoZW50aWNhdGVkIHlldCcpO1xyXG4gICAgICAgLy8gY29uc29sZS5sb2coJ3JlZGlyZWN0Jyk7XHJcbiAgICAgICBSb3V0ZXIucmVwbGFjZShcclxuICAgICAgICAgYC8/cj0ke3JlZGlyLnBhdGhuYW1lICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyLnNlYXJjaCl9YCxcclxuICAgICAgICAgJy8nLFxyXG4gICAgICAgICB7IHNoYWxsb3c6IHRydWUgfVxyXG4gICAgICAgKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hUb2tlbigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFVzZXJEYXRhID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdAQGF1dGgvR0VUX1VTRVInIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWZyZXNoVG9rZW4gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0BAYXV0aC9SRUZSRVNIX1RPS0VOJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IGF1dGhlbnRpY2F0aW5nLCBhdXRoZW50aWNhdGVkLCBhdXRoLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gYXV0aGVudGljYXRpbmcgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdyByb3VuZGVkLW1kIHAtNCBtYXgtdy1zbSB3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBoLTEyIHctMTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNCBweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWQgdy0zLzRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTUvNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPENvbXBvbmVudFxyXG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgYXV0aFNlcnZpY2VzPXt7XHJcbiAgICAgICAgICAgIHJlZnJlc2hUb2tlbjogdGhpcy5yZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgICAgIC8vIGdldFVzZXJEYXRhLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gICAgYXV0aGVudGljYXRpbmc6IHN0b3JlLmF1dGguYXV0aGVudGljYXRpbmcsXHJcbiAgICBhdXRoOiBzdG9yZS5hdXRoLFxyXG4gICAgYXV0aGVudGljYXRlZDogc3RvcmUuYXV0aC5hdXRoZW50aWNhdGVkLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByZW1pbXVtQ29tcG9uZW50KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9