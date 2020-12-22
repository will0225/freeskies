webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/common/ModalWrapperComment.js":
/*!**************************************************!*\
  !*** ./components/common/ModalWrapperComment.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalWrapperComment; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/modal.module.scss */ "./components/common/styles/modal.module.scss");
/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Freeskies-development-\\components\\common\\ModalWrapperComment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var customStyles = {
  content: {},
  overlay: {
    backgroundColor: 'rgba(50, 50, 50, .8)',
    inset: 'unset'
  }
};
function ModalWrapperComment(_ref) {
  var children = _ref.children,
      narrow_container = _ref.narrow_container,
      title = _ref.title,
      show = _ref.show,
      handleHide = _ref.handleHide,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children", "narrow_container", "title", "show", "handleHide"]);

  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    isOpen: show,
    style: customStyles,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.modal_content, _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.modal_content_comment),
    shouldCloseOnOverlayClick: true,
    onRequestClose: handleHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.close),
    type: "button",
    onClick: handleHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CloseOutlined"], {
    style: {
      borderRadius: 27,
      background: '#cbd5e0',
      padding: 7,
      fontSize: 24
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, children));
}
_c = ModalWrapperComment;

var _c;

$RefreshReg$(_c, "ModalWrapperComment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJjdXN0b21TdHlsZXMiLCJjb250ZW50Iiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsImluc2V0IiwiTW9kYWxXcmFwcGVyQ29tbWVudCIsImNoaWxkcmVuIiwibmFycm93X2NvbnRhaW5lciIsInRpdGxlIiwic2hvdyIsImhhbmRsZUhpZGUiLCJyZXN0IiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsIm1vZGFsX2NvbnRlbnQiLCJtb2RhbF9jb250ZW50X2NvbW1lbnQiLCJoZWFkZXIiLCJjbG9zZSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxFQURVO0FBRW5CQyxTQUFPLEVBQUU7QUFDUEMsbUJBQWUsRUFBRSxzQkFEVjtBQUVQQyxTQUFLLEVBQUU7QUFGQTtBQUZVLENBQXJCO0FBUWUsU0FBU0MsbUJBQVQsT0FPWjtBQUFBLE1BTkRDLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLGdCQUtDLFFBTERBLGdCQUtDO0FBQUEsTUFKREMsS0FJQyxRQUpEQSxLQUlDO0FBQUEsTUFIREMsSUFHQyxRQUhEQSxJQUdDO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsSUFDRjs7QUFDRCxTQUNFLE1BQUMsa0RBQUQ7QUFDRSxVQUFNLEVBQUVGLElBRFY7QUFFRSxTQUFLLEVBQUVULFlBRlQ7QUFHRSxhQUFTLEVBQUVZLGlEQUFVLENBQ25CQyxnRUFBTSxDQUFDQyxhQURZLEVBRW5CRCxnRUFBTSxDQUFDRSxxQkFGWSxDQUh2QjtBQU9FLDZCQUF5QixNQVAzQjtBQVFFLGtCQUFjLEVBQUVMLFVBUmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRTtBQUFLLGFBQVMsRUFBRUcsZ0VBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFFSixpREFBVSxDQUFDQyxnRUFBTSxDQUFDSSxLQUFSLENBQTdCO0FBQTZDLFFBQUksRUFBQyxRQUFsRDtBQUEyRCxXQUFPLEVBQUVQLFVBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xRLGtCQUFZLEVBQUUsRUFEVDtBQUVMQyxnQkFBVSxFQUFFLFNBRlA7QUFHTEMsYUFBTyxFQUFFLENBSEo7QUFJTEMsY0FBUSxFQUFFO0FBSkwsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVZGLEVBc0JFO0FBQUssYUFBUyxFQUFFUixnRUFBTSxDQUFDWixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDSyxRQUFqQyxDQXRCRixDQURGO0FBMEJEO0tBbEN1QkQsbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGltZWxpbmUuODc5ZTFlMjA1ZDE5NGI5ZWZiMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCwgQ2xvc2VDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICBjb250ZW50OiB7fSxcclxuICBvdmVybGF5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDUwLCA1MCwgNTAsIC44KScsXHJcbiAgICBpbnNldDogJ3Vuc2V0J1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbFdyYXBwZXJDb21tZW50KHtcclxuICBjaGlsZHJlbixcclxuICBuYXJyb3dfY29udGFpbmVyLFxyXG4gIHRpdGxlLFxyXG4gIHNob3csXHJcbiAgaGFuZGxlSGlkZSxcclxuICAuLi5yZXN0XHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0TW9kYWxcclxuICAgICAgaXNPcGVuPXtzaG93fVxyXG4gICAgICBzdHlsZT17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgc3R5bGVzLm1vZGFsX2NvbnRlbnQsXHJcbiAgICAgICAgc3R5bGVzLm1vZGFsX2NvbnRlbnRfY29tbWVudCxcclxuICAgICAgKX1cclxuICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja1xyXG4gICAgICBvblJlcXVlc3RDbG9zZT17aGFuZGxlSGlkZX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jbG9zZSl9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVIaWRlfT5cclxuICAgICAgICAgIDxDbG9zZU91dGxpbmVkIFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjcsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNjYmQ1ZTAnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDI0XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L1JlYWN0TW9kYWw+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9