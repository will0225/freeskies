webpackHotUpdate_N_E("pages/timeline",{

/***/ "./components/common/PhotoModalWrapper.js":
/*!************************************************!*\
  !*** ./components/common/PhotoModalWrapper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoModalWrapper; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/modal.module.scss */ "./components/common/styles/modal.module.scss");
/* harmony import */ var _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "E:\\freeskies_fe_code\\components\\common\\PhotoModalWrapper.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const customStyles = {
  content: {},
  overlay: {
    backgroundColor: 'rgba(50, 50, 50, .8)'
  }
};
function PhotoModalWrapper(_ref) {
  _s();

  let {
    children,
    showModal,
    title
  } = _ref,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children", "showModal", "title"]);

  const {
    0: swipe,
    1: setSwipe
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(30);
  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    isOpen: showModal,
    style: customStyles,
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.modal_content_photo,
    shouldCloseOnOverlayClick: true,
    onRequestClose: rest.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.close, _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.desktop_close),
    type: "button",
    onClick: rest.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CloseOutlined"], {
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
      lineNumber: 37,
      columnNumber: 7
    }
  }, children), __jsx(react_swipeable__WEBPACK_IMPORTED_MODULE_5__["Swipeable"], {
    onSwipedUp: data => {
      if (data.absY > 10) {
        setSwipe(5);
        rest.onClose();
      }
    },
    onSwiped: data => console.log(data),
    style: {
      textAlign: 'center'
    },
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mobile_close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.swipeImageWrapper,
    style: {
      cursor: 'pointer',
      marginTop: swipe
    },
    id: "swipe",
    onClick: () => {
      setSwipe(5);
      rest.onClose();
    },
    onTouchStart: () => {
      setSwipe(5);
      rest.onClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/swipe.png",
    style: {
      height: 40,
      display: 'inline'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }))));
}

_s(PhotoModalWrapper, "+q/PjkDENW7WfN2A8Z8xA6qfabk=");

_c = PhotoModalWrapper;

var _c;

