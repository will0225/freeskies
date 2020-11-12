webpackHotUpdate_N_E("pages/activity",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL0ZlZWRQb3N0cy5qcyJdLCJuYW1lcyI6WyJGZWVkUG9zdHMiLCJwcm9maWxlRmVlZCIsIm9uUmF0ZVBvc3QiLCJvblVwZGF0ZVRpbWVsaW5lIiwibGlrZUFjdGlvbiIsInNoYXJlQWN0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ29Ub0FjdGl2aXR5IiwicHVzaCIsInN0eWxlcyIsImFjdGl2aXR5X2NvbnRlbnQiLCJzZWN0aW9uX3RpdGxlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQjtBQUFFQyxhQUFGO0FBQWVDLFlBQWY7QUFBMkJDLGtCQUEzQjtBQUE2Q0MsWUFBN0M7QUFBeURDO0FBQXpELENBQW5CLEVBQTJGO0FBQUE7O0FBQ3hHLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekJGLFVBQU0sQ0FBQ0csSUFBUCxDQUFZLFdBQVo7QUFDRCxHQUZELENBRndHLENBTXhHO0FBQ0E7OztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLG9FQUFNLENBQUNDLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELG9FQUFNLENBQUNFLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLE1BQWI7QUFBb0IsV0FBTyxFQUFFSixZQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBREYsRUFPS1AsV0FBVyxDQUFDWSxNQUFaLEtBQXVCLENBQXZCLElBQ0MsTUFBQywwRUFBRDtBQUNFLFFBQUksRUFBRVosV0FEUjtBQUVFLGNBQVUsRUFBRUMsVUFGZDtBQUdFLG9CQUFnQixFQUFFQyxnQkFIcEI7QUFJRSxjQUFVLEVBQUVDLFVBSmQ7QUFLRSxlQUFXLEVBQUVDLFdBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJOLENBREY7QUFvQkQ7O0dBN0J1QkwsUztVQUNQTyxxRDs7O0tBRE9QLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWN0aXZpdHkuODhkODliOWEyNDFhNzc2MzQzZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpa2VGaWxsZWQsIE1lc3NhZ2VGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvZmVlZC1wb3N0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vQXZhdGFyJztcclxuaW1wb3J0IFRpbWVsaW5lUG9zdHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aW1lbGluZS9UaW1lbGluZVBvc3RzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVlZFBvc3RzKHsgcHJvZmlsZUZlZWQsIG9uUmF0ZVBvc3QsIG9uVXBkYXRlVGltZWxpbmUsIGxpa2VBY3Rpb24sIHNoYXJlQWN0aW9uIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBnb1RvQWN0aXZpdHkgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL2FjdGl2aXR5Jyk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgcHJvZmlsZVVybCA9IHVzZXIgIT09IG51bGwgJiYgdXNlciAhPT0gdW5kZWZpbmVkID8gYGh0dHBzOi8vZnJlZXNraWVzLmNvbS9zdGF0aWMvJHt1c2VyLnByb2ZpbGVQaG90bz8uc3JjfWAgOiBudWxsXHJcbiAgLy8gY29uc3QgcHJvZmlsZUZlZWQgPSB1c2VyICE9PSBudWxsICYmIHVzZXIgIT09IHVuZGVmaW5lZCA/IHVzZXI/LmFjdGl2aXR5Lm1hcChpdGVtID0+IHsgaXRlbS5hY2NvdW50ID0gdXNlcjsgIHJldHVybiBpdGVtOyB9KSA6IFtdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2aXR5X2NvbnRlbnR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fdGl0bGV9PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIiBvbkNsaWNrPXtnb1RvQWN0aXZpdHl9PlxyXG4gICAgICAgICAgQWxsIGFjdGl2aXRpZXNcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgICAgIHtwcm9maWxlRmVlZC5sZW5ndGggIT09IDAgJiYgKFxyXG4gICAgICAgICAgPFRpbWVsaW5lUG9zdHNcclxuICAgICAgICAgICAgZGF0YT17cHJvZmlsZUZlZWR9XHJcbiAgICAgICAgICAgIG9uUmF0ZVBvc3Q9e29uUmF0ZVBvc3R9XHJcbiAgICAgICAgICAgIG9uVXBkYXRlVGltZWxpbmU9e29uVXBkYXRlVGltZWxpbmV9XHJcbiAgICAgICAgICAgIGxpa2VBY3Rpb249e2xpa2VBY3Rpb259XHJcbiAgICAgICAgICAgIHNoYXJlQWN0aW9uPXtzaGFyZUFjdGlvbn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=