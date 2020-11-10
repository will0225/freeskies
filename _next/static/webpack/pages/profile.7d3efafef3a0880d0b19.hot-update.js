webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/common/ModalWrapper.js":
/*!*******************************************!*\
  !*** ./components/common/ModalWrapper.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalWrapper; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/modal.module.scss */ "./components/common/styles/modal.module.scss");
/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "E:\\freeskies_fe_code\\components\\common\\ModalWrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




react_modal__WEBPACK_IMPORTED_MODULE_3___default.a.setAppElement('#modal_place');
var customStyles = {
  content: {// width: '50%',
    // left: '0',
    // right: '0',
    // margin: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(50, 50, 50, .8)'
  }
};
function ModalWrapper(_ref) {
  var children = _ref.children,
      showModal = _ref.showModal,
      narrow_container = _ref.narrow_container,
      title = _ref.title,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "showModal", "narrow_container", "title"]);

  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
    isOpen: showModal,
    style: customStyles,
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.modal_content, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.narrow, narrow_container)),
    shouldCloseOnOverlayClick: true,
    onRequestClose: rest.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("p", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, title)), __jsx("button", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.close,
    type: "button",
    onClick: rest.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CloseOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, children));
}
_c = ModalWrapper;

var _c;

$RefreshReg$(_c, "ModalWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTW9kYWxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0TW9kYWwiLCJzZXRBcHBFbGVtZW50IiwiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNb2RhbFdyYXBwZXIiLCJjaGlsZHJlbiIsInNob3dNb2RhbCIsIm5hcnJvd19jb250YWluZXIiLCJ0aXRsZSIsInJlc3QiLCJjbGFzc25hbWVzIiwic3R5bGVzIiwibW9kYWxfY29udGVudCIsIm5hcnJvdyIsIm9uQ2xvc2UiLCJoZWFkZXIiLCJjb2xvciIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsa0RBQVUsQ0FBQ0MsYUFBWCxDQUF5QixjQUF6QjtBQUVBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLENBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFKTyxHQURVO0FBT25CQyxTQUFPLEVBQUU7QUFDUEMsbUJBQWUsRUFBRTtBQURWO0FBUFUsQ0FBckI7QUFZZSxTQUFTQyxZQUFULE9BTVo7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFBQSxNQUpEQyxTQUlDLFFBSkRBLFNBSUM7QUFBQSxNQUhEQyxnQkFHQyxRQUhEQSxnQkFHQztBQUFBLE1BRkRDLEtBRUMsUUFGREEsS0FFQztBQUFBLE1BREVDLElBQ0Y7O0FBQ0QsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsVUFBTSxFQUFFSCxTQURWO0FBRUUsU0FBSyxFQUFFTixZQUZUO0FBR0UsYUFBUyxFQUFFVSxpREFBVSxDQUFDQyxnRUFBTSxDQUFDQyxhQUFSLGdHQUNsQkQsZ0VBQU0sQ0FBQ0UsTUFEVyxFQUNGTixnQkFERSxFQUh2QjtBQU1FLDZCQUF5QixNQU4zQjtBQU9FLGtCQUFjLEVBQUVFLElBQUksQ0FBQ0ssT0FQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQUssYUFBUyxFQUFFSCxnRUFBTSxDQUFDSSxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVKLGdFQUFNLENBQUNILEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFNBQUssRUFBRTtBQUFFUSxXQUFLLEVBQUc7QUFBVixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JSLEtBQS9CLENBREYsQ0FERixFQUlFO0FBQVEsYUFBUyxFQUFFRyxnRUFBTSxDQUFDTSxLQUExQjtBQUFpQyxRQUFJLEVBQUMsUUFBdEM7QUFBK0MsV0FBTyxFQUFFUixJQUFJLENBQUNLLE9BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBVEYsRUFpQkU7QUFBSyxhQUFTLEVBQUVILGdFQUFNLENBQUNWLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNJLFFBQWpDLENBakJGLENBREY7QUFxQkQ7S0E1QnVCRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuN2QzZWZhZmVmM2EwODgwZDBiMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCwgQ2xvc2VDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcblJlYWN0TW9kYWwuc2V0QXBwRWxlbWVudCgnI21vZGFsX3BsYWNlJyk7XHJcblxyXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgY29udGVudDoge1xyXG4gICAgLy8gd2lkdGg6ICc1MCUnLFxyXG4gICAgLy8gbGVmdDogJzAnLFxyXG4gICAgLy8gcmlnaHQ6ICcwJyxcclxuICAgIC8vIG1hcmdpbjogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgb3ZlcmxheToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1MCwgNTAsIDUwLCAuOCknLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbFdyYXBwZXIoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHNob3dNb2RhbCxcclxuICBuYXJyb3dfY29udGFpbmVyLFxyXG4gIHRpdGxlLFxyXG4gIC4uLnJlc3RcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3RNb2RhbFxyXG4gICAgICBpc09wZW49e3Nob3dNb2RhbH1cclxuICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5tb2RhbF9jb250ZW50LCB7XHJcbiAgICAgICAgW3N0eWxlcy5uYXJyb3ddOiBuYXJyb3dfY29udGFpbmVyLFxyXG4gICAgICB9KX1cclxuICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja1xyXG4gICAgICBvblJlcXVlc3RDbG9zZT17cmVzdC5vbkNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvciA6ICd3aGl0ZSd9fT57dGl0bGV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZXN0Lm9uQ2xvc2V9PlxyXG4gICAgICAgICAgPENsb3NlT3V0bGluZWQgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9SZWFjdE1vZGFsPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==