$RefreshReg$(_c, "PhotoModalWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vUGhvdG9Nb2RhbFdyYXBwZXIuanMiXSwibmFtZXMiOlsiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQaG90b01vZGFsV3JhcHBlciIsImNoaWxkcmVuIiwic2hvd01vZGFsIiwidGl0bGUiLCJyZXN0Iiwic3dpcGUiLCJzZXRTd2lwZSIsInVzZVN0YXRlIiwic3R5bGVzIiwibW9kYWxfY29udGVudF9waG90byIsIm9uQ2xvc2UiLCJoZWFkZXIiLCJjbGFzc25hbWVzIiwiY2xvc2UiLCJkZXNrdG9wX2Nsb3NlIiwiZGF0YSIsImFic1kiLCJjb25zb2xlIiwibG9nIiwidGV4dEFsaWduIiwibW9iaWxlX2Nsb3NlIiwic3dpcGVJbWFnZVdyYXBwZXIiLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJoZWlnaHQiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxFQURVO0FBRW5CQyxTQUFPLEVBQUU7QUFDUEMsbUJBQWUsRUFBRTtBQURWO0FBRlUsQ0FBckI7QUFPZSxTQUFTQyxpQkFBVCxPQUtaO0FBQUE7O0FBQUEsTUFMdUM7QUFDeENDLFlBRHdDO0FBRXhDQyxhQUZ3QztBQUd4Q0M7QUFId0MsR0FLdkM7QUFBQSxNQURFQyxJQUNGOztBQUVELFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBRUEsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsVUFBTSxFQUFFTCxTQURWO0FBRUUsU0FBSyxFQUFFTixZQUZUO0FBR0UsYUFBUyxFQUFFWSxnRUFBTSxDQUFDQyxtQkFIcEI7QUFJRSw2QkFBeUIsTUFKM0I7QUFLRSxrQkFBYyxFQUFFTCxJQUFJLENBQUNNLE9BTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFLLGFBQVMsRUFBRUYsZ0VBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFFQyxpREFBVSxDQUFDSixnRUFBTSxDQUFDSyxLQUFSLEVBQWVMLGdFQUFNLENBQUNNLGFBQXRCLENBQTdCO0FBQW1FLFFBQUksRUFBQyxRQUF4RTtBQUFpRixXQUFPLEVBQUVWLElBQUksQ0FBQ00sT0FBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FQRixFQVlFO0FBQUssYUFBUyxFQUFFRixnRUFBTSxDQUFDWCxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDSSxRQUFqQyxDQVpGLEVBYUUsTUFBQyx5REFBRDtBQUFXLGNBQVUsRUFBR2MsSUFBRCxJQUFVO0FBQy9CLFVBQUdBLElBQUksQ0FBQ0MsSUFBTCxHQUFZLEVBQWYsRUFBbUI7QUFDakJWLGdCQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FGLFlBQUksQ0FBQ00sT0FBTDtBQUNEO0FBQ0YsS0FMRDtBQU1BLFlBQVEsRUFBR0ssSUFBRCxJQUFVRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixDQU5wQjtBQU9BLFNBQUssRUFBRTtBQUFFSSxlQUFTLEVBQUU7QUFBYixLQVBQO0FBUUEsYUFBUyxFQUFFWCxnRUFBTSxDQUFDWSxZQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUU7QUFBRyxhQUFTLEVBQUVaLGdFQUFNLENBQUNhLGlCQUFyQjtBQUF3QyxTQUFLLEVBQUU7QUFBR0MsWUFBTSxFQUFFLFNBQVg7QUFBc0JDLGVBQVMsRUFBRWxCO0FBQWpDLEtBQS9DO0FBQXlGLE1BQUUsRUFBQyxPQUE1RjtBQUFvRyxXQUFPLEVBQUUsTUFBSztBQUNoSEMsY0FBUSxDQUFDLENBQUQsQ0FBUjtBQUNBRixVQUFJLENBQUNNLE9BQUw7QUFDRCxLQUhEO0FBSUEsZ0JBQVksRUFBRSxNQUFNO0FBQ2hCSixjQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FGLFVBQUksQ0FBQ00sT0FBTDtBQUNILEtBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQUssT0FBRyxFQUFDLFlBQVQ7QUFBc0IsU0FBSyxFQUFFO0FBQUVjLFlBQU0sRUFBRSxFQUFWO0FBQWNDLGFBQU8sRUFBRTtBQUF2QixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FWRixDQWJGLENBREY7QUF1Q0Q7O0dBaER1QnpCLGlCOztLQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aW1lbGluZS41YmYyYjhjZTZjMjU3NjI2YmUzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkLCBDbG9zZUNpcmNsZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZVN3aXBlYWJsZSwgU3dpcGVhYmxlIH0gZnJvbSAncmVhY3Qtc3dpcGVhYmxlJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgY29udGVudDoge30sXHJcbiAgb3ZlcmxheToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1MCwgNTAsIDUwLCAuOCknLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b01vZGFsV3JhcHBlcih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgc2hvd01vZGFsLFxyXG4gIHRpdGxlLFxyXG4gIC4uLnJlc3RcclxufSkge1xyXG5cclxuICBjb25zdCBbc3dpcGUsIHNldFN3aXBlXSA9IHVzZVN0YXRlKDMwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdE1vZGFsXHJcbiAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxyXG4gICAgICBzdHlsZT17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9jb250ZW50X3Bob3RvfVxyXG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrXHJcbiAgICAgIG9uUmVxdWVzdENsb3NlPXtyZXN0Lm9uQ2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY2xvc2UsIHN0eWxlcy5kZXNrdG9wX2Nsb3NlKX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Jlc3Qub25DbG9zZX0+XHJcbiAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDxTd2lwZWFibGUgb25Td2lwZWRVcD17KGRhdGEpID0+IHtcclxuICAgICAgICBpZihkYXRhLmFic1kgPiAxMCkge1xyXG4gICAgICAgICAgc2V0U3dpcGUoNSk7XHJcbiAgICAgICAgICByZXN0Lm9uQ2xvc2UoKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9fVxyXG4gICAgICBvblN3aXBlZD17KGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpfVxyXG4gICAgICBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZV9jbG9zZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN3aXBlSW1hZ2VXcmFwcGVyfSBzdHlsZT17eyAgY3Vyc29yOiAncG9pbnRlcicsIG1hcmdpblRvcDogc3dpcGUgfX0gaWQ9XCJzd2lwZVwiIG9uQ2xpY2s9eygpPT4ge1xyXG4gICAgICAgICAgc2V0U3dpcGUoNSk7XHJcbiAgICAgICAgICByZXN0Lm9uQ2xvc2UoKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uVG91Y2hTdGFydD17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTd2lwZSg1KTtcclxuICAgICAgICAgICAgcmVzdC5vbkNsb3NlKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zd2lwZS5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6IDQwLCBkaXNwbGF5OiAnaW5saW5lJyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvU3dpcGVhYmxlPlxyXG4gICAgPC9SZWFjdE1vZGFsPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==