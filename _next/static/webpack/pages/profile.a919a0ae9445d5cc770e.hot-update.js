webpackHotUpdate_N_E("pages/profile",{

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
    backgroundColor: 'rgba(50, 50, 50, .8)'
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
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.close, _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.desktop_close),
    type: "button",
    onClick: handleHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJjdXN0b21TdHlsZXMiLCJjb250ZW50Iiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsIk1vZGFsV3JhcHBlckNvbW1lbnQiLCJjaGlsZHJlbiIsIm5hcnJvd19jb250YWluZXIiLCJ0aXRsZSIsInNob3ciLCJoYW5kbGVIaWRlIiwicmVzdCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJtb2RhbF9jb250ZW50IiwibW9kYWxfY29udGVudF9jb21tZW50IiwiaGVhZGVyIiwiY2xvc2UiLCJkZXNrdG9wX2Nsb3NlIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLEVBRFU7QUFFbkJDLFNBQU8sRUFBRTtBQUNQQyxtQkFBZSxFQUFFO0FBRFY7QUFGVSxDQUFyQjtBQU9lLFNBQVNDLG1CQUFULE9BT1o7QUFBQSxNQU5EQyxRQU1DLFFBTkRBLFFBTUM7QUFBQSxNQUxEQyxnQkFLQyxRQUxEQSxnQkFLQztBQUFBLE1BSkRDLEtBSUMsUUFKREEsS0FJQztBQUFBLE1BSERDLElBR0MsUUFIREEsSUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLElBQ0Y7O0FBQ0QsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsVUFBTSxFQUFFRixJQURWO0FBRUUsU0FBSyxFQUFFUixZQUZUO0FBR0UsYUFBUyxFQUFFVyxpREFBVSxDQUNuQkMsZ0VBQU0sQ0FBQ0MsYUFEWSxFQUVuQkQsZ0VBQU0sQ0FBQ0UscUJBRlksQ0FIdkI7QUFPRSw2QkFBeUIsTUFQM0I7QUFRRSxrQkFBYyxFQUFFTCxVQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUU7QUFBSyxhQUFTLEVBQUVHLGdFQUFNLENBQUNHLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRUosaURBQVUsQ0FBQ0MsZ0VBQU0sQ0FBQ0ksS0FBUixFQUFlSixnRUFBTSxDQUFDSyxhQUF0QixDQUE3QjtBQUFtRSxRQUFJLEVBQUMsUUFBeEU7QUFBaUYsV0FBTyxFQUFFUixVQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUNFLFNBQUssRUFBRTtBQUNMUyxrQkFBWSxFQUFFLEVBRFQ7QUFFTEMsZ0JBQVUsRUFBRSxTQUZQO0FBR0xDLGFBQU8sRUFBRSxDQUhKO0FBSUxDLGNBQVEsRUFBRTtBQUpMLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FWRixFQXNCRTtBQUFLLGFBQVMsRUFBRVQsZ0VBQU0sQ0FBQ1gsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQ0ksUUFBakMsQ0F0QkYsQ0FERjtBQTBCRDtLQWxDdUJELG1CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuYTkxOWEwYWU5NDQ1ZDVjYzc3MGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCwgQ2xvc2VDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICBjb250ZW50OiB7fSxcclxuICBvdmVybGF5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDUwLCA1MCwgNTAsIC44KScsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsV3JhcHBlckNvbW1lbnQoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIG5hcnJvd19jb250YWluZXIsXHJcbiAgdGl0bGUsXHJcbiAgc2hvdyxcclxuICBoYW5kbGVIaWRlLFxyXG4gIC4uLnJlc3RcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3RNb2RhbFxyXG4gICAgICBpc09wZW49e3Nob3d9XHJcbiAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICBzdHlsZXMubW9kYWxfY29udGVudCxcclxuICAgICAgICBzdHlsZXMubW9kYWxfY29udGVudF9jb21tZW50LFxyXG4gICAgICApfVxyXG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrXHJcbiAgICAgIG9uUmVxdWVzdENsb3NlPXtoYW5kbGVIaWRlfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNsb3NlLCBzdHlsZXMuZGVza3RvcF9jbG9zZSl9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVIaWRlfT5cclxuICAgICAgICAgIDxDbG9zZU91dGxpbmVkIFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjcsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNjYmQ1ZTAnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDI0XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L1JlYWN0TW9kYWw+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9