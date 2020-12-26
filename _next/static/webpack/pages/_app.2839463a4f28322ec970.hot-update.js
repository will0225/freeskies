webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var css_tailwind_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! css/tailwind.css */ "./css/tailwind.css");
/* harmony import */ var css_tailwind_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(css_tailwind_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var css_global_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! css/global.scss */ "./css/global.scss");
/* harmony import */ var css_global_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(css_global_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! node_modules/video-react/dist/video-react.css */ "./node_modules/video-react/dist/video-react.css");
/* harmony import */ var node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var helpers_services_UserController__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! helpers/services/UserController */ "./helpers/services/UserController.js");
/* harmony import */ var redux_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! redux/store */ "./redux/store.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_26__);








var _jsxFileName = "D:\\Freeskies-development-\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



















var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_26___default()('https://www.freeskies.com');
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_19__["far"]);

var openNotification = function openNotification(placement) {
  antd__WEBPACK_IMPORTED_MODULE_24__["notification"].success({
    message: "New Notification",
    description: placement,
    placement: 'bottomLeft'
  });
};

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      console.log('Getting this props!', this.props);

      if (this.props.kjm.app.notification) {
        socket.on('connect', function () {
          console.log('connected!');
          socket.emit('AUTH', {
            'token': _this.props.kjm.auth.token
          });
          console.log('AUTH TOKEN SENT');
        });
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, "Freeskies"), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "//cdn.iframe.ly/embed.js",
        async: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://unpkg.com/video.js@6.7.1/dist/video-js.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "https://unpkg.com/video.js@6.7.1/dist/video.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "https://unpkg.com/@videojs/http-streaming@0.9.0/dist/videojs-http-streaming.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      })), __jsx(react_modal_hook__WEBPACK_IMPORTED_MODULE_12__["ModalProvider"], {
        rootComponent: react_transition_group__WEBPACK_IMPORTED_MODULE_11__["TransitionGroup"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }, __jsx(helpers_services_UserController__WEBPACK_IMPORTED_MODULE_20__["AuthProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "app_root",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      })), __jsx("div", {
        id: "modal_place",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      })))), this.props.kjm.app.notification ? openNotification('testing') : null);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

var mapStateToProps = function mapStateToProps(store) {
  return {
    kjm: store
  };
};

