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

        if (!authenticating || !authenticated) {
          // console.log('redirect');
          // Router.replace(
          //   `/login?r=${redir.pathname + encodeURIComponent(redir.search)}`,
          //   '/login',
          //   { shallow: true }
          // );
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
        auth: auth // authServices={{
        //   refreshToken: this.refreshToken,
        //   // getUserData,
        // }}
        ,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9ob2MvcmVxdWlyZUF1dGguanMiXSwibmFtZXMiOlsiZ2V0UmVkaXJlY3RUbyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVxdWlyZUF1dGgiLCJDb21wb25lbnQiLCJQcmVtaW11bUNvbXBvbmVudCIsIkFwcCIsImNoZWNrQXV0aCIsInByb3BzIiwiZ2V0VXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwibmV4dFByb3BzIiwiYXV0aGVudGljYXRlZCIsImF1dGhlbnRpY2F0aW5nIiwicmVmcmVzaFRva2VuIiwiZGlzcGF0Y2giLCJ0eXBlIiwicmVuZGVyIiwiYXV0aCIsIm90aGVyUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixNQUFJLFNBQWlDQyxNQUFNLENBQUNDLFFBQTVDLEVBQXNEO0FBQ3BELFdBQU9ELE1BQU0sQ0FBQ0MsUUFBZDtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNEOztBQUVjLFNBQVNDLFdBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDO0FBQzdDLFFBQU1DLGlCQUFOLFNBQWdDQywrQ0FBaEMsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLG1JQUNOLE1BQU07QUFDaEMsYUFBS0MsU0FBTCxDQUFlLEtBQUtDLEtBQXBCO0FBQ0EsYUFBS0MsV0FBTDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsT0FMaUM7O0FBQUEsMElBT0VDLFNBQUQsSUFBZTtBQUNoRCxhQUFLTCxTQUFMLENBQWVLLFNBQWY7QUFDRCxPQVRpQzs7QUFBQSxtSEFXckJKLEtBQUQsSUFBVztBQUNyQixjQUFNO0FBQUVLLHVCQUFGO0FBQWlCQztBQUFqQixZQUFvQ04sS0FBMUM7QUFBZ0RFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaLEVBQW1CLGdDQUFuQjs7QUFDaEQsWUFBSSxDQUFDTSxjQUFELElBQW1CLENBQUNELGFBQXhCLEVBQXVDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLGVBQUtFLFlBQUw7QUFDRDtBQUNGLE9BdEJpQzs7QUFBQSxxSEF3QnBCLE1BQU07QUFDbEIsY0FBTTtBQUFFQztBQUFGLFlBQWUsS0FBS1IsS0FBMUI7QUFDQVEsZ0JBQVEsQ0FBQztBQUFFQyxjQUFJLEVBQUU7QUFBUixTQUFELENBQVI7QUFDRCxPQTNCaUM7O0FBQUEsc0hBNkJuQixNQUFNO0FBQ25CLGNBQU07QUFBRUQ7QUFBRixZQUFlLEtBQUtSLEtBQTFCO0FBQ0FRLGdCQUFRLENBQUM7QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBRCxDQUFSO0FBQ0QsT0FoQ2lDO0FBQUE7O0FBa0NsQ0MsVUFBTSxHQUFHO0FBQ1AsMEJBQStELEtBQUtWLEtBQXBFO0FBQUEsWUFBTTtBQUFFTSxzQkFBRjtBQUFrQkQscUJBQWxCO0FBQWlDTTtBQUFqQyxPQUFOO0FBQUEsWUFBZ0RDLFVBQWhEOztBQUNBLGFBQU9OLGNBQWMsR0FDbkI7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLG9DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVJO0FBQUssaUJBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQUZGLENBRkosQ0FERixDQURGLENBRG1CLEdBZ0JuQixNQUFDLFNBQUQseUZBQ01NLFVBRE47QUFFRSxZQUFJLEVBQUVELElBRlIsQ0FHRTtBQUNBO0FBQ0E7QUFDQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FoQkY7QUF5QkQ7O0FBN0RpQzs7QUFnRXBDLFFBQU1FLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDUixrQkFBYyxFQUFFUSxLQUFLLENBQUNILElBQU4sQ0FBV0wsY0FETztBQUVsQ0ssUUFBSSxFQUFFRyxLQUFLLENBQUNILElBRnNCO0FBR2xDTixpQkFBYSxFQUFFUyxLQUFLLENBQUNILElBQU4sQ0FBV047QUFIUSxHQUFaLENBQXhCOztBQU1BLFNBQU9VLDJEQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QmhCLGlCQUF6QixDQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuMWFhNDUyMjc3YTcxMWQ1NGMxNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIGdldFJlZGlyZWN0VG8oKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbikge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbjtcclxuICB9XHJcbiAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlQXV0aChDb21wb25lbnQpIHtcclxuICBjbGFzcyBQcmVtaW11bUNvbXBvbmVudCBleHRlbmRzIEFwcCB7XHJcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrQXV0aCh0aGlzLnByb3BzKTtcclxuICAgICAgdGhpcy5nZXRVc2VyRGF0YSgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnVGVzdCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHMpID0+IHtcclxuICAgICAgdGhpcy5jaGVja0F1dGgobmV4dFByb3BzKTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tBdXRoID0gKHByb3BzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgYXV0aGVudGljYXRlZCwgYXV0aGVudGljYXRpbmcgfSA9IHByb3BzO2NvbnNvbGUubG9nKHByb3BzLCAnVGhpcyBpcyBhdXRoZW50aWNhdGlvbiB0ZXN0aW5nJyk7XHJcbiAgICAgIGlmICghYXV0aGVudGljYXRpbmcgfHwgIWF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWRpcmVjdCcpO1xyXG4gICAgICAgLy8gUm91dGVyLnJlcGxhY2UoXHJcbiAgICAgICAvLyAgIGAvbG9naW4/cj0ke3JlZGlyLnBhdGhuYW1lICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyLnNlYXJjaCl9YCxcclxuICAgICAgIC8vICAgJy9sb2dpbicsXHJcbiAgICAgICAvLyAgIHsgc2hhbGxvdzogdHJ1ZSB9XHJcbiAgICAgICAvLyApO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFRva2VuKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0VXNlckRhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0BAYXV0aC9HRVRfVVNFUicgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlZnJlc2hUb2tlbiA9ICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQEBhdXRoL1JFRlJFU0hfVE9LRU4nIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgYXV0aGVudGljYXRpbmcsIGF1dGhlbnRpY2F0ZWQsIGF1dGgsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiBhdXRoZW50aWNhdGluZyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93IHJvdW5kZWQtbWQgcC00IG1heC13LXNtIHctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZSBmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWdyYXktNDAwIGgtMTIgdy0xMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS00IHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTMvNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkIHctNS82XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAvLyBhdXRoU2VydmljZXM9e3tcclxuICAgICAgICAgIC8vICAgcmVmcmVzaFRva2VuOiB0aGlzLnJlZnJlc2hUb2tlbixcclxuICAgICAgICAgIC8vICAgLy8gZ2V0VXNlckRhdGEsXHJcbiAgICAgICAgICAvLyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAgICBhdXRoZW50aWNhdGluZzogc3RvcmUuYXV0aC5hdXRoZW50aWNhdGluZyxcclxuICAgIGF1dGg6IHN0b3JlLmF1dGgsXHJcbiAgICBhdXRoZW50aWNhdGVkOiBzdG9yZS5hdXRoLmF1dGhlbnRpY2F0ZWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJlbWltdW1Db21wb25lbnQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=