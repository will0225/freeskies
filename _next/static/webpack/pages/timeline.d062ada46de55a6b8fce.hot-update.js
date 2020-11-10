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



var _jsxFileName = "E:\\freeskies_fe_code\\components\\timeline\\CommentsModal.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function CommentsModal(_ref) {
  _s();

  var postData = _ref.postData,
      activePostId = _ref.activePostId,
      onUpdateTimeline = _ref.onUpdateTimeline,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["postData", "activePostId", "onUpdateTimeline"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      id = _useState[0],
      setID = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setID(activePostId);
  }, []);
  console.log(id);
  var data = postData.filter(function (d) {
    return d.id === activePostId;
  })[0];
  console.log(data); // const test = [];
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
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 7
    }
  }));
}

_s(CommentsModal, "slHFzt2YXKiEpY7Er1Y+nAbfubQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1lbGluZS9Db21tZW50c01vZGFsLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzTW9kYWwiLCJwb3N0RGF0YSIsImFjdGl2ZVBvc3RJZCIsIm9uVXBkYXRlVGltZWxpbmUiLCJyZXN0IiwidXNlU3RhdGUiLCJpZCIsInNldElEIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmaWx0ZXIiLCJkIiwidHlwZSIsImNvbW1lbnRzIiwiY29ubmVjdE1vZGFsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BQThFO0FBQUE7O0FBQUEsTUFBckRDLFFBQXFELFFBQXJEQSxRQUFxRDtBQUFBLE1BQTNDQyxZQUEyQyxRQUEzQ0EsWUFBMkM7QUFBQSxNQUE3QkMsZ0JBQTZCLFFBQTdCQSxnQkFBNkI7QUFBQSxNQUFSQyxJQUFROztBQUFBLGtCQUN2REMsc0RBQVEsQ0FBQyxJQUFELENBRCtDO0FBQUEsTUFDckVDLEVBRHFFO0FBQUEsTUFDakVDLEtBRGlFOztBQUc1RUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFNBQUssQ0FBQ0wsWUFBRCxDQUFMO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosRUFBWjtBQUNBLE1BQU1LLElBQUksR0FBR1YsUUFBUSxDQUFDVyxNQUFULENBQWdCLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNQLEVBQUYsS0FBU0osWUFBaEI7QUFBQSxHQUFoQixFQUE4QyxDQUE5QyxDQUFiO0FBQThETyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixFQVBjLENBUTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FDRSxNQUFDLDZFQUFEO0FBQXFCLG9CQUFnQjtBQUFyQyxLQUEwQ1AsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMsaURBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxNQUFFLEVBQUVPLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFTCxFQUZaO0FBR0UsUUFBSSxFQUFFSyxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUcsSUFIZDtBQUlFLG9CQUFnQixFQUFFWCxnQkFKcEI7QUFLRSxRQUFJLEVBQUVRLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFSSxRQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBV0Q7O0dBeEJRZixhOztLQUFBQSxhO0FBMEJNZ0IsK0hBQVksQ0FBQztBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUFELENBQVosQ0FBdUNqQixhQUF2QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpbWVsaW5lLmQwNjJhZGE0NmRlNTVhNmI4ZmNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0TW9kYWwgfSBmcm9tICdyZWR1eC1tb2RhbCc7XHJcbmltcG9ydCBNb2RhbFdyYXBwZXJDb21tZW50IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL01vZGFsV3JhcHBlckNvbW1lbnQnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50c01vZGFsKHsgcG9zdERhdGEsIGFjdGl2ZVBvc3RJZCwgb25VcGRhdGVUaW1lbGluZSwgLi4ucmVzdCB9KSB7XHJcbiAgY29uc3QgW2lkLCBzZXRJRCBdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElEKGFjdGl2ZVBvc3RJZCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnNvbGUubG9nKGlkKTtcclxuICBjb25zdCBkYXRhID0gcG9zdERhdGEuZmlsdGVyKChkKSA9PiBkLmlkID09PSBhY3RpdmVQb3N0SWQpWzBdO2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vIGNvbnN0IHRlc3QgPSBbXTtcclxuICAvLyBwb3N0RGF0YS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhlbGVtZW50LCBhY3RpdmVQb3N0SWQpO1xyXG4gIC8vIH0pXHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFdyYXBwZXJDb21tZW50IG5hcnJvd19jb250YWluZXIgey4uLnJlc3R9PlxyXG4gICAgICA8Q29tbWVudHNcclxuICAgICAgICBtb2RhbE1vZGVcclxuICAgICAgICBpZD17ZGF0YT8uaWR9XHJcbiAgICAgICAgdHlwZT17ZGF0YT8udHlwZX1cclxuICAgICAgICBvblVwZGF0ZVRpbWVsaW5lPXtvblVwZGF0ZVRpbWVsaW5lfVxyXG4gICAgICAgIGRhdGE9e2RhdGE/LmNvbW1lbnRzfVxyXG4gICAgICAvPlxyXG4gICAgPC9Nb2RhbFdyYXBwZXJDb21tZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb2RhbCh7IG5hbWU6ICdjb21tZW50TW9kYWwnIH0pKENvbW1lbnRzTW9kYWwpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9