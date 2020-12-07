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
      src: "./js/video.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "./js/videojs-contrib-hls.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "./js/videojs-contrib-quality-levels.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "./js/videojs-hls-quality-selector.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "./css/video-js.css",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFyIiwiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJyZW5kZXIiLCJwcm9wcyIsIlRyYW5zaXRpb25Hcm91cCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSwwRUFBTyxDQUFDQyxHQUFSLENBQVlDLHdFQUFaOztBQUVBLE1BQU1DLEtBQU4sU0FBb0JDLCtDQUFwQixDQUF3QjtBQUN0QixlQUFhQyxlQUFiLENBQTZCO0FBQUVDLGFBQUY7QUFBYUM7QUFBYixHQUE3QixFQUFpRDtBQUMvQyxVQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0QsZUFBVixHQUNkLE1BQU1DLFNBQVMsQ0FBQ0QsZUFBVixDQUEwQkUsR0FBMUIsQ0FEUSxHQUVkLEVBRkosQ0FEK0MsQ0FLL0M7O0FBQ0EsV0FBTztBQUFFQyxlQUFTLEVBQUVBO0FBQWIsS0FBUDtBQUNEOztBQUVEQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVILGVBQUY7QUFBYUU7QUFBYixRQUEyQixLQUFLRSxLQUF0QztBQUNBLFdBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQ0UsVUFBSSxFQUFDLFVBRFA7QUFFRSxhQUFPLEVBQUMsMkVBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBTUU7QUFBUSxTQUFHLEVBQUMsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsRUFPRTtBQUFRLFNBQUcsRUFBQyw2QkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEYsRUFRRTtBQUFRLFNBQUcsRUFBQyx3Q0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsRUFTRTtBQUFRLFNBQUcsRUFBQyxzQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEYsRUFVRTtBQUFNLFVBQUksRUFBQyxvQkFBWDtBQUFnQyxTQUFHLEVBQUMsWUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLENBREYsRUFhRSxNQUFDLDhEQUFEO0FBQWUsbUJBQWEsRUFBRUMsc0VBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFFBQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLFNBQUQseUZBQWVILFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLEVBRUU7QUFBSyxRQUFFLEVBQUMsYUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERixDQURGLENBYkYsQ0FERjtBQXdCRDs7QUFwQ3FCOztBQXVDVCxvRUFBQUksb0RBQU8sQ0FBQ0MsU0FBUixDQUFrQlYsS0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjZkNTBjMGJjYThmZGNmNmY4MmVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcbmltcG9ydCB7IE1vZGFsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1tb2RhbC1ob29rJztcclxuaW1wb3J0ICdjc3MvdGFpbHdpbmQuY3NzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3MnO1xyXG5pbXBvcnQgJ2Nzcy9nbG9iYWwuc2Nzcyc7XHJcbmltcG9ydCBcIm5vZGVfbW9kdWxlcy92aWRlby1yZWFjdC9kaXN0L3ZpZGVvLXJlYWN0LmNzc1wiO1xyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgZmFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdoZWxwZXJzL3NlcnZpY2VzL1VzZXJDb250cm9sbGVyJztcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJ3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5cclxubGlicmFyeS5hZGQoZmFyKTtcclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xyXG4gICAgICA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgICA6IHt9O1xyXG5cclxuICAgIC8vQW55dGhpbmcgcmV0dXJuZWQgaGVyZSBjYW4gYmUgYWNjZXNzZWQgYnkgdGhlIGNsaWVudFxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzOiBwYWdlUHJvcHMgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkZyZWVza2llczwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuL2pzL3ZpZGVvLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4vanMvdmlkZW9qcy1jb250cmliLWhscy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuL2pzL3ZpZGVvanMtY29udHJpYi1xdWFsaXR5LWxldmVscy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuL2pzL3ZpZGVvanMtaGxzLXF1YWxpdHktc2VsZWN0b3IuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIuL2Nzcy92aWRlby1qcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TW9kYWxQcm92aWRlciByb290Q29tcG9uZW50PXtUcmFuc2l0aW9uR3JvdXB9PlxyXG4gICAgICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcF9yb290XCI+XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbF9wbGFjZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgICAgIDwvTW9kYWxQcm92aWRlcj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9