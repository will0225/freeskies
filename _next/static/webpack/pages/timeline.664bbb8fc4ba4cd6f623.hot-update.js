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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "E:\\freeskies_fe_code\\helpers\\hoc\\requireAuth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





function getRedirectTo() {
  if ( true && window.location) {
    return window.location;
  }

  return {};
}

function requireAuth(Component) {
  var PremimumComponent = /*#__PURE__*/function (_App) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PremimumComponent, _App);

    var _super = _createSuper(PremimumComponent);

    function PremimumComponent() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PremimumComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "UNSAFE_componentWillMount", function () {
        _this.checkAuth(_this.props);

        _this.getUserData();

        console.log('Test');
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "UNSAFE_componentWillReceiveProps", function (nextProps) {
        _this.checkAuth(nextProps);
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "checkAuth", function (props) {
        var authenticated = props.authenticated,
            authenticating = props.authenticating;

        if (!authenticating && !authenticated) {
          console.log('redirect');
          next_router__WEBPACK_IMPORTED_MODULE_12___default.a.replace("/login?r=".concat(redir.pathname + encodeURIComponent(redir.search)), '/login', {
            shallow: true
          });
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getUserData", function () {
        var dispatch = _this.props.dispatch;
        dispatch({
          type: '@@auth/GET_USER'
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "refreshToken", function () {
        var dispatch = _this.props.dispatch;
        dispatch({
          type: '@@auth/REFRESH_TOKEN'
        });
      });

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PremimumComponent, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            authenticating = _this$props.authenticating,
            authenticated = _this$props.authenticated,
            auth = _this$props.auth,
            otherProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["authenticating", "authenticated", "auth"]);

        return authenticating ? __jsx("div", {
          className: "loading-container",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "animate-pulse flex space-x-4",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "rounded-full bg-gray-400 h-12 w-12",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }
        }), __jsx("div", {
          className: "flex-1 space-y-4 py-1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "h-4 bg-gray-400 rounded w-3/4",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 19
          }
        }), __jsx("div", {
          className: "space-y-2",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 19
          }
        }, __jsx("div", {
          className: "h-4 bg-gray-400 rounded",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }
        }), __jsx("div", {
          className: "h-4 bg-gray-400 rounded w-5/6",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
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
            lineNumber: 64,
            columnNumber: 9
          }
        }));
      }
    }]);

    return PremimumComponent;
  }(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);

  var mapStateToProps = function mapStateToProps(store) {
    return {
      authenticating: store.auth.authenticating,
      auth: store.auth,
      authenticated: store.auth.authenticated
    };
  };

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps)(PremimumComponent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9ob2MvcmVxdWlyZUF1dGguanMiXSwibmFtZXMiOlsiZ2V0UmVkaXJlY3RUbyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVxdWlyZUF1dGgiLCJDb21wb25lbnQiLCJQcmVtaW11bUNvbXBvbmVudCIsImNoZWNrQXV0aCIsInByb3BzIiwiZ2V0VXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwibmV4dFByb3BzIiwiYXV0aGVudGljYXRlZCIsImF1dGhlbnRpY2F0aW5nIiwiUm91dGVyIiwicmVwbGFjZSIsInJlZGlyIiwicGF0aG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZWFyY2giLCJzaGFsbG93IiwiZGlzcGF0Y2giLCJ0eXBlIiwiYXV0aCIsIm90aGVyUHJvcHMiLCJBcHAiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLE1BQUksU0FBaUNDLE1BQU0sQ0FBQ0MsUUFBNUMsRUFBc0Q7QUFDcEQsV0FBT0QsTUFBTSxDQUFDQyxRQUFkO0FBQ0Q7O0FBQ0QsU0FBTyxFQUFQO0FBQ0Q7O0FBRWMsU0FBU0MsV0FBVCxDQUFxQkMsU0FBckIsRUFBZ0M7QUFBQSxNQUN2Q0MsaUJBRHVDO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsc09BRWYsWUFBTTtBQUNoQyxjQUFLQyxTQUFMLENBQWUsTUFBS0MsS0FBcEI7O0FBQ0EsY0FBS0MsV0FBTDs7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNELE9BTjBDOztBQUFBLDZPQVFSLFVBQUNDLFNBQUQsRUFBZTtBQUNoRCxjQUFLTCxTQUFMLENBQWVLLFNBQWY7QUFDRCxPQVYwQzs7QUFBQSxzTkFZ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ZXMvdGltZWxpbmUuNjY0YmJiOGZjNGJhNGNkNmY2MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIGdldFJlZGlyZWN0VG8oKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbikge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbjtcclxuICB9XHJcbiAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlQXV0aChDb21wb25lbnQpIHtcclxuICBjbGFzcyBQcmVtaW11bUNvbXBvbmVudCBleHRlbmRzIEFwcCB7XHJcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrQXV0aCh0aGlzLnByb3BzKTtcclxuICAgICAgdGhpcy5nZXRVc2VyRGF0YSgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnVGVzdCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHMpID0+IHtcclxuICAgICAgdGhpcy5jaGVja0F1dGgobmV4dFByb3BzKTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tBdXRoID0gKHByb3BzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgYXV0aGVudGljYXRlZCwgYXV0aGVudGljYXRpbmcgfSA9IHByb3BzO1xyXG4gICAgICBpZiAoIWF1dGhlbnRpY2F0aW5nICYmICFhdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZGlyZWN0Jyk7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoXHJcbiAgICAgICAgICBgL2xvZ2luP3I9JHtyZWRpci5wYXRobmFtZSArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpci5zZWFyY2gpfWAsXHJcbiAgICAgICAgICAnL2xvZ2luJyxcclxuICAgICAgICAgIHsgc2hhbGxvdzogdHJ1ZSB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRVc2VyRGF0YSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQEBhdXRoL0dFVF9VU0VSJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVmcmVzaFRva2VuID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdAQGF1dGgvUkVGUkVTSF9UT0tFTicgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3QgeyBhdXRoZW50aWNhdGluZywgYXV0aGVudGljYXRlZCwgYXV0aCwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIGF1dGhlbnRpY2F0aW5nID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBzaGFkb3cgcm91bmRlZC1tZCBwLTQgbWF4LXctc20gdy1mdWxsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlIGZsZXggc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZ3JheS00MDAgaC0xMiB3LTEyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTQgcHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTQwMCByb3VuZGVkIHctMy80XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS00MDAgcm91bmRlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktNDAwIHJvdW5kZWQgdy01LzZcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxDb21wb25lbnRcclxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgIC8vIGF1dGhTZXJ2aWNlcz17e1xyXG4gICAgICAgICAgLy8gICByZWZyZXNoVG9rZW46IHRoaXMucmVmcmVzaFRva2VuLFxyXG4gICAgICAgICAgLy8gICAvLyBnZXRVc2VyRGF0YSxcclxuICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcclxuICAgIGF1dGhlbnRpY2F0aW5nOiBzdG9yZS5hdXRoLmF1dGhlbnRpY2F0aW5nLFxyXG4gICAgYXV0aDogc3RvcmUuYXV0aCxcclxuICAgIGF1dGhlbnRpY2F0ZWQ6IHN0b3JlLmF1dGguYXV0aGVudGljYXRlZCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcmVtaW11bUNvbXBvbmVudCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==