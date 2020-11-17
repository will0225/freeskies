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
          refreshToken();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9ob2MvcmVxdWlyZUF1dGguanMiXSwibmFtZXMiOlsiZ2V0UmVkaXJlY3RUbyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVxdWlyZUF1dGgiLCJDb21wb25lbnQiLCJQcmVtaW11bUNvbXBvbmVudCIsIkFwcCIsImNoZWNrQXV0aCIsInByb3BzIiwiZ2V0VXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwibmV4dFByb3BzIiwiYXV0aGVudGljYXRlZCIsImF1dGhlbnRpY2F0aW5nIiwicmVmcmVzaFRva2VuIiwiZGlzcGF0Y2giLCJ0eXBlIiwicmVuZGVyIiwiYXV0aCIsIm90aGVyUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixNQUFJLFNBQWlDQyxNQUFNLENBQUNDLFFBQTVDLEVBQXNEO0FBQ3BELFdBQU9ELE1BQU0sQ0FBQ0MsUUFBZDtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNEOztBQUVjLFNBQVNDLFdBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDO0FBQzdDLFFBQU1DLGlCQUFOLFNBQWdDQywrQ0FBaEMsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLG1JQUNOLE1BQU07QUFDaEMsYUFBS0MsU0FBTCxDQUFlLEtBQUtDLEtBQXBCO0FBQ0EsYUFBS0MsV0FBTDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsT0FMaUM7O0FBQUEsMElBT0VDLFNBQUQsSUFBZTtBQUNoRCxhQUFLTCxTQUFMLENBQWVLLFNBQWY7QUFDRCxPQVRpQzs7QUFBQSxtSEFXckJKLEtBQUQsSUFBVztBQUNyQixjQUFNO0FBQUVLLHVCQUFGO0FBQWlCQztBQUFqQixZQUFvQ04sS0FBMUM7QUFBZ0RFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaLEVBQW1CLGdDQUFuQjs7QUFDaEQsWUFBSSxDQUFDTSxjQUFELElBQW1CLENBQUNELGFBQXhCLEVBQXVDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDRSxzQkFBWTtBQUNiO0FBQ0YsT0F0QmlDOztBQUFBLHFIQXdCcEIsTUFBTTtBQUNsQixjQUFNO0FBQUVDO0FBQUYsWUFBZSxLQUFLUixLQUExQjtBQUNBUSxnQkFBUSxDQUFDO0FBQUVDLGNBQUksRUFBRTtBQUFSLFNBQUQsQ0FBUjtBQUNELE9BM0JpQzs7QUFBQSxzSEE2Qm5CLE1BQU07QUFDbkIsY0FBTTtBQUFFRDtBQUFGLFlBQWUsS0FBS1IsS0FBMUI7QUFDQVEsZ0JBQVEsQ0FBQztBQUFFQyxjQUFJLEVBQUU7QUFBUixTQUFELENBQVI7QUFDRCxPQWhDaUM7QUFBQTs7QUFrQ2xDQyxVQUFNLEdBQUc7QUFDUCwwQkFBK0QsS0FBS1YsS0FBcEU7QUFBQSxZQUFNO0FBQUVNLHNCQUFGO0FBQWtCRCxxQkFBbEI7QUFBaUNNO0FBQWpDLE9BQU47QUFBQSxZQUFnREMsVUFBaEQ7O0FBQ0EsYUFBT04sY0FBYyxHQUNuQjtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxzRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUk7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBRkYsQ0FGSixDQURGLENBREYsQ0FEbUIsR0FnQm5CLE1BQUMsU0FBRCx5RkFDTU0sVUFETjtBQUVFLFlBQUksRUFBRUQsSUFGUixDQUdFO0FBQ0E7QUFDQTtBQUNBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWhCRjtBQXlCRDs7QUE3RGlDOztBQWdFcEMsUUFBTUUsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbENSLGtCQUFjLEVBQUVRLEtBQUssQ0FBQ0gsSUFBTixDQUFXTCxjQURPO0FBRWxDSyxRQUFJLEVBQUVHLEtBQUssQ0FBQ0gsSUFGc0I7QUFHbENOLGlCQUFhLEVBQUVTLEtBQUssQ0FBQ0gsSUFBTixDQUFXTjtBQUhRLEdBQVosQ0FBeEI7O0FBTUEsU0FBT1UsMkRBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCaEIsaUJBQXpCLENBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS44MWNlMmQwYzUwMjJlN2E0ZTA5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmVkaXJlY3RUbygpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uO1xyXG4gIH1cclxuICByZXR1cm4ge307XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVBdXRoKENvbXBvbmVudCkge1xyXG4gIGNsYXNzIFByZW1pbXVtQ29tcG9uZW50IGV4dGVuZHMgQXBwIHtcclxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tBdXRoKHRoaXMucHJvcHMpO1xyXG4gICAgICB0aGlzLmdldFVzZXJEYXRhKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUZXN0Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrQXV0aChuZXh0UHJvcHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja0F1dGggPSAocHJvcHMpID0+IHtcclxuICAgICAgY29uc3QgeyBhdXRoZW50aWNhdGVkLCBhdXRoZW50aWNhdGluZyB9ID0gcHJvcHM7Y29uc29sZS5sb2cocHJvcHMsICdUaGlzIGlzIGF1dGhlbnRpY2F0aW9uIHRlc3RpbmcnKTtcclxuICAgICAgaWYgKCFhdXRoZW50aWNhdGluZyB8fCAhYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgLy8gY29uc29sZS5sb2coJ3JlZGlyZWN0Jyk7XHJcbiAgICAgICAvLyBSb3V0ZXIucmVwbGFjZShcclxuICAgICAgIC8vICAgYC9sb2dpbj9yPSR7cmVkaXIucGF0aG5hbWUgKyBlbmNvZGVVUklDb21wb25lbnQocmVkaXIuc2VhcmNoKX1gLFxyXG4gICAgICAgLy8gICAnL2xvZ2luJyxcclxuICAgICAgIC8vICAgeyBzaGFsbG93OiB0cnVlIH1cclxuICAgICAgIC8vICk7XHJcbiAgICAgICAgcmVmcmVzaFRva2VuKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0VXNlckRhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0BAYXV0aC9HRVRfVVNFUicgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlZnJlc2hUb2tlbiA9ICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQEBhdXRoL1JFRlJFU0hfVE9LRU4nIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgYXV0aGVudGljYXRpbmcsIGF1dGhlbnRpY2F0ZWQsIGF1dGgsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiBhdXRoZW50aWNhdGluZyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93IHJvdW5kZWQtbWQgcC00IG1heC13LXNtIHctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZSBmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWdyYXktNDAwIGgtMTIgdy0xMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS00IHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTMvNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkIHctNS82XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAvLyBhdXRoU2VydmljZXM9e3tcclxuICAgICAgICAgIC8vICAgcmVmcmVzaFRva2VuOiB0aGlzLnJlZnJlc2hUb2tlbixcclxuICAgICAgICAgIC8vICAgLy8gZ2V0VXNlckRhdGEsXHJcbiAgICAgICAgICAvLyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAgICBhdXRoZW50aWNhdGluZzogc3RvcmUuYXV0aC5hdXRoZW50aWNhdGluZyxcclxuICAgIGF1dGg6IHN0b3JlLmF1dGgsXHJcbiAgICBhdXRoZW50aWNhdGVkOiBzdG9yZS5hdXRoLmF1dGhlbnRpY2F0ZWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJlbWltdW1Db21wb25lbnQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=