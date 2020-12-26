webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    _this = _super.call(this, props);
    _this.state = {
      data: null
    };
    console.log(_this.props, 'Please get updated this props! Thanks');
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_26___default()('https://www.freeskies.com');

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
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this3 = this;

      console.log("this props data", this.props);
      var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_26___default()('https://www.freeskies.com');

      if (this.props.kjm.app.notification) {
        socket.on('connect', function () {
          console.log('connected!');
          socket.emit('AUTH', {
            'token': _this3.props.kjm.auth.token
          });
          console.log('AUTH TOKEN SENT');
        });
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
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;

      if (this.props.kjm.app.notification) {
        console.log('Getting this props!', this.props); // socket.on('AUTH', e => {
        //   if(e !== 200) {
        //     console.log('auth error');
        //     } else  {
        //     socket.emit('VIDEO_READY', this.props.kjm.app.notificationData);
        //     socket.on('VIDEO_READY', (video) => {
        //       console.log('video ready', video);
        //     })
        //   }
        // })
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }
      }, "Freeskies"), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "//cdn.iframe.ly/embed.js",
        async: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://unpkg.com/video.js@6.7.1/dist/video-js.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "https://unpkg.com/video.js@6.7.1/dist/video.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "https://unpkg.com/@videojs/http-streaming@0.9.0/dist/videojs-http-streaming.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }
      })), __jsx(react_modal_hook__WEBPACK_IMPORTED_MODULE_12__["ModalProvider"], {
        rootComponent: react_transition_group__WEBPACK_IMPORTED_MODULE_11__["TransitionGroup"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }
      }, __jsx(helpers_services_UserController__WEBPACK_IMPORTED_MODULE_20__["AuthProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "app_root",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }
      })), __jsx("div", {
        id: "modal_place",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 15
        }
      })))), this.props.kjm.app.notification ? openNotification('testing') : null);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFyIiwib3Blbk5vdGlmaWNhdGlvbiIsInBsYWNlbWVudCIsIm5vdGlmaWNhdGlvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsImN0eCIsImdldEluaXRpYWxQcm9wcyIsInBhZ2VQcm9wcyIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNvY2tldCIsImlvIiwia2ptIiwiYXBwIiwib24iLCJlbWl0IiwiYXV0aCIsInRva2VuIiwiZSIsIm5vdGlmaWNhdGlvbkRhdGEiLCJ2aWRlbyIsIlRyYW5zaXRpb25Hcm91cCIsIkFwcCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSwwRUFBTyxDQUFDQyxHQUFSLENBQVlDLHdFQUFaOztBQUNBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsU0FBUyxFQUFJO0FBQ3BDQyxvREFBWSxDQUFDQyxPQUFiLENBQXFCO0FBQ25CQyxXQUFPLG9CQURZO0FBRW5CQyxlQUFXLEVBQUVKLFNBRk07QUFHbkJBLGFBQVMsRUFBRTtBQUhRLEdBQXJCO0FBS0QsQ0FORDs7SUFPTUssSzs7Ozs7Ozs7Ozs7Ozs7QUFDMkJDLHlCLFFBQUFBLFMsRUFBV0MsRyxRQUFBQSxHOztxQkFDdEJELFNBQVMsQ0FBQ0UsZTs7Ozs7O3VCQUNsQkYsU0FBUyxDQUFDRSxl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TUFBQyxTQUFELHlGQUFlakIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREosRUFFRTtBQUFLLFVBQUUsRUFBQyxhQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQURGLENBREYsQ0FqQkYsRUF5QkcsS0FBS0MsS0FBTCxDQUFXTyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJqQixZQUFuQixHQUFnQ0YsZ0JBQWdCLENBQUMsU0FBRCxDQUFoRCxHQUE0RCxJQXpCL0QsQ0FERjtBQTZCRDs7OztFQXBIaUI0QiwrQzs7QUF1SHBCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENaLE9BQUcsRUFBRVk7QUFENkIsR0FBWjtBQUFBLENBQXhCOztBQUllQyxtSEFBTyxDQUFDQyxTQUFSLENBQWtCQyw0REFBTyxDQUFDSixlQUFELENBQVAsQ0FBeUJ2QixLQUF6QixDQUFsQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWFiY2Q3N2ZkNjk1OWVhN2RiNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcclxuaW1wb3J0IHsgTW9kYWxQcm92aWRlciB9IGZyb20gJ3JlYWN0LW1vZGFsLWhvb2snO1xyXG5pbXBvcnQgJ2Nzcy90YWlsd2luZC5jc3MnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCAncmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2FsaWNlLWNhcm91c2VsLmNzcyc7XHJcbmltcG9ydCAnY3NzL2dsb2JhbC5zY3NzJztcclxuaW1wb3J0IFwibm9kZV9tb2R1bGVzL3ZpZGVvLXJlYWN0L2Rpc3QvdmlkZW8tcmVhY3QuY3NzXCI7XHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQgeyBmYXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ2hlbHBlcnMvc2VydmljZXMvVXNlckNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAncmVkdXgvc3RvcmUnO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5saWJyYXJ5LmFkZChmYXIpO1xyXG5jb25zdCBvcGVuTm90aWZpY2F0aW9uID0gcGxhY2VtZW50ID0+IHtcclxuICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICBtZXNzYWdlOiBgTmV3IE5vdGlmaWNhdGlvbmAsXHJcbiAgICBkZXNjcmlwdGlvbjogcGxhY2VtZW50LFxyXG4gICAgcGxhY2VtZW50OiAnYm90dG9tTGVmdCcsXHJcbiAgfSk7XHJcbn07XHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xyXG4gICAgICA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgICA6IHt9O1xyXG5cclxuICAgIC8vQW55dGhpbmcgcmV0dXJuZWQgaGVyZSBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGNsaWVudFxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzOiBwYWdlUHJvcHMgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLCAnUGxlYXNlIGdldCB1cGRhdGVkIHRoaXMgcHJvcHMhIFRoYW5rcycpXHJcbiAgfVxyXG5cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbScpO1xyXG4gICAgXHJcbiAgICBpZih0aGlzLnByb3BzLmtqbS5hcHAubm90aWZpY2F0aW9uKSB7XHJcbiAgICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIScpXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ0FVVEgnLCB7ICd0b2tlbic6IHRoaXMucHJvcHMua2ptLmF1dGgudG9rZW4gfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnQVVUSCBUT0tFTiBTRU5UJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge1xyXG4gICAgICAgIGlmKGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2F1dGggZXJyb3InKTtcclxuICAgICAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdGhpcy5wcm9wcy5ram0uYXBwLm5vdGlmaWNhdGlvbkRhdGEpO1xyXG4gICAgICAgICAgc29ja2V0Lm9uKCdWSURFT19SRUFEWScsICh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCB2aWRlbyk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIHByb3BzIGRhdGFcIiwgdGhpcy5wcm9wcylcclxuICAgIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwczovL3d3dy5mcmVlc2tpZXMuY29tJyk7XHJcbiAgICBcclxuICAgIGlmKHRoaXMucHJvcHMua2ptLmFwcC5ub3RpZmljYXRpb24pIHtcclxuICAgICAgc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQhJylcclxuICAgICAgICBzb2NrZXQuZW1pdCgnQVVUSCcsIHsgJ3Rva2VuJzogdGhpcy5wcm9wcy5ram0uYXV0aC50b2tlbiB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBVVRIIFRPS0VOIFNFTlQnKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc29ja2V0Lm9uKCdBVVRIJywgZSA9PiB7XHJcbiAgICAgICAgaWYoZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnYXV0aCBlcnJvcicpO1xyXG4gICAgICAgICAgfSBlbHNlICB7XHJcbiAgICAgICAgICBzb2NrZXQuZW1pdCgnVklERU9fUkVBRFknLCB0aGlzLnByb3BzLmtqbS5hcHAubm90aWZpY2F0aW9uRGF0YSk7XHJcbiAgICAgICAgICBzb2NrZXQub24oJ1ZJREVPX1JFQURZJywgKHZpZGVvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWRlbyByZWFkeScsIHZpZGVvKTtcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIFxyXG4gICAgaWYodGhpcy5wcm9wcy5ram0uYXBwLm5vdGlmaWNhdGlvbikge2NvbnNvbGUubG9nKCdHZXR0aW5nIHRoaXMgcHJvcHMhJywgdGhpcy5wcm9wcyk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgLy8gc29ja2V0Lm9uKCdBVVRIJywgZSA9PiB7XHJcbiAgICAgIC8vICAgaWYoZSAhPT0gMjAwKSB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygnYXV0aCBlcnJvcicpO1xyXG4gICAgICAvLyAgICAgfSBlbHNlICB7XHJcbiAgICAgIC8vICAgICBzb2NrZXQuZW1pdCgnVklERU9fUkVBRFknLCB0aGlzLnByb3BzLmtqbS5hcHAubm90aWZpY2F0aW9uRGF0YSk7XHJcbiAgICAgIC8vICAgICBzb2NrZXQub24oJ1ZJREVPX1JFQURZJywgKHZpZGVvKSA9PiB7XHJcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCd2aWRlbyByZWFkeScsIHZpZGVvKTtcclxuXHJcbiAgICAgIC8vICAgICB9KVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+RnJlZXNraWVzPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi8vY2RuLmlmcmFtZS5seS9lbWJlZC5qc1wiIGFzeW5jPjwvc2NyaXB0PlxyXG4gICAgICAgICAgey8qIDxsaW5rIGhyZWY9XCJodHRwczovL3Zqcy56ZW5jZG4ubmV0LzcuMC4wL3ZpZGVvLWpzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPiAqL31cclxuICAgICAgICAgIHsvKiA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdmpzLnplbmNkbi5uZXQvNy4wLjAvdmlkZW8ubWluLmpzXCI+PC9zY3JpcHQ+ICovfVxyXG4gICAgICAgICAgey8qIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdmlkZW9qcy1mbGFzaC9kaXN0L3ZpZGVvanMtZmxhc2guanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdmlkZW9qcy1jb250cmliLWhscy9kaXN0L3ZpZGVvanMtY29udHJpYi1obHMuanNcIj48L3NjcmlwdD4gKi99XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdmlkZW8uanNANi43LjEvZGlzdC92aWRlby1qcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vdmlkZW8uanNANi43LjEvZGlzdC92aWRlby5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9AdmlkZW9qcy9odHRwLXN0cmVhbWluZ0AwLjkuMC9kaXN0L3ZpZGVvanMtaHR0cC1zdHJlYW1pbmcuanNcIj48L3NjcmlwdD5cclxuXHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNb2RhbFByb3ZpZGVyIHJvb3RDb21wb25lbnQ9e1RyYW5zaXRpb25Hcm91cH0+XHJcbiAgICAgICAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXBwX3Jvb3RcIj5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfcGxhY2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0F1dGhQcm92aWRlcj5cclxuICAgICAgICA8L01vZGFsUHJvdmlkZXI+XHJcbiAgICAgICAge3RoaXMucHJvcHMua2ptLmFwcC5ub3RpZmljYXRpb24/b3Blbk5vdGlmaWNhdGlvbigndGVzdGluZycpOm51bGx9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcclxuICBram06IHN0b3JlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNeUFwcCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9