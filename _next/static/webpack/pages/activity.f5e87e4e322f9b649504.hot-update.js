webpackHotUpdate_N_E("pages/activity",{

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
    profilePhoto,
    title
  } = _ref,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children", "showModal", "profilePhoto", "title"]);

  const {
    0: swipe,
    1: setSwipe
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10);
  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    isOpen: showModal,
    style: customStyles,
    className: _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.modal_content_photo,
    shouldCloseOnOverlayClick: true,
    onRequestClose: rest.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.close, _styles_modal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.desktop_close),
    type: "button",
    onClick: rest.onClose,
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
  }, children), __jsx(react_swipeable__WEBPACK_IMPORTED_MODULE_5__["Swipeable"], {
    onSwipedUp: data => {
      if (data.absY > -10) {
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
      lineNumber: 46,
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
      setSwipe(-10);
      setTimeout(() => {
        rest.onClose();
        setSwipe(10);
      }, 1000);
    },
    onTouchStart: () => {
      setSwipe(-10);
      setTimeout(() => {
        rest.onClose();
        setSwipe(10);
      }, 1000);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 72,
      columnNumber: 11
    }
  }))));
}

_s(PhotoModalWrapper, "mvJz6jNl0mCjq33uyTiWNtJfe3o=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vUGhvdG9Nb2RhbFdyYXBwZXIuanMiXSwibmFtZXMiOlsiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQaG90b01vZGFsV3JhcHBlciIsImNoaWxkcmVuIiwic2hvd01vZGFsIiwicHJvZmlsZVBob3RvIiwidGl0bGUiLCJyZXN0Iiwic3dpcGUiLCJzZXRTd2lwZSIsInVzZVN0YXRlIiwic3R5bGVzIiwibW9kYWxfY29udGVudF9waG90byIsIm9uQ2xvc2UiLCJoZWFkZXIiLCJjbGFzc25hbWVzIiwiY2xvc2UiLCJkZXNrdG9wX2Nsb3NlIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJmb250U2l6ZSIsImRhdGEiLCJhYnNZIiwiY29uc29sZSIsImxvZyIsInRleHRBbGlnbiIsIm1vYmlsZV9jbG9zZSIsInN3aXBlSW1hZ2VXcmFwcGVyIiwiY3Vyc29yIiwibWFyZ2luVG9wIiwic2V0VGltZW91dCIsImhlaWdodCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLEVBRFU7QUFFbkJDLFNBQU8sRUFBRTtBQUNQQyxtQkFBZSxFQUFFO0FBRFY7QUFGVSxDQUFyQjtBQU9lLFNBQVNDLGlCQUFULE9BTVo7QUFBQTs7QUFBQSxNQU51QztBQUN4Q0MsWUFEd0M7QUFFeENDLGFBRndDO0FBR3hDQyxnQkFId0M7QUFJeENDO0FBSndDLEdBTXZDO0FBQUEsTUFERUMsSUFDRjs7QUFFRCxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUVBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLFVBQU0sRUFBRU4sU0FEVjtBQUVFLFNBQUssRUFBRU4sWUFGVDtBQUdFLGFBQVMsRUFBRWEsZ0VBQU0sQ0FBQ0MsbUJBSHBCO0FBSUUsNkJBQXlCLE1BSjNCO0FBS0Usa0JBQWMsRUFBRUwsSUFBSSxDQUFDTSxPQUx2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBSyxhQUFTLEVBQUVGLGdFQUFNLENBQUNHLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRUMsaURBQVUsQ0FBQ0osZ0VBQU0sQ0FBQ0ssS0FBUixFQUFlTCxnRUFBTSxDQUFDTSxhQUF0QixDQUE3QjtBQUFtRSxRQUFJLEVBQUMsUUFBeEU7QUFBaUYsV0FBTyxFQUFFVixJQUFJLENBQUNNLE9BQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xLLGtCQUFZLEVBQUUsRUFEVDtBQUVMQyxnQkFBVSxFQUFFLFNBRlA7QUFHTEMsYUFBTyxFQUFFLENBSEo7QUFJTEMsY0FBUSxFQUFFO0FBSkwsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVBGLEVBbUJFO0FBQUssYUFBUyxFQUFFVixnRUFBTSxDQUFDWixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDSSxRQUFqQyxDQW5CRixFQW9CRSxNQUFDLHlEQUFEO0FBQVcsY0FBVSxFQUFHbUIsSUFBRCxJQUFVO0FBQy9CLFVBQUdBLElBQUksQ0FBQ0MsSUFBTCxHQUFZLENBQUMsRUFBaEIsRUFBb0I7QUFDbEJkLGdCQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FGLFlBQUksQ0FBQ00sT0FBTDtBQUNEO0FBQ0YsS0FMRDtBQU1BLFlBQVEsRUFBR1MsSUFBRCxJQUFVRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixDQU5wQjtBQU9BLFNBQUssRUFBRTtBQUFFSSxlQUFTLEVBQUU7QUFBYixLQVBQO0FBUUEsYUFBUyxFQUFFZixnRUFBTSxDQUFDZ0IsWUFSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQUcsYUFBUyxFQUFFaEIsZ0VBQU0sQ0FBQ2lCLGlCQUFyQjtBQUF3QyxTQUFLLEVBQUU7QUFBR0MsWUFBTSxFQUFFLFNBQVg7QUFBc0JDLGVBQVMsRUFBRXRCO0FBQWpDLEtBQS9DO0FBQXlGLE1BQUUsRUFBQyxPQUE1RjtBQUFvRyxXQUFPLEVBQUUsTUFBSztBQUNoSEMsY0FBUSxDQUFDLENBQUMsRUFBRixDQUFSO0FBQ0FzQixnQkFBVSxDQUFDLE1BQU07QUFDZnhCLFlBQUksQ0FBQ00sT0FBTDtBQUNBSixnQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNELE9BSFMsRUFHUCxJQUhPLENBQVY7QUFLRCxLQVBEO0FBUUEsZ0JBQVksRUFBRSxNQUFNO0FBQ2hCQSxjQUFRLENBQUMsQ0FBQyxFQUFGLENBQVI7QUFDQXNCLGdCQUFVLENBQUMsTUFBTTtBQUNmeEIsWUFBSSxDQUFDTSxPQUFMO0FBQ0FKLGdCQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0QsT0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlILEtBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWdCRTtBQUFLLE9BQUcsRUFBQyxZQUFUO0FBQXNCLFNBQUssRUFBRTtBQUFFdUIsWUFBTSxFQUFFLEVBQVY7QUFBY0MsYUFBTyxFQUFFO0FBQXZCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FWRixDQXBCRixDQURGO0FBcUREOztHQS9EdUIvQixpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWN0aXZpdHkuZjVlODdlNGUzMjJmOWI2NDk1MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCwgQ2xvc2VDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbW9kYWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VTd2lwZWFibGUsIFN3aXBlYWJsZSB9IGZyb20gJ3JlYWN0LXN3aXBlYWJsZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gIGNvbnRlbnQ6IHt9LFxyXG4gIG92ZXJsYXk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTAsIDUwLCA1MCwgLjgpJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9Nb2RhbFdyYXBwZXIoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHNob3dNb2RhbCxcclxuICBwcm9maWxlUGhvdG8sXHJcbiAgdGl0bGUsXHJcbiAgLi4ucmVzdFxyXG59KSB7XHJcblxyXG4gIGNvbnN0IFtzd2lwZSwgc2V0U3dpcGVdID0gdXNlU3RhdGUoMTApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0TW9kYWxcclxuICAgICAgaXNPcGVuPXtzaG93TW9kYWx9XHJcbiAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2NvbnRlbnRfcGhvdG99XHJcbiAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2tcclxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e3Jlc3Qub25DbG9zZX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5jbG9zZSwgc3R5bGVzLmRlc2t0b3BfY2xvc2UpfSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cmVzdC5vbkNsb3NlfT5cclxuICAgICAgICAgIDxDbG9zZU91dGxpbmVkIFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjcsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNjYmQ1ZTAnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDI0XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDxTd2lwZWFibGUgb25Td2lwZWRVcD17KGRhdGEpID0+IHtcclxuICAgICAgICBpZihkYXRhLmFic1kgPiAtMTApIHtcclxuICAgICAgICAgIHNldFN3aXBlKDUpO1xyXG4gICAgICAgICAgcmVzdC5vbkNsb3NlKCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfX1cclxuICAgICAgb25Td2lwZWQ9eyhkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKX1cclxuICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVfY2xvc2V9XHJcbiAgICAgID5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zd2lwZUltYWdlV3JhcHBlcn0gc3R5bGU9e3sgIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6IHN3aXBlIH19IGlkPVwic3dpcGVcIiBvbkNsaWNrPXsoKT0+IHtcclxuICAgICAgICAgIHNldFN3aXBlKC0xMCk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVzdC5vbkNsb3NlKCk7XHJcbiAgICAgICAgICAgIHNldFN3aXBlKDEwKTtcclxuICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICBcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uVG91Y2hTdGFydD17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTd2lwZSgtMTApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICByZXN0Lm9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgICBzZXRTd2lwZSgxMCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zd2lwZS5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6IDQwLCBkaXNwbGF5OiAnaW5saW5lJyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvU3dpcGVhYmxlPlxyXG4gICAgPC9SZWFjdE1vZGFsPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==