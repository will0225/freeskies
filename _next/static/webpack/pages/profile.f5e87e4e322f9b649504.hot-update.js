webpackHotUpdate_N_E("pages/profile",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vUGhvdG9Nb2RhbFdyYXBwZXIuanMiXSwibmFtZXMiOlsiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQaG90b01vZGFsV3JhcHBlciIsImNoaWxkcmVuIiwic2hvd01vZGFsIiwicHJvZmlsZVBob3RvIiwidGl0bGUiLCJyZXN0Iiwic3dpcGUiLCJzZXRTd2lwZSIsInVzZVN0YXRlIiwic3R5bGVzIiwibW9kYWxfY29udGVudF9waG90byIsIm9uQ2xvc2UiLCJoZWFkZXIiLCJjbGFzc25hbWVzIiwiY2xvc2UiLCJkZXNrdG9wX2Nsb3NlIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJmb250U2l6ZSIsImRhdGEiLCJhYnNZIiwiY29uc29sZSIsImxvZyIsInRleHRBbGlnbiIsIm1vYmlsZV9jbG9zZSIsInN3aXBlSW1hZ2VXcmFwcGVyIiwiY3Vyc29yIiwibWFyZ2luVG9wIiwic2V0VGltZW91dCIsImhlaWdodCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLEVBRFU7QUFFbkJDLFNBQU8sRUFBRTtBQUNQQyxtQkFBZSxFQUFFO0FBRFY7QUFGVSxDQUFyQjtBQU9lLFNBQVNDLGlCQUFULE9BTVo7QUFBQTs7QUFBQSxNQU51QztBQUN4Q0MsWUFEd0M7QUFFeENDLGFBRndDO0FBR3hDQyxnQkFId0M7QUFJeENDO0FBSndDLEdBTXZDO0FBQUEsTUFERUMsSUFDRjs7QUFFRCxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUVBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLFVBQU0sRUFBRU4sU0FEVjtBQUVFLFNBQUssRUFBRU4sWUFGVDtBQUdFLGFBQVMsRUFBRWEsZ0VBQU0sQ0FBQ0MsbUJBSHBCO0FBSUUsNkJBQXlCLE1BSjNCO0FBS0Usa0JBQWMsRUFBRUwsSUFBSSxDQUFDTSxPQUx2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBSyxhQUFTLEVBQUVGLGdFQUFNLENBQUNHLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBRUMsaURBQVUsQ0FBQ0osZ0VBQU0sQ0FBQ0ssS0FBUixFQUFlTCxnRUFBTSxDQUFDTSxhQUF0QixDQUE3QjtBQUFtRSxRQUFJLEVBQUMsUUFBeEU7QUFBaUYsV0FBTyxFQUFFVixJQUFJLENBQUNNLE9BQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xLLGtCQUFZLEVBQUUsRUFEVDtBQUVMQyxnQkFBVSxFQUFFLFNBRlA7QUFHTEMsYUFBTyxFQUFFLENBSEo7QUFJTEMsY0FBUSxFQUFFO0FBSkwsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVBGLEVBbUJFO0FBQUssYUFBUyxFQUFFVixnRUFBTSxDQUFDWixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDSSxRQUFqQyxDQW5CRixFQW9CRSxNQUFDLHlEQUFEO0FBQVcsY0FBVSxFQUFHbUIsSUFBRCxJQUFVO0FBQy9CLFVBQUdBLElBQUksQ0FBQ0MsSUFBTCxHQUFZLENBQUMsRUFBaEIsRUFBb0I7QUFDbEJkLGdCQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FGLFlBQUksQ0FBQ00sT0FBTDtBQUNEO0FBQ0YsS0FMRDtBQU1BLFlBQVEsRUFBR1MsSUFBRCxJQUFVRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixDQU5wQjtBQU9BLFNBQUssRUFBRTtBQUFFSSxlQUFTLEVBQUU7QUFBYixLQVBQO0FBUUEsYUFBUyxFQUFFZixnRUFBTSxDQUFDZ0IsWUFSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQUcsYUFBUyxFQUFFaEIsZ0VBQU0sQ0FBQ2lCLGlCQUFyQjtBQUF3QyxTQUFLLEVBQUU7QUFBR0MsWUFBTSxFQUFFLFNBQVg7QUFBc0JDLGVBQVMsRUFBRXRCO0FBQWpDLEtBQS9DO0FBQXlGLE1BQUUsRUFBQyxPQUE1RjtBQUFvRyxXQUFPLEVBQUUsTUFBSztBQUNoSEMsY0FBUSxDQUFDLENBQUMsRUFBRixDQUFSO0FBQ0FzQixnQkFBVSxDQUFDLE1BQU07QUFDZnhCLFlBQUksQ0FBQ00sT0FBTDtBQUNBSixnQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNELE9BSFMsRUFHUCxJQUhPLENBQVY7QUFLRCxLQVBEO0FBUUEsZ0JBQVksRUFBRSxNQUFNO0FBQ2hCQSxjQUFRLENBQUMsQ0FBQyxFQUFGLENBQVI7QUFDQXNCLGdCQUFVLENBQUMsTUFBTTtBQUNmeEIsWUFBSSxDQUFDTSxPQUFMO0FBQ0FKLGdCQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0QsT0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlILEtBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWdCRTtBQUFLLE9BQUcsRUFBQyxZQUFUO0FBQXNCLFNBQUssRUFBRTtBQUFFdUIsWUFBTSxFQUFFLEVBQVY7QUFBY0MsYUFBTyxFQUFFO0FBQXZCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FWRixDQXBCRixDQURGO0FBcUREOztHQS9EdUIvQixpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5mNWU4N2U0ZTMyMmY5YjY0OTUwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkLCBDbG9zZUNpcmNsZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9tb2RhbC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZVN3aXBlYWJsZSwgU3dpcGVhYmxlIH0gZnJvbSAncmVhY3Qtc3dpcGVhYmxlJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgY29udGVudDoge30sXHJcbiAgb3ZlcmxheToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1MCwgNTAsIDUwLCAuOCknLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b01vZGFsV3JhcHBlcih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgc2hvd01vZGFsLFxyXG4gIHByb2ZpbGVQaG90byxcclxuICB0aXRsZSxcclxuICAuLi5yZXN0XHJcbn0pIHtcclxuXHJcbiAgY29uc3QgW3N3aXBlLCBzZXRTd2lwZV0gPSB1c2VTdGF0ZSgxMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3RNb2RhbFxyXG4gICAgICBpc09wZW49e3Nob3dNb2RhbH1cclxuICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfY29udGVudF9waG90b31cclxuICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja1xyXG4gICAgICBvblJlcXVlc3RDbG9zZT17cmVzdC5vbkNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNsb3NlLCBzdHlsZXMuZGVza3RvcF9jbG9zZSl9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZXN0Lm9uQ2xvc2V9PlxyXG4gICAgICAgICAgPENsb3NlT3V0bGluZWQgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2NiZDVlMCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMjRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPFN3aXBlYWJsZSBvblN3aXBlZFVwPXsoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmKGRhdGEuYWJzWSA+IC0xMCkge1xyXG4gICAgICAgICAgc2V0U3dpcGUoNSk7XHJcbiAgICAgICAgICByZXN0Lm9uQ2xvc2UoKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9fVxyXG4gICAgICBvblN3aXBlZD17KGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpfVxyXG4gICAgICBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZV9jbG9zZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN3aXBlSW1hZ2VXcmFwcGVyfSBzdHlsZT17eyAgY3Vyc29yOiAncG9pbnRlcicsIG1hcmdpblRvcDogc3dpcGUgfX0gaWQ9XCJzd2lwZVwiIG9uQ2xpY2s9eygpPT4ge1xyXG4gICAgICAgICAgc2V0U3dpcGUoLTEwKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXN0Lm9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgc2V0U3dpcGUoMTApO1xyXG4gICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgIFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Ub3VjaFN0YXJ0PXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN3aXBlKC0xMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc3Qub25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgIHNldFN3aXBlKDEwKTtcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N3aXBlLnBuZ1wiIHN0eWxlPXt7IGhlaWdodDogNDAsIGRpc3BsYXk6ICdpbmxpbmUnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9Td2lwZWFibGU+XHJcbiAgICA8L1JlYWN0TW9kYWw+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9