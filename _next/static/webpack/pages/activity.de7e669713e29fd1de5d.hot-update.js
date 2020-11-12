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

  var _user$profilePhoto;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  const goToActivity = () => {
    router.push('/activity');
  };

  const profileUrl = user !== null && user !== undefined ? "https://freeskies.com/static/".concat((_user$profilePhoto = user.profilePhoto) === null || _user$profilePhoto === void 0 ? void 0 : _user$profilePhoto.src) : null; // const profileFeed = user !== null && user !== undefined ? user?.activity.map(item => { item.account = user;  return item; }) : []

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL0ZlZWRQb3N0cy5qcyJdLCJuYW1lcyI6WyJGZWVkUG9zdHMiLCJwcm9maWxlRmVlZCIsIm9uUmF0ZVBvc3QiLCJvblVwZGF0ZVRpbWVsaW5lIiwibGlrZUFjdGlvbiIsInNoYXJlQWN0aW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ29Ub0FjdGl2aXR5IiwicHVzaCIsInByb2ZpbGVVcmwiLCJ1c2VyIiwidW5kZWZpbmVkIiwicHJvZmlsZVBob3RvIiwic3JjIiwic3R5bGVzIiwiYWN0aXZpdHlfY29udGVudCIsInNlY3Rpb25fdGl0bGUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CO0FBQUVDLGFBQUY7QUFBZUMsWUFBZjtBQUEyQkMsa0JBQTNCO0FBQTZDQyxZQUE3QztBQUF5REM7QUFBekQsQ0FBbkIsRUFBMkY7QUFBQTs7QUFBQTs7QUFDeEcsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxRQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QkYsVUFBTSxDQUFDRyxJQUFQLENBQVksV0FBWjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsVUFBVSxHQUFHQyxJQUFJLEtBQUssSUFBVCxJQUFpQkEsSUFBSSxLQUFLQyxTQUExQixnRUFBc0VELElBQUksQ0FBQ0UsWUFBM0UsdURBQXNFLG1CQUFtQkMsR0FBekYsSUFBaUcsSUFBcEgsQ0FOd0csQ0FPeEc7O0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsb0VBQU0sQ0FBQ0MsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsb0VBQU0sQ0FBQ0UsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsTUFBYjtBQUFvQixXQUFPLEVBQUVULFlBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixFQU9LUCxXQUFXLENBQUNpQixNQUFaLEtBQXVCLENBQXZCLElBQ0MsTUFBQywwRUFBRDtBQUNFLFFBQUksRUFBRWpCLFdBRFI7QUFFRSxjQUFVLEVBQUVDLFVBRmQ7QUFHRSxvQkFBZ0IsRUFBRUMsZ0JBSHBCO0FBSUUsY0FBVSxFQUFFQyxVQUpkO0FBS0UsZUFBVyxFQUFFQyxXQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSTixDQURGO0FBb0JEOztHQTdCdUJMLFM7VUFDUE8scUQ7OztLQURPUCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjdGl2aXR5LmRlN2U2Njk3MTNlMjlmZDFkZTVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaWtlRmlsbGVkLCBNZXNzYWdlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL2ZlZWQtcG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhcic7XHJcbmltcG9ydCBUaW1lbGluZVBvc3RzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGltZWxpbmUvVGltZWxpbmVQb3N0cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlZWRQb3N0cyh7IHByb2ZpbGVGZWVkLCBvblJhdGVQb3N0LCBvblVwZGF0ZVRpbWVsaW5lLCBsaWtlQWN0aW9uLCBzaGFyZUFjdGlvbiB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZ29Ub0FjdGl2aXR5ID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy9hY3Rpdml0eScpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByb2ZpbGVVcmwgPSB1c2VyICE9PSBudWxsICYmIHVzZXIgIT09IHVuZGVmaW5lZCA/IGBodHRwczovL2ZyZWVza2llcy5jb20vc3RhdGljLyR7dXNlci5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gIC8vIGNvbnN0IHByb2ZpbGVGZWVkID0gdXNlciAhPT0gbnVsbCAmJiB1c2VyICE9PSB1bmRlZmluZWQgPyB1c2VyPy5hY3Rpdml0eS5tYXAoaXRlbSA9PiB7IGl0ZW0uYWNjb3VudCA9IHVzZXI7ICByZXR1cm4gaXRlbTsgfSkgOiBbXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uX3RpdGxlfT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgb25DbGljaz17Z29Ub0FjdGl2aXR5fT5cclxuICAgICAgICAgIEFsbCBhY3Rpdml0aWVzXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgICB7cHJvZmlsZUZlZWQubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICAgIDxUaW1lbGluZVBvc3RzXHJcbiAgICAgICAgICAgIGRhdGE9e3Byb2ZpbGVGZWVkfVxyXG4gICAgICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9