/* harmony default export */ __webpack_exports__["default"] = (redux_store__WEBPACK_IMPORTED_MODULE_21__["wrapper"].withRedux(Object(react_redux__WEBPACK_IMPORTED_MODULE_25__["connect"])(mapStateToProps)(MyApp)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImxpYnJhcnkiLCJhZGQiLCJmYXIiLCJvcGVuTm90aWZpY2F0aW9uIiwicGxhY2VtZW50Iiwibm90aWZpY2F0aW9uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25zb2xlIiwibG9nIiwia2ptIiwiYXBwIiwib24iLCJlbWl0IiwiYXV0aCIsInRva2VuIiwiVHJhbnNpdGlvbkdyb3VwIiwiY3R4IiwiZ2V0SW5pdGlhbFByb3BzIiwiQXBwIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyx3REFBRSxDQUFDLDJCQUFELENBQWpCO0FBQ0FDLDBFQUFPLENBQUNDLEdBQVIsQ0FBWUMsd0VBQVo7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxTQUFTLEVBQUk7QUFDcENDLG9EQUFZLENBQUNDLE9BQWIsQ0FBcUI7QUFDbkJDLFdBQU8sb0JBRFk7QUFFbkJDLGVBQVcsRUFBRUosU0FGTTtBQUduQkEsYUFBUyxFQUFFO0FBSFEsR0FBckI7QUFLRCxDQU5EOztJQU9NSyxLOzs7Ozs7Ozs7Ozs7OzZCQVVLO0FBQUE7O0FBQUEsd0JBQzBCLEtBQUtDLEtBRC9CO0FBQUEsVUFDQ0MsU0FERCxlQUNDQSxTQUREO0FBQUEsVUFDWUMsU0FEWixlQUNZQSxTQURaO0FBRVBDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DLEtBQUtKLEtBQXhDOztBQUNBLFVBQUcsS0FBS0EsS0FBTCxDQUFXSyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJYLFlBQXRCLEVBQW9DO0FBQ2xDUCxjQUFNLENBQUNtQixFQUFQLENBQVUsU0FBVixFQUFxQixZQUFNO0FBQ3pCSixpQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBaEIsZ0JBQU0sQ0FBQ29CLElBQVAsQ0FBWSxNQUFaLEVBQW9CO0FBQUUscUJBQVMsS0FBSSxDQUFDUixLQUFMLENBQVdLLEdBQVgsQ0FBZUksSUFBZixDQUFvQkM7QUFBL0IsV0FBcEI7QUFDQVAsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0QsU0FKRDtBQUtEOztBQUNELGFBQ0UsbUVBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxlQUFPLEVBQUMsMkVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLEVBTUU7QUFBUSxXQUFHLEVBQUMsMEJBQVo7QUFBdUMsYUFBSyxNQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkYsRUFXRTtBQUFNLFlBQUksRUFBQyxvREFBWDtBQUFnRSxXQUFHLEVBQUMsWUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVhGLEVBWUU7QUFBUSxXQUFHLEVBQUMsZ0RBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVpGLEVBYUU7QUFBUSxXQUFHLEVBQUMsZ0ZBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWJGLENBREYsRUFpQkUsTUFBQywrREFBRDtBQUFlLHFCQUFhLEVBQUVPLHVFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxVQUFFLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxTQUFELHlGQUFlVCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESixFQUVFO0FBQUssVUFBRSxFQUFDLGFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREYsQ0FERixDQWpCRixFQXlCRyxLQUFLRixLQUFMLENBQVdLLEdBQVgsQ0FBZUMsR0FBZixDQUFtQlgsWUFBbkIsR0FBZ0NGLGdCQUFnQixDQUFDLFNBQUQsQ0FBaEQsR0FBNEQsSUF6Qi9ELENBREY7QUE2QkQ7Ozs7Ozs7Ozs7QUFoRDhCUSx5QixRQUFBQSxTLEVBQVdXLEcsUUFBQUEsRzs7cUJBQ3RCWCxTQUFTLENBQUNZLGU7Ozs7Ozt1QkFDbEJaLFNBQVMsQ0FBQ1ksZUFBVixDQUEwQkQsR0FBMUIsQzs7Ozs7Ozs7OEJBQ04sRTs7O0FBRkVWLHlCO2lEQUtDO0FBQUVBLDJCQUFTLEVBQUVBO0FBQWIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQU1ksK0M7O0FBb0RwQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDWCxPQUFHLEVBQUVXO0FBRDZCLEdBQVo7QUFBQSxDQUF4Qjs7QUFJZUMsbUhBQU8sQ0FBQ0MsU0FBUixDQUFrQkMsNERBQU8sQ0FBQ0osZUFBRCxDQUFQLENBQXlCaEIsS0FBekIsQ0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI4Mzk0NjNhNGYyODMyMmVjOTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcbmltcG9ydCB7IE1vZGFsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0ICdjc3MvdGFpbHdpbmQuY3NzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3MnO1xyXG5pbXBvcnQgJ2Nzcy9nbG9iYWwuc2Nzcyc7XHJcbmltcG9ydCBcIm5vZGVfbW9kdWxlcy92aWRlby1yZWFjdC9kaXN0L3ZpZGVvLXJlYWN0LmNzc1wiO1xyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgZmFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdoZWxwZXJzL3NlcnZpY2VzL1VzZXJDb250cm9sbGVyJztcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJ3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbScpO1xyXG5saWJyYXJ5LmFkZChmYXIpO1xyXG5jb25zdCBvcGVuTm90aWZpY2F0aW9uID0gcGxhY2VtZW50ID0+IHtcclxuICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICBtZXNzYWdlOiBgTmV3IE5vdGlmaWNhdGlvbmAsXHJcbiAgICBkZXNjcmlwdGlvbjogcGxhY2VtZW50LFxyXG4gICAgcGxhY2VtZW50OiAnYm90dG9tTGVmdCcsXHJcbiAgfSk7XHJcbn07XHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xyXG4gICAgICA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgICA6IHt9O1xyXG5cclxuICAgIC8vQW55dGhpbmcgcmV0dXJuZWQgaGVyZSBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGNsaWVudFxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzOiBwYWdlUHJvcHMgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyB0aGlzIHByb3BzIScsIHRoaXMucHJvcHMpO1xyXG4gICAgaWYodGhpcy5wcm9wcy5ram0uYXBwLm5vdGlmaWNhdGlvbikge1xyXG4gICAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCEnKVxyXG4gICAgICAgIHNvY2tldC5lbWl0KCdBVVRIJywgeyAndG9rZW4nOiB0aGlzLnByb3BzLmtqbS5hdXRoLnRva2VuIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FVVEggVE9LRU4gU0VOVCcpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkZyZWVza2llczwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvL2Nkbi5pZnJhbWUubHkvZW1iZWQuanNcIiBhc3luYz48L3NjcmlwdD5cclxuICAgICAgICAgIHsvKiA8bGluayBocmVmPVwiaHR0cHM6Ly92anMuemVuY2RuLm5ldC83LjAuMC92aWRlby1qcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz4gKi99XHJcbiAgICAgICAgICB7LyogPHNjcmlwdCBzcmM9XCJodHRwczovL3Zqcy56ZW5jZG4ubmV0LzcuMC4wL3ZpZGVvLm1pbi5qc1wiPjwvc2NyaXB0PiAqL31cclxuICAgICAgICAgIHsvKiA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3ZpZGVvanMtZmxhc2gvZGlzdC92aWRlb2pzLWZsYXNoLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3ZpZGVvanMtY29udHJpYi1obHMvZGlzdC92aWRlb2pzLWNvbnRyaWItaGxzLmpzXCI+PC9zY3JpcHQ+ICovfVxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3ZpZGVvLmpzQDYuNy4xL2Rpc3QvdmlkZW8tanMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3ZpZGVvLmpzQDYuNy4xL2Rpc3QvdmlkZW8uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vQHZpZGVvanMvaHR0cC1zdHJlYW1pbmdAMC45LjAvZGlzdC92aWRlb2pzLWh0dHAtc3RyZWFtaW5nLmpzXCI+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TW9kYWxQcm92aWRlciByb290Q29tcG9uZW50PXtUcmFuc2l0aW9uR3JvdXB9PlxyXG4gICAgICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcF9yb290XCI+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX3BsYWNlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Nb2RhbFByb3ZpZGVyPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmtqbS5hcHAubm90aWZpY2F0aW9uP29wZW5Ob3RpZmljYXRpb24oJ3Rlc3RpbmcnKTpudWxsfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAga2ptOiBzdG9yZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTXlBcHApKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==