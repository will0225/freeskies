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
    key: "UNSAFE_componentDidMount",
    value: function UNSAFE_componentDidMount() {
      var _this2 = this;

      var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_26___default()('https://www.freeskies.com');
      console.log('Testing props data on componentDidMount', this.props);

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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_26___default()('https://www.freeskies.com');
      console.log('Testing props data on componentDidMount', this.props);

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
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this4 = this;

      var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_26___default()('https://www.freeskies.com');

      if (this.props.kjm.app.notification) {
        socket.on('connect', function () {
          console.log('connected!');
          socket.emit('AUTH', {
            'token': _this4.props.kjm.auth.token
          });
          console.log('AUTH TOKEN SENT');
        });
        socket.on('AUTH', function (e) {
          if (e !== 200) {
            console.log('auth error');
          } else {
            socket.emit('VIDEO_READY', _this4.props.kjm.app.notificationData);
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
          lineNumber: 140,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }
      }, "Freeskies"), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "//cdn.iframe.ly/embed.js",
        async: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://unpkg.com/video.js@6.7.1/dist/video-js.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "https://unpkg.com/video.js@6.7.1/dist/video.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "https://unpkg.com/@videojs/http-streaming@0.9.0/dist/videojs-http-streaming.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }
      })), __jsx(react_modal_hook__WEBPACK_IMPORTED_MODULE_12__["ModalProvider"], {
        rootComponent: react_transition_group__WEBPACK_IMPORTED_MODULE_11__["TransitionGroup"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }
      }, __jsx(helpers_services_UserController__WEBPACK_IMPORTED_MODULE_20__["AuthProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "app_root",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 17
        }
      })), __jsx("div", {
        id: "modal_place",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFyIiwib3Blbk5vdGlmaWNhdGlvbiIsInBsYWNlbWVudCIsIm5vdGlmaWNhdGlvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsImN0eCIsImdldEluaXRpYWxQcm9wcyIsInBhZ2VQcm9wcyIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNvY2tldCIsImlvIiwia2ptIiwiYXBwIiwib24iLCJlbWl0IiwiYXV0aCIsInRva2VuIiwiZSIsIm5vdGlmaWNhdGlvbkRhdGEiLCJ2aWRlbyIsIlRyYW5zaXRpb25Hcm91cCIsIkFwcCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSwwRUFBTyxDQUFDQyxHQUFSLENBQVlDLHdFQUFaOztBQUNBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsU0FBUyxFQUFJO0FBQ3BDQyxvREFBWSxDQUFDQyxPQUFiLENBQXFCO0FBQ25CQyxXQUFPLG9CQURZO0FBRW5CQyxlQUFXLEVBQUVKLFNBRk07QUFHbkJBLGFBQVMsRUFBRTtBQUhRLEdBQXJCO0FBS0QsQ0FORDs7SUFPTUssSzs7Ozs7Ozs7Ozs7Ozs7QUFDMkJDLHlCLFFBQUFBLFMsRUFBV0MsRyxRQUFBQSxHOztxQkFDdEJELFNBQVMsQ0FBQ0UsZTs7Ozs7O3VCQUNsQkYsU0FBUyxDQUFDRSxl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Q0FERixDQWpCRixFQXlCRyxLQUFLQyxLQUFMLENBQVdPLEdBQVgsQ0FBZUMsR0FBZixDQUFtQmpCLFlBQW5CLEdBQWdDRixnQkFBZ0IsQ0FBQyxTQUFELENBQWhELEdBQTRELElBekIvRCxDQURGO0FBNkJEOzs7O0VBM0lpQjRCLCtDOztBQThJcEIsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ1osT0FBRyxFQUFFWTtBQUQ2QixHQUFaO0FBQUEsQ0FBeEI7O0FBSWVDLG1IQUFPLENBQUNDLFNBQVIsQ0FBa0JDLDREQUFPLENBQUNKLGVBQUQsQ0FBUCxDQUF5QnZCLEtBQXpCLENBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iYjlhMjk2Y2NjMzZjM2Q4YzdkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5pbXBvcnQgeyBNb2RhbFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCAnY3NzL3RhaWx3aW5kLmNzcyc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0ICdyZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzJztcclxuaW1wb3J0ICdjc3MvZ2xvYmFsLnNjc3MnO1xyXG5pbXBvcnQgXCJub2RlX21vZHVsZXMvdmlkZW8tcmVhY3QvZGlzdC92aWRlby1yZWFjdC5jc3NcIjtcclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7IGZhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnaGVscGVycy9zZXJ2aWNlcy9Vc2VyQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICdyZWR1eC9zdG9yZSc7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmxpYnJhcnkuYWRkKGZhcik7XHJcbmNvbnN0IG9wZW5Ob3RpZmljYXRpb24gPSBwbGFjZW1lbnQgPT4ge1xyXG4gIG5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcclxuICAgIG1lc3NhZ2U6IGBOZXcgTm90aWZpY2F0aW9uYCxcclxuICAgIGRlc2NyaXB0aW9uOiBwbGFjZW1lbnQsXHJcbiAgICBwbGFjZW1lbnQ6ICdib3R0b21MZWZ0JyxcclxuICB9KTtcclxufTtcclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XHJcbiAgICBjb25zdCBwYWdlUHJvcHMgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXHJcbiAgICAgID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgIDoge307XHJcblxyXG4gICAgLy9Bbnl0aGluZyByZXR1cm5lZCBoZXJlIGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgY2xpZW50XHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHM6IHBhZ2VQcm9wcyB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGxcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMsICdQbGVhc2UgZ2V0IHVwZGF0ZWQgdGhpcyBwcm9wcyEgVGhhbmtzJylcclxuICB9XHJcblxyXG5cclxuICBVTlNBRkVfY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbScpO1xyXG4gICAgY29uc29sZS5sb2coJ1Rlc3RpbmcgcHJvcHMgZGF0YSBvbiBjb21wb25lbnREaWRNb3VudCcsIHRoaXMucHJvcHMpXHJcbiAgICBpZih0aGlzLnByb3BzLmtqbS5hcHAubm90aWZpY2F0aW9uKSB7XHJcbiAgICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIScpXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ0FVVEgnLCB7ICd0b2tlbic6IHRoaXMucHJvcHMua2ptLmF1dGgudG9rZW4gfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnQVVUSCBUT0tFTiBTRU5UJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge1xyXG4gICAgICAgIGlmKGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2F1dGggZXJyb3InKTtcclxuICAgICAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdGhpcy5wcm9wcy5ram0uYXBwLm5vdGlmaWNhdGlvbkRhdGEpO1xyXG4gICAgICAgICAgc29ja2V0Lm9uKCdWSURFT19SRUFEWScsICh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCB2aWRlbyk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBjb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbScpO1xyXG4gICAgY29uc29sZS5sb2coJ1Rlc3RpbmcgcHJvcHMgZGF0YSBvbiBjb21wb25lbnREaWRNb3VudCcsIHRoaXMucHJvcHMpXHJcbiAgICBpZih0aGlzLnByb3BzLmtqbS5hcHAubm90aWZpY2F0aW9uKSB7XHJcbiAgICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIScpXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ0FVVEgnLCB7ICd0b2tlbic6IHRoaXMucHJvcHMua2ptLmF1dGgudG9rZW4gfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnQVVUSCBUT0tFTiBTRU5UJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNvY2tldC5vbignQVVUSCcsIGUgPT4ge1xyXG4gICAgICAgIGlmKGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2F1dGggZXJyb3InKTtcclxuICAgICAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgICAgc29ja2V0LmVtaXQoJ1ZJREVPX1JFQURZJywgdGhpcy5wcm9wcy5ram0uYXBwLm5vdGlmaWNhdGlvbkRhdGEpO1xyXG4gICAgICAgICAgc29ja2V0Lm9uKCdWSURFT19SRUFEWScsICh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gcmVhZHknLCB2aWRlbyk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8vd3d3LmZyZWVza2llcy5jb20nKTtcclxuICAgIFxyXG4gICAgaWYodGhpcy5wcm9wcy5ram0uYXBwLm5vdGlmaWNhdGlvbikge1xyXG4gICAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCEnKVxyXG4gICAgICAgIHNvY2tldC5lbWl0KCdBVVRIJywgeyAndG9rZW4nOiB0aGlzLnByb3BzLmtqbS5hdXRoLnRva2VuIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FVVEggVE9LRU4gU0VOVCcpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzb2NrZXQub24oJ0FVVEgnLCBlID0+IHtcclxuICAgICAgICBpZihlICE9PSAyMDApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdhdXRoIGVycm9yJyk7XHJcbiAgICAgICAgICB9IGVsc2UgIHtcclxuICAgICAgICAgIHNvY2tldC5lbWl0KCdWSURFT19SRUFEWScsIHRoaXMucHJvcHMua2ptLmFwcC5ub3RpZmljYXRpb25EYXRhKTtcclxuICAgICAgICAgIHNvY2tldC5vbignVklERU9fUkVBRFknLCAodmlkZW8pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIHJlYWR5JywgdmlkZW8pO1xyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgXHJcbiAgICBpZih0aGlzLnByb3BzLmtqbS5hcHAubm90aWZpY2F0aW9uKSB7Y29uc29sZS5sb2coJ0dldHRpbmcgdGhpcyBwcm9wcyEnLCB0aGlzLnByb3BzKTtcclxuICAgICAgXHJcblxyXG4gICAgICAvLyBzb2NrZXQub24oJ0FVVEgnLCBlID0+IHtcclxuICAgICAgLy8gICBpZihlICE9PSAyMDApIHtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdhdXRoIGVycm9yJyk7XHJcbiAgICAgIC8vICAgICB9IGVsc2UgIHtcclxuICAgICAgLy8gICAgIHNvY2tldC5lbWl0KCdWSURFT19SRUFEWScsIHRoaXMucHJvcHMua2ptLmFwcC5ub3RpZmljYXRpb25EYXRhKTtcclxuICAgICAgLy8gICAgIHNvY2tldC5vbignVklERU9fUkVBRFknLCAodmlkZW8pID0+IHtcclxuICAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIHJlYWR5JywgdmlkZW8pO1xyXG5cclxuICAgICAgLy8gICAgIH0pXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5GcmVlc2tpZXM8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4uaWZyYW1lLmx5L2VtYmVkLmpzXCIgYXN5bmM+PC9zY3JpcHQ+XHJcbiAgICAgICAgICB7LyogPGxpbmsgaHJlZj1cImh0dHBzOi8vdmpzLnplbmNkbi5uZXQvNy4wLjAvdmlkZW8tanMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+ICovfVxyXG4gICAgICAgICAgey8qIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly92anMuemVuY2RuLm5ldC83LjAuMC92aWRlby5taW4uanNcIj48L3NjcmlwdD4gKi99XHJcbiAgICAgICAgICB7LyogPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS92aWRlb2pzLWZsYXNoL2Rpc3QvdmlkZW9qcy1mbGFzaC5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS92aWRlb2pzLWNvbnRyaWItaGxzL2Rpc3QvdmlkZW9qcy1jb250cmliLWhscy5qc1wiPjwvc2NyaXB0PiAqL31cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS92aWRlby5qc0A2LjcuMS9kaXN0L3ZpZGVvLWpzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS92aWRlby5qc0A2LjcuMS9kaXN0L3ZpZGVvLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL0B2aWRlb2pzL2h0dHAtc3RyZWFtaW5nQDAuOS4wL2Rpc3QvdmlkZW9qcy1odHRwLXN0cmVhbWluZy5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPE1vZGFsUHJvdmlkZXIgcm9vdENvbXBvbmVudD17VHJhbnNpdGlvbkdyb3VwfT5cclxuICAgICAgICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBfcm9vdFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbF9wbGFjZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgICAgIDwvTW9kYWxQcm92aWRlcj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5ram0uYXBwLm5vdGlmaWNhdGlvbj9vcGVuTm90aWZpY2F0aW9uKCd0ZXN0aW5nJyk6bnVsbH1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xyXG4gIGtqbTogc3RvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE15QXBwKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=