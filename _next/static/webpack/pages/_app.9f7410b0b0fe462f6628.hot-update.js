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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var react_modal_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal-hook */ "./node_modules/react-modal-hook/dist/index.es.js");
/* harmony import */ var css_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! css/tailwind.css */ "./css/tailwind.css");
/* harmony import */ var css_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(css_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var css_global_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! css/global.scss */ "./css/global.scss");
/* harmony import */ var css_global_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(css_global_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! node_modules/video-react/dist/video-react.css */ "./node_modules/video-react/dist/video-react.css");
/* harmony import */ var node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var helpers_services_UserController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! helpers/services/UserController */ "./helpers/services/UserController.js");
/* harmony import */ var redux_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux/store */ "./redux/store.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "E:\\freeskies_fe_code\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__["far"]);

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}; //Anything returned here can be accessed by the client

    return {
      pageProps: pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, "Freeskies"), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.freeskies.com/hls_test/js/video.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.freeskies.com/hls_test/js/videojs-contrib-hls.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.freeskies.com/hls_test/js/videojs-contrib-quality-levels.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "https://www.freeskies.com/hls_test/js/videojs-hls-quality-selector.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "https://www.freeskies.com/hls_test/css/video-js.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    })), __jsx(react_modal_hook__WEBPACK_IMPORTED_MODULE_5__["ModalProvider"], {
      rootComponent: react_transition_group__WEBPACK_IMPORTED_MODULE_4__["TransitionGroup"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, __jsx(helpers_services_UserController__WEBPACK_IMPORTED_MODULE_13__["AuthProvider"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, __jsx("div", {
      id: "app_root",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    })), __jsx("div", {
      id: "modal_place",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (_c = redux_store__WEBPACK_IMPORTED_MODULE_14__["wrapper"].withRedux(MyApp));

var _c;

$RefreshReg$(_c, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFyIiwiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJyZW5kZXIiLCJwcm9wcyIsIlRyYW5zaXRpb25Hcm91cCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSwwRUFBTyxDQUFDQyxHQUFSLENBQVlDLHdFQUFaOztBQUVBLE1BQU1DLEtBQU4sU0FBb0JDLCtDQUFwQixDQUF3QjtBQUN0QixlQUFhQyxlQUFiLENBQTZCO0FBQUVDLGFBQUY7QUFBYUM7QUFBYixHQUE3QixFQUFpRDtBQUMvQyxVQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0QsZUFBVixHQUNkLE1BQU1DLFNBQVMsQ0FBQ0QsZUFBVixDQUEwQkUsR0FBMUIsQ0FEUSxHQUVkLEVBRkosQ0FEK0MsQ0FLL0M7O0FBQ0EsV0FBTztBQUFFQyxlQUFTLEVBQUVBO0FBQWIsS0FBUDtBQUNEOztBQUVEQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVILGVBQUY7QUFBYUU7QUFBYixRQUEyQixLQUFLRSxLQUF0QztBQUNBLFdBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQ0UsVUFBSSxFQUFDLFVBRFA7QUFFRSxhQUFPLEVBQUMsMkVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBTUU7QUFBUSxTQUFHLEVBQUMsZ0RBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLEVBT0U7QUFBUSxTQUFHLEVBQUMsOERBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBGLEVBUUU7QUFBUSxTQUFHLEVBQUMseUVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLEVBU0U7QUFBUSxTQUFHLEVBQUMsdUVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRGLEVBVUU7QUFBTSxVQUFJLEVBQUMscURBQVg7QUFBaUUsU0FBRyxFQUFDLFlBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWRixDQURGLEVBYUUsTUFBQyw4REFBRDtBQUFlLG1CQUFhLEVBQUVDLHNFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxRQUFFLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxTQUFELHlGQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixFQUVFO0FBQUssUUFBRSxFQUFDLGFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBREYsQ0FERixDQWJGLENBREY7QUF3QkQ7O0FBcENxQjs7QUF1Q1Qsb0VBQUFJLG9EQUFPLENBQUNDLFNBQVIsQ0FBa0JWLEtBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45Zjc0MTBiMGIwZmU0NjJmNjYyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5pbXBvcnQgeyBNb2RhbFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtbW9kYWwtaG9vayc7XHJcbmltcG9ydCAnY3NzL3RhaWx3aW5kLmNzcyc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0ICdyZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzJztcclxuaW1wb3J0ICdjc3MvZ2xvYmFsLnNjc3MnO1xyXG5pbXBvcnQgXCJub2RlX21vZHVsZXMvdmlkZW8tcmVhY3QvZGlzdC92aWRlby1yZWFjdC5jc3NcIjtcclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7IGZhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnaGVscGVycy9zZXJ2aWNlcy9Vc2VyQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICdyZWR1eC9zdG9yZSc7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuXHJcbmxpYnJhcnkuYWRkKGZhcik7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuICAgIGNvbnN0IHBhZ2VQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcclxuICAgICAgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcclxuICAgICAgOiB7fTtcclxuXHJcbiAgICAvL0FueXRoaW5nIHJldHVybmVkIGhlcmUgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBjbGllbnRcclxuICAgIHJldHVybiB7IHBhZ2VQcm9wczogcGFnZVByb3BzIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5GcmVlc2tpZXM8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9obHNfdGVzdC9qcy92aWRlby5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5mcmVlc2tpZXMuY29tL2hsc190ZXN0L2pzL3ZpZGVvanMtY29udHJpYi1obHMuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9obHNfdGVzdC9qcy92aWRlb2pzLWNvbnRyaWItcXVhbGl0eS1sZXZlbHMuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9obHNfdGVzdC9qcy92aWRlb2pzLWhscy1xdWFsaXR5LXNlbGVjdG9yLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly93d3cuZnJlZXNraWVzLmNvbS9obHNfdGVzdC9jc3MvdmlkZW8tanMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPE1vZGFsUHJvdmlkZXIgcm9vdENvbXBvbmVudD17VHJhbnNpdGlvbkdyb3VwfT5cclxuICAgICAgICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBfcm9vdFwiPlxyXG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxfcGxhY2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0F1dGhQcm92aWRlcj5cclxuICAgICAgICA8L01vZGFsUHJvdmlkZXI+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==