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


var _jsxFileName = "E:\\freeskies_fe_code\\components\\timeline\\CommentsModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function CommentsModal(_ref) {
  var postData = _ref.postData,
      activePostId = _ref.activePostId,
      onUpdateTimeline = _ref.onUpdateTimeline,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["postData", "activePostId", "onUpdateTimeline"]);

  console.log(activePostId);
  var data = postData.filter(function (d) {
    return d.id === activePostId;
  })[0]; // const test = [];
  // postData.map(element => {
  //   console.log(element, activePostId);
  // })
  // console.log(data);

  return __jsx(components_common_ModalWrapperComment__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    narrow_container: true
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), __jsx(_Comments__WEBPACK_IMPORTED_MODULE_5__["default"], {
    modalMode: true,
    id: data === null || data === void 0 ? void 0 : data.id,
    type: data === null || data === void 0 ? void 0 : data.type,
    onUpdateTimeline: onUpdateTimeline,
    data: data === null || data === void 0 ? void 0 : data.comments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50c01vZGFsLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzTW9kYWwiLCJwb3N0RGF0YSIsImFjdGl2ZVBvc3RJZCIsIm9uVXBkYXRlVGltZWxpbmUiLCJyZXN0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmaWx0ZXIiLCJkIiwiaWQiLCJ0eXBlIiwiY29tbWVudHMiLCJjb25uZWN0TW9kYWwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BQThFO0FBQUEsTUFBckRDLFFBQXFELFFBQXJEQSxRQUFxRDtBQUFBLE1BQTNDQyxZQUEyQyxRQUEzQ0EsWUFBMkM7QUFBQSxNQUE3QkMsZ0JBQTZCLFFBQTdCQSxnQkFBNkI7QUFBQSxNQUFSQyxJQUFROztBQUFDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosWUFBWjtBQUM3RSxNQUFNSyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ08sTUFBVCxDQUFnQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNSLFlBQWhCO0FBQUEsR0FBaEIsRUFBOEMsQ0FBOUMsQ0FBYixDQUQ0RSxDQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQ0UsTUFBQyw2RUFBRDtBQUFxQixvQkFBZ0I7QUFBckMsS0FBMENFLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLGlEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFFRyxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUcsRUFGWjtBQUdFLFFBQUksRUFBRUgsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVJLElBSGQ7QUFJRSxvQkFBZ0IsRUFBRVIsZ0JBSnBCO0FBS0UsUUFBSSxFQUFFSSxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUssUUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQVdEOztLQWxCUVosYTtBQW9CTWEsK0hBQVksQ0FBQztBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUFELENBQVosQ0FBdUNkLGFBQXZDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuZGYwYTUyMjJhMDBmYjAwMmMwZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RNb2RhbCB9IGZyb20gJ3JlZHV4LW1vZGFsJztcclxuaW1wb3J0IE1vZGFsV3JhcHBlckNvbW1lbnQgZnJvbSAnY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyQ29tbWVudCc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRzTW9kYWwoeyBwb3N0RGF0YSwgYWN0aXZlUG9zdElkLCBvblVwZGF0ZVRpbWVsaW5lLCAuLi5yZXN0IH0pIHtjb25zb2xlLmxvZyhhY3RpdmVQb3N0SWQpXHJcbiAgY29uc3QgZGF0YSA9IHBvc3REYXRhLmZpbHRlcigoZCkgPT4gZC5pZCA9PT0gYWN0aXZlUG9zdElkKVswXTtcclxuICAvLyBjb25zdCB0ZXN0ID0gW107XHJcbiAgLy8gcG9zdERhdGEubWFwKGVsZW1lbnQgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coZWxlbWVudCwgYWN0aXZlUG9zdElkKTtcclxuICAvLyB9KVxyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxXcmFwcGVyQ29tbWVudCBuYXJyb3dfY29udGFpbmVyIHsuLi5yZXN0fT5cclxuICAgICAgPENvbW1lbnRzXHJcbiAgICAgICAgbW9kYWxNb2RlXHJcbiAgICAgICAgaWQ9e2RhdGE/LmlkfVxyXG4gICAgICAgIHR5cGU9e2RhdGE/LnR5cGV9XHJcbiAgICAgICAgb25VcGRhdGVUaW1lbGluZT17b25VcGRhdGVUaW1lbGluZX1cclxuICAgICAgICBkYXRhPXtkYXRhPy5jb21tZW50c31cclxuICAgICAgLz5cclxuICAgIDwvTW9kYWxXcmFwcGVyQ29tbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0TW9kYWwoeyBuYW1lOiAnY29tbWVudE1vZGFsJyB9KShDb21tZW50c01vZGFsKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==