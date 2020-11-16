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
        console.log(props);

        if (!authenticating && !authenticated) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9ob2MvcmVxdWlyZUF1dGguanMiXSwibmFtZXMiOlsiZ2V0UmVkaXJlY3RUbyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVxdWlyZUF1dGgiLCJDb21wb25lbnQiLCJQcmVtaW11bUNvbXBvbmVudCIsIkFwcCIsImNoZWNrQXV0aCIsInByb3BzIiwiZ2V0VXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwibmV4dFByb3BzIiwiYXV0aGVudGljYXRlZCIsImF1dGhlbnRpY2F0aW5nIiwicmVmcmVzaFRva2VuIiwiZGlzcGF0Y2giLCJ0eXBlIiwicmVuZGVyIiwiYXV0aCIsIm90aGVyUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixNQUFJLFNBQWlDQyxNQUFNLENBQUNDLFFBQTVDLEVBQXNEO0FBQ3BELFdBQU9ELE1BQU0sQ0FBQ0MsUUFBZDtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNEOztBQUVjLFNBQVNDLFdBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDO0FBQzdDLFFBQU1DLGlCQUFOLFNBQWdDQywrQ0FBaEMsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLG1JQUNOLE1BQU07QUFDaEMsYUFBS0MsU0FBTCxDQUFlLEtBQUtDLEtBQXBCO0FBQ0EsYUFBS0MsV0FBTDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsT0FMaUM7O0FBQUEsMElBT0VDLFNBQUQsSUFBZTtBQUNoRCxhQUFLTCxTQUFMLENBQWVLLFNBQWY7QUFDRCxPQVRpQzs7QUFBQSxtSEFXckJKLEtBQUQsSUFBVztBQUNyQixjQUFNO0FBQUVLLHVCQUFGO0FBQWlCQztBQUFqQixZQUFvQ04sS0FBMUM7QUFBZ0RFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaOztBQUNoRCxZQUFJLENBQUNNLGNBQUQsSUFBbUIsQ0FBQ0QsYUFBeEIsRUFBdUM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0NFLHNCQUFZO0FBQ2I7QUFDRixPQXRCaUM7O0FBQUEscUhBd0JwQixNQUFNO0FBQ2xCLGNBQU07QUFBRUM7QUFBRixZQUFlLEtBQUtSLEtBQTFCO0FBQ0FRLGdCQUFRLENBQUM7QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBRCxDQUFSO0FBQ0QsT0EzQmlDOztBQUFBLHNIQTZCbkIsTUFBTTtBQUNuQixjQUFNO0FBQUVEO0FBQUYsWUFBZSxLQUFLUixLQUExQjtBQUNBUSxnQkFBUSxDQUFDO0FBQUVDLGNBQUksRUFBRTtBQUFSLFNBQUQsQ0FBUjtBQUNELE9BaENpQztBQUFBOztBQWtDbENDLFVBQU0sR0FBRztBQUNQLDBCQUErRCxLQUFLVixLQUFwRTtBQUFBLFlBQU07QUFBRU0sc0JBQUY7QUFBa0JELHFCQUFsQjtBQUFpQ007QUFBakMsT0FBTjtBQUFBLFlBQWdEQyxVQUFoRDs7QUFDQSxhQUFPTixjQUFjLEdBQ25CO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFSTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FGRixDQUZKLENBREYsQ0FERixDQURtQixHQWdCbkIsTUFBQyxTQUFELHlGQUNNTSxVQUROO0FBRUUsWUFBSSxFQUFFRCxJQUZSLENBR0U7QUFDQTtBQUNBO0FBQ0E7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBaEJGO0FBeUJEOztBQTdEaUM7O0FBZ0VwQyxRQUFNRSxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ1Isa0JBQWMsRUFBRVEsS0FBSyxDQUFDSCxJQUFOLENBQVdMLGNBRE87QUFFbENLLFFBQUksRUFBRUcsS0FBSyxDQUFDSCxJQUZzQjtBQUdsQ04saUJBQWEsRUFBRVMsS0FBSyxDQUFDSCxJQUFOLENBQVdOO0FBSFEsR0FBWixDQUF4Qjs7QUFNQSxTQUFPVSwyREFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJoQixpQkFBekIsQ0FBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLmNjNjU4MzlmODEzNWVjOTVkNjE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBnZXRSZWRpcmVjdFRvKCkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24pIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb247XHJcbiAgfVxyXG4gIHJldHVybiB7fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZUF1dGgoQ29tcG9uZW50KSB7XHJcbiAgY2xhc3MgUHJlbWltdW1Db21wb25lbnQgZXh0ZW5kcyBBcHAge1xyXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5jaGVja0F1dGgodGhpcy5wcm9wcyk7XHJcbiAgICAgIHRoaXMuZ2V0VXNlckRhdGEoKTtcclxuICAgICAgY29uc29sZS5sb2coJ1Rlc3QnKTtcclxuICAgIH07XHJcblxyXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAobmV4dFByb3BzKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tBdXRoKG5leHRQcm9wcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrQXV0aCA9IChwcm9wcykgPT4ge1xyXG4gICAgICBjb25zdCB7IGF1dGhlbnRpY2F0ZWQsIGF1dGhlbnRpY2F0aW5nIH0gPSBwcm9wcztjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICAgIGlmICghYXV0aGVudGljYXRpbmcgJiYgIWF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWRpcmVjdCcpO1xyXG4gICAgICAgLy8gUm91dGVyLnJlcGxhY2UoXHJcbiAgICAgICAvLyAgIGAvbG9naW4/cj0ke3JlZGlyLnBhdGhuYW1lICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyLnNlYXJjaCl9YCxcclxuICAgICAgIC8vICAgJy9sb2dpbicsXHJcbiAgICAgICAvLyAgIHsgc2hhbGxvdzogdHJ1ZSB9XHJcbiAgICAgICAvLyApO1xyXG4gICAgICAgIHJlZnJlc2hUb2tlbigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFVzZXJEYXRhID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdAQGF1dGgvR0VUX1VTRVInIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWZyZXNoVG9rZW4gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0BAYXV0aC9SRUZSRVNIX1RPS0VOJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IGF1dGhlbnRpY2F0aW5nLCBhdXRoZW50aWNhdGVkLCBhdXRoLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gYXV0aGVudGljYXRpbmcgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdyByb3VuZGVkLW1kIHAtNCBtYXgtdy1zbSB3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1ncmF5LTQwMCBoLTEyIHctMTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNCBweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWQgdy0zLzRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZCB3LTUvNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPENvbXBvbmVudFxyXG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgLy8gYXV0aFNlcnZpY2VzPXt7XHJcbiAgICAgICAgICAvLyAgIHJlZnJlc2hUb2tlbjogdGhpcy5yZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgICAvLyAgIC8vIGdldFVzZXJEYXRhLFxyXG4gICAgICAgICAgLy8gfX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gICAgYXV0aGVudGljYXRpbmc6IHN0b3JlLmF1dGguYXV0aGVudGljYXRpbmcsXHJcbiAgICBhdXRoOiBzdG9yZS5hdXRoLFxyXG4gICAgYXV0aGVudGljYXRlZDogc3RvcmUuYXV0aC5hdXRoZW50aWNhdGVkLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByZW1pbXVtQ29tcG9uZW50KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9