webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/FeedPosts.js":
/*!*****************************************!*\
  !*** ./components/profile/FeedPosts.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeedPosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _styles_feed_post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/feed-post.module.scss */ "./components/profile/styles/feed-post.module.scss");
/* harmony import */ var _styles_feed_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_feed_post_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/Avatar */ "./components/common/Avatar.js");
/* harmony import */ var _components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/timeline/TimelinePosts */ "./components/timeline/TimelinePosts.js");
var _jsxFileName = "E:\\freeskies_fe_code\\components\\profile\\FeedPosts.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function FeedPosts({
  profileFeed,
  onRatePost,
  onUpdateTimeline,
  likeAction,
  shareAction
}) {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  const goToActivity = () => {
    router.push('/activity');
  }; // const profileUrl = user !== null && user !== undefined ? `https://freeskies.com/static/${user.profilePhoto?.src}` : null
  // const profileFeed = user !== null && user !== undefined ? user?.activity.map(item => { item.account = user;  return item; }) : []


  return __jsx("div", {
    className: _styles_feed_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.activity_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_feed_post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.section_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "link",
    onClick: goToActivity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "All activities")), profileFeed.length !== 0 && __jsx(_components_timeline_TimelinePosts__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: profileFeed,
    onRatePost: onRatePost,
    onUpdateTimeline: onUpdateTimeline,
    likeAction: likeAction,
    shareAction: shareAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }));
}

_s(FeedPosts, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = FeedPosts;

var _c;

$RefreshReg$(_c, "FeedPosts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL0ZlZWRQb3N0cy5qcyJdLCJuYW1lcyI6WyJGZWVkUG9zdHMiLCJwcm9maWxlRmVlZCIsIm9uUmF0ZVBvc3QiLCJvblVwZGF0ZVRpbWVsaW5lIiwibGlrZUFjdGlvbiIsInNoYXJlQWN0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ29Ub0FjdGl2aXR5IiwicHVzaCIsInN0eWxlcyIsImFjdGl2aXR5X2NvbnRlbnQiLCJzZWN0aW9uX3RpdGxlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQjtBQUFFQyxhQUFGO0FBQWVDLFlBQWY7QUFBMkJDLGtCQUEzQjtBQUE2Q0MsWUFBN0M7QUFBeURDO0FBQXpELENBQW5CLEVBQTJGO0FBQUE7O0FBQ3hHLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekJGLFVBQU0sQ0FBQ0csSUFBUCxDQUFZLFdBQVo7QUFDRCxHQUZELENBRndHLENBTXhHO0FBQ0E7OztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLG9FQUFNLENBQUNDLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELG9FQUFNLENBQUNFLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLE1BQWI7QUFBb0IsV0FBTyxFQUFFSixZQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBREYsRUFPS1AsV0FBVyxDQUFDWSxNQUFaLEtBQXVCLENBQXZCLElBQ0MsTUFBQywwRUFBRDtBQUNFLFFBQUksRUFBRVosV0FEUjtBQUVFLGNBQVUsRUFBRUMsVUFGZDtBQUdFLG9CQUFnQixFQUFFQyxnQkFIcEI7QUFJRSxjQUFVLEVBQUVDLFVBSmQ7QUFLRSxlQUFXLEVBQUVDLFdBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJOLENBREY7QUFvQkQ7O0dBN0J1QkwsUztVQUNQTyxxRDs7O0tBRE9QLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS44OGQ4OWI5YTI0MWE3NzYzNDNlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlrZUZpbGxlZCwgTWVzc2FnZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9mZWVkLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgVGltZWxpbmVQb3N0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lUG9zdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkUG9zdHMoeyBwcm9maWxlRmVlZCwgb25SYXRlUG9zdCwgb25VcGRhdGVUaW1lbGluZSwgbGlrZUFjdGlvbiwgc2hhcmVBY3Rpb24gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGdvVG9BY3Rpdml0eSA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvYWN0aXZpdHknKTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBwcm9maWxlVXJsID0gdXNlciAhPT0gbnVsbCAmJiB1c2VyICE9PSB1bmRlZmluZWQgPyBgaHR0cHM6Ly9mcmVlc2tpZXMuY29tL3N0YXRpYy8ke3VzZXIucHJvZmlsZVBob3RvPy5zcmN9YCA6IG51bGxcclxuICAvLyBjb25zdCBwcm9maWxlRmVlZCA9IHVzZXIgIT09IG51bGwgJiYgdXNlciAhPT0gdW5kZWZpbmVkID8gdXNlcj8uYWN0aXZpdHkubWFwKGl0ZW0gPT4geyBpdGVtLmFjY291bnQgPSB1c2VyOyAgcmV0dXJuIGl0ZW07IH0pIDogW11cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZpdHlfY29udGVudH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbl90aXRsZX0+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIG9uQ2xpY2s9e2dvVG9BY3Rpdml0eX0+XHJcbiAgICAgICAgICBBbGwgYWN0aXZpdGllc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICAgICAge3Byb2ZpbGVGZWVkLmxlbmd0aCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICA8VGltZWxpbmVQb3N0c1xyXG4gICAgICAgICAgICBkYXRhPXtwcm9maWxlRmVlZH1cclxuICAgICAgICAgICAgb25SYXRlUG9zdD17b25SYXRlUG9zdH1cclxuICAgICAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICAgICAgbGlrZUFjdGlvbj17bGlrZUFjdGlvbn1cclxuICAgICAgICAgICAgc2hhcmVBY3Rpb249e3NoYXJlQWN0aW9ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==