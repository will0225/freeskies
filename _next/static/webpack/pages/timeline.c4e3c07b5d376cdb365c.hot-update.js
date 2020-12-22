webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/timeline/CommentsModal.js":
/*!**********************************************!*\
  !*** ./components/timeline/CommentsModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-modal */ "./node_modules/redux-modal/es/index.js");
/* harmony import */ var components_common_ModalWrapperComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/ModalWrapperComment */ "./components/common/ModalWrapperComment.js");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comments */ "./components/timeline/Comments.js");



var _jsxFileName = "D:\\Freeskies-development-\\components\\timeline\\CommentsModal.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function CommentsModal(_ref) {
  _s();

  var postData = _ref.postData,
      activePostId = _ref.activePostId,
      onUpdateTimeline = _ref.onUpdateTimeline,
      getComments = _ref.getComments,
      type = _ref.type,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["postData", "activePostId", "onUpdateTimeline", "getComments", "type"]);

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(activePostId);
    getComments();
  }, []); // const data = postData.filter((d) => d.id === activePostId)[0];
  // console.log(postData, activePostId, rest);

  return __jsx(components_common_ModalWrapperComment__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    narrow_container: true
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), __jsx(_Comments__WEBPACK_IMPORTED_MODULE_5__["default"], {
    modalMode: true,
    id: activePostId,
    type: type,
    onUpdateTimeline: onUpdateTimeline,
    data: postData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
}

_s(CommentsModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = CommentsModal;
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_modal__WEBPACK_IMPORTED_MODULE_3__["connectModal"])({
  name: 'commentModal'
})(CommentsModal));

var _c;

$RefreshReg$(_c, "CommentsModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50c01vZGFsLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzTW9kYWwiLCJwb3N0RGF0YSIsImFjdGl2ZVBvc3RJZCIsIm9uVXBkYXRlVGltZWxpbmUiLCJnZXRDb21tZW50cyIsInR5cGUiLCJyZXN0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RNb2RhbCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQU9BO0FBQUE7O0FBQUEsTUFOSUMsUUFNSixRQU5JQSxRQU1KO0FBQUEsTUFMSUMsWUFLSixRQUxJQSxZQUtKO0FBQUEsTUFKSUMsZ0JBSUosUUFKSUEsZ0JBSUo7QUFBQSxNQUhJQyxXQUdKLFFBSElBLFdBR0o7QUFBQSxNQUZJQyxJQUVKLFFBRklBLElBRUo7QUFBQSxNQURPQyxJQUNQOztBQUNFQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlQLFlBQVo7QUFDQUUsZUFBVztBQUNaLEdBSFEsRUFHTixFQUhNLENBQVQsQ0FERixDQUtFO0FBQ0E7O0FBQ0EsU0FDRSxNQUFDLDZFQUFEO0FBQXFCLG9CQUFnQjtBQUFyQyxLQUEwQ0UsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMsaURBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxNQUFFLEVBQUVKLFlBRk47QUFHRSxRQUFJLEVBQUVHLElBSFI7QUFJRSxvQkFBZ0IsRUFBRUYsZ0JBSnBCO0FBS0UsUUFBSSxFQUFFRixRQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBV0Q7O0dBekJRRCxhOztLQUFBQSxhO0FBMkJNVSwrSEFBWSxDQUFDO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQUQsQ0FBWixDQUF1Q1gsYUFBdkMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS5jNGUzYzA3YjVkMzc2Y2RiMzY1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdE1vZGFsIH0gZnJvbSAncmVkdXgtbW9kYWwnO1xyXG5pbXBvcnQgTW9kYWxXcmFwcGVyQ29tbWVudCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9Nb2RhbFdyYXBwZXJDb21tZW50JztcclxuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vQ29tbWVudHMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudHNNb2RhbCh7IFxyXG4gICAgcG9zdERhdGEsIFxyXG4gICAgYWN0aXZlUG9zdElkLCBcclxuICAgIG9uVXBkYXRlVGltZWxpbmUsIFxyXG4gICAgZ2V0Q29tbWVudHMsIFxyXG4gICAgdHlwZSxcclxuICAgIC4uLnJlc3QgfSkgXHJcbntcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aXZlUG9zdElkKTtcclxuICAgIGdldENvbW1lbnRzKCk7XHJcbiAgfSwgW10pXHJcbiAgLy8gY29uc3QgZGF0YSA9IHBvc3REYXRhLmZpbHRlcigoZCkgPT4gZC5pZCA9PT0gYWN0aXZlUG9zdElkKVswXTtcclxuICAvLyBjb25zb2xlLmxvZyhwb3N0RGF0YSwgYWN0aXZlUG9zdElkLCByZXN0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsV3JhcHBlckNvbW1lbnQgbmFycm93X2NvbnRhaW5lciB7Li4ucmVzdH0+XHJcbiAgICAgIDxDb21tZW50c1xyXG4gICAgICAgIG1vZGFsTW9kZVxyXG4gICAgICAgIGlkPXthY3RpdmVQb3N0SWR9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIGRhdGE9e3Bvc3REYXRhfVxyXG4gICAgICAvPlxyXG4gICAgPC9Nb2RhbFdyYXBwZXJDb21tZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb2RhbCh7IG5hbWU6ICdjb21tZW50TW9kYWwnIH0pKENvbW1lbnRzTW9kYWwpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9