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
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.close),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJjdXN0b21TdHlsZXMiLCJjb250ZW50Iiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsIk1vZGFsV3JhcHBlckNvbW1lbnQiLCJjaGlsZHJlbiIsIm5hcnJvd19jb250YWluZXIiLCJ0aXRsZSIsInNob3ciLCJoYW5kbGVIaWRlIiwicmVzdCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJtb2RhbF9jb250ZW50IiwibW9kYWxfY29udGVudF9jb21tZW50IiwiaGVhZGVyIiwiY2xvc2UiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUUsRUFEVTtBQUVuQkMsU0FBTyxFQUFFO0FBQ1BDLG1CQUFlLEVBQUU7QUFEVjtBQUZVLENBQXJCO0FBT2UsU0FBU0MsbUJBQVQsT0FPWjtBQUFBLE1BTkRDLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLGdCQUtDLFFBTERBLGdCQUtDO0FBQUEsTUFKREMsS0FJQyxRQUpEQSxLQUlDO0FBQUEsTUFIREMsSUFHQyxRQUhEQSxJQUdDO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsSUFDRjs7QUFDRCxTQUNFLE1BQUMsa0RBQUQ7QUFDRSxVQUFNLEVBQUVGLElBRFY7QUFFRSxTQUFLLEVBQUVSLFlBRlQ7QUFHRSxhQUFTLEVBQUVXLGlEQUFVLENBQ25CQyxnRUFBTSxDQUFDQyxhQURZLEVBRW5CRCxnRUFBTSxDQUFDRSxxQkFGWSxDQUh2QjtBQU9FLDZCQUF5QixNQVAzQjtBQVFFLGtCQUFjLEVBQUVMLFVBUmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRTtBQUFLLGFBQVMsRUFBRUcsZ0VBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFFSixpREFBVSxDQUFDQyxnRUFBTSxDQUFDSSxLQUFSLENBQTdCO0FBQTZDLFFBQUksRUFBQyxRQUFsRDtBQUEyRCxXQUFPLEVBQUVQLFVBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xRLGtCQUFZLEVBQUUsRUFEVDtBQUVMQyxnQkFBVSxFQUFFLFNBRlA7QUFHTEMsYUFBTyxFQUFFLENBSEo7QUFJTEMsY0FBUSxFQUFFO0FBSkwsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVZGLEVBc0JFO0FBQUssYUFBUyxFQUFFUixnRUFBTSxDQUFDWCxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDSSxRQUFqQyxDQXRCRixDQURGO0FBMEJEO0tBbEN1QkQsbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5hMzA2OTNmMjIxNGEyYTVmYTBiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkLCBDbG9zZUNpcmNsZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gIGNvbnRlbnQ6IHt9LFxyXG4gIG92ZXJsYXk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTAsIDUwLCA1MCwgLjgpJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWxXcmFwcGVyQ29tbWVudCh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgbmFycm93X2NvbnRhaW5lcixcclxuICB0aXRsZSxcclxuICBzaG93LFxyXG4gIGhhbmRsZUhpZGUsXHJcbiAgLi4ucmVzdFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdE1vZGFsXHJcbiAgICAgIGlzT3Blbj17c2hvd31cclxuICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgIHN0eWxlcy5tb2RhbF9jb250ZW50LFxyXG4gICAgICAgIHN0eWxlcy5tb2RhbF9jb250ZW50X2NvbW1lbnQsXHJcbiAgICAgICl9XHJcbiAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2tcclxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e2hhbmRsZUhpZGV9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY2xvc2UpfSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlSGlkZX0+XHJcbiAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCBcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDI3LFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjY2JkNWUwJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA3LFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9SZWFjdE1vZGFsPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==