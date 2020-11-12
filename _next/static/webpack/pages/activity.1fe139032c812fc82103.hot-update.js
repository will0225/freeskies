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







function FeedPosts(_ref) {
  _s();

  var _user$profilePhoto;

  var user = _ref.user,
      onRatePost = _ref.onRatePost,
      onUpdateTimeline = _ref.onUpdateTimeline,
      likeAction = _ref.likeAction,
      shareAction = _ref.shareAction;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var goToActivity = function goToActivity() {
    router.push('/activity');
  };

  var profileUrl = user !== null && user !== undefined ? "https://freeskies.com/static/".concat((_user$profilePhoto = user.profilePhoto) === null || _user$profilePhoto === void 0 ? void 0 : _user$profilePhoto.src) : null;
  var profileFeed = user !== null && user !== undefined ? user === null || user === void 0 ? void 0 : user.activity.map(function (item) {
    item.account = user;
    return item;
  }) : [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL0ZlZWRQb3N0cy5qcyJdLCJuYW1lcyI6WyJGZWVkUG9zdHMiLCJ1c2VyIiwib25SYXRlUG9zdCIsIm9uVXBkYXRlVGltZWxpbmUiLCJsaWtlQWN0aW9uIiwic2hhcmVBY3Rpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnb1RvQWN0aXZpdHkiLCJwdXNoIiwicHJvZmlsZVVybCIsInVuZGVmaW5lZCIsInByb2ZpbGVQaG90byIsInNyYyIsInByb2ZpbGVGZWVkIiwiYWN0aXZpdHkiLCJtYXAiLCJpdGVtIiwiYWNjb3VudCIsInN0eWxlcyIsImFjdGl2aXR5X2NvbnRlbnQiLCJzZWN0aW9uX3RpdGxlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUFvRjtBQUFBOztBQUFBOztBQUFBLE1BQS9EQyxJQUErRCxRQUEvREEsSUFBK0Q7QUFBQSxNQUF6REMsVUFBeUQsUUFBekRBLFVBQXlEO0FBQUEsTUFBN0NDLGdCQUE2QyxRQUE3Q0EsZ0JBQTZDO0FBQUEsTUFBM0JDLFVBQTJCLFFBQTNCQSxVQUEyQjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTtBQUNqRyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJGLFVBQU0sQ0FBQ0csSUFBUCxDQUFZLFdBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFVBQVUsR0FBR1QsSUFBSSxLQUFLLElBQVQsSUFBaUJBLElBQUksS0FBS1UsU0FBMUIsZ0VBQXNFVixJQUFJLENBQUNXLFlBQTNFLHVEQUFzRSxtQkFBbUJDLEdBQXpGLElBQWlHLElBQXBIO0FBQ0EsTUFBTUMsV0FBVyxHQUFHYixJQUFJLEtBQUssSUFBVCxJQUFpQkEsSUFBSSxLQUFLVSxTQUExQixHQUFzQ1YsSUFBdEMsYUFBc0NBLElBQXRDLHVCQUFzQ0EsSUFBSSxDQUFFYyxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsSUFBSSxFQUFJO0FBQUVBLFFBQUksQ0FBQ0MsT0FBTCxHQUFlakIsSUFBZjtBQUFzQixXQUFPZ0IsSUFBUDtBQUFjLEdBQWpFLENBQXRDLEdBQTJHLEVBQS9IO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUUsb0VBQU0sQ0FBQ0MsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsb0VBQU0sQ0FBQ0UsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsTUFBYjtBQUFvQixXQUFPLEVBQUViLFlBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixFQU9LTSxXQUFXLENBQUNRLE1BQVosS0FBdUIsQ0FBdkIsSUFDQyxNQUFDLDBFQUFEO0FBQ0UsUUFBSSxFQUFFUixXQURSO0FBRUUsY0FBVSxFQUFFWixVQUZkO0FBR0Usb0JBQWdCLEVBQUVDLGdCQUhwQjtBQUlFLGNBQVUsRUFBRUMsVUFKZDtBQUtFLGVBQVcsRUFBRUMsV0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUk4sQ0FERjtBQW9CRDs7R0E3QnVCTCxTO1VBQ1BPLHFEOzs7S0FET1AsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hY3Rpdml0eS4xZmUxMzkwMzJjODEyZmM4MjEwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlrZUZpbGxlZCwgTWVzc2FnZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9mZWVkLXBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXInO1xyXG5pbXBvcnQgVGltZWxpbmVQb3N0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpbWVsaW5lL1RpbWVsaW5lUG9zdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkUG9zdHMoeyB1c2VyLCBvblJhdGVQb3N0LCBvblVwZGF0ZVRpbWVsaW5lLCBsaWtlQWN0aW9uLCBzaGFyZUFjdGlvbiB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZ29Ub0FjdGl2aXR5ID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy9hY3Rpdml0eScpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByb2ZpbGVVcmwgPSB1c2VyICE9PSBudWxsICYmIHVzZXIgIT09IHVuZGVmaW5lZCA/IGBodHRwczovL2ZyZWVza2llcy5jb20vc3RhdGljLyR7dXNlci5wcm9maWxlUGhvdG8/LnNyY31gIDogbnVsbFxyXG4gIGNvbnN0IHByb2ZpbGVGZWVkID0gdXNlciAhPT0gbnVsbCAmJiB1c2VyICE9PSB1bmRlZmluZWQgPyB1c2VyPy5hY3Rpdml0eS5tYXAoaXRlbSA9PiB7IGl0ZW0uYWNjb3VudCA9IHVzZXI7ICByZXR1cm4gaXRlbTsgfSkgOiBbXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0eV9jb250ZW50fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uX3RpdGxlfT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgb25DbGljaz17Z29Ub0FjdGl2aXR5fT5cclxuICAgICAgICAgIEFsbCBhY3Rpdml0aWVzXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgICB7cHJvZmlsZUZlZWQubGVuZ3RoICE9PSAwICYmIChcclxuICAgICAgICAgIDxUaW1lbGluZVBvc3RzXHJcbiAgICAgICAgICAgIGRhdGE9e3Byb2ZpbGVGZWVkfVxyXG4gICAgICAgICAgICBvblJhdGVQb3N0PXtvblJhdGVQb3N0fVxyXG4gICAgICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgICAgICBsaWtlQWN0aW9uPXtsaWtlQWN0aW9ufVxyXG4gICAgICAgICAgICBzaGFyZUFjdGlvbj17c2hhcmVBY3Rpb259XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9