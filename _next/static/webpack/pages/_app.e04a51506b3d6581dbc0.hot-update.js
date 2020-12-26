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
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      socket.on('connect', function () {
        console.log('connected!');
        socket.emit('AUTH', {
          'token': _this.props.kjm.auth.token
        });
        console.log('AUTH TOKEN SENT');
      });

      if (this.props.kjm.app.notification) {
        socket.on('connect', function () {
          console.log('connected!');
          socket.emit('AUTH', {
            'token': _this.props.kjm.auth.token
          });
          console.log('AUTH TOKEN SENT');
        });
        socket.on('AUTH', function (e) {
          if (e !== 200) {
            console.log('auth error');
          } else {
            socket.emit('VIDEO_READY', _this.props.kjm.app.notificationData);
            socket.on('VIDEO_READY', function (video) {
              console.log('video ready', video);
            });
          }
        });
      }
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      console.log("this props data", this.props);

      if (this.props.kjm.app.notification) {
        socket.on('connect', function () {
          console.log('connected!');
          socket.emit('AUTH', {
            'token': _this2.props.kjm.auth.token
          });
          console.log('AUTH TOKEN SENT');
        });
        socket.on('AUTH', function (e) {
          if (e !== 200) {
            console.log('auth error');
          } else {
            socket.emit('VIDEO_READY', _this2.props.kjm.app.notificationData);
            socket.on('VIDEO_READY', function (video) {
              console.log('video ready', video);
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;

      if (this.props.kjm.app.notification) {
        console.log('Getting this props!', this.props);
        socket.on('AUTH', function (e) {
          if (e !== 200) {
            console.log('auth error');
          } else {
            socket.emit('VIDEO_READY', _this3.props.kjm.app.notificationData);
            socket.on('VIDEO_READY', function (video) {
              console.log('video ready', video);
            });
          }
        });
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }
      }, "Freeskies"), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "//cdn.iframe.ly/embed.js",
        async: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://unpkg.com/video.js@6.7.1/dist/video-js.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "https://unpkg.com/video.js@6.7.1/dist/video.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "https://unpkg.com/@videojs/http-streaming@0.9.0/dist/videojs-http-streaming.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }
      })), __jsx(react_modal_hook__WEBPACK_IMPORTED_MODULE_12__["ModalProvider"], {
        rootComponent: react_transition_group__WEBPACK_IMPORTED_MODULE_11__["TransitionGroup"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }
      }, __jsx(helpers_services_UserController__WEBPACK_IMPORTED_MODULE_20__["AuthProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "app_root",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }
      })), __jsx("div", {
        id: "modal_place",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImxpYnJhcnkiLCJhZGQiLCJmYXIiLCJvcGVuTm90aWZpY2F0aW9uIiwicGxhY2VtZW50Iiwibm90aWZpY2F0aW9uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsIk15QXBwIiwib24iLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsInByb3BzIiwia2ptIiwiYXV0aCIsInRva2VuIiwiYXBwIiwiZSIsIm5vdGlmaWNhdGlvbkRhdGEiLCJ2aWRlbyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlRyYW5zaXRpb25Hcm91cCIsImN0eCIsImdldEluaXRpYWxQcm9wcyIsIkFwcCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0Msd0RBQUUsQ0FBQywyQkFBRCxDQUFqQjtBQUNBQywwRUFBTyxDQUFDQyxHQUFSLENBQVlDLHdFQUFaOztBQUNBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsU0FBUyxFQUFJO0FBQ3BDQyxvREFBWSxDQUFDQyxPQUFiLENBQXFCO0FBQ25CQyxXQUFPLG9CQURZO0FBRW5CQyxlQUFXLEVBQUVKLFNBRk07QUFHbkJBLGFBQVMsRUFBRTtBQUhRLEdBQXJCO0FBS0QsQ0FORDs7SUFPTUssSzs7Ozs7Ozs7Ozs7Ozt3Q0FXZ0I7QUFBQTs7QUFDbEJYLFlBQU0sQ0FBQ1ksRUFBUCxDQUFVLFNBQVYsRUFBcUIs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QUFBO0FBQUEsU0FDRSxNQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLFVBQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLFNBQUQseUZBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKLEVBRUU7QUFBSyxVQUFFLEVBQUMsYUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERixDQURGLENBakJGLEVBeUJHLEtBQUtULEtBQUwsQ0FBV0MsR0FBWCxDQUFlRyxHQUFmLENBQW1CYixZQUFuQixHQUFnQ0YsZ0JBQWdCLENBQUMsU0FBRCxDQUFoRCxHQUE0RCxJQXpCL0QsQ0FERjtBQTZCRDs7Ozs7Ozs7OztBQTNHOEJtQix5QixRQUFBQSxTLEVBQVdHLEcsUUFBQUEsRzs7cUJBQ3RCSCxTQUFTLENBQUNJLGU7Ozs7Ozt1QkFDbEJKLFNBQVMsQ0FBQ0ksZUFBVixDQUEwQkQsR0FBMUIsQzs7Ozs7Ozs7OEJBQ04sRTs7O0FBRkVGLHlCO2lEQUtDO0FBQUVBLDJCQUFTLEVBQUVBO0FBQWIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQU0ksK0M7O0FBK0dwQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDZCxPQUFHLEVBQUVjO0FBRDZCLEdBQVo7QUFBQSxDQUF4Qjs7QUFJZUMsbUhBQU8sQ0FBQ0MsU0FBUixDQUFrQkMsNERBQU8sQ0FBQ0osZUFBRCxDQUFQLENBQXlCbkIsS0FBekIsQ0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmUwNGE1MTUwNmIzZDY1ODFkYmMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcbmltcG9ydCB7IE1vZGFsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0ICdjc3MvdGFpbHdpbmQuY3NzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3MnO1xyXG5pbXBvcnQgJ2Nzcy9nbG9iYWwuc2Nzcyc7XHJcbmltcG9ydCBcIm5vZGVfbW9kdWxlcy92aWRlby1yZWFjdC9kaXN0L3ZpZGVvLXJlYWN0LmNzc1wiO1xyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgZmFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdoZWxwZXJzL3NlcnZpY2VzL1VzZXJDb250cm9sbGVyJztcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJ3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbScpO1xyXG5saWJyYXJ5LmFkZChmYXIpO1xyXG5jb25zdCBvcGVuTm90aWZpY2F0aW9uID0gcGxhY2VtZW50ID0+IHtcclxuICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICBtZXNzYWdlOiBgTmV3IE5vdGlmaWNhdGlvbmAsXHJcbiAgICBkZXNjcmlwdGlvbjogcGxhY2VtZW50LFxyXG4gICAgcGxhY2VtZW50OiAnYm90dG9tTGVmdCcsXHJcbiAgfSk7XHJcbn07XHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xyXG4gICAgICA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgICA6IHt9O1xyXG5cclxuICAgIC8vQW55dGhpbmcgcmV0dXJuZWQgaGVyZSBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGNsaWVudFxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzOiBwYWdlUHJvcHMgfTtcclxuICB9XHJcblxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCEnKVxyXG4gICAgICBzb2NrZXQuZW1pdCgnQVVUSCcsIHsgJ3Rva2VuJzogdGhpcy5wcm9wcy5ram0uYXV0aC50b2tlbiB9KVxyXG4gICAgICBjb25zb2xlLmxvZygnQVVUSCBUT0tFTiBTRU5UJylcclxuICAgIH0pXHJcbiAgICBpZih0aGlzLnByb3BzLmtqbS5hcHAubm90aWZpY2F0aW9uKSB7XHJcbiAgICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIScpXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ0FVVEgnLCB7ICd0b2tlbic6IHRoaXMucHJvcHMua2ptLmF1dGgudG9rZW4gfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnQVVUSCBUT0tFTiBTRU5UJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge1xyXG4gICAgICAgIGlmKGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2F1dGggZXJyb3InKTtcclxuICAgICAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdGhpcy5wcm9wcy5ram0uYXBwLm5vdGlmaWNhdGlvbkRhdGEpO1xyXG4gICAgICAgICAgc29ja2V0Lm9uKCdWSURFT19SRUFEWScsICh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCB2aWRlbyk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge2NvbnNvbGUubG9nKFwidGhpcyBwcm9wcyBkYXRhXCIsIHRoaXMucHJvcHMpXHJcbiAgICBpZih0aGlzLnByb3BzLmtqbS5hcHAubm90aWZpY2F0aW9uKSB7XHJcbiAgICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIScpXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ0FVVEgnLCB7ICd0b2tlbic6IHRoaXMucHJvcHMua2ptLmF1dGgudG9rZW4gfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnQVVUSCBUT0tFTiBTRU5UJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge1xyXG4gICAgICAgIGlmKGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2F1dGggZXJyb3InKTtcclxuICAgICAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdGhpcy5wcm9wcy5ram0uYXBwLm5vdGlmaWNhdGlvbkRhdGEpO1xyXG4gICAgICAgICAgc29ja2V0Lm9uKCdWSURFT19SRUFEWScsICh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCB2aWRlbyk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBcclxuICAgIGlmKHRoaXMucHJvcHMua2ptLmFwcC5ub3RpZmljYXRpb24pIHtjb25zb2xlLmxvZygnR2V0dGluZyB0aGlzIHByb3BzIScsIHRoaXMucHJvcHMpO1xyXG4gICAgICBcclxuXHJcbiAgICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge1xyXG4gICAgICAgIGlmKGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2F1dGggZXJyb3InKTtcclxuICAgICAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdGhpcy5wcm9wcy5ram0uYXBwLm5vdGlmaWNhdGlvbkRhdGEpO1xyXG4gICAgICAgICAgc29ja2V0Lm9uKCdWSURFT19SRUFEWScsICh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCB2aWRlbyk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkZyZWVza2llczwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvL2Nkbi5pZnJhbWUubHkvZW1iZWQuanNcIiBhc3luYz48L3NjcmlwdD5cclxuICAgICAgICAgIHsvKiA8bGluayBocmVmPVwiaHR0cHM6Ly92anMuemVuY2RuLm5ldC83LjAuMC92aWRlby1qcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz4gKi99XHJcbiAgICAgICAgICB7LyogPHNjcmlwdCBzcmM9XCJodHRwczovL3Zqcy56ZW5jZG4ubmV0LzcuMC4wL3ZpZGVvLm1pbi5qc1wiPjwvc2NyaXB0PiAqL31cclxuICAgICAgICAgIHsvKiA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3ZpZGVvanMtZmxhc2gvZGlzdC92aWRlb2pzLWZsYXNoLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3ZpZGVvanMtY29udHJpYi1obHMvZGlzdC92aWRlb2pzLWNvbnRyaWItaGxzLmpzXCI+PC9zY3JpcHQ+ICovfVxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3ZpZGVvLmpzQDYuNy4xL2Rpc3QvdmlkZW8tanMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3ZpZGVvLmpzQDYuNy4xL2Rpc3QvdmlkZW8uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vQHZpZGVvanMvaHR0cC1zdHJlYW1pbmdAMC45LjAvZGlzdC92aWRlb2pzLWh0dHAtc3RyZWFtaW5nLmpzXCI+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TW9kYWxQcm92aWRlciByb290Q29tcG9uZW50PXtUcmFuc2l0aW9uR3JvdXB9PlxyXG4gICAgICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcF9yb290XCI+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsX3BsYWNlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Nb2RhbFByb3ZpZGVyPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmtqbS5hcHAubm90aWZpY2F0aW9uP29wZW5Ob3RpZmljYXRpb24oJ3Rlc3RpbmcnKTpudWxsfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmUpID0+ICh7XHJcbiAga2ptOiBzdG9yZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTXlBcHApKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==